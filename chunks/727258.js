n.d(t, {
    Mg: () => c,
    eD: () => o,
    g8: () => u,
    qQ: () => d
}),
    n(47120),
    n(536091);
var i = n(512722),
    r = n.n(i),
    a = n(392711);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var o = (function (e) {
    return (e.ROOT = 'root'), (e.FOLDER = 'folder'), (e.GUILD = 'guild'), e;
})({});
function l() {
    return Math.floor(4294967296 * Math.random());
}
class u {
    getSnapshot() {
        let e = {};
        for (let t in this.nodes) {
            let n = this.nodes[t];
            e[t] = {
                ...n,
                children: void 0,
                childrenIds: n.children.map((e) => e.id)
            };
        }
        return {
            rootChildrenIds: this.root.children.map((e) => e.id),
            nodes: e
        };
    }
    loadSnapshot(e) {
        for (let t in ((this.nodes = e.nodes), this.nodes)) {
            let e = this.nodes[t];
            (e.children = e.childrenIds.map((e) => this.nodes[e])), delete e.childrenIds;
        }
        (this.root.children = e.rootChildrenIds.map((e) => this.nodes[e])), this.version++;
    }
    moveNextTo(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._pluckNode(e);
        let i = null != t.parentId ? this.nodes[t.parentId] : this.root,
            a = i.children.indexOf(t);
        r()(!('folder' === e.type && 'folder' === i.type), '[GUILDS TREE] Tried moving a folder ('.concat(e.id, ') inside of another folder (').concat(i.id, ')')), r()(a >= 0, '[GUILDS TREE] target node ('.concat(t.id, ') did not exist within its specified parent (').concat(t.parentId, ')'));
        let s = n ? 1 : 0;
        return (i.children = [...i.children]), i.children.splice(a + s, 0, e), (e.parentId = i.id), this.version++, this;
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
        return r()('root' !== e.type, '[GUILDS TREE] Tried adding another root node into the tree'), r()(null != e.id, '[GUILDS TREE] Tried adding a node without an id'), r()(null == this.nodes[e.id], '[GUILDS TREE] Tried adding a node that already exists ('.concat(e.id, ')')), (this.nodes[e.id] = e), this.version++, this.moveInto(e, t, n);
    }
    removeNode(e) {
        return r()(e !== this.root, '[GUILDS TREE] Tried removing the root node from the tree'), r()(null != e.id, '[GUILDS TREE] Tried removing a node without an id'), this._pluckNode(e), (e.parentId = void 0), delete this.nodes[e.id], this.version++, this;
    }
    replaceNode(e, t) {
        r()(null != e.id, '[GUILDS TREE] Tried replacing a node without an id'), r()(null != t.id, '[GUILDS TREE] Tried replacing a node with one that does not have an id');
        let n = null != e.parentId ? this.nodes[e.parentId] : this.root,
            i = n.children.indexOf(e);
        return r()(i >= 0, '[GUILDS TREE] existing node ('.concat(e.id, ') did not exist within its specified parent (').concat(e.parentId, ')')), (n.children = [...n.children]), n.children.splice(i, 1, t), (t.parentId = n.id), (e.parentId = void 0), delete this.nodes[e.id], (this.nodes[t.id] = t), this.version++, this;
    }
    cloneNode(e) {
        return (0, a.clone)(e);
    }
    convertToFolder(e) {
        let t = l();
        for (; null != this.getNode(t); ) t = l();
        let n = {
            type: 'folder',
            id: t,
            expanded: !1,
            children: []
        };
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
            return 'guild' === t.type ? [t] : null == t.children ? [] : t.children.map((t) => e(t)).flat();
        }
        return e(this.root);
    }
    _pluckNode(e) {
        let t = null != e.parentId ? this.nodes[e.parentId] : this.root;
        r()(null != t, '[GUILDS TREE] source node ('.concat(e.id, ') had a parent id (').concat(e.parentId, ") which doesn't exist in the tree"));
        let n = t.children;
        r()(null != n, '[GUILDS TREE] source node ('.concat(e.id, ') had a parent id (').concat(e.parentId, ') which contains no children')), (t.children = n.filter((t) => t !== e)), (e.parentId = void 0), this.version++;
    }
    constructor() {
        s(this, 'root', void 0),
            s(this, 'nodes', void 0),
            s(this, 'version', void 0),
            (this.root = {
                type: 'root',
                children: []
            }),
            (this.nodes = {}),
            (this.version = 0);
    }
}
function c(e, t) {
    return {
        type: 'guild',
        id: e,
        parentId: t,
        children: [],
        unavailable: !1
    };
}
function d(e, t, n) {
    var i, r, a;
    return {
        type: 'folder',
        id: e.folderId,
        parentId: t,
        name: null !== (i = e.folderName) && void 0 !== i ? i : void 0,
        color: null !== (r = e.folderColor) && void 0 !== r ? r : void 0,
        expanded: null != n ? n : null !== (a = e.expanded) && void 0 !== a && a,
        children: []
    };
}
