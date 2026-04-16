n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(575593),
    l = n(397927),
    c = n(985018),
    o = n(674019);
function d(e) {
    let { product: t, isDarkText: n = !1, isOrbExclusive: r = !1 } = e,
        d = (function (e, t) {
            if (t) return c.intl.string(c.t["0TmQRG"]);
            switch (e) {
                case s.R.AVATAR_DECORATION:
                    return c.intl.string(c.t["7v0T9P"]);
                case s.R.PROFILE_EFFECT:
                    return c.intl.string(c.t.wR5wOo);
                case s.R.PROFILE_FRAME:
                    return c.intl.string(c.t.GWrZOd);
                case s.R.NAMEPLATE:
                    return c.intl.string(c.t.x5CoXR);
            }
            return null;
        })(t.type, r);
    return null === d
        ? null
        : (0, a.jsx)(l.Text, { variant: "text-xxs/normal", className: i()([o.kL, n ? o.ap : o.aK]), children: d });
}
