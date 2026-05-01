"use strict";
n.d(t, { A: () => k }), n(321073);
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
    x = n(121090),
    C = n(562153),
    A = n(939341),
    E = n(583846),
    I = n(405310),
    y = n(434200),
    v = n(140651),
    S = n(363670),
    N = n(236812),
    j = n(85451),
    _ = n(18282),
    T = n(809854),
    b = n(652215),
    R = n(272984),
    O = n(985018),
    L = n(229812),
    w = n(994063);
function M(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, T.e)(),
        { durationTimestamp: a, seekBarStyles: r } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, s),
                i = n - e,
                a = Math.floor((Math.max(l - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${a}%` }, durationTimestamp: (0, E.W6)({ start: 0 }, i) };
        }, [t, s]);
    return null == r
        ? null
        : (0, l.jsxs)("div", {
              className: L.lu,
              children: [
                  (0, l.jsx)(j.z, { entry: n }),
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
function k(e) {
    let t,
        n,
        o,
        { channel: j, entry: T, closePopout: L, onReaction: k, onVoiceChannelPreview: P } = e,
        { largeImage: D } = (0, A.nO)({ entry: T }),
        { activity: U, currentEntry: V, artist: G, title: F, user: H } = (0, S.u7)(T),
        { primaryColor: W, secondaryColor: B } = (0, v.A)(D?.src),
        K = (0, y.A)(b.fg2.SPOTIFY),
        z = (0, a.bG)(
            [h.A, g.default],
            () => (U?.type === b.$pd.LISTENING && null != H ? (0, p.A)(h.A, g.default, H, U) : void 0),
            [U, H],
            r.A,
        ),
        Z = i.useCallback(() => {
            if (null == j || null == H) return;
            let e = U.timestamps?.start,
                t = (0, E.W6)(null != e ? { start: e } : T, Date.now());
            return (0, I.Lu)({
                user: H,
                channel: j,
                mediaImageSrc: D?.src,
                artist: G,
                description: ((e, t, n) => {
                    let { artist: l, media: i } = e,
                        s = O.t["6iNxrl"],
                        a = C.Ay.getName(t.guild_id, t.id, n);
                    return O.intl.formatToMarkdownString(s, { artist: l, userName: a, media: i }).replaceAll("*", "");
                })({ artist: G, media: F }, j, H),
                colors: [W, B],
                badges: (0, I.N)({ timestamp: t }),
            });
        }, [U, G, j, T, D?.src, W, B, F, H]);
    if (null == U || null == V) return null;
    let q = G,
        J = [];
    V.media.provider === s.X.SPOTIFY &&
        ((n = () => {
            (0, d.Mp)(U);
        }),
        (o = () => {
            (0, d.QX)(U, H.id);
        }),
        (t = () => {
            null != K ? K() : (0, d.Mp)(U);
        }),
        (q = (0, l.jsx)(m.A, {
            artists: G,
            canOpen: null != U.sync_id,
            linkClassName: w.zA,
            onOpenSpotifyArtist: (e) => {
                (0, d.mN)(U, H.id, e);
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
                        text: O.intl.string(O.t.eU3inB),
                        icon: u.J,
                        onClick: () => {
                            (0, f.A)(z, R.Qp.USER_ACTIVITY_SYNC), L();
                        },
                    },
                    "listen-along",
                ),
            ));
    let Y = (0, l.jsx)(N.BC, {
        onClickThumbnail: o,
        channel: j,
        entry: T,
        headerIcons:
            V.media.provider === s.X.SPOTIFY
                ? (0, l.jsx)(_.A, { onClick: t, "aria-label": O.intl.string(O.t.rRffNz), Icon: x.A })
                : null,
        userDescription: (0, E.JM)(T) ? O.t.Tzx5D2 : O.t.CcVI1T,
        title: F,
        onClickTitle: n,
        subtitle: q,
        badges: null,
        children: U.timestamps?.start != null && (0, l.jsx)(M, { activity: U }),
    });
    return (0, l.jsxs)(N.YN, {
        children: [
            Y,
            (0, l.jsx)(N.Eh, {
                children: (0, l.jsx)(N.fD, {
                    onReaction: k,
                    onVoiceChannelPreview: P,
                    user: H,
                    channel: j,
                    generateReactionImage: Z,
                    reactionImageAltText: O.intl.formatToPlainString(O.t.h2yWWX, { username: H.username, activity: G }),
                    entry: T,
                    buttons: J,
                }),
            }),
        ],
    });
}
