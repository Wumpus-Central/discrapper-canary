"use strict";
n.d(t, { A: () => P }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(205327),
    a = n(311907),
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
    E = n(939341),
    g = n(583846),
    A = n(405310),
    I = n(434200),
    T = n(176563),
    S = n(363670),
    y = n(910692),
    v = n(693879),
    N = n(18282),
    C = n(809854),
    b = n(652215),
    R = n(272984),
    O = n(985018),
    D = n(388277),
    L = n(187866);
function w(e, t) {
    return O.intl.formatToPlainString(O.t.h2yWWX, { username: t.username, activity: e });
}
let x = (e, t, n) => {
    let { artist: r, media: i } = e,
        s = O.t["6iNxrl"],
        a = m.Ay.getName(t.guild_id, t.id, n);
    return O.intl.formatToMarkdownString(s, { artist: r, userName: a, media: i }).replaceAll("*", "");
};
function M(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, C.e)(),
        { durationTimestamp: a, seekBarStyles: o } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let r = Math.min(n, s),
                i = n - e,
                a = Math.floor((Math.max(r - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${a}%` }, durationTimestamp: (0, g.W6)({ start: 0 }, i) };
        }, [t, s]);
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
                      children: a,
                  }),
              ],
          });
}
function P(e) {
    let t,
        n,
        m,
        { channel: v, entry: C, closePopout: D, onReaction: P, onVoiceChannelPreview: k } = e,
        { largeImage: U } = (0, E.nO)({ entry: C }),
        { activity: G, currentEntry: F, artist: V, title: B, user: H } = (0, S.u7)(C),
        { primaryColor: j, secondaryColor: Y } = (0, T.A)(U?.src),
        W = (0, I.A)(b.fg2.SPOTIFY),
        K = (0, a.bG)(
            [c.A, p.default],
            () => (G?.type === b.$pd.LISTENING && null != H ? (0, _.A)(c.A, p.default, H, G) : void 0),
            [G, H],
            o.A,
        ),
        z = i.useCallback(() => {
            if (null == v || null == H) return;
            let e = G.timestamps?.start,
                t = (0, g.W6)(null != e ? { start: e } : C, Date.now());
            return (0, A.Lu)({
                user: H,
                channel: v,
                mediaImageSrc: U?.src,
                artist: V,
                description: x({ artist: V, media: B }, v, H),
                colors: [j, Y],
                badges: (0, A.N)({ timestamp: t }),
            });
        }, [G, V, v, C, U?.src, j, Y, B, H]);
    if (null == G || null == F) return null;
    let $ = V,
        q = [];
    if (F.media.provider === s.X.SPOTIFY) {
        (n = () => {
            (0, u.Mp)(G);
        }),
            (m = () => {
                (0, u.QX)(G, H.id);
            }),
            (t = () => {
                W?.() ?? (0, u.Mp)(G);
            });
        let e = (e) => {
            (0, u.mN)(G, H.id, e);
        };
        if (
            (($ = (0, r.jsx)(d.A, {
                artists: V,
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
    let Z = (0, r.jsx)(y.BC, {
        onClickThumbnail: m,
        channel: v,
        entry: C,
        headerIcons:
            F.media.provider === s.X.SPOTIFY
                ? (0, r.jsx)(N.A, { onClick: t, "aria-label": O.intl.string(O.t.rRffNz), Icon: h.A })
                : null,
        userDescription: (0, g.JM)(C) ? O.t.Tzx5D2 : O.t.CcVI1T,
        title: B,
        onClickTitle: n,
        subtitle: $,
        badges: null,
        children: G.timestamps?.start != null && (0, r.jsx)(M, { activity: G }),
    });
    return (0, r.jsxs)(y.YN, {
        children: [
            Z,
            (0, r.jsx)(y.Eh, {
                children: (0, r.jsx)(y.fD, {
                    onReaction: P,
                    onVoiceChannelPreview: k,
                    user: H,
                    channel: v,
                    generateReactionImage: z,
                    reactionImageAltText: w(V, H),
                    entry: C,
                    buttons: q,
                }),
            }),
        ],
    });
}
