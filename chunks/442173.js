n.d(t, { default: () => x });
var r = n(200651),
    a = n(192379),
    o = n(481060),
    l = n(332664),
    s = n(142497),
    c = n(626135),
    i = n(798733),
    u = n(559187),
    d = n(981631),
    f = n(190378),
    m = n(388032);
function _(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let b = [i.f.OTHER];
function x(e) {
    var { reportId: t, reportType: x } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['reportId', 'reportType']);
    return (
        a.useEffect(() => {
            c.default.track(d.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
                report_id: t,
                report_type: x
            });
        }, [t, x]),
        (0, r.jsx)(
            l.Z,
            _(
                {
                    modalType: 'in_app_report',
                    header: m.NW.string(m.t.MP5lDg),
                    body: m.NW.string(m.t['7Ct0Dg']),
                    problemTitle: m.NW.string(m.t.FJmoxM),
                    problems: (0, i.Z)(),
                    freeformNeededProblems: b,
                    onSubmit: function (e) {
                        var a;
                        let { rating: l, problem: c, dontShowAgain: i, feedback: d } = e;
                        i && (0, s.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
                            (0, u.Z)({
                                rating: l,
                                problem: null != (a = null == c ? void 0 : c.value) ? a : null,
                                feedback: d,
                                reportId: t,
                                reportType: x,
                                dontShowAgain: i
                            }),
                            null != l &&
                                null != c &&
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                    return (t) => (0, r.jsx)(e, _({ body: m.NW.string(m.t['d9+vQ0']) }, t));
                                });
                    },
                    otherKey: i.f.OTHER
                },
                p
            )
        )
    );
}
