"use strict";
n.d(t, { EL: () => d, PJ: () => o, xW: () => _, zF: () => c }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n(728458),
    o = (function (e) {
        return (e.ROOT = "root"), (e.FOLDER = "folder"), (e.GUILD = "guild"), e;
    })({});
function l() {
    return Math.floor(0x100000000 * Math.random());
}
let u = 0;
class c {
    root;
    nodes;
    version;
    constructor() {
        (this.root = { type: "root", children: [] }), (this.nodes = {}), (this.version = 0);
    }
    getSnapshot() {
        let e = {};
        for (let t in this.nodes) {
            let n = this.nodes[t];
            e[t] = { ...n, children: void 0, childrenIds: n.children.map((e) => e.id) };
        }
        return { rootChildrenIds: this.root.children.map((e) => e.id), nodes: e };
    }
    loadSnapshot(e) {
        u++;
        let t = null,
            n = [];
        try {
            for (let r in ((this.nodes = e.nodes), this.nodes)) {
                let e = this.nodes[r];
                n.push(r), (t = e), (e.children = e.childrenIds.map((e) => this.nodes[e])), delete e.childrenIds;
            }
            (this.root.children = e.rootChildrenIds.map((e) => this.nodes[e])), this.version++;
        } catch (e) {
            throw (
                (a.A.addBreadcrumb({
                    message: "GuildTree snapshot load failed",
                    data: { numSnapshotsLoaded: u, currentNode: t, nodesIterated: n },
                }),
                e)
            );
        }
    }
    moveNextTo(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._pluckNode(e);
        let r = null != t.parentId ? this.nodes[t.parentId] : this.root,
            s = r.children.indexOf(t);
        i()(
            "folder" !== e.type || "folder" !== r.type,
            `[GUILDS TREE] Tried moving a folder (${e.id}) inside of another folder (${r.id})`,
        ),
            i()(
                s >= 0,
                `[GUILDS TREE] target node (${t.id}) did not exist within its specified parent (${t.parentId})`,
            );
        let a = +!!n;
        return (
            (r.children = [...r.children]), r.children.splice(s + a, 0, e), (e.parentId = r.id), this.version++, this
        );
    }
    moveInto(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this._pluckNode(e);
        let r = n ? t.children.length : 0;
        return (t.children = [...t.children]), t.children.splice(r, 0, e), (e.parentId = t.id), this.version++, this;
    }
    addNode(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return (
            i()("root" !== e.type, "[GUILDS TREE] Tried adding another root node into the tree"),
            i()(null != e.id, "[GUILDS TREE] Tried adding a node without an id"),
            i()(null == this.nodes[e.id], `[GUILDS TREE] Tried adding a node that already exists (${e.id})`),
            (this.nodes[e.id] = e),
            this.version++,
            this.moveInto(e, t, n)
        );
    }
    removeNode(e) {
        return (
            i()(e !== this.root, "[GUILDS TREE] Tried removing the root node from the tree"),
            i()(null != e.id, "[GUILDS TREE] Tried removing a node without an id"),
            this._pluckNode(e),
            (e.parentId = void 0),
            delete this.nodes[e.id],
            this.version++,
            this
        );
    }
    replaceNode(e, t) {
        i()(null != e.id, "[GUILDS TREE] Tried replacing a node without an id"),
            i()(null != t.id, "[GUILDS TREE] Tried replacing a node with one that does not have an id");
        let n = null != e.parentId ? this.nodes[e.parentId] : this.root,
            r = n.children.indexOf(e);
        return (
            i()(
                r >= 0,
                `[GUILDS TREE] existing node (${e.id}) did not exist within its specified parent (${e.parentId})`,
            ),
            (n.children = [...n.children]),
            n.children.splice(r, 1, t),
            (t.parentId = n.id),
            (e.parentId = void 0),
            delete this.nodes[e.id],
            (this.nodes[t.id] = t),
            this.version++,
            this
        );
    }
    cloneNode(e) {
        return (0, s.clone)(e);
    }
    convertToFolder(e) {
        let t = l();
        for (; null != this.getNode(t); ) t = l();
        let n = { type: "folder", id: t, expanded: !1, children: [] };
        return this.replaceNode(e, n), this.removeNode(e), this.addNode(e, n, !1), this.version++, n;
    }
    allNodes() {
        return Object.values(this.nodes);
    }
    getNode(e) {
        return this.nodes[e];
    }
    getRoots() {
        return this.root.children;
    }
    get size() {
        return this.allNodes().length;
    }
    sortedGuildNodes() {
        function e(t) {
            return "guild" === t.type ? [t] : null == t.children ? [] : t.children.map((t) => e(t)).flat();
        }
        return e(this.root);
    }
    _pluckNode(e) {
        let t = null != e.parentId ? this.nodes[e.parentId] : this.root;
        i()(
            null != t,
            `[GUILDS TREE] source node (${e.id}) had a parent id (${e.parentId}) which doesn't exist in the tree`,
        );
        let n = t.children;
        i()(
            null != n,
            `[GUILDS TREE] source node (${e.id}) had a parent id (${e.parentId}) which contains no children`,
        ),
            (t.children = n.filter((t) => t !== e)),
            (e.parentId = void 0),
            this.version++;
    }
}
function d(e, t) {
    return { type: "guild", id: e, parentId: t, children: [], unavailable: !1 };
}
function _(e, t, n) {
    return {
        type: "folder",
        id: e.folderId,
        parentId: t,
        name: e.folderName ?? void 0,
        color: e.folderColor ?? void 0,
        expanded: null != n ? n : (e.expanded ?? !1),
        children: [],
    };
}
