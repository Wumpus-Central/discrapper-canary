n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(367907),
    u = n(739566),
    d = n(884902),
    f = n(623292),
    _ = n(703656),
    p = n(665906),
    h = n(488131),
    m = n(375954),
    g = n(962293),
    E = n(981631),
    b = n(388032),
    y = n(453091);
let O = 2,
    v = 10;
function I(e, t) {
    let n = e.id,
        r = t.id;
    return (0, s.e7)(
        [m.Z],
        () => {
            let e = r;
            for (let t = 0; t < v; t++) {
                let r = m.Z.getMessage(n, e);
                if ((null == r ? void 0 : r.type) !== E.uaV.REPLY || null == r.messageReference) return t;
                e = r.messageReference.message_id;
            }
            return v;
        },
        [n, r]
    );
}
function S(e) {
    let { channel: t, message: n, replyChainLength: a } = e;
    function o() {
        (0, f.A6)(t.id), (0, h.R6)(t, n, 'Reply Chain Nudge');
    }
    let s = i.useRef(a);
    return (
        i.useEffect(() => {
            s.current = a;
        }),
        i.useEffect(() => {
            (0, c.yw)(E.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(O + 1, ')'),
                reply_chain_length: s.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t]),
        (0, r.jsxs)(l.P3F, {
            onClick: o,
            className: y.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    className: y.text,
                    variant: 'text-sm/normal',
                    children: b.intl.format(b.t.B3V0FB, { count: Math.min(v, a + 1) })
                }),
                (0, r.jsx)(l.Text, {
                    color: 'text-link',
                    className: y.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: b.intl.string(b.t.rBIGBA)
                })
            ]
        })
    );
}
function T(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: a, shouldMention: s, showMentionToggle: c } = t,
        { guildId: h, nick: m, colorString: v, colorStrings: T, colorRoleName: A } = (0, u.ZP)(a),
        N = (0, d.X)(h, T),
        C = I(i, a),
        R = (0, p.NE)(i, a),
        P = n.showThreadPromptOnReply && C >= O && R,
        w = () => (0, _.uL)(E.Z5c.CHANNEL(i.getGuildId(), i.id, a.id));
    function D(e) {
        e.stopPropagation(), (0, f.qx)(i.id, !s);
    }
    function L(e) {
        e.stopPropagation(), (0, f.A6)(i.id);
    }
    return (0, r.jsx)('div', {
        className: y.clipContainer,
        children: (0, r.jsxs)('div', {
            className: y.container,
            children: [
                (0, r.jsxs)('div', {
                    className: y.replyBar,
                    children: [
                        (0, r.jsx)(l.P3F, {
                            onClick: w,
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
                                className: o()(y.text, y.replyLabel),
                                variant: 'text-sm/normal',
                                children: b.intl.format(b.t['8E4Gxc'], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            l.PUh,
                                            {
                                                className: y.name,
                                                name: m,
                                                color: v,
                                                roleName: A,
                                                roleColors: N
                                            },
                                            t
                                        )
                                })
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: y.actions,
                            children: [
                                c &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.ua7, {
                                                text: s ? b.intl.string(b.t.DH2o6e) : b.intl.string(b.t.utGGIS),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n, onFocus: i, onBlur: a } = e;
                                                    return (0, r.jsx)(l.P3F, {
                                                        role: 'switch',
                                                        'aria-checked': s,
                                                        onClick: D,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        onFocus: i,
                                                        onBlur: a,
                                                        children: (0, r.jsxs)(l.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: s ? 'text-link' : 'text-muted',
                                                            className: y.mentionButton,
                                                            children: [
                                                                (0, r.jsx)(l.lOy, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': b.intl.string(b.t.P8tvKC),
                                                                    className: y.mentionIcon
                                                                }),
                                                                s ? b.intl.string(b.t.p9jC2t) : b.intl.string(b.t.U7f3bG)
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, r.jsx)('div', {
                                                className: y.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, r.jsx)(g.B, { onClick: L })
                            ]
                        })
                    ]
                }),
                P &&
                    (0, r.jsx)(S, {
                        channel: i,
                        message: a,
                        replyChainLength: C
                    })
            ]
        })
    });
}
