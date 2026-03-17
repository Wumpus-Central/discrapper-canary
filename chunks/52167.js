n.d(t, { d: () => U });
var i = n(417597),
    s = n(582754),
    l = n(736653),
    a = n(780964),
    r = n(287809),
    o = n(255438),
    d = n(927578),
    c = n(788868);
n(652215);
var u = n(355097),
    _ = n(985018),
    m = n(420643),
    g = n(755165),
    A = n(542838),
    h = n(9523),
    x = n(416999),
    p = n(338832),
    T = n(252373),
    E = n(522799),
    S = n(795710),
    C = n(484813),
    f = n(1748),
    b = n(772473),
    N = n(64514),
    I = n(121818),
    v = n(536851),
    j = n(992186),
    y = n(629139),
    R = n(753563),
    O = n(584378),
    P = n(747918),
    D = n(330290),
    L = n(252261),
    G = n(106731);
let M = (e, t, n) => ((0, s.Mw)(e) ? t : n),
    U = (e) => {
        let { styles: t } = e,
            s = (0, l.Ay)(),
            U = (0, i.bG)([r.default], () => {
                let e = r.default.getCurrentUser();
                return d.Ay.canUsePremiumProfileCustomization(e);
            }),
            k = (0, o.Xq)(c.f3 / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: _.intl.string(_.t.SS87rQ),
                description: _.intl.string(_.t.oD6CRr),
                imageSource: A,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: _.intl.string(_.t["5cYMu0"]),
                description: _.intl.string(_.t.vxk9va),
                imageSource: M(s, m, g),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: _.intl.string(_.t["/xvEMy"]),
                description: _.intl.string(_.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: v,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: _.intl.string(_.t.OuItFi),
                description: _.intl.string(_.t.mPyrE6),
                imageSource: j,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: _.intl.string(_.t["R2IV/Q"]),
                description: _.intl.string(_.t.R5Xag2),
                imageSource: y,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: _.intl.string(_.t.lKDhhJ),
                description: (e) => {
                    let t = () => {
                        {
                            let { openUserSettings: t } = n(840065),
                                { default: i } = n(955838);
                            i.setState({ scrollPosition: u._F.TRY_IT_OUT }),
                                t(a.X.PROFILE_PANEL, { analyticsLocations: e });
                        }
                    };
                    return U
                        ? _.intl.format(_.t.aj1pfZ, { onCheckItOutClick: t })
                        : _.intl.format(_.t.d2oYS8, { onTryItOutClick: t });
                },
                imageSource: x,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: _.intl.string(_.t.BUScid),
                description: _.intl.string(_.t.vN6XpQ),
                imageSource: M(s, R, O),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: M(s, h, P),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: M(s, p, T),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: _.intl.string(_.t["lGcW+c"]),
                description: _.intl.string(_.t["/fDyO+"]),
                imageSource: M(s, E, S),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: _.intl.string(_.t["1c+xwT"]),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: M(s, C, D),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: M(s, C, D),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: M(s, C, D),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: _.intl.string(_.t.RSXQYO),
                description: _.intl.string(_.t.ymCPxp),
                imageSource: L,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: _.intl.string(_.t["uZt5q/"]),
                description: _.intl.string(_.t.ZK3ZoX),
                imageSource: M(s, f, b),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: _.intl.formatToPlainString(_.t.jqhAdL, { premiumMaxSize: k }),
                description: _.intl.formatToPlainString(_.t["HI+cfm"], { premiumMaxSize: k }),
                imageSource: G,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: _.intl.string(_.t.NaGpTf),
                description: _.intl.string(_.t["A8O/Qw"]),
                imageSource: M(s, N, I),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
