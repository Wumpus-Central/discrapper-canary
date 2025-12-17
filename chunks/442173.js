a.d(t, { default: () => m });
var n = a(54381),
    o = a(473749),
    r = a(481060),
    c = a(957115),
    d = a(332664),
    l = a(626135),
    i = a(798733),
    b = a(559187),
    u = a(981631),
    f = a(531578),
    p = a(388032);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let _ = [i.f.OTHER];
function m(e) {
    var { reportId: t, reportType: m } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        o = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (o[a] = e[a]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++)
                    (a = r[n]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a]);
            }
            return o;
        })(e, ["reportId", "reportType"]);
    return (
        o.useEffect(() => {
            l.default.track(u.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
                report_id: t,
                report_type: m,
            });
        }, [t, m]),
        (0, n.jsx)(
            d.Z,
            s(
                {
                    modalType: "in_app_report",
                    header: p.intl.string(p.t.MP5lDj),
                    body: p.intl.string(p.t["7Ct0Dj"]),
                    problemTitle: p.intl.string(p.t.FJmoxF),
                    problems: (0, i.Z)(),
                    freeformNeededProblems: _,
                    onSubmit: function (e) {
                        var o;
                        let { rating: d, problem: l, dontShowAgain: i, feedback: u } = e;
                        i &&
                            (0, c.Uv)({
                                feedbackType: f.nw.IN_APP_REPORTS,
                                location: "InAppReportsFeedbackModal",
                            }),
                            (0, b.Z)({
                                rating: d,
                                problem: null != (o = null == l ? void 0 : l.value) ? o : null,
                                feedback: u,
                                reportId: t,
                                reportType: m,
                                dontShowAgain: i,
                            }),
                            null != d &&
                                null != l &&
                                (0, r.ZDy)(async () => {
                                    let { default: e } = await a.e("14466").then(a.bind(a, 729328));
                                    return (t) => (0, n.jsx)(e, s({ body: p.intl.string(p.t["d9+vQ8"]) }, t));
                                });
                    },
                    otherKey: i.f.OTHER,
                },
                g,
            ),
        )
    );
}
