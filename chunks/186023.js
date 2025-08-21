n.d(t, { default: () => x }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(286379),
    a = n(481060),
    o = n(367907),
    s = n(313201),
    c = n(797614),
    d = n(82554),
    u = n(185625),
    m = n(255514),
    _ = n(981631),
    p = n(584581);
let x = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: x,
            onSubmit: g,
            onNavigate: f,
            emailToken: b,
            isAuthenticated: h = !0,
        } = e,
        v = (0, s.Dt)(),
        { nodes: j, root_node_id: y, success_node_id: O, fail_node_id: C } = n,
        [Z, I] = i.useState(y),
        [S, N] = i.useState(void 0),
        [T, P] = i.useState(void 0),
        [E, k] = i.useState([]),
        [w, R] = i.useState(void 0),
        [D, B] = i.useState(void 0),
        M = (e) => {
            var n, r, i;
            let { destination: a } = e,
                [, s] = a,
                u = j[s];
            if (void 0 === u) return void c.Z.increment({ name: l.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (u.elements.some((e) => "skip" === e.type) && (null == (n = u.button) ? void 0 : n.type) === "next")
                return M(
                    ((r = (function (e) {
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
                    })({}, e)),
                    (i = i =
                        {
                            destination: ["", u.button.target],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    r),
                );
            if (
                (k([...E, e]),
                null != u.key && (null == f || f(u.key)),
                N(void 0),
                P(void 0),
                t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM)
            ) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(_.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: u.report_type,
                    current_node: j[Z].id,
                    next_node: u.id,
                });
            }
            I(s);
        },
        A = async (e) => {
            var r;
            let i = h ? await (0, u.ZD)(n, t, [...E, e]) : await (0, u.fw)(n, t, [...E, e], b),
                l = null == i || null == (r = i.body) ? void 0 : r.report_id;
            null != l && R(l), B(j[e.nodeRef].report_type), null == g || g(l);
        },
        L = () => {
            var e, n;
            if (E.length < 1) return;
            let r = [...E],
                i = r.pop(),
                l = null != (n = null == i ? void 0 : i.nodeRef) ? n : y;
            if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(_.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: j[l].report_type,
                    current_node: j[Z].id,
                    next_node: j[l].id,
                });
            }
            N(null == i || null == (e = i.multiSelect) ? void 0 : e.state),
                P(null == i ? void 0 : i.textInput),
                I(l),
                k(r),
                null == f || f("..");
        },
        G = i.useMemo(() => {
            let e = [],
                t = [];
            for (let l in j) {
                var n, r, i;
                let a = j[l];
                if (a.id !== O && a.id !== C && a.id !== y) {
                    if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? void 0 : n.type) === "submit") {
                        t.push(a);
                        continue;
                    }
                    if ((e.push(a), (null == (r = a.button) ? void 0 : r.type) === "next")) {
                        let t = null == (i = a.button) ? void 0 : i.target,
                            n = e.indexOf(j[t]);
                        -1 !== n && (e.splice(n, 1), e.push(j[t]));
                    }
                }
            }
            return [j[y], ...e, ...t, j[O], j[C]];
        }, [j, y, C, O]);
    return (0, r.jsx)(a.Y0X, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        "aria-labelledby": v,
        parentComponent: "InAppReportModal",
        children: (0, r.jsx)(a.MyZ, {
            width: 440,
            activeSlide: Z,
            centered: !1,
            children: G.map((e) =>
                (0, r.jsx)(
                    a.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)("div", {
                            className: p.slideContainer,
                            children: (0, r.jsx)(m.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: D,
                                history: E,
                                onModalClose: x.onClose,
                                onSelectChild: M,
                                onNavigateBack: L,
                                multiSelect: S,
                                textInput: T,
                                successNodeId: O,
                                failNodeId: C,
                                onSubmit: A,
                                reportId: w,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
