t.d(n, { Z: () => eh });
var r = t(200651),
    i = t(192379),
    a = t(120356),
    o = t.n(a),
    l = t(442837),
    c = t(952265),
    d = t(481060),
    s = t(239091),
    u = t(13245),
    _ = t(615287),
    h = t(110924),
    C = t(100527),
    m = t(906732),
    p = t(146282),
    E = t(70097),
    g = t(594190),
    f = t(567409),
    R = t(74299),
    b = t(989941),
    I = t(199902),
    L = t(314897),
    O = t(592125),
    v = t(430824),
    A = t(355863),
    k = t(131951),
    y = t(944486),
    Z = t(449224),
    N = t(574254),
    T = t(556296),
    x = t(237997),
    U = t(451478),
    S = t(585483),
    w = t(358085),
    B = t(13140),
    D = t(145597),
    V = t(830917),
    P = t(681603),
    M = t(358446),
    F = t(348733),
    Y = t(708383),
    G = t(923532),
    j = t(915614),
    H = t(777382),
    W = t(333031),
    K = t(371651),
    z = t(610394),
    Q = t(388627),
    X = t(561064),
    q = t(987650),
    J = t(981631),
    $ = t(206583),
    ee = t(388032),
    en = t(95613);
let et = !w.isPlatformEmbedded && !1,
    er = et
        ? (0, r.jsx)(E.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: en.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    ei = null;
function ea(e) {
    e.preventDefault();
}
function eo(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await t.e('17610').then(t.bind(t, 385620));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                layoutId: D.qU,
                version: 1
            });
    });
}
let el = i.memo(function (e) {
        let { keybind: n, onClick: t, locked: i } = e;
        return (0, r.jsx)(d.P3F, {
            className: o()(en.overlayBackground, {
                [en.overlayActive]: !i,
                [en.overlayLocked]: i
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: r, button: i } = e;
                i === J.AeJ.PRIMARY && n === r && t();
            },
            onContextMenu: eo,
            children: i
                ? null
                : (0, r.jsx)(W.Z, {
                      className: en.closeContainer,
                      children: (0, r.jsx)(j.Z, {
                          keybind: n,
                          onClick: t,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    ec = i.memo(function (e) {
        let { locked: n, focused: t } = e;
        return n && t
            ? (0, r.jsx)(W.Z, {
                  className: en.closeContainer,
                  children: (0, r.jsx)(j.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, D.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function ed() {
    if (null != N.Z.getContextMenu()) {
        (0, s.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, D.QF)());
}
function es() {
    u.Z.setFocusedPID(D.Js);
}
function eu() {
    u.Z.setFocusedPID(null);
}
function e_(e) {
    let n = z.ZP.isInputLocked((0, D.QF)());
    'alt' !== e.key.toLowerCase() || n || ('keyup' === e.type.toLowerCase() ? S.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && S.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eh() {
    let e = (0, X.Z)(),
        {
            locked: n,
            focused: t,
            incompatibleApp: a,
            hasValidResolution: s,
            hasZeroSizeDimension: E,
            keybind: N,
            isPreviewingInGame: S
        } = (0, l.cj)(
            [z.ZP, x.Z, U.Z, T.ZP],
            () => {
                let n = U.Z.windowSize((0, V.ZY)(e)),
                    t = T.ZP.getOverlayKeybind(),
                    r = (0, D.QF)();
                return {
                    locked: z.ZP.isInputLocked(r),
                    focused: r === D.Js ? x.Z.isFocused(r) : z.ZP.isFocused(r),
                    incompatibleApp: x.Z.incompatibleApp,
                    hasValidResolution: (0, D.Te)(n),
                    isPreviewingInGame: x.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === n.height || 0 === n.width,
                    keybind: null != t ? (0, B.BB)(t.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        w = (0, l.e7)([x.Z], () => x.Z.getActiveRegions()),
        { analyticsLocations: j } = (0, m.ZP)(C.Z.OVERLAY),
        W = n || S;
    !(function (e, n) {
        let t = i.useRef({
            mount: e,
            unmount: n
        });
        i.useEffect(() => {
            t.current = {
                mount: e,
                unmount: n
            };
        }),
            i.useEffect(
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
            u.Z.overlayReady((0, D.QF)()), e.addEventListener('keydown', e_), e.addEventListener('keyup', e_), et && (e.document.hasFocus() && u.Z.setFocusedPID(D.Js), e.addEventListener('focus', es), e.addEventListener('blur', eu));
        },
        () => {
            e.removeEventListener('keydown', e_), e.removeEventListener('keyup', e_), et && (e.removeEventListener('focus', es), e.removeEventListener('blur', eu));
        }
    ),
        (function () {
            let e = i.useRef(!1),
                n = (0, Q.pL)(),
                t = y.Z.getVoiceChannelId(),
                r = O.Z.getChannel(t),
                a = null != r ? v.Z.getGuild(r.guild_id) : null,
                o = null != I.Z.getCurrentUserActiveStream(),
                l = null != t,
                c = (0, R.Z)(k.Z) && !o && null != n,
                d = l && null != a && null != t,
                { showKeybindIndicators: s, dismissKeybindNotification: h } = (0, M.K)();
            i.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    u.Z.track(J.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: l,
                        text_widget_connected: !1,
                        overlay_render_method: _.gl[K.default.getOverlayMethod((0, D.QF)())],
                        unpinned_widget_types: A.Z.getAllUnpinnedPinnedWidgets(D.qU)
                    });
                let r = null;
                (r = s
                    ? {
                          type: q.nc.KEYBIND_INDICATORS,
                          markAsDismissed: h
                      }
                    : { type: q.nc.WELCOME }),
                    c && d
                        ? (r = {
                              type: q.nc.GO_LIVE_VOICE,
                              game: n,
                              voiceChannelId: t,
                              voiceGuild: a
                          })
                        : c &&
                          (r = {
                              type: q.nc.GO_LIVE_NON_VOICE,
                              game: n
                          }),
                    u.Z.overlayMounted(r);
            }, [l, c, d, n, t, a, s, h]);
        })(),
        i.useEffect(() => {
            if (n) {
                if (((0, c.Ay)(d.u1M), e.addEventListener('contextmenu', ea, !1), null != ei)) {
                    let e = Date.now() - ei;
                    u.Z.track(J.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ei = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', ea, !1);
                };
            }
            e.removeEventListener('contextmenu', ea, !1), null == ei && ((ei = Date.now()), u.Z.track(J.rMx.OVERLAY_UNLOCKED));
        }, [n, e]);
    let eo = (0, l.e7)([y.Z], () => y.Z.getVoiceChannelId()),
        eh = (0, l.e7)([O.Z], () => O.Z.getChannel(eo)),
        eC = (0, l.e7)([v.Z], () => (null != eh ? v.Z.getGuild(eh.guild_id) : null)),
        em = (0, l.e7)([L.default], () => L.default.getId()),
        ep = (0, l.e7)([g.ZP, Z.Z], () => (0, b.Z)(g.ZP, Z.Z)),
        eE = (0, f.Ns)(null == ep ? void 0 : ep.id),
        eg = (0, l.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate($.YN.GAME_PROFILE_FEED)),
        ef = (0, h.Z)(eg);
    return (i.useEffect(() => {
        !ef && eg && u.Z.notifyContentInventoryReady(eE);
    }, [eE, eg, ef]),
    E || a)
        ? null
        : (0, r.jsx)(m.Gt, {
              value: j,
              children: (0, r.jsx)(d.vWI, {
                  children: (0, r.jsxs)('div', {
                      className: en.overlay,
                      children: [
                          (0, r.jsx)(Y.Z, {}),
                          S &&
                              (0, r.jsx)('header', {
                                  className: en.previewingInGameHeader,
                                  children: ee.intl.string(ee.t.iOq96u)
                              }),
                          er,
                          (!n || w.has(J.O0n.TEXT_WIDGET)) &&
                              (0, r.jsx)(el, {
                                  locked: n,
                                  keybind: N,
                                  onClick: ed
                              }),
                          s
                              ? (0, r.jsx)(H.Z, {
                                    className: o()({
                                        [en.layoutLocked]: n,
                                        [en.layoutUnlocked]: !n
                                    })
                                })
                              : n
                                ? null
                                : (0, r.jsx)('div', {
                                      className: en.invalidContainer,
                                      children: (0, r.jsx)('div', {
                                          className: en.inactiveContainer,
                                          children: ee.intl.format(ee.t.ketnW1, D.FW)
                                      })
                                  }),
                          et &&
                              (0, r.jsx)(ec, {
                                  locked: n,
                                  focused: t
                              }),
                          null != eC &&
                              null != eo &&
                              (0, r.jsx)(G.Z, {
                                  streamerId: em,
                                  guildId: eC.id,
                                  channelId: eo
                              }),
                          (0, r.jsx)(F.Z, {
                              locked: W,
                              keybind: N
                          }),
                          (0, r.jsx)(P.Z, {})
                      ]
                  })
              })
          });
}
