n.d(t, { default: () => h }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(286379),
    a = n(481060),
    o = n(493773),
    s = n(367907),
    c = n(313201),
    d = n(797614),
    u = n(546791),
    _ = n(277537),
    m = n(82554),
    p = n(185625),
    g = n(255514),
    f = n(981631),
    b = n(584581);
let h = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: h,
            onSubmit: x,
            onNavigate: v,
            emailToken: j,
            isAuthenticated: y = !0,
        } = e,
        O = (0, c.Dt)(),
        { nodes: C, root_node_id: I, success_node_id: Z, fail_node_id: S } = n,
        [T, P] = i.useState(I),
        [N, E] = i.useState(void 0),
        [k, w] = i.useState(void 0),
        [R, D] = i.useState([]),
        [M, A] = i.useState(void 0),
        [B, L] = i.useState(void 0),
        U = (0, _.PO)("in_app_report_modal");
    (0, o.ZP)(() => {
        U && (0, u.k0)();
    });
    let G = (e) => {
            var n, r, i;
            let { destination: a } = e,
                [, o] = a,
                c = C[o];
            if (void 0 === c) return void d.Z.increment({ name: l.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (c.elements.some((e) => "skip" === e.type) && (null == (n = c.button) ? void 0 : n.type) === "next")
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
                    (i = i =
                        {
                            destination: ["", c.button.target],
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
                (D([...R, e]),
                null != c.key && (null == v || v(c.key)),
                E(void 0),
                w(void 0),
                t.name === m.b.MESSAGE || t.name === m.b.FIRST_DM)
            ) {
                let e = t.record.id;
                s.ZP.trackWithMetadata(f.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: c.report_type,
                    current_node: C[T].id,
                    next_node: c.id,
                });
            }
            P(o);
        },
        W = async (e) => {
            var r;
            let i = y ? await (0, p.ZD)(n, t, [...R, e]) : await (0, p.fw)(n, t, [...R, e], j),
                l = null == i || null == (r = i.body) ? void 0 : r.report_id;
            null != l && A(l), L(C[e.nodeRef].report_type), null == x || x(l);
        },
        z = () => {
            var e, n;
            if (R.length < 1) return;
            let r = [...R],
                i = r.pop(),
                l = null != (n = null == i ? void 0 : i.nodeRef) ? n : I;
            if (t.name === m.b.MESSAGE || t.name === m.b.FIRST_DM) {
                let e = t.record.id;
                s.ZP.trackWithMetadata(f.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: C[l].report_type,
                    current_node: C[T].id,
                    next_node: C[l].id,
                });
            }
            E(null == i || null == (e = i.multiSelect) ? void 0 : e.state),
                w(null == i ? void 0 : i.textInput),
                P(l),
                D(r),
                null == v || v("..");
        },
        F = i.useMemo(() => {
            let e = [],
                t = [];
            for (let l in C) {
                var n, r, i;
                let a = C[l];
                if (a.id !== Z && a.id !== S && a.id !== I) {
                    if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? void 0 : n.type) === "submit") {
                        t.push(a);
                        continue;
                    }
                    if ((e.push(a), (null == (r = a.button) ? void 0 : r.type) === "next")) {
                        let t = null == (i = a.button) ? void 0 : i.target,
                            n = e.indexOf(C[t]);
                        -1 !== n && (e.splice(n, 1), e.push(C[t]));
                    }
                }
            }
            return [C[I], ...e, ...t, C[Z], C[S]];
        }, [C, I, S, Z]);
    return (0, r.jsx)(a.Y0X, {
        "data-migration-pending": !0,
        transitionState: h.transitionState,
        "aria-labelledby": O,
        parentComponent: "InAppReportModal",
        children: (0, r.jsx)(a.MyZ, {
            width: 440,
            activeSlide: T,
            centered: !1,
            children: F.map((e) =>
                (0, r.jsx)(
                    a.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)("div", {
                            className: b.slideContainer,
                            children: (0, r.jsx)(g.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: B,
                                history: R,
                                onModalClose: h.onClose,
                                onSelectChild: G,
                                onNavigateBack: z,
                                multiSelect: N,
                                textInput: k,
                                successNodeId: Z,
                                failNodeId: S,
                                onSubmit: W,
                                reportId: M,
                                nodeMap: C,
                            }),
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
};
