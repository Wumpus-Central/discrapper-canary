n.d(t, { t: () => o }), n(415506);
var r = n(120356),
    i = n.n(r),
    l = n(481060),
    a = n(267642),
    s = n(829317);
function o(e, t) {
    if (t)
        return {
            Icon: l.dz2,
            className: s.unlocked,
        };
    switch (e) {
        case a.Ro.EMOJI:
            return {
                Icon: l.EO4,
                className: i()(s.icon, s.emoji),
            };
        case a.Ro.AUDIO:
            return {
                Icon: l.VWR,
                className: i()(s.icon, s.audio),
            };
        case a.Ro.ANIMATED:
            return {
                Icon: l.OUq,
                className: i()(s.icon, s.animated),
            };
        case a.Ro.CUSTOMIZATION:
            return {
                Icon: l.Ka2,
                className: i()(s.icon, s.customization),
            };
        case a.Ro.UPLOAD:
            return {
                Icon: l.rG2,
                className: i()(s.icon, s.upload),
            };
        case a.Ro.VANITY:
            return {
                Icon: l.r7p,
                className: i()(s.icon, s.vanity),
            };
        case a.Ro.STREAM:
            return {
                Icon: l.hGI,
                className: i()(s.icon, s.stream),
            };
        case a.Ro.STICKER:
            return {
                Icon: l.SlE,
                className: i()(s.icon, s.sticker),
            };
        case a.Ro.CUSTOM_ROLE_ICON:
            return {
                Icon: l.lZ8,
                className: i()(s.icon, s.customRoleIcon),
            };
        case a.Ro.STAGE_VIDEO:
            return {
                Icon: l.ewx,
                className: i()(s.icon, s.stage),
            };
        case a.Ro.SOUNDBOARD:
            return {
                Icon: l.KY1,
                className: i()(s.icon, s.soundboard),
            };
    }
    throw Error("Unexpected perk icon ".concat(e));
}
