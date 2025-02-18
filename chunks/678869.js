n.d(t, { Z: () => w }), n(627494), n(757143), n(653041);
var a = n(200651),
    l = n(192379),
    i = n(423875),
    r = n(442837),
    o = n(902704),
    s = n(481060),
    c = n(952164),
    d = n(768419),
    u = n(424678),
    m = n(239470),
    x = n(894344),
    h = n(314897),
    p = n(908841),
    g = n(5192),
    v = n(379357),
    C = n(561308),
    N = n(319604),
    j = n(31074),
    I = n(206295),
    f = n(551228),
    P = n(591853),
    y = n(371991),
    Z = n(410441),
    T = n(981631),
    A = n(616922),
    E = n(388032),
    _ = n(967437),
    S = n(687765);
let R = (e, t, n) => {
    let { artist: a, media: l } = e,
        i = E.t['6iNxrq'],
        r = g.ZP.getName(t.guild_id, t.id, n);
    return E.NW.formatToMarkdownString(i, {
        artist: a,
        userName: r,
        media: l
    }).replaceAll('*', '');
};
function k(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: i } = (0, y.tS)(),
        { durationTimestamp: r, seekBarStyles: o } = l.useMemo(() => {
            var e;
            let { start: n, end: a } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == a) return {};
            let l = Math.min(a, i),
                r = a - n,
                o = Math.floor((Math.max(l - n, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(o, '%') },
                durationTimestamp: (0, C.T_)({ start: 0 }, r)
            };
        }, [t, i]);
    return null == o
        ? null
        : (0, a.jsxs)('div', {
              className: _.listeningTimeline,
              children: [
                  (0, a.jsx)(y.x3, { entry: n }),
                  (0, a.jsx)('div', {
                      className: _.seekBarContainer,
                      children: (0, a.jsx)('div', {
                          className: _.seekBarFill,
                          style: o
                      })
                  }),
                  (0, a.jsx)(s.Text, {
                      className: _.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function w(e) {
    var t;
    let n,
        g,
        y,
        { channel: _, entry: w, closePopout: O, onReaction: b, onVoiceChannelPreview: M } = e,
        { largeImage: W } = (0, v.rv)({ entry: w }),
        { activity: L, currentEntry: z, artist: B, title: H, user: U } = (0, f.pi)(w),
        { primaryColor: D, secondaryColor: G } = (0, I.Z)(null == W ? void 0 : W.src),
        F = (0, j.Z)(T.ABu.SPOTIFY),
        V = (0, r.e7)([d.Z, h.default], () => ((null == L ? void 0 : L.type) === T.IIU.LISTENING && null != U ? (0, m.Z)(d.Z, h.default, U, L) : void 0), [L, U], o.Z),
        Y = l.useCallback(() => {
            var e;
            if (null == _ || null == U) return;
            let t = null === (e = L.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, C.T_)(null != t ? { start: t } : w, Date.now());
            return (0, N.CR)({
                user: U,
                channel: _,
                mediaImageSrc: null == W ? void 0 : W.src,
                artist: B,
                description: R(
                    {
                        artist: B,
                        media: H
                    },
                    _,
                    U
                ),
                colors: [D, G],
                badges: (0, N.jE)({ timestamp: n })
            });
        }, [L, B, _, w, null == W ? void 0 : W.src, D, G, H, U]);
    if (null == L || null == z) return null;
    let q = B,
        J = [];
    z.media.provider === i.p.SPOTIFY &&
        ((g = () => {
            (0, c.aG)(L);
        }),
        (y = () => {
            (0, c.Z5)(L, U.id);
        }),
        (n = () => {
            var e;
            (null !== (e = null == F ? void 0 : F()) && void 0 !== e) || (0, c.aG)(L);
        }),
        (q = (0, a.jsx)(u.Z, {
            artists: B,
            canOpen: null != L.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, c.d$)(L, U.id, e);
            }
        })),
        (null == V ? void 0 : V.syncDisabled) === !1 &&
            J.push(
                (0, a.jsx)(
                    P.Ll,
                    {
                        onClick: () => {
                            (0, x.Z)(V, A.kG.USER_ACTIVITY_SYNC), O();
                        },
                        IconComponent: s.iOO,
                        children: E.NW.string(E.t.eU3inJ)
                    },
                    'listen-along'
                )
            ));
    let X = (0, a.jsx)(P.wG, {
        onClickThumbnail: y,
        channel: _,
        entry: w,
        headerIcons:
            z.media.provider === i.p.SPOTIFY
                ? (0, a.jsx)(Z.Z, {
                      onClick: n,
                      'aria-label': E.NW.string(E.t.rRffNz),
                      Icon: p.Z
                  })
                : null,
        userDescription: (0, C.kr)(w) ? E.t.Tzx5Dw : E.t.CcVI1d,
        title: H,
        onClickTitle: g,
        subtitle: q,
        badges: null,
        children: (null === (t = L.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(k, { activity: L })
    });
    return (0, a.jsxs)(P.yR, {
        children: [
            X,
            (0, a.jsx)(P.St, {
                children: (0, a.jsx)(P.WT, {
                    onReaction: b,
                    onVoiceChannelPreview: M,
                    user: U,
                    channel: _,
                    generateReactionImage: Y,
                    reactionImageAltText: E.NW.formatToPlainString(E.t.h2yWWV, {
                        username: U.username,
                        activity: B
                    }),
                    entry: w,
                    buttons: J
                })
            })
        ]
    });
}
