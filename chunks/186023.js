n.d(t, { default: () => x }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(286379),
    a = n(481060),
    s = n(367907),
    o = n(313201),
    c = n(797614),
    d = n(82554),
    u = n(185625),
    m = n(255514),
    p = n(981631),
    g = n(584581);
let x = (e) => {
    let {
            reportType: t,
            menu: n,
            modalProps: x,
            onSubmit: h,
            onNavigate: b,
            emailToken: _,
            isAuthenticated: f = !0,
        } = e,
        v = (0, o.Dt)(),
        { nodes: j, root_node_id: y, success_node_id: O, fail_node_id: Z } = n,
        [I, N] = i.useState(y),
        [S, C] = i.useState(void 0),
        [T, P] = i.useState(void 0),
        [E, k] = i.useState([]),
        [w, R] = i.useState(void 0),
        [D, M] = i.useState(void 0),
        A = (e) => {
            var n, r, i;
            let { destination: a } = e,
                [, o] = a,
                u = j[o];
            if (void 0 === u) return void c.Z.increment({ name: l.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (u.elements.some((e) => "skip" === e.type) && (null == (n = u.button) ? void 0 : n.type) === "next")
                return A(
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
                null != u.key && (null == b || b(u.key)),
                C(void 0),
                P(void 0),
                t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM)
            ) {
                let e = t.record.id;
                s.ZP.trackWithMetadata(p.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: u.report_type,
                    current_node: j[I].id,
                    next_node: u.id,
                });
            }
            N(o);
        },
        B = async (e) => {
            var r;
            let i = f ? await (0, u.ZD)(n, t, [...E, e]) : await (0, u.fw)(n, t, [...E, e], _),
                l = null == i || null == (r = i.body) ? void 0 : r.report_id;
            null != l && R(l), M(j[e.nodeRef].report_type), null == h || h(l);
        },
        U = () => {
            var e, n;
            if (E.length < 1) return;
            let r = [...E],
                i = r.pop(),
                l = null != (n = null == i ? void 0 : i.nodeRef) ? n : y;
            if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
                let e = t.record.id;
                s.ZP.trackWithMetadata(p.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: j[l].report_type,
                    current_node: j[I].id,
                    next_node: j[l].id,
                });
            }
            C(null == i || null == (e = i.multiSelect) ? void 0 : e.state),
                P(null == i ? void 0 : i.textInput),
                N(l),
                k(r),
                null == b || b("..");
        },
        L = i.useMemo(() => {
            let e = [],
                t = [];
            for (let l in j) {
                var n, r, i;
                let a = j[l];
                if (a.id !== O && a.id !== Z && a.id !== y) {
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
            return [j[y], ...e, ...t, j[O], j[Z]];
        }, [j, y, Z, O]);
    return (0, r.jsx)(a.Y0X, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        "aria-labelledby": v,
        parentComponent: "InAppReportModal",
        children: (0, r.jsx)(a.MyZ, {
            width: 440,
            activeSlide: I,
            centered: !1,
            children: L.map((e) =>
                (0, r.jsx)(
                    a.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)("div", {
                            className: g.slideContainer,
                            children: (0, r.jsx)(m.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: D,
                                history: E,
                                onModalClose: x.onClose,
                                onSelectChild: A,
                                onNavigateBack: U,
                                multiSelect: S,
                                textInput: T,
                                successNodeId: O,
                                failNodeId: Z,
                                onSubmit: B,
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
