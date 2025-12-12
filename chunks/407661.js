n.d(t, { Z: () => A });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(367907),
    d = n(7284),
    f = n(739566),
    p = n(884902),
    _ = n(623292),
    m = n(703656),
    h = n(665906),
    g = n(488131),
    E = n(375954),
    b = n(962293),
    y = n(981631),
    O = n(388032),
    v = n(204427);
let S = 2,
    I = 10;
function T(e, t) {
    let n = e.id,
        r = t.id;
    return (0, s.e7)([E.Z], () => {
        let e = r;
        for (let t = 0; t < I; t++) {
            let r = E.Z.getMessage(n, e);
            if ((null == r ? void 0 : r.type) !== y.uaV.REPLY || null == r.messageReference) return t;
            e = r.messageReference.message_id;
        }
        return I;
    }, [n, r]);
}
function C(e) {
    let { channel: t, message: n, replyChainLength: o } = e;
    function a() {
        (0, _.A6)(t.id), (0, g.R6)(t, n, "Reply Chain Nudge");
    }
    let s = i.useRef(o);
    return (
        i.useEffect(() => {
            s.current = o;
        }),
        i.useEffect(() => {
            (0, u.yw)(y.rMx.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (".concat(S + 1, ")"),
                reply_chain_length: s.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, r.jsxs)(c.P3F, {
            onClick: a,
            className: v.threadSuggestionBar,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4,
                },
            },
            children: [
                (0, r.jsx)(c.Text, {
                    color: "text-default",
                    className: v.text,
                    variant: "text-sm/normal",
                    children: O.intl.format(O.t.B3V0FM, { count: Math.min(I, o + 1) }),
                }),
                (0, r.jsx)(c.Text, {
                    color: "text-link",
                    className: v.createThreadButton,
                    variant: "text-sm/semibold",
                    children: O.intl.string(O.t.rBIGBL),
                }),
            ],
        })
    );
}
function A(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: o, shouldMention: s, showMentionToggle: u } = t,
        {
            guildId: g,
            nick: E,
            colorString: I,
            colorStrings: A,
            colorRoleName: N,
            authorId: P,
            displayNameStyles: R,
        } = (0, f.ZP)(o),
        w = (0, p.X7)(g, P, A),
        D = (0, d.j)({ displayNameStyles: R }),
        x = T(i, o),
        L = (0, h.NE)(i, o),
        j = n.showThreadPromptOnReply && x >= S && L,
        M = () => (0, m.uL)(y.Z5c.CHANNEL(i.getGuildId(), i.id, o.id));
    function k(e) {
        e.stopPropagation(), (0, _.qx)(i.id, !s);
    }
    function U(e) {
        e.stopPropagation(), (0, _.A6)(i.id);
    }
    return (0, r.jsx)("div", {
        className: v.clipContainer,
        children: (0, r.jsxs)("div", {
            className: v.container,
            children: [
                (0, r.jsxs)("div", {
                    className: v.replyBar,
                    children: [
                        (0, r.jsx)(c.P3F, {
                            onClick: M,
                            focusProps: {
                                offset: {
                                    top: -8,
                                    right: -4,
                                    bottom: -8,
                                    left: -4,
                                },
                            },
                            children: (0, r.jsx)(c.Text, {
                                color: "text-default",
                                className: a()(v.text, v.replyLabel),
                                variant: "text-sm/normal",
                                children: O.intl.format(O.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            c.PUh,
                                            {
                                                className: v.name,
                                                name: E,
                                                colorString: I,
                                                colorStrings: w,
                                                roleName: N,
                                                displayNameStylesFont: D,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: v.actions,
                            children: [
                                u &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.u, {
                                                asContainer: !0,
                                                text: s ? O.intl.string(O.t.DH2o6R) : O.intl.string(O.t.utGGIY),
                                                children: (0, r.jsx)(c.P3F, {
                                                    role: "switch",
                                                    "aria-checked": s,
                                                    onClick: k,
                                                    children: (0, r.jsxs)(c.Text, {
                                                        variant: "text-sm/bold",
                                                        color: s ? "text-link" : "text-muted",
                                                        className: v.mentionButton,
                                                        children: [
                                                            (0, r.jsx)(c.lOy, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": O.intl.string(O.t.P8tvKG),
                                                                className: v.mentionIcon,
                                                            }),
                                                            s ? O.intl.string(O.t.p9jC2r) : O.intl.string(O.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: v.separator,
                                                "aria-hidden": !0,
                                            }),
                                        ],
                                    }),
                                (0, r.jsx)(b.B, { onClick: U }),
                            ],
                        }),
                    ],
                }),
                j &&
                    (0, r.jsx)(C, {
                        channel: i,
                        message: o,
                        replyChainLength: x,
                    }),
            ],
        }),
    });
}
