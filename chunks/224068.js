n.d(t, { Z: () => d }), n(314940);
var r = n(951288);
n(647438);
var a = n(120356),
    i = n.n(a),
    o = n(278074),
    l = n(979554),
    c = n(481060),
    s = n(388032),
    u = n(351768);
function d(e) {
    var t;
    let { product: n, isDarkText: a = !1, isOrbExclusive: d = !1 } = e,
        p =
            ((t = n.type),
            d
                ? s.intl.string(s.t["0TmQRE"])
                : (0, o.EQ)(t)
                      .with(l.Z.AVATAR_DECORATION, () => s.intl.string(s.t["7v0T9P"]))
                      .with(l.Z.PROFILE_EFFECT, () => s.intl.string(s.t.wR5wOj))
                      .otherwise(() => null));
    return null === p
        ? null
        : (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              className: i()([u.container, a ? u.darkText : u.lightText]),
              children: p,
          });
}
