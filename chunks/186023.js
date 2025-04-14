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
    x = n(981631),
    p = n(864012);
let b = (e) => {
    let { reportType: t, menu: n, modalProps: b, onSubmit: f, onNavigate: h, emailToken: _, isAuthenticated: g = !0 } = e,
        v = (0, s.Dt)(),
        { nodes: j, root_node_id: N, success_node_id: y, fail_node_id: Z } = n,
        [O, I] = l.useState(N),
        [C, P] = l.useState(void 0),
        [S, T] = l.useState(void 0),
        [k, E] = l.useState([]),
        [w, W] = l.useState(void 0),
        [D, R] = l.useState(void 0),
        A = (e) => {
            var n, r, l;
            let { destination: a } = e,
                [, s] = a,
                u = j[s];
            if (void 0 === u) return void c.Z.increment({ name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (u.elements.some((e) => 'skip' === e.type) && (null == (n = u.button) ? void 0 : n.type) === 'next')
                return A(
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
            if ((E([...k, e]), null != u.key && (null == h || h(u.key)), P(void 0), T(void 0), t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM)) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(x.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: u.report_type,
                    current_node: j[O].id,
                    next_node: u.id
                });
            }
            I(s);
        },
        M = async (e) => {
            var r;
            let l = g ? await (0, u.ZD)(n, t, [...k, e]) : await (0, u.fw)(n, t, [...k, e], _),
                i = null == l || null == (r = l.body) ? void 0 : r.report_id;
            null != i && W(i), R(j[e.nodeRef].report_type), null == f || f(i);
        },
        L = () => {
            var e, n;
            if (k.length < 1) return;
            let r = [...k],
                l = r.pop(),
                i = null != (n = null == l ? void 0 : l.nodeRef) ? n : N;
            if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(x.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: j[i].report_type,
                    current_node: j[O].id,
                    next_node: j[i].id
                });
            }
            P(null == l || null == (e = l.multiSelect) ? void 0 : e.state), T(null == l ? void 0 : l.textInput), I(i), E(r), null == h || h('..');
        },
        B = l.useMemo(() => {
            let e = [],
                t = [];
            for (let i in j) {
                var n, r, l;
                let a = j[i];
                if (a.id !== y && a.id !== Z && a.id !== N) {
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
            return [j[N], ...e, ...t, j[y], j[Z]];
        }, [j, N, Z, y]);
    return (0, r.jsx)(a.Y0X, {
        transitionState: b.transitionState,
        'aria-labelledby': v,
        children: (0, r.jsx)(a.MyZ, {
            width: 440,
            activeSlide: O,
            centered: !1,
            children: B.map((e) =>
                (0, r.jsx)(
                    a.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)('div', {
                            className: p.slideContainer,
                            children: (0, r.jsx)(m.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: D,
                                history: k,
                                onModalClose: b.onClose,
                                onSelectChild: A,
                                onNavigateBack: L,
                                multiSelect: C,
                                textInput: S,
                                successNodeId: y,
                                failNodeId: Z,
                                onSubmit: M,
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
