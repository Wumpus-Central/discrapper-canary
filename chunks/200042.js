n.d(t, { A: () => ea }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(192308),
    d = n(397927),
    u = n(442433),
    c = n(684013),
    h = n(964486),
    A = n(793574),
    m = n(688810),
    p = n(607470),
    g = n(880144),
    f = n(616356),
    _ = n(734057),
    E = n(71393),
    x = n(430452),
    S = n(309010),
    I = n(532624),
    T = n(256415),
    y = n(531685),
    C = n(203982),
    v = n(723702),
    N = n(350535),
    O = n(365971),
    b = n(41984),
    j = n(589051),
    w = n(223251),
    L = n(935975),
    R = n(555153),
    D = n(155052),
    M = n(452075),
    k = n(302614),
    z = n(833551),
    V = n(592598),
    P = n(395011),
    U = n(222506),
    G = n(127242),
    H = n(237984),
    Y = n(243612),
    F = n(575530),
    K = n(545807),
    W = n(672396),
    Z = n(644434),
    X = n(652215),
    B = n(661272);
let J = !v.isPlatformEmbedded && !1,
    Q = J
        ? (0, i.jsx)(p.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: B.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function q(e) {
    e.preventDefault();
}
function $(e) {
    (0, u.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, i.jsx)(e, { ...t, layoutId: Z.G, version: 4 });
        },
        { context: X.BRT.OVERLAY },
    );
}
let ee = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e,
            a = (0, j.X4)(A.A.OVERLAY);
        return (0, i.jsx)(d.DUT, {
            className: s()(B.LK, { [B.Zo]: !l, [B.vZ]: l }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === X.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: l
                ? null
                : (0, i.jsxs)(k.A, {
                      className: B.BE,
                      children: [
                          a
                              ? (0, i.jsx)(L.A, {
                                    onClick: () => (0, H.b)(A.A.OVERLAY, X.BRT.OVERLAY),
                                    IconComponent: d.iFK,
                                })
                              : null,
                          (0, i.jsx)(L.A, { keybind: t, onClick: n, IconComponent: d.d$L }),
                      ],
                  }),
        });
    }),
    et = l.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(k.A, {
                  className: B.BE,
                  children: (0, i.jsx)(L.A, {
                      onClick: () => c.A.setInputLocked(!1, P.A.getTargetPID()),
                      IconComponent: d.wUM,
                  }),
              })
            : null;
    });
function en() {
    c.A.setInputLocked(!0, P.A.getTargetPID());
}
function ei(e) {
    let t = U.A.isInputLocked(P.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function el() {
    return (0, r.bG)([G.A], () => G.A.hasRenderDebugMode(b.x7.WindowContainer))
        ? (0, i.jsx)("div", { className: B.N1 })
        : null;
}
function ea(e) {
    var t, n;
    let a,
        u,
        { isEmbeddedActivity: p } = e,
        v = (0, K.A)(),
        b = (0, r.bG)([P.A], () => P.A.getTargetPID()),
        {
            locked: L,
            focused: k,
            incompatibleApp: G,
            hasZeroSizeDimension: H,
            keybind: Z,
        } = (0, r.cf)([P.A, T.default, y.A, I.Ay, U.A], () => {
            let e = y.A.windowSize((0, O.Q2)(v)),
                t = I.Ay.getOverlayKeybind();
            return {
                locked: U.A.isInputLocked(b),
                focused: P.A.isFocused(b),
                incompatibleApp: T.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, N.dI)(t.shortcut, !0) : "???",
            };
        }, [v, b]),
        { analyticsLocations: $ } = (0, m.Ay)(A.A.OVERLAY);
    return (
        (0, h.Ay)(() => {
            (0, j.E)();
        }),
        (0, M.e)(),
        (t = () => {
            c.A.overlayReady(P.A.getTargetPID()), v.addEventListener("keydown", ei), v.addEventListener("keyup", ei);
        }),
        (n = () => {
            v.removeEventListener("keydown", ei), v.removeEventListener("keyup", ei);
        }),
        (a = l.useRef({ mount: t, unmount: n })),
        l.useEffect(() => {
            a.current = { mount: t, unmount: n };
        }),
        l.useEffect(
            () => (
                a.current.mount(),
                () => {
                    a.current.unmount();
                }
            ),
            [],
        ),
        (u = l.useRef(null)),
        (0, h.Ay)(() => {
            let e = (0, Y.qv)(),
                t = S.A.getVoiceChannelId(),
                n = _.A.getChannel(t),
                i = null != n ? E.A.getGuild(n.guild_id) : null,
                l = null != f.A.getCurrentUserActiveStream(),
                a = null != t,
                s = (0, g.A)(x.Ay) && !l && null != e,
                r = a && null != i && null != t,
                o = P.A.getTargetPID();
            if (z.default.hasChangedRenderMode(o)) return;
            let d = V.A.isNotificationDisabled(W.KS.WelcomeNudge),
                h = V.A.isNotificationDisabled(W.KS.GoLiveNudge),
                A = V.A.isNotificationDisabled(W.KS.ActivityInvite),
                m = [];
            !d &&
                (m.push({ type: W.Jr.WELCOME }),
                !h &&
                    (s && r
                        ? m.push({ type: W.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: i })
                        : s && m.push({ type: W.Jr.GO_LIVE_NON_VOICE, game: e })),
                A || m.push({ type: W.Jr.CONTENT_INVENTORY, entries: [] })),
                null != u.current && clearTimeout(u.current),
                (u.current = setTimeout(() => {
                    c.A.overlayMounted(...m);
                }, 1e3));
        }),
        (0, h.l0)(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }),
        l.useEffect(() => {
            if ((C._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), L))
                return (
                    (0, o.closeAllModalsInContext)(d.KX8),
                    v.addEventListener("contextmenu", q, !1),
                    () => {
                        v.removeEventListener("contextmenu", q, !1);
                    }
                );
            v.removeEventListener("contextmenu", q, !1);
        }, [L, v]),
        (0, i.jsx)(m.f5, {
            value: $,
            children:
                H || G
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: B.Lw,
                          children: [
                              !p && Q,
                              (0, i.jsx)(ee, { locked: L, keybind: Z, onClick: en }),
                              (0, i.jsx)(D.A, { className: s()({ [B.ZK]: L, [B.al]: !L }) }),
                              (0, i.jsx)(F.A, {}),
                              !p && J && (0, i.jsx)(et, { locked: L, focused: k }),
                              (0, i.jsx)(w.A, {}),
                              (0, i.jsx)(R.A, { locked: L }),
                              (0, i.jsx)(d.N9M, { appContext: X.BRT.OVERLAY }),
                              (0, i.jsx)(el, {}),
                          ],
                      }),
        })
    );
}
