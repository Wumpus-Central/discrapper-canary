"use strict";
r.d(t, { A: () => d });
var n = r(627968);
r(64700);
var i = r(503698),
    s = r.n(i),
    a = r(575593),
    l = r(397927),
    c = r(985018),
    o = r(837368);
function d(e) {
    var t;
    let { product: r, isDarkText: i = !1, isOrbExclusive: d = !1 } = e,
        u =
            ((t = r.type),
            d
                ? c.intl.string(c.t["0TmQRG"])
                : t === a.R.AVATAR_DECORATION
                  ? c.intl.string(c.t["7v0T9P"])
                  : t === a.R.PROFILE_EFFECT
                    ? c.intl.string(c.t.wR5wOo)
                    : null);
    return null === u
        ? null
        : (0, n.jsx)(l.Text, { variant: "text-xxs/normal", className: s()([o.kL, i ? o.ap : o.aK]), children: u });
}
