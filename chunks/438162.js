n.d(t, { Z: () => eu });
var i = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(442837),
    c = n(952265),
    d = n(481060),
    _ = n(239091),
    u = n(13245),
    s = n(615287),
    f = n(110924),
    p = n(100527),
    h = n(906732),
    m = n(146282),
    g = n(70097),
    v = n(594190),
    I = n(567409),
    b = n(74299),
    C = n(989941),
    y = n(199902),
    Z = n(314897),
    E = n(592125),
    x = n(430824),
    k = n(131951),
    w = n(944486),
    L = n(449224),
    S = n(574254),
    T = n(556296),
    N = n(237997),
    A = n(451478),
    P = n(585483),
    D = n(358085),
    O = n(13140),
    R = n(145597),
    W = n(830917),
    B = n(681603),
    G = n(358446),
    U = n(348733),
    M = n(708383),
    V = n(923532),
    j = n(915614),
    F = n(777382),
    z = n(333031),
    H = n(610394),
    Y = n(388627),
    K = n(561064),
    X = n(987650),
    Q = n(981631),
    J = n(206583),
    q = n(388032),
    $ = n(800004);
let ee = !D.isPlatformEmbedded && !1,
    et = ee
        ? (0, i.jsx)(g.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: $.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    en = null;
function ei(e) {
    e.preventDefault();
}
function ea(e) {
    (0, _.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: R.qU,
                version: 1
            });
    });
}
let er = a.memo(function (e) {
        let { keybind: t, onClick: n, locked: a } = e;
        return (0, i.jsx)(d.P3F, {
            className: o()($.overlayBackground, {
                [$.overlayActive]: !a,
                [$.overlayLocked]: a
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: a } = e;
                a === Q.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ea,
            children: a
                ? null
                : (0, i.jsx)(z.Z, {
                      className: $.closeContainer,
                      children: (0, i.jsx)(j.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    eo = a.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(z.Z, {
                  className: $.closeContainer,
                  children: (0, i.jsx)(j.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, R.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function el() {
    if (null != S.Z.getContextMenu()) {
        (0, _.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, R.QF)());
}
function ec() {
    u.Z.setFocusedPID(R.Js);
}
function ed() {
    u.Z.setFocusedPID(null);
}
function e_(e) {
    let t = H.ZP.isInputLocked((0, R.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? P.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && P.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eu() {
    let e = (0, K.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: r,
            hasValidResolution: _,
            hasZeroSizeDimension: g,
            keybind: S,
            isPreviewingInGame: P
        } = (0, l.cj)(
            [H.ZP, N.Z, A.Z, T.Z],
            () => {
                let t = A.Z.windowSize((0, W.ZY)(e)),
                    n = T.Z.getOverlayKeybind();
                return {
                    locked: H.ZP.isInputLocked((0, R.QF)()),
                    focused: H.ZP.isFocused((0, R.QF)()),
                    incompatibleApp: N.Z.incompatibleApp,
                    hasValidResolution: (0, R.Te)(t),
                    isPreviewingInGame: N.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, O.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        D = (0, l.e7)([N.Z], () => N.Z.getActiveRegions()),
        { analyticsLocations: j } = (0, h.ZP)(p.Z.OVERLAY),
        z = t || P;
    !(function (e, t) {
        let n = a.useRef({
            mount: e,
            unmount: t
        });
        a.useEffect(
            () =>
                void (n.current = {
                    mount: e,
                    unmount: t
                })
        ),
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
            u.Z.overlayReady((0, R.QF)()), e.addEventListener('keydown', e_), e.addEventListener('keyup', e_), ee && (e.document.hasFocus() && u.Z.setFocusedPID(R.Js), e.addEventListener('focus', ec), e.addEventListener('blur', ed));
        },
        () => {
            e.removeEventListener('keydown', e_), e.removeEventListener('keyup', e_), ee && (e.removeEventListener('focus', ec), e.removeEventListener('blur', ed));
        }
    ),
        (function () {
            let e = a.useRef(!1),
                t = (0, Y.pL)(),
                n = w.Z.getVoiceChannelId(),
                i = E.Z.getChannel(n),
                r = null != i ? x.Z.getGuild(i.guild_id) : null,
                o = null != y.Z.getCurrentUserActiveStream(),
                l = null != n,
                c = (0, b.Z)(k.Z) && !o && null != t,
                d = l && null != r && null != n,
                { showKeybindIndicators: _, dismissKeybindNotification: f } = (0, G.K)();
            a.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    u.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: l,
                        text_widget_connected: !1,
                        overlay_render_method: s.gl[s.gl.OutOfProcess]
                    });
                let i = null;
                (i = _
                    ? {
                          type: X.nc.KEYBIND_INDICATORS,
                          markAsDismissed: f
                      }
                    : { type: X.nc.WELCOME }),
                    c && d
                        ? (i = {
                              type: X.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : c &&
                          (i = {
                              type: X.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    u.Z.overlayMounted(i);
            }, [l, c, d, t, n, r, _, f]);
        })(),
        a.useEffect(() => {
            if (t) {
                if (((0, c.Ay)(d.u1M), e.addEventListener('contextmenu', ei, !1), null != en)) {
                    let e = Date.now() - en;
                    u.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (en = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', ei, !1);
                };
            }
            e.removeEventListener('contextmenu', ei, !1), null == en && ((en = Date.now()), u.Z.track(Q.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let ea = (0, l.e7)([w.Z], () => w.Z.getVoiceChannelId()),
        eu = (0, l.e7)([E.Z], () => E.Z.getChannel(ea)),
        es = (0, l.e7)([x.Z], () => (null != eu ? x.Z.getGuild(eu.guild_id) : null)),
        ef = (0, l.e7)([Z.default], () => Z.default.getId()),
        ep = (0, l.e7)([v.ZP, L.Z], () => (0, C.Z)(v.ZP, L.Z)),
        eh = (0, I.Ns)(null == ep ? void 0 : ep.id),
        em = (0, l.e7)([m.Z], () => null != m.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED)),
        eg = (0, f.Z)(em);
    return (a.useEffect(() => {
        !eg && em && u.Z.notifyContentInventoryReady(eh);
    }, [eh, em, eg]),
    g || r)
        ? null
        : (0, i.jsx)(h.Gt, {
              value: j,
              children: (0, i.jsx)(d.vWI, {
                  children: (0, i.jsxs)('div', {
                      className: $.overlay,
                      children: [
                          (0, i.jsx)(M.Z, {}),
                          P &&
                              (0, i.jsx)('header', {
                                  className: $.previewingInGameHeader,
                                  children: q.intl.string(q.t.iOq96u)
                              }),
                          et,
                          (!t || D.has(Q.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(er, {
                                  locked: t,
                                  keybind: S,
                                  onClick: el
                              }),
                          _
                              ? (0, i.jsx)(F.Z, {
                                    className: o()({
                                        [$.layoutLocked]: t,
                                        [$.layoutUnlocked]: !t
                                    })
                                })
                              : t
                                ? null
                                : (0, i.jsx)('div', {
                                      className: $.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: $.inactiveContainer,
                                          children: q.intl.format(q.t.ketnW1, R.FW)
                                      })
                                  }),
                          ee &&
                              (0, i.jsx)(eo, {
                                  locked: t,
                                  focused: n
                              }),
                          null != es &&
                              null != ea &&
                              (0, i.jsx)(V.Z, {
                                  streamerId: ef,
                                  guildId: es.id,
                                  channelId: ea
                              }),
                          (0, i.jsx)(U.Z, {
                              locked: z,
                              keybind: S
                          }),
                          (0, i.jsx)(B.Z, {})
                      ]
                  })
              })
          });
}
