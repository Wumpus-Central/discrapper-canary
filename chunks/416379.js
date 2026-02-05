"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(747926),
    E = n(320501),
    A = n(927057),
    I = n(652215),
    T = n(985018),
    y = n(785263);
let S = 2,
    v = 10;
function C(e, t) {
    let n = e.id,
        r = t.id;
    return (0, o.bG)([E.A], () => {
        let e = r;
        for (let t = 0; t < v; t++) {
            let r = E.A.getMessage(n, e);
            if (r?.type !== I.lAJ.REPLY || null == r.messageReference) return t;
            e = r.messageReference.message_id;
        }
        return v;
    }, [n, r]);
}
function b(e) {
    let { channel: t, message: n, replyChainLength: a } = e;
    function s() {
        (0, p.Jx)(t.id), (0, g.Tv)(t, n, "Reply Chain Nudge");
    }
    let o = i.useRef(a);
    return (
        i.useEffect(() => {
            o.current = a;
        }),
        i.useEffect(() => {
            (0, c.zV)(I.HAw.THREAD_NUDGE_SHOWN, {
                type: `Reply Chain (${S + 1})`,
                reply_chain_length: o.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, r.jsxs)(u.DUT, {
            onClick: s,
            className: y._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, r.jsx)(u.Text, {
                    color: "text-default",
                    className: y.Qq,
                    variant: "text-sm/normal",
                    children: T.intl.format(T.t.B3V0FM, { count: Math.min(v, a + 1) }),
                }),
                (0, r.jsx)(u.Text, {
                    color: "text-link",
                    className: y.NG,
                    variant: "text-sm/semibold",
                    children: T.intl.string(T.t.rBIGBL),
                }),
            ],
        })
    );
}
function N(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: a, shouldMention: o, showMentionToggle: c } = t,
        {
            guildId: g,
            nick: E,
            colorString: v,
            colorStrings: N,
            colorRoleName: R,
            authorId: O,
            displayNameStyles: D,
        } = (0, _.Ay)(a),
        L = (0, f.gn)(g, O, N),
        w = (0, d.a)({ displayNameStyles: D }),
        x = C(i, a),
        P = (0, m.n)(i, a),
        M = n.showThreadPromptOnReply && x >= S && P,
        k = () => (0, h.pX)(I.BVt.CHANNEL(i.getGuildId(), i.id, a.id));
    function U(e) {
        e.stopPropagation(), (0, p.vz)(i.id, !o);
    }
    function G(e) {
        e.stopPropagation(), (0, p.Jx)(i.id);
    }
    return (0, r.jsx)("div", {
        className: y.e1,
        children: (0, r.jsxs)("div", {
            className: y.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: y.eU,
                    children: [
                        (0, r.jsx)(u.DUT, {
                            onClick: k,
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, r.jsx)(u.Text, {
                                color: "text-default",
                                className: s()(y.Qq, y.Fn),
                                variant: "text-sm/normal",
                                children: T.intl.format(T.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            u.gyj,
                                            {
                                                className: y.UU,
                                                name: E,
                                                colorString: v,
                                                colorStrings: L,
                                                roleName: R,
                                                displayNameStylesFont: w,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: y.o1,
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
                                                        className: y.Z4,
                                                        children: [
                                                            (0, r.jsx)(u.XxR, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": T.intl.string(T.t.P8tvKG),
                                                                className: y.mM,
                                                            }),
                                                            o ? T.intl.string(T.t.p9jC2r) : T.intl.string(T.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)("div", { className: y.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, r.jsx)(A.x, { onClick: G }),
                            ],
                        }),
                    ],
                }),
                M && (0, r.jsx)(b, { channel: i, message: a, replyChainLength: x }),
            ],
        }),
    });
}
