n.d(t, { Z: () => d }), n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(278074),
    s = n(979554),
    o = n(481060),
    c = n(388032),
    u = n(956946);
function d(e) {
    var t;
    let { product: n, isDarkText: i = !1, isOrbExclusive: d = !1 } = e,
        m =
            ((t = n.type),
            d
                ? c.NW.string(c.t['KUYR+P'])
                : (0, l.EQ)(t)
                      .with(s.Z.AVATAR_DECORATION, () => c.NW.string(c.t['7v0T9P']))
                      .with(s.Z.PROFILE_EFFECT, () => c.NW.string(c.t.wR5wOj))
                      .otherwise(() => null));
    return null === m
        ? null
        : (0, r.jsx)(o.Text, {
              variant: 'text-xxs/normal',
              className: a()([u.container, i ? u.darkText : u.lightText]),
              children: m
          });
}
