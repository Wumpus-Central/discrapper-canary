n.d(t, { Z: () => S });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(367907),
    c = n(739566),
    d = n(623292),
    f = n(703656),
    _ = n(665906),
    p = n(488131),
    h = n(375954),
    m = n(962293),
    g = n(981631),
    E = n(388032),
    v = n(112726);
let y = 2,
    I = 10;
function b(e, t) {
    let n = e.id,
        i = t.id;
    return (0, o.e7)(
        [h.Z],
        () => {
            let e = i;
            for (let t = 0; t < I; t++) {
                let i = h.Z.getMessage(n, e);
                if ((null == i ? void 0 : i.type) !== g.uaV.REPLY || null == i.messageReference) return t;
                e = i.messageReference.message_id;
            }
            return I;
        },
        [n, i]
    );
}
function T(e) {
    let { channel: t, message: n, replyChainLength: a } = e;
    function s() {
        (0, d.A6)(t.id), (0, p.R6)(t, n, 'Reply Chain Nudge');
    }
    let o = r.useRef(a);
    return (
        r.useEffect(() => {
            o.current = a;
        }),
        r.useEffect(() => {
            (0, u.yw)(g.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(y + 1, ')'),
                reply_chain_length: o.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t]),
        (0, i.jsxs)(l.P3F, {
            onClick: s,
            className: v.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, i.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: v.text,
                    variant: 'text-sm/normal',
                    children: E.intl.format(E.t.B3V0FB, { count: Math.min(I, a + 1) })
                }),
                (0, i.jsx)(l.Text, {
                    color: 'text-link',
                    className: v.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: E.intl.string(E.t.rBIGBA)
                })
            ]
        })
    );
}
function S(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: r, message: a, shouldMention: o, showMentionToggle: u } = t,
        { nick: p, colorString: h, colorRoleName: I } = (0, c.ZP)(a),
        S = b(r, a),
        A = (0, _.NE)(r, a),
        N = n.showThreadPromptOnReply && S >= y && A,
        C = () => (0, f.uL)(g.Z5c.CHANNEL(r.getGuildId(), r.id, a.id));
    function R(e) {
        e.stopPropagation(), (0, d.qx)(r.id, !o);
    }
    function O(e) {
        e.stopPropagation(), (0, d.A6)(r.id);
    }
    return (0, i.jsx)('div', {
        className: v.clipContainer,
        children: (0, i.jsxs)('div', {
            className: v.container,
            children: [
                (0, i.jsxs)('div', {
                    className: v.replyBar,
                    children: [
                        (0, i.jsx)(l.P3F, {
                            onClick: C,
                            focusProps: {
                                offset: {
                                    top: -8,
                                    right: -4,
                                    bottom: -8,
                                    left: -4
                                }
                            },
                            children: (0, i.jsx)(l.Text, {
                                color: 'header-secondary',
                                className: s()(v.text, v.replyLabel),
                                variant: 'text-sm/normal',
                                children: E.intl.format(E.t['8E4Gxc'], {
                                    userHook: (e, t) =>
                                        (0, i.jsx)(
                                            l.PUh,
                                            {
                                                className: v.name,
                                                name: p,
                                                color: h,
                                                roleName: I
                                            },
                                            t
                                        )
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: v.actions,
                            children: [
                                u &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(l.ua7, {
                                                text: o ? E.intl.string(E.t.DH2o6e) : E.intl.string(E.t.utGGIS),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n, onFocus: r, onBlur: a } = e;
                                                    return (0, i.jsx)(l.P3F, {
                                                        role: 'switch',
                                                        'aria-checked': o,
                                                        onClick: R,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        onFocus: r,
                                                        onBlur: a,
                                                        children: (0, i.jsxs)(l.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: o ? 'text-link' : 'text-muted',
                                                            className: v.mentionButton,
                                                            children: [
                                                                (0, i.jsx)(l.lOy, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': E.intl.string(E.t.P8tvKC),
                                                                    className: v.mentionIcon
                                                                }),
                                                                o ? E.intl.string(E.t.p9jC2t) : E.intl.string(E.t.U7f3bG)
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, i.jsx)('div', {
                                                className: v.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, i.jsx)(m.B, { onClick: O })
                            ]
                        })
                    ]
                }),
                N &&
                    (0, i.jsx)(T, {
                        channel: r,
                        message: a,
                        replyChainLength: S
                    })
            ]
        })
    });
}
