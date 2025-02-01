function n(e, t, n, i) {
    var r = [],
        s = {},
        o = {},
        l = {};
    return function u(c) {
        (s[c] = !0), r.push(c), (l[c] = !0);
        for (let t = 0; t < e[c].length; t++) {
            let n = e[c][t];
            if (s[n]) {
                if (l[n] && (r.push(n), !i)) throw new a(r);
            } else u(n);
        }
        r.pop(), delete l[c], (t && 0 !== e[c].length) || o[c] || (n.push(c), (o[c] = !0));
    };
}
var i,
    r = (t.DepGraph = function (e) {
        (this.nodes = {}), (this.outgoingEdges = {}), (this.incomingEdges = {}), (this.circular = e && !!e.circular);
    });
r.prototype = {
    size: function () {
        return Object.keys(this.nodes).length;
    },
    addNode: function (e, t) {
        this.hasNode(e) || (2 == arguments.length ? (this.nodes[e] = t) : (this.nodes[e] = e), (this.outgoingEdges[e] = []), (this.incomingEdges[e] = []));
    },
    removeNode: function (e) {
        this.hasNode(e) &&
            (delete this.nodes[e],
            delete this.outgoingEdges[e],
            delete this.incomingEdges[e],
            [this.incomingEdges, this.outgoingEdges].forEach(function (t) {
                Object.keys(t).forEach(function (n) {
                    var i = t[n].indexOf(e);
                    i >= 0 && t[n].splice(i, 1);
                }, this);
            }));
    },
    hasNode: function (e) {
        return this.nodes.hasOwnProperty(e);
    },
    getNodeData: function (e) {
        if (this.hasNode(e)) return this.nodes[e];
        throw Error('Node does not exist: ' + e);
    },
    setNodeData: function (e, t) {
        if (this.hasNode(e)) this.nodes[e] = t;
        else throw Error('Node does not exist: ' + e);
    },
    addDependency: function (e, t) {
        if (!this.hasNode(e)) throw Error('Node does not exist: ' + e);
        if (!this.hasNode(t)) throw Error('Node does not exist: ' + t);
        return -1 === this.outgoingEdges[e].indexOf(t) && this.outgoingEdges[e].push(t), -1 === this.incomingEdges[t].indexOf(e) && this.incomingEdges[t].push(e), !0;
    },
    removeDependency: function (e, t) {
        var n;
        this.hasNode(e) && (n = this.outgoingEdges[e].indexOf(t)) >= 0 && this.outgoingEdges[e].splice(n, 1), this.hasNode(t) && (n = this.incomingEdges[t].indexOf(e)) >= 0 && this.incomingEdges[t].splice(n, 1);
    },
    clone: function () {
        var e = this,
            t = new r();
        return (
            Object.keys(e.nodes).forEach(function (n) {
                (t.nodes[n] = e.nodes[n]), (t.outgoingEdges[n] = e.outgoingEdges[n].slice(0)), (t.incomingEdges[n] = e.incomingEdges[n].slice(0));
            }),
            t
        );
    },
    dependenciesOf: function (e, t) {
        if (this.hasNode(e)) {
            var i = [];
            n(this.outgoingEdges, t, i, this.circular)(e);
            var r = i.indexOf(e);
            return r >= 0 && i.splice(r, 1), i;
        }
        throw Error('Node does not exist: ' + e);
    },
    dependantsOf: function (e, t) {
        if (this.hasNode(e)) {
            var i = [];
            n(this.incomingEdges, t, i, this.circular)(e);
            var r = i.indexOf(e);
            return r >= 0 && i.splice(r, 1), i;
        }
        throw Error('Node does not exist: ' + e);
    },
    overallOrder: function (e) {
        var t = this,
            i = [],
            r = Object.keys(this.nodes);
        if (0 === r.length) return i;
        var a = n(this.outgoingEdges, !1, [], this.circular);
        r.forEach(function (e) {
            a(e);
        });
        var s = n(this.outgoingEdges, e, i, this.circular);
        return (
            r
                .filter(function (e) {
                    return 0 === t.incomingEdges[e].length;
                })
                .forEach(function (e) {
                    s(e);
                }),
            i
        );
    }
};
var a = (i = function (e) {
    var t = Error('Dependency Cycle Found: ' + e.join(' -> '));
    return (t.cyclePath = e), Object.setPrototypeOf(t, Object.getPrototypeOf(this)), Error.captureStackTrace && Error.captureStackTrace(t, a), t;
});
(a.prototype = Object.create(Error.prototype, {
    constructor: {
        value: Error,
        enumerable: !1,
        writable: !0,
        configurable: !0
    }
})),
    Object.setPrototypeOf(a, Error);
