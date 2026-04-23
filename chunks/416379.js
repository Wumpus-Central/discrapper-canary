"use strict";
n.d(t, { A: () => T, i: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    c = n(939249),
    u = n(834730),
    d = n(140735),
    h = n(463930),
    m = n(935063),
    p = n(58149),
    f = n(73392),
    g = n(763754),
    _ = n(967144),
    x = n(118517),
    A = n(976860),
    C = n(406704),
    E = n(747926),
    I = n(320501),
    v = n(927057),
    y = n(652215),
    S = n(985018),
    b = n(1468);
let N = "channel-reply-bar-a11y-description";
function j(e) {
    let { channel: t, message: n, replyChainLength: s } = e,
        r = l.useRef(s);
    return (
        l.useEffect(() => {
            r.current = s;
        }),
        l.useEffect(() => {
            (0, p.zV)(y.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: r.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, i.jsxs)(c.D, {
            onClick: function () {
                (0, x.Jx)(t.id), (0, E.Tv)(t, n, "Reply Chain Nudge");
            },
            className: b._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, i.jsx)(u.E, {
                    color: "text-default",
                    className: b.Qq,
                    variant: "text-sm/normal",
                    children: S.intl.format(S.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, i.jsx)(u.E, {
                    color: "text-link",
                    className: b.NG,
                    variant: "text-sm/semibold",
                    children: S.intl.string(S.t.rBIGBL),
                }),
            ],
        })
    );
}
function T(e) {
    let t,
        n,
        { reply: l, chatInputType: s } = e,
        { channel: p, message: E, shouldMention: T, showMentionToggle: R } = l,
        {
            guildId: w,
            nick: L,
            colorString: M,
            colorStrings: O,
            colorRoleName: k,
            authorId: P,
            displayNameStyles: D,
        } = (0, g.Ay)(E),
        U = (0, _.gn)(w, P, O),
        V = (0, f.a)({ displayNameStyles: D }),
        G =
            ((t = p.id),
            (n = E.id),
            (0, a.bG)([I.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let i = I.A.getMessage(t, e);
                    if (i?.type !== y.lAJ.REPLY || null == i.messageReference) return n;
                    e = i.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        F = (0, C.n)(p, E),
        B = s.showThreadPromptOnReply && G >= 2 && F;
    return (0, i.jsx)("div", {
        className: b.e1,
        children: (0, i.jsxs)("div", {
            className: b.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: b.eU,
                    children: [
                        (0, i.jsx)(d.A, { id: N, children: S.intl.formatToPlainString(S.t.EpJL4E, { username: L }) }),
                        (0, i.jsx)(c.D, {
                            onClick: () => (0, A.pX)(y.BVt.CHANNEL(p.getGuildId(), p.id, E.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(u.E, {
                                color: "text-default",
                                className: r()(b.Qq, b.Fn),
                                variant: "text-sm/normal",
                                children: S.intl.format(S.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, i.jsx)(
                                            h.g,
                                            {
                                                className: b.UU,
                                                name: L,
                                                colorString: M,
                                                colorStrings: U,
                                                roleName: k,
                                                displayNameStylesFont: V,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: b.o1,
                            children: [
                                R &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(o.m, {
                                                asContainer: !0,
                                                text: T ? S.intl.string(S.t.DH2o6R) : S.intl.string(S.t.utGGIY),
                                                children: (0, i.jsx)(c.D, {
                                                    role: "switch",
                                                    "aria-checked": T,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, x.vz)(p.id, !T);
                                                    },
                                                    children: (0, i.jsxs)(u.E, {
                                                        variant: "text-sm/bold",
                                                        color: T ? "text-link" : "text-muted",
                                                        className: b.Z4,
                                                        children: [
                                                            (0, i.jsx)(m.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": S.intl.string(S.t.P8tvKG),
                                                                className: b.mM,
                                                            }),
                                                            T ? S.intl.string(S.t.p9jC2r) : S.intl.string(S.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)("div", { className: b.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, i.jsx)(v.x, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, x.Jx)(p.id);
                                    },
                                    "aria-label": S.intl.string(S.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                B && (0, i.jsx)(j, { channel: p, message: E, replyChainLength: G }),
            ],
        }),
    });
}
