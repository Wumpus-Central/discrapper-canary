n.d(t, { default: () => m });
var o = n(54381),
    r = n(473749),
    a = n(481060),
    c = n(957115),
    l = n(332664),
    i = n(626135),
    _ = n(798733),
    u = n(559187),
    b = n(981631),
    f = n(531578),
    p = n(388032);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
let s = [_.f.OTHER];
function m(e) {
    var { reportId: t, reportType: m } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                o,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        o,
                        r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                    (n = a[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["reportId", "reportType"]);
    return (
        r.useEffect(() => {
            i.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
                report_id: t,
                report_type: m,
            });
        }, [t, m]),
        (0, o.jsx)(
            l.Z,
            d(
                {
                    modalType: "in_app_report",
                    header: p.intl.string(p.t.MP5lDj),
                    body: p.intl.string(p.t["7Ct0Dj"]),
                    problemTitle: p.intl.string(p.t.FJmoxF),
                    problems: (0, _.Z)(),
                    freeformNeededProblems: s,
                    onSubmit: function (e) {
                        var r;
                        let { rating: l, problem: i, dontShowAgain: _, feedback: b } = e;
                        _ &&
                            (0, c.Uv)({
                                feedbackType: f.nw.IN_APP_REPORTS,
                                location: "InAppReportsFeedbackModal",
                            }),
                            (0, u.Z)({
                                rating: l,
                                problem: null != (r = null == i ? void 0 : i.value) ? r : null,
                                feedback: b,
                                reportId: t,
                                reportType: m,
                                dontShowAgain: _,
                            }),
                            null != l &&
                                null != i &&
                                (0, a.ZDy)(async () => {
                                    let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                                    return (t) => (0, o.jsx)(e, d({ body: p.intl.string(p.t["d9+vQ8"]) }, t));
                                });
                    },
                    otherKey: _.f.OTHER,
                },
                g,
            ),
        )
    );
}
