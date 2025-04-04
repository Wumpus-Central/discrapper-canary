n.d(t, {
    Mg: () => _,
    eD: () => u,
    g8: () => f,
    qQ: () => p
}),
    n(47120),
    n(86693),
    n(536091);
var r = n(512722),
    i = n.n(r),
    o = n(392711);
function a(e, t, n) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var u = (function (e) {
    return (e.ROOT = 'root'), (e.FOLDER = 'folder'), (e.GUILD = 'guild'), e;
})({});
function d() {
    return Math.floor(4294967296 * Math.random());
}
class f {
    getSnapshot() {
        let e = {};
        for (let t in this.nodes) {
            let n = this.nodes[t];
            e[t] = c(s({}, n), {
                children: void 0,
                childrenIds: n.children.map((e) => e.id)
            });
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
        let r = null != t.parentId ? this.nodes[t.parentId] : this.root,
            o = r.children.indexOf(t);
        i()('folder' !== e.type || 'folder' !== r.type, '[GUILDS TREE] Tried moving a folder ('.concat(e.id, ') inside of another folder (').concat(r.id, ')')), i()(o >= 0, '[GUILDS TREE] target node ('.concat(t.id, ') did not exist within its specified parent (').concat(t.parentId, ')'));
        let a = +!!n;
        return (r.children = [...r.children]), r.children.splice(o + a, 0, e), (e.parentId = r.id), this.version++, this;
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
        return i()('root' !== e.type, '[GUILDS TREE] Tried adding another root node into the tree'), i()(null != e.id, '[GUILDS TREE] Tried adding a node without an id'), i()(null == this.nodes[e.id], '[GUILDS TREE] Tried adding a node that already exists ('.concat(e.id, ')')), (this.nodes[e.id] = e), this.version++, this.moveInto(e, t, n);
    }
    removeNode(e) {
        return i()(e !== this.root, '[GUILDS TREE] Tried removing the root node from the tree'), i()(null != e.id, '[GUILDS TREE] Tried removing a node without an id'), this._pluckNode(e), (e.parentId = void 0), delete this.nodes[e.id], this.version++, this;
    }
    replaceNode(e, t) {
        i()(null != e.id, '[GUILDS TREE] Tried replacing a node without an id'), i()(null != t.id, '[GUILDS TREE] Tried replacing a node with one that does not have an id');
        let n = null != e.parentId ? this.nodes[e.parentId] : this.root,
            r = n.children.indexOf(e);
        return i()(r >= 0, '[GUILDS TREE] existing node ('.concat(e.id, ') did not exist within its specified parent (').concat(e.parentId, ')')), (n.children = [...n.children]), n.children.splice(r, 1, t), (t.parentId = n.id), (e.parentId = void 0), delete this.nodes[e.id], (this.nodes[t.id] = t), this.version++, this;
    }
    cloneNode(e) {
        return (0, o.clone)(e);
    }
    convertToFolder(e) {
        let t = d();
        for (; null != this.getNode(t); ) t = d();
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
        i()(null != t, '[GUILDS TREE] source node ('.concat(e.id, ') had a parent id (').concat(e.parentId, ") which doesn't exist in the tree"));
        let n = t.children;
        i()(null != n, '[GUILDS TREE] source node ('.concat(e.id, ') had a parent id (').concat(e.parentId, ') which contains no children')), (t.children = n.filter((t) => t !== e)), (e.parentId = void 0), this.version++;
    }
    constructor() {
        a(this, 'root', void 0),
            a(this, 'nodes', void 0),
            a(this, 'version', void 0),
            (this.root = {
                type: 'root',
                children: []
            }),
            (this.nodes = {}),
            (this.version = 0);
    }
}
function _(e, t) {
    return {
        type: 'guild',
        id: e,
        parentId: t,
        children: [],
        unavailable: !1
    };
}
function p(e, t, n) {
    var r, i, o;
    return {
        type: 'folder',
        id: e.folderId,
        parentId: t,
        name: null != (r = e.folderName) ? r : void 0,
        color: null != (i = e.folderColor) ? i : void 0,
        expanded: null != n ? n : null != (o = e.expanded) && o,
        children: []
    };
}
