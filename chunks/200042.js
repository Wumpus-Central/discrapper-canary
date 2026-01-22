n.d(t, { A: () => er }), n(321073), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(192308),
    c = n(397927),
    u = n(442433),
    d = n(684013),
    p = n(964486),
    h = n(793574),
    f = n(688810),
    m = n(607470),
    g = n(880144),
    y = n(616356),
    A = n(734057),
    O = n(71393),
    E = n(430452),
    v = n(309010),
    b = n(532624),
    S = n(256415),
    x = n(531685),
    j = n(203982),
    I = n(723702),
    N = n(350535),
    w = n(365971),
    T = n(41984),
    C = n(589051),
    _ = n(223251),
    P = n(935975),
    D = n(555153),
    R = n(155052),
    L = n(302614),
    k = n(833551),
    M = n(592598),
    V = n(395011),
    U = n(222506),
    z = n(127242),
    G = n(237984),
    H = n(243612),
    Y = n(575530),
    F = n(545807),
    K = n(672396),
    Z = n(644434),
    W = n(652215),
    B = n(661272);
let X = !I.isPlatformEmbedded && !1,
    Q = X
        ? (0, i.jsx)(m.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: B.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function J(e) {
    e.preventDefault();
}
function q(e) {
    (0, u.L3)(e, async () => {
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
                        layoutId: Z.G,
                        version: 3,
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
    });
}
let $ = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e,
            l = (0, C.X4)(h.A.OVERLAY);
        return (0, i.jsx)(c.DUT, {
            className: a()(B.LK, {
                [B.Zo]: !r,
                [B.vZ]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === W.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: q,
            children: r
                ? null
                : (0, i.jsxs)(L.A, {
                      className: B.BE,
                      children: [
                          l
                              ? (0, i.jsx)(P.A, {
                                    onClick: () => (0, G.b)(h.A.OVERLAY, W.BRT.OVERLAY),
                                    IconComponent: c.iFK,
                                })
                              : null,
                          (0, i.jsx)(P.A, {
                              keybind: t,
                              onClick: n,
                              IconComponent: c.d$L,
                          }),
                      ],
                  }),
        });
    }),
    ee = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(L.A, {
                  className: B.BE,
                  children: (0, i.jsx)(P.A, {
                      onClick: () => d.A.setInputLocked(!1, V.A.getTargetPID()),
                      IconComponent: c.wUM,
                  }),
              })
            : null;
    });
function et() {
    d.A.setInputLocked(!0, V.A.getTargetPID());
}
function en(e) {
    let t = U.A.isInputLocked(V.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? j._.dispatch(W.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && j._.dispatch(W.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function ei() {
    return (0, o.bG)([z.A], () => z.A.hasRenderDebugMode(T.x7.WindowContainer))
        ? (0, i.jsx)("div", { className: B.N1 })
        : null;
}
function er(e) {
    var t, n;
    let l,
        u,
        { isEmbeddedActivity: m } = e,
        I = (0, F.A)(),
        T = (0, o.bG)([V.A], () => V.A.getTargetPID()),
        {
            locked: P,
            focused: L,
            incompatibleApp: z,
            hasZeroSizeDimension: G,
            keybind: Z,
        } = (0, o.cf)([V.A, S.default, x.A, b.Ay, U.A], () => {
            let e = x.A.windowSize((0, w.Q2)(I)),
                t = b.Ay.getOverlayKeybind();
            return {
                locked: U.A.isInputLocked(T),
                focused: V.A.isFocused(T),
                incompatibleApp: S.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, N.dI)(t.shortcut, !0) : "???",
            };
        }, [I, T]),
        { analyticsLocations: q } = (0, f.Ay)(h.A.OVERLAY);
    return (
        (0, p.Ay)(() => {
            (0, C.E)();
        }),
        (t = () => {
            d.A.overlayReady(V.A.getTargetPID()), I.addEventListener("keydown", en), I.addEventListener("keyup", en);
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
        (u = r.useRef(null)),
        (0, p.Ay)(() => {
            let e = (0, H.qv)(),
                t = v.A.getVoiceChannelId(),
                n = A.A.getChannel(t),
                i = null != n ? O.A.getGuild(n.guild_id) : null,
                r = null != y.A.getCurrentUserActiveStream(),
                l = null != t,
                a = (0, g.A)(E.A) && !r && null != e,
                o = l && null != i && null != t,
                s = V.A.getTargetPID();
            if (k.default.hasChangedRenderMode(s)) return;
            let c = M.A.isNotificationDisabled(K.KS.WelcomeNudge),
                p = M.A.isNotificationDisabled(K.KS.GoLiveNudge),
                h = M.A.isNotificationDisabled(K.KS.ActivityInvite),
                f = [];
            !c &&
                (f.push({ type: K.Jr.WELCOME }),
                !p &&
                    (a && o
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
                h ||
                    f.push({
                        type: K.Jr.CONTENT_INVENTORY,
                        entries: [],
                    })),
                null != u.current && clearTimeout(u.current),
                (u.current = setTimeout(() => {
                    d.A.overlayMounted(...f);
                }, 1000));
        }),
        (0, p.l0)(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }),
        r.useEffect(() => {
            if ((j._.dispatch(W.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), P))
                return (
                    (0, s.closeAllModalsInContext)(c.KX8),
                    I.addEventListener("contextmenu", J, !1),
                    () => {
                        I.removeEventListener("contextmenu", J, !1);
                    }
                );
            I.removeEventListener("contextmenu", J, !1);
        }, [P, I]),
        (0, i.jsx)(f.f5, {
            value: q,
            children:
                G || z
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: B.Lw,
                          children: [
                              !m && Q,
                              (0, i.jsx)($, {
                                  locked: P,
                                  keybind: Z,
                                  onClick: et,
                              }),
                              (0, i.jsx)(R.A, {
                                  className: a()({
                                      [B.ZK]: P,
                                      [B.al]: !P,
                                  }),
                              }),
                              (0, i.jsx)(Y.A, {}),
                              !m &&
                                  X &&
                                  (0, i.jsx)(ee, {
                                      locked: P,
                                      focused: L,
                                  }),
                              (0, i.jsx)(_.A, {}),
                              (0, i.jsx)(D.A, { locked: P }),
                              (0, i.jsx)(c.N9M, { appContext: W.BRT.OVERLAY }),
                              (0, i.jsx)(ei, {}),
                          ],
                      }),
        })
    );
}
