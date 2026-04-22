"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(406810),
    r = n(27232),
    a = n(369606),
    o = n(460905),
    c = n(413249),
    u = n(141060),
    d = n(687966),
    h = n(115979),
    m = n(524501),
    p = n(926268),
    f = n(138134),
    g = n(403581),
    _ = n(7807),
    x = n(732139);
let A = l.memo(function (e) {
    let { categoryId: t, ...n } = e,
        l = ((e) => {
            switch (e) {
                case x.R2.RECENT:
                    return s.O;
                case x.R2.FAVORITES:
                    return r.G;
                case x.R2.TOP_GUILD_EMOJI:
                    return a.O;
                case x.R2.PEOPLE:
                    return o.n;
                case x.R2.NATURE:
                    return c.p;
                case x.R2.FOOD:
                    return u.i;
                case x.R2.ACTIVITY:
                    return d._;
                case x.R2.TRAVEL:
                    return h.h;
                case x.R2.OBJECTS:
                    return m.D;
                case x.R2.SYMBOLS:
                    return p.C;
                case x.R2.FLAGS:
                    return f.i;
                case x.R2.PREMIUM_UPSELL:
                    return g.t;
                case x.R2.SOUNDMOJI:
                    return _.J;
                default:
                    return;
            }
        })(t);
    return null == l ? null : (0, i.jsx)(l, { color: "currentColor", ...n });
});
