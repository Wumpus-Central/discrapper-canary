"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(406810),
    a = n(27232),
    o = n(369606),
    l = n(460905),
    u = n(413249),
    c = n(141060),
    d = n(687966),
    _ = n(115979),
    f = n(524501),
    p = n(926268),
    h = n(138134),
    E = n(403581),
    m = n(7807),
    g = n(732139);
let A = i.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = ((e) => {
            switch (e) {
                case g.R2.RECENT:
                    return s.O;
                case g.R2.FAVORITES:
                    return a.G;
                case g.R2.TOP_GUILD_EMOJI:
                    return o.O;
                case g.R2.PEOPLE:
                    return l.n;
                case g.R2.NATURE:
                    return u.p;
                case g.R2.FOOD:
                    return c.i;
                case g.R2.ACTIVITY:
                    return d._;
                case g.R2.TRAVEL:
                    return _.h;
                case g.R2.OBJECTS:
                    return f.D;
                case g.R2.SYMBOLS:
                    return p.C;
                case g.R2.FLAGS:
                    return h.i;
                case g.R2.PREMIUM_UPSELL:
                    return E.t;
                case g.R2.SOUNDMOJI:
                    return m.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, r.jsx)(i, { color: "currentColor", ...n });
});
