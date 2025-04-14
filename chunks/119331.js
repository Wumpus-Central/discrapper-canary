n.d(t, { t: () => o }), n(415506);
var r = n(120356),
    i = n.n(r),
    s = n(481060),
    l = n(267642),
    a = n(462820);
function o(e, t) {
    if (t)
        return {
            Icon: s.dz2,
            className: a.unlocked
        };
    switch (e) {
        case l.Ro.EMOJI:
            return {
                Icon: s.EO4,
                className: i()(a.icon, a.emoji)
            };
        case l.Ro.AUDIO:
            return {
                Icon: s.VWR,
                className: i()(a.icon, a.audio)
            };
        case l.Ro.ANIMATED:
            return {
                Icon: s.OUq,
                className: i()(a.icon, a.animated)
            };
        case l.Ro.CUSTOMIZATION:
            return {
                Icon: s.Ka2,
                className: i()(a.icon, a.customization)
            };
        case l.Ro.UPLOAD:
            return {
                Icon: s.rG2,
                className: i()(a.icon, a.upload)
            };
        case l.Ro.VANITY:
            return {
                Icon: s.r7p,
                className: i()(a.icon, a.vanity)
            };
        case l.Ro.STREAM:
            return {
                Icon: s.hGI,
                className: i()(a.icon, a.stream)
            };
        case l.Ro.STICKER:
            return {
                Icon: s.SlE,
                className: i()(a.icon, a.sticker)
            };
        case l.Ro.CUSTOM_ROLE_ICON:
            return {
                Icon: s.lZ8,
                className: i()(a.icon, a.customRoleIcon)
            };
        case l.Ro.STAGE_VIDEO:
            return {
                Icon: s.ewx,
                className: i()(a.icon, a.stage)
            };
        case l.Ro.SOUNDBOARD:
            return {
                Icon: s.KY1,
                className: i()(a.icon, a.soundboard)
            };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
