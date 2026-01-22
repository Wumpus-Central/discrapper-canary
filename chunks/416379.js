n.d(t, {
    A: () => C,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(58149),
    d = n(73392),
    f = n(763754),
    p = n(967144),
    _ = n(118517),
    h = n(976860),
    m = n(406704),
    g = n(747926),
    E = n(320501),
    b = n(927057),
    y = n(652215),
    O = n(985018),
    A = n(785263);
let v = 2,
    S = 10;

function I(e, t) {
    let n = e.id,
        r = t.id;
    return (0, o.bG)([E.A], () => {
        let e = r;
        for (let t = 0; t < S; t++) {
            let r = E.A.getMessage(n, e);
            if ((null == r ? void 0 : r.type) !== y.lAJ.REPLY || null == r.messageReference) return t;
            e = r.messageReference.message_id;
        }
        return S;
    }, [n, r]);
}

function T(e) {
    let { channel: t, message: n, replyChainLength: a } = e;

    function s() {
        (0, _.Jx)(t.id), (0, g.Tv)(t, n, "Reply Chain Nudge");
    }
    let o = i.useRef(a);
    return (
        i.useEffect(() => {
            o.current = a;
        }),
        i.useEffect(() => {
            (0, u.zV)(y.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (".concat(v + 1, ")"),
                reply_chain_length: o.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, r.jsxs)(c.DUT, {
            onClick: s,
            className: A._r,
            focusProps: {
                offset: {
                    right: -4,
                    left: -4,
                },
            },
            children: [
                (0, r.jsx)(c.Text, {
                    color: "text-default",
                    className: A.Qq,
                    variant: "text-sm/normal",
                    children: O.intl.format(O.t.B3V0FM, {
                        count: Math.min(S, a + 1),
                    }),
                }),
                (0, r.jsx)(c.Text, {
                    color: "text-link",
                    className: A.NG,
                    variant: "text-sm/semibold",
                    children: O.intl.string(O.t.rBIGBL),
                }),
            ],
        })
    );
}

function C(e) {
    let { reply: t, chatInputType: n } = e,
        { channel: i, message: a, shouldMention: o, showMentionToggle: u } = t,
        {
            guildId: g,
            nick: E,
            colorString: S,
            colorStrings: C,
            colorRoleName: N,
            authorId: R,
            displayNameStyles: w,
        } = (0, f.Ay)(a),
        P = (0, p.gn)(g, R, C),
        D = (0, d.a)({
            displayNameStyles: w,
        }),
        x = I(i, a),
        L = (0, m.n)(i, a),
        j = n.showThreadPromptOnReply && x >= v && L,
        M = () => (0, h.pX)(y.BVt.CHANNEL(i.getGuildId(), i.id, a.id));

    function k(e) {
        e.stopPropagation(), (0, _.vz)(i.id, !o);
    }

    function U(e) {
        e.stopPropagation(), (0, _.Jx)(i.id);
    }
    return (0, r.jsx)("div", {
        className: A.e1,
        children: (0, r.jsxs)("div", {
            className: A.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: A.eU,
                    children: [
                        (0, r.jsx)(c.DUT, {
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
                                className: s()(A.Qq, A.Fn),
                                variant: "text-sm/normal",
                                children: O.intl.format(O.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, r.jsx)(
                                            c.gyj,
                                            {
                                                className: A.UU,
                                                name: E,
                                                colorString: S,
                                                colorStrings: P,
                                                roleName: N,
                                                displayNameStylesFont: D,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: A.o1,
                            children: [
                                u &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(l.m, {
                                                asContainer: !0,
                                                text: o ? O.intl.string(O.t.DH2o6R) : O.intl.string(O.t.utGGIY),
                                                children: (0, r.jsx)(c.DUT, {
                                                    role: "switch",
                                                    "aria-checked": o,
                                                    onClick: k,
                                                    children: (0, r.jsxs)(c.Text, {
                                                        variant: "text-sm/bold",
                                                        color: o ? "text-link" : "text-muted",
                                                        className: A.Z4,
                                                        children: [
                                                            (0, r.jsx)(c.XxR, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": O.intl.string(O.t.P8tvKG),
                                                                className: A.mM,
                                                            }),
                                                            o ? O.intl.string(O.t.p9jC2r) : O.intl.string(O.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: A.me,
                                                "aria-hidden": !0,
                                            }),
                                        ],
                                    }),
                                (0, r.jsx)(b.x, {
                                    onClick: U,
                                }),
                            ],
                        }),
                    ],
                }),
                j &&
                    (0, r.jsx)(T, {
                        channel: i,
                        message: a,
                        replyChainLength: x,
                    }),
            ],
        }),
    });
}
