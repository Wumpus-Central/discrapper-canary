i.d(t, { default: () => ed });
var l = i(477900),
    n = i(582128),
    s = i(224640),
    a = i(943457),
    r = i(424912),
    d = i(537975),
    c = i(208882);
i(321073);
var o = i(855986),
    u = i(964486),
    m = i(71393),
    x = i(576705),
    g = i(711014),
    j = i(519480),
    h = i(652215);
let C = function (e, t) {
    let [i, l] = n.useState(!1),
        s = (0, o.bG)([j.A], () => j.A.getAdminGuildEntryIds(t)),
        a = (0, o.yK)(
            [g.Ay, m.A, x.A],
            () => {
                let t = g.Ay.getFlattenedGuildIds(),
                    i = [];
                return (
                    t.forEach((t) => {
                        let l = m.A.getGuild(t);
                        null != l && x.A.can(h.xBc.ADMINISTRATOR, l) && l.id !== e && i.push(l);
                    }),
                    i
                );
            },
            [e],
        );
    return (
        (0, u.Ay)(() => {
            (async () => {
                (l(!0),
                    await c.LH(
                        t,
                        a.map((e) => e.id),
                    ),
                    l(!1));
            })();
        }),
        {
            availableGuilds: n.useMemo(() => a.filter((e) => !s?.has(e.id)), [a, s]),
            addedGuilds: n.useMemo(() => a.filter((e) => s?.has(e.id)), [a, s]),
            loading: i,
        }
    );
};
var S = i(503698),
    I = i.n(S),
    A = i(939249),
    E = i(834730),
    y = i(365199),
    N = i(289873),
    T = i(20742),
    U = i(430993),
    v = i(761508),
    b = i(364840),
    f = i(534514),
    G = i(696208),
    p = i(682163),
    _ = i(682557),
    O = i(792996),
    k = i(169976);
let D = "/assets/25bc5e10b46556b8.svg";
var L = i(906471);
function H(e) {
    let { guild: t, onClick: i } = e;
    return (0, l.jsxs)(A.D, {
        className: k.y5,
        onClick: i,
        children: [
            (0, l.jsx)(p.Ay, { guild: t, size: p.Ay.Sizes.MEDIUM, active: !0 }),
            (0, l.jsx)(E.E, { className: k.J5, variant: "body-md/semibold", children: t.name }),
            (0, l.jsx)("img", { alt: "", src: L }),
        ],
    });
}
function M(e) {
    let { directoryChannelId: t, guild: i } = e,
        s = (0, o.bG)([j.A], () => j.A.getDirectoryEntry(t, i.id)),
        a = n.useRef(null);
    return (0, l.jsxs)("div", {
        className: k._S,
        children: [
            (0, l.jsx)(p.Ay, { guild: i, size: p.Ay.Sizes.MEDIUM, active: !0 }),
            (0, l.jsx)(E.E, { className: k.J5, variant: "body-md/normal", children: i.name }),
            (0, l.jsx)(_.A, {
                entry: s,
                targetElementRef: a,
                children: (e) =>
                    (0, l.jsx)(y.MoreHorizontalIcon, {
                        ref: a,
                        size: "md",
                        color: "currentColor",
                        ...e,
                        className: k.IQ,
                    }),
            }),
        ],
    });
}
function B(e) {
    let t,
        {
            directoryChannelId: i,
            onGuildChosen: s,
            handleChooseCreate: a,
            directoryGuildName: r,
            availableGuilds: d,
            addedGuilds: c,
            loading: o,
        } = e,
        [u, m] = n.useState(0);
    return (
        (t = o
            ? (0, l.jsx)("div", { className: k.do, children: (0, l.jsx)(N.y, {}) })
            : 0 === u
              ? 0 === d.length
                  ? (0, l.jsxs)("div", {
                        className: k.do,
                        children: [
                            (0, l.jsx)("img", { src: D, alt: "", className: k.hd }),
                            (0, l.jsx)(E.E, {
                                className: k.BI,
                                color: "text-default",
                                variant: "body-md/normal",
                                children: O.intl.string(O.t.liuEhd),
                            }),
                        ],
                    })
                  : d.map((e) => (0, l.jsx)(H, { guild: e, onClick: () => s(e) }, e.id))
              : 0 === c.length
                ? (0, l.jsxs)("div", {
                      className: k.do,
                      children: [
                          (0, l.jsx)("img", { src: D, alt: "", className: k.hd }),
                          (0, l.jsx)(E.E, {
                              className: k.BI,
                              color: "text-default",
                              variant: "body-md/normal",
                              children: O.intl.string(O.t.WJLuKK),
                          }),
                      ],
                  })
                : c.map((e) => (0, l.jsx)(M, { directoryChannelId: i, guild: e }, e.id))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(T.rQ, {
                    title: O.intl.formatToPlainString(O.t["9SKJdF"], { guildName: r }),
                    subtitle: O.intl.string(O.t.pYFZ9p),
                }),
                (0, l.jsx)(U.c, {
                    controls: (0, l.jsxs)(v.V, {
                        className: k.$H,
                        selectedItem: u,
                        onItemSelect: m,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, l.jsx)(v.V.Item, {
                                className: I()(k.YU, { [k.xR]: 0 === u }),
                                id: 0,
                                children: O.intl.string(O.t.FTe8HS),
                            }),
                            (0, l.jsx)(v.V.Item, {
                                className: I()(k.YU, { [k.xR]: 1 === u }),
                                id: 1,
                                children: O.intl.string(O.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, l.jsx)("div", { className: k.OW, children: t }),
                }),
                (0, l.jsxs)(b.j, {
                    children: [
                        (0, l.jsx)(f.D, {
                            variant: "heading-lg/semibold",
                            className: k.K8,
                            children: O.intl.string(O.t.pgCZRP),
                        }),
                        (0, l.jsx)(G.H, {
                            actionsFullWidth: !0,
                            actions: [{ variant: "secondary", text: O.intl.string(O.t.WqJbLi), onClick: a }],
                        }),
                    ],
                }),
            ],
        })
    );
}
var R = i(103557),
    F = i(691885),
    Y = i(123292),
    W = i(181658),
    P = i(946116),
    z = i(85924);
function X(e) {
    let {
            directoryChannelId: t,
            description: i,
            onDescriptionChange: s,
            categoryId: a,
            onCategoryIdChange: r,
            onSubmit: d,
            onBack: c,
        } = e,
        [o, u] = n.useState(!1),
        [m, x] = n.useState(null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(T.rQ, { title: O.intl.string(O.t["5bQcoa"]), subtitle: O.intl.string(O.t.Ie60Wc) }),
            (0, l.jsx)(U.c, {
                children: (0, l.jsxs)("div", {
                    className: z.S,
                    children: [
                        (0, l.jsx)(R.f, {
                            label: O.intl.string(O.t.FFFAGt),
                            value: i,
                            maxLength: 200,
                            placeholder: O.intl.string(O.t.VzuITC),
                            onChange: s,
                            error: m?.getAnyErrorMessage(),
                        }),
                        (0, l.jsx)(F.l, {
                            selectionMode: "single",
                            label: O.intl.string(O.t.Olo8FB),
                            placeholder: O.intl.string(O.t.XqMe3N),
                            options: (0, P.g2)(t),
                            value: a,
                            onSelectionChange: r,
                            maxOptionsVisible: 4,
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(G.H, {
                leading: (0, l.jsx)(Y.Q, {
                    size: "sm",
                    variant: "secondary",
                    text: O.intl.string(O.t["13/7kX"]),
                    onClick: c,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: O.intl.string(O.t.H9jxS1),
                        onClick: async function () {
                            u(!0);
                            try {
                                await d();
                            } catch (e) {
                                x(new W.A(e));
                            }
                            u(!1);
                        },
                        loading: o,
                        disabled: "" === i || a === P.mU.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
var Z = i(284009),
    w = i.n(Z),
    J = i(976860),
    Q = i(805553);
function K(e) {
    let { directoryGuildName: t, guildToAdd: i, isExistingGuildFlow: n, onClose: s } = e;
    return (
        w()(null != i, "Missing guild in Hub add guild confirmation"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(U.c, {
                    children: (0, l.jsxs)("div", {
                        className: Q.Qs,
                        children: [
                            (0, l.jsx)(p.Ay, { guild: i, size: p.Ay.Sizes.XLARGE, active: !0 }),
                            (0, l.jsx)(f.D, {
                                className: Q.DD,
                                variant: "heading-xl/semibold",
                                children: O.intl.string(O.t.CueiPY),
                            }),
                            (0, l.jsx)(E.E, {
                                color: "text-default",
                                variant: "body-md/normal",
                                children: n
                                    ? O.intl.formatToPlainString(O.t.R7Pqn5, { guildName: t })
                                    : O.intl.formatToPlainString(O.t.eIxPSv, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(G.H, {
                    actionsFullWidth: !0,
                    actions: n
                        ? [{ text: O.intl.string(O.t["X0WK+6"]), variant: "primary", onClick: s }]
                        : [
                              { text: O.intl.string(O.t["X/VABv"]), variant: "secondary", onClick: s },
                              {
                                  text: O.intl.string(O.t.DymAQt),
                                  variant: "primary",
                                  onClick: function () {
                                      null != i && ((0, J.uh)(i.id), s?.());
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
var V = i(95362),
    q = i(878314),
    $ = i(746672),
    ee = i(632707),
    et = i(917364),
    ei = i(925487),
    el = i(415915);
let en = {
    CREATE: et,
    HUB_SCHOOL_CLUB: i(85255),
    HUB_STUDY: ei,
    HUB_CLASS: i(137507),
    HUB_SOCIAL: el,
    HUB_MAJOR: ee,
    HUB_DORM: $,
};
var es = i(352890);
function ea(e) {
    let { guildTemplate: t, onClick: i, autoFocus: s } = e,
        a = n.useCallback(() => {
            i(t);
        }, [t, i]);
    return (0, l.jsx)(q.A, { icon: en[t.id], message: t.label, onClick: a, autoFocus: s });
}
function er(e) {
    let { onBack: t, onChooseTemplate: i, directoryGuildName: n } = e,
        s = (0, P.ul)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(T.rQ, {
                title: O.intl.formatToPlainString(O.t.T7aLYT, { guildName: n }),
                subtitle: O.intl.string(O.t["RA+St6"]),
            }),
            (0, l.jsx)(U.c, {
                children: (0, l.jsx)(V.Ar, {
                    className: es.XG,
                    children: (0, l.jsxs)("div", {
                        className: es.KA,
                        children: [
                            (0, l.jsx)(ea, {
                                guildTemplate: { ...s[P.Y1.CREATE], label: O.intl.string(O.t.WqJbLi) },
                                onClick: i,
                            }),
                            (0, l.jsx)(E.E, {
                                className: es.l8,
                                color: "text-default",
                                variant: "body-xs/semibold",
                                children: O.intl.string(O.t.JGDkfg),
                            }),
                            (0, l.jsx)(ea, { guildTemplate: s[P.Y1.HUB_STUDY], onClick: i }),
                            (0, l.jsx)(ea, { guildTemplate: s[P.Y1.HUB_SCHOOL_CLUB], onClick: i }),
                            (0, l.jsx)(ea, { guildTemplate: s[P.Y1.HUB_CLASS], onClick: i }),
                            (0, l.jsx)(ea, { guildTemplate: s[P.Y1.HUB_SOCIAL], onClick: i }),
                            (0, l.jsx)(ea, { guildTemplate: s[P.Y1.HUB_MAJOR], onClick: i }),
                            (0, l.jsx)(ea, { guildTemplate: s[P.Y1.HUB_DORM], onClick: i }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(G.H, {
                leading: (0, l.jsx)(Y.Q, {
                    textVariant: "body-sm/medium",
                    variant: "secondary",
                    text: O.intl.string(O.t["13/7kX"]),
                    onClick: t,
                }),
            }),
        ],
    });
}
function ed(e) {
    let {
            directoryChannelId: t,
            transitionState: i,
            initialSlide: o = P.m8.CHOOSE_GUILD,
            onClose: u,
            directoryGuildName: m,
            directoryGuildId: x,
            currentCategoryId: g,
        } = e,
        [j, h] = n.useState(o),
        [S, I] = n.useState(null),
        [A, E] = n.useState(null),
        [y, N] = n.useState(null),
        [T, U] = n.useState(null),
        [v, b] = n.useState(""),
        [f, G] = n.useState(g ?? P.mU.UNCATEGORIZED),
        [p, _] = n.useState(!1),
        { availableGuilds: O, addedGuilds: k, loading: D } = C(x, t);
    n.useEffect(() => {
        h(o);
    }, [h, o]);
    let L = null;
    switch (j) {
        case P.m8.CHOOSE_GUILD:
            L = (0, l.jsx)(B, {
                directoryChannelId: t,
                directoryGuildName: m,
                onGuildChosen: function (e) {
                    (_(!0), h(P.m8.CUSTOMIZE_EXISTING_GUILD), U(e));
                },
                handleChooseCreate: function () {
                    (_(!1), h(P.m8.GUILD_TEMPLATES));
                },
                availableGuilds: O,
                addedGuilds: k,
                loading: D,
            });
            break;
        case P.m8.GUILD_TEMPLATES:
            L = (0, l.jsx)(er, {
                directoryGuildName: m,
                onChooseTemplate: function (e) {
                    (_(!1), h(P.m8.CUSTOMIZE_NEW_GUILD), I(e));
                },
                onBack: () => h(P.m8.CHOOSE_GUILD),
            });
            break;
        case P.m8.CUSTOMIZE_NEW_GUILD:
            L = (0, l.jsx)(r.A, {
                isSlideReady: !0,
                guildTemplate: S,
                onHubGuildInfoSet: function (e, t) {
                    (E(e), N(t), h(P.m8.CUSTOMIZE_EXISTING_GUILD));
                },
                onBack: () => h(P.m8.GUILD_TEMPLATES),
            });
            break;
        case P.m8.CUSTOMIZE_EXISTING_GUILD:
            L = (0, l.jsx)(X, {
                directoryChannelId: t,
                description: v,
                onDescriptionChange: b,
                categoryId: f,
                onCategoryIdChange: G,
                onSubmit: async function () {
                    let e = T;
                    if (!p) {
                        if (null == A || null == S) return;
                        let t = await a.A.createGuildFromTemplate(A, y, S);
                        U((e = (0, d.Y1)(t)));
                    }
                    null != e && (await c.WD(t, e.id, v, f), h(P.m8.CONFIRMATION));
                },
                onBack: () => h(p ? P.m8.CHOOSE_GUILD : P.m8.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case P.m8.CONFIRMATION:
            L = (0, l.jsx)(K, { directoryGuildName: m, guildToAdd: T, isExistingGuildFlow: p, onClose: u });
    }
    return (0, l.jsx)("div", { children: (0, l.jsx)(s.d, { transitionState: i, onClose: u, children: L }) });
}
