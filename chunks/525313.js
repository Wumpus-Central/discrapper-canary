"use strict";
n.d(t, { A: () => M }), n(321073);
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
    p = n(961350),
    h = n(121090),
    m = n(562153),
    g = n(939341),
    E = n(583846),
    A = n(405310),
    I = n(434200),
    T = n(176563),
    y = n(363670),
    S = n(910692),
    v = n(693879),
    C = n(18282),
    b = n(809854),
    N = n(652215),
    R = n(272984),
    O = n(985018),
    D = n(388277),
    L = n(187866);
function w(e, t) {
    return O.intl.formatToPlainString(O.t.h2yWWX, { username: t.username, activity: e });
}
let x = (e, t, n) => {
    let { artist: r, media: i } = e,
        a = O.t["6iNxrl"],
        s = m.Ay.getName(t.guild_id, t.id, n);
    return O.intl.formatToMarkdownString(a, { artist: r, userName: s, media: i }).replaceAll("*", "");
};
function P(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: a } = (0, b.e)(),
        { durationTimestamp: s, seekBarStyles: o } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let r = Math.min(n, a),
                i = n - e,
                s = Math.floor((Math.max(r - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${s}%` }, durationTimestamp: (0, E.W6)({ start: 0 }, i) };
        }, [t, a]);
    return null == o
        ? null
        : (0, r.jsxs)("div", {
              className: D.lu,
              children: [
                  (0, r.jsx)(v.z, { entry: n }),
                  (0, r.jsx)("div", { className: D.Lt, children: (0, r.jsx)("div", { className: D.Vp, style: o }) }),
                  (0, r.jsx)(l.Text, {
                      className: D.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: s,
                  }),
              ],
          });
}
function M(e) {
    let t,
        n,
        m,
        { channel: v, entry: b, closePopout: D, onReaction: M, onVoiceChannelPreview: k } = e,
        { largeImage: U } = (0, g.nO)({ entry: b }),
        { activity: G, currentEntry: V, artist: F, title: B, user: j } = (0, y.u7)(b),
        { primaryColor: H, secondaryColor: Y } = (0, T.A)(U?.src),
        W = (0, I.A)(N.fg2.SPOTIFY),
        K = (0, s.bG)(
            [c.A, p.default],
            () => (G?.type === N.$pd.LISTENING && null != j ? (0, _.A)(c.A, p.default, j, G) : void 0),
            [G, j],
            o.A,
        ),
        z = i.useCallback(() => {
            if (null == v || null == j) return;
            let e = G.timestamps?.start,
                t = (0, E.W6)(null != e ? { start: e } : b, Date.now());
            return (0, A.Lu)({
                user: j,
                channel: v,
                mediaImageSrc: U?.src,
                artist: F,
                description: x({ artist: F, media: B }, v, j),
                colors: [H, Y],
                badges: (0, A.N)({ timestamp: t }),
            });
        }, [G, F, v, b, U?.src, H, Y, B, j]);
    if (null == G || null == V) return null;
    let $ = F,
        q = [];
    if (V.media.provider === a.X.SPOTIFY) {
        (n = () => {
            (0, u.Mp)(G);
        }),
            (m = () => {
                (0, u.QX)(G, j.id);
            }),
            (t = () => {
                W?.() ?? (0, u.Mp)(G);
            });
        let e = (e) => {
            (0, u.mN)(G, j.id, e);
        };
        if (
            (($ = (0, r.jsx)(d.A, {
                artists: F,
                canOpen: null != G.sync_id,
                linkClassName: L.zA,
                onOpenSpotifyArtist: e,
            })),
            K?.syncDisabled === !1)
        ) {
            let e = () => {
                (0, f.A)(K, R.Qp.USER_ACTIVITY_SYNC), D();
            };
            q.push(
                (0, r.jsx)(
                    l.Button,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: O.intl.string(O.t.eU3inB),
                        icon: l.J2m,
                        onClick: e,
                    },
                    "listen-along",
                ),
            );
        }
    }
    let Z = (0, r.jsx)(S.BC, {
        onClickThumbnail: m,
        channel: v,
        entry: b,
        headerIcons:
            V.media.provider === a.X.SPOTIFY
                ? (0, r.jsx)(C.A, { onClick: t, "aria-label": O.intl.string(O.t.rRffNz), Icon: h.A })
                : null,
        userDescription: (0, E.JM)(b) ? O.t.Tzx5D2 : O.t.CcVI1T,
        title: B,
        onClickTitle: n,
        subtitle: $,
        badges: null,
        children: G.timestamps?.start != null && (0, r.jsx)(P, { activity: G }),
    });
    return (0, r.jsxs)(S.YN, {
        children: [
            Z,
            (0, r.jsx)(S.Eh, {
                children: (0, r.jsx)(S.fD, {
                    onReaction: M,
                    onVoiceChannelPreview: k,
                    user: j,
                    channel: v,
                    generateReactionImage: z,
                    reactionImageAltText: w(F, j),
                    entry: b,
                    buttons: q,
                }),
            }),
        ],
    });
}
