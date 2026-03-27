n.d(t, { d: () => w });
var i = n(417597),
    s = n(582754),
    l = n(736653),
    a = n(507553),
    r = n(591179),
    o = n(780964),
    d = n(287809),
    c = n(255438),
    u = n(927578),
    m = n(788868);
n(652215);
var _ = n(355097),
    g = n(985018),
    x = n(420643),
    A = n(755165),
    h = n(542838),
    p = n(9523),
    f = n(416999),
    T = n(338832),
    S = n(252373),
    E = n(522799),
    b = n(795710),
    C = n(484813),
    v = n(1748),
    N = n(772473),
    I = n(64514),
    j = n(121818),
    y = n(536851),
    O = n(992186),
    R = n(629139),
    L = n(753563),
    P = n(584378),
    D = n(747918),
    G = n(330290),
    M = n(252261),
    U = n(106731);
let k = (e, t, n) => ((0, s.Mw)(e) ? t : n),
    w = (e) => {
        let { styles: t } = e,
            s = (0, l.Ay)(),
            w = (0, r.X)("usePerkCards"),
            V = (0, i.bG)([d.default], () => {
                let e = d.default.getCurrentUser();
                return u.Ay.canUsePremiumProfileCustomization(e);
            }),
            B = (0, c.Xq)(m.f3 / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: g.intl.string(g.t.SS87rQ),
                description: g.intl.string(g.t.oD6CRr),
                imageSource: h,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: g.intl.string(g.t["5cYMu0"]),
                description: g.intl.string(g.t.vxk9va),
                imageSource: k(s, x, A),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: g.intl.string(g.t["/xvEMy"]),
                description: g.intl.string(g.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: y,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: g.intl.string(g.t.OuItFi),
                description: g.intl.string(g.t.mPyrE6),
                imageSource: O,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: g.intl.string(g.t["R2IV/Q"]),
                description: g.intl.string(g.t.R5Xag2),
                imageSource: R,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: g.intl.string(g.t.lKDhhJ),
                description: (e) => {
                    if (w)
                        return V
                            ? g.intl.formatToPlainString(g.t.aj1pfZ, { onCheckItOutClick: () => {} })
                            : g.intl.formatToPlainString(g.t.d2oYS8, { onTryItOutClick: () => {} });
                    let t = () => {
                        {
                            let { openUserSettings: t } = n(840065);
                            a.A.setState({ scrollPosition: _._F.TRY_IT_OUT }),
                                t(o.X.PROFILE_PANEL, { analyticsLocations: e });
                        }
                    };
                    return V
                        ? g.intl.format(g.t.aj1pfZ, { onCheckItOutClick: t })
                        : g.intl.format(g.t.d2oYS8, { onTryItOutClick: t });
                },
                imageSource: f,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: g.intl.string(g.t.BUScid),
                description: g.intl.string(g.t.vN6XpQ),
                imageSource: k(s, L, P),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: g.intl.string(g.t.Bv8Pfk),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: k(s, p, D),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: g.intl.string(g.t.Bv8Pfk),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: k(s, T, S),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: g.intl.string(g.t["lGcW+c"]),
                description: g.intl.string(g.t["/fDyO+"]),
                imageSource: k(s, E, b),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: g.intl.string(g.t["1c+xwT"]),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: k(s, C, G),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: g.intl.string(g.t.tzdIwI),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: k(s, C, G),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: g.intl.string(g.t.tzdIwI),
                description: g.intl.string(g.t.hJG8ZN),
                imageSource: k(s, C, G),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: g.intl.string(g.t.RSXQYO),
                description: g.intl.string(g.t.ymCPxp),
                imageSource: M,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: g.intl.string(g.t["uZt5q/"]),
                description: g.intl.string(g.t.ZK3ZoX),
                imageSource: k(s, v, N),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: g.intl.formatToPlainString(g.t.jqhAdL, { premiumMaxSize: B }),
                description: g.intl.formatToPlainString(g.t["HI+cfm"], { premiumMaxSize: B }),
                imageSource: U,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: g.intl.string(g.t.NaGpTf),
                description: g.intl.string(g.t["A8O/Qw"]),
                imageSource: k(s, I, j),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
