(n.d(a, { default: () => M }), n(321073));
var e = n(477900),
    s = n(582128),
    i = n(855986),
    r = n(192308),
    l = n(224640),
    o = n(20742),
    c = n(430993),
    d = n(761508),
    m = n(696208),
    g = n(71393),
    u = n(576705),
    x = n(853742),
    h = n(834730),
    v = n(534514),
    j = n(534890),
    N = n(782603),
    f = n(792996);
let p = "/assets/8b9e0ddc76afa526.png",
    S = "/assets/16b25e0cf166698d.png",
    C = "/assets/6011f35d14cdcf7f.png",
    b = "/assets/52a68ae4cbfadd1b.png";
var y = n(25431);
function P(t) {
    let { user: a, tagId: n, title: s, messageCount: i, reactionCount: r, activeAgo: l, tags: o, attachment: c } = t,
        { name: d, avatarSrc: m } = a;
    return (0, e.jsxs)("div", {
        className: y.bE,
        children: [
            (0, e.jsxs)("div", {
                children: [
                    (0, e.jsxs)("div", {
                        className: y.mG,
                        children: [
                            (0, e.jsxs)(h.E, {
                                color: "text-strong",
                                variant: "body-xs/medium",
                                className: y.mG,
                                children: [
                                    (0, e.jsx)("img", {
                                        src: m,
                                        alt: f.intl.string(f.t.lqaIxI),
                                        width: 16,
                                        height: 16,
                                    }),
                                    d,
                                ],
                            }),
                            null != n &&
                                (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsx)("span", { className: y.xE, children: "\u2022" }),
                                        (0, e.jsx)(h.E, {
                                            color: "text-strong",
                                            variant: "footnote/medium",
                                            className: y.qo,
                                            children: o[n],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, e.jsx)(v.D, {
                        color: "text-strong",
                        variant: "heading-sm/semibold",
                        className: y.W0,
                        children: s,
                    }),
                    (0, e.jsxs)("div", {
                        className: y.mG,
                        children: [
                            (0, e.jsxs)(h.E, {
                                color: "text-default",
                                variant: "body-xs/medium",
                                className: y.Hu,
                                children: [
                                    (0, e.jsx)(j.ChatIcon, { size: "xs", color: "currentColor", className: y.Kk }),
                                    i,
                                ],
                            }),
                            r > 0 &&
                                (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsx)("span", { className: y.xE, children: "\u2022" }),
                                        (0, e.jsxs)(h.E, {
                                            color: "text-default",
                                            variant: "body-xs/medium",
                                            className: y.Hu,
                                            children: [
                                                (0, e.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": f.intl.string(f.t.gHp0C4),
                                                    className: y.Kk,
                                                    children: "\u2764\uFE0F",
                                                }),
                                                r,
                                            ],
                                        }),
                                    ],
                                }),
                            (0, e.jsx)("span", { className: y.xE, children: "\u2022" }),
                            (0, e.jsx)(h.E, { color: "text-default", variant: "body-xs/medium", children: l }),
                        ],
                    }),
                ],
            }),
            null != c &&
                (0, e.jsx)("img", {
                    src: c,
                    alt: f.intl.formatToPlainString(f.t.MJHFt9, { name: s }),
                    className: y.oh,
                }),
        ],
    });
}
function I(t) {
    let { author: a, content: n } = t,
        { name: s, isOP: i, avatarSrc: r } = a;
    return (0, e.jsxs)("div", {
        className: y.iU,
        children: [
            (0, e.jsx)("img", { src: r, alt: f.intl.string(f.t.lqaIxI), width: 40, height: 40 }),
            (0, e.jsxs)("div", {
                children: [
                    (0, e.jsxs)("div", {
                        className: y.mG,
                        children: [
                            (0, e.jsx)(h.E, { color: "text-strong", variant: "body-sm/semibold", children: s }),
                            i &&
                                (0, e.jsx)(h.E, {
                                    variant: "footnote/semibold",
                                    color: "none",
                                    tag: "span",
                                    className: y.aj,
                                    children: f.intl.string(f.t.fyE8sH),
                                }),
                        ],
                    }),
                    (0, e.jsx)(h.E, { color: "text-default", variant: "body-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function k(t) {
    let { title: a, messages: n, maxHeight: s } = t;
    return (0, e.jsx)("div", {
        className: y.i1,
        style: { maxHeight: s },
        "aria-hidden": !0,
        children: (0, e.jsxs)("div", {
            className: y.VH,
            children: [
                (0, e.jsx)(j.ChatIcon, { size: "md", color: "currentColor", className: y.DD }),
                (0, e.jsx)(v.D, { color: "text-strong", variant: "heading-lg/semibold", className: y.wx, children: a }),
                (0, e.jsx)("div", {
                    className: y.zC,
                    children: n.map((t, a) =>
                        (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(I, { ...t }, a),
                                0 === a &&
                                    (0, e.jsxs)("div", {
                                        children: [
                                            (0, e.jsx)("hr", { className: y.lL }),
                                            (0, e.jsxs)("div", {
                                                className: y.KY,
                                                children: [
                                                    (0, e.jsxs)(h.E, {
                                                        color: "text-brand",
                                                        variant: "body-xs/medium",
                                                        className: y.QJ,
                                                        children: [
                                                            (0, e.jsx)("span", {
                                                                role: "img",
                                                                "aria-label": f.intl.string(f.t.gHp0C4),
                                                                className: y.Kk,
                                                                children: "\u2764\uFE0F",
                                                            }),
                                                            "17",
                                                        ],
                                                    }),
                                                    (0, e.jsxs)(h.E, {
                                                        color: "text-muted",
                                                        variant: "body-xs/medium",
                                                        className: y.CQ,
                                                        children: [
                                                            (0, e.jsx)(N.BellIcon, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                            }),
                                                            f.intl.string(f.t["3aOv+h"]),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, e.jsx)("hr", { className: y.N }),
                                        ],
                                    }),
                            ],
                        }),
                    ),
                }),
                (0, e.jsx)("div", {
                    className: y.RW,
                    children: (0, e.jsx)(h.E, {
                        color: "text-muted",
                        variant: "body-sm/normal",
                        children: f.intl.string(f.t.YzpScd),
                    }),
                }),
            ],
        }),
    });
}
function E(t) {
    let { id: a } = t,
        [n, i] = s.useState(0),
        r = s.useRef(null),
        {
            tags: l,
            posts: o,
            postPreview: c,
            ariaLabel: d,
        } = [
            {
                tags: [f.intl.string(f.t["/XjSo3"]), f.intl.string(f.t["Af/56e"]), f.intl.string(f.t.LNsW0L)],
                posts: [
                    {
                        user: { name: "pocketman", avatarSrc: S },
                        tagId: 2,
                        title: f.intl.string(f.t.g1hPkw),
                        messageCount: 8,
                        reactionCount: 0,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/ff7fd9a90d702a25.png",
                    },
                    {
                        user: { name: "skaterdood12", avatarSrc: p },
                        tagId: 1,
                        title: f.intl.string(f.t["5GM0TY"]),
                        messageCount: 17,
                        reactionCount: 11,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "ladydaisy", avatarSrc: C },
                        tagId: 2,
                        title: f.intl.string(f.t["2LpQS8"]),
                        messageCount: 18,
                        reactionCount: 15,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: b },
                        tagId: 0,
                        title: f.intl.string(f.t.gFI7Lw),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: f.intl.formatToPlainString(f.t.p0KedC, { count: 1 }),
                        attachment: "/assets/0d303ee5beec2287.png",
                    },
                ],
                postPreview: {
                    title: f.intl.string(f.t["5GM0TY"]),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: p, isOP: !0 },
                            content: f.intl.string(f.t.zEDYfk),
                        },
                        {
                            author: { name: "pocketman", avatarSrc: S, isOP: !1 },
                            content: f.intl.string(f.t["+XGMDs"]),
                        },
                        { author: { name: "ladydaisy", avatarSrc: C, isOP: !1 }, content: f.intl.string(f.t.z0qmHN) },
                    ],
                },
                ariaLabel: f.intl.string(f.t.TDOyPg),
            },
            {
                tags: [f.intl.string(f.t.ogyxel), f.intl.string(f.t.S97ZXx), f.intl.string(f.t.d6GdP4)],
                posts: [
                    {
                        user: { name: "ladydaisy", avatarSrc: C },
                        tagId: 0,
                        title: f.intl.string(f.t.aOyKZ9),
                        messageCount: 8,
                        reactionCount: 11,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/633923dbe21cc7ec.png",
                    },
                    {
                        user: { name: "pocketman", avatarSrc: S },
                        tagId: 1,
                        title: f.intl.string(f.t.EQIrvX),
                        messageCount: 24,
                        reactionCount: 0,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "skaterdood12", avatarSrc: p },
                        tagId: 1,
                        title: f.intl.string(f.t.f9n6Ue),
                        messageCount: 15,
                        reactionCount: 17,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: b },
                        tagId: 2,
                        title: f.intl.string(f.t.lCjd1A),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: f.intl.formatToPlainString(f.t.p0KedC, { count: 1 }),
                        attachment: "/assets/6ba34d72a17034a2.png",
                    },
                ],
                postPreview: {
                    title: f.intl.string(f.t.f9n6Ue),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: p, isOP: !0 },
                            content: f.intl.string(f.t.VeQaUn),
                        },
                        { author: { name: "pocketman", avatarSrc: S, isOP: !1 }, content: f.intl.string(f.t.lwjElH) },
                        { author: { name: "ladydaisy", avatarSrc: C, isOP: !1 }, content: f.intl.string(f.t.RNqQmI) },
                    ],
                },
                ariaLabel: f.intl.string(f.t.iLeWrd),
            },
            {
                tags: [f.intl.string(f.t["5jLvfc"]), f.intl.string(f.t.lRgWdQ), f.intl.string(f.t.Hy4EP0)],
                posts: [
                    {
                        user: { name: "skaterdood12", avatarSrc: p },
                        tagId: null,
                        title: f.intl.string(f.t.to6uUe),
                        messageCount: 11,
                        reactionCount: 17,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 10 }),
                        attachment: "/assets/625651f82bbdecd8.png",
                    },
                    {
                        user: { name: "pocketman", avatarSrc: S },
                        tagId: 1,
                        title: f.intl.string(f.t.dsQXOj),
                        messageCount: 24,
                        reactionCount: 0,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 24 }),
                    },
                    {
                        user: { name: "ladydaisy", avatarSrc: C },
                        tagId: 0,
                        title: f.intl.string(f.t["XL/bba"]),
                        messageCount: 18,
                        reactionCount: 15,
                        activeAgo: f.intl.formatToPlainString(f.t.N9M4N1, { count: 40 }),
                    },
                    {
                        user: { name: "kittyx", avatarSrc: b },
                        tagId: null,
                        title: f.intl.string(f.t.XSYHP3),
                        messageCount: 2,
                        reactionCount: 0,
                        activeAgo: f.intl.formatToPlainString(f.t.p0KedC, { count: 1 }),
                        attachment: "/assets/e6ef93adc3b9eff4.png",
                    },
                ],
                postPreview: {
                    title: f.intl.string(f.t.to6uUe),
                    messages: [
                        {
                            author: { name: "skaterdood12", avatarSrc: p, isOP: !0 },
                            content: f.intl.string(f.t["6DyhGl"]),
                        },
                        { author: { name: "pocketman", avatarSrc: S, isOP: !1 }, content: f.intl.string(f.t.BLiuYI) },
                        { author: { name: "ladydaisy", avatarSrc: C, isOP: !1 }, content: f.intl.string(f.t.PYLKhH) },
                    ],
                },
                ariaLabel: f.intl.string(f.t.kEMWrG),
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
            className: y.kL,
            role: "image",
            "aria-label": d,
            children: [
                (0, e.jsxs)("div", {
                    ref: r,
                    className: y.T,
                    "aria-hidden": !0,
                    children: [
                        (0, e.jsx)("div", {
                            className: y._A,
                            children: l.map((t, a) =>
                                (0, e.jsx)(
                                    h.E,
                                    { color: "text-strong", variant: "body-xs/medium", className: y.Tc, children: t },
                                    a,
                                ),
                            ),
                        }),
                        (0, e.jsx)("div", {
                            className: y.Yl,
                            children: o.map((t, a) => (0, e.jsx)(P, { ...t, tags: l }, a)),
                        }),
                    ],
                }),
                (0, e.jsx)(k, { ...c, maxHeight: n }),
            ],
        })
    );
}
var A = n(652215),
    T = n(49999),
    H = n(271936);
function M(t) {
    let { guildId: a, shouldUpsellCreation: h, transitionState: v, onClose: j } = t,
        N = (0, i.bG)([g.A], () => g.A.getGuild(a), [a]),
        p = (0, i.bG)([u.A], () => u.A.can(A.xBc.MANAGE_CHANNELS, N)),
        S = [
            { id: 0, name: f.intl.string(f.t.HTA517) },
            { id: 1, name: f.intl.string(f.t["IHjjY/"]) },
            { id: 2, name: f.intl.string(f.t.x3drh1) },
        ],
        [C, b] = s.useState(0),
        y = [
            {
                variant: h ? "secondary" : "primary",
                text: h ? f.intl.string(f.t.TulDPl) : f.intl.string(f.t["NX+WJN"]),
                onClick: () => j(T.i.SECONDARY),
            },
        ];
    h &&
        y.push({
            variant: "primary",
            text: f.intl.string(f.t["1X8SK/"]),
            onClick: function () {
                ((0, r.mM)(async () => {
                    let { default: t } = await Promise.all([
                        n.e(377476),
                        n.e(597622),
                        n.e(746309),
                        n.e(778799),
                        n.e(844780),
                        n.e(470068),
                        n.e(203589),
                        n.e(692513),
                        n.e(460773),
                        n.e(208018),
                        n.e(589916),
                        n.e(298107),
                        n.e(526778),
                        n.e(590814),
                        n.e(258709),
                        n.e(819193),
                        n.e(507775),
                        n.e(102657),
                        n.e(524521),
                        n.e(358608),
                        n.e(640317),
                    ]).then(n.bind(n, 410380));
                    return (n) =>
                        (0, e.jsx)(t, {
                            ...n,
                            channelType: A.rbe.GUILD_FORUM,
                            guildId: a,
                            prefillChannelName: h ? f.intl.string(f.t["5z1Xat"]) : void 0,
                        });
                }),
                    j(T.i.PRIMARY));
            },
        });
    let P = f.intl.string(f.t["6S6WCQ"]);
    return (0, e.jsxs)(l.d, {
        transitionState: v,
        size: "xxl",
        onClose: async () => await j(),
        "aria-label": P,
        children: [
            (0, e.jsx)(o.rQ, { title: P, subtitle: f.intl.string(f.t.I2BA8K) }),
            (0, e.jsxs)(c.c, {
                children: [
                    (0, e.jsx)(d.V, {
                        selectedItem: C,
                        type: "top",
                        onItemSelect: function (t) {
                            (b(t), (0, x.Bd)({ forumDemoId: t }));
                        },
                        className: H._,
                        children: S.map((t, a) => (0, e.jsx)(d.V.Item, { id: a, children: t.name }, a)),
                    }),
                    (0, e.jsx)(E, { id: C }),
                ],
            }),
            p && (0, e.jsx)(m.H, { actions: y }),
        ],
    });
}
