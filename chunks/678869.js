n.d(t, { Z: () => w }), n(627494), n(757143), n(653041);
var l = n(200651),
    a = n(192379),
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
    j = n(319604),
    I = n(31074),
    f = n(206295),
    P = n(551228),
    y = n(591853),
    N = n(371991),
    Z = n(410441),
    T = n(981631),
    E = n(616922),
    A = n(388032),
    _ = n(241574),
    S = n(179546);
let R = (e, t, n) => {
    let { artist: l, media: a } = e,
        i = A.t['6iNxrq'],
        r = g.ZP.getName(t.guild_id, t.id, n);
    return A.intl
        .formatToMarkdownString(i, {
            artist: l,
            userName: r,
            media: a
        })
        .replaceAll('*', '');
};
function k(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: i } = (0, N.tS)(),
        { durationTimestamp: r, seekBarStyles: o } = a.useMemo(() => {
            var e;
            let { start: n, end: l } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == l) return {};
            let a = Math.min(l, i),
                r = l - n,
                o = Math.floor((Math.max(a - n, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(o, '%') },
                durationTimestamp: (0, C.T_)({ start: 0 }, r)
            };
        }, [t, i]);
    return null == o
        ? null
        : (0, l.jsxs)('div', {
              className: _.listeningTimeline,
              children: [
                  (0, l.jsx)(N.x3, { entry: n }),
                  (0, l.jsx)('div', {
                      className: _.seekBarContainer,
                      children: (0, l.jsx)('div', {
                          className: _.seekBarFill,
                          style: o
                      })
                  }),
                  (0, l.jsx)(s.Text, {
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
        N,
        { channel: _, entry: w, closePopout: O, onReaction: b, onVoiceChannelPreview: M } = e,
        { largeImage: L } = (0, v.rv)({ entry: w }),
        { activity: z, currentEntry: B, artist: H, title: U, user: D } = (0, P.pi)(w),
        { primaryColor: G, secondaryColor: F } = (0, f.Z)(null == L ? void 0 : L.src),
        V = (0, I.Z)(T.ABu.SPOTIFY),
        Y = (0, r.e7)([d.Z, h.default], () => ((null == z ? void 0 : z.type) === T.IIU.LISTENING && null != D ? (0, m.Z)(d.Z, h.default, D, z) : void 0), [z, D], o.Z),
        q = a.useCallback(() => {
            var e;
            if (null == _ || null == D) return;
            let t = null === (e = z.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, C.T_)(null != t ? { start: t } : w, Date.now());
            return (0, j.CR)({
                user: D,
                channel: _,
                mediaImageSrc: null == L ? void 0 : L.src,
                artist: H,
                description: R(
                    {
                        artist: H,
                        media: U
                    },
                    _,
                    D
                ),
                colors: [G, F],
                badges: (0, j.jE)({ timestamp: n })
            });
        }, [z, H, _, w, null == L ? void 0 : L.src, G, F, U, D]);
    if (null == z || null == B) return null;
    let W = H,
        J = [];
    B.media.provider === i.p.SPOTIFY &&
        ((g = () => {
            (0, c.aG)(z);
        }),
        (N = () => {
            (0, c.Z5)(z, D.id);
        }),
        (n = () => {
            var e;
            (null !== (e = null == V ? void 0 : V()) && void 0 !== e) || (0, c.aG)(z);
        }),
        (W = (0, l.jsx)(u.Z, {
            artists: H,
            canOpen: null != z.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, c.d$)(z, D.id, e);
            }
        })),
        (null == Y ? void 0 : Y.syncDisabled) === !1 &&
            J.push(
                (0, l.jsx)(
                    y.Ll,
                    {
                        onClick: () => {
                            (0, x.Z)(Y, E.kG.USER_ACTIVITY_SYNC), O();
                        },
                        IconComponent: s.iOO,
                        children: A.intl.string(A.t.eU3inJ)
                    },
                    'listen-along'
                )
            ));
    let X = (0, l.jsx)(y.wG, {
        onClickThumbnail: N,
        channel: _,
        entry: w,
        headerIcons:
            B.media.provider === i.p.SPOTIFY
                ? (0, l.jsx)(Z.Z, {
                      onClick: n,
                      'aria-label': A.intl.string(A.t.rRffNz),
                      Icon: p.Z
                  })
                : null,
        userDescription: (0, C.kr)(w) ? A.t.Tzx5Dw : A.t.CcVI1d,
        title: U,
        onClickTitle: g,
        subtitle: W,
        badges: null,
        children: (null === (t = z.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, l.jsx)(k, { activity: z })
    });
    return (0, l.jsxs)(y.yR, {
        children: [
            X,
            (0, l.jsx)(y.St, {
                children: (0, l.jsx)(y.WT, {
                    onReaction: b,
                    onVoiceChannelPreview: M,
                    user: D,
                    channel: _,
                    generateReactionImage: q,
                    reactionImageAltText: A.intl.formatToPlainString(A.t.h2yWWV, {
                        username: D.username,
                        activity: H
                    }),
                    entry: w,
                    buttons: J
                })
            })
        ]
    });
}
