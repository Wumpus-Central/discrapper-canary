e.d(a, { default: () => O }), e(321073);
var n = e(627968),
    s = e(64700),
    i = e(224640),
    r = e(20742),
    l = e(430993),
    c = e(696208),
    o = e(17928),
    d = e(192308),
    m = e(761508),
    g = e(821609),
    u = e(509434),
    x = e(71393),
    h = e(576705),
    v = e(853742),
    j = e(834730),
    N = e(534514),
    p = e(534890),
    f = e(782603),
    S = e(375708);
let C = "/assets/8b9e0ddc76afa526.png",
    P = "/assets/16b25e0cf166698d.png",
    b = "/assets/6011f35d14cdcf7f.png",
    y = "/assets/52a68ae4cbfadd1b.png";
var k = e(414438);
function I(t) {
    let { user: a, tagId: e, title: s, messageCount: i, reactionCount: r, activeAgo: l, tags: c, attachment: o } = t,
        { name: d, avatarSrc: m } = a;
    return (0, n.jsxs)("div", {
        className: k.bE,
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        className: k.mG,
                        children: [
                            (0, n.jsxs)(j.E, {
                                color: "text-strong",
                                variant: "text-xs/medium",
                                className: k.mG,
                                children: [
                                    (0, n.jsx)("img", {
                                        src: m,
                                        alt: S.intl.string(S.t.lqaIxI),
                                        width: 16,
                                        height: 16,
                                    }),
                                    d,
                                ],
                            }),
                            null != e &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("span", { className: k.xE, children: "\u2022" }),
                                        (0, n.jsx)(j.E, {
                                            color: "text-strong",
                                            variant: "text-xxs/medium",
                                            className: k.qo,
                                            children: c[e],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, n.jsx)(N.D, {
                        color: "text-strong",
                        variant: "heading-md/semibold",
                        className: k.W0,
                        children: s,
                    }),
                    (0, n.jsxs)("div", {
                        className: k.mG,
                        children: [
                            (0, n.jsxs)(j.E, {
                                color: "text-default",
                                variant: "text-xs/medium",
                                className: k.Hu,
                                children: [(0, n.jsx)(p.o, { size: "xs", color: "currentColor", className: k.Kk }), i],
                            }),
                            r > 0 &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("span", { className: k.xE, children: "\u2022" }),
                                        (0, n.jsxs)(j.E, {
                                            color: "text-default",
                                            variant: "text-xs/medium",
                                            className: k.Hu,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": S.intl.string(S.t.gHp0C4),
                                                    className: k.Kk,
                                                    children: "\u2764\uFE0F",
                                                }),
                                                r,
                                            ],
                                        }),
                                    ],
                                }),
                            (0, n.jsx)("span", { className: k.xE, children: "\u2022" }),
                            (0, n.jsx)(j.E, { color: "text-default", variant: "text-xs/medium", children: l }),
                        ],
                    }),
                ],
            }),
            null != o &&
                (0, n.jsx)("img", {
                    src: o,
                    alt: S.intl.formatToPlainString(S.t.MJHFt9, { name: s }),
                    className: k.oh,
                }),
        ],
    });
}
function A(t) {
    let { author: a, content: e } = t,
        { name: s, isOP: i, avatarSrc: r } = a;
    return (0, n.jsxs)("div", {
        className: k.iU,
        children: [
            (0, n.jsx)("img", { src: r, alt: S.intl.string(S.t.lqaIxI), width: 40, height: 40 }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        className: k.mG,
                        children: [
                            (0, n.jsx)(j.E, { color: "text-strong", variant: "text-sm/semibold", children: s }),
                            i && (0, n.jsx)("span", { className: k.aj, children: S.intl.string(S.t.fyE8sH) }),
                        ],
                    }),
                    (0, n.jsx)(j.E, { color: "text-default", variant: "text-sm/normal", children: e }),
                ],
            }),
        ],
    });
}
function E(t) {
    let { title: a, messages: e, maxHeight: s } = t;
    return (0, n.jsx)("div", {
        className: k.i1,
        style: { maxHeight: s },
        "aria-hidden": !0,
        children: (0, n.jsxs)("div", {
            className: k.VH,
            children: [
                (0, n.jsx)(p.o, { size: "md", color: "currentColor", className: k.DD }),
                (0, n.jsx)(N.D, { color: "text-strong", variant: "heading-lg/semibold", className: k.wx, children: a }),
                (0, n.jsx)("div", {
                    className: k.zC,
                    children: e.map((t, a) =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(A, { ...t }, a),
                                0 === a &&
                                    (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsx)("hr", { className: k.lL }),
                                            (0, n.jsxs)("div", {
                                                className: k.KY,
                                                children: [
                                                    (0, n.jsxs)(j.E, {
                                                        color: "text-brand",
                                                        variant: "text-xs/medium",
                                                        className: k.QJ,
                                                        children: [
                                                            (0, n.jsx)("span", {
                                                                role: "img",
                                                                "aria-label": S.intl.string(S.t.gHp0C4),
                                                                className: k.Kk,
                                                                children: "\u2764\uFE0F",
                                                            }),
                                                            "17",
                                                        ],
                                                    }),
                                                    (0, n.jsxs)(j.E, {
                                                        color: "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: k.CQ,
                                                        children: [
                                                            (0, n.jsx)(f.X, { size: "xs", color: "currentColor" }),
                                                            S.intl.string(S.t["3aOv+h"]),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)("hr", { className: k.N }),
                                        ],
                                    }),
                            ],
                        }),
                    ),
                }),
                (0, n.jsx)("div", {
                    className: k.RW,
                    children: (0, n.jsx)(j.E, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: S.intl.string(S.t.YzpScd),
                    }),
                }),
            ],
        }),
    });
}
function T(t) {
    let { id: a } = t,
        [e, i] = s.useState(0),
        r = s.useRef(null),
        {
            tags: l,
            posts: c,
            postPreview: o,
            ariaLabel: d,
        } = [
            {
                tags: [S.intl.string(S.t["/XjSo3"]), S.intl.string(S.t["Af/56e"]), S.intl.string(S.t.LNsW0L)],
                posts: [
                    {
                        user: { name: "pocketman", avatarSrc: P },
                        tagId: 2,
                        title: S.intl.string(S.t.g1hPkw),
                        messageCount: 8,
                        reactionCount: 0,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/ff7fd9a90d702a25.png",
                    },
                    {
                        user: { name: "skaterdood12", avatarSrc: C },
                        tagId: 1,
                        title: S.intl.string(S.t["5GM0TY"]),
                        messageCount: 17,
                        reactionCount: 11,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "ladydaisy", avatarSrc: b },
                        tagId: 2,
                        title: S.intl.string(S.t["2LpQS8"]),
                        messageCount: 18,
                        reactionCount: 15,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: y },
                        tagId: 0,
                        title: S.intl.string(S.t.gFI7Lw),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: S.intl.formatToPlainString(S.t.p0KedC, { count: 1 }),
                        attachment: "/assets/0d303ee5beec2287.png",
                    },
                ],
                postPreview: {
                    title: S.intl.string(S.t["5GM0TY"]),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: C, isOP: !0 },
                            content: S.intl.string(S.t.zEDYfk),
                        },
                        {
                            author: { name: "pocketman", avatarSrc: P, isOP: !1 },
                            content: S.intl.string(S.t["+XGMDs"]),
                        },
                        { author: { name: "ladydaisy", avatarSrc: b, isOP: !1 }, content: S.intl.string(S.t.z0qmHN) },
                    ],
                },
                ariaLabel: S.intl.string(S.t.TDOyPg),
            },
            {
                tags: [S.intl.string(S.t.ogyxel), S.intl.string(S.t.S97ZXx), S.intl.string(S.t.d6GdP4)],
                posts: [
                    {
                        user: { name: "ladydaisy", avatarSrc: b },
                        tagId: 0,
                        title: S.intl.string(S.t.aOyKZ9),
                        messageCount: 8,
                        reactionCount: 11,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/633923dbe21cc7ec.png",
                    },
                    {
                        user: { name: "pocketman", avatarSrc: P },
                        tagId: 1,
                        title: S.intl.string(S.t.EQIrvX),
                        messageCount: 24,
                        reactionCount: 0,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "skaterdood12", avatarSrc: C },
                        tagId: 1,
                        title: S.intl.string(S.t.f9n6Ue),
                        messageCount: 15,
                        reactionCount: 17,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: y },
                        tagId: 2,
                        title: S.intl.string(S.t.lCjd1A),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: S.intl.formatToPlainString(S.t.p0KedC, { count: 1 }),
                        attachment: "/assets/6ba34d72a17034a2.png",
                    },
                ],
                postPreview: {
                    title: S.intl.string(S.t.f9n6Ue),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: C, isOP: !0 },
                            content: S.intl.string(S.t.VeQaUn),
                        },
                        { author: { name: "pocketman", avatarSrc: P, isOP: !1 }, content: S.intl.string(S.t.lwjElH) },
                        { author: { name: "ladydaisy", avatarSrc: b, isOP: !1 }, content: S.intl.string(S.t.RNqQmI) },
                    ],
                },
                ariaLabel: S.intl.string(S.t.iLeWrd),
            },
            {
                tags: [S.intl.string(S.t["5jLvfc"]), S.intl.string(S.t.lRgWdQ), S.intl.string(S.t.Hy4EP0)],
                posts: [
                    {
                        user: { name: "skaterdood12", avatarSrc: C },
                        tagId: null,
                        title: S.intl.string(S.t.to6uUe),
                        messageCount: 11,
                        reactionCount: 17,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/625651f82bbdecd8.png",
                    },
                    {
                        user: { name: "pocketman", avatarSrc: P },
                        tagId: 1,
                        title: S.intl.string(S.t.dsQXOj),
                        messageCount: 24,
                        reactionCount: 0,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "ladydaisy", avatarSrc: b },
                        tagId: 0,
                        title: S.intl.string(S.t["XL/bba"]),
                        messageCount: 18,
                        reactionCount: 15,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: y },
                        tagId: null,
                        title: S.intl.string(S.t.XSYHP3),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: S.intl.formatToPlainString(S.t.p0KedC, { count: 1 }),
                        attachment: "/assets/e6ef93adc3b9eff4.png",
                    },
                ],
                postPreview: {
                    title: S.intl.string(S.t.to6uUe),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: C, isOP: !0 },
                            content: S.intl.string(S.t["6DyhGl"]),
                        },
                        { author: { name: "pocketman", avatarSrc: P, isOP: !1 }, content: S.intl.string(S.t.BLiuYI) },
                        { author: { name: "ladydaisy", avatarSrc: b, isOP: !1 }, content: S.intl.string(S.t.PYLKhH) },
                    ],
                },
                ariaLabel: S.intl.string(S.t.kEMWrG),
            },
        ][a];
    return (
        s.useEffect(() => {
            i(0);
        }, [a]),
        s.useEffect(() => {
            0 === e && r?.current?.clientHeight != null && i(r.current.clientHeight - 40);
        }, [e]),
        (0, n.jsxs)("div", {
            className: k.kL,
            role: "image",
            "aria-label": d,
            children: [
                (0, n.jsxs)("div", {
                    ref: r,
                    className: k.T,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)("div", {
                            className: k._A,
                            children: l.map((t, a) =>
                                (0, n.jsx)(
                                    j.E,
                                    { color: "text-strong", variant: "text-xs/medium", className: k.Tc, children: t },
                                    a,
                                ),
                            ),
                        }),
                        (0, n.jsx)("div", {
                            className: k.Yl,
                            children: c.map((t, a) => (0, n.jsx)(I, { ...t, tags: l }, a)),
                        }),
                    ],
                }),
                (0, n.jsx)(E, { ...o, maxHeight: e }),
            ],
        })
    );
}
var H = e(253913),
    M = e(652215),
    L = e(49999),
    G = e(789051);
function O(t) {
    let { guildId: a, shouldUpsellCreation: j, transitionState: N, onClose: p } = t,
        f = (0, o.bG)([x.A], () => x.A.getGuild(a), [a]),
        C = (0, o.bG)([h.A], () => h.A.can(M.xBc.MANAGE_CHANNELS, f)),
        P = [
            { id: 0, name: S.intl.string(S.t.HTA517) },
            { id: 1, name: S.intl.string(S.t["IHjjY/"]) },
            { id: 2, name: S.intl.string(S.t.x3drh1) },
        ],
        [b, y] = s.useState(0),
        k = [
            {
                variant: j ? "secondary" : "primary",
                text: j ? S.intl.string(S.t.TulDPl) : S.intl.string(S.t["NX+WJN"]),
                onClick: () => p(L.i.SECONDARY),
            },
        ];
    j &&
        k.push({
            variant: "primary",
            text: S.intl.string(S.t["1X8SK/"]),
            onClick: () => {
                (0, d.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        e.e("94513"),
                        e.e("11585"),
                        e.e("3589"),
                        e.e("89916"),
                        e.e("60773"),
                        e.e("8018"),
                        e.e("20379"),
                        e.e("19193"),
                        e.e("7775"),
                        e.e("58608"),
                        e.e("70195"),
                    ]).then(e.bind(e, 946430));
                    return (e) =>
                        (0, n.jsx)(t, {
                            ...e,
                            channelType: M.rbe.GUILD_FORUM,
                            guildId: a,
                            prefillChannelName: j ? S.intl.string(S.t["5z1Xat"]) : void 0,
                        });
                }),
                    p(L.i.PRIMARY);
            },
        });
    let I = S.intl.string(S.t["6S6WCQ"]);
    return (0, n.jsxs)(i.d, {
        transitionState: N,
        size: "xxl",
        onClose: async () => await p(),
        "aria-label": I,
        children: [
            (0, n.jsx)(r.rQ, { title: I, subtitle: S.intl.string(S.t.I2BA8K) }),
            (0, n.jsxs)(l.c, {
                children: [
                    (0, n.jsx)(m.V, {
                        selectedItem: b,
                        type: "top",
                        onItemSelect: (t) => {
                            y(t), (0, v.Bd)({ forumDemoId: t });
                        },
                        className: G._,
                        children: P.map((t, a) => (0, n.jsx)(m.V.Item, { id: a, children: t.name }, a)),
                    }),
                    (0, n.jsx)(T, { id: b }),
                ],
            }),
            C &&
                (0, n.jsx)(c.H, {
                    leading: (0, n.jsx)(g.$, {
                        variant: "secondary",
                        text: S.intl.string(S.t.hvVgAZ),
                        icon: u.I,
                        iconPosition: "end",
                        role: "link",
                        onClick: () => {
                            open(H.X_);
                        },
                    }),
                    actions: k,
                }),
        ],
    });
}
