"use strict";
n.d(t, { A: () => k }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(205327),
    s = n(311907),
    o = n(52133),
    l = n(397927),
    u = n(172710),
    c = n(655116),
    d = n(763758),
    _ = n(286617),
    f = n(533207),
    h = n(961350),
    p = n(121090),
    g = n(562153),
    E = n(939341),
    A = n(583846),
    I = n(405310),
    T = n(434200),
    y = n(176563),
    S = n(363670),
    v = n(910692),
    C = n(693879),
    b = n(18282),
    N = n(809854),
    R = n(652215),
    O = n(272984),
    D = n(985018),
    L = n(133567),
    w = n(46e4);
function x(e, t) {
    return D.intl.formatToPlainString(D.t.h2yWWX, { username: t.username, activity: e });
}
let P = (e, t, n) => {
    let { artist: r, media: i } = e,
        a = D.t["6iNxrl"],
        s = g.Ay.getName(t.guild_id, t.id, n);
    return D.intl.formatToMarkdownString(a, { artist: r, userName: s, media: i }).replaceAll("*", "");
};
function M(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: a } = (0, N.e)(),
        { durationTimestamp: s, seekBarStyles: o } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let r = Math.min(n, a),
                i = n - e,
                s = Math.floor((Math.max(r - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${s}%` }, durationTimestamp: (0, A.W6)({ start: 0 }, i) };
        }, [t, a]);
    return null == o
        ? null
        : (0, r.jsxs)("div", {
              className: L.lu,
              children: [
                  (0, r.jsx)(C.z, { entry: n }),
                  (0, r.jsx)("div", { className: L.Lt, children: (0, r.jsx)("div", { className: L.Vp, style: o }) }),
                  (0, r.jsx)(l.Text, {
                      className: L.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: s,
                  }),
              ],
          });
}
function k(e) {
    let t,
        n,
        g,
        { channel: C, entry: N, closePopout: L, onReaction: k, onVoiceChannelPreview: U } = e,
        { largeImage: G } = (0, E.nO)({ entry: N }),
        { activity: F, currentEntry: V, artist: B, title: j, user: H } = (0, S.u7)(N),
        { primaryColor: Y, secondaryColor: W } = (0, y.A)(G?.src),
        K = (0, T.A)(R.fg2.SPOTIFY),
        $ = (0, s.bG)(
            [c.A, h.default],
            () => (F?.type === R.$pd.LISTENING && null != H ? (0, _.A)(c.A, h.default, H, F) : void 0),
            [F, H],
            o.A,
        ),
        z = i.useCallback(() => {
            if (null == C || null == H) return;
            let e = F.timestamps?.start,
                t = (0, A.W6)(null != e ? { start: e } : N, Date.now());
            return (0, I.Lu)({
                user: H,
                channel: C,
                mediaImageSrc: G?.src,
                artist: B,
                description: P({ artist: B, media: j }, C, H),
                colors: [Y, W],
                badges: (0, I.N)({ timestamp: t }),
            });
        }, [F, B, C, N, G?.src, Y, W, j, H]);
    if (null == F || null == V) return null;
    let q = B,
        X = [];
    if (V.media.provider === a.X.SPOTIFY) {
        (n = () => {
            (0, u.Mp)(F);
        }),
            (g = () => {
                (0, u.QX)(F, H.id);
            }),
            (t = () => {
                K?.() ?? (0, u.Mp)(F);
            });
        let e = (e) => {
            (0, u.mN)(F, H.id, e);
        };
        if (
            ((q = (0, r.jsx)(d.A, {
                artists: B,
                canOpen: null != F.sync_id,
                linkClassName: w.zA,
                onOpenSpotifyArtist: e,
            })),
            $?.syncDisabled === !1)
        ) {
            let e = () => {
                (0, f.A)($, O.Qp.USER_ACTIVITY_SYNC), L();
            };
            X.push(
                (0, r.jsx)(
                    l.Button,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: D.intl.string(D.t.eU3inB),
                        icon: l.J2m,
                        onClick: e,
                    },
                    "listen-along",
                ),
            );
        }
    }
    let Z = (0, r.jsx)(v.BC, {
        onClickThumbnail: g,
        channel: C,
        entry: N,
        headerIcons:
            V.media.provider === a.X.SPOTIFY
                ? (0, r.jsx)(b.A, { onClick: t, "aria-label": D.intl.string(D.t.rRffNz), Icon: p.A })
                : null,
        userDescription: (0, A.JM)(N) ? D.t.Tzx5D2 : D.t.CcVI1T,
        title: j,
        onClickTitle: n,
        subtitle: q,
        badges: null,
        children: F.timestamps?.start != null && (0, r.jsx)(M, { activity: F }),
    });
    return (0, r.jsxs)(v.YN, {
        children: [
            Z,
            (0, r.jsx)(v.Eh, {
                children: (0, r.jsx)(v.fD, {
                    onReaction: k,
                    onVoiceChannelPreview: U,
                    user: H,
                    channel: C,
                    generateReactionImage: z,
                    reactionImageAltText: x(B, H),
                    entry: N,
                    buttons: X,
                }),
            }),
        ],
    });
}
