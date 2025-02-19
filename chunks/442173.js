n.d(t, { default: () => b });
var r = n(200651),
    a = n(192379),
    l = n(481060),
    o = n(332664),
    s = n(142497),
    c = n(626135),
    i = n(798733),
    u = n(559187),
    d = n(981631),
    f = n(190378),
    _ = n(388032);
function m(e) {
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
let x = [i.f.OTHER];
function b(e) {
    var { reportId: t, reportType: b } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['reportId', 'reportType']);
    return (
        a.useEffect(() => {
            c.default.track(d.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
                report_id: t,
                report_type: b
            });
        }, [t, b]),
        (0, r.jsx)(
            o.Z,
            m(
                {
                    modalType: 'in_app_report',
                    header: _.NW.string(_.t.MP5lDg),
                    body: _.NW.string(_.t['7Ct0Dg']),
                    problemTitle: _.NW.string(_.t.FJmoxM),
                    problems: (0, i.Z)(),
                    freeformNeededProblems: x,
                    onSubmit: function (e) {
                        let { rating: a, problem: o, dontShowAgain: c, feedback: i } = e;
                        c && (0, s.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
                            (0, u.Z)({
                                rating: a,
                                problem: o,
                                feedback: i,
                                reportId: t,
                                reportType: b,
                                dontShowAgain: c
                            }),
                            null != a &&
                                null != o &&
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                    return (t) => (0, r.jsx)(e, m({ body: _.NW.string(_.t['d9+vQ0']) }, t));
                                });
                    },
                    otherKey: i.f.OTHER
                },
                h
            )
        )
    );
}
