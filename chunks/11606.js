n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(575593),
    s = n(397927),
    c = n(985018),
    o = n(837368);
function d(e) {
    var t;
    let { product: n, isDarkText: i = !1, isOrbExclusive: d = !1 } = e,
        u =
            ((t = n.type),
            d
                ? c.intl.string(c.t["0TmQRG"])
                : t === l.R.AVATAR_DECORATION
                  ? c.intl.string(c.t["7v0T9P"])
                  : t === l.R.PROFILE_EFFECT
                    ? c.intl.string(c.t.wR5wOo)
                    : null);
    return null === u
        ? null
        : (0, r.jsx)(s.Text, { variant: "text-xxs/normal", className: a()([o.kL, i ? o.ap : o.aK]), children: u });
}
