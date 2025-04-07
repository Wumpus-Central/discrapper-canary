n.d(t, { t: () => o }), n(415506);
var r = n(120356),
    i = n.n(r),
    s = n(481060),
    a = n(267642),
    l = n(462820);
function o(e, t) {
    if (t)
        return {
            Icon: s.dz2,
            className: l.unlocked
        };
    switch (e) {
        case a.Ro.EMOJI:
            return {
                Icon: s.EO4,
                className: i()(l.icon, l.emoji)
            };
        case a.Ro.AUDIO:
            return {
                Icon: s.VWR,
                className: i()(l.icon, l.audio)
            };
        case a.Ro.ANIMATED:
            return {
                Icon: s.OUq,
                className: i()(l.icon, l.animated)
            };
        case a.Ro.CUSTOMIZATION:
            return {
                Icon: s.Ka2,
                className: i()(l.icon, l.customization)
            };
        case a.Ro.UPLOAD:
            return {
                Icon: s.rG2,
                className: i()(l.icon, l.upload)
            };
        case a.Ro.VANITY:
            return {
                Icon: s.r7p,
                className: i()(l.icon, l.vanity)
            };
        case a.Ro.STREAM:
            return {
                Icon: s.hGI,
                className: i()(l.icon, l.stream)
            };
        case a.Ro.STICKER:
            return {
                Icon: s.SlE,
                className: i()(l.icon, l.sticker)
            };
        case a.Ro.CUSTOM_ROLE_ICON:
            return {
                Icon: s.lZ8,
                className: i()(l.icon, l.customRoleIcon)
            };
        case a.Ro.STAGE_VIDEO:
            return {
                Icon: s.ewx,
                className: i()(l.icon, l.stage)
            };
        case a.Ro.SOUNDBOARD:
            return {
                Icon: s.KY1,
                className: i()(l.icon, l.soundboard)
            };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
