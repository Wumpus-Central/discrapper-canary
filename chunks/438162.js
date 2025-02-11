n.d(t, { Z: () => eh });
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
    L = n(355863),
    O = n(131951),
    Z = n(944486),
    N = n(449224),
    k = n(574254),
    T = n(556296),
    S = n(237997),
    x = n(451478),
    U = n(585483),
    w = n(358085),
    P = n(13140),
    D = n(145597),
    V = n(830917),
    B = n(681603),
    F = n(358446),
    M = n(348733),
    j = n(708383),
    Y = n(923532),
    G = n(915614),
    W = n(777382),
    H = n(333031),
    K = n(371651),
    z = n(610394),
    Q = n(388627),
    X = n(561064),
    J = n(987650),
    q = n(981631),
    $ = n(206583),
    ee = n(388032),
    et = n(514138);
let en = !w.isPlatformEmbedded && !1,
    ei = en
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: et.videoDev,
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
let eo = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.P3F, {
            className: l()(et.overlayBackground, {
                [et.overlayActive]: !r,
                [et.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === q.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: el,
            children: r
                ? null
                : (0, i.jsx)(H.Z, {
                      className: et.closeContainer,
                      children: (0, i.jsx)(G.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.Uz9
                      })
                  })
        });
    }),
    eu = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(H.Z, {
                  className: et.closeContainer,
                  children: (0, i.jsx)(G.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, D.QF)()),
                      IconComponent: c.d$P
                  })
              })
            : null;
    });
function ec() {
    if (null != k.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    s.Z.setInputLocked(!0, (0, D.QF)());
}
function ed() {
    s.Z.setFocusedPID(D.Js);
}
function es() {
    s.Z.setFocusedPID(null);
}
function e_(e) {
    let t = z.ZP.isInputLocked((0, D.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? U.S.dispatch(q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && U.S.dispatch(q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eh() {
    let e = (0, X.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: a,
            hasValidResolution: d,
            hasZeroSizeDimension: m,
            keybind: k,
            isPreviewingInGame: U
        } = (0, o.cj)(
            [z.ZP, S.Z, x.Z, T.ZP],
            () => {
                let t = x.Z.windowSize((0, V.ZY)(e)),
                    n = T.ZP.getOverlayKeybind(),
                    i = (0, D.QF)();
                return {
                    locked: z.ZP.isInputLocked(i),
                    focused: i === D.Js ? S.Z.isFocused(i) : z.ZP.isFocused(i),
                    incompatibleApp: S.Z.incompatibleApp,
                    hasValidResolution: (0, D.Te)(t),
                    isPreviewingInGame: S.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, P.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        w = (0, o.e7)([S.Z], () => S.Z.getActiveRegions()),
        { analyticsLocations: G } = (0, f.ZP)(C.Z.OVERLAY),
        H = t || U;
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
            s.Z.overlayReady((0, D.QF)()), e.addEventListener('keydown', e_), e.addEventListener('keyup', e_), en && (e.document.hasFocus() && s.Z.setFocusedPID(D.Js), e.addEventListener('focus', ed), e.addEventListener('blur', es));
        },
        () => {
            e.removeEventListener('keydown', e_), e.removeEventListener('keyup', e_), en && (e.removeEventListener('focus', ed), e.removeEventListener('blur', es));
        }
    ),
        (function () {
            let e = r.useRef(!1),
                t = (0, Q.pL)(),
                n = Z.Z.getVoiceChannelId(),
                i = A.Z.getChannel(n),
                a = null != i ? y.Z.getGuild(i.guild_id) : null,
                l = null != R.Z.getCurrentUserActiveStream(),
                o = null != n,
                u = (0, v.Z)(O.Z) && !l && null != t,
                c = o && null != a && null != n,
                { showKeybindIndicators: d, dismissKeybindNotification: h } = (0, F.K)();
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
                (i = d
                    ? {
                          type: J.nc.KEYBIND_INDICATORS,
                          markAsDismissed: h
                      }
                    : { type: J.nc.WELCOME }),
                    u && c
                        ? (i = {
                              type: J.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: a
                          })
                        : u &&
                          (i = {
                              type: J.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    s.Z.overlayMounted(i);
            }, [o, u, c, t, n, a, d, h]);
        })(),
        r.useEffect(() => {
            if (t) {
                if (((0, u.Ay)(c.u1M), e.addEventListener('contextmenu', ea, !1), null != er)) {
                    let e = Date.now() - er;
                    s.Z.track(q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (er = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', ea, !1);
                };
            }
            e.removeEventListener('contextmenu', ea, !1), null == er && ((er = Date.now()), s.Z.track(q.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let el = (0, o.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
        eh = (0, o.e7)([A.Z], () => A.Z.getChannel(el)),
        eC = (0, o.e7)([y.Z], () => (null != eh ? y.Z.getGuild(eh.guild_id) : null)),
        ef = (0, o.e7)([b.default], () => b.default.getId()),
        ep = (0, o.e7)([E.ZP, N.Z], () => (0, I.Z)(E.ZP, N.Z)),
        em = (0, g.Ns)(null == ep ? void 0 : ep.id),
        eE = (0, o.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate($.YN.GAME_PROFILE_FEED)),
        eg = (0, h.Z)(eE);
    return (r.useEffect(() => {
        !eg && eE && s.Z.notifyContentInventoryReady(em);
    }, [em, eE, eg]),
    m || a)
        ? null
        : (0, i.jsx)(f.Gt, {
              value: G,
              children: (0, i.jsx)(c.vWI, {
                  children: (0, i.jsxs)('div', {
                      className: et.overlay,
                      children: [
                          (0, i.jsx)(j.Z, {}),
                          U &&
                              (0, i.jsx)('header', {
                                  className: et.previewingInGameHeader,
                                  children: ee.intl.string(ee.t.iOq96u)
                              }),
                          ei,
                          (!t || w.has(q.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(eo, {
                                  locked: t,
                                  keybind: k,
                                  onClick: ec
                              }),
                          d
                              ? (0, i.jsx)(W.Z, {
                                    className: l()({
                                        [et.layoutLocked]: t,
                                        [et.layoutUnlocked]: !t
                                    })
                                })
                              : t
                                ? null
                                : (0, i.jsx)('div', {
                                      className: et.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: et.inactiveContainer,
                                          children: ee.intl.format(ee.t.ketnW1, D.FW)
                                      })
                                  }),
                          en &&
                              (0, i.jsx)(eu, {
                                  locked: t,
                                  focused: n
                              }),
                          null != eC &&
                              null != el &&
                              (0, i.jsx)(Y.Z, {
                                  streamerId: ef,
                                  guildId: eC.id,
                                  channelId: el
                              }),
                          (0, i.jsx)(M.Z, {
                              locked: H,
                              keybind: k
                          }),
                          (0, i.jsx)(B.Z, {})
                      ]
                  })
              })
          });
}
