n.d(t, { default: () => b }), n(388685), n(539854);
var r = n(200651),
    l = n(192379),
    i = n(286379),
    a = n(481060),
    o = n(367907),
    s = n(313201),
    c = n(797614),
    d = n(82554),
    u = n(185625),
    m = n(255514),
    p = n(981631),
    x = n(864012);
let b = (e) => {
    let { reportType: t, menu: n, modalProps: b, onSubmit: _, onNavigate: f, emailToken: h, isAuthenticated: g = !0 } = e,
        v = (0, s.Dt)(),
        { nodes: j, root_node_id: y, success_node_id: O, fail_node_id: Z } = n,
        [I, C] = l.useState(y),
        [N, P] = l.useState(void 0),
        [S, T] = l.useState(void 0),
        [k, E] = l.useState([]),
        [w, R] = l.useState(void 0),
        [D, A] = l.useState(void 0),
        M = (e) => {
            var n, r, l;
            let { destination: a } = e,
                [, s] = a,
                u = j[s];
            if (void 0 === u) return void c.Z.increment({ name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (u.elements.some((e) => 'skip' === e.type) && (null == (n = u.button) ? void 0 : n.type) === 'next')
                return M(
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (l = l =
                        {
                            destination: ['', u.button.target]
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
                    r)
                );
            if ((E([...k, e]), null != u.key && (null == f || f(u.key)), P(void 0), T(void 0), t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM)) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(p.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: u.report_type,
                    current_node: j[I].id,
                    next_node: u.id
                });
            }
            C(s);
        },
        L = async (e) => {
            var r;
            let l = g ? await (0, u.ZD)(n, t, [...k, e]) : await (0, u.fw)(n, t, [...k, e], h),
                i = null == l || null == (r = l.body) ? void 0 : r.report_id;
            null != i && R(i), A(j[e.nodeRef].report_type), null == _ || _(i);
        },
        B = () => {
            var e, n;
            if (k.length < 1) return;
            let r = [...k],
                l = r.pop(),
                i = null != (n = null == l ? void 0 : l.nodeRef) ? n : y;
            if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(p.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: j[i].report_type,
                    current_node: j[I].id,
                    next_node: j[i].id
                });
            }
            P(null == l || null == (e = l.multiSelect) ? void 0 : e.state), T(null == l ? void 0 : l.textInput), C(i), E(r), null == f || f('..');
        },
        z = l.useMemo(() => {
            let e = [],
                t = [];
            for (let i in j) {
                var n, r, l;
                let a = j[i];
                if (a.id !== O && a.id !== Z && a.id !== y) {
                    if (a.key.endsWith('_SUBMIT') || (null == (n = a.button) ? void 0 : n.type) === 'submit') {
                        t.push(a);
                        continue;
                    }
                    if ((e.push(a), (null == (r = a.button) ? void 0 : r.type) === 'next')) {
                        let t = null == (l = a.button) ? void 0 : l.target,
                            n = e.indexOf(j[t]);
                        -1 !== n && (e.splice(n, 1), e.push(j[t]));
                    }
                }
            }
            return [j[y], ...e, ...t, j[O], j[Z]];
        }, [j, y, Z, O]);
    return (0, r.jsx)(a.Y0X, {
        transitionState: b.transitionState,
        'aria-labelledby': v,
        children: (0, r.jsx)(a.MyZ, {
            width: 440,
            activeSlide: I,
            centered: !1,
            children: z.map((e) =>
                (0, r.jsx)(
                    a.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)('div', {
                            className: x.slideContainer,
                            children: (0, r.jsx)(m.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: D,
                                history: k,
                                onModalClose: b.onClose,
                                onSelectChild: M,
                                onNavigateBack: B,
                                multiSelect: N,
                                textInput: S,
                                successNodeId: O,
                                failNodeId: Z,
                                onSubmit: L,
                                reportId: w
                            })
                        })
                    },
                    e.id
                )
            )
        })
    });
};
