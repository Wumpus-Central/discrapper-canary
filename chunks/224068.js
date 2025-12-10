n.d(t, { Z: () => d }), n(314940);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(278074),
    o = n(979554),
    s = n(481060),
    c = n(388032),
    u = n(351768);
function d(e) {
    var t, n, i;
    let { product: d, isDarkText: m = !1, isOrbExclusive: p = !1, rentalDuration: f } = e,
        v =
            ((t = d.type),
            (n = p),
            null != (i = f)
                ? 3 === i
                    ? c.intl.string(c.t["52UXCo"])
                    : 7 === i
                      ? c.intl.string(c.t.FRR2s2)
                      : c.intl.string(c.t.VgsFa1)
                : n
                  ? c.intl.string(c.t["0TmQRG"])
                  : (0, a.EQ)(t)
                        .with(o.Z.AVATAR_DECORATION, () => c.intl.string(c.t["7v0T9P"]))
                        .with(o.Z.PROFILE_EFFECT, () => c.intl.string(c.t.wR5wOo))
                        .otherwise(() => null));
    return null === v
        ? null
        : (0, r.jsx)(s.Text, {
              variant: "text-xxs/normal",
              className: l()([u.container, m ? u.darkText : u.lightText]),
              children: v,
          });
}
