r.d(n, {
    Mg: function () {
        return p;
    },
    eD: function () {
        return i;
    },
    g8: function () {
        return f;
    },
    qQ: function () {
        return h;
    }
});
var i,
    a = r(47120);
var o = r(536091);
var s = r(512722),
    l = r.n(s),
    u = r(392711);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function d() {
    return Math.floor(4294967296 * Math.random());
}
!(function (e) {
    (e.ROOT = 'root'), (e.FOLDER = 'folder'), (e.GUILD = 'guild');
})(i || (i = {}));
class f {
    getSnapshot() {
        let e = {};
        for (let n in this.nodes) {
            let r = this.nodes[n];
            e[n] = {
                ...r,
                children: void 0,
                childrenIds: r.children.map((e) => e.id)
            };
        }
        return {
            rootChildrenIds: this.root.children.map((e) => e.id),
            nodes: e
        };
    }
    loadSnapshot(e) {
        for (let n in ((this.nodes = e.nodes), this.nodes)) {
            let e = this.nodes[n];
            (e.children = e.childrenIds.map((e) => this.nodes[e])), delete e.childrenIds;
        }
        (this.root.children = e.rootChildrenIds.map((e) => this.nodes[e])), this.version++;
    }
    moveNextTo(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._pluckNode(e);
        let i = null != n.parentId ? this.nodes[n.parentId] : this.root,
            a = i.children.indexOf(n);
        l()(!('folder' === e.type && 'folder' === i.type), '[GUILDS TREE] Tried moving a folder ('.concat(e.id, ') inside of another folder (').concat(i.id, ')')), l()(a >= 0, '[GUILDS TREE] target node ('.concat(n.id, ') did not exist within its specified parent (').concat(n.parentId, ')'));
        let o = r ? 1 : 0;
        return (i.children = [...i.children]), i.children.splice(a + o, 0, e), (e.parentId = i.id), this.version++, this;
    }
    moveInto(e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this._pluckNode(e);
        let i = r ? n.children.length : 0;
        return (n.children = [...n.children]), n.children.splice(i, 0, e), (e.parentId = n.id), this.version++, this;
    }
    addNode(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root,
            r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return l()('root' !== e.type, '[GUILDS TREE] Tried adding another root node into the tree'), l()(null != e.id, '[GUILDS TREE] Tried adding a node without an id'), l()(null == this.nodes[e.id], '[GUILDS TREE] Tried adding a node that already exists ('.concat(e.id, ')')), (this.nodes[e.id] = e), this.version++, this.moveInto(e, n, r);
    }
    removeNode(e) {
        return l()(e !== this.root, '[GUILDS TREE] Tried removing the root node from the tree'), l()(null != e.id, '[GUILDS TREE] Tried removing a node without an id'), this._pluckNode(e), (e.parentId = void 0), delete this.nodes[e.id], this.version++, this;
    }
    replaceNode(e, n) {
        l()(null != e.id, '[GUILDS TREE] Tried replacing a node without an id'), l()(null != n.id, '[GUILDS TREE] Tried replacing a node with one that does not have an id');
        let r = null != e.parentId ? this.nodes[e.parentId] : this.root,
            i = r.children.indexOf(e);
        return l()(i >= 0, '[GUILDS TREE] existing node ('.concat(e.id, ') did not exist within its specified parent (').concat(e.parentId, ')')), (r.children = [...r.children]), r.children.splice(i, 1, n), (n.parentId = r.id), (e.parentId = void 0), delete this.nodes[e.id], (this.nodes[n.id] = n), this.version++, this;
    }
    cloneNode(e) {
        return (0, u.clone)(e);
    }
    convertToFolder(e) {
        let n = d();
        for (; null != this.getNode(n); ) n = d();
        let r = {
            type: 'folder',
            id: n,
            expanded: !1,
            children: []
        };
        return this.replaceNode(e, r), this.removeNode(e), this.addNode(e, r, !1), this.version++, r;
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
        function e(n) {
            return 'guild' === n.type ? [n] : null == n.children ? [] : n.children.map((n) => e(n)).flat();
        }
        return e(this.root);
    }
    _pluckNode(e) {
        let n = null != e.parentId ? this.nodes[e.parentId] : this.root;
        l()(null != n, '[GUILDS TREE] source node ('.concat(e.id, ') had a parent id (').concat(e.parentId, ") which doesn't exist in the tree"));
        let r = n.children;
        l()(null != r, '[GUILDS TREE] source node ('.concat(e.id, ') had a parent id (').concat(e.parentId, ') which contains no children')), (n.children = r.filter((n) => n !== e)), (e.parentId = void 0), this.version++;
    }
    constructor() {
        c(this, 'root', void 0),
            c(this, 'nodes', void 0),
            c(this, 'version', void 0),
            (this.root = {
                type: 'root',
                children: []
            }),
            (this.nodes = {}),
            (this.version = 0);
    }
}
function p(e, n) {
    return {
        type: 'guild',
        id: e,
        parentId: n,
        children: [],
        unavailable: !1
    };
}
function h(e, n, r) {
    var i, a, o;
    return {
        type: 'folder',
        id: e.folderId,
        parentId: n,
        name: null !== (i = e.folderName) && void 0 !== i ? i : void 0,
        color: null !== (a = e.folderColor) && void 0 !== a ? a : void 0,
        expanded: null != r ? r : null !== (o = e.expanded) && void 0 !== o && o,
        children: []
    };
}
