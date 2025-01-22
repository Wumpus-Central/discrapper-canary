t.d(n, {
    Z: function () {
        return es;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(120356),
    o = t.n(l),
    a = t(442837),
    c = t(952265),
    u = t(481060),
    d = t(239091),
    s = t(13245),
    f = t(615287),
    _ = t(110924),
    p = t(100527),
    h = t(906732),
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
    k = t(944486),
    N = t(449224),
    O = t(574254),
    w = t(556296),
    T = t(237997),
    A = t(451478),
    S = t(585483),
    P = t(358085),
    D = t(13140),
    R = t(145597),
    U = t(830917),
    V = t(681603),
    j = t(358446),
    G = t(348733),
    M = t(708383),
    z = t(923532),
    W = t(915614),
    F = t(777382),
    B = t(333031),
    Y = t(388627),
    H = t(319414),
    X = t(561064),
    K = t(987650),
    Q = t(981631),
    J = t(206583),
    q = t(388032),
    $ = t(800004);
let ee = !P.isPlatformEmbedded && !1,
    en = ee
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: $.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    et = null;
function ei(e) {
    e.preventDefault();
}
function er(e) {
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
let el = r.memo(function (e) {
        let { keybind: n, onClick: t, locked: r } = e;
        return (0, i.jsx)(u.Clickable, {
            className: o()($.overlayBackground, {
                [$.overlayActive]: !r,
                [$.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: i, button: r } = e;
                r === Q.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: er,
            children: r
                ? null
                : (0, i.jsx)(B.Z, {
                      className: $.closeContainer,
                      children: (0, i.jsx)(W.Z, {
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
            ? (0, i.jsx)(B.Z, {
                  className: $.closeContainer,
                  children: (0, i.jsx)(W.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, R.QF)()),
                      IconComponent: u.LockUnlockedIcon
                  })
              })
            : null;
    });
function ea() {
    if (null != O.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    s.Z.setInputLocked(!0, (0, R.QF)());
}
function ec() {
    s.Z.setFocusedPID(R.Js);
}
function eu() {
    s.Z.setFocusedPID(null);
}
function ed(e) {
    let n = T.Z.isLocked((0, R.QF)());
    'alt' === e.key.toLowerCase() && !n && ('keyup' === e.type.toLowerCase() ? S.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && S.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function es() {
    var e, n;
    let t = (0, X.Z)(),
        {
            locked: l,
            focused: d,
            incompatibleApp: m,
            hasValidResolution: O,
            hasZeroSizeDimension: S,
            keybind: P,
            isPreviewingInGame: W
        } = (0, a.cj)([T.Z, A.Z, w.Z], () => {
            let e = A.Z.windowSize((0, U.ZY)(t)),
                n = w.Z.getOverlayKeybind();
            return {
                locked: T.Z.isLocked((0, R.QF)()),
                focused: T.Z.isFocused((0, R.QF)()),
                incompatibleApp: T.Z.incompatibleApp,
                hasValidResolution: (0, R.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != n ? (0, D.BB)(n.shortcut, !0) : '???',
                isPreviewingInGame: T.Z.isPreviewingInGame()
            };
        }),
        B = (0, a.e7)([T.Z], () => T.Z.getActiveRegions()),
        { analyticsLocations: er } = (0, h.ZP)(p.Z.OVERLAY),
        es = l || W;
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
            s.Z.overlayReady((0, R.QF)()), t.addEventListener('keydown', ed), t.addEventListener('keyup', ed), ee && (t.document.hasFocus() && s.Z.setFocusedPID(R.Js), t.addEventListener('focus', ec), t.addEventListener('blur', eu));
        },
        () => {
            t.removeEventListener('keydown', ed), t.removeEventListener('keyup', ed), ee && (t.removeEventListener('focus', ec), t.removeEventListener('blur', eu));
        }
    ),
        !(function () {
            let e = r.useRef(!1),
                n = (0, Y.pL)(),
                t = k.Z.getVoiceChannelId(),
                i = y.Z.getChannel(t),
                l = null != i ? x.Z.getGuild(i.guild_id) : null,
                o = null != C.Z.getCurrentUserActiveStream(),
                a = null != t,
                c = (0, I.Z)(L.Z) && !o && null != n,
                u = a && null != l && null != t,
                { showKeybindIndicators: d, dismissKeybindNotification: _ } = (0, j.K)();
            r.useEffect(() => {
                if (e.current) return;
                (e.current = !0),
                    s.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: !1,
                        overlay_render_method: f.gl[f.gl.OutOfProcess]
                    });
                let i = null;
                (i = d
                    ? {
                          type: K.nc.KEYBIND_INDICATORS,
                          markAsDismissed: _
                      }
                    : { type: K.nc.WELCOME }),
                    c && u
                        ? (i = {
                              type: K.nc.GO_LIVE_VOICE,
                              game: n,
                              voiceChannelId: t,
                              voiceGuild: l
                          })
                        : c &&
                          (i = {
                              type: K.nc.GO_LIVE_NON_VOICE,
                              game: n
                          }),
                    s.Z.overlayMounted(i);
            }, [a, c, u, n, t, l, d, _]);
        })(),
        (e = l),
        (n = t),
        r.useEffect(() => {
            if (e) {
                if (((0, c.Ay)(u.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', ei, !1), null != et)) {
                    let e = Date.now() - et;
                    s.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (et = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', ei, !1);
                };
            }
            n.removeEventListener('contextmenu', ei, !1), null == et && ((et = Date.now()), s.Z.track(Q.rMx.OVERLAY_UNLOCKED));
        }, [e, n]);
    let ef = (0, a.e7)([k.Z], () => k.Z.getVoiceChannelId()),
        e_ = (0, a.e7)([y.Z], () => y.Z.getChannel(ef)),
        ep = (0, a.e7)([x.Z], () => (null != e_ ? x.Z.getGuild(e_.guild_id) : null)),
        eh = (0, a.e7)([E.default], () => E.default.getId()),
        ev = (0, a.e7)([b.ZP, N.Z], () => (0, Z.Z)(b.ZP, N.Z)),
        em = (0, g.Ns)(null == ev ? void 0 : ev.id),
        eb = (0, a.e7)([v.Z], () => null != v.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED)),
        eg = (0, _.Z)(eb);
    return (r.useEffect(() => {
        !eg && eb && s.Z.notifyContentInventoryReady(em);
    }, [em, eb, eg]),
    S || m)
        ? null
        : (0, i.jsx)(h.Gt, {
              value: er,
              children: (0, i.jsx)(u.RedesignIconContextProvider, {
                  children: (0, i.jsxs)('div', {
                      className: $.overlay,
                      children: [
                          (0, i.jsx)(M.Z, {}),
                          W &&
                              (0, i.jsx)('header', {
                                  className: $.previewingInGameHeader,
                                  children: q.intl.string(q.t.iOq96u)
                              }),
                          en,
                          (!l || B.has(Q.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(el, {
                                  locked: l,
                                  keybind: P,
                                  onClick: ea
                              }),
                          O
                              ? (0, i.jsx)(F.Z, {
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
                                          children: q.intl.format(q.t.ketnW1, R.FW)
                                      })
                                  }),
                          (0, i.jsx)(H.Z, {}),
                          ee &&
                              (0, i.jsx)(eo, {
                                  locked: l,
                                  focused: d
                              }),
                          null != ep &&
                              null != ef &&
                              (0, i.jsx)(z.Z, {
                                  streamerId: eh,
                                  guildId: ep.id,
                                  channelId: ef
                              }),
                          (0, i.jsx)(G.Z, {
                              locked: es,
                              keybind: P
                          }),
                          (0, i.jsx)(V.Z, {})
                      ]
                  })
              })
          });
}
