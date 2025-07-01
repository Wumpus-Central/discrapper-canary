(n.d(t, { default: () => g }), n(388685), n(539854));
var r = n(255367),
    a = n(73800),
    i = n(286379),
    l = n(481060),
    o = n(367907),
    s = n(313201),
    c = n(797614),
    d = n(82554),
    u = n(185625),
    m = n(255514),
    p = n(981631),
    _ = n(864012);
let g = (e) => {
    let { reportType: t, menu: n, modalProps: g, onSubmit: b, onNavigate: x, emailToken: h, isAuthenticated: f = !0 } = e,
        v = (0, s.Dt)(),
        { nodes: j, root_node_id: C, success_node_id: y, fail_node_id: I } = n,
        [O, T] = a.useState(C),
        [Z, N] = a.useState(void 0),
        [S, P] = a.useState(void 0),
        [k, E] = a.useState([]),
        [M, w] = a.useState(void 0),
        [A, R] = a.useState(void 0),
        D = (e) => {
            var n, r, a;
            let { destination: l } = e,
                [, s] = l,
                u = j[s];
            if (void 0 === u) return void c.Z.increment({ name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (u.elements.some((e) => 'skip' === e.type) && (null == (n = u.button) ? void 0 : n.type) === 'next')
                return D(
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (a = a =
                        {
                            destination: ['', u.button.target]
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
                    r)
                );
            if ((E([...k, e]), null != u.key && (null == x || x(u.key)), N(void 0), P(void 0), t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM)) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(p.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: u.report_type,
                    current_node: j[O].id,
                    next_node: u.id
                });
            }
            T(s);
        },
        B = async (e) => {
            var r;
            let a = f ? await (0, u.ZD)(n, t, [...k, e]) : await (0, u.fw)(n, t, [...k, e], h),
                i = null == a || null == (r = a.body) ? void 0 : r.report_id;
            (null != i && w(i), R(j[e.nodeRef].report_type), null == b || b(i));
        },
        L = () => {
            var e, n;
            if (k.length < 1) return;
            let r = [...k],
                a = r.pop(),
                i = null != (n = null == a ? void 0 : a.nodeRef) ? n : C;
            if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(p.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: j[i].report_type,
                    current_node: j[O].id,
                    next_node: j[i].id
                });
            }
            (N(null == a || null == (e = a.multiSelect) ? void 0 : e.state), P(null == a ? void 0 : a.textInput), T(i), E(r), null == x || x('..'));
        },
        z = a.useMemo(() => {
            let e = [],
                t = [];
            for (let i in j) {
                var n, r, a;
                let l = j[i];
                if (l.id !== y && l.id !== I && l.id !== C) {
                    if (l.key.endsWith('_SUBMIT') || (null == (n = l.button) ? void 0 : n.type) === 'submit') {
                        t.push(l);
                        continue;
                    }
                    if ((e.push(l), (null == (r = l.button) ? void 0 : r.type) === 'next')) {
                        let t = null == (a = l.button) ? void 0 : a.target,
                            n = e.indexOf(j[t]);
                        -1 !== n && (e.splice(n, 1), e.push(j[t]));
                    }
                }
            }
            return [j[C], ...e, ...t, j[y], j[I]];
        }, [j, C, I, y]);
    return (0, r.jsx)(l.Y0X, {
        transitionState: g.transitionState,
        'aria-labelledby': v,
        parentComponent: 'InAppReportModal',
        children: (0, r.jsx)(l.MyZ, {
            width: 440,
            activeSlide: O,
            centered: !1,
            children: z.map((e) =>
                (0, r.jsx)(
                    l.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)('div', {
                            className: _.slideContainer,
                            children: (0, r.jsx)(m.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: A,
                                history: k,
                                onModalClose: g.onClose,
                                onSelectChild: D,
                                onNavigateBack: L,
                                multiSelect: Z,
                                textInput: S,
                                successNodeId: y,
                                failNodeId: I,
                                onSubmit: B,
                                reportId: M
                            })
                        })
                    },
                    e.id
                )
            )
        })
    });
};
