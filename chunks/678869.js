n.d(t, { Z: () => x }), n(804061), n(704826), n(35282), n(539854);
var r = n(255367),
    i = n(73800),
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
    O = n(206295),
    v = n(551228),
    I = n(591853),
    S = n(371991),
    T = n(410441),
    A = n(981631),
    N = n(616922),
    C = n(388032),
    R = n(292199),
    P = n(610220);
function w(e, t) {
    return C.intl.formatToPlainString(C.t.h2yWWV, {
        username: t.username,
        activity: e
    });
}
let D = (e, t, n) => {
    let { artist: r, media: i } = e,
        o = C.t['6iNxrq'],
        a = m.ZP.getName(t.guild_id, t.id, n);
    return C.intl
        .formatToMarkdownString(o, {
            artist: r,
            userName: a,
            media: i
        })
        .replaceAll('*', '');
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
              className: R.listeningTimeline,
              children: [
                  (0, r.jsx)(S.x3, { entry: n }),
                  (0, r.jsx)('div', {
                      className: R.seekBarContainer,
                      children: (0, r.jsx)('div', {
                          className: R.seekBarFill,
                          style: s
                      })
                  }),
                  (0, r.jsx)(l.Text, {
                      className: R.timestamp,
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
        { channel: R, entry: x, closePopout: M, onReaction: k, onVoiceChannelPreview: j } = e,
        { largeImage: U } = (0, g.rv)({ entry: x }),
        { activity: G, currentEntry: B, artist: V, title: F, user: Z } = (0, v.pi)(x),
        { primaryColor: H, secondaryColor: Y } = (0, O.Z)(null == U ? void 0 : U.src),
        W = (0, y.Z)(A.ABu.SPOTIFY),
        K = (0, a.e7)([u.Z, p.default], () => ((null == G ? void 0 : G.type) === A.IIU.LISTENING && null != Z ? (0, f.Z)(u.Z, p.default, Z, G) : void 0), [G, Z], s.Z),
        z = i.useCallback(() => {
            var e;
            if (null == R || null == Z) return;
            let t = null == (e = G.timestamps) ? void 0 : e.start,
                n = (0, E.T_)(null != t ? { start: t } : x, Date.now());
            return (0, b.CR)({
                user: Z,
                channel: R,
                mediaImageSrc: null == U ? void 0 : U.src,
                artist: V,
                description: D(
                    {
                        artist: V,
                        media: F
                    },
                    R,
                    Z
                ),
                colors: [H, Y],
                badges: (0, b.jE)({ timestamp: n })
            });
        }, [G, V, R, x, null == U ? void 0 : U.src, H, Y, F, Z]);
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
                null != (e = null == W ? void 0 : W()) || (0, c.aG)(G);
            });
        let e = (e) => {
            (0, c.d$)(G, Z.id, e);
        };
        if (
            ((q = (0, r.jsx)(d.Z, {
                artists: V,
                canOpen: null != G.sync_id,
                linkClassName: P.popoutTextSecondary,
                onOpenSpotifyArtist: e
            })),
            (null == K ? void 0 : K.syncDisabled) === !1)
        ) {
            let e = () => {
                (0, _.Z)(K, N.kG.USER_ACTIVITY_SYNC), M();
            };
            Q.push(
                (0, r.jsx)(
                    I.Ll,
                    {
                        onClick: e,
                        IconComponent: l.iOO,
                        children: C.intl.string(C.t.eU3inJ)
                    },
                    'listen-along'
                )
            );
        }
    }
    let X = (0, r.jsx)(I.wG, {
        onClickThumbnail: S,
        channel: R,
        entry: x,
        headerIcons:
            B.media.provider === o.p.SPOTIFY
                ? (0, r.jsx)(T.Z, {
                      onClick: n,
                      'aria-label': C.intl.string(C.t.rRffNz),
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
                    channel: R,
                    generateReactionImage: z,
                    reactionImageAltText: w(V, Z),
                    entry: x,
                    buttons: Q
                })
            })
        ]
    });
}
