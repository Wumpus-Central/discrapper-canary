"use strict";
n.d(t, { A: () => b, i: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(939249),
    c = n(834730),
    d = n(140735),
    _ = n(463930),
    f = n(935063),
    p = n(58149),
    h = n(73392),
    E = n(763754),
    m = n(967144),
    g = n(118517),
    A = n(976860),
    I = n(406704),
    T = n(747926),
    S = n(320501),
    y = n(927057),
    N = n(652215),
    v = n(985018),
    C = n(1468);
let O = "channel-reply-bar-a11y-description";
function R(e) {
    let { channel: t, message: n, replyChainLength: s } = e,
        a = i.useRef(s);
    return (
        i.useEffect(() => {
            a.current = s;
        }),
        i.useEffect(() => {
            (0, p.zV)(N.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: a.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, r.jsxs)(u.D, {
            onClick: function () {
                (0, g.Jx)(t.id), (0, T.Tv)(t, n, "Reply Chain Nudge");
            },
            className: C._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, r.jsx)(c.E, {
                    color: "text-default",
                    className: C.Qq,
                    variant: "text-sm/normal",
                    children: v.intl.format(v.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, r.jsx)(c.E, {
                    color: "text-link",
                    className: C.NG,
                    variant: "text-sm/semibold",
                    children: v.intl.string(v.t.rBIGBL),
                }),
            ],
        })
    );
}
function b(e) {
    let t,
        n,
        { reply: i, chatInputType: s } = e,
        { channel: p, message: T, shouldMention: b, showMentionToggle: D } = i,
        {
            guildId: L,
            nick: w,
            colorString: M,
            colorStrings: P,
            colorRoleName: x,
            authorId: k,
            displayNameStyles: U,
        } = (0, E.Ay)(T),
        G = (0, m.gn)(L, k, P),
        F = (0, h.a)({ displayNameStyles: U }),
        V =
            ((t = p.id),
            (n = T.id),
            (0, o.bG)([S.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let r = S.A.getMessage(t, e);
                    if (r?.type !== N.lAJ.REPLY || null == r.messageReference) return n;
                    e = r.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        B = (0, I.n)(p, T),
        H = s.showThreadPromptOnReply && V >= 2 && B;
    return (0, r.jsx)("div", {
        className: C.e1,
        children: (0, r.jsxs)("div", {
            className: C.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: C.eU,
                    children: [
                        (0, r.jsx)(d.A, { id: O, children: v.intl.formatToPlainString(v.t.EpJL4E, { username: w }) }),
                        (0, r.jsx)(u.D, {
                            onClick: () => (0, A.pX)(N.BVt.CHANNEL(p.getGuildId(), p.id, T.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, r.jsx)(c.E, {
                                color: "text-default",
                                className: a()(C.Qq, C.Fn),
                                variant: "text-sm/normal",
                                children: v.intl.format(v.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            _.g,
                                            {
                                                className: C.UU,
                                                name: w,
                                                colorString: M,
                                                colorStrings: G,
                                                roleName: x,
                                                displayNameStylesFont: F,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: C.o1,
                            children: [
                                D &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.m, {
                                                asContainer: !0,
                                                text: b ? v.intl.string(v.t.DH2o6R) : v.intl.string(v.t.utGGIY),
                                                children: (0, r.jsx)(u.D, {
                                                    role: "switch",
                                                    "aria-checked": b,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, g.vz)(p.id, !b);
                                                    },
                                                    children: (0, r.jsxs)(c.E, {
                                                        variant: "text-sm/bold",
                                                        color: b ? "text-link" : "text-muted",
                                                        className: C.Z4,
                                                        children: [
                                                            (0, r.jsx)(f.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": v.intl.string(v.t.P8tvKG),
                                                                className: C.mM,
                                                            }),
                                                            b ? v.intl.string(v.t.p9jC2r) : v.intl.string(v.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)("div", { className: C.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, r.jsx)(y.x, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, g.Jx)(p.id);
                                    },
                                    "aria-label": v.intl.string(v.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                H && (0, r.jsx)(R, { channel: p, message: T, replyChainLength: V }),
            ],
        }),
    });
}
