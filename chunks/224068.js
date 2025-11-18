n.d(t, { Z: () => d }), n(314940);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(278074),
    o = n(979554),
    s = n(481060),
    c = n(388032),
    u = n(351768);
function d(e) {
    var t;
    let { product: n, isDarkText: i = !1, isOrbExclusive: d = !1, rentalDuration: m = 0 } = e,
        p =
            ((t = n.type),
            1 === m
                ? c.intl.string(c.t["9dHf8O"])
                : 3 === m
                  ? c.intl.string(c.t["52UXCo"])
                  : d
                    ? c.intl.string(c.t["0TmQRG"])
                    : (0, l.EQ)(t)
                          .with(o.Z.AVATAR_DECORATION, () => c.intl.string(c.t["7v0T9P"]))
                          .with(o.Z.PROFILE_EFFECT, () => c.intl.string(c.t.wR5wOo))
                          .otherwise(() => null));
    return null === p
        ? null
        : (0, r.jsx)(s.Text, {
              variant: "text-xxs/normal",
              className: a()([u.container, i ? u.darkText : u.lightText]),
              children: p,
          });
}
