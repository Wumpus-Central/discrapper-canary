a.d(t, { A: () => v });
var r = a(627968),
    s = a(64700),
    n = a(512750),
    o = a(435371),
    i = a(397927),
    l = a(503852),
    c = a(470934),
    d = a(363487),
    u = a(998418),
    p = a(220628),
    _ = a(933337),
    m = a(506361),
    I = a(568065),
    f = a(652215),
    b = a(333354),
    k = a(985018);
let x = (e) => (0, r.jsx)(i._Jp, { ...e, color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH }),
    T = { [n.ec]: i.tIK, [n.RV]: i.J$p, [n.YG]: i.zzg };
function v(e) {
    var t;
    let a,
        n,
        { guildId: v, powerup: A, expressiveCta: E, onClose: N, ...g } = e,
        [h, C] = s.useState(void 0),
        j = (0, u.Ay)(v, A),
        P = j.type !== I.b_.INACTIVE,
        S = j.type === I.b_.TIER_OVERRIDE_ACTIVATED,
        D = (0, d.A)(v),
        { disabled: O } = (0, c.A)(v, A, P),
        { onActivate: w, isLoading: y, error: R } = (0, p.A)(v, A),
        K = (0, _.A)(v, A);
    s.useEffect(() => {
        C(R);
    }, [R]),
        (0, l.Z)(v, A, l.q.DETAIL);
    let L = { type: "rive", rive: T[A.skuId], aspectRatio: "16/9" },
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
        q = k.intl.formatToPlainString(b.default["5HQUzD"], { boostCount: A.cost }),
        z =
            M && P
                ? (0, r.jsx)(o.m_, {
                      text: q,
                      delay: 100,
                      children: (0, r.jsx)(i.Button, {
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
    return (0, r.jsxs)(i.kpP, {
        graphic: L,
        title: A.title,
        subtitle: {
            text:
                ((t = A.skuId),
                (a = I.y7[t] ?? f.TVA.NONE),
                (n = f.M2T[a]),
                k.intl.formatToPlainString(k.t["pob/cL"], { subscriptions: n })),
            leadingIcon: x,
        },
        actions: V,
        actionBarInput: z,
        onClose: N,
        ...g,
        children: [
            (0, r.jsx)(m.A, { powerup: A }),
            null != h &&
                (0, r.jsx)(i.Text, { color: "text-feedback-critical", variant: "text-sm/semibold", children: h }),
        ],
    });
}
