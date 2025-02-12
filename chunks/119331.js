n.d(t, { t: () => o }), n(411104);
var i = n(120356),
    r = n.n(i),
    l = n(481060),
    s = n(267642),
    a = n(127233);
function o(e, t) {
    if (t)
        return {
            icon: l.dz2,
            className: a.unlocked
        };
    switch (e) {
        case s.Ro.EMOJI:
            return {
                icon: l.EO4,
                className: r()(a.icon, a.emoji)
            };
        case s.Ro.AUDIO:
            return {
                icon: l.VWR,
                className: r()(a.icon, a.audio)
            };
        case s.Ro.ANIMATED:
            return {
                icon: l.OUq,
                className: r()(a.icon, a.animated)
            };
        case s.Ro.CUSTOMIZATION:
            return {
                icon: l.Ka2,
                className: r()(a.icon, a.customization)
            };
        case s.Ro.UPLOAD:
            return {
                icon: l.rG2,
                className: r()(a.icon, a.upload)
            };
        case s.Ro.VANITY:
            return {
                icon: l.r7p,
                className: r()(a.icon, a.vanity)
            };
        case s.Ro.STREAM:
            return {
                icon: l.hGI,
                className: r()(a.icon, a.stream)
            };
        case s.Ro.STICKER:
            return {
                icon: l.SlE,
                className: r()(a.icon, a.sticker)
            };
        case s.Ro.CUSTOM_ROLE_ICON:
            return {
                icon: l.lZ8,
                className: r()(a.icon, a.customRoleIcon)
            };
        case s.Ro.STAGE_VIDEO:
            return {
                icon: l.ewx,
                className: r()(a.icon, a.stage)
            };
        case s.Ro.SOUNDBOARD:
            return {
                icon: l.KY1,
                className: r()(a.icon, a.soundboard)
            };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
