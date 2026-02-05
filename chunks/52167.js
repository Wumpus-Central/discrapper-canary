n.d(t, { d: () => k });
var i = n(417597),
    s = n(582754),
    r = n(736653),
    a = n(780964),
    l = n(287809),
    o = n(255438),
    c = n(927578),
    d = n(788868),
    u = n(652215),
    _ = n(355097),
    m = n(985018),
    A = n(420643),
    g = n(755165),
    E = n(542838),
    h = n(9523),
    p = n(416999),
    C = n(338832),
    x = n(252373),
    T = n(522799),
    I = n(795710),
    S = n(484813),
    f = n(1748),
    N = n(772473),
    b = n(64514),
    R = n(121818),
    v = n(536851),
    O = n(992186),
    j = n(629139),
    P = n(753563),
    y = n(584378),
    L = n(747918),
    D = n(330290),
    M = n(252261),
    G = n(106731);
let U = (e, t, n) => ((0, s.Mw)(e) ? t : n),
    k = (e) => {
        let { styles: t } = e,
            s = (0, r.Ay)(),
            k = (0, i.bG)([l.default], () => {
                let e = l.default.getCurrentUser();
                return c.Ay.canUsePremiumProfileCustomization(e);
            }),
            B = (0, o.Xq)(d.f3 / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: m.intl.string(m.t.SS87rQ),
                description: m.intl.string(m.t.oD6CRr),
                imageSource: E,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: m.intl.string(m.t["5cYMu0"]),
                description: m.intl.string(m.t.vxk9va),
                imageSource: U(s, A, g),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: m.intl.string(m.t["/xvEMy"]),
                description: m.intl.string(m.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: v,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: m.intl.string(m.t.OuItFi),
                description: m.intl.string(m.t.mPyrE6),
                imageSource: O,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: m.intl.string(m.t["R2IV/Q"]),
                description: m.intl.string(m.t.R5Xag2),
                imageSource: j,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: m.intl.string(m.t.lKDhhJ),
                description: (e) => {
                    let t = () => {
                        {
                            let { openUserSettings: t } = n(840065);
                            t(a.X.PROFILE_PANEL, {
                                section: u.nc_.PROFILE_CUSTOMIZATION,
                                scrollPosition: _._F.TRY_IT_OUT,
                                analyticsLocations: e,
                            });
                        }
                    };
                    return k
                        ? m.intl.format(m.t.aj1pfZ, { onCheckItOutClick: t })
                        : m.intl.format(m.t.d2oYS8, { onTryItOutClick: t });
                },
                imageSource: p,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: m.intl.string(m.t.BUScid),
                description: m.intl.string(m.t.vN6XpQ),
                imageSource: U(s, P, y),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: m.intl.string(m.t.Bv8Pfk),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: U(s, h, L),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: m.intl.string(m.t.Bv8Pfk),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: U(s, C, x),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: m.intl.string(m.t["lGcW+c"]),
                description: m.intl.string(m.t["/fDyO+"]),
                imageSource: U(s, T, I),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: m.intl.string(m.t["1c+xwT"]),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, S, D),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: m.intl.string(m.t.tzdIwI),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, S, D),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: m.intl.string(m.t.tzdIwI),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, S, D),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: m.intl.string(m.t.RSXQYO),
                description: m.intl.string(m.t.ymCPxp),
                imageSource: M,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: m.intl.string(m.t["uZt5q/"]),
                description: m.intl.string(m.t.ZK3ZoX),
                imageSource: U(s, f, N),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: m.intl.formatToPlainString(m.t.jqhAdL, { premiumMaxSize: B }),
                description: m.intl.formatToPlainString(m.t["HI+cfm"], { premiumMaxSize: B }),
                imageSource: G,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: m.intl.string(m.t.NaGpTf),
                description: m.intl.string(m.t["A8O/Qw"]),
                imageSource: U(s, b, R),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
