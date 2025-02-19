n.d(t, { Z: () => eo }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(952265),
    d = n(481060),
    u = n(239091),
    c = n(13245),
    h = n(100527),
    _ = n(906732),
    p = n(146282),
    f = n(70097),
    m = n(567409),
    g = n(74299),
    v = n(199902),
    E = n(592125),
    x = n(430824),
    I = n(131951),
    C = n(944486),
    S = n(556296),
    Z = n(808506),
    N = n(237997),
    y = n(451478),
    O = n(585483),
    b = n(358085),
    T = n(13140),
    w = n(145597),
    j = n(830917),
    A = n(86071),
    k = n(32300),
    R = n(681603),
    L = n(915614),
    D = n(268861),
    P = n(690336),
    W = n(333031),
    M = n(371651),
    z = n(610394),
    V = n(388627),
    U = n(319414),
    F = n(561064),
    B = n(987650),
    G = n(501787),
    H = n(981631),
    Y = n(206583),
    Q = n(470102);
let K = !b.isPlatformEmbedded && !1,
    X = K
        ? (0, i.jsx)(f.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: Q.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    J = null;
function q(e) {
    e.preventDefault();
}
function $(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: G.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let ee = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(d.P3F, {
            className: o()(Q.overlayBackground, {
                [Q.overlayActive]: !r,
                [Q.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === H.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: r
                ? null
                : (0, i.jsx)(W.Z, {
                      className: Q.closeContainer,
                      children: (0, i.jsx)(L.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    et = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(W.Z, {
                  className: Q.closeContainer,
                  children: (0, i.jsx)(L.Z, {
                      onClick: () => c.Z.setInputLocked(!1, (0, w.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function en() {
    c.Z.setInputLocked(!0, (0, w.QF)());
}
function ei() {
    c.Z.setFocusedPID(w.Js);
}
function er() {
    c.Z.setFocusedPID(null);
}
function el(e) {
    let t = z.ZP.isInputLocked((0, w.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? O.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && O.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function eo(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, F.Z)(),
        {
            locked: l,
            focused: u,
            incompatibleApp: f,
            hasZeroSizeDimension: O,
            keybind: b
        } = (0, a.cj)(
            [z.ZP, N.Z, y.Z, S.ZP],
            () => {
                let e = y.Z.windowSize((0, j.ZY)(n)),
                    t = S.ZP.getOverlayKeybind(),
                    i = (0, w.QF)();
                return {
                    locked: z.ZP.isInputLocked(i),
                    focused: i === w.Js ? N.Z.isFocused(i) : z.ZP.isFocused((0, w.QF)()),
                    incompatibleApp: N.Z.incompatibleApp,
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, T.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: L } = (0, _.ZP)(h.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = r.useRef({
                mount: e,
                unmount: t
            });
            r.useEffect(() => {
                n.current = {
                    mount: e,
                    unmount: t
                };
            }),
                r.useEffect(
                    () => (
                        n.current.mount(),
                        () => {
                            n.current.unmount();
                        }
                    ),
                    []
                );
        })(
            () => {
                c.Z.overlayReady((0, w.QF)()), n.addEventListener('keydown', el), n.addEventListener('keyup', el), K && (n.document.hasFocus() && c.Z.setFocusedPID(w.Js), n.addEventListener('focus', ei), n.addEventListener('blur', er));
            },
            () => {
                n.removeEventListener('keydown', el), n.removeEventListener('keyup', el), K && (n.removeEventListener('focus', ei), n.removeEventListener('blur', er));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, V.pL)(),
                n = C.Z.getVoiceChannelId(),
                i = E.Z.getChannel(n),
                l = null != i ? x.Z.getGuild(i.guild_id) : null,
                o = null != v.Z.getCurrentUserActiveStream(),
                s = null != n,
                d = (0, g.Z)(I.Z) && !o && null != t,
                u = s && null != l && null != n,
                { enabled: h } = A.Z.useExperiment({ location: 'Overlay' }, { autoTrackExposure: !0 }),
                { allowActivityWidget: _ } = (0, k.o4)('overlay'),
                f = (0, m.Ns)(null == t ? void 0 : t.id),
                S = (0, a.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED) || (!h && !_), [h, _]);
            r.useEffect(() => {
                var i;
                if (!S || e.current) return;
                e.current = !0;
                let r = null !== (i = Z.Z.getFocusedPID()) && void 0 !== i ? i : (0, w.QF)();
                if (M.default.hasChangedRenderMode(r)) return;
                let o = [{ type: B.nc.WELCOME }];
                d && u
                    ? o.push({
                          type: B.nc.GO_LIVE_VOICE,
                          game: t,
                          voiceChannelId: n,
                          voiceGuild: l
                      })
                    : d &&
                      o.push({
                          type: B.nc.GO_LIVE_NON_VOICE,
                          game: t
                      }),
                    f.length > 0 &&
                        (h || _) &&
                        o.push({
                            type: B.nc.CONTENT_INVENTORY,
                            entries: f
                        }),
                    c.Z.overlayMounted(...o);
            }, [S, f, s, d, u, t, n, l, _, h]);
        })(),
        r.useEffect(() => {
            if (l) {
                if (((0, s.Ay)(d.u1M), n.addEventListener('contextmenu', q, !1), null != J)) {
                    let e = Date.now() - J;
                    c.Z.track(H.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (J = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', q, !1);
                };
            }
            n.removeEventListener('contextmenu', q, !1), null == J && ((J = Date.now()), c.Z.track(H.rMx.OVERLAY_UNLOCKED));
        }, [l, n]),
        (0, i.jsx)(_.Gt, {
            value: L,
            children: (0, i.jsx)(d.vWI, {
                children:
                    O || f
                        ? null
                        : (0, i.jsx)(d.f6W, {
                              theme: H.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(Q.overlay, e),
                                      children: [
                                          !t && X,
                                          (0, i.jsx)(ee, {
                                              locked: l,
                                              keybind: b,
                                              onClick: en
                                          }),
                                          (0, i.jsx)(P.Z, {
                                              className: o()({
                                                  [Q.layoutLocked]: l,
                                                  [Q.layoutUnlocked]: !l
                                              })
                                          }),
                                          (0, i.jsx)(U.Z, {}),
                                          !t &&
                                              K &&
                                              (0, i.jsx)(et, {
                                                  locked: l,
                                                  focused: u
                                              }),
                                          (0, i.jsx)(R.Z, {}),
                                          (0, i.jsx)(D.Z, { locked: l })
                                      ]
                                  })
                          })
            })
        })
    );
}
