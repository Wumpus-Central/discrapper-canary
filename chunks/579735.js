i.d(t, { default: () => er });
var l = i(627968),
    n = i(64700),
    s = i(224640),
    a = i(943457),
    r = i(424912),
    d = i(860689),
    c = i(208882);
i(321073);
var o = i(17928),
    u = i(964486),
    m = i(71393),
    x = i(576705),
    g = i(711014),
    j = i(519480),
    h = i(652215),
    C = i(503698),
    S = i.n(C),
    I = i(20742),
    A = i(430993),
    E = i(364840),
    N = i(696208),
    T = i(939249),
    U = i(834730),
    v = i(365199),
    y = i(289873),
    G = i(761508),
    p = i(534514),
    _ = i(548118),
    O = i(682557),
    b = i(375708),
    k = i(125039);
let D = "/assets/25bc5e10b46556b8.svg";
var f = i(906471);
function L(e) {
    let { guild: t, onClick: i } = e;
    return (0, l.jsxs)(T.D, {
        className: k.y5,
        onClick: i,
        children: [
            (0, l.jsx)(_.Ay, { guild: t, size: _.Ay.Sizes.MEDIUM, active: !0 }),
            (0, l.jsx)(U.E, { className: k.J5, variant: "text-md/semibold", children: t.name }),
            (0, l.jsx)("img", { alt: "", src: f }),
        ],
    });
}
function H(e) {
    let { directoryChannelId: t, guild: i } = e,
        s = (0, o.bG)([j.A], () => j.A.getDirectoryEntry(t, i.id)),
        a = n.useRef(null);
    return (0, l.jsxs)("div", {
        className: k._S,
        children: [
            (0, l.jsx)(_.Ay, { guild: i, size: _.Ay.Sizes.MEDIUM, active: !0 }),
            (0, l.jsx)(U.E, { className: k.J5, variant: "text-md/normal", children: i.name }),
            (0, l.jsx)(O.A, {
                entry: s,
                targetElementRef: a,
                children: (e) => (0, l.jsx)(v.j, { ref: a, size: "md", color: "currentColor", ...e, className: k.IQ }),
            }),
        ],
    });
}
function M(e) {
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
            ? (0, l.jsx)("div", { className: k.do, children: (0, l.jsx)(y.y, {}) })
            : 0 === u
              ? 0 === d.length
                  ? (0, l.jsxs)("div", {
                        className: k.do,
                        children: [
                            (0, l.jsx)("img", { src: D, alt: "", className: k.hd }),
                            (0, l.jsx)(U.E, {
                                className: k.BI,
                                color: "text-default",
                                variant: "text-md/normal",
                                children: b.intl.string(b.t.liuEhd),
                            }),
                        ],
                    })
                  : d.map((e) => (0, l.jsx)(L, { guild: e, onClick: () => s(e) }, e.id))
              : 0 === c.length
                ? (0, l.jsxs)("div", {
                      className: k.do,
                      children: [
                          (0, l.jsx)("img", { src: D, alt: "", className: k.hd }),
                          (0, l.jsx)(U.E, {
                              className: k.BI,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: b.intl.string(b.t.WJLuKK),
                          }),
                      ],
                  })
                : c.map((e) => (0, l.jsx)(H, { directoryChannelId: i, guild: e }, e.id))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(I.rQ, {
                    title: b.intl.formatToPlainString(b.t["9SKJdF"], { guildName: r }),
                    subtitle: b.intl.string(b.t.pYFZ9p),
                }),
                (0, l.jsx)(A.c, {
                    controls: (0, l.jsxs)(G.V, {
                        className: k.$H,
                        selectedItem: u,
                        onItemSelect: m,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, l.jsx)(G.V.Item, {
                                className: S()(k.YU, { [k.xR]: 0 === u }),
                                id: 0,
                                children: b.intl.string(b.t.FTe8HS),
                            }),
                            (0, l.jsx)(G.V.Item, {
                                className: S()(k.YU, { [k.xR]: 1 === u }),
                                id: 1,
                                children: b.intl.string(b.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, l.jsx)("div", { className: k.OW, children: t }),
                }),
                (0, l.jsxs)(E.j, {
                    children: [
                        (0, l.jsx)(p.D, {
                            variant: "heading-lg/semibold",
                            className: k.K8,
                            children: b.intl.string(b.t.pgCZRP),
                        }),
                        (0, l.jsx)(N.H, {
                            actionsFullWidth: !0,
                            actions: [{ variant: "secondary", text: b.intl.string(b.t.WqJbLi), onClick: a }],
                        }),
                    ],
                }),
            ],
        })
    );
}
var B = i(260598),
    R = i(691885),
    F = i(123292),
    Y = i(181658),
    W = i(946116),
    P = i(929453);
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
        [m, x] = n.useState(null),
        g = async () => {
            u(!0);
            try {
                await d();
            } catch (e) {
                x(new Y.A(e));
            }
            u(!1);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(I.rQ, { title: b.intl.string(b.t["5bQcoa"]), subtitle: b.intl.string(b.t.Ie60Wc) }),
            (0, l.jsx)(A.c, {
                children: (0, l.jsxs)("div", {
                    className: P.S,
                    children: [
                        (0, l.jsx)(B.f, {
                            label: b.intl.string(b.t.FFFAGt),
                            value: i,
                            maxLength: 200,
                            placeholder: b.intl.string(b.t.VzuITC),
                            onChange: s,
                            error: m?.getAnyErrorMessage(),
                        }),
                        (0, l.jsx)(R.l, {
                            selectionMode: "single",
                            label: b.intl.string(b.t.Olo8FB),
                            placeholder: b.intl.string(b.t.XqMe3N),
                            options: (0, W.g2)(t),
                            value: a,
                            onSelectionChange: r,
                            maxOptionsVisible: 4,
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(N.H, {
                leading: (0, l.jsx)(F.Q, {
                    size: "sm",
                    variant: "secondary",
                    text: b.intl.string(b.t["13/7kX"]),
                    onClick: c,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: b.intl.string(b.t.H9jxS1),
                        onClick: g,
                        loading: o,
                        disabled: "" === i || a === W.mU.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
var Z = i(284009),
    w = i.n(Z),
    z = i(976860),
    J = i(291980);
function Q(e) {
    let { directoryGuildName: t, guildToAdd: i, isExistingGuildFlow: n, onClose: s } = e;
    return (
        w()(null != i, "Missing guild in Hub add guild confirmation"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(A.c, {
                    children: (0, l.jsxs)("div", {
                        className: J.Qs,
                        children: [
                            (0, l.jsx)(_.Ay, { guild: i, size: _.Ay.Sizes.XLARGE, active: !0 }),
                            (0, l.jsx)(p.D, {
                                className: J.DD,
                                variant: "heading-xl/semibold",
                                children: b.intl.string(b.t.CueiPY),
                            }),
                            (0, l.jsx)(U.E, {
                                color: "text-default",
                                variant: "text-md/normal",
                                children: n
                                    ? b.intl.formatToPlainString(b.t.R7Pqn5, { guildName: t })
                                    : b.intl.formatToPlainString(b.t.eIxPSv, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(N.H, {
                    actionsFullWidth: !0,
                    actions: n
                        ? [{ text: b.intl.string(b.t["X0WK+6"]), variant: "primary", onClick: s }]
                        : [
                              { text: b.intl.string(b.t["X/VABv"]), variant: "secondary", onClick: s },
                              {
                                  text: b.intl.string(b.t.DymAQt),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, z.uh)(i.id), s?.();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
var K = i(364522),
    V = i(878314),
    q = i(746672),
    $ = i(632707),
    ee = i(917364),
    et = i(925487),
    ei = i(415915);
let el = {
    CREATE: ee,
    HUB_SCHOOL_CLUB: i(85255),
    HUB_STUDY: et,
    HUB_CLASS: i(137507),
    HUB_SOCIAL: ei,
    HUB_MAJOR: $,
    HUB_DORM: q,
};
var en = i(290125);
function es(e) {
    let { guildTemplate: t, onClick: i, autoFocus: s } = e,
        a = n.useCallback(() => {
            i(t);
        }, [t, i]);
    return (0, l.jsx)(V.A, { icon: el[t.id], message: t.label, onClick: a, autoFocus: s });
}
function ea(e) {
    let { onBack: t, onChooseTemplate: i, directoryGuildName: n } = e,
        s = (0, W.ul)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(I.rQ, {
                title: b.intl.formatToPlainString(b.t.T7aLYT, { guildName: n }),
                subtitle: b.intl.string(b.t["RA+St6"]),
            }),
            (0, l.jsx)(A.c, {
                children: (0, l.jsx)(K.Ar, {
                    className: en.XG,
                    children: (0, l.jsxs)("div", {
                        className: en.KA,
                        children: [
                            (0, l.jsx)(es, {
                                guildTemplate: { ...s[W.Y1.CREATE], label: b.intl.string(b.t.WqJbLi) },
                                onClick: i,
                            }),
                            (0, l.jsx)(U.E, {
                                className: en.l8,
                                color: "text-default",
                                variant: "text-xs/bold",
                                children: b.intl.string(b.t.JGDkfg),
                            }),
                            (0, l.jsx)(es, { guildTemplate: s[W.Y1.HUB_STUDY], onClick: i }),
                            (0, l.jsx)(es, { guildTemplate: s[W.Y1.HUB_SCHOOL_CLUB], onClick: i }),
                            (0, l.jsx)(es, { guildTemplate: s[W.Y1.HUB_CLASS], onClick: i }),
                            (0, l.jsx)(es, { guildTemplate: s[W.Y1.HUB_SOCIAL], onClick: i }),
                            (0, l.jsx)(es, { guildTemplate: s[W.Y1.HUB_MAJOR], onClick: i }),
                            (0, l.jsx)(es, { guildTemplate: s[W.Y1.HUB_DORM], onClick: i }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(N.H, {
                leading: (0, l.jsx)(F.Q, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: b.intl.string(b.t["13/7kX"]),
                    onClick: t,
                }),
            }),
        ],
    });
}
function er(e) {
    let {
            directoryChannelId: t,
            transitionState: i,
            initialSlide: C = W.m8.CHOOSE_GUILD,
            onClose: S,
            directoryGuildName: I,
            directoryGuildId: A,
            currentCategoryId: E,
        } = e,
        [N, T] = n.useState(C),
        [U, v] = n.useState(null),
        [y, G] = n.useState(null),
        [p, _] = n.useState(null),
        [O, b] = n.useState(null),
        [k, D] = n.useState(""),
        [f, L] = n.useState(E ?? W.mU.UNCATEGORIZED),
        [H, B] = n.useState(!1),
        {
            availableGuilds: R,
            addedGuilds: F,
            loading: Y,
        } = ((e, t) => {
            let [i, l] = n.useState(!1),
                s = (0, o.bG)([j.A], () => j.A.getAdminGuildEntryIds(t)),
                a = (0, o.yK)([g.Ay, m.A, x.A], () => {
                    let t = g.Ay.getFlattenedGuildIds(),
                        i = [];
                    return (
                        t.forEach((t) => {
                            let l = m.A.getGuild(t);
                            null != l && x.A.can(h.xBc.ADMINISTRATOR, l) && l.id !== e && i.push(l);
                        }),
                        i
                    );
                }, [e]);
            return (
                (0, u.Ay)(() => {
                    (async () => {
                        l(!0),
                            await c.LH(
                                t,
                                a.map((e) => e.id),
                            ),
                            l(!1);
                    })();
                }),
                {
                    availableGuilds: n.useMemo(() => a.filter((e) => !s?.has(e.id)), [a, s]),
                    addedGuilds: n.useMemo(() => a.filter((e) => s?.has(e.id)), [a, s]),
                    loading: i,
                }
            );
        })(A, t);
    n.useEffect(() => {
        T(C);
    }, [T, C]);
    let P = async () => {
            let e = O;
            if (!H) {
                if (null == y || null == U) return;
                let t = await a.A.createGuildFromTemplate(y, p, U);
                b((e = (0, d.Y1)(t)));
            }
            null != e && (await c.WD(t, e.id, k, f), T(W.m8.CONFIRMATION));
        },
        Z = null;
    switch (N) {
        case W.m8.CHOOSE_GUILD:
            Z = (0, l.jsx)(M, {
                directoryChannelId: t,
                directoryGuildName: I,
                onGuildChosen: (e) => {
                    B(!0), T(W.m8.CUSTOMIZE_EXISTING_GUILD), b(e);
                },
                handleChooseCreate: () => {
                    B(!1), T(W.m8.GUILD_TEMPLATES);
                },
                availableGuilds: R,
                addedGuilds: F,
                loading: Y,
            });
            break;
        case W.m8.GUILD_TEMPLATES:
            Z = (0, l.jsx)(ea, {
                directoryGuildName: I,
                onChooseTemplate: (e) => {
                    B(!1), T(W.m8.CUSTOMIZE_NEW_GUILD), v(e);
                },
                onBack: () => T(W.m8.CHOOSE_GUILD),
            });
            break;
        case W.m8.CUSTOMIZE_NEW_GUILD:
            Z = (0, l.jsx)(r.A, {
                isSlideReady: !0,
                guildTemplate: U,
                onHubGuildInfoSet: (e, t) => {
                    G(e), _(t), T(W.m8.CUSTOMIZE_EXISTING_GUILD);
                },
                onBack: () => T(W.m8.GUILD_TEMPLATES),
            });
            break;
        case W.m8.CUSTOMIZE_EXISTING_GUILD:
            Z = (0, l.jsx)(X, {
                directoryChannelId: t,
                description: k,
                onDescriptionChange: D,
                categoryId: f,
                onCategoryIdChange: L,
                onSubmit: P,
                onBack: () => T(H ? W.m8.CHOOSE_GUILD : W.m8.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case W.m8.CONFIRMATION:
            Z = (0, l.jsx)(Q, { directoryGuildName: I, guildToAdd: O, isExistingGuildFlow: H, onClose: S });
    }
    return (0, l.jsx)("div", { children: (0, l.jsx)(s.d, { transitionState: i, onClose: S, children: Z }) });
}
