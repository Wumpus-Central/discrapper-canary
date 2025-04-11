n.d(t, { Z: () => eu });
var r = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    c = n(442837),
    l = n(952265),
    s = n(481060),
    u = n(239091),
    _ = n(13245),
    d = n(110924),
    f = n(100527),
    p = n(906732),
    b = n(146282),
    m = n(70097),
    g = n(594190),
    h = n(567409),
    y = n(74299),
    v = n(989941),
    I = n(199902),
    O = n(314897),
    C = n(592125),
    w = n(430824),
    P = n(131951),
    x = n(944486),
    E = n(449224),
    Z = n(574254),
    j = n(556296),
    k = n(237997),
    L = n(451478),
    T = n(585483),
    D = n(358085),
    S = n(13140),
    N = n(145597),
    A = n(830917),
    B = n(681603),
    W = n(358446),
    R = n(348733),
    U = n(708383),
    G = n(923532),
    z = n(915614),
    M = n(777382),
    V = n(333031),
    F = n(610394),
    H = n(388627),
    Y = n(561064),
    K = n(987650),
    X = n(981631),
    q = n(206583),
    J = n(388032),
    Q = n(561887);
let $ = !D.isPlatformEmbedded && !1,
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
        return (0, r.jsx)(s.P3F, {
            className: a()(Q.overlayBackground, {
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
                : (0, r.jsx)(V.Z, {
                      className: Q.closeContainer,
                      children: (0, r.jsx)(z.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: s.Uz9
                      })
                  })
        });
    }),
    ei = o.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(V.Z, {
                  className: Q.closeContainer,
                  children: (0, r.jsx)(z.Z, {
                      onClick: () => _.Z.setInputLocked(!1, (0, N.getPID)()),
                      IconComponent: s.d$P
                  })
              })
            : null;
    });
function ea() {
    if (null != Z.Z.getContextMenu()) return void (0, u.Zy)();
    _.Z.setInputLocked(!0, (0, N.getPID)());
}
function ec() {
    _.Z.setFocusedPID(N.DEV_PID);
}
function el() {
    _.Z.setFocusedPID(null);
}
function es(e) {
    let t = F.ZP.isInputLocked((0, N.getPID)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? T.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && T.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eu() {
    let e = (0, Y.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: i,
            hasValidResolution: u,
            hasZeroSizeDimension: m,
            keybind: Z,
            isPreviewingInGame: T
        } = (0, c.cj)(
            [F.ZP, k.default, L.Z, j.ZP],
            () => {
                let t = L.Z.windowSize((0, A.ZY)(e)),
                    n = j.ZP.getOverlayKeybind(),
                    r = (0, N.getPID)();
                return {
                    locked: F.ZP.isInputLocked(r),
                    focused: r === N.DEV_PID ? k.default.isFocused(r) : F.ZP.isFocused(r),
                    incompatibleApp: k.default.incompatibleApp,
                    hasValidResolution: (0, N.validResolution)(t),
                    isPreviewingInGame: k.default.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, S.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        D = (0, c.e7)([k.default], () => k.default.getActiveRegions()),
        { analyticsLocations: z } = (0, p.ZP)(f.Z.OVERLAY),
        V = t || T;
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
            _.Z.overlayReady((0, N.getPID)()), e.addEventListener('keydown', es), e.addEventListener('keyup', es), $ && (e.document.hasFocus() && _.Z.setFocusedPID(N.DEV_PID), e.addEventListener('focus', ec), e.addEventListener('blur', el));
        },
        () => {
            e.removeEventListener('keydown', es), e.removeEventListener('keyup', es), $ && (e.removeEventListener('focus', ec), e.removeEventListener('blur', el));
        }
    ),
        (function () {
            let e = o.useRef(!1),
                t = (0, H.pL)(),
                n = x.Z.getVoiceChannelId(),
                r = C.Z.getChannel(n),
                i = null != r ? w.Z.getGuild(r.guild_id) : null,
                a = null != I.Z.getCurrentUserActiveStream(),
                c = null != n,
                l = (0, y.Z)(P.Z) && !a && null != t,
                s = c && null != i && null != n,
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
                    l && s
                        ? (r = {
                              type: K.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: i
                          })
                        : l &&
                          (r = {
                              type: K.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    _.Z.overlayMounted(r);
            }, [c, l, s, t, n, i, u, d]);
        })(),
        o.useEffect(() => {
            if (t) {
                if (((0, l.Ay)(s.u1M), e.addEventListener('contextmenu', en, !1), null != et)) {
                    let e = Date.now() - et;
                    _.Z.track(X.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (et = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', en, !1);
                };
            }
            e.removeEventListener('contextmenu', en, !1), null == et && ((et = Date.now()), _.Z.track(X.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let er = (0, c.e7)([x.Z], () => x.Z.getVoiceChannelId()),
        eu = (0, c.e7)([C.Z], () => C.Z.getChannel(er)),
        e_ = (0, c.e7)([w.Z], () => (null != eu ? w.Z.getGuild(eu.guild_id) : null)),
        ed = (0, c.e7)([O.default], () => O.default.getId()),
        ef = (0, c.e7)([g.ZP, E.Z], () => (0, v.Z)(g.ZP, E.Z)),
        ep = (0, h.Ns)(null == ef ? void 0 : ef.id),
        eb = (0, c.e7)([b.Z], () => null != b.Z.getLastFeedFetchDate(q.YN.GAME_PROFILE_FEED)),
        em = (0, d.Z)(eb);
    return (o.useEffect(() => {
        !em && eb && _.Z.notifyContentInventoryReady(ep);
    }, [ep, eb, em]),
    m || i)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: z,
              children: (0, r.jsxs)('div', {
                  className: Q.overlay,
                  children: [
                      (0, r.jsx)(U.Z, {}),
                      T &&
                          (0, r.jsx)('header', {
                              className: Q.previewingInGameHeader,
                              children: J.NW.string(J.t.iOq96u)
                          }),
                      ee,
                      (!t || D.has(X.O0n.TEXT_WIDGET)) &&
                          (0, r.jsx)(eo, {
                              locked: t,
                              keybind: Z,
                              onClick: ea
                          }),
                      u
                          ? (0, r.jsx)(M.Z, {
                                className: a()({
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
                                      children: J.NW.format(J.t.ketnW1, N.OVERLAY_MIN_RESOLUTION)
                                  })
                              }),
                      $ &&
                          (0, r.jsx)(ei, {
                              locked: t,
                              focused: n
                          }),
                      null != e_ &&
                          null != er &&
                          (0, r.jsx)(G.Z, {
                              streamerId: ed,
                              guildId: e_.id,
                              channelId: er
                          }),
                      (0, r.jsx)(R.Z, {
                          locked: V,
                          keybind: Z
                      }),
                      (0, r.jsx)(B.Z, {})
                  ]
              })
          });
}
