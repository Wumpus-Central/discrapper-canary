r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(367907),
    d = r(739566),
    f = r(623292),
    p = r(703656),
    h = r(665906),
    _ = r(488131),
    m = r(375954),
    g = r(962293),
    E = r(981631),
    v = r(388032),
    y = r(112726);
let b = 2,
    I = 10;
function T(e, n) {
    let r = e.id,
        i = n.id;
    return (0, l.e7)(
        [m.Z],
        () => {
            let e = i;
            for (let n = 0; n < I; n++) {
                let i = m.Z.getMessage(r, e);
                if ((null == i ? void 0 : i.type) !== E.uaV.REPLY || null == i.messageReference) return n;
                e = i.messageReference.message_id;
            }
            return I;
        },
        [r, i]
    );
}
function S(e) {
    let { channel: n, message: r, replyChainLength: o } = e;
    function s() {
        (0, f.A6)(n.id), (0, _.R6)(n, r, 'Reply Chain Nudge');
    }
    let l = a.useRef(o);
    return (
        a.useEffect(() => {
            l.current = o;
        }),
        a.useEffect(() => {
            (0, c.yw)(E.rMx.THREAD_NUDGE_SHOWN, {
                type: 'Reply Chain ('.concat(b + 1, ')'),
                reply_chain_length: l.current + 1,
                channel_id: n.id,
                guild_id: n.guild_id
            });
        }, [n]),
        (0, i.jsxs)(u.Clickable, {
            onClick: s,
            className: y.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4
                }
            },
            children: [
                (0, i.jsx)(u.Text, {
                    color: 'header-secondary',
                    className: y.text,
                    variant: 'text-sm/normal',
                    children: v.intl.format(v.t.B3V0FB, { count: Math.min(I, o + 1) })
                }),
                (0, i.jsx)(u.Text, {
                    color: 'text-link',
                    className: y.createThreadButton,
                    variant: 'text-sm/semibold',
                    children: v.intl.string(v.t.rBIGBA)
                })
            ]
        })
    );
}
function A(e) {
    let { reply: n, chatInputType: r } = e,
        { channel: a, message: o, shouldMention: l, showMentionToggle: c } = n,
        { nick: _, colorString: m, colorRoleName: I } = (0, d.ZP)(o),
        A = T(a, o),
        C = (0, h.NE)(a, o),
        N = r.showThreadPromptOnReply && A >= b && C,
        R = () => (0, p.uL)(E.Z5c.CHANNEL(a.getGuildId(), a.id, o.id));
    function O(e) {
        e.stopPropagation(), (0, f.qx)(a.id, !l);
    }
    function D(e) {
        e.stopPropagation(), (0, f.A6)(a.id);
    }
    return (0, i.jsx)('div', {
        className: y.clipContainer,
        children: (0, i.jsxs)('div', {
            className: y.container,
            children: [
                (0, i.jsxs)('div', {
                    className: y.replyBar,
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
                                className: s()(y.text, y.replyLabel),
                                variant: 'text-sm/normal',
                                children: v.intl.format(v.t['8E4Gxc'], {
                                    userHook: (e, n) =>
                                        (0, i.jsx)(
                                            u.NameWithRole,
                                            {
                                                className: y.name,
                                                name: _,
                                                color: m,
                                                roleName: I
                                            },
                                            n
                                        )
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: y.actions,
                            children: [
                                c &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.Tooltip, {
                                                text: l ? v.intl.string(v.t.DH2o6e) : v.intl.string(v.t.utGGIS),
                                                children: (e) => {
                                                    let { onMouseEnter: n, onMouseLeave: r, onFocus: a, onBlur: o } = e;
                                                    return (0, i.jsx)(u.Clickable, {
                                                        role: 'switch',
                                                        'aria-checked': l,
                                                        onClick: O,
                                                        onMouseEnter: n,
                                                        onMouseLeave: r,
                                                        onFocus: a,
                                                        onBlur: o,
                                                        children: (0, i.jsxs)(u.Text, {
                                                            variant: 'text-sm/bold',
                                                            color: l ? 'text-link' : 'text-muted',
                                                            className: y.mentionButton,
                                                            children: [
                                                                (0, i.jsx)(u.AtIcon, {
                                                                    size: 'md',
                                                                    color: 'currentColor',
                                                                    'aria-label': v.intl.string(v.t.P8tvKC),
                                                                    className: y.mentionIcon
                                                                }),
                                                                l ? v.intl.string(v.t.p9jC2t) : v.intl.string(v.t.U7f3bG)
                                                            ]
                                                        })
                                                    });
                                                }
                                            }),
                                            (0, i.jsx)('div', {
                                                className: y.separator,
                                                'aria-hidden': !0
                                            })
                                        ]
                                    }),
                                (0, i.jsx)(g.B, { onClick: D })
                            ]
                        })
                    ]
                }),
                N &&
                    (0, i.jsx)(S, {
                        channel: a,
                        message: o,
                        replyChainLength: A
                    })
            ]
        })
    });
}
