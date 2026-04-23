"use strict";
n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(205327),
    a = n(17928),
    o = n(52133),
    l = n(834730),
    d = n(821609),
    _ = n(835723),
    u = n(172710),
    c = n(655116),
    E = n(763758),
    h = n(286617),
    m = n(533207),
    f = n(495544),
    g = n(121090),
    p = n(562153),
    A = n(939341),
    I = n(583846),
    T = n(405310),
    S = n(434200),
    N = n(140651),
    C = n(363670),
    R = n(236812),
    O = n(85451),
    y = n(18282),
    v = n(809854),
    D = n(652215),
    L = n(272984),
    b = n(985018),
    w = n(229812),
    P = n(994063);
function k(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, v.e)(),
        { durationTimestamp: a, seekBarStyles: o } = r.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let i = Math.min(n, s),
                r = n - e,
                a = Math.floor((Math.max(i - e, 0) / r) * 100);
            return { seekBarStyles: { width: `${a}%` }, durationTimestamp: (0, I.W6)({ start: 0 }, r) };
        }, [t, s]);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: w.lu,
              children: [
                  (0, i.jsx)(O.z, { entry: n }),
                  (0, i.jsx)("div", { className: w.Lt, children: (0, i.jsx)("div", { className: w.Vp, style: o }) }),
                  (0, i.jsx)(l.E, {
                      className: w.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: a,
                  }),
              ],
          });
}
function M(e) {
    let t,
        n,
        l,
        { channel: O, entry: v, closePopout: w, onReaction: M, onVoiceChannelPreview: U } = e,
        { largeImage: x } = (0, A.nO)({ entry: v }),
        { activity: G, currentEntry: V, artist: F, title: B, user: H } = (0, C.u7)(v),
        { primaryColor: j, secondaryColor: W } = (0, N.A)(x?.src),
        Y = (0, S.A)(D.fg2.SPOTIFY),
        K = (0, a.bG)(
            [c.A, f.default],
            () => (G?.type === D.$pd.LISTENING && null != H ? (0, h.A)(c.A, f.default, H, G) : void 0),
            [G, H],
            o.A,
        ),
        z = r.useCallback(() => {
            if (null == O || null == H) return;
            let e = G.timestamps?.start,
                t = (0, I.W6)(null != e ? { start: e } : v, Date.now());
            return (0, T.Lu)({
                user: H,
                channel: O,
                mediaImageSrc: x?.src,
                artist: F,
                description: ((e, t, n) => {
                    let { artist: i, media: r } = e,
                        s = b.t["6iNxrl"],
                        a = p.Ay.getName(t.guild_id, t.id, n);
                    return b.intl.formatToMarkdownString(s, { artist: i, userName: a, media: r }).replaceAll("*", "");
                })({ artist: F, media: B }, O, H),
                colors: [j, W],
                badges: (0, T.N)({ timestamp: t }),
            });
        }, [G, F, O, v, x?.src, j, W, B, H]);
    if (null == G || null == V) return null;
    let $ = F,
        q = [];
    V.media.provider === s.X.SPOTIFY &&
        ((n = () => {
            (0, u.Mp)(G);
        }),
        (l = () => {
            (0, u.QX)(G, H.id);
        }),
        (t = () => {
            null != Y ? Y() : (0, u.Mp)(G);
        }),
        ($ = (0, i.jsx)(E.A, {
            artists: F,
            canOpen: null != G.sync_id,
            linkClassName: P.zA,
            onOpenSpotifyArtist: (e) => {
                (0, u.mN)(G, H.id, e);
            },
        })),
        K?.syncDisabled === !1 &&
            q.push(
                (0, i.jsx)(
                    d.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: b.intl.string(b.t.eU3inB),
                        icon: _.J,
                        onClick: () => {
                            (0, m.A)(K, L.Qp.USER_ACTIVITY_SYNC), w();
                        },
                    },
                    "listen-along",
                ),
            ));
    let X = (0, i.jsx)(R.BC, {
        onClickThumbnail: l,
        channel: O,
        entry: v,
        headerIcons:
            V.media.provider === s.X.SPOTIFY
                ? (0, i.jsx)(y.A, { onClick: t, "aria-label": b.intl.string(b.t.rRffNz), Icon: g.A })
                : null,
        userDescription: (0, I.JM)(v) ? b.t.Tzx5D2 : b.t.CcVI1T,
        title: B,
        onClickTitle: n,
        subtitle: $,
        badges: null,
        children: G.timestamps?.start != null && (0, i.jsx)(k, { activity: G }),
    });
    return (0, i.jsxs)(R.YN, {
        children: [
            X,
            (0, i.jsx)(R.Eh, {
                children: (0, i.jsx)(R.fD, {
                    onReaction: M,
                    onVoiceChannelPreview: U,
                    user: H,
                    channel: O,
                    generateReactionImage: z,
                    reactionImageAltText: b.intl.formatToPlainString(b.t.h2yWWX, { username: H.username, activity: F }),
                    entry: v,
                    buttons: q,
                }),
            }),
        ],
    });
}
