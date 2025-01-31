n.d(t, { Z: () => u }), n(627341);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(278074),
    s = n(979554),
    o = n(481060),
    c = n(388032),
    d = n(253344);
function u(e) {
    var t;
    let { product: n, isDarkText: l = !1 } = e,
        u =
            ((t = n.type),
            (0, a.EQ)(t)
                .with(s.Z.AVATAR_DECORATION, () => c.intl.string(c.t['7v0T9P']))
                .with(s.Z.PROFILE_EFFECT, () => c.intl.string(c.t.wR5wOj))
                .otherwise(() => null));
    return null === u
        ? null
        : (0, i.jsx)(o.Text, {
              variant: 'text-xxs/normal',
              className: r()([d.container, l ? d.darkText : d.lightText]),
              children: u
          });
}
