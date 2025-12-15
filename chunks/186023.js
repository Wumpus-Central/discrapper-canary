n.d(t, { default: () => x }), n(388685), n(539854);
var r = n(54381),
    l = n(473749),
    i = n(286379),
    a = n(481060),
    s = n(493773),
    o = n(367907),
    d = n(313201),
    c = n(797614),
    u = n(546791),
    m = n(82554),
    b = n(185625),
    p = n(255514),
    g = n(981631),
    f = n(351356);
let x = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: x,
            onSubmit: h,
            onNavigate: v,
            emailToken: j,
            isAuthenticated: _ = !0,
        } = e,
        y = (0, d.Dt)(),
        { nodes: O, root_node_id: Z, success_node_id: I, fail_node_id: C } = n,
        [S, N] = l.useState(Z),
        [T, P] = l.useState(void 0),
        [k, E] = l.useState(void 0),
        [w, M] = l.useState([]),
        [D, R] = l.useState(void 0),
        [A, B] = l.useState(void 0);
    (0, s.ZP)(() => {
        (0, u.k0)();
    });
    let U = (e) => {
            var n, r, l;
            let { destination: a } = e,
                [, s] = a,
                d = O[s];
            if (void 0 === d) return void c.Z.increment({ name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (d.elements.some((e) => "skip" === e.type) && (null == (n = d.button) ? void 0 : n.type) === "next")
                return U(
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
                (M([...w, e]),
                null != d.key && (null == v || v(d.key)),
                P(void 0),
                E(void 0),
                t.name === m.b.MESSAGE || t.name === m.b.FIRST_DM)
            ) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(g.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: d.report_type,
                    current_node: O[S].id,
                    next_node: d.id,
                });
            }
            N(s);
        },
        L = async (e) => {
            var r;
            let l = _ ? await (0, b.ZD)(n, t, [...w, e]) : await (0, b.fw)(n, t, [...w, e], j),
                i = null == l || null == (r = l.body) ? void 0 : r.report_id;
            null != i && R(i), B(O[e.nodeRef].report_type), null == h || h(i);
        },
        G = () => {
            var e, n;
            if (w.length < 1) return;
            let r = [...w],
                l = r.pop(),
                i = null != (n = null == l ? void 0 : l.nodeRef) ? n : Z;
            if (t.name === m.b.MESSAGE || t.name === m.b.FIRST_DM) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(g.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: O[i].report_type,
                    current_node: O[S].id,
                    next_node: O[i].id,
                });
            }
            P(null == l || null == (e = l.multiSelect) ? void 0 : e.state),
                E(null == l ? void 0 : l.textInput),
                N(i),
                M(r),
                null == v || v("..");
        },
        H = l.useMemo(() => {
            let e = [],
                t = [];
            for (let i in O) {
                var n, r, l;
                let a = O[i];
                if (a.id !== I && a.id !== C && a.id !== Z) {
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
            return [O[Z], ...e, ...t, O[I], O[C]];
        }, [O, Z, C, I]);
    return (0, r.jsx)(a.Y0X, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        "aria-labelledby": y,
        parentComponent: "InAppReportModal",
        children: (0, r.jsx)(a.MyZ, {
            width: 440,
            activeSlide: S,
            centered: !1,
            children: H.map((e) =>
                (0, r.jsx)(
                    a.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)("div", {
                            className: f.slideContainer,
                            children: (0, r.jsx)(p.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: A,
                                history: w,
                                onModalClose: x.onClose,
                                onSelectChild: U,
                                onNavigateBack: G,
                                multiSelect: T,
                                textInput: k,
                                successNodeId: I,
                                failNodeId: C,
                                onSubmit: L,
                                reportId: D,
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
