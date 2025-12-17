n.d(t, { Z: () => m }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(706454),
    s = n(594174),
    c = n(626135),
    u = n(63063),
    d = n(51144),
    p = n(665149),
    f = n(981631),
    g = n(388032);
let h = new Set(["ko", "ja"]);
function m(e) {
    let { className: t, focusSectionProps: n } = e,
        m = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        b = (0, i.e7)([o.default], () => o.default.locale),
        _ = (0, d.EO)(m);
    return (0, r.jsx)(a.Anchor, {
        href: u.w,
        target: "_blank",
        tabIndex: -1,
        children: (0, r.jsx)(
            p.JO,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    color: _ ? l.Z.unsafe_rawColors.GREEN_360.css : "currentColor",
                    className: t,
                    onClick: () => c.default.track(f.rMx.HELP_CLICKED, { highlighted: _ }),
                    icon: a.idN,
                    tooltipPosition: h.has(b) ? "left" : void 0,
                    tooltip: g.intl.string(g.t["cqEoj/"]),
                },
                n,
            ),
        ),
    });
}
