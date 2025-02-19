n.d(t, { default: () => x }), n(47120), n(653041);
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(367907),
    o = n(313201),
    s = n(82554),
    c = n(185625),
    d = n(255514),
    u = n(981631),
    m = n(107360);
let x = (e) => {
    let { reportType: t, menu: n, modalProps: x, onSubmit: p, onNavigate: f, emailToken: b, isAuthenticated: _ = !0 } = e,
        h = (0, o.Dt)(),
        { nodes: g, root_node_id: v, success_node_id: j, fail_node_id: N } = n,
        [y, O] = l.useState(v),
        [Z, I] = l.useState(void 0),
        [T, C] = l.useState(void 0),
        [S, P] = l.useState([]),
        [E, k] = l.useState(void 0),
        [W, D] = l.useState(void 0),
        w = (e) => {
            var n, r, l;
            let { destination: i } = e,
                [, o] = i,
                c = g[o];
            if (c.elements.some((e) => 'skip' === e.type) && (null === (n = c.button) || void 0 === n ? void 0 : n.type) === 'next')
                return w(
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
                            destination: ['', c.button.target]
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
            if ((P([...S, e]), null != c.key && (null == f || f(c.key)), I(void 0), C(void 0), t.name === s.b.MESSAGE || t.name === s.b.FIRST_DM)) {
                let e = t.record.id;
                a.ZP.trackWithMetadata(u.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: c.report_type,
                    current_node: g[y].id,
                    next_node: c.id
                });
            }
            O(o);
        },
        A = async (e) => {
            var r;
            let l = _ ? await (0, c.ZD)(n, t, [...S, e]) : await (0, c.fw)(n, t, [...S, e], b),
                i = null == l ? void 0 : null === (r = l.body) || void 0 === r ? void 0 : r.report_id;
            null != i && k(i), D(g[e.nodeRef].report_type), null == p || p(i);
        },
        L = () => {
            var e, n;
            if (S.length < 1) return;
            let r = [...S],
                l = r.pop(),
                i = null !== (n = null == l ? void 0 : l.nodeRef) && void 0 !== n ? n : v;
            if (t.name === s.b.MESSAGE || t.name === s.b.FIRST_DM) {
                let e = t.record.id;
                a.ZP.trackWithMetadata(u.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: g[i].report_type,
                    current_node: g[y].id,
                    next_node: g[i].id
                });
            }
            I(null == l ? void 0 : null === (e = l.multiSelect) || void 0 === e ? void 0 : e.state), C(null == l ? void 0 : l.textInput), O(i), P(r), null == f || f('..');
        },
        R = l.useMemo(() => {
            let e = [],
                t = [];
            for (let i in g) {
                var n, r, l;
                let a = g[i];
                if (a.id !== j && a.id !== N && a.id !== v) {
                    if (a.key.endsWith('_SUBMIT') || (null === (n = a.button) || void 0 === n ? void 0 : n.type) === 'submit') {
                        t.push(a);
                        continue;
                    }
                    if ((e.push(a), (null === (r = a.button) || void 0 === r ? void 0 : r.type) === 'next')) {
                        let t = null === (l = a.button) || void 0 === l ? void 0 : l.target,
                            n = e.indexOf(g[t]);
                        -1 !== n && (e.splice(n, 1), e.push(g[t]));
                    }
                }
            }
            return [g[v], ...e, ...t, g[j], g[N]];
        }, [g, v, N, j]);
    return (0, r.jsx)(i.Y0X, {
        transitionState: x.transitionState,
        'aria-labelledby': h,
        children: (0, r.jsx)(i.MyZ, {
            width: 440,
            activeSlide: y,
            centered: !1,
            children: R.map((e) =>
                (0, r.jsx)(
                    i.Mi4,
                    {
                        id: e.id,
                        children: (0, r.jsx)('div', {
                            className: m.slideContainer,
                            children: (0, r.jsx)(d.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: W,
                                history: S,
                                onModalClose: x.onClose,
                                onSelectChild: w,
                                onNavigateBack: L,
                                multiSelect: Z,
                                textInput: T,
                                successNodeId: j,
                                failNodeId: N,
                                onSubmit: A,
                                reportId: E
                            })
                        })
                    },
                    e.id
                )
            )
        })
    });
};
