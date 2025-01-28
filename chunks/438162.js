t.d(n, {
    Z: function () {
        return e_;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    c = t(952265),
    u = t(481060),
    d = t(239091),
    s = t(13245),
    _ = t(615287),
    h = t(110924),
    p = t(100527),
    f = t(906732),
    v = t(146282),
    m = t(70097),
    b = t(594190),
    g = t(567409),
    I = t(74299),
    Z = t(989941),
    C = t(199902),
    E = t(314897),
    y = t(592125),
    x = t(430824),
    L = t(131951),
    N = t(944486),
    O = t(449224),
    k = t(574254),
    w = t(556296),
    T = t(237997),
    A = t(451478),
    P = t(585483),
    S = t(358085),
    D = t(13140),
    R = t(145597),
    U = t(830917),
    V = t(681603),
    j = t(358446),
    G = t(348733),
    z = t(708383),
    M = t(923532),
    F = t(915614),
    W = t(777382),
    Y = t(333031),
    B = t(610394),
    H = t(388627),
    X = t(319414),
    K = t(561064),
    Q = t(987650),
    J = t(981631),
    q = t(206583),
    $ = t(388032),
    ee = t(800004);
let en = !S.isPlatformEmbedded && !1,
    et = en
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
function el(e) {
    (0, d.jW)(e, async () => {
        let { default: e } = await t.e('17610').then(t.bind(t, 385620));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                layoutId: R.qU,
                version: 1
            });
    });
}
let ea = r.memo(function (e) {
        let { keybind: n, onClick: t, locked: r } = e;
        return (0, i.jsx)(u.Clickable, {
            className: a()(ee.overlayBackground, {
                [ee.overlayActive]: !r,
                [ee.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: i, button: r } = e;
                r === J.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: el,
            children: r
                ? null
                : (0, i.jsx)(Y.Z, {
                      className: ee.closeContainer,
                      children: (0, i.jsx)(F.Z, {
                          keybind: n,
                          onClick: t,
                          IconComponent: u.XLargeIcon
                      })
                  })
        });
    }),
    eo = r.memo(function (e) {
        let { locked: n, focused: t } = e;
        return n && t
            ? (0, i.jsx)(Y.Z, {
                  className: ee.closeContainer,
                  children: (0, i.jsx)(F.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, R.QF)()),
                      IconComponent: u.LockUnlockedIcon
                  })
              })
            : null;
    });
function ec() {
    if (null != k.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    s.Z.setInputLocked(!0, (0, R.QF)());
}
function eu() {
    s.Z.setFocusedPID(R.Js);
}
function ed() {
    s.Z.setFocusedPID(null);
}
function es(e) {
    let n = B.ZP.isInputLocked((0, R.QF)());
    'alt' === e.key.toLowerCase() && !n && ('keyup' === e.type.toLowerCase() ? P.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && P.S.dispatch(J.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function e_() {
    var e, n;
    let t = (0, K.Z)(),
        {
            locked: l,
            focused: d,
            incompatibleApp: m,
            hasValidResolution: k,
            hasZeroSizeDimension: P,
            keybind: S,
            isPreviewingInGame: F
        } = (0, o.cj)(
            [B.ZP, T.Z, A.Z, w.Z],
            () => {
                let e = A.Z.windowSize((0, U.ZY)(t)),
                    n = w.Z.getOverlayKeybind();
                return {
                    locked: B.ZP.isInputLocked((0, R.QF)()),
                    focused: B.ZP.isFocused((0, R.QF)()),
                    incompatibleApp: T.Z.incompatibleApp,
                    hasValidResolution: (0, R.Te)(e),
                    isPreviewingInGame: T.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != n ? (0, D.BB)(n.shortcut, !0) : '???'
                };
            },
            [t]
        ),
        Y = (0, o.e7)([T.Z], () => T.Z.getActiveRegions()),
        { analyticsLocations: el } = (0, f.ZP)(p.Z.OVERLAY),
        e_ = l || F;
    !(function (e, n) {
        let t = r.useRef({
            mount: e,
            unmount: n
        });
        r.useEffect(
            () =>
                void (t.current = {
                    mount: e,
                    unmount: n
                })
        ),
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
            s.Z.overlayReady((0, R.QF)()), t.addEventListener('keydown', es), t.addEventListener('keyup', es), en && (t.document.hasFocus() && s.Z.setFocusedPID(R.Js), t.addEventListener('focus', eu), t.addEventListener('blur', ed));
        },
        () => {
            t.removeEventListener('keydown', es), t.removeEventListener('keyup', es), en && (t.removeEventListener('focus', eu), t.removeEventListener('blur', ed));
        }
    ),
        !(function () {
            let e = r.useRef(!1),
                n = (0, H.pL)(),
                t = N.Z.getVoiceChannelId(),
                i = y.Z.getChannel(t),
                l = null != i ? x.Z.getGuild(i.guild_id) : null,
                a = null != C.Z.getCurrentUserActiveStream(),
                o = null != t,
                c = (0, I.Z)(L.Z) && !a && null != n,
                u = o && null != l && null != t,
                { showKeybindIndicators: d, dismissKeybindNotification: h } = (0, j.K)();
            r.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    s.Z.track(J.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: o,
                        text_widget_connected: !1,
                        overlay_render_method: _.gl[_.gl.OutOfProcess]
                    });
                let i = null;
                (i = d
                    ? {
                          type: Q.nc.KEYBIND_INDICATORS,
                          markAsDismissed: h
                      }
                    : { type: Q.nc.WELCOME }),
                    c && u
                        ? (i = {
                              type: Q.nc.GO_LIVE_VOICE,
                              game: n,
                              voiceChannelId: t,
                              voiceGuild: l
                          })
                        : c &&
                          (i = {
                              type: Q.nc.GO_LIVE_NON_VOICE,
                              game: n
                          }),
                    s.Z.overlayMounted(i);
            }, [o, c, u, n, t, l, d, h]);
        })(),
        (e = l),
        (n = t),
        r.useEffect(() => {
            if (e) {
                if (((0, c.Ay)(u.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', er, !1), null != ei)) {
                    let e = Date.now() - ei;
                    s.Z.track(J.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ei = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', er, !1);
                };
            }
            n.removeEventListener('contextmenu', er, !1), null == ei && ((ei = Date.now()), s.Z.track(J.rMx.OVERLAY_UNLOCKED));
        }, [e, n]);
    let eh = (0, o.e7)([N.Z], () => N.Z.getVoiceChannelId()),
        ep = (0, o.e7)([y.Z], () => y.Z.getChannel(eh)),
        ef = (0, o.e7)([x.Z], () => (null != ep ? x.Z.getGuild(ep.guild_id) : null)),
        ev = (0, o.e7)([E.default], () => E.default.getId()),
        em = (0, o.e7)([b.ZP, O.Z], () => (0, Z.Z)(b.ZP, O.Z)),
        eb = (0, g.Ns)(null == em ? void 0 : em.id),
        eg = (0, o.e7)([v.Z], () => null != v.Z.getLastFeedFetchDate(q.YN.GAME_PROFILE_FEED)),
        eI = (0, h.Z)(eg);
    return (r.useEffect(() => {
        !eI && eg && s.Z.notifyContentInventoryReady(eb);
    }, [eb, eg, eI]),
    P || m)
        ? null
        : (0, i.jsx)(f.Gt, {
              value: el,
              children: (0, i.jsx)(u.RedesignIconContextProvider, {
                  children: (0, i.jsxs)('div', {
                      className: ee.overlay,
                      children: [
                          (0, i.jsx)(z.Z, {}),
                          F &&
                              (0, i.jsx)('header', {
                                  className: ee.previewingInGameHeader,
                                  children: $.intl.string($.t.iOq96u)
                              }),
                          et,
                          (!l || Y.has(J.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(ea, {
                                  locked: l,
                                  keybind: S,
                                  onClick: ec
                              }),
                          k
                              ? (0, i.jsx)(W.Z, {
                                    className: a()({
                                        [ee.layoutLocked]: l,
                                        [ee.layoutUnlocked]: !l
                                    })
                                })
                              : l
                                ? null
                                : (0, i.jsx)('div', {
                                      className: ee.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: ee.inactiveContainer,
                                          children: $.intl.format($.t.ketnW1, R.FW)
                                      })
                                  }),
                          (0, i.jsx)(X.Z, {}),
                          en &&
                              (0, i.jsx)(eo, {
                                  locked: l,
                                  focused: d
                              }),
                          null != ef &&
                              null != eh &&
                              (0, i.jsx)(M.Z, {
                                  streamerId: ev,
                                  guildId: ef.id,
                                  channelId: eh
                              }),
                          (0, i.jsx)(G.Z, {
                              locked: e_,
                              keybind: S
                          }),
                          (0, i.jsx)(V.Z, {})
                      ]
                  })
              })
          });
}
