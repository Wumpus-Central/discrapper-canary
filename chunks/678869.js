n.d(t, { Z: () => _ }), n(627494), n(757143), n(301563), n(653041);
var r = n(200651),
    a = n(192379),
    l = n(423875),
    i = n(442837),
    o = n(902704),
    s = n(481060),
    c = n(952164),
    u = n(768419),
    d = n(424678),
    m = n(239470),
    p = n(894344),
    h = n(314897),
    x = n(908841),
    g = n(5192),
    v = n(379357),
    f = n(561308),
    y = n(319604),
    j = n(31074),
    P = n(206295),
    O = n(551228),
    b = n(591853),
    C = n(371991),
    N = n(410441),
    I = n(981631),
    w = n(616922),
    T = n(388032),
    Z = n(762635),
    S = n(742595);
let E = (e, t, n) => {
    let { artist: r, media: a } = e,
        l = T.t['6iNxrq'],
        i = g.ZP.getName(t.guild_id, t.id, n);
    return T.NW.formatToMarkdownString(l, {
        artist: r,
        userName: i,
        media: a
    }).replaceAll('*', '');
};
function A(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: l } = (0, C.tS)(),
        { durationTimestamp: i, seekBarStyles: o } = a.useMemo(() => {
            var e;
            let { start: n, end: r } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == r) return {};
            let a = Math.min(r, l),
                i = r - n,
                o = Math.floor((Math.max(a - n, 0) / i) * 100);
            return {
                seekBarStyles: { width: ''.concat(o, '%') },
                durationTimestamp: (0, f.T_)({ start: 0 }, i)
            };
        }, [t, l]);
    return null == o
        ? null
        : (0, r.jsxs)('div', {
              className: Z.listeningTimeline,
              children: [
                  (0, r.jsx)(C.x3, { entry: n }),
                  (0, r.jsx)('div', {
                      className: Z.seekBarContainer,
                      children: (0, r.jsx)('div', {
                          className: Z.seekBarFill,
                          style: o
                      })
                  }),
                  (0, r.jsx)(s.Text, {
                      className: Z.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: i
                  })
              ]
          });
}
function _(e) {
    var t;
    let n,
        g,
        C,
        { channel: Z, entry: _, closePopout: k, onReaction: R, onVoiceChannelPreview: M } = e,
        { largeImage: L } = (0, v.rv)({ entry: _ }),
        { activity: W, currentEntry: D, artist: z, title: B, user: U } = (0, O.pi)(_),
        { primaryColor: H, secondaryColor: G } = (0, P.Z)(null == L ? void 0 : L.src),
        F = (0, j.Z)(I.ABu.SPOTIFY),
        V = (0, i.e7)([u.Z, h.default], () => ((null == W ? void 0 : W.type) === I.IIU.LISTENING && null != U ? (0, m.Z)(u.Z, h.default, U, W) : void 0), [W, U], o.Z),
        Y = a.useCallback(() => {
            var e;
            if (null == Z || null == U) return;
            let t = null === (e = W.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, f.T_)(null != t ? { start: t } : _, Date.now());
            return (0, y.CR)({
                user: U,
                channel: Z,
                mediaImageSrc: null == L ? void 0 : L.src,
                artist: z,
                description: E(
                    {
                        artist: z,
                        media: B
                    },
                    Z,
                    U
                ),
                colors: [H, G],
                badges: (0, y.jE)({ timestamp: n })
            });
        }, [W, z, Z, _, null == L ? void 0 : L.src, H, G, B, U]);
    if (null == W || null == D) return null;
    let q = z,
        J = [];
    D.media.provider === l.p.SPOTIFY &&
        ((g = () => {
            (0, c.aG)(W);
        }),
        (C = () => {
            (0, c.Z5)(W, U.id);
        }),
        (n = () => {
            var e;
            (null !== (e = null == F ? void 0 : F()) && void 0 !== e) || (0, c.aG)(W);
        }),
        (q = (0, r.jsx)(d.Z, {
            artists: z,
            canOpen: null != W.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, c.d$)(W, U.id, e);
            }
        })),
        (null == V ? void 0 : V.syncDisabled) === !1 &&
            J.push(
                (0, r.jsx)(
                    b.Ll,
                    {
                        onClick: () => {
                            (0, p.Z)(V, w.kG.USER_ACTIVITY_SYNC), k();
                        },
                        IconComponent: s.iOO,
                        children: T.NW.string(T.t.eU3inJ)
                    },
                    'listen-along'
                )
            ));
    let X = (0, r.jsx)(b.wG, {
        onClickThumbnail: C,
        channel: Z,
        entry: _,
        headerIcons:
            D.media.provider === l.p.SPOTIFY
                ? (0, r.jsx)(N.Z, {
                      onClick: n,
                      'aria-label': T.NW.string(T.t.rRffNz),
                      Icon: x.Z
                  })
                : null,
        userDescription: (0, f.kr)(_) ? T.t.Tzx5Dw : T.t.CcVI1d,
        title: B,
        onClickTitle: g,
        subtitle: q,
        badges: null,
        children: (null === (t = W.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, r.jsx)(A, { activity: W })
    });
    return (0, r.jsxs)(b.yR, {
        children: [
            X,
            (0, r.jsx)(b.St, {
                children: (0, r.jsx)(b.WT, {
                    onReaction: R,
                    onVoiceChannelPreview: M,
                    user: U,
                    channel: Z,
                    generateReactionImage: Y,
                    reactionImageAltText: T.NW.formatToPlainString(T.t.h2yWWV, {
                        username: U.username,
                        activity: z
                    }),
                    entry: _,
                    buttons: J
                })
            })
        ]
    });
}
