n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(575593),
    s = n(834730),
    o = n(985018),
    c = n(674019);
function d(e) {
    let { product: t, isDarkText: n = !1, isOrbExclusive: r = !1 } = e,
        d = (function (e, t) {
            if (t) return o.intl.string(o.t["0TmQRG"]);
            switch (e) {
                case l.R.AVATAR_DECORATION:
                    return o.intl.string(o.t["7v0T9P"]);
                case l.R.PROFILE_EFFECT:
                    return o.intl.string(o.t.wR5wOo);
                case l.R.PROFILE_FRAME:
                    return o.intl.string(o.t.GWrZOd);
                case l.R.NAMEPLATE:
                    return o.intl.string(o.t.x5CoXR);
            }
            return null;
        })(t.type, r);
    return null === d
        ? null
        : (0, i.jsx)(s.E, { variant: "text-xxs/normal", className: a()([c.kL, n ? c.ap : c.aK]), children: d });
}
