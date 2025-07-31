(n.d(t, { Z: () => d }), n(314940));
var r = n(255367);
n(73800);
var a = n(120356),
    i = n.n(a),
    o = n(278074),
    c = n(979554),
    s = n(481060),
    l = n(388032),
    u = n(956946);
function d(e) {
    var t;
    let { product: n, isDarkText: a = !1, isOrbExclusive: d = !1 } = e,
        p =
            ((t = n.type),
            d
                ? l.intl.string(l.t['0TmQRE'])
                : (0, o.EQ)(t)
                      .with(c.Z.AVATAR_DECORATION, () => l.intl.string(l.t['7v0T9P']))
                      .with(c.Z.PROFILE_EFFECT, () => l.intl.string(l.t.wR5wOj))
                      .otherwise(() => null));
    return null === p
        ? null
        : (0, r.jsx)(s.Text, {
              variant: 'text-xxs/normal',
              className: i()([u.container, a ? u.darkText : u.lightText]),
              children: p
          });
}
