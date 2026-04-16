"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(58149),
    d = n(73392),
    _ = n(763754),
    f = n(967144),
    p = n(118517),
    h = n(976860),
    m = n(406704),
    E = n(747926),
    g = n(320501),
    A = n(927057),
    I = n(652215),
    T = n(985018),
    S = n(1468);
let y = 2,
    v = 10;
function N(e, t) {
    let n = e.id,
        r = t.id;
    return (0, o.bG)([g.A], () => {
        let e = r;
        for (let t = 0; t < v; t++) {
            let r = g.A.getMessage(n, e);
            if (r?.type !== I.lAJ.REPLY || null == r.messageReference) return t;
            e = r.messageReference.message_id;
        }
        return v;
    }, [n, r]);
}
function C(e) {
    let { channel: t, message: n, replyChainLength: s } = e;
    function a() {
        (0, p.Jx)(t.id), (0, E.Tv)(t, n, "Reply Chain Nudge");
    }
    let o = i.useRef(s);
    return (
        i.useEffect(() => {
            o.current = s;
        }),
        i.useEffect(() => {
            (0, c.zV)(I.HAw.THREAD_NUDGE_SHOWN, {
                type: `Reply Chain (${y + 1})`,
                reply_chain_length: o.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, r.jsxs)(u.DUT, {
            onClick: a,
            className: S._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, r.jsx)(u.Text, {
                    color: "text-default",
                    className: S.Qq,
                    variant: "text-sm/normal",
                    children: T.intl.format(T.t.B3V0FM, { count: Math.min(v, s + 1) }),
                }),
                (0, r.jsx)(u.Text, {
                    color: "text-link",
                    className: S.NG,
                    variant: "text-sm/semibold",
                    children: T.intl.string(T.t.rBIGBL),
                }),
            ],
        })
    );
}
function R(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: s, shouldMention: o, showMentionToggle: c } = t,
        {
            guildId: E,
            nick: g,
            colorString: v,
            colorStrings: R,
            colorRoleName: O,
            authorId: b,
            displayNameStyles: D,
        } = (0, _.Ay)(s),
        L = (0, f.gn)(E, b, R),
        w = (0, d.a)({ displayNameStyles: D }),
        M = N(i, s),
        P = (0, m.n)(i, s),
        x = n.showThreadPromptOnReply && M >= y && P,
        k = () => (0, h.pX)(I.BVt.CHANNEL(i.getGuildId(), i.id, s.id));
    function U(e) {
        e.stopPropagation(), (0, p.vz)(i.id, !o);
    }
    function G(e) {
        e.stopPropagation(), (0, p.Jx)(i.id);
    }
    return (0, r.jsx)("div", {
        className: S.e1,
        children: (0, r.jsxs)("div", {
            className: S.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: S.eU,
                    children: [
                        (0, r.jsx)(u.DUT, {
                            onClick: k,
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, r.jsx)(u.Text, {
                                color: "text-default",
                                className: a()(S.Qq, S.Fn),
                                variant: "text-sm/normal",
                                children: T.intl.format(T.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            u.gyj,
                                            {
                                                className: S.UU,
                                                name: g,
                                                colorString: v,
                                                colorStrings: L,
                                                roleName: O,
                                                displayNameStylesFont: w,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: S.o1,
                            children: [
                                c &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.m, {
                                                asContainer: !0,
                                                text: o ? T.intl.string(T.t.DH2o6R) : T.intl.string(T.t.utGGIY),
                                                children: (0, r.jsx)(u.DUT, {
                                                    role: "switch",
                                                    "aria-checked": o,
                                                    onClick: U,
                                                    children: (0, r.jsxs)(u.Text, {
                                                        variant: "text-sm/bold",
                                                        color: o ? "text-link" : "text-muted",
                                                        className: S.Z4,
                                                        children: [
                                                            (0, r.jsx)(u.XxR, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": T.intl.string(T.t.P8tvKG),
                                                                className: S.mM,
                                                            }),
                                                            o ? T.intl.string(T.t.p9jC2r) : T.intl.string(T.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)("div", { className: S.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, r.jsx)(A.x, { onClick: G }),
                            ],
                        }),
                    ],
                }),
                x && (0, r.jsx)(C, { channel: i, message: s, replyChainLength: M }),
            ],
        }),
    });
}
