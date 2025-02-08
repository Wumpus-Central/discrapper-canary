n.d(t, { Z: () => es });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    c = n(952265),
    d = n(481060),
    _ = n(239091),
    u = n(13245),
    s = n(615287),
    h = n(110924),
    f = n(100527),
    p = n(906732),
    C = n(146282),
    m = n(70097),
    g = n(594190),
    E = n(567409),
    I = n(74299),
    v = n(989941),
    b = n(199902),
    R = n(314897),
    y = n(592125),
    A = n(430824),
    Z = n(131951),
    k = n(944486),
    N = n(449224),
    L = n(574254),
    O = n(556296),
    S = n(237997),
    T = n(451478),
    x = n(585483),
    w = n(358085),
    U = n(13140),
    B = n(145597),
    D = n(830917),
    P = n(681603),
    V = n(358446),
    F = n(348733),
    M = n(708383),
    W = n(923532),
    G = n(915614),
    H = n(777382),
    j = n(333031),
    Y = n(371651),
    z = n(610394),
    K = n(388627),
    Q = n(561064),
    X = n(987650),
    J = n(981631),
    q = n(206583),
    $ = n(388032),
    ee = n(800004);
let et = !w.isPlatformEmbedded && !1,
    en = et
        ? (0, r.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: ee.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    er = null;
function ei(e) {
    e.preventDefault();
}
function ea(e) {
    (0, _.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                layoutId: B.qU,
                version: 1
            });
    });
}
let eo = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(d.P3F, {
            className: o()(ee.overlayBackground, {
                [ee.overlayActive]: !i,
                [ee.overlayLocked]: i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === J.AeJ.PRIMARY && t === r && n();
            },
            onContextMenu: ea,
            children: i
                ? null
                : (0, r.jsx)(j.Z, {
                      className: ee.closeContainer,
                      children: (0, r.jsx)(G.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    el = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(j.Z, {
                  className: ee.closeContainer,
                  children: (0, r.jsx)(G.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, B.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function ec() {
    if (null != L.Z.getContextMenu()) {
        (0, _.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, B.QF)());
}
function ed() {
    u.Z.setFocusedPID(B.Js);
}
function e_() {
    u.Z.setFocusedPID(null);
}
function eu(e) {
    let t = z.ZP.isInputLocked((0, B.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? x.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && x.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function es() {
    let e = (0, Q.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: a,
            hasValidResolution: _,
            hasZeroSizeDimension: m,
            keybind: L,
            isPreviewingInGame: x
        } = (0, l.cj)(
            [z.ZP, S.Z, T.Z, O.Z],
            () => {
                let t = T.Z.windowSize((0, D.ZY)(e)),
                    n = O.Z.getOverlayKeybind(),
                    r = (0, B.QF)();
                return {
                    locked: z.ZP.isInputLocked(r),
                    focused: r === B.Js ? S.Z.isFocused(r) : z.ZP.isFocused(r),
                    incompatibleApp: S.Z.incompatibleApp,
                    hasValidResolution: (0, B.Te)(t),
                    isPreviewingInGame: S.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, U.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        w = (0, l.e7)([S.Z], () => S.Z.getActiveRegions()),
        { analyticsLocations: G } = (0, p.ZP)(f.Z.OVERLAY),
        j = t || x;
    !(function (e, t) {
        let n = i.useRef({
            mount: e,
            unmount: t
        });
        i.useEffect(
            () =>
                void (n.current = {
                    mount: e,
                    unmount: t
                })
        ),
            i.useEffect(
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
            u.Z.overlayReady((0, B.QF)()), e.addEventListener('keydown', eu), e.addEventListener('keyup', eu), et && (e.document.hasFocus() && u.Z.setFocusedPID(B.Js), e.addEventListener('focus', ed), e.addEventListener('blur', e_));
        },
        () => {
            e.removeEventListener('keydown', eu), e.removeEventListener('keyup', eu), et && (e.removeEventListener('focus', ed), e.removeEventListener('blur', e_));
        }
    ),
        (function () {
            let e = i.useRef(!1),
                t = (0, K.pL)(),
                n = k.Z.getVoiceChannelId(),
                r = y.Z.getChannel(n),
                a = null != r ? A.Z.getGuild(r.guild_id) : null,
                o = null != b.Z.getCurrentUserActiveStream(),
                l = null != n,
                c = (0, I.Z)(Z.Z) && !o && null != t,
                d = l && null != a && null != n,
                { showKeybindIndicators: _, dismissKeybindNotification: h } = (0, V.K)();
            i.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    u.Z.track(J.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: l,
                        text_widget_connected: !1,
                        overlay_render_method: s.gl[Y.Z.getOverlayMethod((0, B.QF)())]
                    });
                let r = null;
                (r = _
                    ? {
                          type: X.nc.KEYBIND_INDICATORS,
                          markAsDismissed: h
                      }
                    : { type: X.nc.WELCOME }),
                    c && d
                        ? (r = {
                              type: X.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: a
                          })
                        : c &&
                          (r = {
                              type: X.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    u.Z.overlayMounted(r);
            }, [l, c, d, t, n, a, _, h]);
        })(),
        i.useEffect(() => {
            if (t) {
                if (((0, c.Ay)(d.u1M), e.addEventListener('contextmenu', ei, !1), null != er)) {
                    let e = Date.now() - er;
                    u.Z.track(J.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (er = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', ei, !1);
                };
            }
            e.removeEventListener('contextmenu', ei, !1), null == er && ((er = Date.now()), u.Z.track(J.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let ea = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId()),
        es = (0, l.e7)([y.Z], () => y.Z.getChannel(ea)),
        eh = (0, l.e7)([A.Z], () => (null != es ? A.Z.getGuild(es.guild_id) : null)),
        ef = (0, l.e7)([R.default], () => R.default.getId()),
        ep = (0, l.e7)([g.ZP, N.Z], () => (0, v.Z)(g.ZP, N.Z)),
        eC = (0, E.Ns)(null == ep ? void 0 : ep.id),
        em = (0, l.e7)([C.Z], () => null != C.Z.getLastFeedFetchDate(q.YN.GAME_PROFILE_FEED)),
        eg = (0, h.Z)(em);
    return (i.useEffect(() => {
        !eg && em && u.Z.notifyContentInventoryReady(eC);
    }, [eC, em, eg]),
    m || a)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: G,
              children: (0, r.jsx)(d.vWI, {
                  children: (0, r.jsxs)('div', {
                      className: ee.overlay,
                      children: [
                          (0, r.jsx)(M.Z, {}),
                          x &&
                              (0, r.jsx)('header', {
                                  className: ee.previewingInGameHeader,
                                  children: $.intl.string($.t.iOq96u)
                              }),
                          en,
                          (!t || w.has(J.O0n.TEXT_WIDGET)) &&
                              (0, r.jsx)(eo, {
                                  locked: t,
                                  keybind: L,
                                  onClick: ec
                              }),
                          _
                              ? (0, r.jsx)(H.Z, {
                                    className: o()({
                                        [ee.layoutLocked]: t,
                                        [ee.layoutUnlocked]: !t
                                    })
                                })
                              : t
                                ? null
                                : (0, r.jsx)('div', {
                                      className: ee.invalidContainer,
                                      children: (0, r.jsx)('div', {
                                          className: ee.inactiveContainer,
                                          children: $.intl.format($.t.ketnW1, B.FW)
                                      })
                                  }),
                          et &&
                              (0, r.jsx)(el, {
                                  locked: t,
                                  focused: n
                              }),
                          null != eh &&
                              null != ea &&
                              (0, r.jsx)(W.Z, {
                                  streamerId: ef,
                                  guildId: eh.id,
                                  channelId: ea
                              }),
                          (0, r.jsx)(F.Z, {
                              locked: j,
                              keybind: L
                          }),
                          (0, r.jsx)(P.Z, {})
                      ]
                  })
              })
          });
}
