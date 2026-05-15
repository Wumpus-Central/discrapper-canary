s.d(t, { default: () => ea }), s(321073);
var i = s(627968),
    l = s(64700),
    n = s(503698),
    a = s.n(n),
    r = s(136722),
    d = s(17928),
    c = s(661531),
    o = s(444550),
    m = s(990078),
    x = s(462887),
    u = s(27192),
    h = s(534514),
    g = s(834730),
    j = s(452027),
    N = s(150934),
    p = s(885574),
    v = s(545442),
    f = s(628284),
    b = s(15073),
    E = s(47167),
    C = s(915089),
    S = s(468689),
    A = s(555337),
    I = s(636042),
    M = s(376092),
    L = s(363195),
    _ = s(808728),
    G = s(317525),
    P = s(71393),
    D = s(994500),
    y = s(287809),
    k = s(174459),
    w = s(975571),
    R = s(488926),
    O = s(455207),
    T = s(862482),
    U = s(935462),
    F = s(685094),
    Y = s(821609),
    B = s(375708),
    H = s(821406);
let V = (e) => {
        let { index: t, title: s, selected: l } = e;
        return (0, i.jsxs)("div", {
            className: a()(H.wJ, { [H.wH]: l }),
            children: [
                (0, i.jsx)(g.E, { className: H.BM, variant: "text-sm/normal", children: t + 1 }),
                (0, i.jsx)(g.E, { variant: "text-md/normal", className: H.Fb, children: s }),
            ],
        });
    },
    W = (e) => {
        let {
                className: t,
                title: s,
                stepData: n,
                transitionState: r,
                onClose: d,
                completeButtonText: c,
                overviewFooter: o,
                onNextPressed: m,
                onPrevPressed: x,
                onComplete: u,
                sequencerClassName: g,
                initialStep: j = 0,
                forceStep: N,
                submitting: p = !1,
                autoCloseOnComplete: v = !0,
            } = e,
            [f, b] = l.useState([]),
            [E, S] = l.useState(j),
            A = (0, C.GV)();
        l.useEffect(() => {
            b([...Array(n.length).keys()]);
        }, [n.length]);
        let I = N ?? E,
            M = n[I],
            L = 0 === I,
            _ = I === n.length - 1,
            G = c ?? B.intl.string(B.t.i4jeWR),
            P = l.useCallback(() => {
                x?.(), S(I - 1);
            }, [x, I, S]);
        return (0, i.jsxs)(U.EO, {
            size: U.rI.MEDIUM,
            className: a()(H.kL, t),
            transitionState: r,
            "aria-labelledby": A,
            parentComponent: "MultiStepModal",
            children: [
                (0, i.jsxs)("div", {
                    className: H.A0,
                    children: [
                        (0, i.jsx)(h.D, { id: A, variant: "heading-xl/semibold", className: H.wx, children: s }),
                        (0, i.jsx)("div", {
                            className: H.Ji,
                            children: n.map((e, t) =>
                                (0, i.jsx)(V, { index: t, title: e.overviewTitle, selected: t === I }, t),
                            ),
                        }),
                        o,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: H.yl,
                    children: [
                        (0, i.jsxs)(U.$m, {
                            children: [
                                (0, i.jsx)(U.s_, {
                                    focusProps: { offset: { top: 4, right: 4, left: 4 } },
                                    onClick: d,
                                    className: H.b,
                                }),
                                (0, i.jsx)(F.Y, {
                                    step: I,
                                    steps: f,
                                    sideMargin: 24,
                                    verticalMargin: 24,
                                    className: a()(H.C9, g),
                                    innerClassName: H.C,
                                    children: M.modalContent,
                                }),
                            ],
                        }),
                        (0, i.jsxs)(U.jl, {
                            className: H.qr,
                            children: [
                                (0, i.jsx)(Y.$, {
                                    variant: "active",
                                    text: _ ? G : B.intl.string(B.t.PDTjLN),
                                    type: "submit",
                                    loading: p,
                                    onClick: () => {
                                        _ ? (u(), v && d()) : (m?.(), S(I + 1));
                                    },
                                    disabled: M.disableNextStep,
                                }),
                                L
                                    ? null
                                    : (0, i.jsx)(T.$n, {
                                          look: T.$n.Looks.LINK,
                                          color: T.$n.Colors.PRIMARY,
                                          size: T.$n.Sizes.MIN,
                                          onClick: P,
                                          children: B.intl.string(B.t["13/7kX"]),
                                      }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
var z = s(124759),
    q = s(652215),
    K = s(934195);
let Z = "/assets/30c9caf58319d0f5.svg",
    Q = "/assets/401d9d1a3feb1e26.svg";
var J = s(628287);
let X = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: s,
                onAcceptContentFilter: l,
                disableContentFilter: n,
                disableVerificationLevel: a,
                headerId: r,
                theme: c,
            } = e,
            o = (0, d.bG)([P.A], () => P.A.getGuild(t.id), [t.id]),
            m = null != o && o.verificationLevel > q.PvD.NONE,
            u = o?.explicitContentFilter === q.gh6.ALL_MEMBERS,
            p = (0, x.M)(c) ? "/assets/0280ce34b0947c59.svg" : "/assets/5b151d831c679fdf.svg";
        return (0, i.jsxs)("div", {
            className: K.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: K.Qs,
                    children: [
                        (0, i.jsx)("img", { alt: "", src: p, width: 80 }),
                        (0, i.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: K.wx,
                            id: r,
                            children: B.intl.string(B.t.QrjLYl),
                        }),
                        (0, i.jsx)(g.E, {
                            color: "none",
                            variant: "text-md/normal",
                            className: K.ab,
                            children: B.intl.string(B.t.i1STwu),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: K.Zd,
                    children: (0, i.jsx)(j.D, {
                        label: B.intl.string(B.t.x4hbeZ),
                        description: m ? B.intl.string(B.t.k5crqq) : B.intl.string(B.t.fHiGA0),
                        children: (0, i.jsx)(N.S, {
                            disabled: a,
                            checked: t.verificationLevel > q.PvD.NONE,
                            onChange: s,
                            label: B.intl.string(B.t.x4hbeZ),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: K.Zd,
                    children: (0, i.jsx)(j.D, {
                        label: B.intl.string(B.t.COu4bk),
                        description: u ? B.intl.string(B.t.qgQLpg) : B.intl.string(B.t.b0MaDV),
                        children: (0, i.jsx)(N.S, {
                            disabled: n,
                            checked: t.explicitContentFilter === q.gh6.ALL_MEMBERS,
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
            onRuleChannelChange: s,
            ruleChannel: n,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: d,
            theme: c,
            guildId: m,
        } = e;
        l.useEffect(() => {
            (0, O.sx)({ fromStep: z.pj.SAFETY_CHECK, toStep: z.pj.BASICS, guildId: m });
        }, [m]);
        let u = (0, x.M)(c) ? "/assets/83bf855b8ecf7f86.svg" : "/assets/b7c8acc24afa8e98.svg";
        return (0, i.jsxs)("div", {
            className: K.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: K.Qs,
                    children: [
                        (0, i.jsx)("img", { alt: "", src: u, width: 80 }),
                        (0, i.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: K.wx,
                            id: d,
                            children: B.intl.string(B.t.YtXpEh),
                        }),
                        (0, i.jsx)(g.E, {
                            color: "none",
                            variant: "text-md/normal",
                            className: K.ab,
                            children: B.intl.string(B.t["J/fYR8"]),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: K.Zd,
                    children: (0, i.jsx)(o.p, {
                        label: B.intl.string(B.t.dYrhCO),
                        description: B.intl.string(B.t["+Af+Vw"]),
                        options: t,
                        onChange: s,
                        value: n,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: K.Zd,
                    children: (0, i.jsx)(o.p, {
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
                policyAccepted: s,
                everyoneRolePermissionsAccepted: n,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: d,
                onAcceptEveryoneRolePermissions: c,
                disableDefaultNotifications: o,
                disableEveryoneRolePermissions: v,
                headerId: f,
                theme: b,
            } = e,
            E = (0, x.M)(b) ? Z : Q;
        return (
            l.useEffect(() => {
                (0, O.sx)({ fromStep: z.pj.BASICS, toStep: z.pj.FINISH, guildId: t.id });
            }, [t.id]),
            (0, i.jsxs)("div", {
                className: K.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: K.Qs,
                        children: [
                            (0, i.jsx)("img", { alt: "", src: E, width: 80 }),
                            (0, i.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                className: K.wx,
                                id: f,
                                children: B.intl.string(B.t["Pj/s/a"]),
                            }),
                            (0, i.jsx)(g.E, {
                                color: "none",
                                variant: "text-md/normal",
                                className: K.ab,
                                children: B.intl.string(B.t["IL7/no"]),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: K.Zd,
                        children: (0, i.jsx)(m.m, {
                            text: o ? B.intl.string(B.t.PHjrpp) : null,
                            "aria-label": !!o && B.intl.string(B.t.PHjrpp),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(u.Kj, {
                                    type: u.Or.ROW,
                                    disabled: o,
                                    value: t.defaultMessageNotifications === q.orn.ONLY_MENTIONS,
                                    onChange: (e, t) => d(t),
                                    className: a()({ [K.r9]: o }),
                                    children: (0, i.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        children: B.intl.format(B.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, i.jsx)(m.m, {
                                                    text: B.intl.string(B.t["3h2WyM"]),
                                                    children: (0, i.jsx)("span", {
                                                        tabIndex: 0,
                                                        role: "img",
                                                        "aria-label": B.intl.string(B.t["3h2WyM"]),
                                                        className: K.BP,
                                                        children: (0, i.jsx)(p.m, {
                                                            size: "xs",
                                                            color: "currentColor",
                                                            className: K.Kk,
                                                        }),
                                                    }),
                                                }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, i.jsx)(m.m, {
                        text: v ? B.intl.string(B.t.PHjrpp) : null,
                        "aria-label": !!v && B.intl.string(B.t.PHjrpp),
                        children: (0, i.jsx)("div", {
                            className: K.nj,
                            children: (0, i.jsx)(u.Kj, {
                                disabled: v,
                                value: n,
                                onChange: (e, t) => c(t),
                                className: a()({ [K.r9]: v }),
                                children: (0, i.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    children: B.intl.format(B.t.v8qCoG, {
                                        infoHook: () =>
                                            (0, i.jsx)(m.m, {
                                                text: B.intl.string(B.t["+Iyaif"]),
                                                "aria-label": B.intl.string(B.t["+Iyaif"]),
                                                children: (0, i.jsx)(p.m, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: K.Kk,
                                                }),
                                            }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: K.Zd,
                        children: (0, i.jsx)(j.D, {
                            label: B.intl.string(B.t["k+b2Cf"]),
                            description: B.intl.format(B.t["BwbW/Q"], {
                                communityGuidelines: w.A.getArticleURL(q.MVz.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: w.A.getArticleURL(q.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, i.jsx)(N.S, { checked: s, onChange: r, label: B.intl.string(B.t["9AG3wI"]) }),
                        }),
                    }),
                ],
            })
        );
    };
function et(e) {
    let { guild: t } = e,
        { name: s, color: l } = (0, d.bG)([G.A], () => G.A.getEveryoneRole(t));
    return (0, i.jsx)("div", {
        className: K.__invalid_role,
        children: (0, i.jsxs)("span", {
            className: K.xf,
            children: [
                (0, i.jsx)(v.W, { className: K.m4, color: l.toString(), background: !1, tooltip: !1 }),
                (0, i.jsx)(g.E, {
                    className: K.S3,
                    variant: "text-sm/medium",
                    color: "interactive-text-active",
                    children: s,
                }),
            ],
        }),
    });
}
function es(e) {
    let { enabledPermissions: t, onGetPermisisonName: s } = e;
    return (0, i.jsxs)("div", {
        className: K.CZ,
        children: [
            (0, i.jsx)(g.E, {
                className: K.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: B.intl.string(B.t.xU8RDk),
            }),
            (0, i.jsx)("div", {
                className: K.lM,
                children: t.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: K.ce,
                            children: [
                                (0, i.jsx)("div", { className: K.dT }),
                                (0, i.jsx)(g.E, { variant: "text-sm/normal", color: "text-default", children: s(e) }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function ei(e) {
    let { disabledPermissions: t, onGetPermisisonName: s } = e,
        l = B.intl.string(B.t.Yo5qlq);
    return (
        t.length === z.dR.length && (l = B.intl.string(B.t.FgMS6i)),
        (0, i.jsxs)("div", {
            className: K.CZ,
            children: [
                (0, i.jsx)(g.E, { className: K.qd, variant: "text-xs/semibold", color: "text-muted", children: l }),
                (0, i.jsx)("div", {
                    className: K.lM,
                    children: t.map((e, t) =>
                        (0, i.jsxs)(
                            "div",
                            {
                                className: K.ce,
                                children: [
                                    (0, i.jsx)("div", { className: K.xE }),
                                    (0, i.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: s(e) }),
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
        s = (e) => {
            switch (e.toString()) {
                case q.xBc.MENTION_EVERYONE.toString():
                    return B.intl.string(B.t.yCpsQw);
                case q.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return B.intl.string(B.t.vo2LdY);
                case q.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return B.intl.string(B.t.cmp2W6);
                default:
                    return (0, M.hx)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, i.jsxs)("div", {
        className: K.tp,
        children: [
            0 !== l.length ? (0, i.jsx)(es, { enabledPermissions: l, onGetPermisisonName: s }) : null,
            (0, i.jsx)(ei, { disabledPermissions: n, onGetPermisisonName: s }),
        ],
    });
}
let en = (e) => {
        let { guild: t, policyAccepted: s, onAcceptPolicy: n, headerId: a, theme: r } = e,
            d = (0, x.M)(r) ? Z : Q;
        l.useEffect(() => {
            (0, O.sx)({ fromStep: z.pj.BASICS, toStep: z.pj.FINISH, guildId: t.id });
        }, [t.id]);
        let o = l.useMemo(() => {
            let e = [],
                s = [];
            return (
                z.dR.map((i) => {
                    R.Ib(i, t) ? e.push(i) : s.push(i);
                }),
                { enabledPermissions: e, disabledPermissions: s }
            );
        }, [t]);
        return (0, i.jsxs)("div", {
            className: K.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: K.Qs,
                    children: [
                        (0, i.jsx)("img", { alt: "", src: d, width: 80 }),
                        (0, i.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            className: K.dc,
                            id: a,
                            children: B.intl.string(B.t["Pj/s/a"]),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: K.yN,
                    children: (0, i.jsxs)(j.D, {
                        label: B.intl.string(B.t["0q344R"]),
                        children: [
                            (0, i.jsxs)("div", {
                                className: K.J_,
                                children: [
                                    (0, i.jsx)(f.y, {
                                        size: "md",
                                        className: K.aV,
                                        color: c.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, i.jsx)(g.E, {
                                        variant: "text-md/normal",
                                        children: B.intl.format(B.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, i.jsx)(m.m, {
                                                    text: B.intl.string(B.t["3h2WyM"]),
                                                    children: (0, i.jsx)("span", {
                                                        tabIndex: 0,
                                                        role: "img",
                                                        "aria-label": B.intl.string(B.t["3h2WyM"]),
                                                        className: K.BP,
                                                        children: (0, i.jsx)(p.m, {
                                                            size: "xs",
                                                            color: "currentColor",
                                                            className: K.Kk,
                                                        }),
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: K.J_,
                                children: [
                                    (0, i.jsx)(f.y, {
                                        size: "md",
                                        className: K.aV,
                                        color: c.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: c.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, i.jsx)(g.E, { variant: "text-md/normal", children: B.intl.string(B.t.LfeFFr) }),
                                    (0, i.jsx)(et, { guild: t }),
                                ],
                            }),
                            (0, i.jsx)(el, { permissions: o }),
                        ],
                    }),
                }),
                (0, i.jsx)("div", {
                    className: K.yN,
                    children: (0, i.jsx)(j.D, {
                        label: B.intl.string(B.t["k+b2Cf"]),
                        description: B.intl.format(B.t["BwbW/Q"], {
                            communityGuidelines: w.A.getArticleURL(q.MVz.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: w.A.getArticleURL(q.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, i.jsx)(N.S, { label: B.intl.string(B.t["9AG3wI"]), checked: s, onChange: n }),
                    }),
                }),
            ],
        });
    },
    ea = (e) => {
        let { transitionState: t, onClose: s } = e;
        l.useEffect(() => {
            k.default.track(q.HAw.OPEN_MODAL, { type: z.bK });
        }, []);
        let { guild: n } = (0, d.cf)([A.A], () => A.A.getProps()),
            a = (0, d.bG)([L.A], () => L.A.theme),
            [c, o] = l.useState(!1),
            [m, x] = l.useState(!z.dR.some((e) => R.Ib(e, n))),
            [u, h] = l.useState(z.SP),
            [g, j] = l.useState(z.SP),
            [N] = l.useState(n?.defaultMessageNotifications),
            [p] = l.useState(n?.verificationLevel),
            [v] = l.useState(n?.explicitContentFilter),
            [f] = l.useState(m),
            M = (0, d.bG)([G.A], () => (null != n ? G.A.getEveryoneRole(n) : void 0)),
            P = (0, d.bG)([_.Ay], () => (null != n ? _.Ay.getChannels(n.id) : null)),
            w = (0, C.GV)(),
            { enabled: O } = (0, b.zi)(n?.id ?? q.dJq);
        if (null == n) return null;
        let T = [{ value: z.SP, label: B.intl.string(B.t.Cla0re) }];
        P[_.I6].forEach((e) => {
            let { channel: t } = e;
            t.type === q.rbe.GUILD_TEXT && T.push({ value: t.id, label: (0, E.m1)(t, y.default, D.A, !0) });
        });
        let U = p !== q.PvD.NONE,
            F = v === q.gh6.ALL_MEMBERS,
            Y = N === q.orn.ONLY_MENTIONS,
            H = async () => {
                if (null == M || !c) return;
                let e = new Set(n.features);
                e.add(q.GuildFeatures.COMMUNITY);
                let t = m ? r.TF(M.permissions, z.e$) : M.permissions,
                    i = { ...M, permissions: t };
                t !== M.permissions && (await (0, I.JY)(n.id, [i])),
                    S.A.updateGuild({ features: e, rulesChannelId: u, publicUpdatesChannelId: g }),
                    await S.A.saveGuild(n.id, {
                        features: e,
                        rulesChannelId: u,
                        verificationLevel: n.verificationLevel,
                        explicitContentFilter: n.explicitContentFilter,
                        publicUpdatesChannelId: g,
                        defaultMessageNotifications: n.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        s();
                    }, 0);
            },
            V = (0, i.jsx)(X, {
                guild: n,
                disableVerificationLevel: U,
                disableContentFilter: F,
                onAcceptVerificationLevel: (e) => {
                    e ? S.A.updateGuild({ verificationLevel: q.PvD.LOW }) : S.A.updateGuild({ verificationLevel: p });
                },
                onAcceptContentFilter: (e) => {
                    e
                        ? S.A.updateGuild({ explicitContentFilter: q.gh6.ALL_MEMBERS })
                        : S.A.updateGuild({ explicitContentFilter: v });
                },
                headerId: w,
                theme: a,
            }),
            Z = (0, i.jsx)($, {
                selectableChannels: T,
                onRuleChannelChange: (e) => {
                    h(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    j(e);
                },
                ruleChannel: u,
                publicUpdatesChannel: g,
                headerId: w,
                theme: a,
                guildId: n.id,
            }),
            Q = O
                ? (0, i.jsx)(en, {
                      guild: n,
                      policyAccepted: c,
                      onAcceptPolicy: (e) => {
                          if (e) {
                              o(!0),
                                  Y || S.A.updateGuild({ defaultMessageNotifications: q.orn.ONLY_MENTIONS }),
                                  m || null == M || x(!0);
                              return;
                          }
                          o(!1), Y && S.A.updateGuild({ defaultMessageNotifications: N }), m && null != M && x(!1);
                      },
                      headerId: w,
                      theme: a,
                  })
                : (0, i.jsx)(ee, {
                      guild: n,
                      disableDefaultNotifications: Y,
                      disableEveryoneRolePermissions: f,
                      policyAccepted: c,
                      everyoneRolePermissionsAccepted: m,
                      onAcceptPolicy: (e) => {
                          e ? o(!0) : o(!1);
                      },
                      onAcceptDefaultNotifications: (e) => {
                          e
                              ? S.A.updateGuild({ defaultMessageNotifications: q.orn.ONLY_MENTIONS })
                              : S.A.updateGuild({ defaultMessageNotifications: N });
                      },
                      onAcceptEveryoneRolePermissions: (e) => {
                          null != M && (e ? x(!0) : x(!1));
                      },
                      headerId: w,
                      theme: a,
                  }),
            et = (0, i.jsx)("img", { alt: "", src: J, className: K.Hw, width: 240 }),
            es = [
                {
                    modalContent: V,
                    disableNextStep:
                        n.explicitContentFilter !== q.gh6.ALL_MEMBERS || n.verificationLevel === q.PvD.NONE,
                    overviewTitle: B.intl.string(B.t.PpYoSj),
                },
                {
                    modalContent: Z,
                    disableNextStep: null == u || null == g,
                    overviewTitle: B.intl.string(B.t["7MEtIY"]),
                },
                { modalContent: Q, disableNextStep: !c, overviewTitle: B.intl.string(B.t.Pj9P8E) },
            ];
        return (0, i.jsx)(W, {
            stepData: es,
            title: B.intl.string(B.t["6U5XTu"]),
            transitionState: t,
            onClose: () => {
                s(), k.default.track(q.HAw.MODAL_DISMISSED, { type: z.bK });
            },
            completeButtonText: B.intl.string(B.t.XGl4ba),
            onComplete: H,
            overviewFooter: et,
            sequencerClassName: K.kL,
            autoCloseOnComplete: !1,
        });
    };
