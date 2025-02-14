n.d(t, { Z: () => eh });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    _ = n(442837),
    c = n(952265),
    l = n(481060),
    d = n(239091),
    s = n(13245),
    u = n(615287),
    h = n(110924),
    f = n(100527),
    p = n(906732),
    m = n(146282),
    C = n(70097),
    g = n(594190),
    b = n(567409),
    E = n(74299),
    I = n(989941),
    v = n(199902),
    R = n(314897),
    L = n(592125),
    k = n(430824),
    y = n(355863),
    O = n(131951),
    A = n(944486),
    x = n(449224),
    N = n(574254),
    T = n(556296),
    S = n(237997),
    Z = n(451478),
    B = n(585483),
    w = n(358085),
    U = n(13140),
    D = n(145597),
    M = n(830917),
    P = n(681603),
    V = n(358446),
    F = n(348733),
    W = n(708383),
    G = n(923532),
    H = n(915614),
    Y = n(777382),
    j = n(333031),
    z = n(371651),
    K = n(610394),
    Q = n(388627),
    X = n(561064),
    q = n(987650),
    J = n(981631),
    $ = n(206583),
    ee = n(388032),
    et = n(95613);
let en = !w.isPlatformEmbedded && !1,
    er = en
        ? (0, r.jsx)(C.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: et.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    ea = null;
function ei(e) {
    e.preventDefault();
}
function eo(e) {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let e_ = a.memo(function (e) {
        let { keybind: t, onClick: n, locked: a } = e;
        return (0, r.jsx)(l.P3F, {
            className: o()(et.overlayBackground, {
                [et.overlayActive]: !a,
                [et.overlayLocked]: a
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: a } = e;
                a === J.AeJ.PRIMARY && t === r && n();
            },
            onContextMenu: eo,
            children: a
                ? null
                : (0, r.jsx)(j.Z, {
                      className: et.closeContainer,
                      children: (0, r.jsx)(H.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: l.Uz9
                      })
                  })
        });
    }),
    ec = a.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(j.Z, {
                  className: et.closeContainer,
                  children: (0, r.jsx)(H.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, D.QF)()),
                      IconComponent: l.d$P
                  })
              })
            : null;
    });
function el() {
    if (null != N.Z.getContextMenu()) {
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
function eu(e) {
    let t = K.ZP.isInputLocked((0, D.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? B.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && B.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eh() {
    let e = (0, X.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: i,
            hasValidResolution: d,
            hasZeroSizeDimension: C,
            keybind: N,
            isPreviewingInGame: B
        } = (0, _.cj)(
            [K.ZP, S.Z, Z.Z, T.ZP],
            () => {
                let t = Z.Z.windowSize((0, M.ZY)(e)),
                    n = T.ZP.getOverlayKeybind(),
                    r = (0, D.QF)();
                return {
                    locked: K.ZP.isInputLocked(r),
                    focused: r === D.Js ? S.Z.isFocused(r) : K.ZP.isFocused(r),
                    incompatibleApp: S.Z.incompatibleApp,
                    hasValidResolution: (0, D.Te)(t),
                    isPreviewingInGame: S.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, U.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        w = (0, _.e7)([S.Z], () => S.Z.getActiveRegions()),
        { analyticsLocations: H } = (0, p.ZP)(f.Z.OVERLAY),
        j = t || B;
    !(function (e, t) {
        let n = a.useRef({
            mount: e,
            unmount: t
        });
        a.useEffect(() => {
            n.current = {
                mount: e,
                unmount: t
            };
        }),
            a.useEffect(
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
            s.Z.overlayReady((0, D.QF)()), e.addEventListener('keydown', eu), e.addEventListener('keyup', eu), en && (e.document.hasFocus() && s.Z.setFocusedPID(D.Js), e.addEventListener('focus', ed), e.addEventListener('blur', es));
        },
        () => {
            e.removeEventListener('keydown', eu), e.removeEventListener('keyup', eu), en && (e.removeEventListener('focus', ed), e.removeEventListener('blur', es));
        }
    ),
        (function () {
            let e = a.useRef(!1),
                t = (0, Q.pL)(),
                n = A.Z.getVoiceChannelId(),
                r = L.Z.getChannel(n),
                i = null != r ? k.Z.getGuild(r.guild_id) : null,
                o = null != v.Z.getCurrentUserActiveStream(),
                _ = null != n,
                c = (0, E.Z)(O.Z) && !o && null != t,
                l = _ && null != i && null != n,
                { showKeybindIndicators: d, dismissKeybindNotification: h } = (0, V.K)();
            a.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    s.Z.track(J.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: _,
                        text_widget_connected: !1,
                        overlay_render_method: u.gl[z.default.getOverlayMethod((0, D.QF)())],
                        unpinned_widget_types: y.Z.getAllUnpinnedPinnedWidgets(D.qU)
                    });
                let r = null;
                (r = d
                    ? {
                          type: q.nc.KEYBIND_INDICATORS,
                          markAsDismissed: h
                      }
                    : { type: q.nc.WELCOME }),
                    c && l
                        ? (r = {
                              type: q.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: i
                          })
                        : c &&
                          (r = {
                              type: q.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    s.Z.overlayMounted(r);
            }, [_, c, l, t, n, i, d, h]);
        })(),
        a.useEffect(() => {
            if (t) {
                if (((0, c.Ay)(l.u1M), e.addEventListener('contextmenu', ei, !1), null != ea)) {
                    let e = Date.now() - ea;
                    s.Z.track(J.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ea = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', ei, !1);
                };
            }
            e.removeEventListener('contextmenu', ei, !1), null == ea && ((ea = Date.now()), s.Z.track(J.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let eo = (0, _.e7)([A.Z], () => A.Z.getVoiceChannelId()),
        eh = (0, _.e7)([L.Z], () => L.Z.getChannel(eo)),
        ef = (0, _.e7)([k.Z], () => (null != eh ? k.Z.getGuild(eh.guild_id) : null)),
        ep = (0, _.e7)([R.default], () => R.default.getId()),
        em = (0, _.e7)([g.ZP, x.Z], () => (0, I.Z)(g.ZP, x.Z)),
        eC = (0, b.Ns)(null == em ? void 0 : em.id),
        eg = (0, _.e7)([m.Z], () => null != m.Z.getLastFeedFetchDate($.YN.GAME_PROFILE_FEED)),
        eb = (0, h.Z)(eg);
    return (a.useEffect(() => {
        !eb && eg && s.Z.notifyContentInventoryReady(eC);
    }, [eC, eg, eb]),
    C || i)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: H,
              children: (0, r.jsx)(l.vWI, {
                  children: (0, r.jsxs)('div', {
                      className: et.overlay,
                      children: [
                          (0, r.jsx)(W.Z, {}),
                          B &&
                              (0, r.jsx)('header', {
                                  className: et.previewingInGameHeader,
                                  children: ee.intl.string(ee.t.iOq96u)
                              }),
                          er,
                          (!t || w.has(J.O0n.TEXT_WIDGET)) &&
                              (0, r.jsx)(e_, {
                                  locked: t,
                                  keybind: N,
                                  onClick: el
                              }),
                          d
                              ? (0, r.jsx)(Y.Z, {
                                    className: o()({
                                        [et.layoutLocked]: t,
                                        [et.layoutUnlocked]: !t
                                    })
                                })
                              : t
                                ? null
                                : (0, r.jsx)('div', {
                                      className: et.invalidContainer,
                                      children: (0, r.jsx)('div', {
                                          className: et.inactiveContainer,
                                          children: ee.intl.format(ee.t.ketnW1, D.FW)
                                      })
                                  }),
                          en &&
                              (0, r.jsx)(ec, {
                                  locked: t,
                                  focused: n
                              }),
                          null != ef &&
                              null != eo &&
                              (0, r.jsx)(G.Z, {
                                  streamerId: ep,
                                  guildId: ef.id,
                                  channelId: eo
                              }),
                          (0, r.jsx)(F.Z, {
                              locked: j,
                              keybind: N
                          }),
                          (0, r.jsx)(P.Z, {})
                      ]
                  })
              })
          });
}
