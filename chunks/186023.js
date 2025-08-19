n.d(t, { default: () => g }), n(388685), n(539854);
var r = n(951288),
    a = n(647438),
    i = n(286379),
    o = n(481060),
    l = n(367907),
    s = n(313201),
    c = n(797614),
    d = n(82554),
    u = n(185625),
    _ = n(255514),
    m = n(981631),
    p = n(584581);
let g = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: g,
            onSubmit: f,
            onNavigate: b,
            emailToken: h,
            isAuthenticated: x = !0,
        } = e,
        v = (0, s.Dt)(),
        { nodes: j, root_node_id: y, success_node_id: C, fail_node_id: O } = n,
        [I, Z] = a.useState(y),
        [T, S] = a.useState(void 0),
        [N, P] = a.useState(void 0),
        [k, w] = a.useState([]),
        [E, M] = a.useState(void 0),
        [B, A] = a.useState(void 0),
        D = (e) => {
            var n, r, a;
            let { destination: o } = e,
                [, s] = o,
                u = j[s];
            if (void 0 === u) return void c.Z.increment({ name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (u.elements.some((e) => "skip" === e.type) && (null == (n = u.button) ? void 0 : n.type) === "next")
                return D(
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
                    (a = a =
                        {
                            destination: ["", u.button.target],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    r),
                );
            if (
                (w([...k, e]),
                null != u.key && (null == b || b(u.key)),
                S(void 0),
                P(void 0),
                t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM)
            ) {
                let e = t.record.id;
                l.ZP.trackWithMetadata(m.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: u.report_type,
                    current_node: j[I].id,
                    next_node: u.id,
                });
            }
            Z(s);
        },
        R = async (e) => {
            var r;
            let a = x ? await (0, u.ZD)(n, t, [...k, e]) : await (0, u.fw)(n, t, [...k, e], h),
                i = null == a || null == (r = a.body) ? void 0 : r.report_id;
            null != i && M(i), A(j[e.nodeRef].report_type), null == f || f(i);
        },
        L = () => {
            var e, n;
            if (k.length < 1) return;
            let r = [...k],
                a = r.pop(),
                i = null != (n = null == a ? void 0 : a.nodeRef) ? n : y;
            if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
                let e = t.record.id;
                l.ZP.trackWithMetadata(m.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: j[i].report_type,
                    current_node: j[I].id,
                    next_node: j[i].id,
                });
            }
            S(null == a || null == (e = a.multiSelect) ? void 0 : e.state),
                P(null == a ? void 0 : a.textInput),
                Z(i),
                w(r),
                null == b || b("..");
        },
        G = a.useMemo(() => {
            let e = [],
                t = [];
            for (let i in j) {
                var n, r, a;
                let o = j[i];
                if (o.id !== C && o.id !== O && o.id !== y) {
                    if (o.key.endsWith("_SUBMIT") || (null == (n = o.button) ? void 0 : n.type) === "submit") {
                        t.push(o);
                        continue;
                    }
                    if ((e.push(o), (null == (r = o.button) ? void 0 : r.type) === "next")) {
                        let t = null == (a = o.button) ? void 0 : a.target,
                            n = e.indexOf(j[t]);
                        -1 !== n && (e.splice(n, 1), e.push(j[t]));
                    }
                }
            }
            return [j[y], ...e, ...t, j[C], j[O]];
        }, [j, y, O, C]);
    return (0, r.jsx)(o.Y0X, {
        "data-migration-pending": !0,
        transitionState: g.transitionState,
        "aria-labelledby": v,
        parentComponent: "InAppReportModal",
        children: (0, r.jsx)(o.MyZ, {
            width: 440,
            activeSlide: I,
            centered: !1,
            children: G.map((e) =>
                (0, r.jsx)(
                    o.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)("div", {
                            className: p.slideContainer,
                            children: (0, r.jsx)(_.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: B,
                                history: k,
                                onModalClose: g.onClose,
                                onSelectChild: D,
                                onNavigateBack: L,
                                multiSelect: T,
                                textInput: N,
                                successNodeId: C,
                                failNodeId: O,
                                onSubmit: R,
                                reportId: E,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
