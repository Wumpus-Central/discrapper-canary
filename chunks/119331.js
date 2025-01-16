n.d(t, {
    t: function () {
        return o;
    }
}),
    n(411104);
var i = n(120356),
    r = n.n(i),
    l = n(481060),
    s = n(267642),
    a = n(159426);
function o(e, t) {
    if (t)
        return {
            icon: l.CheckmarkLargeIcon,
            className: a.unlocked
        };
    switch (e) {
        case s.Ro.EMOJI:
            return {
                icon: l.ReactionIcon,
                className: r()(a.icon, a.emoji)
            };
        case s.Ro.AUDIO:
            return {
                icon: l.HeadphonesIcon,
                className: r()(a.icon, a.audio)
            };
        case s.Ro.ANIMATED:
            return {
                icon: l.GifIcon,
                className: r()(a.icon, a.animated)
            };
        case s.Ro.CUSTOMIZATION:
            return {
                icon: l.ImagesIcon,
                className: r()(a.icon, a.customization)
            };
        case s.Ro.UPLOAD:
            return {
                icon: l.UploadIcon,
                className: r()(a.icon, a.upload)
            };
        case s.Ro.VANITY:
            return {
                icon: l.StarIcon,
                className: r()(a.icon, a.vanity)
            };
        case s.Ro.STREAM:
            return {
                icon: l.ScreenArrowIcon,
                className: r()(a.icon, a.stream)
            };
        case s.Ro.STICKER:
            return {
                icon: l.StickerIcon,
                className: r()(a.icon, a.sticker)
            };
        case s.Ro.CUSTOM_ROLE_ICON:
            return {
                icon: l.ShieldUserIcon,
                className: r()(a.icon, a.customRoleIcon)
            };
        case s.Ro.STAGE_VIDEO:
            return {
                icon: l.StageIcon,
                className: r()(a.icon, a.stage)
            };
        case s.Ro.SOUNDBOARD:
            return {
                icon: l.SoundboardIcon,
                className: r()(a.icon, a.soundboard)
            };
    }
    throw Error('Unexpected perk icon '.concat(e));
}
