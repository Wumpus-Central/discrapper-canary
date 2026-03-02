r.d(t, { A: () => T });
var a = r(627968),
    s = r(64700),
    n = r(512750),
    o = r(397927),
    i = r(503852),
    c = r(470934),
    l = r(363487),
    d = r(998418),
    u = r(220628),
    p = r(933337),
    _ = r(506361),
    m = r(568065),
    I = r(652215),
    b = r(333354),
    f = r(985018);
let k = (e) => (0, a.jsx)(o._Jp, { ...e, color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH }),
    x = { [n.ec]: o.tIK, [n.RV]: o.J$p, [n.YG]: o.zzg };
function T(e) {
    var t;
    let r,
        n,
        { guildId: T, powerup: v, expressiveCta: A, onClose: E, ...N } = e,
        [g, h] = s.useState(void 0),
        C = (0, d.Ay)(T, v),
        j = C.type !== m.b_.INACTIVE,
        P = C.type === m.b_.TIER_OVERRIDE_ACTIVATED,
        S = (0, l.A)(T),
        { disabled: D } = (0, c.A)(T, v, j),
        { onActivate: O, isLoading: w, error: y } = (0, u.A)(T, v),
        R = (0, p.A)(T, v);
    s.useEffect(() => {
        h(y);
    }, [y]),
        (0, i.Z)(T, v, i.q.DETAIL);
    let K = { type: "rive", rive: x[v.skuId], aspectRatio: "16/9" },
        L =
            !P && S
                ? [
                      {
                          text: f.intl.string(j ? b.default.PYPdl4 : b.default.AOQgki),
                          icon: o._Jp,
                          variant: A ? "expressive" : j ? "secondary" : "primary",
                          size: "md",
                          disabled: D,
                          loading: w,
                          onClick: () => {
                              j ? R() : O();
                          },
                      },
                  ]
                : void 0;
    return (0, a.jsxs)(o.kpP, {
        graphic: K,
        title: v.title,
        subtitle: {
            text:
                ((t = v.skuId),
                (r = m.y7[t] ?? I.TVA.NONE),
                (n = I.M2T[r]),
                f.intl.formatToPlainString(f.t["pob/cL"], { subscriptions: n })),
            leadingIcon: k,
        },
        actions: L,
        onClose: E,
        ...N,
        children: [
            (0, a.jsx)(_.A, { powerup: v }),
            null != g &&
                (0, a.jsx)(o.Text, { color: "text-feedback-critical", variant: "text-sm/semibold", children: g }),
        ],
    });
}
