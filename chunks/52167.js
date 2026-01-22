n.d(t, { d: () => U });
var r = n(417597),
    i = n(582754),
    a = n(736653),
    s = n(780964),
    o = n(287809),
    l = n(255438),
    c = n(927578),
    u = n(788868),
    d = n(652215),
    f = n(355097),
    p = n(985018),
    _ = n(420643),
    h = n(755165),
    m = n(542838),
    g = n(9523),
    E = n(416999),
    b = n(338832),
    y = n(252373),
    O = n(522799),
    A = n(795710),
    v = n(484813),
    S = n(1748),
    I = n(772473),
    T = n(64514),
    C = n(121818),
    N = n(536851),
    R = n(992186),
    w = n(629139),
    P = n(753563),
    D = n(584378),
    x = n(747918),
    L = n(330290),
    j = n(252261),
    M = n(106731);
let k = (e, t, n) => ((0, i.Mw)(e) ? t : n),
    U = (e) => {
        let { styles: t } = e,
            i = (0, a.Ay)(),
            U = (0, r.bG)([o.default], () => {
                let e = o.default.getCurrentUser();
                return c.Ay.canUsePremiumProfileCustomization(e);
            }),
            G = (e) => {
                let t = () => {
                    {
                        let { openUserSettings: t } = n(840065);
                        t(s.X.PROFILE_PANEL, {
                            section: d.nc_.PROFILE_CUSTOMIZATION,
                            scrollPosition: f._F.TRY_IT_OUT,
                            analyticsLocations: e,
                        });
                    }
                };
                return U
                    ? p.intl.format(p.t.aj1pfZ, { onCheckItOutClick: t })
                    : p.intl.format(p.t.d2oYS8, { onTryItOutClick: t });
            },
            V = (0, l.Xq)(u.f3 / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: p.intl.string(p.t.SS87rQ),
                description: p.intl.string(p.t.oD6CRr),
                imageSource: m,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: p.intl.string(p.t["5cYMu0"]),
                description: p.intl.string(p.t.vxk9va),
                imageSource: k(i, _, h),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: p.intl.string(p.t["/xvEMy"]),
                description: p.intl.string(p.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: N,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: p.intl.string(p.t.OuItFi),
                description: p.intl.string(p.t.mPyrE6),
                imageSource: R,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: p.intl.string(p.t["R2IV/Q"]),
                description: p.intl.string(p.t.R5Xag2),
                imageSource: w,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: p.intl.string(p.t.lKDhhJ),
                description: G,
                imageSource: E,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: p.intl.string(p.t.BUScid),
                description: p.intl.string(p.t.vN6XpQ),
                imageSource: k(i, P, D),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: p.intl.string(p.t.Bv8Pfk),
                description: p.intl.string(p.t.JMfaTU),
                imageSource: k(i, g, x),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: p.intl.string(p.t.Bv8Pfk),
                description: p.intl.string(p.t.JMfaTU),
                imageSource: k(i, b, y),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: p.intl.string(p.t["lGcW+c"]),
                description: p.intl.string(p.t["/fDyO+"]),
                imageSource: k(i, O, A),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: p.intl.string(p.t["1c+xwT"]),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: k(i, v, L),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: p.intl.string(p.t.tzdIwI),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: k(i, v, L),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: p.intl.string(p.t.tzdIwI),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: k(i, v, L),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: p.intl.string(p.t.RSXQYO),
                description: p.intl.string(p.t.ymCPxp),
                imageSource: j,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: p.intl.string(p.t["uZt5q/"]),
                description: p.intl.string(p.t.ZK3ZoX),
                imageSource: k(i, S, I),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: p.intl.formatToPlainString(p.t.jqhAdL, { premiumMaxSize: V }),
                description: p.intl.formatToPlainString(p.t["HI+cfm"], { premiumMaxSize: V }),
                imageSource: M,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: p.intl.string(p.t.NaGpTf),
                description: p.intl.string(p.t["A8O/Qw"]),
                imageSource: k(i, T, C),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
