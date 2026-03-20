n.d(t, { d: () => k });
var i = n(417597),
    s = n(582754),
    l = n(736653),
    a = n(507553),
    r = n(780964),
    o = n(287809),
    d = n(255438),
    c = n(927578),
    u = n(788868);
n(652215);
var _ = n(355097),
    m = n(985018),
    g = n(420643),
    A = n(755165),
    x = n(542838),
    h = n(9523),
    p = n(416999),
    T = n(338832),
    E = n(252373),
    S = n(522799),
    f = n(795710),
    C = n(484813),
    b = n(1748),
    N = n(772473),
    I = n(64514),
    v = n(121818),
    j = n(536851),
    y = n(992186),
    R = n(629139),
    O = n(753563),
    L = n(584378),
    D = n(747918),
    P = n(330290),
    M = n(252261),
    G = n(106731);
let U = (e, t, n) => ((0, s.Mw)(e) ? t : n),
    k = (e) => {
        let { styles: t } = e,
            s = (0, l.Ay)(),
            k = (0, i.bG)([o.default], () => {
                let e = o.default.getCurrentUser();
                return c.Ay.canUsePremiumProfileCustomization(e);
            }),
            V = (0, d.Xq)(u.f3 / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: m.intl.string(m.t.SS87rQ),
                description: m.intl.string(m.t.oD6CRr),
                imageSource: x,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: m.intl.string(m.t["5cYMu0"]),
                description: m.intl.string(m.t.vxk9va),
                imageSource: U(s, g, A),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: m.intl.string(m.t["/xvEMy"]),
                description: m.intl.string(m.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: j,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: m.intl.string(m.t.OuItFi),
                description: m.intl.string(m.t.mPyrE6),
                imageSource: y,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: m.intl.string(m.t["R2IV/Q"]),
                description: m.intl.string(m.t.R5Xag2),
                imageSource: R,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: m.intl.string(m.t.lKDhhJ),
                description: (e) => {
                    let t = () => {
                        {
                            let { openUserSettings: t } = n(840065);
                            a.A.setState({ scrollPosition: _._F.TRY_IT_OUT }),
                                t(r.X.PROFILE_PANEL, { analyticsLocations: e });
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
                imageSource: U(s, O, L),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: m.intl.string(m.t.Bv8Pfk),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: U(s, h, D),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: m.intl.string(m.t.Bv8Pfk),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: U(s, T, E),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: m.intl.string(m.t["lGcW+c"]),
                description: m.intl.string(m.t["/fDyO+"]),
                imageSource: U(s, S, f),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: m.intl.string(m.t["1c+xwT"]),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, C, P),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: m.intl.string(m.t.tzdIwI),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, C, P),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: m.intl.string(m.t.tzdIwI),
                description: m.intl.string(m.t.hJG8ZN),
                imageSource: U(s, C, P),
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
                imageSource: U(s, b, N),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: m.intl.formatToPlainString(m.t.jqhAdL, { premiumMaxSize: V }),
                description: m.intl.formatToPlainString(m.t["HI+cfm"], { premiumMaxSize: V }),
                imageSource: G,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: m.intl.string(m.t.NaGpTf),
                description: m.intl.string(m.t["A8O/Qw"]),
                imageSource: U(s, I, v),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
