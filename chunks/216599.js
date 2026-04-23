i.d(t, { default: () => ea }), i(321073);
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(136722),
    d = i(17928),
    o = i(661531),
    c = i(444550),
    m = i(990078),
    u = i(462887),
    x = i(27192),
    h = i(534514),
    p = i(834730),
    g = i(452027),
    b = i(150934),
    N = i(885574),
    v = i(545442),
    j = i(628284),
    _ = i(15073),
    f = i(47167),
    E = i(915089),
    C = i(997509),
    S = i(555337),
    A = i(636042),
    I = i(376092),
    M = i(363195),
    L = i(808728),
    w = i(317525),
    G = i(71393),
    k = i(994500),
    D = i(287809),
    y = i(954571),
    P = i(975571),
    R = i(488926),
    O = i(715138),
    T = i(862482),
    U = i(935462),
    F = i(685094),
    Y = i(821609),
    B = i(985018),
    H = i(821406);
let V = (e) => {
        let { index: t, title: i, selected: l } = e;
        return (0, s.jsxs)("div", {
            className: a()(H.wJ, { [H.wH]: l }),
            children: [
                (0, s.jsx)(p.E, { className: H.BM, variant: "text-sm/normal", children: t + 1 }),
                (0, s.jsx)(p.E, { variant: "text-md/normal", className: H.Fb, children: i }),
            ],
        });
    },
    q = (e) => {
        let {
                className: t,
                title: i,
                stepData: n,
                transitionState: r,
                onClose: d,
                completeButtonText: o,
                overviewFooter: c,
                onNextPressed: m,
                onPrevPressed: u,
                onComplete: x,
                sequencerClassName: p,
                initialStep: g = 0,
                forceStep: b,
                submitting: N = !1,
                autoCloseOnComplete: v = !0,
            } = e,
            [j, _] = l.useState([]),
            [f, C] = l.useState(g),
            S = (0, E.GV)();
        l.useEffect(() => {
            _([...Array(n.length).keys()]);
        }, [n.length]);
        let A = b ?? f,
            I = n[A],
            M = 0 === A,
            L = A === n.length - 1,
            w = o ?? B.intl.string(B.t.i4jeWR),
            G = l.useCallback(() => {
                u?.(), C(A - 1);
            }, [u, A, C]);
        return (0, s.jsxs)(U.EO, {
            size: U.rI.MEDIUM,
            className: a()(H.kL, t),
            transitionState: r,
            "aria-labelledby": S,
            parentComponent: "MultiStepModal",
            children: [
                (0, s.jsxs)("div", {
                    className: H.A0,
                    children: [
                        (0, s.jsx)(h.D, { id: S, variant: "heading-xl/semibold", className: H.wx, children: i }),
                        (0, s.jsx)("div", {
                            className: H.Ji,
                            children: n.map((e, t) =>
                                (0, s.jsx)(V, { index: t, title: e.overviewTitle, selected: t === A }, t),
                            ),
                        }),
                        c,
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: H.yl,
                    children: [
                        (0, s.jsxs)(U.$m, {
                            children: [
                                (0, s.jsx)(U.s_, {
                                    focusProps: { offset: { top: 4, right: 4, left: 4 } },
                                    onClick: d,
                                    className: H.b,
                                }),
                                (0, s.jsx)(F.Y, {
                                    step: A,
                                    steps: j,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(H.C9, p),
                                    innerClassName: H.C,
                                    children: I.modalContent,
                                }),
                            ],
                        }),
                        (0, s.jsxs)(U.jl, {
                            className: H.qr,
                            children: [
                                (0, s.jsx)(Y.$, {
                                    variant: "active",
                                    text: L ? w : B.intl.string(B.t.PDTjLN),
                                    type: "submit",
                                    loading: N,
                                    onClick: () => {
                                        L ? (x(), v && d()) : (m?.(), C(A + 1));
                                    },
                                    disabled: I.disableNextStep,
                                }),
                                M
                                    ? null
                                    : (0, s.jsx)(T.$n, {
                                          look: T.$n.Looks.LINK,
                                          color: T.$n.Colors.PRIMARY,
                                          size: T.$n.Sizes.MIN,
                                          onClick: G,
                                          children: B.intl.string(B.t["13/7kX"]),
                                      }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
var W = i(124759),
    z = i(652215),
    Z = i(934195);
let K = "/assets/30c9caf58319d0f5.svg",
    J = "/assets/401d9d1a3feb1e26.svg";
var Q = i(628287);
let X = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: l,
                disableContentFilter: n,
                disableVerificationLevel: a,
                headerId: r,
                theme: o,
            } = e,
            c = (0, d.bG)([G.A], () => G.A.getGuild(t.id), [t.id]),
            m = null != c && c.verificationLevel > z.PvD.NONE,
            x = c?.explicitContentFilter === z.gh6.ALL_MEMBERS,
            N = (0, u.M)(o) ? "/assets/0280ce34b0947c59.svg" : "/assets/5b151d831c679fdf.svg";
        return (0, s.jsxs)("div", {
            className: Z.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: Z.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: N, width: 80 }),
                        (0, s.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: Z.wx,
                            id: r,
                            children: B.intl.string(B.t.QrjLYl),
                        }),
                        (0, s.jsx)(p.E, {
                            color: "none",
                            variant: "text-md/normal",
                            className: Z.ab,
                            children: B.intl.string(B.t.i1STwu),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: Z.Zd,
                    children: (0, s.jsx)(g.D, {
                        label: B.intl.string(B.t.x4hbeZ),
                        description: m ? B.intl.string(B.t.k5crqq) : B.intl.string(B.t.fHiGA0),
                        children: (0, s.jsx)(b.S, {
                            disabled: a,
                            checked: t.verificationLevel > z.PvD.NONE,
                            onChange: i,
                            label: B.intl.string(B.t.x4hbeZ),
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: Z.Zd,
                    children: (0, s.jsx)(g.D, {
                        label: B.intl.string(B.t.COu4bk),
                        description: x ? B.intl.string(B.t.qgQLpg) : B.intl.string(B.t.b0MaDV),
                        children: (0, s.jsx)(b.S, {
                            disabled: n,
                            checked: t.explicitContentFilter === z.gh6.ALL_MEMBERS,
                            onChange: l,
                            label: B.intl.string(B.t.WAUiMt),
                        }),
                    }),
                }),
            ],
        });
    },
    $ = (e) => {
        let {
            selectableChannels: t,
            onRuleChannelChange: i,
            ruleChannel: n,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: d,
            theme: o,
            guildId: m,
        } = e;
        l.useEffect(() => {
            (0, O.sx)({ fromStep: W.pj.SAFETY_CHECK, toStep: W.pj.BASICS, guildId: m });
        }, [m]);
        let x = (0, u.M)(o) ? "/assets/83bf855b8ecf7f86.svg" : "/assets/b7c8acc24afa8e98.svg";
        return (0, s.jsxs)("div", {
            className: Z.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: Z.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: x, width: 80 }),
                        (0, s.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: Z.wx,
                            id: d,
                            children: B.intl.string(B.t.YtXpEh),
                        }),
                        (0, s.jsx)(p.E, {
                            color: "none",
                            variant: "text-md/normal",
                            className: Z.ab,
                            children: B.intl.string(B.t["J/fYR8"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: Z.Zd,
                    children: (0, s.jsx)(c.p, {
                        label: B.intl.string(B.t.dYrhCO),
                        description: B.intl.string(B.t["+Af+Vw"]),
                        options: t,
                        onChange: i,
                        value: n,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, s.jsx)("div", {
                    className: Z.Zd,
                    children: (0, s.jsx)(c.p, {
                        label: B.intl.string(B.t.vAyDGU),
                        description: B.intl.string(B.t.ZFeonu),
                        options: t,
                        onChange: a,
                        value: r,
                        popoutPosition: "top",
                        maxVisibleItems: 4,
                    }),
                }),
            ],
        });
    },
    ee = (e) => {
        let {
                guild: t,
                policyAccepted: i,
                everyoneRolePermissionsAccepted: n,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: d,
                onAcceptEveryoneRolePermissions: o,
                disableDefaultNotifications: c,
                disableEveryoneRolePermissions: v,
                headerId: j,
                theme: _,
            } = e,
            f = (0, u.M)(_) ? K : J;
        return (
            l.useEffect(() => {
                (0, O.sx)({ fromStep: W.pj.BASICS, toStep: W.pj.FINISH, guildId: t.id });
            }, [t.id]),
            (0, s.jsxs)("div", {
                className: Z.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: Z.Qs,
                        children: [
                            (0, s.jsx)("img", { alt: "", src: f, width: 80 }),
                            (0, s.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                className: Z.wx,
                                id: j,
                                children: B.intl.string(B.t["Pj/s/a"]),
                            }),
                            (0, s.jsx)(p.E, {
                                color: "none",
                                variant: "text-md/normal",
                                className: Z.ab,
                                children: B.intl.string(B.t["IL7/no"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: Z.Zd,
                        children: (0, s.jsx)(m.m, {
                            text: c ? B.intl.string(B.t.PHjrpp) : null,
                            "aria-label": !!c && B.intl.string(B.t.PHjrpp),
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(x.Kj, {
                                    type: x.Or.ROW,
                                    disabled: c,
                                    value: t.defaultMessageNotifications === z.orn.ONLY_MENTIONS,
                                    onChange: (e, t) => d(t),
                                    className: a()({ [Z.r9]: c }),
                                    children: (0, s.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: B.intl.format(B.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(m.m, {
                                                    text: B.intl.string(B.t["3h2WyM"]),
                                                    "aria-label": B.intl.string(B.t["3h2WyM"]),
                                                    children: (0, s.jsx)(N.m, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: Z.Kk,
                                                    }),
                                                }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)(m.m, {
                        text: v ? B.intl.string(B.t.PHjrpp) : null,
                        "aria-label": !!v && B.intl.string(B.t.PHjrpp),
                        children: (0, s.jsx)("div", {
                            className: Z.nj,
                            children: (0, s.jsx)(x.Kj, {
                                disabled: v,
                                value: n,
                                onChange: (e, t) => o(t),
                                className: a()({ [Z.r9]: v }),
                                children: (0, s.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    children: B.intl.format(B.t.v8qCoG, {
                                        infoHook: () =>
                                            (0, s.jsx)(m.m, {
                                                text: B.intl.string(B.t["+Iyaif"]),
                                                "aria-label": B.intl.string(B.t["+Iyaif"]),
                                                children: (0, s.jsx)(N.m, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: Z.Kk,
                                                }),
                                            }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: Z.Zd,
                        children: (0, s.jsx)(g.D, {
                            label: B.intl.string(B.t["k+b2Cf"]),
                            description: B.intl.format(B.t["BwbW/Q"], {
                                communityGuidelines: P.A.getArticleURL(z.MVz.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: P.A.getArticleURL(z.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, s.jsx)(b.S, { checked: i, onChange: r, label: B.intl.string(B.t["9AG3wI"]) }),
                        }),
                    }),
                ],
            })
        );
    };
function et(e) {
    let { guild: t } = e,
        { name: i, color: l } = (0, d.bG)([w.A], () => w.A.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: Z.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: Z.xf,
            children: [
                (0, s.jsx)(v.W, { className: Z.m4, color: l.toString(), background: !1, tooltip: !1 }),
                (0, s.jsx)(p.E, {
                    className: Z.S3,
                    variant: "text-sm/medium",
                    color: "interactive-text-active",
                    children: i,
                }),
            ],
        }),
    });
}
function ei(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)("div", {
        className: Z.CZ,
        children: [
            (0, s.jsx)(p.E, {
                className: Z.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: B.intl.string(B.t.xU8RDk),
            }),
            (0, s.jsx)("div", {
                className: Z.lM,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: Z.ce,
                            children: [
                                (0, s.jsx)("div", { className: Z.dT }),
                                (0, s.jsx)(p.E, { variant: "text-sm/normal", color: "text-default", children: i(e) }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function es(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        l = B.intl.string(B.t.Yo5qlq);
    return (
        t.length === W.dR.length && (l = B.intl.string(B.t.FgMS6i)),
        (0, s.jsxs)("div", {
            className: Z.CZ,
            children: [
                (0, s.jsx)(p.E, { className: Z.qd, variant: "text-xs/semibold", color: "text-muted", children: l }),
                (0, s.jsx)("div", {
                    className: Z.lM,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: Z.ce,
                                children: [
                                    (0, s.jsx)("div", { className: Z.xE }),
                                    (0, s.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: i(e) }),
                                ],
                            },
                            t,
                        ),
                    ),
                }),
            ],
        })
    );
}
function el(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case z.xBc.MENTION_EVERYONE.toString():
                    return B.intl.string(B.t.yCpsQw);
                case z.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return B.intl.string(B.t.vo2LdY);
                case z.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return B.intl.string(B.t.cmp2W6);
                default:
                    return (0, I.hx)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)("div", {
        className: Z.tp,
        children: [
            0 !== l.length ? (0, s.jsx)(ei, { enabledPermissions: l, onGetPermisisonName: i }) : null,
            (0, s.jsx)(es, { disabledPermissions: n, onGetPermisisonName: i }),
        ],
    });
}
let en = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
            d = (0, u.M)(r) ? K : J;
        l.useEffect(() => {
            (0, O.sx)({ fromStep: W.pj.BASICS, toStep: W.pj.FINISH, guildId: t.id });
        }, [t.id]);
        let c = l.useMemo(() => {
            let e = [],
                i = [];
            return (
                W.dR.map((s) => {
                    R.Ib(s, t) ? e.push(s) : i.push(s);
                }),
                { enabledPermissions: e, disabledPermissions: i }
            );
        }, [t]);
        return (0, s.jsxs)("div", {
            className: Z.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: Z.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: d, width: 80 }),
                        (0, s.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: Z.dc,
                            id: a,
                            children: B.intl.string(B.t["Pj/s/a"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: Z.yN,
                    children: (0, s.jsxs)(g.D, {
                        label: B.intl.string(B.t["0q344R"]),
                        children: [
                            (0, s.jsxs)("div", {
                                className: Z.J_,
                                children: [
                                    (0, s.jsx)(j.y, {
                                        size: "md",
                                        className: Z.aV,
                                        color: o.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, s.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        children: B.intl.format(B.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(m.m, {
                                                    text: B.intl.string(B.t["3h2WyM"]),
                                                    "aria-label": B.intl.string(B.t["3h2WyM"]),
                                                    children: (0, s.jsx)(N.m, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: Z.Kk,
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: Z.J_,
                                children: [
                                    (0, s.jsx)(j.y, {
                                        size: "md",
                                        className: Z.aV,
                                        color: o.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, s.jsx)(p.E, { variant: "text-md/normal", children: B.intl.string(B.t.LfeFFr) }),
                                    (0, s.jsx)(et, { guild: t }),
                                ],
                            }),
                            (0, s.jsx)(el, { permissions: c }),
                        ],
                    }),
                }),
                (0, s.jsx)("div", {
                    className: Z.yN,
                    children: (0, s.jsx)(g.D, {
                        label: B.intl.string(B.t["k+b2Cf"]),
                        description: B.intl.format(B.t["BwbW/Q"], {
                            communityGuidelines: P.A.getArticleURL(z.MVz.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: P.A.getArticleURL(z.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, s.jsx)(b.S, { label: B.intl.string(B.t["9AG3wI"]), checked: i, onChange: n }),
                    }),
                }),
            ],
        });
    },
    ea = (e) => {
        let { transitionState: t, onClose: i } = e;
        l.useEffect(() => {
            y.default.track(z.HAw.OPEN_MODAL, { type: W.bK });
        }, []);
        let { guild: n } = (0, d.cf)([S.A], () => S.A.getProps()),
            a = (0, d.bG)([M.A], () => M.A.theme),
            [o, c] = l.useState(!1),
            [m, u] = l.useState(!W.dR.some((e) => R.Ib(e, n))),
            [x, h] = l.useState(W.SP),
            [p, g] = l.useState(W.SP),
            [b] = l.useState(n?.defaultMessageNotifications),
            [N] = l.useState(n?.verificationLevel),
            [v] = l.useState(n?.explicitContentFilter),
            [j] = l.useState(m),
            I = (0, d.bG)([w.A], () => (null != n ? w.A.getEveryoneRole(n) : void 0)),
            G = (0, d.bG)([L.Ay], () => (null != n ? L.Ay.getChannels(n.id) : null)),
            P = (0, E.GV)(),
            { enabled: O } = (0, _.zi)(n?.id ?? z.dJq);
        if (null == n) return null;
        let T = [{ value: W.SP, label: B.intl.string(B.t.Cla0re) }];
        G[L.I6].forEach((e) => {
            let { channel: t } = e;
            t.type === z.rbe.GUILD_TEXT && T.push({ value: t.id, label: (0, f.m1)(t, D.default, k.A, !0) });
        });
        let U = N !== z.PvD.NONE,
            F = v === z.gh6.ALL_MEMBERS,
            Y = b === z.orn.ONLY_MENTIONS,
            H = async () => {
                if (null == I || !o) return;
                let e = new Set(n.features);
                e.add(z.GuildFeatures.COMMUNITY);
                let t = m ? r.TF(I.permissions, W.e$) : I.permissions,
                    s = { ...I, permissions: t };
                t !== I.permissions && (await (0, A.JY)(n.id, [s])),
                    C.A.updateGuild({ features: e, rulesChannelId: x, publicUpdatesChannelId: p }),
                    await C.A.saveGuild(n.id, {
                        features: e,
                        rulesChannelId: x,
                        verificationLevel: n.verificationLevel,
                        explicitContentFilter: n.explicitContentFilter,
                        publicUpdatesChannelId: p,
                        defaultMessageNotifications: n.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        i();
                    }, 0);
            },
            V = (0, s.jsx)(X, {
                guild: n,
                disableVerificationLevel: U,
                disableContentFilter: F,
                onAcceptVerificationLevel: (e) => {
                    e ? C.A.updateGuild({ verificationLevel: z.PvD.LOW }) : C.A.updateGuild({ verificationLevel: N });
                },
                onAcceptContentFilter: (e) => {
                    e
                        ? C.A.updateGuild({ explicitContentFilter: z.gh6.ALL_MEMBERS })
                        : C.A.updateGuild({ explicitContentFilter: v });
                },
                headerId: P,
                theme: a,
            }),
            K = (0, s.jsx)($, {
                selectableChannels: T,
                onRuleChannelChange: (e) => {
                    h(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    g(e);
                },
                ruleChannel: x,
                publicUpdatesChannel: p,
                headerId: P,
                theme: a,
                guildId: n.id,
            }),
            J = O
                ? (0, s.jsx)(en, {
                      guild: n,
                      policyAccepted: o,
                      onAcceptPolicy: (e) => {
                          if (e) {
                              c(!0),
                                  Y || C.A.updateGuild({ defaultMessageNotifications: z.orn.ONLY_MENTIONS }),
                                  m || null == I || u(!0);
                              return;
                          }
                          c(!1), Y && C.A.updateGuild({ defaultMessageNotifications: b }), m && null != I && u(!1);
                      },
                      headerId: P,
                      theme: a,
                  })
                : (0, s.jsx)(ee, {
                      guild: n,
                      disableDefaultNotifications: Y,
                      disableEveryoneRolePermissions: j,
                      policyAccepted: o,
                      everyoneRolePermissionsAccepted: m,
                      onAcceptPolicy: (e) => {
                          e ? c(!0) : c(!1);
                      },
                      onAcceptDefaultNotifications: (e) => {
                          e
                              ? C.A.updateGuild({ defaultMessageNotifications: z.orn.ONLY_MENTIONS })
                              : C.A.updateGuild({ defaultMessageNotifications: b });
                      },
                      onAcceptEveryoneRolePermissions: (e) => {
                          null != I && (e ? u(!0) : u(!1));
                      },
                      headerId: P,
                      theme: a,
                  }),
            et = (0, s.jsx)("img", { alt: "", src: Q, className: Z.Hw, width: 240 }),
            ei = [
                {
                    modalContent: V,
                    disableNextStep:
                        n.explicitContentFilter !== z.gh6.ALL_MEMBERS || n.verificationLevel === z.PvD.NONE,
                    overviewTitle: B.intl.string(B.t.PpYoSj),
                },
                {
                    modalContent: K,
                    disableNextStep: null == x || null == p,
                    overviewTitle: B.intl.string(B.t["7MEtIY"]),
                },
                { modalContent: J, disableNextStep: !o, overviewTitle: B.intl.string(B.t.Pj9P8E) },
            ];
        return (0, s.jsx)(q, {
            stepData: ei,
            title: B.intl.string(B.t["6U5XTu"]),
            transitionState: t,
            onClose: () => {
                i(), y.default.track(z.HAw.MODAL_DISMISSED, { type: W.bK });
            },
            completeButtonText: B.intl.string(B.t.XGl4ba),
            onComplete: H,
            overviewFooter: et,
            sequencerClassName: Z.kL,
            autoCloseOnComplete: !1,
        });
    };
