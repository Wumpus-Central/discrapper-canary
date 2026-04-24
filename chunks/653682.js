n.d(a, { default: () => O }), n(321073);
var e = n(627968),
    s = n(64700),
    i = n(224640),
    r = n(20742),
    l = n(430993),
    c = n(696208),
    o = n(17928),
    d = n(192308),
    m = n(761508),
    g = n(821609),
    u = n(509434),
    x = n(71393),
    h = n(576705),
    v = n(853742),
    j = n(834730),
    N = n(534514),
    p = n(534890),
    f = n(782603),
    S = n(985018);
let C = "/assets/8b9e0ddc76afa526.png",
    P = "/assets/16b25e0cf166698d.png",
    y = "/assets/6011f35d14cdcf7f.png",
    b = "/assets/52a68ae4cbfadd1b.png";
var k = n(414438);
function I(t) {
    let { user: a, tagId: n, title: s, messageCount: i, reactionCount: r, activeAgo: l, tags: c, attachment: o } = t,
        { name: d, avatarSrc: m } = a;
    return (0, e.jsxs)("div", {
        className: k.bE,
        children: [
            (0, e.jsxs)("div", {
                children: [
                    (0, e.jsxs)("div", {
                        className: k.mG,
                        children: [
                            (0, e.jsxs)(j.E, {
                                color: "text-strong",
                                variant: "text-xs/medium",
                                className: k.mG,
                                children: [
                                    (0, e.jsx)("img", {
                                        src: m,
                                        alt: S.intl.string(S.t.lqaIxI),
                                        width: 16,
                                        height: 16,
                                    }),
                                    d,
                                ],
                            }),
                            null != n &&
                                (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsx)("span", { className: k.xE, children: "•" }),
                                        (0, e.jsx)(j.E, {
                                            color: "text-strong",
                                            variant: "text-xxs/medium",
                                            className: k.qo,
                                            children: c[n],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, e.jsx)(N.D, {
                        color: "text-strong",
                        variant: "heading-md/semibold",
                        className: k.W0,
                        children: s,
                    }),
                    (0, e.jsxs)("div", {
                        className: k.mG,
                        children: [
                            (0, e.jsxs)(j.E, {
                                color: "text-default",
                                variant: "text-xs/medium",
                                className: k.Hu,
                                children: [(0, e.jsx)(p.o, { size: "xs", color: "currentColor", className: k.Kk }), i],
                            }),
                            r > 0 &&
                                (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsx)("span", { className: k.xE, children: "•" }),
                                        (0, e.jsxs)(j.E, {
                                            color: "text-default",
                                            variant: "text-xs/medium",
                                            className: k.Hu,
                                            children: [
                                                (0, e.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": S.intl.string(S.t.gHp0C4),
                                                    className: k.Kk,
                                                    children: "❤️",
                                                }),
                                                r,
                                            ],
                                        }),
                                    ],
                                }),
                            (0, e.jsx)("span", { className: k.xE, children: "•" }),
                            (0, e.jsx)(j.E, { color: "text-default", variant: "text-xs/medium", children: l }),
                        ],
                    }),
                ],
            }),
            null != o &&
                (0, e.jsx)("img", {
                    src: o,
                    alt: S.intl.formatToPlainString(S.t.MJHFt9, { name: s }),
                    className: k.oh,
                }),
        ],
    });
}
function A(t) {
    let { author: a, content: n } = t,
        { name: s, isOP: i, avatarSrc: r } = a;
    return (0, e.jsxs)("div", {
        className: k.iU,
        children: [
            (0, e.jsx)("img", { src: r, alt: S.intl.string(S.t.lqaIxI), width: 40, height: 40 }),
            (0, e.jsxs)("div", {
                children: [
                    (0, e.jsxs)("div", {
                        className: k.mG,
                        children: [
                            (0, e.jsx)(j.E, { color: "text-strong", variant: "text-sm/semibold", children: s }),
                            i && (0, e.jsx)("span", { className: k.aj, children: S.intl.string(S.t.fyE8sH) }),
                        ],
                    }),
                    (0, e.jsx)(j.E, { color: "text-default", variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function E(t) {
    let { title: a, messages: n, maxHeight: s } = t;
    return (0, e.jsx)("div", {
        className: k.i1,
        style: { maxHeight: s },
        "aria-hidden": !0,
        children: (0, e.jsxs)("div", {
            className: k.VH,
            children: [
                (0, e.jsx)(p.o, { size: "md", color: "currentColor", className: k.DD }),
                (0, e.jsx)(N.D, { color: "text-strong", variant: "heading-lg/semibold", className: k.wx, children: a }),
                (0, e.jsx)("div", {
                    className: k.zC,
                    children: n.map((t, a) =>
                        (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(A, { ...t }, a),
                                0 === a &&
                                    (0, e.jsxs)("div", {
                                        children: [
                                            (0, e.jsx)("hr", { className: k.lL }),
                                            (0, e.jsxs)("div", {
                                                className: k.KY,
                                                children: [
                                                    (0, e.jsxs)(j.E, {
                                                        color: "text-brand",
                                                        variant: "text-xs/medium",
                                                        className: k.QJ,
                                                        children: [
                                                            (0, e.jsx)("span", {
                                                                role: "img",
                                                                "aria-label": S.intl.string(S.t.gHp0C4),
                                                                className: k.Kk,
                                                                children: "❤️",
                                                            }),
                                                            "17",
                                                        ],
                                                    }),
                                                    (0, e.jsxs)(j.E, {
                                                        color: "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: k.CQ,
                                                        children: [
                                                            (0, e.jsx)(f.X, { size: "xs", color: "currentColor" }),
                                                            S.intl.string(S.t["3aOv+h"]),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, e.jsx)("hr", { className: k.N }),
                                        ],
                                    }),
                            ],
                        }),
                    ),
                }),
                (0, e.jsx)("div", {
                    className: k.RW,
                    children: (0, e.jsx)(j.E, {
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
        [n, i] = s.useState(0),
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
                        user: { name: "ladydaisy", avatarSrc: y },
                        tagId: 2,
                        title: S.intl.string(S.t["2LpQS8"]),
                        messageCount: 18,
                        reactionCount: 15,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: b },
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
                        { author: { name: "ladydaisy", avatarSrc: y, isOP: !1 }, content: S.intl.string(S.t.z0qmHN) },
                    ],
                },
                ariaLabel: S.intl.string(S.t.TDOyPg),
            },
            {
                tags: [S.intl.string(S.t.ogyxel), S.intl.string(S.t.S97ZXx), S.intl.string(S.t.d6GdP4)],
                posts: [
                    {
                        user: { name: "ladydaisy", avatarSrc: y },
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
                        user: { name: "kittyx", avatarSrc: b },
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
                        { author: { name: "ladydaisy", avatarSrc: y, isOP: !1 }, content: S.intl.string(S.t.RNqQmI) },
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
                        user: { name: "ladydaisy", avatarSrc: y },
                        tagId: 0,
                        title: S.intl.string(S.t["XL/bba"]),
                        messageCount: 18,
                        reactionCount: 15,
                        activeAgo: S.intl.formatToPlainString(S.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: b },
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
                        { author: { name: "ladydaisy", avatarSrc: y, isOP: !1 }, content: S.intl.string(S.t.PYLKhH) },
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
            0 === n && r?.current?.clientHeight != null && i(r.current.clientHeight - 40);
        }, [n]),
        (0, e.jsxs)("div", {
            className: k.kL,
            role: "image",
            "aria-label": d,
            children: [
                (0, e.jsxs)("div", {
                    ref: r,
                    className: k.T,
                    "aria-hidden": !0,
                    children: [
                        (0, e.jsx)("div", {
                            className: k._A,
                            children: l.map((t, a) =>
                                (0, e.jsx)(
                                    j.E,
                                    { color: "text-strong", variant: "text-xs/medium", className: k.Tc, children: t },
                                    a,
                                ),
                            ),
                        }),
                        (0, e.jsx)("div", {
                            className: k.Yl,
                            children: c.map((t, a) => (0, e.jsx)(I, { ...t, tags: l }, a)),
                        }),
                    ],
                }),
                (0, e.jsx)(E, { ...o, maxHeight: n }),
            ],
        })
    );
}
var H = n(253913),
    M = n(652215),
    L = n(49999),
    G = n(789051);
function O(t) {
    let { guildId: a, shouldUpsellCreation: j, transitionState: N, onClose: p } = t,
        f = (0, o.bG)([x.A], () => x.A.getGuild(a), [a]),
        C = (0, o.bG)([h.A], () => h.A.can(M.xBc.MANAGE_CHANNELS, f)),
        P = [
            { id: 0, name: S.intl.string(S.t.HTA517) },
            { id: 1, name: S.intl.string(S.t["IHjjY/"]) },
            { id: 2, name: S.intl.string(S.t.x3drh1) },
        ],
        [y, b] = s.useState(0),
        k = [
            {
                variant: j ? "secondary" : "primary",
                text: j ? S.intl.string(S.t.TulDPl) : S.intl.string(S.t["NX+WJN"]),
                onClick: () => p(L.i.SECONDARY),
            },
        ];
    return (
        j &&
            k.push({
                variant: "primary",
                text: S.intl.string(S.t["1X8SK/"]),
                onClick: () => {
                    (0, d.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([
                            n.e("8018"),
                            n.e("42282"),
                            n.e("9431"),
                            n.e("43735"),
                        ]).then(n.bind(n, 113194));
                        return (n) =>
                            (0, e.jsx)(t, {
                                ...n,
                                channelType: M.rbe.GUILD_FORUM,
                                guildId: a,
                                prefillChannelName: j ? S.intl.string(S.t["5z1Xat"]) : void 0,
                            });
                    }),
                        p(L.i.PRIMARY);
                },
            }),
        (0, e.jsxs)(i.d, {
            transitionState: N,
            size: "xxl",
            onClose: async () => await p(),
            children: [
                (0, e.jsx)(r.rQ, { title: S.intl.string(S.t["6S6WCQ"]), subtitle: S.intl.string(S.t.I2BA8K) }),
                (0, e.jsxs)(l.c, {
                    children: [
                        (0, e.jsx)(m.V, {
                            selectedItem: y,
                            type: "top",
                            onItemSelect: (t) => {
                                b(t), (0, v.Bd)({ forumDemoId: t });
                            },
                            className: G._,
                            children: P.map((t, a) => (0, e.jsx)(m.V.Item, { id: a, children: t.name }, a)),
                        }),
                        (0, e.jsx)(T, { id: y }),
                    ],
                }),
                C &&
                    (0, e.jsx)(c.H, {
                        leading: (0, e.jsx)(g.$, {
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
        })
    );
}
