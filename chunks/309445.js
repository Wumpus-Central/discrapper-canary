r.d(t, { Z: () => p });
var a = r(44837),
    n = r(891943),
    o = r(856706),
    s = r(455412),
    i = r(706852),
    c = r(371101),
    u = r(174083),
    l = r(565294),
    f = r(473749),
    b = r(639519),
    d = r.n(b),
    h = r(22356),
    p = (function (e) {
        (0, i.Z)(b, e);
        var t,
            r =
                ((t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r = (0, u.Z)(b);
                    return (
                        (e = t
                            ? Reflect.construct(r, arguments, (0, u.Z)(this).constructor)
                            : r.apply(this, arguments)),
                        (0, c.Z)(this, e)
                    );
                });
        function b(e) {
            var t;
            return (
                (0, n.Z)(this, b),
                (t = r.call(this, e)),
                (0, l.Z)((0, s.Z)(t), "handleClick", function () {
                    t.setState({ expanded: !t.state.expanded });
                }),
                (t.state = { expanded: !1 }),
                t
            );
        }
        return (
            (0, o.Z)(b, [
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
                                  (0, a.Z)({}, t("itemRange", this.state.expanded), { onClick: this.handleClick }),
                                  f.createElement(h.Z, {
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
(0, l.Z)(p, "propTypes", {
    styling: d().func.isRequired,
    from: d().number.isRequired,
    to: d().number.isRequired,
    renderChildNodes: d().func.isRequired,
    nodeType: d().string.isRequired,
});
