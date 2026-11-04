(n.d(e, { default: () => I }), n(323874), n(14289), n(35956));
var i = n(477900),
    a = n(582128),
    c = n(855986),
    l = n(876230),
    s = n(192308),
    o = n(224640),
    r = n(20742),
    u = n(430993),
    _ = n(696208),
    d = n(104510),
    p = n(793574),
    b = n(688810),
    U = n(987144),
    f = n(773669),
    A = n(91982),
    R = n(71393),
    E = n(129230),
    L = n(652215),
    M = n(792996),
    O = n(401146),
    D = n(519636);
function I(t) {
    let {
            guildId: e,
            transitionState: I,
            onClose: T,
            analyticsLocation: y,
            sourceAnalyticsLocations: h,
            videoPlacement: G,
        } = t,
        S = (0, c.bG)([R.A], () => (null != e ? R.A.getGuild(e) : null)),
        g = (function (t) {
            let [e, n] = a.useState(void 0);
            return (
                a.useEffect(() => {
                    let e;
                    if (t.startsWith("en")) return;
                    let i = `https://${window.GLOBAL_ENV.CDN_HOST}/assets/boosting/marketing/captions/boosting_marketing_video_captions_${t}.vtt`,
                        a = !1;
                    return (
                        fetch(i)
                            .then((t) => {
                                if (t.ok) return t.text();
                            })
                            .then((t) => {
                                a || null == t || n((e = URL.createObjectURL(new Blob([t], { type: "text/vtt" }))));
                            })
                            .catch(() => {}),
                        () => {
                            ((a = !0), null != e && URL.revokeObjectURL(e), n(void 0));
                        }
                    );
                }, [t]),
                e
            );
        })((0, c.bG)([f.default], () => f.default.locale)),
        { analyticsLocations: k } = (0, b.Ay)(h, p.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [m, j] = a.useState(!1),
        C = a.useRef(!1),
        x = a.useRef(null),
        v = a.useRef(null),
        N = a.useMemo(
            () => ({
                ...(null != e ? { guild_id: e } : {}),
                type: L.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: k,
                location_section: y.section,
                location_object: y.object,
                video_placement: G,
            }),
            [y.object, y.section, k, e, G],
        ),
        P = a.useCallback(
            (t) => {
                if (t !== l.Q6.PLAYING || C.current) return;
                C.current = !0;
                let e = x.current?.duration;
                E.default.track(L.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                    ...N,
                    ...(null != e && Number.isFinite(e) ? { video_duration_sec: e } : {}),
                });
            },
            [N],
        ),
        B = a.useCallback(() => {
            let t = x.current?.currentTime,
                e = x.current?.duration;
            E.default.track(L.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                ...N,
                ...(null != t && Number.isFinite(t) ? { seconds_played: t } : {}),
                ...(null != e && Number.isFinite(e) ? { video_duration_sec: e } : {}),
            });
        }, [N]),
        w = M.intl.string(M.t["0f1VCH"]);
    return (0, i.jsxs)(o.d, {
        size: "xxl",
        transitionState: I,
        onClose: T,
        "aria-label": w,
        children: [
            (0, i.jsx)(r.rQ, { title: w }),
            (0, i.jsx)(u.c, {
                children: (0, i.jsx)("div", {
                    className: O.K,
                    children: (0, i.jsx)(A.Ft, {
                        ref: x,
                        playerRef: v,
                        parentTransitionState: I,
                        orientation: "landscape",
                        src: "https://cdn.discordapp.com/assets/content/f0b9a61f96ee69dc341c22c04fe6458660d9317caae3d381c05cf8348fca5b95.mp4",
                        poster: D.A,
                        captionTrackUrl: g,
                        autoplay: !0,
                        autoFocus: !0,
                        hidePlaybackSpeedBtn: !0,
                        onPlayerStateChange: P,
                        onEnded: B,
                    }),
                }),
            }),
            (0, i.jsx)(_.H, {
                actions: [
                    null != S
                        ? {
                              variant: "expressive",
                              size: "md",
                              icon: d._,
                              text: M.intl.string(M.t.gKmQ1G),
                              onClick: async function () {
                                  null != S &&
                                      (v.current?.pause(),
                                      j(!0),
                                      await (0, U.g)({
                                          analyticsLocations: k,
                                          analyticsLocation: {
                                              page: L.liQ.PREMIUM_GUILD_USER_MODAL,
                                              section: L.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                              object: L.ZSU.BUTTON_CTA,
                                              objectType: L.btD.BUY,
                                          },
                                          guild: S,
                                          onClose: T,
                                      }),
                                      j(!1));
                              },
                              loading: m,
                          }
                        : {
                              variant: "primary",
                              size: "md",
                              text: M.intl.string(M.t.BMx1iy),
                              onClick: async function () {
                                  (v.current?.pause(),
                                      await (0, s.mM)(async () => {
                                          let { default: t } = await Promise.all([n.e(378357), n.e(418710)]).then(
                                              n.bind(n, 770101),
                                          );
                                          return (e) =>
                                              (0, i.jsx)(t, {
                                                  ...e,
                                                  onSelectGuild: (t) => {
                                                      (e.onClose(),
                                                          T(),
                                                          (0, U.g)({
                                                              analyticsLocations: k,
                                                              analyticsLocation: {
                                                                  page: L.liQ.PREMIUM_GUILD_USER_MODAL,
                                                                  section: L.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                                  object: L.ZSU.BUTTON_CTA,
                                                                  objectType: L.btD.BUY,
                                                              },
                                                              guild: t,
                                                          }));
                                                  },
                                              });
                                      }));
                              },
                          },
                ],
            }),
        ],
    });
}
