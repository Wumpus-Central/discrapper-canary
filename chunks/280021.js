r.d(t, { A: () => T });
var a = r(627968),
    s = r(64700),
    n = r(435371),
    o = r(397927),
    i = r(503852),
    c = r(470934),
    l = r(363487),
    d = r(998418),
    u = r(220628),
    p = r(933337),
    _ = r(743569),
    m = r(506361),
    I = r(568065),
    b = r(652215),
    k = r(136708),
    x = r(985018);
let f = (e) => (0, a.jsx)(o._Jp, { ...e, color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
function T(e) {
    var t;
    let r,
        T,
        { guildId: v, powerup: A, expressiveCta: E, onClose: N, ...j } = e,
        [g, h] = s.useState(void 0),
        C = (0, d.Ay)(v, A),
        P = C.type !== I.b_.INACTIVE,
        S = C.type === I.b_.TIER_OVERRIDE_ACTIVATED,
        D = (0, l.A)(v),
        { disabled: O } = (0, c.A)(v, A, P),
        { onActivate: w, isLoading: y, error: R } = (0, u.A)(v, A),
        K = (0, p.A)(v, A);
    s.useEffect(() => {
        h(R);
    }, [R]),
        (0, i.Z)(v, A, i.q.DETAIL);
    let L = { type: "rive", rive: _.T[A.skuId], aspectRatio: "16/9" },
        M = !S && D,
        V =
            M && !P
                ? [
                      {
                          text: x.intl.string(k.default.AOQgki),
                          icon: o._Jp,
                          variant: E ? "expressive" : "primary",
                          size: "md",
                          disabled: O,
                          loading: y,
                          onClick: () => {
                              w();
                          },
                      },
                  ]
                : void 0,
        q = x.intl.formatToPlainString(k.default["5HQUzD"], { boostCount: A.cost }),
        z =
            M && P
                ? (0, a.jsx)(n.m_, {
                      text: q,
                      delay: 100,
                      children: (0, a.jsx)(o.Button, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: O,
                          loading: y,
                          text: x.intl.string(k.default.PYPdl4),
                          onClick: () => {
                              K();
                          },
                      }),
                  })
                : void 0;
    return (0, a.jsxs)(o.kpP, {
        graphic: L,
        title: A.title,
        subtitle: {
            text:
                ((t = A.skuId),
                (r = I.y7[t] ?? b.TVA.NONE),
                (T = b.M2T[r]),
                x.intl.formatToPlainString(x.t["pob/cL"], { subscriptions: T })),
            leadingIcon: f,
        },
        actions: V,
        actionBarInput: z,
        onClose: N,
        ...j,
        children: [
            (0, a.jsx)(m.A, { powerup: A }),
            null != g &&
                (0, a.jsx)(o.Text, { color: "text-feedback-critical", variant: "text-sm/semibold", children: g }),
        ],
    });
}
