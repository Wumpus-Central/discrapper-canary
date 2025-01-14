n.d(t, {
    Z: function () {
        return eo;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    u = n(239091),
    d = n(13245),
    h = n(615287),
    f = n(100527),
    p = n(906732),
    m = n(146282),
    v = n(70097),
    g = n(567409),
    x = n(74299),
    C = n(199902),
    Z = n(592125),
    _ = n(430824),
    I = n(131951),
    j = n(944486),
    E = n(574254),
    b = n(556296),
    w = n(808506),
    k = n(237997),
    N = n(451478),
    L = n(585483),
    y = n(358085),
    S = n(13140),
    T = n(145597),
    A = n(830917),
    O = n(86071),
    V = n(681603),
    P = n(915614),
    M = n(690336),
    R = n(333031),
    D = n(371651),
    z = n(388627),
    W = n(319414),
    F = n(561064),
    G = n(987650),
    U = n(501787),
    B = n(981631),
    Y = n(206583),
    H = n(388032),
    K = n(167566);
let X = !y.isPlatformEmbedded && !1,
    Q = X
        ? (0, i.jsx)(v.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: K.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    q = null;
function J(e) {
    e.preventDefault();
}
function $(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: U.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let ee = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e;
        return (0, i.jsx)(c.Clickable, {
            className: o()(K.overlayBackground, {
                [K.overlayActive]: !l,
                [K.overlayLocked]: l
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: l
                ? null
                : (0, i.jsx)(R.Z, {
                      className: K.closeContainer,
                      children: (0, i.jsx)(P.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.XLargeIcon
                      })
                  })
        });
    }),
    et = l.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(R.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(P.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, T.QF)()),
                      IconComponent: c.LockUnlockedIcon
                  })
              })
            : null;
    });
function en() {
    if (null != E.Z.getContextMenu()) {
        (0, u.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, T.QF)());
}
function ei() {
    d.Z.setFocusedPID(T.Js);
}
function el() {
    d.Z.setFocusedPID(null);
}
function er(e) {
    let t = k.Z.isLocked((0, T.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? L.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && L.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eo(e) {
    var t, n;
    let { isEmbeddedActivity: r } = e,
        u = (0, F.Z)(),
        {
            locked: v,
            focused: E,
            incompatibleApp: L,
            hasValidResolution: y,
            hasZeroSizeDimension: P,
            keybind: R
        } = (0, a.cj)([k.Z, N.Z, b.Z], () => {
            let e = N.Z.windowSize((0, A.ZY)(u)),
                t = b.Z.getOverlayKeybind();
            return {
                locked: k.Z.isLocked((0, T.QF)()),
                focused: k.Z.isFocused((0, T.QF)()),
                incompatibleApp: k.Z.incompatibleApp,
                hasValidResolution: (0, T.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, S.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: U } = (0, p.ZP)(f.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = l.useRef({
                mount: e,
                unmount: t
            });
            l.useEffect(
                () =>
                    void (n.current = {
                        mount: e,
                        unmount: t
                    })
            ),
                l.useEffect(
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
                d.Z.overlayReady((0, T.QF)()), u.addEventListener('keydown', er), u.addEventListener('keyup', er), X && (u.document.hasFocus() && d.Z.setFocusedPID(T.Js), u.addEventListener('focus', ei), u.addEventListener('blur', el));
            },
            () => {
                u.removeEventListener('keydown', er), u.removeEventListener('keyup', er), X && (u.removeEventListener('focus', ei), u.removeEventListener('blur', el));
            }
        ),
        !(function () {
            let e = l.useRef(!1),
                t = (0, z.pL)(),
                n = j.Z.getVoiceChannelId(),
                i = Z.Z.getChannel(n),
                r = null != i ? _.Z.getGuild(i.guild_id) : null,
                o = null != C.Z.getCurrentUserActiveStream(),
                s = null != n,
                c = (0, x.Z)(I.Z) && !o && null != t,
                u = s && null != r && null != n,
                f = (0, g.Ns)(null == t ? void 0 : t.id),
                p = (0, a.e7)([m.Z], () => null != m.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED));
            l.useEffect(() => {
                var i;
                if (!p || e.current) return;
                (e.current = !0),
                    d.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[h.gl.OutOfProcess]
                    });
                let l = null !== (i = w.Z.getFocusedPID()) && void 0 !== i ? i : (0, T.QF)();
                if (D.Z.hasChangedRenderMode(l)) return;
                let o = [{ type: G.nc.WELCOME }];
                if (
                    (c && u
                        ? o.push({
                              type: G.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : c &&
                          o.push({
                              type: G.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    f.length > 0)
                ) {
                    let { enabled: e } = O.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        o.push({
                            type: G.nc.CONTENT_INVENTORY,
                            entries: f
                        });
                }
                d.Z.overlayMounted(...o);
            }, [p, f, s, c, u, t, n, r]);
        })(),
        (t = v),
        (n = u),
        l.useEffect(() => {
            if (t) {
                if (((0, s.Ay)(c.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', J, !1), null != q)) {
                    let e = Date.now() - q;
                    d.Z.track(B.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (q = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', J, !1);
                };
            }
            n.removeEventListener('contextmenu', J, !1), null == q && ((q = Date.now()), d.Z.track(B.rMx.OVERLAY_UNLOCKED));
        }, [t, n]),
        (0, i.jsx)(p.Gt, {
            value: U,
            children: (0, i.jsx)(c.RedesignIconContextProvider, {
                children:
                    P || L
                        ? null
                        : (0, i.jsx)(c.ThemeProvider, {
                              theme: B.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(K.overlay, e),
                                      children: [
                                          !r && Q,
                                          (0, i.jsx)(ee, {
                                              locked: v,
                                              keybind: R,
                                              onClick: en
                                          }),
                                          y
                                              ? (0, i.jsx)(M.Z, {
                                                    className: o()({
                                                        [K.layoutLocked]: v,
                                                        [K.layoutUnlocked]: !v
                                                    })
                                                })
                                              : v
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: K.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: K.inactiveContainer,
                                                          children: H.intl.format(H.t.ketnW1, T.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(W.Z, {}),
                                          !r &&
                                              X &&
                                              (0, i.jsx)(et, {
                                                  locked: v,
                                                  focused: E
                                              }),
                                          (0, i.jsx)(V.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
