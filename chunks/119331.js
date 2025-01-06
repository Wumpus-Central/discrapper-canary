n.d(t, {
    t: function () {
        return o;
    }
}),
    n(411104);
var i = n(120356),
    r = n.n(i),
    l = n(481060),
    a = n(267642),
    s = n(159426);
function o(e, t) {
    if (t)
        return {
            icon: l.CheckmarkLargeIcon,
            className: s.unlocked
        };
    switch (e) {
        case a.Ro.EMOJI:
            return {
                icon: l.ReactionIcon,
                className: r()(s.icon, s.emoji)
            };
        case a.Ro.AUDIO:
            return {
                icon: l.HeadphonesIcon,
                className: r()(s.icon, s.audio)
            };
        case a.Ro.ANIMATED:
            return {
                icon: l.GifIcon,
                className: r()(s.icon, s.animated)
            };
        case a.Ro.CUSTOMIZATION:
            return {
                icon: l.ImagesIcon,
                className: r()(s.icon, s.customization)
            };
        case a.Ro.UPLOAD:
            return {
                icon: l.UploadIcon,
                className: r()(s.icon, s.upload)
            };
        case a.Ro.VANITY:
            return {
                icon: l.StarIcon,
                className: r()(s.icon, s.vanity)
            };
        case a.Ro.STREAM:
            return {
                icon: l.ScreenArrowIcon,
                className: r()(s.icon, s.stream)
            };
        case a.Ro.STICKER:
            return {
                icon: l.StickerIcon,
                className: r()(s.icon, s.sticker)
            };
        case a.Ro.CUSTOM_ROLE_ICON:
            return {
                icon: l.ShieldUserIcon,
                className: r()(s.icon, s.customRoleIcon)
            };
        case a.Ro.STAGE_VIDEO:
            return {
                icon: l.StageIcon,
                className: r()(s.icon, s.stage)
            };
        case a.Ro.SOUNDBOARD:
            return {
                icon: l.SoundboardIcon,
                className: r()(s.icon, s.soundboard)
            };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
