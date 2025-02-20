n.d(t, { Z: () => d }), n(627341);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(278074),
    s = n(979554),
    a = n(481060),
    c = n(388032),
    u = n(548100);
function d(e) {
    var t;
    let { product: n, isDarkText: r = !1 } = e,
        d =
            ((t = n.type),
            (0, o.EQ)(t)
                .with(s.Z.AVATAR_DECORATION, () => c.NW.string(c.t['7v0T9P']))
                .with(s.Z.PROFILE_EFFECT, () => c.NW.string(c.t.wR5wOj))
                .otherwise(() => null));
    return null === d
        ? null
        : (0, i.jsx)(a.Text, {
              variant: 'text-xxs/normal',
              className: l()([u.container, r ? u.darkText : u.lightText]),
              children: d
          });
}
