n.d(t, { t: () => o }), n(411104);
var r = n(120356),
    i = n.n(r),
    s = n(481060),
    a = n(267642),
    l = n(179856);
function o(e, t) {
    if (t)
        return {
            icon: s.dz2,
            className: l.unlocked
        };
    switch (e) {
        case a.Ro.EMOJI:
            return {
                icon: s.EO4,
                className: i()(l.icon, l.emoji)
            };
        case a.Ro.AUDIO:
            return {
                icon: s.VWR,
                className: i()(l.icon, l.audio)
            };
        case a.Ro.ANIMATED:
            return {
                icon: s.OUq,
                className: i()(l.icon, l.animated)
            };
        case a.Ro.CUSTOMIZATION:
            return {
                icon: s.Ka2,
                className: i()(l.icon, l.customization)
            };
        case a.Ro.UPLOAD:
            return {
                icon: s.rG2,
                className: i()(l.icon, l.upload)
            };
        case a.Ro.VANITY:
            return {
                icon: s.r7p,
                className: i()(l.icon, l.vanity)
            };
        case a.Ro.STREAM:
            return {
                icon: s.hGI,
                className: i()(l.icon, l.stream)
            };
        case a.Ro.STICKER:
            return {
                icon: s.SlE,
                className: i()(l.icon, l.sticker)
            };
        case a.Ro.CUSTOM_ROLE_ICON:
            return {
                icon: s.lZ8,
                className: i()(l.icon, l.customRoleIcon)
            };
        case a.Ro.STAGE_VIDEO:
            return {
                icon: s.ewx,
                className: i()(l.icon, l.stage)
            };
        case a.Ro.SOUNDBOARD:
            return {
                icon: s.KY1,
                className: i()(l.icon, l.soundboard)
            };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
