n.d(t, { Z: () => e_ });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    u = n(952265),
    c = n(481060),
    d = n(239091),
    s = n(13245),
    _ = n(615287),
    h = n(110924),
    C = n(100527),
    f = n(906732),
    p = n(146282),
    m = n(70097),
    E = n(594190),
    g = n(567409),
    v = n(74299),
    I = n(989941),
    R = n(199902),
    b = n(314897),
    A = n(592125),
    y = n(430824),
    L = n(131951),
    O = n(944486),
    Z = n(449224),
    N = n(574254),
    k = n(556296),
    T = n(237997),
    S = n(451478),
    x = n(585483),
    U = n(358085),
    w = n(13140),
    D = n(145597),
    P = n(830917),
    V = n(681603),
    B = n(358446),
    F = n(348733),
    M = n(708383),
    j = n(923532),
    Y = n(915614),
    G = n(777382),
    H = n(333031),
    W = n(371651),
    K = n(610394),
    z = n(388627),
    Q = n(561064),
    X = n(987650),
    J = n(981631),
    q = n(206583),
    $ = n(388032),
    ee = n(514138);
let et = !U.isPlatformEmbedded && !1,
    en = et
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: ee.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    ei = null;
function er(e) {
    e.preventDefault();
}
function ea(e) {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: D.qU,
                version: 1
            });
    });
}
let el = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.P3F, {
            className: l()(ee.overlayBackground, {
                [ee.overlayActive]: !r,
                [ee.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === J.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ea,
            children: r
                ? null
                : (0, i.jsx)(H.Z, {
                      className: ee.closeContainer,
                      children: (0, i.jsx)(Y.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.Uz9
                      })
                  })
        });
    }),
    eo = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(H.Z, {
                  className: ee.closeContainer,
                  children: (0, i.jsx)(Y.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, D.QF)()),
                      IconComponent: c.d$P
                  })
              })
            : null;
    });
function eu() {
    if (null != N.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    s.Z.setInputLocked(!0, (0, D.QF)());
}
function ec() {
    s.Z.setFocusedPID(D.Js);
}
function ed() {
    s.Z.setFocusedPID(null);
}
function es(e) {
    let t = K.ZP.isInputLocked((0, D.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? x.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && x.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function e_() {
    let e = (0, Q.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: a,
            hasValidResolution: d,
            hasZeroSizeDimension: m,
            keybind: N,
            isPreviewingInGame: x
        } = (0, o.cj)(
            [K.ZP, T.Z, S.Z, k.ZP],
            () => {
                let t = S.Z.windowSize((0, P.ZY)(e)),
                    n = k.ZP.getOverlayKeybind(),
                    i = (0, D.QF)();
                return {
                    locked: K.ZP.isInputLocked(i),
                    focused: i === D.Js ? T.Z.isFocused(i) : K.ZP.isFocused(i),
                    incompatibleApp: T.Z.incompatibleApp,
                    hasValidResolution: (0, D.Te)(t),
                    isPreviewingInGame: T.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, w.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        U = (0, o.e7)([T.Z], () => T.Z.getActiveRegions()),
        { analyticsLocations: Y } = (0, f.ZP)(C.Z.OVERLAY),
        H = t || x;
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
            s.Z.overlayReady((0, D.QF)()), e.addEventListener('keydown', es), e.addEventListener('keyup', es), et && (e.document.hasFocus() && s.Z.setFocusedPID(D.Js), e.addEventListener('focus', ec), e.addEventListener('blur', ed));
        },
        () => {
            e.removeEventListener('keydown', es), e.removeEventListener('keyup', es), et && (e.removeEventListener('focus', ec), e.removeEventListener('blur', ed));
        }
    ),
        (function () {
            let e = r.useRef(!1),
                t = (0, z.pL)(),
                n = O.Z.getVoiceChannelId(),
                i = A.Z.getChannel(n),
                a = null != i ? y.Z.getGuild(i.guild_id) : null,
                l = null != R.Z.getCurrentUserActiveStream(),
                o = null != n,
                u = (0, v.Z)(L.Z) && !l && null != t,
                c = o && null != a && null != n,
                { showKeybindIndicators: d, dismissKeybindNotification: h } = (0, B.K)();
            r.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    s.Z.track(J.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: o,
                        text_widget_connected: !1,
                        overlay_render_method: _.gl[W.Z.getOverlayMethod((0, D.QF)())]
                    });
                let i = null;
                (i = d
                    ? {
                          type: X.nc.KEYBIND_INDICATORS,
                          markAsDismissed: h
                      }
                    : { type: X.nc.WELCOME }),
                    u && c
                        ? (i = {
                              type: X.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: a
                          })
                        : u &&
                          (i = {
                              type: X.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    s.Z.overlayMounted(i);
            }, [o, u, c, t, n, a, d, h]);
        })(),
        r.useEffect(() => {
            if (t) {
                if (((0, u.Ay)(c.u1M), e.addEventListener('contextmenu', er, !1), null != ei)) {
                    let e = Date.now() - ei;
                    s.Z.track(J.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ei = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', er, !1);
                };
            }
            e.removeEventListener('contextmenu', er, !1), null == ei && ((ei = Date.now()), s.Z.track(J.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let ea = (0, o.e7)([O.Z], () => O.Z.getVoiceChannelId()),
        e_ = (0, o.e7)([A.Z], () => A.Z.getChannel(ea)),
        eh = (0, o.e7)([y.Z], () => (null != e_ ? y.Z.getGuild(e_.guild_id) : null)),
        eC = (0, o.e7)([b.default], () => b.default.getId()),
        ef = (0, o.e7)([E.ZP, Z.Z], () => (0, I.Z)(E.ZP, Z.Z)),
        ep = (0, g.Ns)(null == ef ? void 0 : ef.id),
        em = (0, o.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(q.YN.GAME_PROFILE_FEED)),
        eE = (0, h.Z)(em);
    return (r.useEffect(() => {
        !eE && em && s.Z.notifyContentInventoryReady(ep);
    }, [ep, em, eE]),
    m || a)
        ? null
        : (0, i.jsx)(f.Gt, {
              value: Y,
              children: (0, i.jsx)(c.vWI, {
                  children: (0, i.jsxs)('div', {
                      className: ee.overlay,
                      children: [
                          (0, i.jsx)(M.Z, {}),
                          x &&
                              (0, i.jsx)('header', {
                                  className: ee.previewingInGameHeader,
                                  children: $.intl.string($.t.iOq96u)
                              }),
                          en,
                          (!t || U.has(J.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(el, {
                                  locked: t,
                                  keybind: N,
                                  onClick: eu
                              }),
                          d
                              ? (0, i.jsx)(G.Z, {
                                    className: l()({
                                        [ee.layoutLocked]: t,
                                        [ee.layoutUnlocked]: !t
                                    })
                                })
                              : t
                                ? null
                                : (0, i.jsx)('div', {
                                      className: ee.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: ee.inactiveContainer,
                                          children: $.intl.format($.t.ketnW1, D.FW)
                                      })
                                  }),
                          et &&
                              (0, i.jsx)(eo, {
                                  locked: t,
                                  focused: n
                              }),
                          null != eh &&
                              null != ea &&
                              (0, i.jsx)(j.Z, {
                                  streamerId: eC,
                                  guildId: eh.id,
                                  channelId: ea
                              }),
                          (0, i.jsx)(F.Z, {
                              locked: H,
                              keybind: N
                          }),
                          (0, i.jsx)(V.Z, {})
                      ]
                  })
              })
          });
}
