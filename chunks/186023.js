n.d(t, { Z: () => _ }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(367907),
    o = n(313201),
    l = n(82554),
    u = n(185625),
    c = n(255514),
    d = n(981631),
    f = n(122602);
let _ = (e) => {
    let { reportType: t, menu: n, modalProps: _, onSubmit: p, onNavigate: h, emailToken: m, isAuthenticated: g = !0 } = e,
        E = (0, o.Dt)(),
        { nodes: v, root_node_id: y, success_node_id: I, fail_node_id: T } = n,
        [b, S] = r.useState(y),
        [A, N] = r.useState(void 0),
        [C, R] = r.useState(void 0),
        [O, D] = r.useState([]),
        [x, L] = r.useState(void 0),
        [P, w] = r.useState(void 0),
        M = (e) => {
            var n;
            let { destination: i } = e,
                [, r] = i,
                a = v[r];
            if (a.elements.some((e) => 'skip' === e.type) && (null === (n = a.button) || void 0 === n ? void 0 : n.type) === 'next')
                return M({
                    ...e,
                    destination: ['', a.button.target]
                });
            if ((D([...O, e]), null != a.key && (null == h || h(a.key)), N(void 0), R(void 0), t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM)) {
                let e = t.record.id;
                s.ZP.trackWithMetadata(d.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: v[b].id,
                    next_node: a.id
                });
            }
            S(r);
        },
        k = async (e) => {
            var i;
            let r = g ? await (0, u.ZD)(n, t, [...O, e]) : await (0, u.fw)(n, t, [...O, e], m),
                a = null == r ? void 0 : null === (i = r.body) || void 0 === i ? void 0 : i.report_id;
            null != a && L(a), w(v[e.nodeRef].report_type), null == p || p(a);
        },
        U = () => {
            var e, n;
            if (O.length < 1) return;
            let i = [...O],
                r = i.pop(),
                a = null !== (n = null == r ? void 0 : r.nodeRef) && void 0 !== n ? n : y;
            if (t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
                let e = t.record.id;
                s.ZP.trackWithMetadata(d.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: v[a].report_type,
                    current_node: v[b].id,
                    next_node: v[a].id
                });
            }
            N(null == r ? void 0 : null === (e = r.multiSelect) || void 0 === e ? void 0 : e.state), R(null == r ? void 0 : r.textInput), S(a), D(i), null == h || h('..');
        },
        G = r.useMemo(() => {
            let e = [],
                t = [];
            for (let a in v) {
                var n, i, r;
                let s = v[a];
                if (s.id !== I && s.id !== T && s.id !== y) {
                    if (s.key.endsWith('_SUBMIT') || (null === (n = s.button) || void 0 === n ? void 0 : n.type) === 'submit') {
                        t.push(s);
                        continue;
                    }
                    if ((e.push(s), (null === (i = s.button) || void 0 === i ? void 0 : i.type) === 'next')) {
                        let t = null === (r = s.button) || void 0 === r ? void 0 : r.target,
                            n = e.indexOf(v[t]);
                        -1 !== n && (e.splice(n, 1), e.push(v[t]));
                    }
                }
            }
            return [v[y], ...e, ...t, v[I], v[T]];
        }, [v, y, T, I]);
    return (0, i.jsx)(a.Y0X, {
        transitionState: _.transitionState,
        'aria-labelledby': E,
        children: (0, i.jsx)(a.MyZ, {
            width: 440,
            activeSlide: b,
            centered: !1,
            children: G.map((e) =>
                (0, i.jsx)(
                    a.Mi4,
                    {
                        id: e.id,
                        children: (0, i.jsx)('div', {
                            className: f.slideContainer,
                            children: (0, i.jsx)(c.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: P,
                                history: O,
                                onModalClose: _.onClose,
                                onSelectChild: M,
                                onNavigateBack: U,
                                multiSelect: A,
                                textInput: C,
                                successNodeId: I,
                                failNodeId: T,
                                onSubmit: k,
                                reportId: x
                            })
                        })
                    },
                    e.id
                )
            )
        })
    });
};
