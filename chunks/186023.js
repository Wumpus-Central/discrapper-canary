var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(481060),
    u = r(367907),
    c = r(313201),
    d = r(82554),
    f = r(185625),
    _ = r(255514),
    h = r(981631),
    p = r(122602);
let m = (e) => {
    let { reportType: n, menu: r, modalProps: i, onSubmit: a, onNavigate: m, emailToken: g, isAuthenticated: E = !0 } = e,
        v = (0, c.Dt)(),
        { nodes: I, root_node_id: T, success_node_id: b, fail_node_id: y } = r,
        [S, A] = o.useState(T),
        [N, C] = o.useState(void 0),
        [R, O] = o.useState(void 0),
        [D, L] = o.useState([]),
        [x, w] = o.useState(void 0),
        [P, M] = o.useState(void 0),
        k = (e) => {
            var r;
            let { destination: i } = e,
                [, a] = i,
                s = I[a];
            if (s.elements.some((e) => 'skip' === e.type) && (null === (r = s.button) || void 0 === r ? void 0 : r.type) === 'next')
                return k({
                    ...e,
                    destination: ['', s.button.target]
                });
            if ((L([...D, e]), null != s.key && (null == m || m(s.key)), C(void 0), O(void 0), n.name === d.b.MESSAGE || n.name === d.b.FIRST_DM)) {
                let e = n.record.id;
                u.ZP.trackWithMetadata(h.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: n.name,
                    report_sub_type: s.report_type,
                    current_node: I[S].id,
                    next_node: s.id
                });
            }
            A(a);
        },
        U = async (e) => {
            var i;
            let s = E ? await (0, f.ZD)(r, n, [...D, e]) : await (0, f.fw)(r, n, [...D, e], g),
                o = null == s ? void 0 : null === (i = s.body) || void 0 === i ? void 0 : i.report_id;
            null != o && w(o), M(I[e.nodeRef].report_type), null == a || a(o);
        },
        B = () => {
            var e, r;
            if (D.length < 1) return;
            let i = [...D],
                a = i.pop(),
                s = null !== (r = null == a ? void 0 : a.nodeRef) && void 0 !== r ? r : T;
            if (n.name === d.b.MESSAGE || n.name === d.b.FIRST_DM) {
                let e = n.record.id;
                u.ZP.trackWithMetadata(h.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: n.name,
                    report_sub_type: I[s].report_type,
                    current_node: I[S].id,
                    next_node: I[s].id
                });
            }
            C(null == a ? void 0 : null === (e = a.multiSelect) || void 0 === e ? void 0 : e.state), O(null == a ? void 0 : a.textInput), A(s), L(i), null == m || m('..');
        },
        G = o.useMemo(() => {
            let e = [],
                n = [];
            for (let s in I) {
                var r, i, a;
                let o = I[s];
                if (o.id !== b && o.id !== y && o.id !== T) {
                    if (o.key.endsWith('_SUBMIT') || (null === (r = o.button) || void 0 === r ? void 0 : r.type) === 'submit') {
                        n.push(o);
                        continue;
                    }
                    if ((e.push(o), (null === (i = o.button) || void 0 === i ? void 0 : i.type) === 'next')) {
                        let n = null === (a = o.button) || void 0 === a ? void 0 : a.target,
                            r = e.indexOf(I[n]);
                        -1 !== r && (e.splice(r, 1), e.push(I[n]));
                    }
                }
            }
            return [I[T], ...e, ...n, I[b], I[y]];
        }, [I, T, y, b]);
    return (0, s.jsx)(l.ModalRoot, {
        transitionState: i.transitionState,
        'aria-labelledby': v,
        children: (0, s.jsx)(l.Slides, {
            width: 440,
            activeSlide: S,
            centered: !1,
            children: G.map((e) =>
                (0, s.jsx)(
                    l.Slide,
                    {
                        id: e.id,
                        children: (0, s.jsx)('div', {
                            className: p.slideContainer,
                            children: (0, s.jsx)(_.Z, {
                                node: e,
                                reportType: n,
                                reportSubType: P,
                                history: D,
                                onModalClose: i.onClose,
                                onSelectChild: k,
                                onNavigateBack: B,
                                multiSelect: N,
                                textInput: R,
                                successNodeId: b,
                                failNodeId: y,
                                onSubmit: U,
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
n.Z = m;
