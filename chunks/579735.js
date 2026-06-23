i.d(e, { default: () => td });
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
    h = i(652215);
let C = function (t, e) {
    let [i, l] = n.useState(!1),
        s = (0, o.bG)([j.A], () => j.A.getAdminGuildEntryIds(e)),
        a = (0, o.yK)([g.Ay, m.A, x.A], () => {
            let e = g.Ay.getFlattenedGuildIds(),
                i = [];
            return (
                e.forEach((e) => {
                    let l = m.A.getGuild(e);
                    null != l && x.A.can(h.xBc.ADMINISTRATOR, l) && l.id !== t && i.push(l);
                }),
                i
            );
        }, [t]);
    return (
        (0, u.Ay)(() => {
            (async () => {
                l(!0),
                    await c.LH(
                        e,
                        a.map((t) => t.id),
                    ),
                    l(!1);
            })();
        }),
        {
            availableGuilds: n.useMemo(() => a.filter((t) => !s?.has(t.id)), [a, s]),
            addedGuilds: n.useMemo(() => a.filter((t) => s?.has(t.id)), [a, s]),
            loading: i,
        }
    );
};
var S = i(503698),
    I = i.n(S),
    A = i(20742),
    E = i(430993),
    N = i(364840),
    T = i(696208),
    U = i(939249),
    v = i(834730),
    y = i(365199),
    G = i(289873),
    f = i(761508),
    p = i(534514),
    _ = i(548118),
    O = i(682557),
    b = i(375708),
    k = i(125039);
let D = "/assets/25bc5e10b46556b8.svg";
var L = i(906471);
function H(t) {
    let { guild: e, onClick: i } = t;
    return (0, l.jsxs)(U.D, {
        className: k.y5,
        onClick: i,
        children: [
            (0, l.jsx)(_.Ay, { guild: e, size: _.Ay.Sizes.MEDIUM, active: !0 }),
            (0, l.jsx)(v.E, { className: k.J5, variant: "text-md/semibold", children: e.name }),
            (0, l.jsx)("img", { alt: "", src: L }),
        ],
    });
}
function M(t) {
    let { directoryChannelId: e, guild: i } = t,
        s = (0, o.bG)([j.A], () => j.A.getDirectoryEntry(e, i.id)),
        a = n.useRef(null);
    return (0, l.jsxs)("div", {
        className: k._S,
        children: [
            (0, l.jsx)(_.Ay, { guild: i, size: _.Ay.Sizes.MEDIUM, active: !0 }),
            (0, l.jsx)(v.E, { className: k.J5, variant: "text-md/normal", children: i.name }),
            (0, l.jsx)(O.A, {
                entry: s,
                targetElementRef: a,
                children: (t) => (0, l.jsx)(y.j, { ref: a, size: "md", color: "currentColor", ...t, className: k.IQ }),
            }),
        ],
    });
}
function B(t) {
    let e,
        {
            directoryChannelId: i,
            onGuildChosen: s,
            handleChooseCreate: a,
            directoryGuildName: r,
            availableGuilds: d,
            addedGuilds: c,
            loading: o,
        } = t,
        [u, m] = n.useState(0);
    return (
        (e = o
            ? (0, l.jsx)("div", { className: k.do, children: (0, l.jsx)(G.y, {}) })
            : 0 === u
              ? 0 === d.length
                  ? (0, l.jsxs)("div", {
                        className: k.do,
                        children: [
                            (0, l.jsx)("img", { src: D, alt: "", className: k.hd }),
                            (0, l.jsx)(v.E, {
                                className: k.BI,
                                color: "text-default",
                                variant: "text-md/normal",
                                children: b.intl.string(b.t.liuEhd),
                            }),
                        ],
                    })
                  : d.map((t) => (0, l.jsx)(H, { guild: t, onClick: () => s(t) }, t.id))
              : 0 === c.length
                ? (0, l.jsxs)("div", {
                      className: k.do,
                      children: [
                          (0, l.jsx)("img", { src: D, alt: "", className: k.hd }),
                          (0, l.jsx)(v.E, {
                              className: k.BI,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: b.intl.string(b.t.WJLuKK),
                          }),
                      ],
                  })
                : c.map((t) => (0, l.jsx)(M, { directoryChannelId: i, guild: t }, t.id))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(A.rQ, {
                    title: b.intl.formatToPlainString(b.t["9SKJdF"], { guildName: r }),
                    subtitle: b.intl.string(b.t.pYFZ9p),
                }),
                (0, l.jsx)(E.c, {
                    controls: (0, l.jsxs)(f.V, {
                        className: k.$H,
                        selectedItem: u,
                        onItemSelect: m,
                        type: "top",
                        look: "brand",
                        children: [
                            (0, l.jsx)(f.V.Item, {
                                className: I()(k.YU, { [k.xR]: 0 === u }),
                                id: 0,
                                children: b.intl.string(b.t.FTe8HS),
                            }),
                            (0, l.jsx)(f.V.Item, {
                                className: I()(k.YU, { [k.xR]: 1 === u }),
                                id: 1,
                                children: b.intl.string(b.t.epOumr),
                            }),
                        ],
                    }),
                    children: (0, l.jsx)("div", { className: k.OW, children: e }),
                }),
                (0, l.jsxs)(N.j, {
                    children: [
                        (0, l.jsx)(p.D, {
                            variant: "heading-lg/semibold",
                            className: k.K8,
                            children: b.intl.string(b.t.pgCZRP),
                        }),
                        (0, l.jsx)(T.H, {
                            actionsFullWidth: !0,
                            actions: [{ variant: "secondary", text: b.intl.string(b.t.WqJbLi), onClick: a }],
                        }),
                    ],
                }),
            ],
        })
    );
}
var R = i(260598),
    F = i(691885),
    Y = i(123292),
    W = i(181658),
    P = i(946116),
    X = i(929453);
function Z(t) {
    let {
            directoryChannelId: e,
            description: i,
            onDescriptionChange: s,
            categoryId: a,
            onCategoryIdChange: r,
            onSubmit: d,
            onBack: c,
        } = t,
        [o, u] = n.useState(!1),
        [m, x] = n.useState(null);
    async function g() {
        u(!0);
        try {
            await d();
        } catch (t) {
            x(new W.A(t));
        }
        u(!1);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(A.rQ, { title: b.intl.string(b.t["5bQcoa"]), subtitle: b.intl.string(b.t.Ie60Wc) }),
            (0, l.jsx)(E.c, {
                children: (0, l.jsxs)("div", {
                    className: X.S,
                    children: [
                        (0, l.jsx)(R.f, {
                            label: b.intl.string(b.t.FFFAGt),
                            value: i,
                            maxLength: 200,
                            placeholder: b.intl.string(b.t.VzuITC),
                            onChange: s,
                            error: m?.getAnyErrorMessage(),
                        }),
                        (0, l.jsx)(F.l, {
                            selectionMode: "single",
                            label: b.intl.string(b.t.Olo8FB),
                            placeholder: b.intl.string(b.t.XqMe3N),
                            options: (0, P.g2)(e),
                            value: a,
                            onSelectionChange: r,
                            maxOptionsVisible: 4,
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(T.H, {
                leading: (0, l.jsx)(Y.Q, {
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
                        disabled: "" === i || a === P.mU.UNCATEGORIZED,
                    },
                ],
            }),
        ],
    });
}
var w = i(284009),
    z = i.n(w),
    J = i(976860),
    Q = i(291980);
function K(t) {
    let { directoryGuildName: e, guildToAdd: i, isExistingGuildFlow: n, onClose: s } = t;
    return (
        z()(null != i, "Missing guild in Hub add guild confirmation"),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E.c, {
                    children: (0, l.jsxs)("div", {
                        className: Q.Qs,
                        children: [
                            (0, l.jsx)(_.Ay, { guild: i, size: _.Ay.Sizes.XLARGE, active: !0 }),
                            (0, l.jsx)(p.D, {
                                className: Q.DD,
                                variant: "heading-xl/semibold",
                                children: b.intl.string(b.t.CueiPY),
                            }),
                            (0, l.jsx)(v.E, {
                                color: "text-default",
                                variant: "text-md/normal",
                                children: n
                                    ? b.intl.formatToPlainString(b.t.R7Pqn5, { guildName: e })
                                    : b.intl.formatToPlainString(b.t.eIxPSv, { guildName: e }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(T.H, {
                    actionsFullWidth: !0,
                    actions: n
                        ? [{ text: b.intl.string(b.t["X0WK+6"]), variant: "primary", onClick: s }]
                        : [
                              { text: b.intl.string(b.t["X/VABv"]), variant: "secondary", onClick: s },
                              {
                                  text: b.intl.string(b.t.DymAQt),
                                  variant: "primary",
                                  onClick: () => {
                                      (0, J.uh)(i.id), s?.();
                                  },
                              },
                          ],
                }),
            ],
        })
    );
}
var V = i(364522),
    q = i(878314),
    $ = i(746672),
    tt = i(632707),
    te = i(917364),
    ti = i(925487),
    tl = i(415915);
let tn = {
    CREATE: te,
    HUB_SCHOOL_CLUB: i(85255),
    HUB_STUDY: ti,
    HUB_CLASS: i(137507),
    HUB_SOCIAL: tl,
    HUB_MAJOR: tt,
    HUB_DORM: $,
};
var ts = i(290125);
function ta(t) {
    let { guildTemplate: e, onClick: i, autoFocus: s } = t,
        a = n.useCallback(() => {
            i(e);
        }, [e, i]);
    return (0, l.jsx)(q.A, { icon: tn[e.id], message: e.label, onClick: a, autoFocus: s });
}
function tr(t) {
    let { onBack: e, onChooseTemplate: i, directoryGuildName: n } = t,
        s = (0, P.ul)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(A.rQ, {
                title: b.intl.formatToPlainString(b.t.T7aLYT, { guildName: n }),
                subtitle: b.intl.string(b.t["RA+St6"]),
            }),
            (0, l.jsx)(E.c, {
                children: (0, l.jsx)(V.Ar, {
                    className: ts.XG,
                    children: (0, l.jsxs)("div", {
                        className: ts.KA,
                        children: [
                            (0, l.jsx)(ta, {
                                guildTemplate: { ...s[P.Y1.CREATE], label: b.intl.string(b.t.WqJbLi) },
                                onClick: i,
                            }),
                            (0, l.jsx)(v.E, {
                                className: ts.l8,
                                color: "text-default",
                                variant: "text-xs/bold",
                                children: b.intl.string(b.t.JGDkfg),
                            }),
                            (0, l.jsx)(ta, { guildTemplate: s[P.Y1.HUB_STUDY], onClick: i }),
                            (0, l.jsx)(ta, { guildTemplate: s[P.Y1.HUB_SCHOOL_CLUB], onClick: i }),
                            (0, l.jsx)(ta, { guildTemplate: s[P.Y1.HUB_CLASS], onClick: i }),
                            (0, l.jsx)(ta, { guildTemplate: s[P.Y1.HUB_SOCIAL], onClick: i }),
                            (0, l.jsx)(ta, { guildTemplate: s[P.Y1.HUB_MAJOR], onClick: i }),
                            (0, l.jsx)(ta, { guildTemplate: s[P.Y1.HUB_DORM], onClick: i }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(T.H, {
                leading: (0, l.jsx)(Y.Q, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: b.intl.string(b.t["13/7kX"]),
                    onClick: e,
                }),
            }),
        ],
    });
}
function td(t) {
    let {
            directoryChannelId: e,
            transitionState: i,
            initialSlide: o = P.m8.CHOOSE_GUILD,
            onClose: u,
            directoryGuildName: m,
            directoryGuildId: x,
            currentCategoryId: g,
        } = t,
        [j, h] = n.useState(o),
        [S, I] = n.useState(null),
        [A, E] = n.useState(null),
        [N, T] = n.useState(null),
        [U, v] = n.useState(null),
        [y, G] = n.useState(""),
        [f, p] = n.useState(g ?? P.mU.UNCATEGORIZED),
        [_, O] = n.useState(!1),
        { availableGuilds: b, addedGuilds: k, loading: D } = C(x, e);
    n.useEffect(() => {
        h(o);
    }, [h, o]);
    let L = async () => {
            let t = U;
            if (!_) {
                if (null == A || null == S) return;
                let e = await a.A.createGuildFromTemplate(A, N, S);
                v((t = (0, d.Y1)(e)));
            }
            null != t && (await c.WD(e, t.id, y, f), h(P.m8.CONFIRMATION));
        },
        H = null;
    switch (j) {
        case P.m8.CHOOSE_GUILD:
            H = (0, l.jsx)(B, {
                directoryChannelId: e,
                directoryGuildName: m,
                onGuildChosen: function (t) {
                    O(!0), h(P.m8.CUSTOMIZE_EXISTING_GUILD), v(t);
                },
                handleChooseCreate: function () {
                    O(!1), h(P.m8.GUILD_TEMPLATES);
                },
                availableGuilds: b,
                addedGuilds: k,
                loading: D,
            });
            break;
        case P.m8.GUILD_TEMPLATES:
            H = (0, l.jsx)(tr, {
                directoryGuildName: m,
                onChooseTemplate: function (t) {
                    O(!1), h(P.m8.CUSTOMIZE_NEW_GUILD), I(t);
                },
                onBack: () => h(P.m8.CHOOSE_GUILD),
            });
            break;
        case P.m8.CUSTOMIZE_NEW_GUILD:
            H = (0, l.jsx)(r.A, {
                isSlideReady: !0,
                guildTemplate: S,
                onHubGuildInfoSet: function (t, e) {
                    E(t), T(e), h(P.m8.CUSTOMIZE_EXISTING_GUILD);
                },
                onBack: () => h(P.m8.GUILD_TEMPLATES),
            });
            break;
        case P.m8.CUSTOMIZE_EXISTING_GUILD:
            H = (0, l.jsx)(Z, {
                directoryChannelId: e,
                description: y,
                onDescriptionChange: G,
                categoryId: f,
                onCategoryIdChange: p,
                onSubmit: L,
                onBack: () => h(_ ? P.m8.CHOOSE_GUILD : P.m8.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case P.m8.CONFIRMATION:
            H = (0, l.jsx)(K, { directoryGuildName: m, guildToAdd: U, isExistingGuildFlow: _, onClose: u });
    }
    return (0, l.jsx)("div", { children: (0, l.jsx)(s.d, { transitionState: i, onClose: u, children: H }) });
}
