n.d(t, {
    d: () => G,
});
var r = n(417597),
    i = n(582754),
    l = n(736653),
    s = n(780964),
    a = n(287809),
    o = n(255438),
    c = n(927578),
    d = n(788868),
    u = n(652215),
    _ = n(355097),
    p = n(985018),
    m = n(420643),
    g = n(755165),
    A = n(542838),
    f = n(9523),
    h = n(416999),
    b = n(338832),
    E = n(252373),
    x = n(522799),
    O = n(795710),
    C = n(484813),
    I = n(1748),
    T = n(772473),
    S = n(64514),
    j = n(121818),
    v = n(536851),
    N = n(992186),
    y = n(629139),
    P = n(753563),
    R = n(584378),
    D = n(747918),
    w = n(330290),
    L = n(252261),
    M = n(106731);
let U = (e, t, n) => ((0, i.Mw)(e) ? t : n),
    G = (e) => {
        let { styles: t } = e,
            i = (0, l.Ay)(),
            G = (0, r.bG)([a.default], () => {
                let e = a.default.getCurrentUser();
                return c.Ay.canUsePremiumProfileCustomization(e);
            }),
            k = (0, o.Xq)(d.f3 / 1024, {
                useKibibytes: !0,
            });
        return {
            badge: {
                title: p.intl.string(p.t.SS87rQ),
                description: p.intl.string(p.t.oD6CRr),
                imageSource: A,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: p.intl.string(p.t["5cYMu0"]),
                description: p.intl.string(p.t.vxk9va),
                imageSource: U(i, m, g),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: p.intl.string(p.t["/xvEMy"]),
                description: p.intl.string(p.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: v,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: p.intl.string(p.t.OuItFi),
                description: p.intl.string(p.t.mPyrE6),
                imageSource: N,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: p.intl.string(p.t["R2IV/Q"]),
                description: p.intl.string(p.t.R5Xag2),
                imageSource: y,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: p.intl.string(p.t.lKDhhJ),
                description: (e) => {
                    let t = () => {
                        {
                            let { openUserSettings: t } = n(840065);
                            t(s.X.PROFILE_PANEL, {
                                section: u.nc_.PROFILE_CUSTOMIZATION,
                                scrollPosition: _._F.TRY_IT_OUT,
                                analyticsLocations: e,
                            });
                        }
                    };
                    return G
                        ? p.intl.format(p.t.aj1pfZ, {
                              onCheckItOutClick: t,
                          })
                        : p.intl.format(p.t.d2oYS8, {
                              onTryItOutClick: t,
                          });
                },
                imageSource: h,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: p.intl.string(p.t.BUScid),
                description: p.intl.string(p.t.vN6XpQ),
                imageSource: U(i, P, R),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: p.intl.string(p.t.Bv8Pfk),
                description: p.intl.string(p.t.JMfaTU),
                imageSource: U(i, f, D),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: p.intl.string(p.t.Bv8Pfk),
                description: p.intl.string(p.t.JMfaTU),
                imageSource: U(i, b, E),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: p.intl.string(p.t["lGcW+c"]),
                description: p.intl.string(p.t["/fDyO+"]),
                imageSource: U(i, x, O),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: p.intl.string(p.t["1c+xwT"]),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: U(i, C, w),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: p.intl.string(p.t.tzdIwI),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: U(i, C, w),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: p.intl.string(p.t.tzdIwI),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: U(i, C, w),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: p.intl.string(p.t.RSXQYO),
                description: p.intl.string(p.t.ymCPxp),
                imageSource: L,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: p.intl.string(p.t["uZt5q/"]),
                description: p.intl.string(p.t.ZK3ZoX),
                imageSource: U(i, I, T),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: p.intl.formatToPlainString(p.t.jqhAdL, {
                    premiumMaxSize: k,
                }),
                description: p.intl.formatToPlainString(p.t["HI+cfm"], {
                    premiumMaxSize: k,
                }),
                imageSource: M,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: p.intl.string(p.t.NaGpTf),
                description: p.intl.string(p.t["A8O/Qw"]),
                imageSource: U(i, S, j),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
