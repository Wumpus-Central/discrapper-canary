r.d(t, { A: () => E });
var a = r(627968),
    s = r(64700),
    n = r(512750),
    o = r(435371),
    i = r(397927),
    l = r(503852),
    c = r(470934),
    d = r(363487),
    u = r(998418),
    p = r(220628),
    _ = r(933337),
    m = r(506361),
    f = r(568065),
    I = r(652215),
    b = r(136708),
    k = r(985018),
    x = r(215899);
let v = (e) => (0, a.jsx)(i._Jp, { ...e, color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
function T(e) {
    return (t) => (0, a.jsx)("div", { className: x.E, children: (0, a.jsx)(e, { ...t }) });
}
let A = { [n.ec]: T(i.tIK), [n.RV]: T(i.J$p), [n.YG]: T(i.zzg) };
function E(e) {
    var t;
    let r,
        n,
        { guildId: x, powerup: T, expressiveCta: E, onClose: N, ...g } = e,
        [h, j] = s.useState(void 0),
        C = (0, u.Ay)(x, T),
        P = C.type !== f.b_.INACTIVE,
        S = C.type === f.b_.TIER_OVERRIDE_ACTIVATED,
        D = (0, d.A)(x),
        { disabled: O } = (0, c.A)(x, T, P),
        { onActivate: w, isLoading: y, error: R } = (0, p.A)(x, T),
        K = (0, _.A)(x, T);
    s.useEffect(() => {
        j(R);
    }, [R]),
        (0, l.Z)(x, T, l.q.DETAIL);
    let L = { type: "rive", rive: A[T.skuId], aspectRatio: "16/9" },
        M = !S && D,
        V =
            M && !P
                ? [
                      {
                          text: k.intl.string(b.default.AOQgki),
                          icon: i._Jp,
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
        q = k.intl.formatToPlainString(b.default["5HQUzD"], { boostCount: T.cost }),
        z =
            M && P
                ? (0, a.jsx)(o.m_, {
                      text: q,
                      delay: 100,
                      children: (0, a.jsx)(i.Button, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: O,
                          loading: y,
                          text: k.intl.string(b.default.PYPdl4),
                          onClick: () => {
                              K();
                          },
                      }),
                  })
                : void 0;
    return (0, a.jsxs)(i.kpP, {
        graphic: L,
        title: T.title,
        subtitle: {
            text:
                ((t = T.skuId),
                (r = f.y7[t] ?? I.TVA.NONE),
                (n = I.M2T[r]),
                k.intl.formatToPlainString(k.t["pob/cL"], { subscriptions: n })),
            leadingIcon: v,
        },
        actions: V,
        actionBarInput: z,
        onClose: N,
        ...g,
        children: [
            (0, a.jsx)(m.A, { powerup: T }),
            null != h &&
                (0, a.jsx)(i.Text, { color: "text-feedback-critical", variant: "text-sm/semibold", children: h }),
        ],
    });
}
