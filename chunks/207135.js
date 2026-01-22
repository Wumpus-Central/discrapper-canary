var r = n(724039);

function i() {
    return (i =
        r ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}

function a(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var s = n(595042),
    o = n(64700),
    l = n(679443),
    c = n(181038);
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    return (
        a(t, e),
        (t.prototype.render = function () {
            var e = this.props,
                t = e.block,
                n = e.children,
                r = e.contentState,
                a = e.decorator,
                u = e.decoratorKey,
                d = e.direction,
                f = e.leafSet,
                p = e.text,
                _ = t.getKey(),
                h = f.get("leaves"),
                m = a.getComponentForKey(u),
                g = a.getPropsForKey(u),
                E = s.encode(_, parseInt(u, 10), 0),
                b = p.slice(h.first().get("start"), h.last().get("end")),
                y = c.getHTMLDirIfDifferent(l.getDirection(b), d);
            return o.createElement(
                m,
                i({}, g, {
                    contentState: r,
                    decoratedText: b,
                    dir: y,
                    key: E,
                    entityKey: t.getEntityAt(f.get("start")),
                    offsetKey: E,
                }),
                n,
            );
        }),
        t
    );
})(o.Component);
