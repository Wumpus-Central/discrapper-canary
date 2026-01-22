r.d(t, { default: () => y });
var n = r(627968),
    a = r(64700),
    o = r(397927),
    l = r(930932),
    f = r(612479),
    c = r(954571),
    d = r(773822),
    u = r(507887),
    b = r(652215),
    i = r(670455),
    p = r(985018);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
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
let O = [d.G.OTHER];
function y(e) {
    let { reportId: t, reportType: y } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                return o;
            }
            if (
                ((o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        o = Object.getOwnPropertyNames(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    return a;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            return o;
        })(e, ["reportId", "reportType"]);
    return (
        a.useEffect(() => {
            c.default.track(b.HAw.IAR_FEEDBACK_MODAL_VIEWED, {
                report_id: t,
                report_type: y,
            });
        }, [t, y]),
        (0, n.jsx)(
            f.A,
            s(
                {
                    modalType: "in_app_report",
                    header: p.intl.string(p.t.MP5lDj),
                    body: p.intl.string(p.t["7Ct0Dj"]),
                    problemTitle: p.intl.string(p.t.FJmoxF),
                    problems: (0, d.A)(),
                    freeformNeededProblems: O,
                    onSubmit: function (e) {
                        var a;
                        let { rating: f, problem: c, dontShowAgain: d, feedback: b } = e;
                        d &&
                            (0, l.n3)({
                                feedbackType: i.MW.IN_APP_REPORTS,
                                location: "InAppReportsFeedbackModal",
                            }),
                            (0, u.A)({
                                rating: f,
                                problem: null != (a = null == c ? void 0 : c.value) ? a : null,
                                feedback: b,
                                reportId: t,
                                reportType: y,
                                dontShowAgain: d,
                            }),
                            null != f &&
                                null != c &&
                                (0, o.mMO)(async () => {
                                    let { default: e } = await r.e("37836").then(r.bind(r, 845671));
                                    return (t) => (0, n.jsx)(e, s({ body: p.intl.string(p.t["d9+vQ8"]) }, t));
                                });
                    },
                    otherKey: d.G.OTHER,
                },
                g,
            ),
        )
    );
}
