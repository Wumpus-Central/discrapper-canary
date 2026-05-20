e.d(a, { default: () => M }), e(321073);
var n = e(627968),
    s = e(64700),
    i = e(224640),
    r = e(20742),
    l = e(430993),
    c = e(696208),
    o = e(17928),
    d = e(192308),
    m = e(761508),
    g = e(71393),
    u = e(576705),
    x = e(853742),
    h = e(834730),
    v = e(534514),
    j = e(534890),
    N = e(782603),
    p = e(375708);
let f = "/assets/8b9e0ddc76afa526.png",
    S = "/assets/16b25e0cf166698d.png",
    C = "/assets/6011f35d14cdcf7f.png",
    P = "/assets/52a68ae4cbfadd1b.png";
var b = e(414438);
function y(t) {
    let { user: a, tagId: e, title: s, messageCount: i, reactionCount: r, activeAgo: l, tags: c, attachment: o } = t,
        { name: d, avatarSrc: m } = a;
    return (0, n.jsxs)("div", {
        className: b.bE,
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        className: b.mG,
                        children: [
                            (0, n.jsxs)(h.E, {
                                color: "text-strong",
                                variant: "text-xs/medium",
                                className: b.mG,
                                children: [
                                    (0, n.jsx)("img", {
                                        src: m,
                                        alt: p.intl.string(p.t.lqaIxI),
                                        width: 16,
                                        height: 16,
                                    }),
                                    d,
                                ],
                            }),
                            null != e &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("span", { className: b.xE, children: "\u2022" }),
                                        (0, n.jsx)(h.E, {
                                            color: "text-strong",
                                            variant: "text-xxs/medium",
                                            className: b.qo,
                                            children: c[e],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, n.jsx)(v.D, {
                        color: "text-strong",
                        variant: "heading-md/semibold",
                        className: b.W0,
                        children: s,
                    }),
                    (0, n.jsxs)("div", {
                        className: b.mG,
                        children: [
                            (0, n.jsxs)(h.E, {
                                color: "text-default",
                                variant: "text-xs/medium",
                                className: b.Hu,
                                children: [(0, n.jsx)(j.o, { size: "xs", color: "currentColor", className: b.Kk }), i],
                            }),
                            r > 0 &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("span", { className: b.xE, children: "\u2022" }),
                                        (0, n.jsxs)(h.E, {
                                            color: "text-default",
                                            variant: "text-xs/medium",
                                            className: b.Hu,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": p.intl.string(p.t.gHp0C4),
                                                    className: b.Kk,
                                                    children: "\u2764\uFE0F",
                                                }),
                                                r,
                                            ],
                                        }),
                                    ],
                                }),
                            (0, n.jsx)("span", { className: b.xE, children: "\u2022" }),
                            (0, n.jsx)(h.E, { color: "text-default", variant: "text-xs/medium", children: l }),
                        ],
                    }),
                ],
            }),
            null != o &&
                (0, n.jsx)("img", {
                    src: o,
                    alt: p.intl.formatToPlainString(p.t.MJHFt9, { name: s }),
                    className: b.oh,
                }),
        ],
    });
}
function I(t) {
    let { author: a, content: e } = t,
        { name: s, isOP: i, avatarSrc: r } = a;
    return (0, n.jsxs)("div", {
        className: b.iU,
        children: [
            (0, n.jsx)("img", { src: r, alt: p.intl.string(p.t.lqaIxI), width: 40, height: 40 }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        className: b.mG,
                        children: [
                            (0, n.jsx)(h.E, { color: "text-strong", variant: "text-sm/semibold", children: s }),
                            i && (0, n.jsx)("span", { className: b.aj, children: p.intl.string(p.t.fyE8sH) }),
                        ],
                    }),
                    (0, n.jsx)(h.E, { color: "text-default", variant: "text-sm/normal", children: e }),
                ],
            }),
        ],
    });
}
function k(t) {
    let { title: a, messages: e, maxHeight: s } = t;
    return (0, n.jsx)("div", {
        className: b.i1,
        style: { maxHeight: s },
        "aria-hidden": !0,
        children: (0, n.jsxs)("div", {
            className: b.VH,
            children: [
                (0, n.jsx)(j.o, { size: "md", color: "currentColor", className: b.DD }),
                (0, n.jsx)(v.D, { color: "text-strong", variant: "heading-lg/semibold", className: b.wx, children: a }),
                (0, n.jsx)("div", {
                    className: b.zC,
                    children: e.map((t, a) =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(I, { ...t }, a),
                                0 === a &&
                                    (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsx)("hr", { className: b.lL }),
                                            (0, n.jsxs)("div", {
                                                className: b.KY,
                                                children: [
                                                    (0, n.jsxs)(h.E, {
                                                        color: "text-brand",
                                                        variant: "text-xs/medium",
                                                        className: b.QJ,
                                                        children: [
                                                            (0, n.jsx)("span", {
                                                                role: "img",
                                                                "aria-label": p.intl.string(p.t.gHp0C4),
                                                                className: b.Kk,
                                                                children: "\u2764\uFE0F",
                                                            }),
                                                            "17",
                                                        ],
                                                    }),
                                                    (0, n.jsxs)(h.E, {
                                                        color: "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: b.CQ,
                                                        children: [
                                                            (0, n.jsx)(N.X, { size: "xs", color: "currentColor" }),
                                                            p.intl.string(p.t["3aOv+h"]),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)("hr", { className: b.N }),
                                        ],
                                    }),
                            ],
                        }),
                    ),
                }),
                (0, n.jsx)("div", {
                    className: b.RW,
                    children: (0, n.jsx)(h.E, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: p.intl.string(p.t.YzpScd),
                    }),
                }),
            ],
        }),
    });
}
function A(t) {
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
                tags: [p.intl.string(p.t["/XjSo3"]), p.intl.string(p.t["Af/56e"]), p.intl.string(p.t.LNsW0L)],
                posts: [
                    {
                        user: { name: "pocketman", avatarSrc: S },
                        tagId: 2,
                        title: p.intl.string(p.t.g1hPkw),
                        messageCount: 8,
                        reactionCount: 0,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/ff7fd9a90d702a25.png",
                    },
                    {
                        user: { name: "skaterdood12", avatarSrc: f },
                        tagId: 1,
                        title: p.intl.string(p.t["5GM0TY"]),
                        messageCount: 17,
                        reactionCount: 11,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "ladydaisy", avatarSrc: C },
                        tagId: 2,
                        title: p.intl.string(p.t["2LpQS8"]),
                        messageCount: 18,
                        reactionCount: 15,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: P },
                        tagId: 0,
                        title: p.intl.string(p.t.gFI7Lw),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: p.intl.formatToPlainString(p.t.p0KedC, { count: 1 }),
                        attachment: "/assets/0d303ee5beec2287.png",
                    },
                ],
                postPreview: {
                    title: p.intl.string(p.t["5GM0TY"]),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: f, isOP: !0 },
                            content: p.intl.string(p.t.zEDYfk),
                        },
                        {
                            author: { name: "pocketman", avatarSrc: S, isOP: !1 },
                            content: p.intl.string(p.t["+XGMDs"]),
                        },
                        { author: { name: "ladydaisy", avatarSrc: C, isOP: !1 }, content: p.intl.string(p.t.z0qmHN) },
                    ],
                },
                ariaLabel: p.intl.string(p.t.TDOyPg),
            },
            {
                tags: [p.intl.string(p.t.ogyxel), p.intl.string(p.t.S97ZXx), p.intl.string(p.t.d6GdP4)],
                posts: [
                    {
                        user: { name: "ladydaisy", avatarSrc: C },
                        tagId: 0,
                        title: p.intl.string(p.t.aOyKZ9),
                        messageCount: 8,
                        reactionCount: 11,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/633923dbe21cc7ec.png",
                    },
                    {
                        user: { name: "pocketman", avatarSrc: S },
                        tagId: 1,
                        title: p.intl.string(p.t.EQIrvX),
                        messageCount: 24,
                        reactionCount: 0,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "skaterdood12", avatarSrc: f },
                        tagId: 1,
                        title: p.intl.string(p.t.f9n6Ue),
                        messageCount: 15,
                        reactionCount: 17,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: P },
                        tagId: 2,
                        title: p.intl.string(p.t.lCjd1A),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: p.intl.formatToPlainString(p.t.p0KedC, { count: 1 }),
                        attachment: "/assets/6ba34d72a17034a2.png",
                    },
                ],
                postPreview: {
                    title: p.intl.string(p.t.f9n6Ue),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: f, isOP: !0 },
                            content: p.intl.string(p.t.VeQaUn),
                        },
                        { author: { name: "pocketman", avatarSrc: S, isOP: !1 }, content: p.intl.string(p.t.lwjElH) },
                        { author: { name: "ladydaisy", avatarSrc: C, isOP: !1 }, content: p.intl.string(p.t.RNqQmI) },
                    ],
                },
                ariaLabel: p.intl.string(p.t.iLeWrd),
            },
            {
                tags: [p.intl.string(p.t["5jLvfc"]), p.intl.string(p.t.lRgWdQ), p.intl.string(p.t.Hy4EP0)],
                posts: [
                    {
                        user: { name: "skaterdood12", avatarSrc: f },
                        tagId: null,
                        title: p.intl.string(p.t.to6uUe),
                        messageCount: 11,
                        reactionCount: 17,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/625651f82bbdecd8.png",
                    },
                    {
                        user: { name: "pocketman", avatarSrc: S },
                        tagId: 1,
                        title: p.intl.string(p.t.dsQXOj),
                        messageCount: 24,
                        reactionCount: 0,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "ladydaisy", avatarSrc: C },
                        tagId: 0,
                        title: p.intl.string(p.t["XL/bba"]),
                        messageCount: 18,
                        reactionCount: 15,
                        activeAgo: p.intl.formatToPlainString(p.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: P },
                        tagId: null,
                        title: p.intl.string(p.t.XSYHP3),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: p.intl.formatToPlainString(p.t.p0KedC, { count: 1 }),
                        attachment: "/assets/e6ef93adc3b9eff4.png",
                    },
                ],
                postPreview: {
                    title: p.intl.string(p.t.to6uUe),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: f, isOP: !0 },
                            content: p.intl.string(p.t["6DyhGl"]),
                        },
                        { author: { name: "pocketman", avatarSrc: S, isOP: !1 }, content: p.intl.string(p.t.BLiuYI) },
                        { author: { name: "ladydaisy", avatarSrc: C, isOP: !1 }, content: p.intl.string(p.t.PYLKhH) },
                    ],
                },
                ariaLabel: p.intl.string(p.t.kEMWrG),
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
            className: b.kL,
            role: "image",
            "aria-label": d,
            children: [
                (0, n.jsxs)("div", {
                    ref: r,
                    className: b.T,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)("div", {
                            className: b._A,
                            children: l.map((t, a) =>
                                (0, n.jsx)(
                                    h.E,
                                    { color: "text-strong", variant: "text-xs/medium", className: b.Tc, children: t },
                                    a,
                                ),
                            ),
                        }),
                        (0, n.jsx)("div", {
                            className: b.Yl,
                            children: c.map((t, a) => (0, n.jsx)(y, { ...t, tags: l }, a)),
                        }),
                    ],
                }),
                (0, n.jsx)(k, { ...o, maxHeight: e }),
            ],
        })
    );
}
var E = e(652215),
    T = e(49999),
    H = e(789051);
function M(t) {
    let { guildId: a, shouldUpsellCreation: h, transitionState: v, onClose: j } = t,
        N = (0, o.bG)([g.A], () => g.A.getGuild(a), [a]),
        f = (0, o.bG)([u.A], () => u.A.can(E.xBc.MANAGE_CHANNELS, N)),
        S = [
            { id: 0, name: p.intl.string(p.t.HTA517) },
            { id: 1, name: p.intl.string(p.t["IHjjY/"]) },
            { id: 2, name: p.intl.string(p.t.x3drh1) },
        ],
        [C, P] = s.useState(0),
        b = [
            {
                variant: h ? "secondary" : "primary",
                text: h ? p.intl.string(p.t.TulDPl) : p.intl.string(p.t["NX+WJN"]),
                onClick: () => j(T.i.SECONDARY),
            },
        ];
    h &&
        b.push({
            variant: "primary",
            text: p.intl.string(p.t["1X8SK/"]),
            onClick: () => {
                (0, d.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        e.e("8516"),
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
                            channelType: E.rbe.GUILD_FORUM,
                            guildId: a,
                            prefillChannelName: h ? p.intl.string(p.t["5z1Xat"]) : void 0,
                        });
                }),
                    j(T.i.PRIMARY);
            },
        });
    let y = p.intl.string(p.t["6S6WCQ"]);
    return (0, n.jsxs)(i.d, {
        transitionState: v,
        size: "xxl",
        onClose: async () => await j(),
        "aria-label": y,
        children: [
            (0, n.jsx)(r.rQ, { title: y, subtitle: p.intl.string(p.t.I2BA8K) }),
            (0, n.jsxs)(l.c, {
                children: [
                    (0, n.jsx)(m.V, {
                        selectedItem: C,
                        type: "top",
                        onItemSelect: (t) => {
                            P(t), (0, x.Bd)({ forumDemoId: t });
                        },
                        className: H._,
                        children: S.map((t, a) => (0, n.jsx)(m.V.Item, { id: a, children: t.name }, a)),
                    }),
                    (0, n.jsx)(A, { id: C }),
                ],
            }),
            f && (0, n.jsx)(c.H, { actions: b }),
        ],
    });
}
