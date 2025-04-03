n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
let v = 2,
    O = 10;
function I(e, t) {
    let n = e.id,
        r = t.id;
    return (0, s.e7)(
        [m.Z],
        () => {
            let e = r;
            for (let t = 0; t < O; t++) {
                let r = m.Z.getMessage(n, e);
                if ((null == r ? void 0 : r.type) !== E.uaV.REPLY || null == r.messageReference) return t;
                e = r.messageReference.message_id;
            }
            return O;
        },
        [n, r]
    );
}
function S(e) {
    let { channel: t, message: n, replyChainLength: o } = e;
    function a() {
        (0, f.A6)(t.id), (0, h.R6)(t, n, 'Reply Chain Nudge');
    }
    let s = i.useRef(o);
    return (
        i.useEffect(() => {
            s.current = o;
        }),
        i.useEffect(() => {
            (0, c.yw)(E.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(v + 1, ')'),
                reply_chain_length: s.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t]),
        (0, r.jsxs)(l.P3F, {
            onClick: a,
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
                    children: b.NW.format(b.t.B3V0FB, { count: Math.min(O, o + 1) })
                }),
                (0, r.jsx)(l.Text, {
                    color: 'text-link',
                    className: y.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: b.NW.string(b.t.rBIGBA)
                })
            ]
        })
    );
}
function T(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: o, shouldMention: s, showMentionToggle: c } = t,
        { guildId: h, nick: m, colorString: O, colorStrings: T, colorRoleName: N } = (0, u.ZP)(o),
        A = (0, d.E)(h, T),
        C = I(i, o),
        R = (0, p.NE)(i, o),
        P = n.showThreadPromptOnReply && C >= v && R,
        w = () => (0, _.uL)(E.Z5c.CHANNEL(i.getGuildId(), i.id, o.id));
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
                                className: a()(y.text, y.replyLabel),
                                variant: 'text-sm/normal',
                                children: b.NW.format(b.t['8E4Gxc'], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            l.PUh,
                                            {
                                                className: y.name,
                                                name: m,
                                                color: O,
                                                roleName: N,
                                                roleGradient: A
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
                                                text: s ? b.NW.string(b.t.DH2o6e) : b.NW.string(b.t.utGGIS),
                                                children: (e) => {
                                                    let { onMouseEnter: t, onMouseLeave: n, onFocus: i, onBlur: o } = e;
                                                    return (0, r.jsx)(l.P3F, {
                                                        role: 'switch',
                                                        'aria-checked': s,
                                                        onClick: D,
                                                        onMouseEnter: t,
                                                        onMouseLeave: n,
                                                        onFocus: i,
                                                        onBlur: o,
                                                        children: (0, r.jsxs)(l.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: s ? 'text-link' : 'text-muted',
                                                            className: y.mentionButton,
                                                            children: [
                                                                (0, r.jsx)(l.lOy, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': b.NW.string(b.t.P8tvKC),
                                                                    className: y.mentionIcon
                                                                }),
                                                                s ? b.NW.string(b.t.p9jC2t) : b.NW.string(b.t.U7f3bG)
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
                        message: o,
                        replyChainLength: C
                    })
            ]
        })
    });
}
