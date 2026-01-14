n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(979554),
    o = n(481060),
    c = n(388032),
    s = n(436943);
function u(e) {
    var t, n, i;
    let { product: u, isDarkText: d = !1, isOrbExclusive: m = !1, rentalDuration: f } = e,
        p =
            ((t = u.type),
            (n = m),
            null != (i = f)
                ? 3 === i
                    ? c.intl.string(c.t["52UXCo"])
                    : 7 === i
                      ? c.intl.string(c.t.FRR2s2)
                      : c.intl.string(c.t.VgsFa1)
                : n
                  ? c.intl.string(c.t["0TmQRG"])
                  : t === l.Z.AVATAR_DECORATION
                    ? c.intl.string(c.t["7v0T9P"])
                    : t === l.Z.PROFILE_EFFECT
                      ? c.intl.string(c.t.wR5wOo)
                      : null);
    return null === p
        ? null
        : (0, r.jsx)(o.Text, {
              variant: "text-xxs/normal",
              className: a()([s.container, d ? s.darkText : s.lightText]),
              children: p,
          });
}
