n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(367907),
    u = n(7284),
    d = n(739566),
    f = n(884902),
    _ = n(623292),
    p = n(703656),
    h = n(665906),
    m = n(488131),
    g = n(375954),
    E = n(962293),
    b = n(981631),
    y = n(388032),
    O = n(453091);
let v = 2,
    I = 10;
function T(e, t) {
    let n = e.id,
        r = t.id;
    return (0, s.e7)(
        [g.Z],
        () => {
            let e = r;
            for (let t = 0; t < I; t++) {
                let r = g.Z.getMessage(n, e);
                if ((null == r ? void 0 : r.type) !== b.uaV.REPLY || null == r.messageReference) return t;
                e = r.messageReference.message_id;
            }
            return I;
        },
        [n, r]
    );
}
function S(e) {
    let { channel: t, message: n, replyChainLength: a } = e;
    function o() {
        ((0, _.A6)(t.id), (0, m.R6)(t, n, 'Reply Chain Nudge'));
    }
    let s = i.useRef(a);
    return (
        i.useEffect(() => {
            s.current = a;
        }),
        i.useEffect(() => {
            (0, c.yw)(b.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(v + 1, ')'),
                reply_chain_length: s.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t]),
        (0, r.jsxs)(l.P3F, {
            onClick: o,
            className: O.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: O.text,
                    variant: 'text-sm/normal',
                    children: y.intl.format(y.t.B3V0FB, { count: Math.min(I, a + 1) })
                }),
                (0, r.jsx)(l.Text, {
                    color: 'text-link',
                    className: O.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: y.intl.string(y.t.rBIGBA)
                })
            ]
        })
    );
}
function A(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: a, shouldMention: s, showMentionToggle: c } = t,
        { guildId: m, nick: g, colorString: I, colorStrings: A, colorRoleName: N, authorId: C, displayNameStyles: R } = (0, d.ZP)(a),
        P = (0, f.X7)(m, C, A),
        w = (0, u.j)({ displayNameStyles: R }),
        D = T(i, a),
        L = (0, h.NE)(i, a),
        x = n.showThreadPromptOnReply && D >= v && L,
        M = () => (0, p.uL)(b.Z5c.CHANNEL(i.getGuildId(), i.id, a.id));
    function k(e) {
        (e.stopPropagation(), (0, _.qx)(i.id, !s));
    }
    function j(e) {
        (e.stopPropagation(), (0, _.A6)(i.id));
    }
    return (0, r.jsx)('div', {
        className: O.clipContainer,
        children: (0, r.jsxs)('div', {
            className: O.container,
            children: [
                (0, r.jsxs)('div', {
                    className: O.replyBar,
                    children: [
                        (0, r.jsx)(l.P3F, {
                            onClick: M,
                            focusProps: {
                                offset: {
                                    top: -8,
                                    right: -4,
                                    bottom: -8,
                                    left: -4
                                }
                            },
                            children: (0, r.jsx)(l.Text, {
                                color: 'header-secondary',
                                className: o()(O.text, O.replyLabel),
                                variant: 'text-sm/normal',
                                children: y.intl.format(y.t['8E4Gxc'], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            l.PUh,
                                            {
                                                className: O.name,
                                                name: g,
                                                colorString: I,
                                                colorStrings: P,
                                                roleName: N,
                                                nameTextClassName: w
                                            },
                                            t
                                        )
                                })
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: O.actions,
                            children: [
                                c &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.ua7, {
                                                text: s ? y.intl.string(y.t.DH2o6e) : y.intl.string(y.t.utGGIS),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n, onFocus: i, onBlur: a } = e;
                                                    return (0, r.jsx)(l.P3F, {
                                                        role: 'switch',
                                                        'aria-checked': s,
                                                        onClick: k,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        onFocus: i,
                                                        onBlur: a,
                                                        children: (0, r.jsxs)(l.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: s ? 'text-link' : 'text-muted',
                                                            className: O.mentionButton,
                                                            children: [
                                                                (0, r.jsx)(l.lOy, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': y.intl.string(y.t.P8tvKC),
                                                                    className: O.mentionIcon
                                                                }),
                                                                s ? y.intl.string(y.t.p9jC2t) : y.intl.string(y.t.U7f3bG)
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, r.jsx)('div', {
                                                className: O.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, r.jsx)(E.B, { onClick: j })
                            ]
                        })
                    ]
                }),
                x &&
                    (0, r.jsx)(S, {
                        channel: i,
                        message: a,
                        replyChainLength: D
                    })
            ]
        })
    });
}
