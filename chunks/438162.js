n.d(t, { Z: () => eu });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    c = n(952265),
    s = n(481060),
    u = n(239091),
    d = n(13245),
    _ = n(110924),
    f = n(100527),
    p = n(906732),
    h = n(146282),
    b = n(70097),
    g = n(594190),
    m = n(567409),
    C = n(74299),
    O = n(989941),
    y = n(199902),
    E = n(314897),
    v = n(592125),
    I = n(430824),
    R = n(131951),
    A = n(944486),
    N = n(449224),
    w = n(574254),
    L = n(556296),
    S = n(237997),
    k = n(451478),
    P = n(585483),
    T = n(358085),
    Z = n(13140),
    x = n(145597),
    j = n(830917),
    D = n(681603),
    U = n(358446),
    B = n(348733),
    V = n(708383),
    M = n(923532),
    W = n(915614),
    F = n(777382),
    G = n(333031),
    Y = n(610394),
    H = n(388627),
    z = n(561064),
    K = n(987650),
    X = n(981631),
    Q = n(206583),
    J = n(388032),
    q = n(703231);
let $ = !T.isPlatformEmbedded && !1,
    ee = $
        ? (0, r.jsx)(b.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: q.videoDev,
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
let ei = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(s.P3F, {
            className: o()(q.overlayBackground, {
                [q.overlayActive]: !i,
                [q.overlayLocked]: i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === X.AeJ.PRIMARY && t === r && n();
            },
            onContextMenu: er,
            children: i
                ? null
                : (0, r.jsx)(G.Z, {
                      className: q.closeContainer,
                      children: (0, r.jsx)(W.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: s.Uz9
                      })
                  })
        });
    }),
    ea = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(G.Z, {
                  className: q.closeContainer,
                  children: (0, r.jsx)(W.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, x.QF)()),
                      IconComponent: s.d$P
                  })
              })
            : null;
    });
function eo() {
    if (null != w.Z.getContextMenu()) {
        (0, u.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, x.QF)());
}
function el() {
    d.Z.setFocusedPID(x.Js);
}
function ec() {
    d.Z.setFocusedPID(null);
}
function es(e) {
    let t = Y.ZP.isInputLocked((0, x.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? P.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && P.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eu() {
    let e = (0, z.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: a,
            hasValidResolution: u,
            hasZeroSizeDimension: b,
            keybind: w,
            isPreviewingInGame: P
        } = (0, l.cj)(
            [Y.ZP, S.Z, k.Z, L.ZP],
            () => {
                let t = k.Z.windowSize((0, j.ZY)(e)),
                    n = L.ZP.getOverlayKeybind(),
                    r = (0, x.QF)();
                return {
                    locked: Y.ZP.isInputLocked(r),
                    focused: r === x.Js ? S.Z.isFocused(r) : Y.ZP.isFocused(r),
                    incompatibleApp: S.Z.incompatibleApp,
                    hasValidResolution: (0, x.Te)(t),
                    isPreviewingInGame: S.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, Z.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        T = (0, l.e7)([S.Z], () => S.Z.getActiveRegions()),
        { analyticsLocations: W } = (0, p.ZP)(f.Z.OVERLAY),
        G = t || P;
    !(function (e, t) {
        let n = i.useRef({
            mount: e,
            unmount: t
        });
        i.useEffect(() => {
            n.current = {
                mount: e,
                unmount: t
            };
        }),
            i.useEffect(
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
            d.Z.overlayReady((0, x.QF)()), e.addEventListener('keydown', es), e.addEventListener('keyup', es), $ && (e.document.hasFocus() && d.Z.setFocusedPID(x.Js), e.addEventListener('focus', el), e.addEventListener('blur', ec));
        },
        () => {
            e.removeEventListener('keydown', es), e.removeEventListener('keyup', es), $ && (e.removeEventListener('focus', el), e.removeEventListener('blur', ec));
        }
    ),
        (function () {
            let e = i.useRef(!1),
                t = (0, H.pL)(),
                n = A.Z.getVoiceChannelId(),
                r = v.Z.getChannel(n),
                a = null != r ? I.Z.getGuild(r.guild_id) : null,
                o = null != y.Z.getCurrentUserActiveStream(),
                l = null != n,
                c = (0, C.Z)(R.Z) && !o && null != t,
                s = l && null != a && null != n,
                { showKeybindIndicators: u, dismissKeybindNotification: _ } = (0, U.K)();
            i.useEffect(() => {
                if (e.current) return;
                e.current = !0;
                let r = null;
                (r = u
                    ? {
                          type: K.nc.KEYBIND_INDICATORS,
                          markAsDismissed: _
                      }
                    : { type: K.nc.WELCOME }),
                    c && s
                        ? (r = {
                              type: K.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: a
                          })
                        : c &&
                          (r = {
                              type: K.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    d.Z.overlayMounted(r);
            }, [l, c, s, t, n, a, u, _]);
        })(),
        i.useEffect(() => {
            if (t) {
                if (((0, c.Ay)(s.u1M), e.addEventListener('contextmenu', en, !1), null != et)) {
                    let e = Date.now() - et;
                    d.Z.track(X.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (et = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', en, !1);
                };
            }
            e.removeEventListener('contextmenu', en, !1), null == et && ((et = Date.now()), d.Z.track(X.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let er = (0, l.e7)([A.Z], () => A.Z.getVoiceChannelId()),
        eu = (0, l.e7)([v.Z], () => v.Z.getChannel(er)),
        ed = (0, l.e7)([I.Z], () => (null != eu ? I.Z.getGuild(eu.guild_id) : null)),
        e_ = (0, l.e7)([E.default], () => E.default.getId()),
        ef = (0, l.e7)([g.ZP, N.Z], () => (0, O.Z)(g.ZP, N.Z)),
        ep = (0, m.Ns)(null == ef ? void 0 : ef.id),
        eh = (0, l.e7)([h.Z], () => null != h.Z.getLastFeedFetchDate(Q.YN.GAME_PROFILE_FEED)),
        eb = (0, _.Z)(eh);
    return (i.useEffect(() => {
        !eb && eh && d.Z.notifyContentInventoryReady(ep);
    }, [ep, eh, eb]),
    b || a)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: W,
              children: (0, r.jsx)(s.vWI, {
                  children: (0, r.jsxs)('div', {
                      className: q.overlay,
                      children: [
                          (0, r.jsx)(V.Z, {}),
                          P &&
                              (0, r.jsx)('header', {
                                  className: q.previewingInGameHeader,
                                  children: J.NW.string(J.t.iOq96u)
                              }),
                          ee,
                          (!t || T.has(X.O0n.TEXT_WIDGET)) &&
                              (0, r.jsx)(ei, {
                                  locked: t,
                                  keybind: w,
                                  onClick: eo
                              }),
                          u
                              ? (0, r.jsx)(F.Z, {
                                    className: o()({
                                        [q.layoutLocked]: t,
                                        [q.layoutUnlocked]: !t
                                    })
                                })
                              : t
                                ? null
                                : (0, r.jsx)('div', {
                                      className: q.invalidContainer,
                                      children: (0, r.jsx)('div', {
                                          className: q.inactiveContainer,
                                          children: J.NW.format(J.t.ketnW1, x.FW)
                                      })
                                  }),
                          $ &&
                              (0, r.jsx)(ea, {
                                  locked: t,
                                  focused: n
                              }),
                          null != ed &&
                              null != er &&
                              (0, r.jsx)(M.Z, {
                                  streamerId: e_,
                                  guildId: ed.id,
                                  channelId: er
                              }),
                          (0, r.jsx)(B.Z, {
                              locked: G,
                              keybind: w
                          }),
                          (0, r.jsx)(D.Z, {})
                      ]
                  })
              })
          });
}
