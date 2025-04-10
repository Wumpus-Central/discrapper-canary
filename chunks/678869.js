n.d(t, { Z: () => x }), n(804061), n(704826), n(35282), n(539854);
var r = n(200651),
    i = n(192379),
    o = n(423875),
    a = n(442837),
    s = n(902704),
    l = n(481060),
    c = n(952164),
    u = n(768419),
    d = n(424678),
    f = n(239470),
    _ = n(894344),
    p = n(314897),
    h = n(908841),
    m = n(5192),
    g = n(379357),
    E = n(561308),
    b = n(319604),
    y = n(31074),
    v = n(206295),
    O = n(551228),
    I = n(591853),
    S = n(371991),
    T = n(410441),
    N = n(981631),
    A = n(616922),
    C = n(388032),
    P = n(292199),
    R = n(610220);
function w(e, t) {
    return C.NW.formatToPlainString(C.t.h2yWWV, {
        username: t.username,
        activity: e
    });
}
let D = (e, t, n) => {
    let { artist: r, media: i } = e,
        o = C.t['6iNxrq'],
        a = m.ZP.getName(t.guild_id, t.id, n);
    return C.NW.formatToMarkdownString(o, {
        artist: r,
        userName: a,
        media: i
    }).replaceAll('*', '');
};
function L(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: o } = (0, S.tS)(),
        { durationTimestamp: a, seekBarStyles: s } = i.useMemo(() => {
            var e;
            let { start: n, end: r } = null != (e = t.timestamps) ? e : {};
            if (null == n || null == r) return {};
            let i = Math.min(r, o),
                a = r - n,
                s = Math.floor((Math.max(i - n, 0) / a) * 100);
            return {
                seekBarStyles: { width: ''.concat(s, '%') },
                durationTimestamp: (0, E.T_)({ start: 0 }, a)
            };
        }, [t, o]);
    return null == s
        ? null
        : (0, r.jsxs)('div', {
              className: P.listeningTimeline,
              children: [
                  (0, r.jsx)(S.x3, { entry: n }),
                  (0, r.jsx)('div', {
                      className: P.seekBarContainer,
                      children: (0, r.jsx)('div', {
                          className: P.seekBarFill,
                          style: s
                      })
                  }),
                  (0, r.jsx)(l.Text, {
                      className: P.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: a
                  })
              ]
          });
}
function x(e) {
    var t;
    let n,
        m,
        S,
        { channel: P, entry: x, closePopout: M, onReaction: k, onVoiceChannelPreview: j } = e,
        { largeImage: U } = (0, g.rv)({ entry: x }),
        { activity: G, currentEntry: B, artist: V, title: F, user: Z } = (0, O.pi)(x),
        { primaryColor: H, secondaryColor: W } = (0, v.Z)(null == U ? void 0 : U.src),
        Y = (0, y.Z)(N.ABu.SPOTIFY),
        K = (0, a.e7)([u.Z, p.default], () => ((null == G ? void 0 : G.type) === N.IIU.LISTENING && null != Z ? (0, f.Z)(u.Z, p.default, Z, G) : void 0), [G, Z], s.Z),
        z = i.useCallback(() => {
            var e;
            if (null == P || null == Z) return;
            let t = null == (e = G.timestamps) ? void 0 : e.start,
                n = (0, E.T_)(null != t ? { start: t } : x, Date.now());
            return (0, b.CR)({
                user: Z,
                channel: P,
                mediaImageSrc: null == U ? void 0 : U.src,
                artist: V,
                description: D(
                    {
                        artist: V,
                        media: F
                    },
                    P,
                    Z
                ),
                colors: [H, W],
                badges: (0, b.jE)({ timestamp: n })
            });
        }, [G, V, P, x, null == U ? void 0 : U.src, H, W, F, Z]);
    if (null == G || null == B) return null;
    let q = V,
        Q = [];
    if (B.media.provider === o.p.SPOTIFY) {
        (m = () => {
            (0, c.aG)(G);
        }),
            (S = () => {
                (0, c.Z5)(G, Z.id);
            }),
            (n = () => {
                var e;
                null != (e = null == Y ? void 0 : Y()) || (0, c.aG)(G);
            });
        let e = (e) => {
            (0, c.d$)(G, Z.id, e);
        };
        if (
            ((q = (0, r.jsx)(d.Z, {
                artists: V,
                canOpen: null != G.sync_id,
                linkClassName: R.popoutTextSecondary,
                onOpenSpotifyArtist: e
            })),
            (null == K ? void 0 : K.syncDisabled) === !1)
        ) {
            let e = () => {
                (0, _.Z)(K, A.kG.USER_ACTIVITY_SYNC), M();
            };
            Q.push(
                (0, r.jsx)(
                    I.Ll,
                    {
                        onClick: e,
                        IconComponent: l.iOO,
                        children: C.NW.string(C.t.eU3inJ)
                    },
                    'listen-along'
                )
            );
        }
    }
    let X = (0, r.jsx)(I.wG, {
        onClickThumbnail: S,
        channel: P,
        entry: x,
        headerIcons:
            B.media.provider === o.p.SPOTIFY
                ? (0, r.jsx)(T.Z, {
                      onClick: n,
                      'aria-label': C.NW.string(C.t.rRffNz),
                      Icon: h.Z
                  })
                : null,
        userDescription: (0, E.kr)(x) ? C.t.Tzx5Dw : C.t.CcVI1d,
        title: F,
        onClickTitle: m,
        subtitle: q,
        badges: null,
        children: (null == (t = G.timestamps) ? void 0 : t.start) != null && (0, r.jsx)(L, { activity: G })
    });
    return (0, r.jsxs)(I.yR, {
        children: [
            X,
            (0, r.jsx)(I.St, {
                children: (0, r.jsx)(I.WT, {
                    onReaction: k,
                    onVoiceChannelPreview: j,
                    user: Z,
                    channel: P,
                    generateReactionImage: z,
                    reactionImageAltText: w(V, Z),
                    entry: x,
                    buttons: Q
                })
            })
        ]
    });
}
