"use strict";
n.d(t, { EL: () => c, PJ: () => o, xW: () => d, zF: () => u });
var i,
    r = n(284009),
    s = n.n(r),
    a = n(735438),
    o = (((i = {}).ROOT = "root"), (i.FOLDER = "folder"), (i.GUILD = "guild"), i);
function l() {
    return Math.floor(0x100000000 * Math.random());
}
class u {
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
        for (let t in ((this.nodes = e.nodes), this.nodes)) {
            let e = this.nodes[t];
            "childrenIds" in e && ((e.children = e.childrenIds.map((e) => this.nodes[e])), delete e.childrenIds);
        }
        (this.root.children = e.rootChildrenIds.map((e) => this.nodes[e])), this.version++;
    }
    moveNextTo(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._pluckNode(e);
        let i = null != t.parentId ? this.nodes[t.parentId] : this.root,
            r = i.children.indexOf(t);
        return (
            s()(
                "folder" !== e.type || "folder" !== i.type,
                `[GUILDS TREE] Tried moving a folder (${e.id}) inside of another folder (${i.id})`,
            ),
            s()(
                r >= 0,
                `[GUILDS TREE] target node (${t.id}) did not exist within its specified parent (${t.parentId})`,
            ),
            (i.children = [...i.children]),
            i.children.splice(r + +!!n, 0, e),
            (e.parentId = i.id),
            this.version++,
            this
        );
    }
    moveInto(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this._pluckNode(e);
        let i = n ? t.children.length : 0;
        return (t.children = [...t.children]), t.children.splice(i, 0, e), (e.parentId = t.id), this.version++, this;
    }
    addNode(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return (
            s()("root" !== e.type, "[GUILDS TREE] Tried adding another root node into the tree"),
            s()(null != e.id, "[GUILDS TREE] Tried adding a node without an id"),
            s()(null == this.nodes[e.id], `[GUILDS TREE] Tried adding a node that already exists (${e.id})`),
            (this.nodes[e.id] = e),
            this.version++,
            this.moveInto(e, t, n)
        );
    }
    removeNode(e) {
        return (
            s()(e !== this.root, "[GUILDS TREE] Tried removing the root node from the tree"),
            s()(null != e.id, "[GUILDS TREE] Tried removing a node without an id"),
            this._pluckNode(e),
            (e.parentId = void 0),
            delete this.nodes[e.id],
            this.version++,
            this
        );
    }
    replaceNode(e, t) {
        s()(null != e.id, "[GUILDS TREE] Tried replacing a node without an id"),
            s()(null != t.id, "[GUILDS TREE] Tried replacing a node with one that does not have an id");
        let n = null != e.parentId ? this.nodes[e.parentId] : this.root,
            i = n.children.indexOf(e);
        return (
            s()(
                i >= 0,
                `[GUILDS TREE] existing node (${e.id}) did not exist within its specified parent (${e.parentId})`,
            ),
            (n.children = [...n.children]),
            n.children.splice(i, 1, t),
            (t.parentId = n.id),
            (e.parentId = void 0),
            delete this.nodes[e.id],
            (this.nodes[t.id] = t),
            this.version++,
            this
        );
    }
    cloneNode(e) {
        return (0, a.clone)(e);
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
        return (function e(t) {
            return "guild" === t.type ? [t] : null == t.children ? [] : t.children.map((t) => e(t)).flat();
        })(this.root);
    }
    _pluckNode(e) {
        let t = null != e.parentId ? this.nodes[e.parentId] : this.root;
        s()(
            null != t,
            `[GUILDS TREE] source node (${e.id}) had a parent id (${e.parentId}) which doesn't exist in the tree`,
        );
        let n = t.children;
        s()(
            null != n,
            `[GUILDS TREE] source node (${e.id}) had a parent id (${e.parentId}) which contains no children`,
        ),
            (t.children = n.filter((t) => t !== e)),
            (e.parentId = void 0),
            this.version++;
    }
}
function c(e, t) {
    return { type: "guild", id: e, parentId: t, children: [], unavailable: !1 };
}
function d(e, t, n) {
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
