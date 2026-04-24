"use strict";
n.d(t, { A: () => O }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(205327),
    a = n(17928),
    r = n(52133),
    o = n(834730),
    c = n(821609),
    u = n(835723),
    d = n(172710),
    h = n(655116),
    m = n(763758),
    p = n(286617),
    f = n(533207),
    g = n(495544),
    _ = n(121090),
    x = n(562153),
    C = n(939341),
    A = n(583846),
    E = n(405310),
    I = n(434200),
    v = n(140651),
    y = n(363670),
    b = n(236812),
    S = n(85451),
    N = n(18282),
    j = n(809854),
    T = n(652215),
    w = n(272984),
    R = n(985018),
    L = n(229812),
    k = n(994063);
function M(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, j.e)(),
        { durationTimestamp: a, seekBarStyles: r } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, s),
                i = n - e,
                a = Math.floor((Math.max(l - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${a}%` }, durationTimestamp: (0, A.W6)({ start: 0 }, i) };
        }, [t, s]);
    return null == r
        ? null
        : (0, l.jsxs)("div", {
              className: L.lu,
              children: [
                  (0, l.jsx)(S.z, { entry: n }),
                  (0, l.jsx)("div", { className: L.Lt, children: (0, l.jsx)("div", { className: L.Vp, style: r }) }),
                  (0, l.jsx)(o.E, {
                      className: L.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: a,
                  }),
              ],
          });
}
function O(e) {
    let t,
        n,
        o,
        { channel: S, entry: j, closePopout: L, onReaction: O, onVoiceChannelPreview: P } = e,
        { largeImage: D } = (0, C.nO)({ entry: j }),
        { activity: U, currentEntry: V, artist: G, title: F, user: B } = (0, y.u7)(j),
        { primaryColor: H, secondaryColor: W } = (0, v.A)(D?.src),
        K = (0, I.A)(T.fg2.SPOTIFY),
        z = (0, a.bG)(
            [h.A, g.default],
            () => (U?.type === T.$pd.LISTENING && null != B ? (0, p.A)(h.A, g.default, B, U) : void 0),
            [U, B],
            r.A,
        ),
        Z = i.useCallback(() => {
            if (null == S || null == B) return;
            let e = U.timestamps?.start,
                t = (0, A.W6)(null != e ? { start: e } : j, Date.now());
            return (0, E.Lu)({
                user: B,
                channel: S,
                mediaImageSrc: D?.src,
                artist: G,
                description: ((e, t, n) => {
                    let { artist: l, media: i } = e,
                        s = R.t["6iNxrl"],
                        a = x.Ay.getName(t.guild_id, t.id, n);
                    return R.intl.formatToMarkdownString(s, { artist: l, userName: a, media: i }).replaceAll("*", "");
                })({ artist: G, media: F }, S, B),
                colors: [H, W],
                badges: (0, E.N)({ timestamp: t }),
            });
        }, [U, G, S, j, D?.src, H, W, F, B]);
    if (null == U || null == V) return null;
    let q = G,
        J = [];
    V.media.provider === s.X.SPOTIFY &&
        ((n = () => {
            (0, d.Mp)(U);
        }),
        (o = () => {
            (0, d.QX)(U, B.id);
        }),
        (t = () => {
            null != K ? K() : (0, d.Mp)(U);
        }),
        (q = (0, l.jsx)(m.A, {
            artists: G,
            canOpen: null != U.sync_id,
            linkClassName: k.zA,
            onOpenSpotifyArtist: (e) => {
                (0, d.mN)(U, B.id, e);
            },
        })),
        z?.syncDisabled === !1 &&
            J.push(
                (0, l.jsx)(
                    c.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: R.intl.string(R.t.eU3inB),
                        icon: u.J,
                        onClick: () => {
                            (0, f.A)(z, w.Qp.USER_ACTIVITY_SYNC), L();
                        },
                    },
                    "listen-along",
                ),
            ));
    let Y = (0, l.jsx)(b.BC, {
        onClickThumbnail: o,
        channel: S,
        entry: j,
        headerIcons:
            V.media.provider === s.X.SPOTIFY
                ? (0, l.jsx)(N.A, { onClick: t, "aria-label": R.intl.string(R.t.rRffNz), Icon: _.A })
                : null,
        userDescription: (0, A.JM)(j) ? R.t.Tzx5D2 : R.t.CcVI1T,
        title: F,
        onClickTitle: n,
        subtitle: q,
        badges: null,
        children: U.timestamps?.start != null && (0, l.jsx)(M, { activity: U }),
    });
    return (0, l.jsxs)(b.YN, {
        children: [
            Y,
            (0, l.jsx)(b.Eh, {
                children: (0, l.jsx)(b.fD, {
                    onReaction: O,
                    onVoiceChannelPreview: P,
                    user: B,
                    channel: S,
                    generateReactionImage: Z,
                    reactionImageAltText: R.intl.formatToPlainString(R.t.h2yWWX, { username: B.username, activity: G }),
                    entry: j,
                    buttons: J,
                }),
            }),
        ],
    });
}
