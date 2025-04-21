n.d(t, { t: () => o }), n(415506);
var r = n(120356),
    i = n.n(r),
    l = n(481060),
    s = n(267642),
    a = n(462820);
function o(e, t) {
    if (t)
        return {
            Icon: l.dz2,
            className: a.unlocked
        };
    switch (e) {
        case s.Ro.EMOJI:
            return {
                Icon: l.EO4,
                className: i()(a.icon, a.emoji)
            };
        case s.Ro.AUDIO:
            return {
                Icon: l.VWR,
                className: i()(a.icon, a.audio)
            };
        case s.Ro.ANIMATED:
            return {
                Icon: l.OUq,
                className: i()(a.icon, a.animated)
            };
        case s.Ro.CUSTOMIZATION:
            return {
                Icon: l.Ka2,
                className: i()(a.icon, a.customization)
            };
        case s.Ro.UPLOAD:
            return {
                Icon: l.rG2,
                className: i()(a.icon, a.upload)
            };
        case s.Ro.VANITY:
            return {
                Icon: l.r7p,
                className: i()(a.icon, a.vanity)
            };
        case s.Ro.STREAM:
            return {
                Icon: l.hGI,
                className: i()(a.icon, a.stream)
            };
        case s.Ro.STICKER:
            return {
                Icon: l.SlE,
                className: i()(a.icon, a.sticker)
            };
        case s.Ro.CUSTOM_ROLE_ICON:
            return {
                Icon: l.lZ8,
                className: i()(a.icon, a.customRoleIcon)
            };
        case s.Ro.STAGE_VIDEO:
            return {
                Icon: l.ewx,
                className: i()(a.icon, a.stage)
            };
        case s.Ro.SOUNDBOARD:
            return {
                Icon: l.KY1,
                className: i()(a.icon, a.soundboard)
            };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
