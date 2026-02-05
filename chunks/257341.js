"use strict";
r.d(t, { A: () => p });
var a = r(1139),
    n = r(26412),
    s = r(658),
    o = r(527758),
    i = r(552932),
    c = r(865977),
    l = r(761847),
    u = r(416886),
    b = r(64700),
    f = r(223108),
    d = r.n(f),
    h = r(708906),
    p = (function (e) {
        (0, i.A)(f, e);
        var t,
            r =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r = (0, l.A)(f);
                    return (
                        (e = t
                            ? Reflect.construct(r, arguments, (0, l.A)(this).constructor)
                            : r.apply(this, arguments)),
                        (0, c.A)(this, e)
                    );
                });
        function f(e) {
            var t;
            return (
                (0, n.A)(this, f),
                (t = r.call(this, e)),
                (0, u.A)((0, o.A)(t), "handleClick", function () {
                    t.setState({ expanded: !t.state.expanded });
                }),
                (t.state = { expanded: !1 }),
                t
            );
        }
        return (
            (0, s.A)(f, [
                {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.styling,
                            r = e.from,
                            n = e.to,
                            s = e.renderChildNodes,
                            o = e.nodeType;
                        return this.state.expanded
                            ? b.createElement("div", t("itemRange", this.state.expanded), s(this.props, r, n))
                            : b.createElement(
                                  "div",
                                  (0, a.A)({}, t("itemRange", this.state.expanded), { onClick: this.handleClick }),
                                  b.createElement(h.A, {
                                      nodeType: o,
                                      styling: t,
                                      expanded: !1,
                                      onClick: this.handleClick,
                                      arrowStyle: "double",
                                  }),
                                  "".concat(r, " ... ").concat(n),
                              );
                    },
                },
            ]),
            f
        );
    })(b.Component);
(0, u.A)(p, "propTypes", {
    styling: d().func.isRequired,
    from: d().number.isRequired,
    to: d().number.isRequired,
    renderChildNodes: d().func.isRequired,
    nodeType: d().string.isRequired,
});
