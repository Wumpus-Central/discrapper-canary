r.d(t, { A: () => N });
var a = r(627968),
    s = r(64700),
    n = r(990078),
    o = r(104510),
    i = r(827734),
    l = r(821609),
    c = r(772707),
    d = r(834730),
    u = r(503852),
    _ = r(470934),
    p = r(363487),
    m = r(998418),
    f = r(220628),
    b = r(933337),
    I = r(743569),
    k = r(506361),
    v = r(568065),
    x = r(652215),
    T = r(853513),
    A = r(985018);
let E = (e) => (0, a.jsx)(o._, { ...e, color: i.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
function N(e) {
    var t;
    let r,
        i,
        { guildId: N, powerup: h, expressiveCta: g, onClose: C, ...j } = e,
        [P, S] = s.useState(void 0),
        D = (0, m.Ay)(N, h),
        O = D.type !== v.b_.INACTIVE,
        w = D.type === v.b_.TIER_OVERRIDE_ACTIVATED,
        y = (0, p.A)(N),
        { disabled: R } = (0, _.A)(N, h, O),
        { onActivate: K, isLoading: L, error: V } = (0, f.A)(N, h),
        M = (0, b.A)(N, h);
    s.useEffect(() => {
        S(V);
    }, [V]),
        (0, u.Z)(N, h, u.q.DETAIL);
    let q = { type: "rive", rive: I.T[h.skuId], aspectRatio: "16/9" },
        U = !w && y,
        z =
            U && !O
                ? [
                      {
                          text: A.intl.string(T.default.AOQgki),
                          icon: o._,
                          variant: g ? "expressive" : "primary",
                          size: "md",
                          disabled: R,
                          loading: L,
                          onClick: () => {
                              K();
                          },
                      },
                  ]
                : void 0,
        G = A.intl.formatToPlainString(T.default["5HQUzD"], { boostCount: h.cost }),
        Z =
            U && O
                ? (0, a.jsx)(n.m, {
                      text: G,
                      delay: 100,
                      children: (0, a.jsx)(l.$, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: R,
                          loading: L,
                          text: A.intl.string(T.default.PYPdl4),
                          onClick: () => {
                              M();
                          },
                      }),
                  })
                : void 0;
    return (0, a.jsxs)(c.k, {
        graphic: q,
        title: h.title,
        subtitle: {
            text:
                ((t = h.skuId),
                (r = v.y7[t] ?? x.TVA.NONE),
                (i = x.M2T[r]),
                A.intl.formatToPlainString(A.t["pob/cL"], { subscriptions: i })),
            leadingIcon: E,
        },
        actions: z,
        actionBarInput: Z,
        onClose: C,
        ...j,
        children: [
            (0, a.jsx)(k.A, { powerup: h }),
            null != P && (0, a.jsx)(d.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: P }),
        ],
    });
}
