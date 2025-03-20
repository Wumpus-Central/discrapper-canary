n.d(t, { Z: () => eu });
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    c = n(442837),
    l = n(952265),
    _ = n(481060),
    u = n(239091),
    s = n(13245),
    d = n(110924),
    f = n(100527),
    p = n(906732),
    b = n(146282),
    m = n(70097),
    g = n(594190),
    y = n(567409),
    h = n(74299),
    v = n(989941),
    I = n(199902),
    O = n(314897),
    C = n(592125),
    x = n(430824),
    P = n(131951),
    w = n(944486),
    E = n(449224),
    k = n(574254),
    L = n(556296),
    N = n(237997),
    T = n(451478),
    j = n(585483),
    Z = n(358085),
    S = n(13140),
    D = n(145597),
    A = n(830917),
    B = n(681603),
    W = n(358446),
    G = n(348733),
    U = n(708383),
    R = n(923532),
    z = n(915614),
    F = n(777382),
    M = n(333031),
    V = n(610394),
    H = n(388627),
    Y = n(561064),
    K = n(987650),
    X = n(981631),
    J = n(206583),
    q = n(388032),
    Q = n(329908);
let $ = !Z.isPlatformEmbedded && !1,
    ee = $
        ? (0, r.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: Q.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    et = null;
function en(e) {
    e.preventDefault();
}
function er(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t)
            );
    });
}
let eo = o.memo(function (e) {
        let { keybind: t, onClick: n, locked: o } = e;
        return (0, r.jsx)(_.P3F, {
            className: i()(Q.overlayBackground, {
                [Q.overlayActive]: !o,
                [Q.overlayLocked]: o
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: o } = e;
                o === X.AeJ.PRIMARY && t === r && n();
            },
            onContextMenu: er,
            children: o
                ? null
                : (0, r.jsx)(M.Z, {
                      className: Q.closeContainer,
                      children: (0, r.jsx)(z.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: _.Uz9
                      })
                  })
        });
    }),
    ea = o.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(M.Z, {
                  className: Q.closeContainer,
                  children: (0, r.jsx)(z.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, D.getPID)()),
                      IconComponent: _.d$P
                  })
              })
            : null;
    });
function ei() {
    if (null != k.Z.getContextMenu()) {
        (0, u.Zy)();
        return;
    }
    s.Z.setInputLocked(!0, (0, D.getPID)());
}
function ec() {
    s.Z.setFocusedPID(D.DEV_PID);
}
function el() {
    s.Z.setFocusedPID(null);
}
function e_(e) {
    let t = V.ZP.isInputLocked((0, D.getPID)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? j.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && j.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eu() {
    let e = (0, Y.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: a,
            hasValidResolution: u,
            hasZeroSizeDimension: m,
            keybind: k,
            isPreviewingInGame: j
        } = (0, c.cj)(
            [V.ZP, N.default, T.Z, L.ZP],
            () => {
                let t = T.Z.windowSize((0, A.ZY)(e)),
                    n = L.ZP.getOverlayKeybind(),
                    r = (0, D.getPID)();
                return {
                    locked: V.ZP.isInputLocked(r),
                    focused: r === D.DEV_PID ? N.default.isFocused(r) : V.ZP.isFocused(r),
                    incompatibleApp: N.default.incompatibleApp,
                    hasValidResolution: (0, D.validResolution)(t),
                    isPreviewingInGame: N.default.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, S.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        Z = (0, c.e7)([N.default], () => N.default.getActiveRegions()),
        { analyticsLocations: z } = (0, p.ZP)(f.Z.OVERLAY),
        M = t || j;
    !(function (e, t) {
        let n = o.useRef({
            mount: e,
            unmount: t
        });
        o.useEffect(() => {
            n.current = {
                mount: e,
                unmount: t
            };
        }),
            o.useEffect(
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
            s.Z.overlayReady((0, D.getPID)()), e.addEventListener('keydown', e_), e.addEventListener('keyup', e_), $ && (e.document.hasFocus() && s.Z.setFocusedPID(D.DEV_PID), e.addEventListener('focus', ec), e.addEventListener('blur', el));
        },
        () => {
            e.removeEventListener('keydown', e_), e.removeEventListener('keyup', e_), $ && (e.removeEventListener('focus', ec), e.removeEventListener('blur', el));
        }
    ),
        (function () {
            let e = o.useRef(!1),
                t = (0, H.pL)(),
                n = w.Z.getVoiceChannelId(),
                r = C.Z.getChannel(n),
                a = null != r ? x.Z.getGuild(r.guild_id) : null,
                i = null != I.Z.getCurrentUserActiveStream(),
                c = null != n,
                l = (0, h.Z)(P.Z) && !i && null != t,
                _ = c && null != a && null != n,
                { showKeybindIndicators: u, dismissKeybindNotification: d } = (0, W.K)();
            o.useEffect(() => {
                if (e.current) return;
                e.current = !0;
                let r = null;
                (r = u
                    ? {
                          type: K.nc.KEYBIND_INDICATORS,
                          markAsDismissed: d
                      }
                    : { type: K.nc.WELCOME }),
                    l && _
                        ? (r = {
                              type: K.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: a
                          })
                        : l &&
                          (r = {
                              type: K.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    s.Z.overlayMounted(r);
            }, [c, l, _, t, n, a, u, d]);
        })(),
        o.useEffect(() => {
            if (t) {
                if (((0, l.Ay)(_.u1M), e.addEventListener('contextmenu', en, !1), null != et)) {
                    let e = Date.now() - et;
                    s.Z.track(X.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (et = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', en, !1);
                };
            }
            e.removeEventListener('contextmenu', en, !1), null == et && ((et = Date.now()), s.Z.track(X.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let er = (0, c.e7)([w.Z], () => w.Z.getVoiceChannelId()),
        eu = (0, c.e7)([C.Z], () => C.Z.getChannel(er)),
        es = (0, c.e7)([x.Z], () => (null != eu ? x.Z.getGuild(eu.guild_id) : null)),
        ed = (0, c.e7)([O.default], () => O.default.getId()),
        ef = (0, c.e7)([g.ZP, E.Z], () => (0, v.Z)(g.ZP, E.Z)),
        ep = (0, y.Ns)(null == ef ? void 0 : ef.id),
        eb = (0, c.e7)([b.Z], () => null != b.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED)),
        em = (0, d.Z)(eb);
    return (o.useEffect(() => {
        !em && eb && s.Z.notifyContentInventoryReady(ep);
    }, [ep, eb, em]),
    m || a)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: z,
              children: (0, r.jsxs)('div', {
                  className: Q.overlay,
                  children: [
                      (0, r.jsx)(U.Z, {}),
                      j &&
                          (0, r.jsx)('header', {
                              className: Q.previewingInGameHeader,
                              children: q.NW.string(q.t.iOq96u)
                          }),
                      ee,
                      (!t || Z.has(X.O0n.TEXT_WIDGET)) &&
                          (0, r.jsx)(eo, {
                              locked: t,
                              keybind: k,
                              onClick: ei
                          }),
                      u
                          ? (0, r.jsx)(F.Z, {
                                className: i()({
                                    [Q.layoutLocked]: t,
                                    [Q.layoutUnlocked]: !t
                                })
                            })
                          : t
                            ? null
                            : (0, r.jsx)('div', {
                                  className: Q.invalidContainer,
                                  children: (0, r.jsx)('div', {
                                      className: Q.inactiveContainer,
                                      children: q.NW.format(q.t.ketnW1, D.OVERLAY_MIN_RESOLUTION)
                                  })
                              }),
                      $ &&
                          (0, r.jsx)(ea, {
                              locked: t,
                              focused: n
                          }),
                      null != es &&
                          null != er &&
                          (0, r.jsx)(R.Z, {
                              streamerId: ed,
                              guildId: es.id,
                              channelId: er
                          }),
                      (0, r.jsx)(G.Z, {
                          locked: M,
                          keybind: k
                      }),
                      (0, r.jsx)(B.Z, {})
                  ]
              })
          });
}
