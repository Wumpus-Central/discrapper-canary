"use strict";
n.d(t, { A: () => O }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(205327),
    r = n(311907),
    a = n(52133),
    o = n(834730),
    c = n(821609),
    u = n(835723),
    d = n(172710),
    h = n(655116),
    m = n(763758),
    p = n(286617),
    f = n(533207),
    g = n(961350),
    _ = n(121090),
    x = n(562153),
    A = n(939341),
    C = n(583846),
    E = n(405310),
    I = n(434200),
    v = n(176563),
    y = n(363670),
    S = n(910692),
    b = n(693879),
    N = n(18282),
    T = n(809854),
    j = n(652215),
    R = n(272984),
    w = n(985018),
    L = n(229812),
    M = n(994063);
function k(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, T.e)(),
        { durationTimestamp: r, seekBarStyles: a } = l.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let i = Math.min(n, s),
                l = n - e,
                r = Math.floor((Math.max(i - e, 0) / l) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, C.W6)({ start: 0 }, l) };
        }, [t, s]);
    return null == a
        ? null
        : (0, i.jsxs)("div", {
              className: L.lu,
              children: [
                  (0, i.jsx)(b.z, { entry: n }),
                  (0, i.jsx)("div", { className: L.Lt, children: (0, i.jsx)("div", { className: L.Vp, style: a }) }),
                  (0, i.jsx)(o.E, {
                      className: L.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function O(e) {
    let t,
        n,
        o,
        { channel: b, entry: T, closePopout: L, onReaction: O, onVoiceChannelPreview: P } = e,
        { largeImage: D } = (0, A.nO)({ entry: T }),
        { activity: U, currentEntry: V, artist: G, title: F, user: B } = (0, y.u7)(T),
        { primaryColor: H, secondaryColor: W } = (0, v.A)(D?.src),
        K = (0, I.A)(j.fg2.SPOTIFY),
        z = (0, r.bG)(
            [h.A, g.default],
            () => (U?.type === j.$pd.LISTENING && null != B ? (0, p.A)(h.A, g.default, B, U) : void 0),
            [U, B],
            a.A,
        ),
        Z = l.useCallback(() => {
            if (null == b || null == B) return;
            let e = U.timestamps?.start,
                t = (0, C.W6)(null != e ? { start: e } : T, Date.now());
            return (0, E.Lu)({
                user: B,
                channel: b,
                mediaImageSrc: D?.src,
                artist: G,
                description: ((e, t, n) => {
                    let { artist: i, media: l } = e,
                        s = w.t["6iNxrl"],
                        r = x.Ay.getName(t.guild_id, t.id, n);
                    return w.intl.formatToMarkdownString(s, { artist: i, userName: r, media: l }).replaceAll("*", "");
                })({ artist: G, media: F }, b, B),
                colors: [H, W],
                badges: (0, E.N)({ timestamp: t }),
            });
        }, [U, G, b, T, D?.src, H, W, F, B]);
    if (null == U || null == V) return null;
    let q = G,
        Y = [];
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
        (q = (0, i.jsx)(m.A, {
            artists: G,
            canOpen: null != U.sync_id,
            linkClassName: M.zA,
            onOpenSpotifyArtist: (e) => {
                (0, d.mN)(U, B.id, e);
            },
        })),
        z?.syncDisabled === !1 &&
            Y.push(
                (0, i.jsx)(
                    c.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: w.intl.string(w.t.eU3inB),
                        icon: u.J,
                        onClick: () => {
                            (0, f.A)(z, R.Qp.USER_ACTIVITY_SYNC), L();
                        },
                    },
                    "listen-along",
                ),
            ));
    let J = (0, i.jsx)(S.BC, {
        onClickThumbnail: o,
        channel: b,
        entry: T,
        headerIcons:
            V.media.provider === s.X.SPOTIFY
                ? (0, i.jsx)(N.A, { onClick: t, "aria-label": w.intl.string(w.t.rRffNz), Icon: _.A })
                : null,
        userDescription: (0, C.JM)(T) ? w.t.Tzx5D2 : w.t.CcVI1T,
        title: F,
        onClickTitle: n,
        subtitle: q,
        badges: null,
        children: U.timestamps?.start != null && (0, i.jsx)(k, { activity: U }),
    });
    return (0, i.jsxs)(S.YN, {
        children: [
            J,
            (0, i.jsx)(S.Eh, {
                children: (0, i.jsx)(S.fD, {
                    onReaction: O,
                    onVoiceChannelPreview: P,
                    user: B,
                    channel: b,
                    generateReactionImage: Z,
                    reactionImageAltText: w.intl.formatToPlainString(w.t.h2yWWX, { username: B.username, activity: G }),
                    entry: T,
                    buttons: Y,
                }),
            }),
        ],
    });
}
