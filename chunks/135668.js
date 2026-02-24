i.d(t, { default: () => $ }), i(321073);
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(136722),
    d = i(311907),
    o = i(827734),
    c = i(444550),
    x = i(990078),
    m = i(582754),
    u = i(421380),
    h = i(397927),
    p = i(15073),
    g = i(47167),
    b = i(915089),
    N = i(997509),
    v = i(555337),
    j = i(636042),
    _ = i(376092),
    f = i(544028),
    C = i(808728),
    A = i(317525),
    S = i(71393),
    E = i(994500),
    I = i(287809),
    M = i(954571),
    L = i(975571),
    w = i(488926),
    k = i(455207),
    T = i(411319),
    G = i(124759),
    y = i(652215),
    P = i(985018),
    D = i(327008),
    R = i(288061),
    O = i(236139),
    F = i(843762),
    U = i(733955),
    H = i(226599),
    Y = i(12213),
    B = i(628287);
let V = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: l,
                disableContentFilter: n,
                disableVerificationLevel: a,
                headerId: r,
                theme: o,
            } = e,
            c = (0, d.bG)([S.A], () => S.A.getGuild(t.id), [t.id]),
            x = null != c && c.verificationLevel > y.PvD.NONE,
            u = c?.explicitContentFilter === y.gh6.ALL_MEMBERS,
            p = (0, m.Mw)(o) ? H : Y;
        return (0, s.jsxs)("div", {
            className: D.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: D.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: p, width: 80 }),
                        (0, s.jsx)(h.Heading, {
                            variant: "heading-xl/semibold",
                            className: D.wx,
                            id: r,
                            children: P.intl.string(P.t.QrjLYl),
                        }),
                        (0, s.jsx)(h.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: D.ab,
                            children: P.intl.string(P.t.i1STwu),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: D.Zd,
                    children: (0, s.jsx)(h.D0$, {
                        label: P.intl.string(P.t.x4hbeZ),
                        description: x ? P.intl.string(P.t.k5crqq) : P.intl.string(P.t.fHiGA0),
                        children: (0, s.jsx)(h.Checkbox, {
                            disabled: a,
                            checked: t.verificationLevel > y.PvD.NONE,
                            onChange: i,
                            label: P.intl.string(P.t.x4hbeZ),
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: D.Zd,
                    children: (0, s.jsx)(h.D0$, {
                        label: P.intl.string(P.t.COu4bk),
                        description: u ? P.intl.string(P.t.qgQLpg) : P.intl.string(P.t.b0MaDV),
                        children: (0, s.jsx)(h.Checkbox, {
                            disabled: n,
                            checked: t.explicitContentFilter === y.gh6.ALL_MEMBERS,
                            onChange: l,
                            label: P.intl.string(P.t.WAUiMt),
                        }),
                    }),
                }),
            ],
        });
    },
    q = (e) => {
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
            (0, k.sx)({ fromStep: G.pj.SAFETY_CHECK, toStep: G.pj.BASICS, guildId: x });
        }, [x]);
        let u = (0, m.Mw)(o) ? R : O;
        return (0, s.jsxs)("div", {
            className: D.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: D.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: u, width: 80 }),
                        (0, s.jsx)(h.Heading, {
                            variant: "heading-xl/semibold",
                            className: D.wx,
                            id: d,
                            children: P.intl.string(P.t.YtXpEh),
                        }),
                        (0, s.jsx)(h.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: D.ab,
                            children: P.intl.string(P.t["J/fYR8"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: D.Zd,
                    children: (0, s.jsx)(c.p, {
                        label: P.intl.string(P.t.dYrhCO),
                        description: P.intl.string(P.t["+Af+Vw"]),
                        options: t,
                        onChange: i,
                        value: n,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, s.jsx)("div", {
                    className: D.Zd,
                    children: (0, s.jsx)(c.p, {
                        label: P.intl.string(P.t.vAyDGU),
                        description: P.intl.string(P.t.ZFeonu),
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
    W = (e) => {
        let {
                guild: t,
                policyAccepted: i,
                everyoneRolePermissionsAccepted: n,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: d,
                onAcceptEveryoneRolePermissions: o,
                disableDefaultNotifications: c,
                disableEveryoneRolePermissions: p,
                headerId: g,
                theme: b,
            } = e,
            N = (0, m.Mw)(b) ? F : U;
        return (
            l.useEffect(() => {
                (0, k.sx)({ fromStep: G.pj.BASICS, toStep: G.pj.FINISH, guildId: t.id });
            }, [t.id]),
            (0, s.jsxs)("div", {
                className: D.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: D.Qs,
                        children: [
                            (0, s.jsx)("img", { alt: "", src: N, width: 80 }),
                            (0, s.jsx)(h.Heading, {
                                variant: "heading-xl/semibold",
                                className: D.wx,
                                id: g,
                                children: P.intl.string(P.t["Pj/s/a"]),
                            }),
                            (0, s.jsx)(h.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: D.ab,
                                children: P.intl.string(P.t["IL7/no"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: D.Zd,
                        children: (0, s.jsx)(x.m, {
                            text: c ? P.intl.string(P.t.PHjrpp) : null,
                            "aria-label": !!c && P.intl.string(P.t.PHjrpp),
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(h.KjF, {
                                    type: u.Xo.ROW,
                                    disabled: c,
                                    value: t.defaultMessageNotifications === y.orn.ONLY_MENTIONS,
                                    onChange: (e, t) => d(t),
                                    className: a()({ [D.r9]: c }),
                                    children: (0, s.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        children: P.intl.format(P.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(x.m, {
                                                    text: P.intl.string(P.t["3h2WyM"]),
                                                    "aria-label": P.intl.string(P.t["3h2WyM"]),
                                                    children: (0, s.jsx)(h.mir, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: D.Kk,
                                                    }),
                                                }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)(x.m, {
                        text: p ? P.intl.string(P.t.PHjrpp) : null,
                        "aria-label": !!p && P.intl.string(P.t.PHjrpp),
                        children: (0, s.jsx)("div", {
                            className: D.nj,
                            children: (0, s.jsx)(h.KjF, {
                                disabled: p,
                                value: n,
                                onChange: (e, t) => o(t),
                                className: a()({ [D.r9]: p }),
                                children: (0, s.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    children: P.intl.format(P.t.v8qCoG, {
                                        infoHook: () =>
                                            (0, s.jsx)(x.m, {
                                                text: P.intl.string(P.t["+Iyaif"]),
                                                "aria-label": P.intl.string(P.t["+Iyaif"]),
                                                children: (0, s.jsx)(h.mir, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: D.Kk,
                                                }),
                                            }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: D.Zd,
                        children: (0, s.jsx)(h.D0$, {
                            label: P.intl.string(P.t["k+b2Cf"]),
                            description: P.intl.format(P.t["BwbW/Q"], {
                                communityGuidelines: L.A.getArticleURL(y.MVz.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: L.A.getArticleURL(y.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, s.jsx)(h.Checkbox, {
                                checked: i,
                                onChange: r,
                                label: P.intl.string(P.t["9AG3wI"]),
                            }),
                        }),
                    }),
                ],
            })
        );
    };
function z(e) {
    let { guild: t } = e,
        { name: i, color: l } = (0, d.bG)([A.A], () => A.A.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: D.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: D.xf,
            children: [
                (0, s.jsx)(h.WYI, { className: D.m4, color: l.toString(), background: !1, tooltip: !1 }),
                (0, s.jsx)(h.Text, {
                    className: D.S3,
                    variant: "text-sm/medium",
                    color: "interactive-text-active",
                    children: i,
                }),
            ],
        }),
    });
}
function Z(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)("div", {
        className: D.CZ,
        children: [
            (0, s.jsx)(h.Text, {
                className: D.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: P.intl.string(P.t.xU8RDk),
            }),
            (0, s.jsx)("div", {
                className: D.lM,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: D.ce,
                            children: [
                                (0, s.jsx)("div", { className: D.dT }),
                                (0, s.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: i(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function J(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        l = P.intl.string(P.t.Yo5qlq);
    return (
        t.length === G.dR.length && (l = P.intl.string(P.t.FgMS6i)),
        (0, s.jsxs)("div", {
            className: D.CZ,
            children: [
                (0, s.jsx)(h.Text, { className: D.qd, variant: "text-xs/semibold", color: "text-muted", children: l }),
                (0, s.jsx)("div", {
                    className: D.lM,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: D.ce,
                                children: [
                                    (0, s.jsx)("div", { className: D.xE }),
                                    (0, s.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: i(e),
                                    }),
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
function K(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case y.xBc.MENTION_EVERYONE.toString():
                    return P.intl.string(P.t.yCpsQw);
                case y.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return P.intl.string(P.t.vo2LdY);
                case y.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return P.intl.string(P.t.cmp2W6);
                default:
                    return (0, _.hx)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)("div", {
        className: D.tp,
        children: [
            0 !== l.length ? (0, s.jsx)(Z, { enabledPermissions: l, onGetPermisisonName: i }) : null,
            (0, s.jsx)(J, { disabledPermissions: n, onGetPermisisonName: i }),
        ],
    });
}
let Q = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
            d = (0, m.Mw)(r) ? F : U;
        l.useEffect(() => {
            (0, k.sx)({ fromStep: G.pj.BASICS, toStep: G.pj.FINISH, guildId: t.id });
        }, [t.id]);
        let c = l.useMemo(() => {
            let e = [],
                i = [];
            return (
                G.dR.map((s) => {
                    w.Ib(s, t) ? e.push(s) : i.push(s);
                }),
                { enabledPermissions: e, disabledPermissions: i }
            );
        }, [t]);
        return (0, s.jsxs)("div", {
            className: D.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: D.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: d, width: 80 }),
                        (0, s.jsx)(h.Heading, {
                            variant: "heading-xl/semibold",
                            className: D.dc,
                            id: a,
                            children: P.intl.string(P.t["Pj/s/a"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: D.yN,
                    children: (0, s.jsxs)(h.D0$, {
                        label: P.intl.string(P.t["0q344R"]),
                        children: [
                            (0, s.jsxs)("div", {
                                className: D.J_,
                                children: [
                                    (0, s.jsx)(h.yr3, {
                                        size: "md",
                                        className: D.aV,
                                        color: o.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, s.jsx)(h.Text, {
                                        variant: "text-md/normal",
                                        children: P.intl.format(P.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(x.m, {
                                                    text: P.intl.string(P.t["3h2WyM"]),
                                                    "aria-label": P.intl.string(P.t["3h2WyM"]),
                                                    children: (0, s.jsx)(h.mir, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: D.Kk,
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: D.J_,
                                children: [
                                    (0, s.jsx)(h.yr3, {
                                        size: "md",
                                        className: D.aV,
                                        color: o.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, s.jsx)(h.Text, {
                                        variant: "text-md/normal",
                                        children: P.intl.string(P.t.LfeFFr),
                                    }),
                                    (0, s.jsx)(z, { guild: t }),
                                ],
                            }),
                            (0, s.jsx)(K, { permissions: c }),
                        ],
                    }),
                }),
                (0, s.jsx)("div", {
                    className: D.yN,
                    children: (0, s.jsx)(h.D0$, {
                        label: P.intl.string(P.t["k+b2Cf"]),
                        description: P.intl.format(P.t["BwbW/Q"], {
                            communityGuidelines: L.A.getArticleURL(y.MVz.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: L.A.getArticleURL(y.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, s.jsx)(h.Checkbox, {
                            label: P.intl.string(P.t["9AG3wI"]),
                            checked: i,
                            onChange: n,
                        }),
                    }),
                }),
            ],
        });
    },
    $ = (e) => {
        let { transitionState: t, onClose: i } = e;
        l.useEffect(() => {
            M.default.track(y.HAw.OPEN_MODAL, { type: G.bK });
        }, []);
        let { guild: n } = (0, d.cf)([v.A], () => v.A.getProps()),
            a = (0, d.bG)([f.A], () => f.A.theme),
            [o, c] = l.useState(!1),
            [x, m] = l.useState(!G.dR.some((e) => w.Ib(e, n))),
            [u, h] = l.useState(G.SP),
            [_, S] = l.useState(G.SP),
            [L] = l.useState(n?.defaultMessageNotifications),
            [k] = l.useState(n?.verificationLevel),
            [R] = l.useState(n?.explicitContentFilter),
            [O] = l.useState(x),
            F = (0, d.bG)([A.A], () => (null != n ? A.A.getEveryoneRole(n) : void 0)),
            U = (0, d.bG)([C.Ay], () => (null != n ? C.Ay.getChannels(n.id) : null)),
            H = (0, b.GV)(),
            { enabled: Y } = (0, p.zi)(n?.id ?? y.dJq);
        if (null == n) return null;
        let z = [{ value: G.SP, label: P.intl.string(P.t.Cla0re) }];
        U[C.I6].forEach((e) => {
            let { channel: t } = e;
            t.type === y.rbe.GUILD_TEXT && z.push({ value: t.id, label: (0, g.m1)(t, I.default, E.A, !0) });
        });
        let Z = k !== y.PvD.NONE,
            J = R === y.gh6.ALL_MEMBERS,
            K = L === y.orn.ONLY_MENTIONS,
            $ = async () => {
                if (null == F || !o) return;
                let e = new Set(n.features);
                e.add(y.GuildFeatures.COMMUNITY);
                let t = x ? r.TF(F.permissions, G.e$) : F.permissions,
                    s = { ...F, permissions: t };
                t !== F.permissions && (await (0, j.JY)(n.id, [s])),
                    N.A.updateGuild({ features: e, rulesChannelId: u, publicUpdatesChannelId: _ }),
                    await N.A.saveGuild(n.id, {
                        features: e,
                        rulesChannelId: u,
                        verificationLevel: n.verificationLevel,
                        explicitContentFilter: n.explicitContentFilter,
                        publicUpdatesChannelId: _,
                        defaultMessageNotifications: n.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        i();
                    }, 0);
            },
            X = (0, s.jsx)(V, {
                guild: n,
                disableVerificationLevel: Z,
                disableContentFilter: J,
                onAcceptVerificationLevel: (e) => {
                    e
                        ? e && N.A.updateGuild({ verificationLevel: y.PvD.LOW })
                        : N.A.updateGuild({ verificationLevel: k });
                },
                onAcceptContentFilter: (e) => {
                    e
                        ? N.A.updateGuild({ explicitContentFilter: y.gh6.ALL_MEMBERS })
                        : N.A.updateGuild({ explicitContentFilter: R });
                },
                headerId: H,
                theme: a,
            }),
            ee = (0, s.jsx)(q, {
                selectableChannels: z,
                onRuleChannelChange: (e) => {
                    h(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    S(e);
                },
                ruleChannel: u,
                publicUpdatesChannel: _,
                headerId: H,
                theme: a,
                guildId: n.id,
            }),
            et = Y
                ? (0, s.jsx)(Q, {
                      guild: n,
                      policyAccepted: o,
                      onAcceptPolicy: (e) => {
                          if (e) {
                              c(!0),
                                  K || N.A.updateGuild({ defaultMessageNotifications: y.orn.ONLY_MENTIONS }),
                                  x || null == F || m(!0);
                              return;
                          }
                          c(!1), K && N.A.updateGuild({ defaultMessageNotifications: L }), x && null != F && m(!1);
                      },
                      headerId: H,
                      theme: a,
                  })
                : (0, s.jsx)(W, {
                      guild: n,
                      disableDefaultNotifications: K,
                      disableEveryoneRolePermissions: O,
                      policyAccepted: o,
                      everyoneRolePermissionsAccepted: x,
                      onAcceptPolicy: (e) => {
                          e ? c(!0) : c(!1);
                      },
                      onAcceptDefaultNotifications: (e) => {
                          e
                              ? N.A.updateGuild({ defaultMessageNotifications: y.orn.ONLY_MENTIONS })
                              : N.A.updateGuild({ defaultMessageNotifications: L });
                      },
                      onAcceptEveryoneRolePermissions: (e) => {
                          null != F && (e ? m(!0) : m(!1));
                      },
                      headerId: H,
                      theme: a,
                  }),
            ei = (0, s.jsx)("img", { alt: "", src: B, className: D.Hw, width: 240 }),
            es = [
                {
                    modalContent: X,
                    disableNextStep:
                        n.explicitContentFilter !== y.gh6.ALL_MEMBERS || n.verificationLevel === y.PvD.NONE,
                    overviewTitle: P.intl.string(P.t.PpYoSj),
                },
                {
                    modalContent: ee,
                    disableNextStep: null == u || null == _,
                    overviewTitle: P.intl.string(P.t["7MEtIY"]),
                },
                { modalContent: et, disableNextStep: !o, overviewTitle: P.intl.string(P.t.Pj9P8E) },
            ];
        return (0, s.jsx)(T.A, {
            stepData: es,
            title: P.intl.string(P.t["6U5XTu"]),
            transitionState: t,
            onClose: () => {
                i(), M.default.track(y.HAw.MODAL_DISMISSED, { type: G.bK });
            },
            completeButtonText: P.intl.string(P.t.XGl4ba),
            onComplete: $,
            overviewFooter: ei,
            sequencerClassName: D.kL,
            autoCloseOnComplete: !1,
        });
    };
