l.d(t, { default: () => er });
var i = l(627968),
    s = l(64700),
    a = l(224640),
    n = l(943457),
    r = l(424912),
    c = l(860689),
    d = l(208882);
l(321073);
var o = l(17928),
    u = l(964486),
    m = l(71393),
    x = l(576705),
    C = l(711014),
    g = l(519480),
    h = l(652215),
    j = l(503698),
    L = l.n(j),
    _ = l(20742),
    f = l(430993),
    p = l(364840),
    v = l(696208),
    S = l(939249),
    b = l(834730),
    A = l(365199),
    I = l(289873),
    N = l(761508),
    E = l(364522),
    y = l(534514),
    H = l(548118),
    M = l(682557),
    T = l(985018),
    G = l(125039);
let k = "/assets/25bc5e10b46556b8.svg";
var U = l(906471);
function D(e) {
    let { guild: t, onClick: l } = e;
    return (0, i.jsxs)(S.D, {
        className: G.y5,
        onClick: l,
        children: [
            (0, i.jsx)(H.Ay, { guild: t, size: H.Ay.Sizes.MEDIUM, active: !0 }),
            (0, i.jsx)(b.E, { className: G.J5, variant: "text-md/semibold", children: t.name }),
            (0, i.jsx)("img", { alt: "", src: U }),
        ],
    });
}
function Z(e) {
    let { directoryChannelId: t, guild: l } = e,
        a = (0, o.bG)([g.A], () => g.A.getDirectoryEntry(t, l.id)),
        n = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: G._S,
        children: [
            (0, i.jsx)(H.Ay, { guild: l, size: H.Ay.Sizes.MEDIUM, active: !0 }),
            (0, i.jsx)(b.E, { className: G.J5, variant: "text-md/normal", children: l.name }),
            (0, i.jsx)(M.A, {
                entry: a,
                targetElementRef: n,
                children: (e) => (0, i.jsx)(A.j, { ref: n, size: "md", color: "currentColor", ...e, className: G.IQ }),
            }),
        ],
    });
}
function O(e) {
    let t,
        {
            directoryChannelId: l,
            onGuildChosen: a,
            handleChooseCreate: n,
            directoryGuildName: r,
            availableGuilds: c,
            addedGuilds: d,
            loading: o,
        } = e,
        [u, m] = s.useState(0);
    return (
        (t = o
            ? (0, i.jsx)("div", { className: G.do, children: (0, i.jsx)(I.y, {}) })
            : 0 === u
              ? 0 === c.length
                  ? (0, i.jsxs)("div", {
                        className: G.do,
                        children: [
                            (0, i.jsx)("img", { src: k, alt: "", className: G.hd }),
                            (0, i.jsx)(b.E, {
                                className: G.BI,
                                color: "text-default",
                                variant: "text-md/normal",
                                children: T.intl.string(T.t.liuEhd),
                            }),
                        ],
                    })
                  : c.map((e) => (0, i.jsx)(D, { guild: e, onClick: () => a(e) }, e.id))
              : 0 === d.length
                ? (0, i.jsxs)("div", {
                      className: G.do,
                      children: [
                          (0, i.jsx)("img", { src: k, alt: "", className: G.hd }),
                          (0, i.jsx)(b.E, {
                              className: G.BI,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: T.intl.string(T.t.WJLuKK),
                          }),
                      ],
                  })
                : d.map((e) => (0, i.jsx)(Z, { directoryChannelId: l, guild: e }, e.id))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.rQ, {
                    title: T.intl.formatToPlainString(T.t["9SKJdF"], { guildName: r }),
                    subtitle: T.intl.string(T.t.pYFZ9p),
                }),
                (0, i.jsx)(f.c, {
                    controls: (0, i.jsxs)(N.V, {
                        className: G.$H,
                        selectedItem: u,
                        onItemSelect: m,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, i.jsx)(N.V.Item, {
                                className: L()(G.YU, { [G.xR]: 0 === u }),
                                id: 0,
                                children: T.intl.string(T.t.FTe8HS),
                            }),
                            (0, i.jsx)(N.V.Item, {
                                className: L()(G.YU, { [G.xR]: 1 === u }),
                                id: 1,
                                children: T.intl.string(T.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(E.Ip, {
                        className: G.XG,
                        children: (0, i.jsx)("div", { className: G.OW, children: t }),
                    }),
                }),
                (0, i.jsxs)(p.j, {
                    children: [
                        (0, i.jsx)(y.D, {
                            variant: "heading-lg/semibold",
                            className: G.K8,
                            children: T.intl.string(T.t.pgCZRP),
                        }),
                        (0, i.jsx)(v.H, {
                            actionsFullWidth: !0,
                            actions: [{ variant: "secondary", text: T.intl.string(T.t.WqJbLi), onClick: n }],
                        }),
                    ],
                }),
            ],
        })
    );
}
var R = l(260598),
    B = l(691885),
    V = l(123292),
    F = l(181658),
    w = l(946116),
    Y = l(929453);
function W(e) {
    let {
            directoryChannelId: t,
            description: l,
            onDescriptionChange: a,
            categoryId: n,
            onCategoryIdChange: r,
            onSubmit: c,
            onBack: d,
        } = e,
        [o, u] = s.useState(!1),
        [m, x] = s.useState(null),
        C = async () => {
            u(!0);
            try {
                await c();
            } catch (e) {
                x(new F.A(e));
            }
            u(!1);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.rQ, { title: T.intl.string(T.t["5bQcoa"]), subtitle: T.intl.string(T.t.Ie60Wc) }),
            (0, i.jsx)(f.c, {
                children: (0, i.jsxs)("div", {
                    className: Y.S,
                    children: [
                        (0, i.jsx)(R.f, {
                            label: T.intl.string(T.t.FFFAGt),
                            value: l,
                            maxLength: 200,
                            placeholder: T.intl.string(T.t.VzuITC),
                            onChange: a,
                            error: m?.getAnyErrorMessage(),
                        }),
                        (0, i.jsx)(B.l, {
                            selectionMode: "single",
                            label: T.intl.string(T.t.Olo8FB),
                            placeholder: T.intl.string(T.t.XqMe3N),
                            options: (0, w.g2)(t),
                            value: n,
                            onSelectionChange: r,
                            maxOptionsVisible: 4,
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(v.H, {
                leading: (0, i.jsx)(V.Q, {
                    size: "sm",
                    variant: "secondary",
                    text: T.intl.string(T.t["13/7kX"]),
                    onClick: d,
                }),
                actions: [
                    {
                        variant: "primary",
                        text: T.intl.string(T.t.H9jxS1),
                        onClick: C,
                        loading: o,
                        disabled: "" === l || n === w.mU.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
var Q = l(284009),
    X = l.n(Q),
    z = l(976860),
    P = l(291980);
function K(e) {
    let { directoryGuildName: t, guildToAdd: l, isExistingGuildFlow: s, onClose: a } = e;
    return (
        X()(null != l, "Missing guild in Hub add guild confirmation"),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.c, {
                    children: (0, i.jsxs)("div", {
                        className: P.Qs,
                        children: [
                            (0, i.jsx)(H.Ay, { guild: l, size: H.Ay.Sizes.XLARGE, active: !0 }),
                            (0, i.jsx)(y.D, {
                                className: P.DD,
                                variant: "heading-xl/semibold",
                                children: T.intl.string(T.t.CueiPY),
                            }),
                            (0, i.jsx)(b.E, {
                                color: "text-default",
                                variant: "text-md/normal",
                                children: s
                                    ? T.intl.formatToPlainString(T.t.R7Pqn5, { guildName: t })
                                    : T.intl.formatToPlainString(T.t.eIxPSv, { guildName: t }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(v.H, {
                    actionsFullWidth: !0,
                    actions: s
                        ? [{ text: T.intl.string(T.t["X0WK+6"]), variant: "primary", onClick: a }]
                        : [
                              { text: T.intl.string(T.t["X/VABv"]), variant: "secondary", onClick: a },
                              {
                                  text: T.intl.string(T.t.DymAQt),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, z.uh)(l.id), a?.();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
var q = l(878314),
    J = l(746672),
    $ = l(632707),
    ee = l(917364),
    et = l(925487),
    el = l(415915);
let ei = {
    CREATE: ee,
    HUB_SCHOOL_CLUB: l(85255),
    HUB_STUDY: et,
    HUB_CLASS: l(137507),
    HUB_SOCIAL: el,
    HUB_MAJOR: $,
    HUB_DORM: J,
};
var es = l(290125);
function ea(e) {
    let { guildTemplate: t, onClick: l, autoFocus: a } = e,
        n = s.useCallback(() => {
            l(t);
        }, [t, l]);
    return (0, i.jsx)(q.A, { icon: ei[t.id], message: t.label, onClick: n, autoFocus: a });
}
function en(e) {
    let { onBack: t, onChooseTemplate: l, directoryGuildName: s } = e,
        a = (0, w.ul)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.rQ, {
                title: T.intl.formatToPlainString(T.t.T7aLYT, { guildName: s }),
                subtitle: T.intl.string(T.t["RA+St6"]),
            }),
            (0, i.jsx)(f.c, {
                children: (0, i.jsx)(E.Ar, {
                    className: es.XG,
                    children: (0, i.jsxs)("div", {
                        className: es.KA,
                        children: [
                            (0, i.jsx)(ea, {
                                guildTemplate: { ...a[w.Y1.CREATE], label: T.intl.string(T.t.WqJbLi) },
                                onClick: l,
                            }),
                            (0, i.jsx)(b.E, {
                                className: es.l8,
                                color: "text-default",
                                variant: "text-xs/bold",
                                children: T.intl.string(T.t.JGDkfg),
                            }),
                            (0, i.jsx)(ea, { guildTemplate: a[w.Y1.HUB_STUDY], onClick: l }),
                            (0, i.jsx)(ea, { guildTemplate: a[w.Y1.HUB_SCHOOL_CLUB], onClick: l }),
                            (0, i.jsx)(ea, { guildTemplate: a[w.Y1.HUB_CLASS], onClick: l }),
                            (0, i.jsx)(ea, { guildTemplate: a[w.Y1.HUB_SOCIAL], onClick: l }),
                            (0, i.jsx)(ea, { guildTemplate: a[w.Y1.HUB_MAJOR], onClick: l }),
                            (0, i.jsx)(ea, { guildTemplate: a[w.Y1.HUB_DORM], onClick: l }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(v.H, {
                leading: (0, i.jsx)(V.Q, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: T.intl.string(T.t["13/7kX"]),
                    onClick: t,
                }),
            }),
        ],
    });
}
function er(e) {
    let {
            directoryChannelId: t,
            transitionState: l,
            initialSlide: j = w.m8.CHOOSE_GUILD,
            onClose: L,
            directoryGuildName: _,
            directoryGuildId: f,
            currentCategoryId: p,
        } = e,
        [v, S] = s.useState(j),
        [b, A] = s.useState(null),
        [I, N] = s.useState(null),
        [E, y] = s.useState(null),
        [H, M] = s.useState(null),
        [T, G] = s.useState(""),
        [k, U] = s.useState(p ?? w.mU.UNCATEGORIZED),
        [D, Z] = s.useState(!1),
        {
            availableGuilds: R,
            addedGuilds: B,
            loading: V,
        } = ((e, t) => {
            let [l, i] = s.useState(!1),
                a = (0, o.bG)([g.A], () => g.A.getAdminGuildEntryIds(t)),
                n = (0, o.yK)([C.Ay, m.A, x.A], () => {
                    let t = C.Ay.getFlattenedGuildIds(),
                        l = [];
                    return (
                        t.forEach((t) => {
                            let i = m.A.getGuild(t);
                            null != i && x.A.can(h.xBc.ADMINISTRATOR, i) && i.id !== e && l.push(i);
                        }),
                        l
                    );
                }, [e]);
            return (
                (0, u.Ay)(() => {
                    (async () => {
                        i(!0),
                            await d.LH(
                                t,
                                n.map((e) => e.id),
                            ),
                            i(!1);
                    })();
                }),
                {
                    availableGuilds: s.useMemo(() => n.filter((e) => !a?.has(e.id)), [n, a]),
                    addedGuilds: s.useMemo(() => n.filter((e) => a?.has(e.id)), [n, a]),
                    loading: l,
                }
            );
        })(f, t);
    s.useEffect(() => {
        S(j);
    }, [S, j]);
    let F = async () => {
            let e = H;
            if (!D) {
                if (null == I || null == b) return;
                let t = await n.A.createGuildFromTemplate(I, E, b);
                M((e = (0, c.Y1)(t)));
            }
            null != e && (await d.WD(t, e.id, T, k), S(w.m8.CONFIRMATION));
        },
        Y = null;
    switch (v) {
        case w.m8.CHOOSE_GUILD:
            Y = (0, i.jsx)(O, {
                directoryChannelId: t,
                directoryGuildName: _,
                onGuildChosen: (e) => {
                    Z(!0), S(w.m8.CUSTOMIZE_EXISTING_GUILD), M(e);
                },
                handleChooseCreate: () => {
                    Z(!1), S(w.m8.GUILD_TEMPLATES);
                },
                availableGuilds: R,
                addedGuilds: B,
                loading: V,
            });
            break;
        case w.m8.GUILD_TEMPLATES:
            Y = (0, i.jsx)(en, {
                directoryGuildName: _,
                onChooseTemplate: (e) => {
                    Z(!1), S(w.m8.CUSTOMIZE_NEW_GUILD), A(e);
                },
                onBack: () => S(w.m8.CHOOSE_GUILD),
            });
            break;
        case w.m8.CUSTOMIZE_NEW_GUILD:
            Y = (0, i.jsx)(r.A, {
                isSlideReady: !0,
                guildTemplate: b,
                onHubGuildInfoSet: (e, t) => {
                    N(e), y(t), S(w.m8.CUSTOMIZE_EXISTING_GUILD);
                },
                onBack: () => S(w.m8.GUILD_TEMPLATES),
            });
            break;
        case w.m8.CUSTOMIZE_EXISTING_GUILD:
            Y = (0, i.jsx)(W, {
                directoryChannelId: t,
                description: T,
                onDescriptionChange: G,
                categoryId: k,
                onCategoryIdChange: U,
                onSubmit: F,
                onBack: () => S(D ? w.m8.CHOOSE_GUILD : w.m8.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case w.m8.CONFIRMATION:
            Y = (0, i.jsx)(K, { directoryGuildName: _, guildToAdd: H, isExistingGuildFlow: D, onClose: L });
    }
    return (0, i.jsx)("div", { children: (0, i.jsx)(a.d, { transitionState: l, onClose: L, children: Y }) });
}
