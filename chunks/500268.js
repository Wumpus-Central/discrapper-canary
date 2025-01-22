function r(e, n, r, i) {
    var a = [],
        s = {},
        l = {},
        u = {};
    return function c(d) {
        (s[d] = !0), a.push(d), (u[d] = !0);
        for (let n = 0; n < e[d].length; n++) {
            let r = e[d][n];
            if (s[r]) {
                if (u[r] && (a.push(r), !i)) throw new o(a);
            } else c(r);
        }
        a.pop(), delete u[d], (!n || 0 === e[d].length) && !l[d] && (r.push(d), (l[d] = !0));
    };
}
var i,
    a = (n.DepGraph = function (e) {
        (this.nodes = {}), (this.outgoingEdges = {}), (this.incomingEdges = {}), (this.circular = e && !!e.circular);
    });
a.prototype = {
    size: function () {
        return Object.keys(this.nodes).length;
    },
    addNode: function (e, n) {
        !this.hasNode(e) && (2 == arguments.length ? (this.nodes[e] = n) : (this.nodes[e] = e), (this.outgoingEdges[e] = []), (this.incomingEdges[e] = []));
    },
    removeNode: function (e) {
        this.hasNode(e) &&
            (delete this.nodes[e],
            delete this.outgoingEdges[e],
            delete this.incomingEdges[e],
            [this.incomingEdges, this.outgoingEdges].forEach(function (n) {
                Object.keys(n).forEach(function (r) {
                    var i = n[r].indexOf(e);
                    i >= 0 && n[r].splice(i, 1);
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
    setNodeData: function (e, n) {
        if (this.hasNode(e)) this.nodes[e] = n;
        else throw Error('Node does not exist: ' + e);
    },
    addDependency: function (e, n) {
        if (!this.hasNode(e)) throw Error('Node does not exist: ' + e);
        if (!this.hasNode(n)) throw Error('Node does not exist: ' + n);
        return -1 === this.outgoingEdges[e].indexOf(n) && this.outgoingEdges[e].push(n), -1 === this.incomingEdges[n].indexOf(e) && this.incomingEdges[n].push(e), !0;
    },
    removeDependency: function (e, n) {
        var r;
        this.hasNode(e) && (r = this.outgoingEdges[e].indexOf(n)) >= 0 && this.outgoingEdges[e].splice(r, 1), this.hasNode(n) && (r = this.incomingEdges[n].indexOf(e)) >= 0 && this.incomingEdges[n].splice(r, 1);
    },
    clone: function () {
        var e = this,
            n = new a();
        return (
            Object.keys(e.nodes).forEach(function (r) {
                (n.nodes[r] = e.nodes[r]), (n.outgoingEdges[r] = e.outgoingEdges[r].slice(0)), (n.incomingEdges[r] = e.incomingEdges[r].slice(0));
            }),
            n
        );
    },
    dependenciesOf: function (e, n) {
        if (this.hasNode(e)) {
            var i = [];
            r(this.outgoingEdges, n, i, this.circular)(e);
            var a = i.indexOf(e);
            return a >= 0 && i.splice(a, 1), i;
        }
        throw Error('Node does not exist: ' + e);
    },
    dependantsOf: function (e, n) {
        if (this.hasNode(e)) {
            var i = [];
            r(this.incomingEdges, n, i, this.circular)(e);
            var a = i.indexOf(e);
            return a >= 0 && i.splice(a, 1), i;
        }
        throw Error('Node does not exist: ' + e);
    },
    overallOrder: function (e) {
        var n = this,
            i = [],
            a = Object.keys(this.nodes);
        if (0 === a.length) return i;
        var o = r(this.outgoingEdges, !1, [], this.circular);
        a.forEach(function (e) {
            o(e);
        });
        var s = r(this.outgoingEdges, e, i, this.circular);
        return (
            a
                .filter(function (e) {
                    return 0 === n.incomingEdges[e].length;
                })
                .forEach(function (e) {
                    s(e);
                }),
            i
        );
    }
};
var o = (i = function (e) {
    var n = Error('Dependency Cycle Found: ' + e.join(' -> '));
    return (n.cyclePath = e), Object.setPrototypeOf(n, Object.getPrototypeOf(this)), Error.captureStackTrace && Error.captureStackTrace(n, o), n;
});
(o.prototype = Object.create(Error.prototype, {
    constructor: {
        value: Error,
        enumerable: !1,
        writable: !0,
        configurable: !0
    }
})),
    Object.setPrototypeOf(o, Error);
