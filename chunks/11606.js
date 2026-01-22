n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(575593),
    s = n(397927),
    c = n(985018),
    o = n(837368);

function d(e) {
    var t, n, l;
    let { product: d, isDarkText: u = !1, isOrbExclusive: m = !1, rentalDuration: f } = e,
        b =
            ((t = d.type),
            (n = m),
            null != (l = f)
                ? 3 === l
                    ? c.intl.string(c.t["52UXCo"])
                    : 7 === l
                      ? c.intl.string(c.t.FRR2s2)
                      : c.intl.string(c.t.VgsFa1)
                : n
                  ? c.intl.string(c.t["0TmQRG"])
                  : t === i.R.AVATAR_DECORATION
                    ? c.intl.string(c.t["7v0T9P"])
                    : t === i.R.PROFILE_EFFECT
                      ? c.intl.string(c.t.wR5wOo)
                      : null);
    return null === b
        ? null
        : (0, r.jsx)(s.Text, {
              variant: "text-xxs/normal",
              className: a()([o.kL, u ? o.ap : o.aK]),
              children: b,
          });
}
