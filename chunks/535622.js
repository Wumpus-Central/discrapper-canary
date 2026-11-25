var i = n(477900),
    s = n(582128),
    l = n(406810),
    r = n(27232),
    a = n(369606),
    o = n(460905),
    c = n(413249),
    u = n(141060),
    d = n(687966),
    m = n(115979),
    f = n(524501),
    E = n(926268),
    I = n(138134),
    h = n(403581),
    g = n(732139);
let A = s.memo(function (e) {
    let { categoryId: t, ...n } = e,
        s = (function (e) {
            switch (e) {
                case g.R2.RECENT:
                    return l.ClockIcon;
                case g.R2.FAVORITES:
                    return r.StarIcon;
                case g.R2.TOP_GUILD_EMOJI:
                    return a.TrophyIcon;
                case g.R2.PEOPLE:
                    return o.ReactionIcon;
                case g.R2.NATURE:
                    return c.NatureIcon;
                case g.R2.FOOD:
                    return u.FoodIcon;
                case g.R2.ACTIVITY:
                    return d.GameControllerIcon;
                case g.R2.TRAVEL:
                    return m.BicycleIcon;
                case g.R2.OBJECTS:
                    return f.ObjectIcon;
                case g.R2.SYMBOLS:
                    return E.HeartIcon;
                case g.R2.FLAGS:
                    return I.FlagIcon;
                case g.R2.PREMIUM_UPSELL:
                    return h.NitroWheelIcon;
                default:
                    return;
            }
        })(t);
    return null == s ? null : (0, i.jsx)(s, { color: "currentColor", ...n });
});
n.d(t, {}, { A: A });
