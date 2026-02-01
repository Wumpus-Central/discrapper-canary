n.d(t, {
    A: () => er,
}),
    n(321073),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(192308),
    u = n(397927),
    c = n(442433),
    d = n(684013),
    h = n(964486),
    p = n(793574),
    f = n(688810),
    g = n(607470),
    m = n(880144),
    y = n(616356),
    A = n(734057),
    v = n(71393),
    b = n(430452),
    E = n(309010),
    O = n(532624),
    x = n(256415),
    _ = n(531685),
    S = n(203982),
    I = n(723702),
    j = n(350535),
    T = n(365971),
    C = n(41984),
    N = n(589051),
    w = n(223251),
    P = n(935975),
    D = n(555153),
    R = n(155052),
    k = n(302614),
    M = n(833551),
    L = n(592598),
    U = n(395011),
    G = n(222506),
    V = n(127242),
    z = n(237984),
    F = n(243612),
    H = n(575530),
    Y = n(545807),
    K = n(672396),
    W = n(644434),
    B = n(652215),
    Z = n(661272);
let X = !I.isPlatformEmbedded && !1,
    J = X
        ? (0, i.jsx)(g.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: Z.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;

function Q(e) {
    e.preventDefault();
}

function q(e) {
    (0, c.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => {
                var n, r;
                return (0, i.jsx)(
                    e,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, t)),
                    (r = r =
                        {
                            layoutId: W.G,
                            version: 4,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n),
                );
            };
        },
        {
            context: B.BRT.OVERLAY,
        },
    );
}
let $ = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e,
            l = (0, N.X4)(p.A.OVERLAY);
        return (0, i.jsx)(u.DUT, {
            className: a()(Z.LK, {
                [Z.Zo]: !r,
                [Z.vZ]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === B.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: q,
            children: r
                ? null
                : (0, i.jsxs)(k.A, {
                      className: Z.BE,
                      children: [
                          l
                              ? (0, i.jsx)(P.A, {
                                    onClick: () => (0, z.b)(p.A.OVERLAY, B.BRT.OVERLAY),
                                    IconComponent: u.iFK,
                                })
                              : null,
                          (0, i.jsx)(P.A, {
                              keybind: t,
                              onClick: n,
                              IconComponent: u.d$L,
                          }),
                      ],
                  }),
        });
    }),
    ee = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(k.A, {
                  className: Z.BE,
                  children: (0, i.jsx)(P.A, {
                      onClick: () => d.A.setInputLocked(!1, U.A.getTargetPID()),
                      IconComponent: u.wUM,
                  }),
              })
            : null;
    });

function et() {
    d.A.setInputLocked(!0, U.A.getTargetPID());
}

function en(e) {
    let t = G.A.isInputLocked(U.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? S._.dispatch(B.jej.OVERLAY_V3_SHOW_WIDGETS, {
                  show: !0,
              })
            : "keydown" === e.type.toLowerCase() &&
              S._.dispatch(B.jej.OVERLAY_V3_SHOW_WIDGETS, {
                  show: !1,
              }));
}

function ei() {
    return (0, s.bG)([V.A], () => V.A.hasRenderDebugMode(C.x7.WindowContainer))
        ? (0, i.jsx)("div", {
              className: Z.N1,
          })
        : null;
}

function er(e) {
    var t, n;
    let l,
        c,
        { isEmbeddedActivity: g } = e,
        I = (0, Y.A)(),
        C = (0, s.bG)([U.A], () => U.A.getTargetPID()),
        {
            locked: P,
            focused: k,
            incompatibleApp: V,
            hasZeroSizeDimension: z,
            keybind: W,
        } = (0, s.cf)([U.A, x.default, _.A, O.Ay, G.A], () => {
            let e = _.A.windowSize((0, T.Q2)(I)),
                t = O.Ay.getOverlayKeybind();
            return {
                locked: G.A.isInputLocked(C),
                focused: U.A.isFocused(C),
                incompatibleApp: x.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, j.dI)(t.shortcut, !0) : "???",
            };
        }, [I, C]),
        { analyticsLocations: q } = (0, f.Ay)(p.A.OVERLAY);
    return (
        (0, h.Ay)(() => {
            (0, N.E)();
        }),
        (t = () => {
            d.A.overlayReady(U.A.getTargetPID()), I.addEventListener("keydown", en), I.addEventListener("keyup", en);
        }),
        (n = () => {
            I.removeEventListener("keydown", en), I.removeEventListener("keyup", en);
        }),
        (l = r.useRef({
            mount: t,
            unmount: n,
        })),
        r.useEffect(() => {
            l.current = {
                mount: t,
                unmount: n,
            };
        }),
        r.useEffect(
            () => (
                l.current.mount(),
                () => {
                    l.current.unmount();
                }
            ),
            [],
        ),
        (c = r.useRef(null)),
        (0, h.Ay)(() => {
            let e = (0, F.qv)(),
                t = E.A.getVoiceChannelId(),
                n = A.A.getChannel(t),
                i = null != n ? v.A.getGuild(n.guild_id) : null,
                r = null != y.A.getCurrentUserActiveStream(),
                l = null != t,
                a = (0, m.A)(b.A) && !r && null != e,
                s = l && null != i && null != t,
                o = U.A.getTargetPID();
            if (M.default.hasChangedRenderMode(o)) return;
            let u = L.A.isNotificationDisabled(K.KS.WelcomeNudge),
                h = L.A.isNotificationDisabled(K.KS.GoLiveNudge),
                p = L.A.isNotificationDisabled(K.KS.ActivityInvite),
                f = [];
            !u &&
                (f.push({
                    type: K.Jr.WELCOME,
                }),
                !h &&
                    (a && s
                        ? f.push({
                              type: K.Jr.GO_LIVE_VOICE,
                              game: e,
                              voiceChannelId: t,
                              voiceGuild: i,
                          })
                        : a &&
                          f.push({
                              type: K.Jr.GO_LIVE_NON_VOICE,
                              game: e,
                          })),
                p ||
                    f.push({
                        type: K.Jr.CONTENT_INVENTORY,
                        entries: [],
                    })),
                null != c.current && clearTimeout(c.current),
                (c.current = setTimeout(() => {
                    d.A.overlayMounted(...f);
                }, 1e3));
        }),
        (0, h.l0)(() => {
            null != c.current && (clearTimeout(c.current), (c.current = null));
        }),
        r.useEffect(() => {
            if (
                (S._.dispatch(B.jej.OVERLAY_V3_SHOW_WIDGETS, {
                    show: !0,
                }),
                P)
            )
                return (
                    (0, o.closeAllModalsInContext)(u.KX8),
                    I.addEventListener("contextmenu", Q, !1),
                    () => {
                        I.removeEventListener("contextmenu", Q, !1);
                    }
                );
            I.removeEventListener("contextmenu", Q, !1);
        }, [P, I]),
        (0, i.jsx)(f.f5, {
            value: q,
            children:
                z || V
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: Z.Lw,
                          children: [
                              !g && J,
                              (0, i.jsx)($, {
                                  locked: P,
                                  keybind: W,
                                  onClick: et,
                              }),
                              (0, i.jsx)(R.A, {
                                  className: a()({
                                      [Z.ZK]: P,
                                      [Z.al]: !P,
                                  }),
                              }),
                              (0, i.jsx)(H.A, {}),
                              !g &&
                                  X &&
                                  (0, i.jsx)(ee, {
                                      locked: P,
                                      focused: k,
                                  }),
                              (0, i.jsx)(w.A, {}),
                              (0, i.jsx)(D.A, {
                                  locked: P,
                              }),
                              (0, i.jsx)(u.N9M, {
                                  appContext: B.BRT.OVERLAY,
                              }),
                              (0, i.jsx)(ei, {}),
                          ],
                      }),
        })
    );
}
