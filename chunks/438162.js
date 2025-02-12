t.d(n, { Z: () => eh });
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(442837),
    d = t(952265),
    u = t(481060),
    c = t(239091),
    s = t(13245),
    _ = t(615287),
    h = t(110924),
    C = t(100527),
    p = t(906732),
    f = t(146282),
    m = t(70097),
    E = t(594190),
    g = t(567409),
    v = t(74299),
    I = t(989941),
    R = t(199902),
    O = t(314897),
    b = t(592125),
    A = t(430824),
    L = t(355863),
    y = t(131951),
    Z = t(944486),
    N = t(449224),
    T = t(574254),
    k = t(556296),
    S = t(237997),
    U = t(451478),
    x = t(585483),
    w = t(358085),
    P = t(13140),
    D = t(145597),
    V = t(830917),
    M = t(681603),
    B = t(358446),
    F = t(348733),
    Y = t(708383),
    j = t(923532),
    G = t(915614),
    W = t(777382),
    H = t(333031),
    K = t(371651),
    z = t(610394),
    Q = t(388627),
    X = t(561064),
    J = t(987650),
    q = t(981631),
    $ = t(206583),
    ee = t(388032),
    en = t(95613);
let et = !w.isPlatformEmbedded && !1,
    ei = et
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: en.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    er = null;
function ea(e) {
    e.preventDefault();
}
function el(e) {
    (0, c.jW)(e, async () => {
        let { default: e } = await t.e('17610').then(t.bind(t, 385620));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                layoutId: D.qU,
                version: 1
            });
    });
}
let eo = r.memo(function (e) {
        let { keybind: n, onClick: t, locked: r } = e;
        return (0, i.jsx)(u.P3F, {
            className: l()(en.overlayBackground, {
                [en.overlayActive]: !r,
                [en.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: i, button: r } = e;
                r === q.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: el,
            children: r
                ? null
                : (0, i.jsx)(H.Z, {
                      className: en.closeContainer,
                      children: (0, i.jsx)(G.Z, {
                          keybind: n,
                          onClick: t,
                          IconComponent: u.Uz9
                      })
                  })
        });
    }),
    ed = r.memo(function (e) {
        let { locked: n, focused: t } = e;
        return n && t
            ? (0, i.jsx)(H.Z, {
                  className: en.closeContainer,
                  children: (0, i.jsx)(G.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, D.QF)()),
                      IconComponent: u.d$P
                  })
              })
            : null;
    });
function eu() {
    if (null != T.Z.getContextMenu()) {
        (0, c.Zy)();
        return;
    }
    s.Z.setInputLocked(!0, (0, D.QF)());
}
function ec() {
    s.Z.setFocusedPID(D.Js);
}
function es() {
    s.Z.setFocusedPID(null);
}
function e_(e) {
    let n = z.ZP.isInputLocked((0, D.QF)());
    'alt' !== e.key.toLowerCase() || n || ('keyup' === e.type.toLowerCase() ? x.S.dispatch(q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && x.S.dispatch(q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eh() {
    let e = (0, X.Z)(),
        {
            locked: n,
            focused: t,
            incompatibleApp: a,
            hasValidResolution: c,
            hasZeroSizeDimension: m,
            keybind: T,
            isPreviewingInGame: x
        } = (0, o.cj)(
            [z.ZP, S.Z, U.Z, k.ZP],
            () => {
                let n = U.Z.windowSize((0, V.ZY)(e)),
                    t = k.ZP.getOverlayKeybind(),
                    i = (0, D.QF)();
                return {
                    locked: z.ZP.isInputLocked(i),
                    focused: i === D.Js ? S.Z.isFocused(i) : z.ZP.isFocused(i),
                    incompatibleApp: S.Z.incompatibleApp,
                    hasValidResolution: (0, D.Te)(n),
                    isPreviewingInGame: S.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === n.height || 0 === n.width,
                    keybind: null != t ? (0, P.BB)(t.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        w = (0, o.e7)([S.Z], () => S.Z.getActiveRegions()),
        { analyticsLocations: G } = (0, p.ZP)(C.Z.OVERLAY),
        H = n || x;
    !(function (e, n) {
        let t = r.useRef({
            mount: e,
            unmount: n
        });
        r.useEffect(() => {
            t.current = {
                mount: e,
                unmount: n
            };
        }),
            r.useEffect(
                () => (
                    t.current.mount(),
                    () => {
                        t.current.unmount();
                    }
                ),
                []
            );
    })(
        () => {
            s.Z.overlayReady((0, D.QF)()), e.addEventListener('keydown', e_), e.addEventListener('keyup', e_), et && (e.document.hasFocus() && s.Z.setFocusedPID(D.Js), e.addEventListener('focus', ec), e.addEventListener('blur', es));
        },
        () => {
            e.removeEventListener('keydown', e_), e.removeEventListener('keyup', e_), et && (e.removeEventListener('focus', ec), e.removeEventListener('blur', es));
        }
    ),
        (function () {
            let e = r.useRef(!1),
                n = (0, Q.pL)(),
                t = Z.Z.getVoiceChannelId(),
                i = b.Z.getChannel(t),
                a = null != i ? A.Z.getGuild(i.guild_id) : null,
                l = null != R.Z.getCurrentUserActiveStream(),
                o = null != t,
                d = (0, v.Z)(y.Z) && !l && null != n,
                u = o && null != a && null != t,
                { showKeybindIndicators: c, dismissKeybindNotification: h } = (0, B.K)();
            r.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    s.Z.track(q.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: o,
                        text_widget_connected: !1,
                        overlay_render_method: _.gl[K.default.getOverlayMethod((0, D.QF)())],
                        unpinned_widget_types: L.Z.getAllUnpinnedPinnedWidgets(D.qU)
                    });
                let i = null;
                (i = c
                    ? {
                          type: J.nc.KEYBIND_INDICATORS,
                          markAsDismissed: h
                      }
                    : { type: J.nc.WELCOME }),
                    d && u
                        ? (i = {
                              type: J.nc.GO_LIVE_VOICE,
                              game: n,
                              voiceChannelId: t,
                              voiceGuild: a
                          })
                        : d &&
                          (i = {
                              type: J.nc.GO_LIVE_NON_VOICE,
                              game: n
                          }),
                    s.Z.overlayMounted(i);
            }, [o, d, u, n, t, a, c, h]);
        })(),
        r.useEffect(() => {
            if (n) {
                if (((0, d.Ay)(u.u1M), e.addEventListener('contextmenu', ea, !1), null != er)) {
                    let e = Date.now() - er;
                    s.Z.track(q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (er = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', ea, !1);
                };
            }
            e.removeEventListener('contextmenu', ea, !1), null == er && ((er = Date.now()), s.Z.track(q.rMx.OVERLAY_UNLOCKED));
        }, [n, e]);
    let el = (0, o.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
        eh = (0, o.e7)([b.Z], () => b.Z.getChannel(el)),
        eC = (0, o.e7)([A.Z], () => (null != eh ? A.Z.getGuild(eh.guild_id) : null)),
        ep = (0, o.e7)([O.default], () => O.default.getId()),
        ef = (0, o.e7)([E.ZP, N.Z], () => (0, I.Z)(E.ZP, N.Z)),
        em = (0, g.Ns)(null == ef ? void 0 : ef.id),
        eE = (0, o.e7)([f.Z], () => null != f.Z.getLastFeedFetchDate($.YN.GAME_PROFILE_FEED)),
        eg = (0, h.Z)(eE);
    return (r.useEffect(() => {
        !eg && eE && s.Z.notifyContentInventoryReady(em);
    }, [em, eE, eg]),
    m || a)
        ? null
        : (0, i.jsx)(p.Gt, {
              value: G,
              children: (0, i.jsx)(u.vWI, {
                  children: (0, i.jsxs)('div', {
                      className: en.overlay,
                      children: [
                          (0, i.jsx)(Y.Z, {}),
                          x &&
                              (0, i.jsx)('header', {
                                  className: en.previewingInGameHeader,
                                  children: ee.intl.string(ee.t.iOq96u)
                              }),
                          ei,
                          (!n || w.has(q.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(eo, {
                                  locked: n,
                                  keybind: T,
                                  onClick: eu
                              }),
                          c
                              ? (0, i.jsx)(W.Z, {
                                    className: l()({
                                        [en.layoutLocked]: n,
                                        [en.layoutUnlocked]: !n
                                    })
                                })
                              : n
                                ? null
                                : (0, i.jsx)('div', {
                                      className: en.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: en.inactiveContainer,
                                          children: ee.intl.format(ee.t.ketnW1, D.FW)
                                      })
                                  }),
                          et &&
                              (0, i.jsx)(ed, {
                                  locked: n,
                                  focused: t
                              }),
                          null != eC &&
                              null != el &&
                              (0, i.jsx)(j.Z, {
                                  streamerId: ep,
                                  guildId: eC.id,
                                  channelId: el
                              }),
                          (0, i.jsx)(F.Z, {
                              locked: H,
                              keybind: T
                          }),
                          (0, i.jsx)(M.Z, {})
                      ]
                  })
              })
          });
}
