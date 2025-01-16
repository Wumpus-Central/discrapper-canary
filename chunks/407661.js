r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(367907),
    d = r(739566),
    f = r(623292),
    _ = r(703656),
    h = r(665906),
    p = r(488131),
    m = r(375954),
    g = r(962293),
    E = r(981631),
    v = r(388032),
    I = r(112726);
let T = 2,
    b = 10;
function y(e, n) {
    let r = e.id,
        i = n.id;
    return (0, l.e7)(
        [m.Z],
        () => {
            let e = i;
            for (let n = 0; n < b; n++) {
                let i = m.Z.getMessage(r, e);
                if ((null == i ? void 0 : i.type) !== E.uaV.REPLY || null == i.messageReference) return n;
                e = i.messageReference.message_id;
            }
            return b;
        },
        [r, i]
    );
}
function S(e) {
    let { channel: n, message: r, replyChainLength: s } = e;
    function o() {
        (0, f.A6)(n.id), (0, p.R6)(n, r, 'Reply Chain Nudge');
    }
    let l = a.useRef(s);
    return (
        a.useEffect(() => {
            l.current = s;
        }),
        a.useEffect(() => {
            (0, c.yw)(E.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(T + 1, ')'),
                reply_chain_length: l.current + 1,
                channel_id: n.id,
                guild_id: n.guild_id
            });
        }, [n]),
        (0, i.jsxs)(u.Clickable, {
            onClick: o,
            className: I.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, i.jsx)(u.Text, {
                    color: 'header-secondary',
                    className: I.text,
                    variant: 'text-sm/normal',
                    children: v.intl.format(v.t.B3V0FB, { count: Math.min(b, s + 1) })
                }),
                (0, i.jsx)(u.Text, {
                    color: 'text-link',
                    className: I.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: v.intl.string(v.t.rBIGBA)
                })
            ]
        })
    );
}
function A(e) {
    let { reply: n, chatInputType: r } = e,
        { channel: a, message: s, shouldMention: l, showMentionToggle: c } = n,
        { nick: p, colorString: m, colorRoleName: b } = (0, d.ZP)(s),
        A = y(a, s),
        N = (0, h.NE)(a, s),
        C = r.showThreadPromptOnReply && A >= T && N,
        R = () => (0, _.uL)(E.Z5c.CHANNEL(a.getGuildId(), a.id, s.id));
    function O(e) {
        e.stopPropagation(), (0, f.qx)(a.id, !l);
    }
    function D(e) {
        e.stopPropagation(), (0, f.A6)(a.id);
    }
    return (0, i.jsx)('div', {
        className: I.clipContainer,
        children: (0, i.jsxs)('div', {
            className: I.container,
            children: [
                (0, i.jsxs)('div', {
                    className: I.replyBar,
                    children: [
                        (0, i.jsx)(u.Clickable, {
                            onClick: R,
                            focusProps: {
                                offset: {
                                    top: -8,
                                    right: -4,
                                    bottom: -8,
                                    left: -4
                                }
                            },
                            children: (0, i.jsx)(u.Text, {
                                color: 'header-secondary',
                                className: o()(I.text, I.replyLabel),
                                variant: 'text-sm/normal',
                                children: v.intl.format(v.t['8E4Gxc'], {
                                    userHook: (e, n) =>
                                        (0, i.jsx)(
                                            u.NameWithRole,
                                            {
                                                className: I.name,
                                                name: p,
                                                color: m,
                                                roleName: b
                                            },
                                            n
                                        )
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: I.actions,
                            children: [
                                c &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.Tooltip, {
                                                text: l ? v.intl.string(v.t.DH2o6e) : v.intl.string(v.t.utGGIS),
                                                children: (e) => {
                                                    let { onMouseEnter: n, onMouseLeave: r, onFocus: a, onBlur: s } = e;
                                                    return (0, i.jsx)(u.Clickable, {
                                                        role: 'switch',
                                                        'aria-checked': l,
                                                        onClick: O,
                                                        onMouseEnter: n,
                                                        onMouseLeave: r,
                                                        onFocus: a,
                                                        onBlur: s,
                                                        children: (0, i.jsxs)(u.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: l ? 'text-link' : 'text-muted',
                                                            className: I.mentionButton,
                                                            children: [
                                                                (0, i.jsx)(u.AtIcon, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': v.intl.string(v.t.P8tvKC),
                                                                    className: I.mentionIcon
                                                                }),
                                                                l ? v.intl.string(v.t.p9jC2t) : v.intl.string(v.t.U7f3bG)
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, i.jsx)('div', {
                                                className: I.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, i.jsx)(g.B, { onClick: D })
                            ]
                        })
                    ]
                }),
                C &&
                    (0, i.jsx)(S, {
                        channel: a,
                        message: s,
                        replyChainLength: A
                    })
            ]
        })
    });
}
