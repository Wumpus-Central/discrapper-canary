i.d(t, { default: () => el }), i(321073);
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(136722),
    d = i(311907),
    o = i(827734),
    c = i(444550),
    x = i(990078),
    m = i(462887),
    u = i(27192),
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
    M = i(544028),
    L = i(808728),
    w = i(317525),
    G = i(71393),
    k = i(994500),
    D = i(287809),
    y = i(954571),
    P = i(975571),
    R = i(488926),
    O = i(455207),
    T = i(411319),
    U = i(124759),
    F = i(652215),
    Y = i(985018),
    B = i(934195),
    H = i(288061),
    V = i(236139),
    q = i(843762),
    W = i(733955),
    z = i(226599),
    Z = i(12213),
    K = i(628287);
let J = (e) => {
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
            x = null != c && c.verificationLevel > F.PvD.NONE,
            u = c?.explicitContentFilter === F.gh6.ALL_MEMBERS,
            N = (0, m.M)(o) ? z : Z;
        return (0, s.jsxs)("div", {
            className: B.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: B.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: N, width: 80 }),
                        (0, s.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: B.wx,
                            id: r,
                            children: Y.intl.string(Y.t.QrjLYl),
                        }),
                        (0, s.jsx)(p.E, {
                            color: "none",
                            variant: "text-md/normal",
                            className: B.ab,
                            children: Y.intl.string(Y.t.i1STwu),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: B.Zd,
                    children: (0, s.jsx)(g.D, {
                        label: Y.intl.string(Y.t.x4hbeZ),
                        description: x ? Y.intl.string(Y.t.k5crqq) : Y.intl.string(Y.t.fHiGA0),
                        children: (0, s.jsx)(b.S, {
                            disabled: a,
                            checked: t.verificationLevel > F.PvD.NONE,
                            onChange: i,
                            label: Y.intl.string(Y.t.x4hbeZ),
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: B.Zd,
                    children: (0, s.jsx)(g.D, {
                        label: Y.intl.string(Y.t.COu4bk),
                        description: u ? Y.intl.string(Y.t.qgQLpg) : Y.intl.string(Y.t.b0MaDV),
                        children: (0, s.jsx)(b.S, {
                            disabled: n,
                            checked: t.explicitContentFilter === F.gh6.ALL_MEMBERS,
                            onChange: l,
                            label: Y.intl.string(Y.t.WAUiMt),
                        }),
                    }),
                }),
            ],
        });
    },
    Q = (e) => {
        let {
            selectableChannels: t,
            onRuleChannelChange: i,
            ruleChannel: n,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: d,
            theme: o,
            guildId: x,
        } = e;
        l.useEffect(() => {
            (0, O.sx)({ fromStep: U.pj.SAFETY_CHECK, toStep: U.pj.BASICS, guildId: x });
        }, [x]);
        let u = (0, m.M)(o) ? H : V;
        return (0, s.jsxs)("div", {
            className: B.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: B.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: u, width: 80 }),
                        (0, s.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: B.wx,
                            id: d,
                            children: Y.intl.string(Y.t.YtXpEh),
                        }),
                        (0, s.jsx)(p.E, {
                            color: "none",
                            variant: "text-md/normal",
                            className: B.ab,
                            children: Y.intl.string(Y.t["J/fYR8"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: B.Zd,
                    children: (0, s.jsx)(c.p, {
                        label: Y.intl.string(Y.t.dYrhCO),
                        description: Y.intl.string(Y.t["+Af+Vw"]),
                        options: t,
                        onChange: i,
                        value: n,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, s.jsx)("div", {
                    className: B.Zd,
                    children: (0, s.jsx)(c.p, {
                        label: Y.intl.string(Y.t.vAyDGU),
                        description: Y.intl.string(Y.t.ZFeonu),
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
    X = (e) => {
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
            f = (0, m.M)(_) ? q : W;
        return (
            l.useEffect(() => {
                (0, O.sx)({ fromStep: U.pj.BASICS, toStep: U.pj.FINISH, guildId: t.id });
            }, [t.id]),
            (0, s.jsxs)("div", {
                className: B.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: B.Qs,
                        children: [
                            (0, s.jsx)("img", { alt: "", src: f, width: 80 }),
                            (0, s.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                className: B.wx,
                                id: j,
                                children: Y.intl.string(Y.t["Pj/s/a"]),
                            }),
                            (0, s.jsx)(p.E, {
                                color: "none",
                                variant: "text-md/normal",
                                className: B.ab,
                                children: Y.intl.string(Y.t["IL7/no"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: B.Zd,
                        children: (0, s.jsx)(x.m, {
                            text: c ? Y.intl.string(Y.t.PHjrpp) : null,
                            "aria-label": !!c && Y.intl.string(Y.t.PHjrpp),
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(u.Kj, {
                                    type: u.Or.ROW,
                                    disabled: c,
                                    value: t.defaultMessageNotifications === F.orn.ONLY_MENTIONS,
                                    onChange: (e, t) => d(t),
                                    className: a()({ [B.r9]: c }),
                                    children: (0, s.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: Y.intl.format(Y.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(x.m, {
                                                    text: Y.intl.string(Y.t["3h2WyM"]),
                                                    "aria-label": Y.intl.string(Y.t["3h2WyM"]),
                                                    children: (0, s.jsx)(N.m, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: B.Kk,
                                                    }),
                                                }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)(x.m, {
                        text: v ? Y.intl.string(Y.t.PHjrpp) : null,
                        "aria-label": !!v && Y.intl.string(Y.t.PHjrpp),
                        children: (0, s.jsx)("div", {
                            className: B.nj,
                            children: (0, s.jsx)(u.Kj, {
                                disabled: v,
                                value: n,
                                onChange: (e, t) => o(t),
                                className: a()({ [B.r9]: v }),
                                children: (0, s.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    children: Y.intl.format(Y.t.v8qCoG, {
                                        infoHook: () =>
                                            (0, s.jsx)(x.m, {
                                                text: Y.intl.string(Y.t["+Iyaif"]),
                                                "aria-label": Y.intl.string(Y.t["+Iyaif"]),
                                                children: (0, s.jsx)(N.m, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: B.Kk,
                                                }),
                                            }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: B.Zd,
                        children: (0, s.jsx)(g.D, {
                            label: Y.intl.string(Y.t["k+b2Cf"]),
                            description: Y.intl.format(Y.t["BwbW/Q"], {
                                communityGuidelines: P.A.getArticleURL(F.MVz.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: P.A.getArticleURL(F.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, s.jsx)(b.S, { checked: i, onChange: r, label: Y.intl.string(Y.t["9AG3wI"]) }),
                        }),
                    }),
                ],
            })
        );
    };
function $(e) {
    let { guild: t } = e,
        { name: i, color: l } = (0, d.bG)([w.A], () => w.A.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: B.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: B.xf,
            children: [
                (0, s.jsx)(v.W, { className: B.m4, color: l.toString(), background: !1, tooltip: !1 }),
                (0, s.jsx)(p.E, {
                    className: B.S3,
                    variant: "text-sm/medium",
                    color: "interactive-text-active",
                    children: i,
                }),
            ],
        }),
    });
}
function ee(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)("div", {
        className: B.CZ,
        children: [
            (0, s.jsx)(p.E, {
                className: B.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: Y.intl.string(Y.t.xU8RDk),
            }),
            (0, s.jsx)("div", {
                className: B.lM,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: B.ce,
                            children: [
                                (0, s.jsx)("div", { className: B.dT }),
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
function et(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        l = Y.intl.string(Y.t.Yo5qlq);
    return (
        t.length === U.dR.length && (l = Y.intl.string(Y.t.FgMS6i)),
        (0, s.jsxs)("div", {
            className: B.CZ,
            children: [
                (0, s.jsx)(p.E, { className: B.qd, variant: "text-xs/semibold", color: "text-muted", children: l }),
                (0, s.jsx)("div", {
                    className: B.lM,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: B.ce,
                                children: [
                                    (0, s.jsx)("div", { className: B.xE }),
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
function ei(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case F.xBc.MENTION_EVERYONE.toString():
                    return Y.intl.string(Y.t.yCpsQw);
                case F.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return Y.intl.string(Y.t.vo2LdY);
                case F.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return Y.intl.string(Y.t.cmp2W6);
                default:
                    return (0, I.hx)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)("div", {
        className: B.tp,
        children: [
            0 !== l.length ? (0, s.jsx)(ee, { enabledPermissions: l, onGetPermisisonName: i }) : null,
            (0, s.jsx)(et, { disabledPermissions: n, onGetPermisisonName: i }),
        ],
    });
}
let es = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
            d = (0, m.M)(r) ? q : W;
        l.useEffect(() => {
            (0, O.sx)({ fromStep: U.pj.BASICS, toStep: U.pj.FINISH, guildId: t.id });
        }, [t.id]);
        let c = l.useMemo(() => {
            let e = [],
                i = [];
            return (
                U.dR.map((s) => {
                    R.Ib(s, t) ? e.push(s) : i.push(s);
                }),
                { enabledPermissions: e, disabledPermissions: i }
            );
        }, [t]);
        return (0, s.jsxs)("div", {
            className: B.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: B.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: d, width: 80 }),
                        (0, s.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: B.dc,
                            id: a,
                            children: Y.intl.string(Y.t["Pj/s/a"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: B.yN,
                    children: (0, s.jsxs)(g.D, {
                        label: Y.intl.string(Y.t["0q344R"]),
                        children: [
                            (0, s.jsxs)("div", {
                                className: B.J_,
                                children: [
                                    (0, s.jsx)(j.y, {
                                        size: "md",
                                        className: B.aV,
                                        color: o.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, s.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        children: Y.intl.format(Y.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(x.m, {
                                                    text: Y.intl.string(Y.t["3h2WyM"]),
                                                    "aria-label": Y.intl.string(Y.t["3h2WyM"]),
                                                    children: (0, s.jsx)(N.m, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: B.Kk,
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: B.J_,
                                children: [
                                    (0, s.jsx)(j.y, {
                                        size: "md",
                                        className: B.aV,
                                        color: o.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, s.jsx)(p.E, { variant: "text-md/normal", children: Y.intl.string(Y.t.LfeFFr) }),
                                    (0, s.jsx)($, { guild: t }),
                                ],
                            }),
                            (0, s.jsx)(ei, { permissions: c }),
                        ],
                    }),
                }),
                (0, s.jsx)("div", {
                    className: B.yN,
                    children: (0, s.jsx)(g.D, {
                        label: Y.intl.string(Y.t["k+b2Cf"]),
                        description: Y.intl.format(Y.t["BwbW/Q"], {
                            communityGuidelines: P.A.getArticleURL(F.MVz.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: P.A.getArticleURL(F.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, s.jsx)(b.S, { label: Y.intl.string(Y.t["9AG3wI"]), checked: i, onChange: n }),
                    }),
                }),
            ],
        });
    },
    el = (e) => {
        let { transitionState: t, onClose: i } = e;
        l.useEffect(() => {
            y.default.track(F.HAw.OPEN_MODAL, { type: U.bK });
        }, []);
        let { guild: n } = (0, d.cf)([S.A], () => S.A.getProps()),
            a = (0, d.bG)([M.A], () => M.A.theme),
            [o, c] = l.useState(!1),
            [x, m] = l.useState(!U.dR.some((e) => R.Ib(e, n))),
            [u, h] = l.useState(U.SP),
            [p, g] = l.useState(U.SP),
            [b] = l.useState(n?.defaultMessageNotifications),
            [N] = l.useState(n?.verificationLevel),
            [v] = l.useState(n?.explicitContentFilter),
            [j] = l.useState(x),
            I = (0, d.bG)([w.A], () => (null != n ? w.A.getEveryoneRole(n) : void 0)),
            G = (0, d.bG)([L.Ay], () => (null != n ? L.Ay.getChannels(n.id) : null)),
            P = (0, E.GV)(),
            { enabled: O } = (0, _.zi)(n?.id ?? F.dJq);
        if (null == n) return null;
        let H = [{ value: U.SP, label: Y.intl.string(Y.t.Cla0re) }];
        G[L.I6].forEach((e) => {
            let { channel: t } = e;
            t.type === F.rbe.GUILD_TEXT && H.push({ value: t.id, label: (0, f.m1)(t, D.default, k.A, !0) });
        });
        let V = N !== F.PvD.NONE,
            q = v === F.gh6.ALL_MEMBERS,
            W = b === F.orn.ONLY_MENTIONS,
            z = async () => {
                if (null == I || !o) return;
                let e = new Set(n.features);
                e.add(F.GuildFeatures.COMMUNITY);
                let t = x ? r.TF(I.permissions, U.e$) : I.permissions,
                    s = { ...I, permissions: t };
                t !== I.permissions && (await (0, A.JY)(n.id, [s])),
                    C.A.updateGuild({ features: e, rulesChannelId: u, publicUpdatesChannelId: p }),
                    await C.A.saveGuild(n.id, {
                        features: e,
                        rulesChannelId: u,
                        verificationLevel: n.verificationLevel,
                        explicitContentFilter: n.explicitContentFilter,
                        publicUpdatesChannelId: p,
                        defaultMessageNotifications: n.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        i();
                    }, 0);
            },
            Z = (0, s.jsx)(J, {
                guild: n,
                disableVerificationLevel: V,
                disableContentFilter: q,
                onAcceptVerificationLevel: (e) => {
                    e ? C.A.updateGuild({ verificationLevel: F.PvD.LOW }) : C.A.updateGuild({ verificationLevel: N });
                },
                onAcceptContentFilter: (e) => {
                    e
                        ? C.A.updateGuild({ explicitContentFilter: F.gh6.ALL_MEMBERS })
                        : C.A.updateGuild({ explicitContentFilter: v });
                },
                headerId: P,
                theme: a,
            }),
            $ = (0, s.jsx)(Q, {
                selectableChannels: H,
                onRuleChannelChange: (e) => {
                    h(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    g(e);
                },
                ruleChannel: u,
                publicUpdatesChannel: p,
                headerId: P,
                theme: a,
                guildId: n.id,
            }),
            ee = O
                ? (0, s.jsx)(es, {
                      guild: n,
                      policyAccepted: o,
                      onAcceptPolicy: (e) => {
                          if (e) {
                              c(!0),
                                  W || C.A.updateGuild({ defaultMessageNotifications: F.orn.ONLY_MENTIONS }),
                                  x || null == I || m(!0);
                              return;
                          }
                          c(!1), W && C.A.updateGuild({ defaultMessageNotifications: b }), x && null != I && m(!1);
                      },
                      headerId: P,
                      theme: a,
                  })
                : (0, s.jsx)(X, {
                      guild: n,
                      disableDefaultNotifications: W,
                      disableEveryoneRolePermissions: j,
                      policyAccepted: o,
                      everyoneRolePermissionsAccepted: x,
                      onAcceptPolicy: (e) => {
                          e ? c(!0) : c(!1);
                      },
                      onAcceptDefaultNotifications: (e) => {
                          e
                              ? C.A.updateGuild({ defaultMessageNotifications: F.orn.ONLY_MENTIONS })
                              : C.A.updateGuild({ defaultMessageNotifications: b });
                      },
                      onAcceptEveryoneRolePermissions: (e) => {
                          null != I && (e ? m(!0) : m(!1));
                      },
                      headerId: P,
                      theme: a,
                  }),
            et = (0, s.jsx)("img", { alt: "", src: K, className: B.Hw, width: 240 }),
            ei = [
                {
                    modalContent: Z,
                    disableNextStep:
                        n.explicitContentFilter !== F.gh6.ALL_MEMBERS || n.verificationLevel === F.PvD.NONE,
                    overviewTitle: Y.intl.string(Y.t.PpYoSj),
                },
                {
                    modalContent: $,
                    disableNextStep: null == u || null == p,
                    overviewTitle: Y.intl.string(Y.t["7MEtIY"]),
                },
                { modalContent: ee, disableNextStep: !o, overviewTitle: Y.intl.string(Y.t.Pj9P8E) },
            ];
        return (0, s.jsx)(T.A, {
            stepData: ei,
            title: Y.intl.string(Y.t["6U5XTu"]),
            transitionState: t,
            onClose: () => {
                i(), y.default.track(F.HAw.MODAL_DISMISSED, { type: U.bK });
            },
            completeButtonText: Y.intl.string(Y.t.XGl4ba),
            onComplete: z,
            overviewFooter: et,
            sequencerClassName: B.kL,
            autoCloseOnComplete: !1,
        });
    };
