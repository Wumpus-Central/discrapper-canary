n.d(t, { default: () => f }), n(47120), n(653041);
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
let f = (e) => {
    let { reportType: t, menu: n, modalProps: f, onSubmit: b, onNavigate: h, emailToken: _, isAuthenticated: g = !0 } = e,
        v = (0, s.Dt)(),
        { nodes: j, root_node_id: N, success_node_id: y, fail_node_id: O } = n,
        [Z, I] = l.useState(N),
        [C, T] = l.useState(void 0),
        [S, P] = l.useState(void 0),
        [k, E] = l.useState([]),
        [W, L] = l.useState(void 0),
        [w, A] = l.useState(void 0),
        D = (e) => {
            var n, r, l;
            let { destination: a } = e,
                [, s] = a,
                u = j[s];
            if (void 0 === u) return void c.Z.increment({ name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE });
            if (u.elements.some((e) => 'skip' === e.type) && (null == (n = u.button) ? void 0 : n.type) === 'next')
                return D(
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
            if ((E([...k, e]), null != u.key && (null == h || h(u.key)), T(void 0), P(void 0), t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM)) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(x.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: u.report_type,
                    current_node: j[Z].id,
                    next_node: u.id
                });
            }
            I(s);
        },
        R = async (e) => {
            var r;
            let l = g ? await (0, u.ZD)(n, t, [...k, e]) : await (0, u.fw)(n, t, [...k, e], _),
                i = null == l || null == (r = l.body) ? void 0 : r.report_id;
            null != i && L(i), A(j[e.nodeRef].report_type), null == b || b(i);
        },
        M = () => {
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
                    current_node: j[Z].id,
                    next_node: j[i].id
                });
            }
            T(null == l || null == (e = l.multiSelect) ? void 0 : e.state), P(null == l ? void 0 : l.textInput), I(i), E(r), null == h || h('..');
        },
        B = l.useMemo(() => {
            let e = [],
                t = [];
            for (let i in j) {
                var n, r, l;
                let a = j[i];
                if (a.id !== y && a.id !== O && a.id !== N) {
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
            return [j[N], ...e, ...t, j[y], j[O]];
        }, [j, N, O, y]);
    return (0, r.jsx)(a.Y0X, {
        transitionState: f.transitionState,
        'aria-labelledby': v,
        children: (0, r.jsx)(a.MyZ, {
            width: 440,
            activeSlide: Z,
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
                                reportSubType: w,
                                history: k,
                                onModalClose: f.onClose,
                                onSelectChild: D,
                                onNavigateBack: M,
                                multiSelect: C,
                                textInput: S,
                                successNodeId: y,
                                failNodeId: O,
                                onSubmit: R,
                                reportId: W
                            })
                        })
                    },
                    e.id
                )
            )
        })
    });
};
