function r(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var i = n(53042),
    a = n(175469),
    o = n(964930),
    s = n(65183),
    l = n(473749),
    c = n(606166);
s.List,
    (e.exports = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        return (
            r(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = e.block,
                    n = e.contentState,
                    r = e.customStyleFn,
                    s = e.customStyleMap,
                    u = e.decorator,
                    d = e.direction,
                    f = e.forceSelection,
                    p = e.hasSelection,
                    _ = e.selection,
                    m = e.tree,
                    h = t.getKey(),
                    g = t.getText(),
                    E = m.size - 1,
                    b =
                        this.props.children ||
                        m
                            .map(function (e, c) {
                                var m = e.get("decoratorKey"),
                                    b = e.get("leaves"),
                                    y = b.size - 1,
                                    O = b
                                        .map(function (e, n) {
                                            var i = o.encode(h, c, n),
                                                u = e.get("start"),
                                                d = e.get("end");
                                            return l.createElement(a, {
                                                key: i,
                                                offsetKey: i,
                                                block: t,
                                                start: u,
                                                selection: p ? _ : null,
                                                forceSelection: f,
                                                text: g.slice(u, d),
                                                styleSet: t.getInlineStyleAt(u),
                                                customStyleMap: s,
                                                customStyleFn: r,
                                                isLast: m === E && n === y,
                                            });
                                        })
                                        .toArray();
                                return m && u
                                    ? l.createElement(i, {
                                          block: t,
                                          children: O,
                                          contentState: n,
                                          decorator: u,
                                          decoratorKey: m,
                                          direction: d,
                                          leafSet: e,
                                          text: g,
                                          key: c,
                                      })
                                    : O;
                            })
                            .toArray();
                return l.createElement(
                    "div",
                    {
                        "data-offset-key": o.encode(h, 0, 0),
                        className: c({
                            "public/DraftStyleDefault/block": !0,
                            "public/DraftStyleDefault/ltr": "LTR" === d,
                            "public/DraftStyleDefault/rtl": "RTL" === d,
                        }),
                    },
                    b,
                );
            }),
            t
        );
    })(l.Component));
