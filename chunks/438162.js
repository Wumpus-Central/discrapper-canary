n.d(t, { Z: () => ed });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    _ = n(442837),
    c = n(952265),
    l = n(481060),
    d = n(239091),
    s = n(13245),
    u = n(110924),
    h = n(100527),
    f = n(906732),
    p = n(146282),
    m = n(70097),
    C = n(594190),
    g = n(567409),
    b = n(74299),
    E = n(989941),
    I = n(199902),
    v = n(314897),
    R = n(592125),
    L = n(430824),
    k = n(131951),
    y = n(944486),
    O = n(449224),
    A = n(574254),
    x = n(556296),
    N = n(237997),
    T = n(451478),
    S = n(585483),
    Z = n(358085),
    B = n(13140),
    U = n(145597),
    w = n(830917),
    D = n(681603),
    P = n(358446),
    M = n(348733),
    V = n(708383),
    F = n(923532),
    W = n(915614),
    G = n(777382),
    H = n(333031),
    Y = n(610394),
    j = n(388627),
    z = n(561064),
    K = n(987650),
    X = n(981631),
    Q = n(206583),
    q = n(388032),
    J = n(95613);
let $ = !Z.isPlatformEmbedded && !1,
    ee = $
        ? (0, r.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: J.videoDev,
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
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let ea = a.memo(function (e) {
        let { keybind: t, onClick: n, locked: a } = e;
        return (0, r.jsx)(l.P3F, {
            className: o()(J.overlayBackground, {
                [J.overlayActive]: !a,
                [J.overlayLocked]: a
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: a } = e;
                a === X.AeJ.PRIMARY && t === r && n();
            },
            onContextMenu: er,
            children: a
                ? null
                : (0, r.jsx)(H.Z, {
                      className: J.closeContainer,
                      children: (0, r.jsx)(W.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: l.Uz9
                      })
                  })
        });
    }),
    ei = a.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(H.Z, {
                  className: J.closeContainer,
                  children: (0, r.jsx)(W.Z, {
                      onClick: () => s.Z.setInputLocked(!1, (0, U.QF)()),
                      IconComponent: l.d$P
                  })
              })
            : null;
    });
function eo() {
    if (null != A.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    s.Z.setInputLocked(!0, (0, U.QF)());
}
function e_() {
    s.Z.setFocusedPID(U.Js);
}
function ec() {
    s.Z.setFocusedPID(null);
}
function el(e) {
    let t = Y.ZP.isInputLocked((0, U.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? S.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && S.S.dispatch(X.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function ed() {
    let e = (0, z.Z)(),
        {
            locked: t,
            focused: n,
            incompatibleApp: i,
            hasValidResolution: d,
            hasZeroSizeDimension: m,
            keybind: A,
            isPreviewingInGame: S
        } = (0, _.cj)(
            [Y.ZP, N.Z, T.Z, x.ZP],
            () => {
                let t = T.Z.windowSize((0, w.ZY)(e)),
                    n = x.ZP.getOverlayKeybind(),
                    r = (0, U.QF)();
                return {
                    locked: Y.ZP.isInputLocked(r),
                    focused: r === U.Js ? N.Z.isFocused(r) : Y.ZP.isFocused(r),
                    incompatibleApp: N.Z.incompatibleApp,
                    hasValidResolution: (0, U.Te)(t),
                    isPreviewingInGame: N.Z.isPreviewingInGame(),
                    hasZeroSizeDimension: 0 === t.height || 0 === t.width,
                    keybind: null != n ? (0, B.BB)(n.shortcut, !0) : '???'
                };
            },
            [e]
        ),
        Z = (0, _.e7)([N.Z], () => N.Z.getActiveRegions()),
        { analyticsLocations: W } = (0, f.ZP)(h.Z.OVERLAY),
        H = t || S;
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
            s.Z.overlayReady((0, U.QF)()), e.addEventListener('keydown', el), e.addEventListener('keyup', el), $ && (e.document.hasFocus() && s.Z.setFocusedPID(U.Js), e.addEventListener('focus', e_), e.addEventListener('blur', ec));
        },
        () => {
            e.removeEventListener('keydown', el), e.removeEventListener('keyup', el), $ && (e.removeEventListener('focus', e_), e.removeEventListener('blur', ec));
        }
    ),
        (function () {
            let e = a.useRef(!1),
                t = (0, j.pL)(),
                n = y.Z.getVoiceChannelId(),
                r = R.Z.getChannel(n),
                i = null != r ? L.Z.getGuild(r.guild_id) : null,
                o = null != I.Z.getCurrentUserActiveStream(),
                _ = null != n,
                c = (0, b.Z)(k.Z) && !o && null != t,
                l = _ && null != i && null != n,
                { showKeybindIndicators: d, dismissKeybindNotification: u } = (0, P.K)();
            a.useEffect(() => {
                if (e.current) return;
                e.current = !0;
                let r = null;
                (r = d
                    ? {
                          type: K.nc.KEYBIND_INDICATORS,
                          markAsDismissed: u
                      }
                    : { type: K.nc.WELCOME }),
                    c && l
                        ? (r = {
                              type: K.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: i
                          })
                        : c &&
                          (r = {
                              type: K.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    s.Z.overlayMounted(r);
            }, [_, c, l, t, n, i, d, u]);
        })(),
        a.useEffect(() => {
            if (t) {
                if (((0, c.Ay)(l.u1M), e.addEventListener('contextmenu', en, !1), null != et)) {
                    let e = Date.now() - et;
                    s.Z.track(X.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (et = null);
                }
                return () => {
                    e.removeEventListener('contextmenu', en, !1);
                };
            }
            e.removeEventListener('contextmenu', en, !1), null == et && ((et = Date.now()), s.Z.track(X.rMx.OVERLAY_UNLOCKED));
        }, [t, e]);
    let er = (0, _.e7)([y.Z], () => y.Z.getVoiceChannelId()),
        ed = (0, _.e7)([R.Z], () => R.Z.getChannel(er)),
        es = (0, _.e7)([L.Z], () => (null != ed ? L.Z.getGuild(ed.guild_id) : null)),
        eu = (0, _.e7)([v.default], () => v.default.getId()),
        eh = (0, _.e7)([C.ZP, O.Z], () => (0, E.Z)(C.ZP, O.Z)),
        ef = (0, g.Ns)(null == eh ? void 0 : eh.id),
        ep = (0, _.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(Q.YN.GAME_PROFILE_FEED)),
        em = (0, u.Z)(ep);
    return (a.useEffect(() => {
        !em && ep && s.Z.notifyContentInventoryReady(ef);
    }, [ef, ep, em]),
    m || i)
        ? null
        : (0, r.jsx)(f.Gt, {
              value: W,
              children: (0, r.jsx)(l.vWI, {
                  children: (0, r.jsxs)('div', {
                      className: J.overlay,
                      children: [
                          (0, r.jsx)(V.Z, {}),
                          S &&
                              (0, r.jsx)('header', {
                                  className: J.previewingInGameHeader,
                                  children: q.intl.string(q.t.iOq96u)
                              }),
                          ee,
                          (!t || Z.has(X.O0n.TEXT_WIDGET)) &&
                              (0, r.jsx)(ea, {
                                  locked: t,
                                  keybind: A,
                                  onClick: eo
                              }),
                          d
                              ? (0, r.jsx)(G.Z, {
                                    className: o()({
                                        [J.layoutLocked]: t,
                                        [J.layoutUnlocked]: !t
                                    })
                                })
                              : t
                                ? null
                                : (0, r.jsx)('div', {
                                      className: J.invalidContainer,
                                      children: (0, r.jsx)('div', {
                                          className: J.inactiveContainer,
                                          children: q.intl.format(q.t.ketnW1, U.FW)
                                      })
                                  }),
                          $ &&
                              (0, r.jsx)(ei, {
                                  locked: t,
                                  focused: n
                              }),
                          null != es &&
                              null != er &&
                              (0, r.jsx)(F.Z, {
                                  streamerId: eu,
                                  guildId: es.id,
                                  channelId: er
                              }),
                          (0, r.jsx)(M.Z, {
                              locked: H,
                              keybind: A
                          }),
                          (0, r.jsx)(D.Z, {})
                      ]
                  })
              })
          });
}
