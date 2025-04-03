n.d(t, { t: () => i }), n(411104);
var r = n(120356),
    o = n.n(r),
    s = n(481060),
    a = n(267642),
    c = n(462820);
function i(e, t) {
    if (t)
        return {
            Icon: s.dz2,
            className: c.unlocked
        };
    switch (e) {
        case a.Ro.EMOJI:
            return {
                Icon: s.EO4,
                className: o()(c.icon, c.emoji)
            };
        case a.Ro.AUDIO:
            return {
                Icon: s.VWR,
                className: o()(c.icon, c.audio)
            };
        case a.Ro.ANIMATED:
            return {
                Icon: s.OUq,
                className: o()(c.icon, c.animated)
            };
        case a.Ro.CUSTOMIZATION:
            return {
                Icon: s.Ka2,
                className: o()(c.icon, c.customization)
            };
        case a.Ro.UPLOAD:
            return {
                Icon: s.rG2,
                className: o()(c.icon, c.upload)
            };
        case a.Ro.VANITY:
            return {
                Icon: s.r7p,
                className: o()(c.icon, c.vanity)
            };
        case a.Ro.STREAM:
            return {
                Icon: s.hGI,
                className: o()(c.icon, c.stream)
            };
        case a.Ro.STICKER:
            return {
                Icon: s.SlE,
                className: o()(c.icon, c.sticker)
            };
        case a.Ro.CUSTOM_ROLE_ICON:
            return {
                Icon: s.lZ8,
                className: o()(c.icon, c.customRoleIcon)
            };
        case a.Ro.STAGE_VIDEO:
            return {
                Icon: s.ewx,
                className: o()(c.icon, c.stage)
            };
        case a.Ro.SOUNDBOARD:
            return {
                Icon: s.KY1,
                className: o()(c.icon, c.soundboard)
            };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
