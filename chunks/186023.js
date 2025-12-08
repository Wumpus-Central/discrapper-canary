n.d(t, { default: () => b }), n(388685), n(539854);
var r = n(54381),
    l = n(473749),
    i = n(286379),
    a = n(481060),
    s = n(493773),
    o = n(367907),
    d = n(313201),
    c = n(797614),
    u = n(546791),
    m = n(277537),
    p = n(82554),
    g = n(185625),
    _ = n(255514),
    x = n(981631),
    h = n(584581);
let b = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: b,
            onSubmit: f,
            onNavigate: v,
            emailToken: j,
            isAuthenticated: y = !0,
        } = e,
        Z = (0, d.Dt)(),
        { nodes: O, root_node_id: I, success_node_id: C, fail_node_id: S } = n,
        [N, T] = l.useState(I),
        [P, E] = l.useState(void 0),
        [k, w] = l.useState(void 0),
        [M, D] = l.useState([]),
        [R, A] = l.useState(void 0),
        [B, U] = l.useState(void 0),
        L = (0, m.PO)("in_app_report_modal");
    (0, s.ZP)(() => {
        L && (0, u.k0)();
    });
    let G = (e) => {
            var n, r, l;
            let { destination: a } = e,
                [, s] = a,
                d = O[s];
            if (void 0 === d) return void c.Z.increment({ name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (d.elements.some((e) => "skip" === e.type) && (null == (n = d.button) ? void 0 : n.type) === "next")
                return G(
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
                    (l = l =
                        {
                            destination: ["", d.button.target],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    r),
                );
            if (
                (D([...M, e]),
                null != d.key && (null == v || v(d.key)),
                E(void 0),
                w(void 0),
                t.name === p.b.MESSAGE || t.name === p.b.FIRST_DM)
            ) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(x.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: d.report_type,
                    current_node: O[N].id,
                    next_node: d.id,
                });
            }
            T(s);
        },
        H = async (e) => {
            var r;
            let l = y ? await (0, g.ZD)(n, t, [...M, e]) : await (0, g.fw)(n, t, [...M, e], j),
                i = null == l || null == (r = l.body) ? void 0 : r.report_id;
            null != i && A(i), U(O[e.nodeRef].report_type), null == f || f(i);
        },
        W = () => {
            var e, n;
            if (M.length < 1) return;
            let r = [...M],
                l = r.pop(),
                i = null != (n = null == l ? void 0 : l.nodeRef) ? n : I;
            if (t.name === p.b.MESSAGE || t.name === p.b.FIRST_DM) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(x.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: O[i].report_type,
                    current_node: O[N].id,
                    next_node: O[i].id,
                });
            }
            E(null == l || null == (e = l.multiSelect) ? void 0 : e.state),
                w(null == l ? void 0 : l.textInput),
                T(i),
                D(r),
                null == v || v("..");
        },
        F = l.useMemo(() => {
            let e = [],
                t = [];
            for (let i in O) {
                var n, r, l;
                let a = O[i];
                if (a.id !== C && a.id !== S && a.id !== I) {
                    if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? void 0 : n.type) === "submit") {
                        t.push(a);
                        continue;
                    }
                    if ((e.push(a), (null == (r = a.button) ? void 0 : r.type) === "next")) {
                        let t = null == (l = a.button) ? void 0 : l.target,
                            n = e.indexOf(O[t]);
                        -1 !== n && (e.splice(n, 1), e.push(O[t]));
                    }
                }
            }
            return [O[I], ...e, ...t, O[C], O[S]];
        }, [O, I, S, C]);
    return (0, r.jsx)(a.Y0X, {
        "data-migration-pending": !0,
        transitionState: b.transitionState,
        "aria-labelledby": Z,
        parentComponent: "InAppReportModal",
        children: (0, r.jsx)(a.MyZ, {
            width: 440,
            activeSlide: N,
            centered: !1,
            children: F.map((e) =>
                (0, r.jsx)(
                    a.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)("div", {
                            className: h.slideContainer,
                            children: (0, r.jsx)(_.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: B,
                                history: M,
                                onModalClose: b.onClose,
                                onSelectChild: G,
                                onNavigateBack: W,
                                multiSelect: P,
                                textInput: k,
                                successNodeId: C,
                                failNodeId: S,
                                onSubmit: H,
                                reportId: R,
                                nodeMap: O,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
