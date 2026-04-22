"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    c = n(939249),
    u = n(834730),
    d = n(463930),
    h = n(935063),
    m = n(58149),
    p = n(73392),
    f = n(763754),
    g = n(967144),
    _ = n(118517),
    x = n(976860),
    A = n(406704),
    C = n(747926),
    E = n(320501),
    I = n(927057),
    v = n(652215),
    y = n(985018),
    S = n(776380);
function b(e) {
    let { channel: t, message: n, replyChainLength: s } = e,
        r = l.useRef(s);
    return (
        l.useEffect(() => {
            r.current = s;
        }),
        l.useEffect(() => {
            (0, m.zV)(v.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: r.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, i.jsxs)(c.D, {
            onClick: function () {
                (0, _.Jx)(t.id), (0, C.Tv)(t, n, "Reply Chain Nudge");
            },
            className: S._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, i.jsx)(u.E, {
                    color: "text-default",
                    className: S.Qq,
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, i.jsx)(u.E, {
                    color: "text-link",
                    className: S.NG,
                    variant: "text-sm/semibold",
                    children: y.intl.string(y.t.rBIGBL),
                }),
            ],
        })
    );
}
function N(e) {
    let t,
        n,
        { reply: l, chatInputType: s } = e,
        { channel: m, message: C, shouldMention: N, showMentionToggle: T } = l,
        {
            guildId: j,
            nick: R,
            colorString: w,
            colorStrings: L,
            colorRoleName: M,
            authorId: k,
            displayNameStyles: O,
        } = (0, f.Ay)(C),
        P = (0, g.gn)(j, k, L),
        D = (0, p.a)({ displayNameStyles: O }),
        U =
            ((t = m.id),
            (n = C.id),
            (0, a.bG)([E.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let i = E.A.getMessage(t, e);
                    if (i?.type !== v.lAJ.REPLY || null == i.messageReference) return n;
                    e = i.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        V = (0, A.n)(m, C),
        G = s.showThreadPromptOnReply && U >= 2 && V;
    return (0, i.jsx)("div", {
        className: S.e1,
        children: (0, i.jsxs)("div", {
            className: S.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: S.eU,
                    children: [
                        (0, i.jsx)(c.D, {
                            onClick: () => (0, x.pX)(v.BVt.CHANNEL(m.getGuildId(), m.id, C.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(u.E, {
                                color: "text-default",
                                className: r()(S.Qq, S.Fn),
                                variant: "text-sm/normal",
                                children: y.intl.format(y.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, i.jsx)(
                                            d.g,
                                            {
                                                className: S.UU,
                                                name: R,
                                                colorString: w,
                                                colorStrings: P,
                                                roleName: M,
                                                displayNameStylesFont: D,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: S.o1,
                            children: [
                                T &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(o.m, {
                                                asContainer: !0,
                                                text: N ? y.intl.string(y.t.DH2o6R) : y.intl.string(y.t.utGGIY),
                                                children: (0, i.jsx)(c.D, {
                                                    role: "switch",
                                                    "aria-checked": N,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, _.vz)(m.id, !N);
                                                    },
                                                    children: (0, i.jsxs)(u.E, {
                                                        variant: "text-sm/bold",
                                                        color: N ? "text-link" : "text-muted",
                                                        className: S.Z4,
                                                        children: [
                                                            (0, i.jsx)(h.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": y.intl.string(y.t.P8tvKG),
                                                                className: S.mM,
                                                            }),
                                                            N ? y.intl.string(y.t.p9jC2r) : y.intl.string(y.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)("div", { className: S.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, i.jsx)(I.x, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, _.Jx)(m.id);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                G && (0, i.jsx)(b, { channel: m, message: C, replyChainLength: U }),
            ],
        }),
    });
}
