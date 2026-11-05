var n = a(503698),
    s = a.n(n),
    r = a(933832),
    o = a(460905),
    I = a(597601),
    t = a(391242),
    k = a(477262),
    T = a(95635),
    u = a(27232),
    N = a(183623),
    l = a(797285),
    m = a(957485),
    S = a(451394),
    d = a(7807),
    i = a(682901),
    K = a(339578);
a.d(
    e,
    {},
    {
        a: function (c, e) {
            if (e) return { Icon: r.CheckmarkLargeIcon, className: K.YR };
            switch (c) {
                case i.TP.EMOJI:
                    return { Icon: o.ReactionIcon, className: s()(K.Kk, K.Zg) };
                case i.TP.AUDIO:
                    return { Icon: I.HeadphonesIcon, className: s()(K.Kk, K.z7) };
                case i.TP.ANIMATED:
                    return { Icon: t.GifIcon, className: s()(K.Kk, K.CS) };
                case i.TP.CUSTOMIZATION:
                    return { Icon: k.ImagesIcon, className: s()(K.Kk, K.wk) };
                case i.TP.UPLOAD:
                    return { Icon: T.UploadIcon, className: s()(K.Kk, K.Se) };
                case i.TP.VANITY:
                    return { Icon: u.StarIcon, className: s()(K.Kk, K.w4) };
                case i.TP.STREAM:
                    return { Icon: N.ScreenArrowIcon, className: s()(K.Kk, K.Td) };
                case i.TP.STICKER:
                    return { Icon: l.StickerIcon, className: s()(K.Kk, K.yI) };
                case i.TP.CUSTOM_ROLE_ICON:
                    return { Icon: m.ShieldUserIcon, className: s()(K.Kk, K.ru) };
                case i.TP.STAGE_VIDEO:
                    return { Icon: S.StageIcon, className: s()(K.Kk, K.dw) };
                case i.TP.SOUNDBOARD:
                    return { Icon: d.SoundboardIcon, className: s()(K.Kk, K.CC) };
            }
            throw Error(`Unexpected perk icon ${c}`);
        },
    },
);
