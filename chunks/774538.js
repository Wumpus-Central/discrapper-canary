(e.d(a, { default: () => M }), e(321073));
var n = e(477900),
    s = e(582128),
    i = e(855986),
    r = e(192308),
    l = e(224640),
    o = e(20742),
    c = e(430993),
    d = e(761508),
    m = e(696208),
    g = e(71393),
    u = e(576705),
    x = e(853742),
    h = e(834730),
    v = e(534514),
    j = e(534890),
    N = e(782603),
    f = e(792996);
let p = "/assets/8b9e0ddc76afa526.png",
    S = "/assets/16b25e0cf166698d.png",
    C = "/assets/6011f35d14cdcf7f.png",
    b = "/assets/52a68ae4cbfadd1b.png";
var y = e(25431);
function P(t) {
    let { user: a, tagId: e, title: s, messageCount: i, reactionCount: r, activeAgo: l, tags: o, attachment: c } = t,
        { name: d, avatarSrc: m } = a;
    return (0, n.jsxs)("div", {
        className: y.bE,
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        className: y.mG,
                        children: [
                            (0, n.jsxs)(h.E, {
                                color: "text-strong",
                                variant: "body-xs/medium",
                                className: y.mG,
                                children: [
                                    (0, n.jsx)("img", {
                                        src: m,
                                        alt: f.intl.string(f.t.lqaIxI),
                                        width: 16,
                                        height: 16,
                                    }),
                                    d,
                                ],
                            }),
                            null != e &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("span", { className: y.xE, children: "\u2022" }),
                                        (0, n.jsx)(h.E, {
                                            color: "text-strong",
                                            variant: "footnote/medium",
                                            className: y.qo,
                                            children: o[e],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, n.jsx)(v.D, {
                        color: "text-strong",
                        variant: "heading-sm/semibold",
                        className: y.W0,
                        children: s,
                    }),
                    (0, n.jsxs)("div", {
                        className: y.mG,
                        children: [
                            (0, n.jsxs)(h.E, {
                                color: "text-default",
                                variant: "body-xs/medium",
                                className: y.Hu,
                                children: [
                                    (0, n.jsx)(j.ChatIcon, { size: "xs", color: "currentColor", className: y.Kk }),
                                    i,
                                ],
                            }),
                            r > 0 &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("span", { className: y.xE, children: "\u2022" }),
                                        (0, n.jsxs)(h.E, {
                                            color: "text-default",
                                            variant: "body-xs/medium",
                                            className: y.Hu,
                                            children: [
                                                (0, n.jsx)("span", {
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
                            (0, n.jsx)("span", { className: y.xE, children: "\u2022" }),
                            (0, n.jsx)(h.E, { color: "text-default", variant: "body-xs/medium", children: l }),
                        ],
                    }),
                ],
            }),
            null != c &&
                (0, n.jsx)("img", {
                    src: c,
                    alt: f.intl.formatToPlainString(f.t.MJHFt9, { name: s }),
                    className: y.oh,
                }),
        ],
    });
}
function I(t) {
    let { author: a, content: e } = t,
        { name: s, isOP: i, avatarSrc: r } = a;
    return (0, n.jsxs)("div", {
        className: y.iU,
        children: [
            (0, n.jsx)("img", { src: r, alt: f.intl.string(f.t.lqaIxI), width: 40, height: 40 }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        className: y.mG,
                        children: [
                            (0, n.jsx)(h.E, { color: "text-strong", variant: "body-sm/semibold", children: s }),
                            i &&
                                (0, n.jsx)(h.E, {
                                    variant: "footnote/semibold",
                                    color: "none",
                                    tag: "span",
                                    className: y.aj,
                                    children: f.intl.string(f.t.fyE8sH),
                                }),
                        ],
                    }),
                    (0, n.jsx)(h.E, { color: "text-default", variant: "body-sm/normal", children: e }),
                ],
            }),
        ],
    });
}
function k(t) {
    let { title: a, messages: e, maxHeight: s } = t;
    return (0, n.jsx)("div", {
        className: y.i1,
        style: { maxHeight: s },
        "aria-hidden": !0,
        children: (0, n.jsxs)("div", {
            className: y.VH,
            children: [
                (0, n.jsx)(j.ChatIcon, { size: "md", color: "currentColor", className: y.DD }),
                (0, n.jsx)(v.D, { color: "text-strong", variant: "heading-lg/semibold", className: y.wx, children: a }),
                (0, n.jsx)("div", {
                    className: y.zC,
                    children: e.map((t, a) =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(I, { ...t }, a),
                                0 === a &&
                                    (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsx)("hr", { className: y.lL }),
                                            (0, n.jsxs)("div", {
                                                className: y.KY,
                                                children: [
                                                    (0, n.jsxs)(h.E, {
                                                        color: "text-brand",
                                                        variant: "body-xs/medium",
                                                        className: y.QJ,
                                                        children: [
                                                            (0, n.jsx)("span", {
                                                                role: "img",
                                                                "aria-label": f.intl.string(f.t.gHp0C4),
                                                                className: y.Kk,
                                                                children: "\u2764\uFE0F",
                                                            }),
                                                            "17",
                                                        ],
                                                    }),
                                                    (0, n.jsxs)(h.E, {
                                                        color: "text-muted",
                                                        variant: "body-xs/medium",
                                                        className: y.CQ,
                                                        children: [
                                                            (0, n.jsx)(N.BellIcon, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                            }),
                                                            f.intl.string(f.t["3aOv+h"]),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)("hr", { className: y.N }),
                                        ],
                                    }),
                            ],
                        }),
                    ),
                }),
                (0, n.jsx)("div", {
                    className: y.RW,
                    children: (0, n.jsx)(h.E, {
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
        [e, i] = s.useState(0),
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
            0 === e && r?.current?.clientHeight != null && i(r.current.clientHeight - 40);
        }, [e]),
        (0, n.jsxs)("div", {
            className: y.kL,
            role: "image",
            "aria-label": d,
            children: [
                (0, n.jsxs)("div", {
                    ref: r,
                    className: y.T,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)("div", {
                            className: y._A,
                            children: l.map((t, a) =>
                                (0, n.jsx)(
                                    h.E,
                                    { color: "text-strong", variant: "body-xs/medium", className: y.Tc, children: t },
                                    a,
                                ),
                            ),
                        }),
                        (0, n.jsx)("div", {
                            className: y.Yl,
                            children: o.map((t, a) => (0, n.jsx)(P, { ...t, tags: l }, a)),
                        }),
                    ],
                }),
                (0, n.jsx)(k, { ...c, maxHeight: e }),
            ],
        })
    );
}
var A = e(652215),
    T = e(49999),
    H = e(271936);
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
                        e.e(377476),
                        e.e(597622),
                        e.e(746309),
                        e.e(778799),
                        e.e(844780),
                        e.e(470068),
                        e.e(203589),
                        e.e(692513),
                        e.e(460773),
                        e.e(208018),
                        e.e(589916),
                        e.e(590814),
                        e.e(298107),
                        e.e(258709),
                        e.e(526778),
                        e.e(819193),
                        e.e(637038),
                        e.e(507775),
                        e.e(102657),
                        e.e(524521),
                        e.e(358608),
                        e.e(640317),
                    ]).then(e.bind(e, 410380));
                    return (e) =>
                        (0, n.jsx)(t, {
                            ...e,
                            channelType: A.rbe.GUILD_FORUM,
                            guildId: a,
                            prefillChannelName: h ? f.intl.string(f.t["5z1Xat"]) : void 0,
                        });
                }),
                    j(T.i.PRIMARY));
            },
        });
    let P = f.intl.string(f.t["6S6WCQ"]);
    return (0, n.jsxs)(l.d, {
        transitionState: v,
        size: "xxl",
        onClose: async () => await j(),
        "aria-label": P,
        children: [
            (0, n.jsx)(o.rQ, { title: P, subtitle: f.intl.string(f.t.I2BA8K) }),
            (0, n.jsxs)(c.c, {
                children: [
                    (0, n.jsx)(d.V, {
                        selectedItem: C,
                        type: "top",
                        onItemSelect: function (t) {
                            (b(t), (0, x.Bd)({ forumDemoId: t }));
                        },
                        className: H._,
                        children: S.map((t, a) => (0, n.jsx)(d.V.Item, { id: a, children: t.name }, a)),
                    }),
                    (0, n.jsx)(E, { id: C }),
                ],
            }),
            p && (0, n.jsx)(m.H, { actions: y }),
        ],
    });
}
