"use strict";
n.d(t, { A: () => x }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(205327),
    a = n(311907),
    o = n(52133),
    l = n(834730),
    u = n(821609),
    c = n(835723),
    d = n(172710),
    _ = n(655116),
    f = n(763758),
    p = n(286617),
    h = n(533207),
    E = n(961350),
    m = n(121090),
    g = n(562153),
    A = n(939341),
    I = n(583846),
    T = n(405310),
    S = n(434200),
    y = n(176563),
    N = n(363670),
    v = n(910692),
    C = n(693879),
    O = n(18282),
    R = n(809854),
    b = n(652215),
    D = n(272984),
    L = n(985018),
    w = n(229812),
    M = n(994063);
function P(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, R.e)(),
        { durationTimestamp: a, seekBarStyles: o } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let r = Math.min(n, s),
                i = n - e,
                a = Math.floor((Math.max(r - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${a}%` }, durationTimestamp: (0, I.W6)({ start: 0 }, i) };
        }, [t, s]);
    return null == o
        ? null
        : (0, r.jsxs)("div", {
              className: w.lu,
              children: [
                  (0, r.jsx)(C.z, { entry: n }),
                  (0, r.jsx)("div", { className: w.Lt, children: (0, r.jsx)("div", { className: w.Vp, style: o }) }),
                  (0, r.jsx)(l.E, {
                      className: w.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: a,
                  }),
              ],
          });
}
function x(e) {
    let t,
        n,
        l,
        { channel: C, entry: R, closePopout: w, onReaction: x, onVoiceChannelPreview: k } = e,
        { largeImage: U } = (0, A.nO)({ entry: R }),
        { activity: G, currentEntry: F, artist: V, title: B, user: H } = (0, N.u7)(R),
        { primaryColor: j, secondaryColor: Y } = (0, y.A)(U?.src),
        W = (0, S.A)(b.fg2.SPOTIFY),
        K = (0, a.bG)(
            [_.A, E.default],
            () => (G?.type === b.$pd.LISTENING && null != H ? (0, p.A)(_.A, E.default, H, G) : void 0),
            [G, H],
            o.A,
        ),
        $ = i.useCallback(() => {
            if (null == C || null == H) return;
            let e = G.timestamps?.start,
                t = (0, I.W6)(null != e ? { start: e } : R, Date.now());
            return (0, T.Lu)({
                user: H,
                channel: C,
                mediaImageSrc: U?.src,
                artist: V,
                description: ((e, t, n) => {
                    let { artist: r, media: i } = e,
                        s = L.t["6iNxrl"],
                        a = g.Ay.getName(t.guild_id, t.id, n);
                    return L.intl.formatToMarkdownString(s, { artist: r, userName: a, media: i }).replaceAll("*", "");
                })({ artist: V, media: B }, C, H),
                colors: [j, Y],
                badges: (0, T.N)({ timestamp: t }),
            });
        }, [G, V, C, R, U?.src, j, Y, B, H]);
    if (null == G || null == F) return null;
    let z = V,
        q = [];
    F.media.provider === s.X.SPOTIFY &&
        ((n = () => {
            (0, d.Mp)(G);
        }),
        (l = () => {
            (0, d.QX)(G, H.id);
        }),
        (t = () => {
            null != W ? W() : (0, d.Mp)(G);
        }),
        (z = (0, r.jsx)(f.A, {
            artists: V,
            canOpen: null != G.sync_id,
            linkClassName: M.zA,
            onOpenSpotifyArtist: (e) => {
                (0, d.mN)(G, H.id, e);
            },
        })),
        K?.syncDisabled === !1 &&
            q.push(
                (0, r.jsx)(
                    u.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: L.intl.string(L.t.eU3inB),
                        icon: c.J,
                        onClick: () => {
                            (0, h.A)(K, D.Qp.USER_ACTIVITY_SYNC), w();
                        },
                    },
                    "listen-along",
                ),
            ));
    let X = (0, r.jsx)(v.BC, {
        onClickThumbnail: l,
        channel: C,
        entry: R,
        headerIcons:
            F.media.provider === s.X.SPOTIFY
                ? (0, r.jsx)(O.A, { onClick: t, "aria-label": L.intl.string(L.t.rRffNz), Icon: m.A })
                : null,
        userDescription: (0, I.JM)(R) ? L.t.Tzx5D2 : L.t.CcVI1T,
        title: B,
        onClickTitle: n,
        subtitle: z,
        badges: null,
        children: G.timestamps?.start != null && (0, r.jsx)(P, { activity: G }),
    });
    return (0, r.jsxs)(v.YN, {
        children: [
            X,
            (0, r.jsx)(v.Eh, {
                children: (0, r.jsx)(v.fD, {
                    onReaction: x,
                    onVoiceChannelPreview: k,
                    user: H,
                    channel: C,
                    generateReactionImage: $,
                    reactionImageAltText: L.intl.formatToPlainString(L.t.h2yWWX, { username: H.username, activity: V }),
                    entry: R,
                    buttons: q,
                }),
            }),
        ],
    });
}
