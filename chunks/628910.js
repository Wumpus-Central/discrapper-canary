i.d(e, { default: () => P });
var s = i(477900),
    r = i(582128),
    n = i(104510),
    l = i(661531),
    o = i(866665),
    a = i(821609),
    c = i(772707),
    d = i(683071),
    u = i(834730),
    p = i(503852),
    m = i(470934),
    x = i(363487),
    k = i(998418),
    v = i(249286),
    T = i(933337),
    E = i(743569),
    f = i(37537),
    A = i(309326),
    I = i(337322),
    _ = i(183699);
function h(t) {
    let { powerup: e } = t,
        i = (0, I.A)(e),
        r = (0, f.c)("GuildPowerupLevelPerks");
    return (0, s.jsx)("div", {
        className: _.kL,
        children: i.map((t) => {
            let { Icon: e } = (0, A.a)(t.perkIcon, !1);
            return (0, s.jsxs)(
                "div",
                {
                    className: _.d_,
                    children: [
                        (0, s.jsx)(e, { color: r ? l.A.colors.TEXT_SUBTLE : l.A.colors.TEXT_MUTED, className: _.Kk }),
                        (0, s.jsx)(u.E, {
                            className: _.Qq,
                            color: r ? void 0 : "text-muted",
                            variant: r ? "text-sm/normal" : "text-sm/medium",
                            children: t.description,
                        }),
                    ],
                },
                `perk-${t.perkIcon}`,
            );
        }),
    });
}
var j = i(568065),
    b = i(652215),
    g = i(930259),
    N = i(105292),
    y = i(115087);
function C(t) {
    return (0, s.jsx)(n._, { ...t, color: l.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
}
function P(t) {
    var e;
    let i,
        l,
        { guildId: f, powerup: A, onClose: I, ..._ } = t,
        [P, L] = r.useState(void 0),
        w = (0, k.Ay)(f, A),
        D = w.type !== j.b_.INACTIVE,
        R = w.type === j.b_.TIER_OVERRIDE_ACTIVATED,
        S = (0, x.A)(f),
        { disabled: O, reason: U } = (0, m.A)(f, A, D),
        { onActivate: V, isLoading: z, error: B } = (0, v.A)(f, A),
        G = (0, T.A)(f, A);
    (r.useEffect(() => {
        L(B);
    }, [B]),
        (0, p.Z)(f, A, p.q.DETAIL));
    let Q = { type: "rive", rive: E.T[A.skuId], aspectRatio: "16/9" },
        q = !R && S,
        H =
            q && !D
                ? [
                      {
                          text: N.intl.string(g.default.AOQgki),
                          icon: n._,
                          variant: "primary",
                          size: "md",
                          disabled: O,
                          loading: z,
                          onClick: () => {
                              V();
                          },
                      },
                  ]
                : void 0,
        K = N.intl.formatToPlainString(g.default["5HQUzD"], { boostCount: A.cost }),
        M =
            q && D
                ? (0, s.jsx)(o.m, {
                      text: K,
                      delay: 100,
                      children: (0, s.jsx)(a.$, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: O,
                          loading: z,
                          text: N.intl.string(g.default.PYPdl4),
                          onClick: () => {
                              G();
                          },
                      }),
                  })
                : void 0;
    return (0, s.jsxs)(c.k, {
        graphic: Q,
        title: A.title,
        subtitle: {
            text:
                ((e = A.skuId),
                (i = j.y7[e] ?? b.TVA.NONE),
                (l = b.M2T[i]),
                N.intl.formatToPlainString(N.t["pob/cL"], { subscriptions: l })),
            leadingIcon: C,
        },
        actions: H,
        actionBarInput: M,
        onClose: I,
        ..._,
        children: [
            (0, s.jsx)(h, { powerup: A }),
            q &&
                !D &&
                null != U &&
                (0, s.jsx)("div", {
                    className: y.P,
                    children: (0, s.jsx)(d.w, { type: "info", message: U, role: "none" }),
                }),
            null != P && (0, s.jsx)(u.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: P }),
        ],
    });
}
