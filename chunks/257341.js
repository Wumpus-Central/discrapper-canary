"use strict";
r.d(t, { A: () => p });
var a = r(1139),
    n = r(26412),
    o = r(658),
    s = r(527758),
    i = r(552932),
    l = r(865977),
    c = r(761847),
    u = r(416886),
    f = r(64700),
    b = r(223108),
    h = r.n(b),
    d = r(708906),
    p = (function (e) {
        (0, i.A)(b, e);
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
                        r = (0, c.A)(b);
                    return (
                        (e = t
                            ? Reflect.construct(r, arguments, (0, c.A)(this).constructor)
                            : r.apply(this, arguments)),
                        (0, l.A)(this, e)
                    );
                });
        function b(e) {
            var t;
            return (
                (0, n.A)(this, b),
                (t = r.call(this, e)),
                (0, u.A)((0, s.A)(t), "handleClick", function () {
                    t.setState({ expanded: !t.state.expanded });
                }),
                (t.state = { expanded: !1 }),
                t
            );
        }
        return (
            (0, o.A)(b, [
                {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.styling,
                            r = e.from,
                            n = e.to,
                            o = e.renderChildNodes,
                            s = e.nodeType;
                        return this.state.expanded
                            ? f.createElement("div", t("itemRange", this.state.expanded), o(this.props, r, n))
                            : f.createElement(
                                  "div",
                                  (0, a.A)({}, t("itemRange", this.state.expanded), { onClick: this.handleClick }),
                                  f.createElement(d.A, {
                                      nodeType: s,
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
            b
        );
    })(f.Component);
(0, u.A)(p, "propTypes", {
    styling: h().func.isRequired,
    from: h().number.isRequired,
    to: h().number.isRequired,
    renderChildNodes: h().func.isRequired,
    nodeType: h().string.isRequired,
});
