n.d(t, { Z: () => L }), n(804061), n(704826), n(35282), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(423875),
    o = n(442837),
    s = n(902704),
    l = n(481060),
    c = n(952164),
    u = n(768419),
    d = n(424678),
    f = n(239470),
    p = n(894344),
    _ = n(314897),
    m = n(908841),
    h = n(5192),
    g = n(379357),
    E = n(561308),
    b = n(319604),
    y = n(31074),
    O = n(206295),
    v = n(551228),
    S = n(591853),
    I = n(371991),
    T = n(410441),
    C = n(981631),
    A = n(616922),
    N = n(388032),
    P = n(36310),
    R = n(813849);
function w(e, t) {
    return N.intl.formatToPlainString(N.t.h2yWWX, {
        username: t.username,
        activity: e,
    });
}
let D = (e, t, n) => {
    let { artist: r, media: i } = e,
        a = N.t["6iNxrl"],
        o = h.ZP.getName(t.guild_id, t.id, n);
    return N.intl
        .formatToMarkdownString(a, {
            artist: r,
            userName: o,
            media: i,
        })
        .replaceAll("*", "");
};
function x(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: a } = (0, I.tS)(),
        { durationTimestamp: o, seekBarStyles: s } = i.useMemo(() => {
            var e;
            let { start: n, end: r } = null != (e = t.timestamps) ? e : {};
            if (null == n || null == r) return {};
            let i = Math.min(r, a),
                o = r - n,
                s = Math.floor((Math.max(i - n, 0) / o) * 100);
            return {
                seekBarStyles: { width: "".concat(s, "%") },
                durationTimestamp: (0, E.T_)({ start: 0 }, o),
            };
        }, [t, a]);
    return null == s
        ? null
        : (0, r.jsxs)("div", {
              className: P.listeningTimeline,
              children: [
                  (0, r.jsx)(I.x3, { entry: n }),
                  (0, r.jsx)("div", {
                      className: P.seekBarContainer,
                      children: (0, r.jsx)("div", {
                          className: P.seekBarFill,
                          style: s,
                      }),
                  }),
                  (0, r.jsx)(l.Text, {
                      className: P.timestamp,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: o,
                  }),
              ],
          });
}
function L(e) {
    var t;
    let n,
        h,
        I,
        { channel: P, entry: L, closePopout: j, onReaction: M, onVoiceChannelPreview: k } = e,
        { largeImage: U } = (0, g.rv)({ entry: L }),
        { activity: G, currentEntry: Z, artist: F, title: B, user: V } = (0, v.pi)(L),
        { primaryColor: H, secondaryColor: Y } = (0, O.Z)(null == U ? void 0 : U.src),
        W = (0, y.Z)(C.ABu.SPOTIFY),
        K = (0, o.e7)(
            [u.Z, _.default],
            () =>
                (null == G ? void 0 : G.type) === C.IIU.LISTENING && null != V
                    ? (0, f.Z)(u.Z, _.default, V, G)
                    : void 0,
            [G, V],
            s.Z,
        ),
        z = i.useCallback(() => {
            var e;
            if (null == P || null == V) return;
            let t = null == (e = G.timestamps) ? void 0 : e.start,
                n = (0, E.T_)(null != t ? { start: t } : L, Date.now());
            return (0, b.CR)({
                user: V,
                channel: P,
                mediaImageSrc: null == U ? void 0 : U.src,
                artist: F,
                description: D(
                    {
                        artist: F,
                        media: B,
                    },
                    P,
                    V,
                ),
                colors: [H, Y],
                badges: (0, b.jE)({ timestamp: n }),
            });
        }, [G, F, P, L, null == U ? void 0 : U.src, H, Y, B, V]);
    if (null == G || null == Z) return null;
    let q = F,
        Q = [];
    if (Z.media.provider === a.p.SPOTIFY) {
        (h = () => {
            (0, c.aG)(G);
        }),
            (I = () => {
                (0, c.Z5)(G, V.id);
            }),
            (n = () => {
                var e;
                null != (e = null == W ? void 0 : W()) || (0, c.aG)(G);
            });
        let e = (e) => {
            (0, c.d$)(G, V.id, e);
        };
        if (
            ((q = (0, r.jsx)(d.Z, {
                artists: F,
                canOpen: null != G.sync_id,
                linkClassName: R.popoutTextSecondary,
                onOpenSpotifyArtist: e,
            })),
            (null == K ? void 0 : K.syncDisabled) === !1)
        ) {
            let e = () => {
                (0, p.Z)(K, A.kG.USER_ACTIVITY_SYNC), j();
            };
            Q.push(
                (0, r.jsx)(
                    l.Button,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: N.intl.string(N.t.eU3inB),
                        icon: l.iOO,
                        onClick: e,
                    },
                    "listen-along",
                ),
            );
        }
    }
    let X = (0, r.jsx)(S.wG, {
        onClickThumbnail: I,
        channel: P,
        entry: L,
        headerIcons:
            Z.media.provider === a.p.SPOTIFY
                ? (0, r.jsx)(T.Z, {
                      onClick: n,
                      "aria-label": N.intl.string(N.t.rRffNz),
                      Icon: m.Z,
                  })
                : null,
        userDescription: (0, E.kr)(L) ? N.t.Tzx5D2 : N.t.CcVI1T,
        title: B,
        onClickTitle: h,
        subtitle: q,
        badges: null,
        children: (null == (t = G.timestamps) ? void 0 : t.start) != null && (0, r.jsx)(x, { activity: G }),
    });
    return (0, r.jsxs)(S.yR, {
        children: [
            X,
            (0, r.jsx)(S.St, {
                children: (0, r.jsx)(S.WT, {
                    onReaction: M,
                    onVoiceChannelPreview: k,
                    user: V,
                    channel: P,
                    generateReactionImage: z,
                    reactionImageAltText: w(F, V),
                    entry: L,
                    buttons: Q,
                }),
            }),
        ],
    });
}
