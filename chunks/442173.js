n.d(t, { default: () => _ });
var r = n(255367),
    o = n(73800),
    l = n(481060),
    a = n(957115),
    i = n(332664),
    c = n(626135),
    s = n(798733),
    u = n(559187),
    d = n(981631),
    f = n(531578),
    p = n(388032);
function b(e) {
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
let m = [s.f.OTHER];
function _(e) {
    var { reportId: t, reportType: _ } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['reportId', 'reportType']);
    return (
        o.useEffect(() => {
            c.default.track(d.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
                report_id: t,
                report_type: _
            });
        }, [t, _]),
        (0, r.jsx)(
            i.Z,
            b(
                {
                    modalType: 'in_app_report',
                    header: p.intl.string(p.t.MP5lDg),
                    body: p.intl.string(p.t['7Ct0Dg']),
                    problemTitle: p.intl.string(p.t.FJmoxM),
                    problems: (0, s.Z)(),
                    freeformNeededProblems: m,
                    onSubmit: function (e) {
                        var o;
                        let { rating: i, problem: c, dontShowAgain: s, feedback: d } = e;
                        s &&
                            (0, a.U)({
                                feedbackType: f.nw.IN_APP_REPORTS,
                                location: 'InAppReportsFeedbackModal'
                            }),
                            (0, u.Z)({
                                rating: i,
                                problem: null != (o = null == c ? void 0 : c.value) ? o : null,
                                feedback: d,
                                reportId: t,
                                reportType: _,
                                dontShowAgain: s
                            }),
                            null != i &&
                                null != c &&
                                (0, l.ZDy)(async () => {
                                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                    return (t) => (0, r.jsx)(e, b({ body: p.intl.string(p.t['d9+vQ0']) }, t));
                                });
                    },
                    otherKey: s.f.OTHER
                },
                x
            )
        )
    );
}
