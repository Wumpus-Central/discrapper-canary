n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(627341);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(278074),
    o = n(979554),
    s = n(481060),
    c = n(388032),
    u = n(253344);
function d(e) {
    var t;
    let { product: n, isDarkText: l = !1 } = e;
    let d =
        ((t = n.type),
        (0, a.EQ)(t)
            .with(o.Z.AVATAR_DECORATION, () => c.intl.string(c.t['7v0T9P']))
            .with(o.Z.PROFILE_EFFECT, () => c.intl.string(c.t.wR5wOj))
            .otherwise(() => null));
    return null === d
        ? null
        : (0, i.jsx)(s.Text, {
              variant: 'text-xxs/normal',
              className: r()([u.container, l ? u.darkText : u.lightText]),
              children: d
          });
}
