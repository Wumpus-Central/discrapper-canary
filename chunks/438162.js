n.d(t, { Z: () => eu });
var i = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    _ = n(442837),
    c = n(952265),
    l = n(481060),
    d = n(239091),
    s = n(13245),
    u = n(615287),
    f = n(110924),
    p = n(100527),
    h = n(906732),
    m = n(146282),
    g = n(70097),
    b = n(594190),
    I = n(567409),
    v = n(74299),
    C = n(989941),
    x = n(199902),
    y = n(314897),
    E = n(592125),
    Z = n(430824),
    k = n(131951),
    L = n(944486),
    w = n(449224),
    T = n(574254),
    N = n(556296),
    S = n(237997),
    A = n(451478),
    W = n(585483),
    P = n(358085),
    O = n(13140),
    z = n(145597),
    B = n(830917),
    D = n(681603),
    R = n(358446),
    G = n(348733),
    U = n(708383),
    M = n(923532),
    F = n(915614),
    V = n(777382),
    j = n(333031),
    H = n(610394),
    Y = n(388627),
    K = n(319414),
    X = n(561064),
    J = n(987650),
    Q = n(981631),
    q = n(206583),
    $ = n(388032),
    ee = n(800004);
let et = !P.isPlatformEmbedded && !1,
    en = et
        ? (0, i.jsx)(g.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: ee.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    ei = null;
function ea(e) {
    e.preventDefault();
}
function er(e) {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: z.qU,
                version: 1
            });
    });
}
let eo = a.memo(function (e) {
        let { keybind: t, onClick: n, locked: a } = e;
        return (0, i.jsx)(l.P3F, {
            className: o()(ee.overlayBackground, {
                [ee.overlayActive]: !a,
                [ee.overlayLocked]: a
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: a } = e;
                a === Q.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: er,
            children: a
                ? null
                : (0, i.jsx)(j.Z, {
                      className: ee.closeContainer,
                      children: (0, i.jsx)(F.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: l.Uz9
                      })
                  })
        });
    }),
    e_ = a.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(j.Z, {
                  className: ee.closeContainer,
                  children: (0, i.jsx)(F.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, z.QF)()),
                      IconComponent: l.d$P
                  })
              })
            : null;
    });
function ec() {
    if (null != T.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    s.Z.setInputLocked(!0, (0, z.QF)());
}
function el() {
    s.Z.setFocusedPID(z.Js);
}
function ed() {
    s.Z.setFocusedPID(null);
}
function es(e) {
    let t = H.ZP.isInputLocked((0, z.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? W.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && W.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eu() {
    let e = (0, X.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: r,
            hasValidResolution: d,
            hasZeroSizeDimension: g,
            keybind: T,
            isPreviewingInGame: W
        } = (0, _.cj)(
            [H.ZP, S.Z, A.Z, N.Z],
            () => {
                let t = A.Z.windowSize((0, B.ZY)(e)),
                    n = N.Z.getOverlayKeybind();
                return {
                    locked: H.ZP.isInputLocked((0, z.QF)()),
                    focused: H.ZP.isFocused((0, z.QF)()),
                    incompatibleApp: S.Z.incompatibleApp,
                    hasValidResolution: (0, z.Te)(t),
                    isPreviewingInGame: S.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, O.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        P = (0, _.e7)([S.Z], () => S.Z.getActiveRegions()),
        { analyticsLocations: F } = (0, h.ZP)(p.Z.OVERLAY),
        j = t || W;
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
            s.Z.overlayReady((0, z.QF)()), e.addEventListener('keydown', es), e.addEventListener('keyup', es), et && (e.document.hasFocus() && s.Z.setFocusedPID(z.Js), e.addEventListener('focus', el), e.addEventListener('blur', ed));
        },
        () => {
            e.removeEventListener('keydown', es), e.removeEventListener('keyup', es), et && (e.removeEventListener('focus', el), e.removeEventListener('blur', ed));
        }
    ),
        (function () {
            let e = a.useRef(!1),
                t = (0, Y.pL)(),
                n = L.Z.getVoiceChannelId(),
                i = E.Z.getChannel(n),
                r = null != i ? Z.Z.getGuild(i.guild_id) : null,
                o = null != x.Z.getCurrentUserActiveStream(),
                _ = null != n,
                c = (0, v.Z)(k.Z) && !o && null != t,
                l = _ && null != r && null != n,
                { showKeybindIndicators: d, dismissKeybindNotification: f } = (0, R.K)();
            a.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    s.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: _,
                        text_widget_connected: !1,
                        overlay_render_method: u.gl[u.gl.OutOfProcess]
                    });
                let i = null;
                (i = d
                    ? {
                          type: J.nc.KEYBIND_INDICATORS,
                          markAsDismissed: f
                      }
                    : { type: J.nc.WELCOME }),
                    c && l
                        ? (i = {
                              type: J.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : c &&
                          (i = {
                              type: J.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    s.Z.overlayMounted(i);
            }, [_, c, l, t, n, r, d, f]);
        })(),
        a.useEffect(() => {
            if (t) {
                if (((0, c.Ay)(l.u1M), e.addEventListener('contextmenu', ea, !1), null != ei)) {
                    let e = Date.now() - ei;
                    s.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ei = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', ea, !1);
                };
            }
            e.removeEventListener('contextmenu', ea, !1), null == ei && ((ei = Date.now()), s.Z.track(Q.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let er = (0, _.e7)([L.Z], () => L.Z.getVoiceChannelId()),
        eu = (0, _.e7)([E.Z], () => E.Z.getChannel(er)),
        ef = (0, _.e7)([Z.Z], () => (null != eu ? Z.Z.getGuild(eu.guild_id) : null)),
        ep = (0, _.e7)([y.default], () => y.default.getId()),
        eh = (0, _.e7)([b.ZP, w.Z], () => (0, C.Z)(b.ZP, w.Z)),
        em = (0, I.Ns)(null == eh ? void 0 : eh.id),
        eg = (0, _.e7)([m.Z], () => null != m.Z.getLastFeedFetchDate(q.YN.GAME_PROFILE_FEED)),
        eb = (0, f.Z)(eg);
    return (a.useEffect(() => {
        !eb && eg && s.Z.notifyContentInventoryReady(em);
    }, [em, eg, eb]),
    g || r)
        ? null
        : (0, i.jsx)(h.Gt, {
              value: F,
              children: (0, i.jsx)(l.vWI, {
                  children: (0, i.jsxs)('div', {
                      className: ee.overlay,
                      children: [
                          (0, i.jsx)(U.Z, {}),
                          W &&
                              (0, i.jsx)('header', {
                                  className: ee.previewingInGameHeader,
                                  children: $.intl.string($.t.iOq96u)
                              }),
                          en,
                          (!t || P.has(Q.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(eo, {
                                  locked: t,
                                  keybind: T,
                                  onClick: ec
                              }),
                          d
                              ? (0, i.jsx)(V.Z, {
                                    className: o()({
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
                                          children: $.intl.format($.t.ketnW1, z.FW)
                                      })
                                  }),
                          (0, i.jsx)(K.Z, {}),
                          et &&
                              (0, i.jsx)(e_, {
                                  locked: t,
                                  focused: n
                              }),
                          null != ef &&
                              null != er &&
                              (0, i.jsx)(M.Z, {
                                  streamerId: ep,
                                  guildId: ef.id,
                                  channelId: er
                              }),
                          (0, i.jsx)(G.Z, {
                              locked: j,
                              keybind: T
                          }),
                          (0, i.jsx)(D.Z, {})
                      ]
                  })
              })
          });
}
