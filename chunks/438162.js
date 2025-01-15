n.d(t, {
    Z: function () {
        return ed;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(952265),
    s = n(481060),
    u = n(239091),
    d = n(13245),
    f = n(615287),
    _ = n(110924),
    h = n(100527),
    p = n(906732),
    v = n(146282),
    m = n(70097),
    g = n(594190),
    I = n(567409),
    b = n(74299),
    E = n(989941),
    Z = n(199902),
    C = n(314897),
    x = n(592125),
    T = n(430824),
    L = n(131951),
    y = n(944486),
    O = n(449224),
    N = n(574254),
    w = n(556296),
    D = n(237997),
    k = n(451478),
    R = n(585483),
    P = n(358085),
    A = n(13140),
    S = n(145597),
    U = n(830917),
    j = n(681603),
    G = n(358446),
    F = n(348733),
    V = n(708383),
    M = n(923532),
    W = n(915614),
    B = n(777382),
    z = n(333031),
    H = n(388627),
    Y = n(319414),
    X = n(561064),
    K = n(987650),
    Q = n(981631),
    J = n(206583),
    q = n(388032),
    $ = n(809535);
let ee = !P.isPlatformEmbedded && !1,
    et = ee
        ? (0, i.jsx)(m.Z, {
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
function er(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: S.qU,
                version: 1
            });
    });
}
let el = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(s.Clickable, {
            className: o()($.overlayBackground, {
                [$.overlayActive]: !r,
                [$.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === Q.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: er,
            children: r
                ? null
                : (0, i.jsx)(z.Z, {
                      className: $.closeContainer,
                      children: (0, i.jsx)(W.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: s.XLargeIcon
                      })
                  })
        });
    }),
    eo = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(z.Z, {
                  className: $.closeContainer,
                  children: (0, i.jsx)(W.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, S.QF)()),
                      IconComponent: s.LockUnlockedIcon
                  })
              })
            : null;
    });
function ea() {
    if (null != N.Z.getContextMenu()) {
        (0, u.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, S.QF)());
}
function ec() {
    d.Z.setFocusedPID(S.Js);
}
function es() {
    d.Z.setFocusedPID(null);
}
function eu(e) {
    let t = D.Z.isLocked((0, S.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? R.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && R.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function ed() {
    var e, t;
    let n = (0, X.Z)(),
        {
            locked: l,
            focused: u,
            incompatibleApp: m,
            hasValidResolution: N,
            hasZeroSizeDimension: R,
            keybind: P,
            isPreviewingInGame: W
        } = (0, a.cj)([D.Z, k.Z, w.Z], () => {
            let e = k.Z.windowSize((0, U.ZY)(n)),
                t = w.Z.getOverlayKeybind();
            return {
                locked: D.Z.isLocked((0, S.QF)()),
                focused: D.Z.isFocused((0, S.QF)()),
                incompatibleApp: D.Z.incompatibleApp,
                hasValidResolution: (0, S.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, A.BB)(t.shortcut, !0) : '???',
                isPreviewingInGame: D.Z.isPreviewingInGame()
            };
        }),
        z = (0, a.e7)([D.Z], () => D.Z.getActiveRegions()),
        { analyticsLocations: er } = (0, p.ZP)(h.Z.OVERLAY),
        ed = l || W;
    !(function (e, t) {
        let n = r.useRef({
            mount: e,
            unmount: t
        });
        r.useEffect(
            () =>
                void (n.current = {
                    mount: e,
                    unmount: t
                })
        ),
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
            d.Z.overlayReady((0, S.QF)()), n.addEventListener('keydown', eu), n.addEventListener('keyup', eu), ee && (n.document.hasFocus() && d.Z.setFocusedPID(S.Js), n.addEventListener('focus', ec), n.addEventListener('blur', es));
        },
        () => {
            n.removeEventListener('keydown', eu), n.removeEventListener('keyup', eu), ee && (n.removeEventListener('focus', ec), n.removeEventListener('blur', es));
        }
    ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, H.pL)(),
                n = y.Z.getVoiceChannelId(),
                i = x.Z.getChannel(n),
                l = null != i ? T.Z.getGuild(i.guild_id) : null,
                o = null != Z.Z.getCurrentUserActiveStream(),
                a = null != n,
                c = (0, b.Z)(L.Z) && !o && null != t,
                s = a && null != l && null != n,
                { showKeybindIndicators: u, dismissKeybindNotification: _ } = (0, G.K)();
            r.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    d.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: !1,
                        overlay_render_method: f.gl[f.gl.OutOfProcess]
                    });
                let i = null;
                (i = u
                    ? {
                          type: K.nc.KEYBIND_INDICATORS,
                          markAsDismissed: _
                      }
                    : { type: K.nc.WELCOME }),
                    c && s
                        ? (i = {
                              type: K.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: l
                          })
                        : c &&
                          (i = {
                              type: K.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    d.Z.overlayMounted(i);
            }, [a, c, s, t, n, l, u, _]);
        })(),
        (e = l),
        (t = n),
        r.useEffect(() => {
            if (e) {
                if (((0, c.Ay)(s.POPOUT_MODAL_CONTEXT), t.addEventListener('contextmenu', ei, !1), null != en)) {
                    let e = Date.now() - en;
                    d.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (en = null);
                }
                return () => {
                    t.removeEventListener('contextmenu', ei, !1);
                };
            }
            t.removeEventListener('contextmenu', ei, !1), null == en && ((en = Date.now()), d.Z.track(Q.rMx.OVERLAY_UNLOCKED));
        }, [e, t]);
    let ef = (0, a.e7)([y.Z], () => y.Z.getVoiceChannelId()),
        e_ = (0, a.e7)([x.Z], () => x.Z.getChannel(ef)),
        eh = (0, a.e7)([T.Z], () => (null != e_ ? T.Z.getGuild(e_.guild_id) : null)),
        ep = (0, a.e7)([C.default], () => C.default.getId()),
        ev = (0, a.e7)([g.ZP, O.Z], () => (0, E.Z)(g.ZP, O.Z)),
        em = (0, I.Ns)(null == ev ? void 0 : ev.id),
        eg = (0, a.e7)([v.Z], () => null != v.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED)),
        eI = (0, _.Z)(eg);
    return (r.useEffect(() => {
        !eI && eg && d.Z.notifyContentInventoryReady(em);
    }, [em, eg, eI]),
    R || m)
        ? null
        : (0, i.jsx)(p.Gt, {
              value: er,
              children: (0, i.jsx)(s.RedesignIconContextProvider, {
                  children: (0, i.jsxs)('div', {
                      className: $.overlay,
                      children: [
                          (0, i.jsx)(V.Z, {}),
                          W &&
                              (0, i.jsx)('header', {
                                  className: $.previewingInGameHeader,
                                  children: q.intl.string(q.t.iOq96u)
                              }),
                          et,
                          (!l || z.has(Q.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(el, {
                                  locked: l,
                                  keybind: P,
                                  onClick: ea
                              }),
                          N
                              ? (0, i.jsx)(B.Z, {
                                    className: o()({
                                        [$.layoutLocked]: l,
                                        [$.layoutUnlocked]: !l
                                    })
                                })
                              : l
                                ? null
                                : (0, i.jsx)('div', {
                                      className: $.invalidContainer,
                                      children: (0, i.jsx)('div', {
                                          className: $.inactiveContainer,
                                          children: q.intl.format(q.t.ketnW1, S.FW)
                                      })
                                  }),
                          (0, i.jsx)(Y.Z, {}),
                          ee &&
                              (0, i.jsx)(eo, {
                                  locked: l,
                                  focused: u
                              }),
                          null != eh &&
                              null != ef &&
                              (0, i.jsx)(M.Z, {
                                  streamerId: ep,
                                  guildId: eh.id,
                                  channelId: ef
                              }),
                          (0, i.jsx)(F.Z, {
                              locked: ed,
                              keybind: P
                          }),
                          (0, i.jsx)(j.Z, {})
                      ]
                  })
              })
          });
}
