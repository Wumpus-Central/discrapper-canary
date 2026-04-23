s.d(t, { d: () => L });
var r = s(417597),
    a = s(462887),
    i = s(736653),
    n = s(507553),
    l = s(591179),
    o = s(780964),
    c = s(287809),
    d = s(255438),
    m = s(927578),
    u = s(788868);
s(652215);
var _ = s(355097),
    x = s(985018),
    p = s(420643),
    g = s(755165),
    h = s(542838),
    f = s(9523),
    C = s(416999),
    b = s(338832),
    j = s(252373),
    A = s(522799),
    N = s(795710),
    I = s(484813),
    T = s(1748),
    v = s(772473),
    E = s(64514),
    R = s(121818),
    M = s(536851),
    S = s(992186),
    y = s(629139),
    P = s(753563),
    k = s(584378),
    B = s(747918),
    w = s(330290),
    G = s(252261),
    O = s(106731);
let D = (e, t, s) => ((0, a.M)(e) ? t : s),
    L = (e) => {
        let { styles: t } = e,
            a = (0, i.Ay)(),
            L = (0, l.X)("usePerkCards"),
            H = (0, r.bG)([c.default], () => {
                let e = c.default.getCurrentUser();
                return m.Ay.canUsePremiumProfileCustomization(e);
            }),
            U = (0, d.Xq)(u.f3 / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: x.intl.string(x.t.SS87rQ),
                description: x.intl.string(x.t.oD6CRr),
                imageSource: h,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: x.intl.string(x.t["5cYMu0"]),
                description: x.intl.string(x.t.vxk9va),
                imageSource: D(a, p, g),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: x.intl.string(x.t["/xvEMy"]),
                description: x.intl.string(x.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: M,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: x.intl.string(x.t.OuItFi),
                description: x.intl.string(x.t.mPyrE6),
                imageSource: S,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: x.intl.string(x.t["R2IV/Q"]),
                description: x.intl.string(x.t.R5Xag2),
                imageSource: y,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: x.intl.string(x.t.lKDhhJ),
                description: (e) => {
                    if (L)
                        return H
                            ? x.intl.formatToPlainString(x.t.aj1pfZ, { onCheckItOutClick: () => {} })
                            : x.intl.formatToPlainString(x.t.d2oYS8, { onTryItOutClick: () => {} });
                    let t = () => {
                        {
                            let { openUserSettings: t } = s(858897);
                            n.A.setState({ scrollPosition: _._F.TRY_IT_OUT }),
                                t(o.X.PROFILE_PANEL, { analyticsLocations: e });
                        }
                    };
                    return H
                        ? x.intl.format(x.t.aj1pfZ, { onCheckItOutClick: t })
                        : x.intl.format(x.t.d2oYS8, { onTryItOutClick: t });
                },
                imageSource: C,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: x.intl.string(x.t.BUScid),
                description: x.intl.string(x.t.vN6XpQ),
                imageSource: D(a, P, k),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: x.intl.string(x.t.Bv8Pfk),
                description: x.intl.string(x.t.JMfaTU),
                imageSource: D(a, f, B),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: x.intl.string(x.t.Bv8Pfk),
                description: x.intl.string(x.t.JMfaTU),
                imageSource: D(a, b, j),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: x.intl.string(x.t["lGcW+c"]),
                description: x.intl.string(x.t["/fDyO+"]),
                imageSource: D(a, A, N),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: x.intl.string(x.t["1c+xwT"]),
                description: x.intl.string(x.t.hJG8ZN),
                imageSource: D(a, I, w),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: x.intl.string(x.t.tzdIwI),
                description: x.intl.string(x.t.hJG8ZN),
                imageSource: D(a, I, w),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: x.intl.string(x.t.tzdIwI),
                description: x.intl.string(x.t.hJG8ZN),
                imageSource: D(a, I, w),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: x.intl.string(x.t.RSXQYO),
                description: x.intl.string(x.t.ymCPxp),
                imageSource: G,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: x.intl.string(x.t["uZt5q/"]),
                description: x.intl.string(x.t.ZK3ZoX),
                imageSource: D(a, T, v),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: x.intl.formatToPlainString(x.t.jqhAdL, { premiumMaxSize: U }),
                description: x.intl.formatToPlainString(x.t["HI+cfm"], { premiumMaxSize: U }),
                imageSource: O,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: x.intl.string(x.t.NaGpTf),
                description: x.intl.string(x.t["A8O/Qw"]),
                imageSource: D(a, E, R),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
