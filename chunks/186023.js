var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(481060),
    u = r(367907),
    c = r(313201),
    d = r(82554),
    f = r(185625),
    p = r(255514),
    h = r(981631),
    _ = r(122602);
let m = (e) => {
    let { reportType: n, menu: r, modalProps: i, onSubmit: a, onNavigate: m, emailToken: g, isAuthenticated: E = !0 } = e,
        v = (0, c.Dt)(),
        { nodes: y, root_node_id: b, success_node_id: I, fail_node_id: T } = r,
        [S, A] = s.useState(b),
        [C, N] = s.useState(void 0),
        [R, O] = s.useState(void 0),
        [D, L] = s.useState([]),
        [x, w] = s.useState(void 0),
        [P, M] = s.useState(void 0),
        k = (e) => {
            var r;
            let { destination: i } = e,
                [, a] = i,
                o = y[a];
            if (o.elements.some((e) => 'skip' === e.type) && (null === (r = o.button) || void 0 === r ? void 0 : r.type) === 'next')
                return k({
                    ...e,
                    destination: ['', o.button.target]
                });
            if ((L([...D, e]), null != o.key && (null == m || m(o.key)), N(void 0), O(void 0), n.name === d.b.MESSAGE || n.name === d.b.FIRST_DM)) {
                let e = n.record.id;
                u.ZP.trackWithMetadata(h.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: n.name,
                    report_sub_type: o.report_type,
                    current_node: y[S].id,
                    next_node: o.id
                });
            }
            A(a);
        },
        U = async (e) => {
            var i;
            let o = E ? await (0, f.ZD)(r, n, [...D, e]) : await (0, f.fw)(r, n, [...D, e], g),
                s = null == o ? void 0 : null === (i = o.body) || void 0 === i ? void 0 : i.report_id;
            null != s && w(s), M(y[e.nodeRef].report_type), null == a || a(s);
        },
        B = () => {
            var e, r;
            if (D.length < 1) return;
            let i = [...D],
                a = i.pop(),
                o = null !== (r = null == a ? void 0 : a.nodeRef) && void 0 !== r ? r : b;
            if (n.name === d.b.MESSAGE || n.name === d.b.FIRST_DM) {
                let e = n.record.id;
                u.ZP.trackWithMetadata(h.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: n.name,
                    report_sub_type: y[o].report_type,
                    current_node: y[S].id,
                    next_node: y[o].id
                });
            }
            N(null == a ? void 0 : null === (e = a.multiSelect) || void 0 === e ? void 0 : e.state), O(null == a ? void 0 : a.textInput), A(o), L(i), null == m || m('..');
        },
        G = s.useMemo(() => {
            let e = [],
                n = [];
            for (let o in y) {
                var r, i, a;
                let s = y[o];
                if (s.id !== I && s.id !== T && s.id !== b) {
                    if (s.key.endsWith('_SUBMIT') || (null === (r = s.button) || void 0 === r ? void 0 : r.type) === 'submit') {
                        n.push(s);
                        continue;
                    }
                    if ((e.push(s), (null === (i = s.button) || void 0 === i ? void 0 : i.type) === 'next')) {
                        let n = null === (a = s.button) || void 0 === a ? void 0 : a.target,
                            r = e.indexOf(y[n]);
                        -1 !== r && (e.splice(r, 1), e.push(y[n]));
                    }
                }
            }
            return [y[b], ...e, ...n, y[I], y[T]];
        }, [y, b, T, I]);
    return (0, o.jsx)(l.ModalRoot, {
        transitionState: i.transitionState,
        'aria-labelledby': v,
        children: (0, o.jsx)(l.Slides, {
            width: 440,
            activeSlide: S,
            centered: !1,
            children: G.map((e) =>
                (0, o.jsx)(
                    l.Slide,
                    {
                        id: e.id,
                        children: (0, o.jsx)('div', {
                            className: _.slideContainer,
                            children: (0, o.jsx)(p.Z, {
                                node: e,
                                reportType: n,
                                reportSubType: P,
                                history: D,
                                onModalClose: i.onClose,
                                onSelectChild: k,
                                onNavigateBack: B,
                                multiSelect: C,
                                textInput: R,
                                successNodeId: I,
                                failNodeId: T,
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
