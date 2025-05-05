n.d(t, { default: () => x });
var l = n(255367),
    r = n(73800),
    a = n(481060),
    o = n(332664),
    i = n(142497),
    s = n(626135),
    c = n(798733),
    u = n(559187),
    d = n(981631),
    m = n(190378),
    f = n(388032);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let b = [c.f.OTHER];
function x(e) {
    var { reportId: t, reportType: x } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        a = Object.keys(e);
                    for (l = 0; l < a.length; l++) (n = a[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (l = 0; l < a.length; l++) (n = a[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['reportId', 'reportType']);
    return (
        r.useEffect(() => {
            s.default.track(d.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
                report_id: t,
                report_type: x
            });
        }, [t, x]),
        (0, l.jsx)(
            o.Z,
            _(
                {
                    modalType: 'in_app_report',
                    header: f.intl.string(f.t.MP5lDg),
                    body: f.intl.string(f.t['7Ct0Dg']),
                    problemTitle: f.intl.string(f.t.FJmoxM),
                    problems: (0, c.Z)(),
                    freeformNeededProblems: b,
                    onSubmit: function (e) {
                        var r;
                        let { rating: o, problem: s, dontShowAgain: c, feedback: d } = e;
                        c && (0, i.Kw)(m.v.IN_APP_REPORTS_FEEDBACK),
                            (0, u.Z)({
                                rating: o,
                                problem: null != (r = null == s ? void 0 : s.value) ? r : null,
                                feedback: d,
                                reportId: t,
                                reportType: x,
                                dontShowAgain: c
                            }),
                            null != o &&
                                null != s &&
                                (0, a.ZDy)(async () => {
                                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                    return (t) => (0, l.jsx)(e, _({ body: f.intl.string(f.t['d9+vQ0']) }, t));
                                });
                    },
                    otherKey: c.f.OTHER
                },
                p
            )
        )
    );
}
