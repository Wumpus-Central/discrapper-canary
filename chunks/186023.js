n.d(t, { default: () => x }), n(47120), n(653041);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(367907),
    s = n(313201),
    o = n(82554),
    d = n(185625),
    c = n(255514),
    u = n(981631),
    m = n(368616);
let x = (e) => {
    let { reportType: t, menu: n, modalProps: x, onSubmit: _, onNavigate: h, emailToken: v, isAuthenticated: g = !0 } = e,
        p = (0, s.Dt)(),
        { nodes: f, root_node_id: b, success_node_id: Z, fail_node_id: j } = n,
        [I, T] = i.useState(b),
        [C, N] = i.useState(void 0),
        [E, S] = i.useState(void 0),
        [k, A] = i.useState([]),
        [L, R] = i.useState(void 0),
        [y, P] = i.useState(void 0),
        M = (e) => {
            var n;
            let { destination: l } = e,
                [, i] = l,
                r = f[i];
            if (r.elements.some((e) => 'skip' === e.type) && (null === (n = r.button) || void 0 === n ? void 0 : n.type) === 'next')
                return M({
                    ...e,
                    destination: ['', r.button.target]
                });
            if ((A([...k, e]), null != r.key && (null == h || h(r.key)), N(void 0), S(void 0), t.name === o.b.MESSAGE || t.name === o.b.FIRST_DM)) {
                let e = t.record.id;
                a.ZP.trackWithMetadata(u.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: r.report_type,
                    current_node: f[I].id,
                    next_node: r.id
                });
            }
            T(i);
        },
        D = async (e) => {
            var l;
            let i = g ? await (0, d.ZD)(n, t, [...k, e]) : await (0, d.fw)(n, t, [...k, e], v),
                r = null == i ? void 0 : null === (l = i.body) || void 0 === l ? void 0 : l.report_id;
            null != r && R(r), P(f[e.nodeRef].report_type), null == _ || _(r);
        },
        B = () => {
            var e, n;
            if (k.length < 1) return;
            let l = [...k],
                i = l.pop(),
                r = null !== (n = null == i ? void 0 : i.nodeRef) && void 0 !== n ? n : b;
            if (t.name === o.b.MESSAGE || t.name === o.b.FIRST_DM) {
                let e = t.record.id;
                a.ZP.trackWithMetadata(u.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: f[r].report_type,
                    current_node: f[I].id,
                    next_node: f[r].id
                });
            }
            N(null == i ? void 0 : null === (e = i.multiSelect) || void 0 === e ? void 0 : e.state), S(null == i ? void 0 : i.textInput), T(r), A(l), null == h || h('..');
        },
        O = i.useMemo(() => {
            let e = [],
                t = [];
            for (let r in f) {
                var n, l, i;
                let a = f[r];
                if (a.id !== Z && a.id !== j && a.id !== b) {
                    if (a.key.endsWith('_SUBMIT') || (null === (n = a.button) || void 0 === n ? void 0 : n.type) === 'submit') {
                        t.push(a);
                        continue;
                    }
                    if ((e.push(a), (null === (l = a.button) || void 0 === l ? void 0 : l.type) === 'next')) {
                        let t = null === (i = a.button) || void 0 === i ? void 0 : i.target,
                            n = e.indexOf(f[t]);
                        -1 !== n && (e.splice(n, 1), e.push(f[t]));
                    }
                }
            }
            return [f[b], ...e, ...t, f[Z], f[j]];
        }, [f, b, j, Z]);
    return (0, l.jsx)(r.Y0X, {
        transitionState: x.transitionState,
        'aria-labelledby': p,
        children: (0, l.jsx)(r.MyZ, {
            width: 440,
            activeSlide: I,
            centered: !1,
            children: O.map((e) =>
                (0, l.jsx)(
                    r.Mi4,
                    {
                        id: e.id,
                        children: (0, l.jsx)('div', {
                            className: m.slideContainer,
                            children: (0, l.jsx)(c.Z, {
                                node: e,
                                reportType: t,
                                reportSubType: y,
                                history: k,
                                onModalClose: x.onClose,
                                onSelectChild: M,
                                onNavigateBack: B,
                                multiSelect: C,
                                textInput: E,
                                successNodeId: Z,
                                failNodeId: j,
                                onSubmit: D,
                                reportId: L
                            })
                        })
                    },
                    e.id
                )
            )
        })
    });
};
