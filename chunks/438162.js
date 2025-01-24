t.d(n, {
    Z: function () {
        return es;
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
    S = t(585483),
    P = t(358085),
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
    B = t(388627),
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
            className: a()($.overlayBackground, {
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
                : (0, i.jsx)(Y.Z, {
                      className: $.closeContainer,
                      children: (0, i.jsx)(F.Z, {
                          keybind: n,
                          onClick: t,
                          IconComponent: u.XLargeIcon
                      })
                  })
        });
    }),
    ea = r.memo(function (e) {
        let { locked: n, focused: t } = e;
        return n && t
            ? (0, i.jsx)(Y.Z, {
                  className: $.closeContainer,
                  children: (0, i.jsx)(F.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, R.QF)()),
                      IconComponent: u.LockUnlockedIcon
                  })
              })
            : null;
    });
function eo() {
    if (null != k.Z.getContextMenu()) {
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
            hasValidResolution: k,
            hasZeroSizeDimension: S,
            keybind: P,
            isPreviewingInGame: F
        } = (0, o.cj)([T.Z, A.Z, w.Z], () => {
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
        Y = (0, o.e7)([T.Z], () => T.Z.getActiveRegions()),
        { analyticsLocations: er } = (0, f.ZP)(p.Z.OVERLAY),
        es = l || F;
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
                n = (0, B.pL)(),
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
                    s.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: o,
                        text_widget_connected: !1,
                        overlay_render_method: _.gl[_.gl.OutOfProcess]
                    });
                let i = null;
                (i = d
                    ? {
                          type: K.nc.KEYBIND_INDICATORS,
                          markAsDismissed: h
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
            }, [o, c, u, n, t, l, d, h]);
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
    let e_ = (0, o.e7)([N.Z], () => N.Z.getVoiceChannelId()),
        eh = (0, o.e7)([y.Z], () => y.Z.getChannel(e_)),
        ep = (0, o.e7)([x.Z], () => (null != eh ? x.Z.getGuild(eh.guild_id) : null)),
        ef = (0, o.e7)([E.default], () => E.default.getId()),
        ev = (0, o.e7)([b.ZP, O.Z], () => (0, Z.Z)(b.ZP, O.Z)),
        em = (0, g.Ns)(null == ev ? void 0 : ev.id),
        eb = (0, o.e7)([v.Z], () => null != v.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED)),
        eg = (0, h.Z)(eb);
    return (r.useEffect(() => {
        !eg && eb && s.Z.notifyContentInventoryReady(em);
    }, [em, eb, eg]),
    S || m)
        ? null
        : (0, i.jsx)(f.Gt, {
              value: er,
              children: (0, i.jsx)(u.RedesignIconContextProvider, {
                  children: (0, i.jsxs)('div', {
                      className: $.overlay,
                      children: [
                          (0, i.jsx)(z.Z, {}),
                          F &&
                              (0, i.jsx)('header', {
                                  className: $.previewingInGameHeader,
                                  children: q.intl.string(q.t.iOq96u)
                              }),
                          en,
                          (!l || Y.has(Q.O0n.TEXT_WIDGET)) &&
                              (0, i.jsx)(el, {
                                  locked: l,
                                  keybind: P,
                                  onClick: eo
                              }),
                          k
                              ? (0, i.jsx)(W.Z, {
                                    className: a()({
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
                              (0, i.jsx)(ea, {
                                  locked: l,
                                  focused: d
                              }),
                          null != ep &&
                              null != e_ &&
                              (0, i.jsx)(M.Z, {
                                  streamerId: ef,
                                  guildId: ep.id,
                                  channelId: e_
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
