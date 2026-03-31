n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(575593),
    l = n(397927),
    o = n(985018),
    c = n(907763);
function d(e) {
    var t;
    let { product: n, isDarkText: a = !1, isOrbExclusive: d = !1 } = e,
        u =
            ((t = n.type),
            d
                ? o.intl.string(o.t["0TmQRG"])
                : t === s.R.AVATAR_DECORATION
                  ? o.intl.string(o.t["7v0T9P"])
                  : t === s.R.PROFILE_EFFECT
                    ? o.intl.string(o.t.wR5wOo)
                    : null);
    return null === u
        ? null
        : (0, r.jsx)(l.Text, { variant: "text-xxs/normal", className: i()([c.kL, a ? c.ap : c.aK]), children: u });
}
