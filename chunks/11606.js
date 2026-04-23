n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(575593),
    s = n(834730),
    c = n(985018),
    o = n(674019);
function d(e) {
    let { product: t, isDarkText: n = !1, isOrbExclusive: i = !1 } = e,
        d = (function (e, t) {
            if (t) return c.intl.string(c.t["0TmQRG"]);
            switch (e) {
                case l.R.AVATAR_DECORATION:
                    return c.intl.string(c.t["7v0T9P"]);
                case l.R.PROFILE_EFFECT:
                    return c.intl.string(c.t.wR5wOo);
                case l.R.PROFILE_FRAME:
                    return c.intl.string(c.t.GWrZOd);
                case l.R.NAMEPLATE:
                    return c.intl.string(c.t.x5CoXR);
            }
            return null;
        })(t.type, i);
    return null === d
        ? null
        : (0, r.jsx)(s.E, { variant: "text-xxs/normal", className: a()([o.kL, n ? o.ap : o.aK]), children: d });
}
