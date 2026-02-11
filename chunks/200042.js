n.d(t, { A: () => el }), n(321073);
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
    g = n(607470),
    p = n(880144),
    f = n(616356),
    _ = n(734057),
    E = n(71393),
    x = n(430452),
    S = n(309010),
    I = n(532624),
    T = n(256415),
    C = n(531685),
    y = n(203982),
    v = n(723702),
    N = n(350535),
    O = n(365971),
    j = n(41984),
    b = n(589051),
    w = n(223251),
    L = n(935975),
    R = n(555153),
    D = n(155052),
    M = n(302614),
    k = n(833551),
    z = n(592598),
    V = n(395011),
    P = n(222506),
    U = n(127242),
    G = n(237984),
    H = n(243612),
    Y = n(575530),
    F = n(545807),
    W = n(672396),
    Z = n(644434),
    X = n(652215),
    K = n(661272);
let B = !v.isPlatformEmbedded && !1,
    J = B
        ? (0, i.jsx)(g.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: K.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function Q(e) {
    e.preventDefault();
}
function q(e) {
    (0, u.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, i.jsx)(e, { ...t, layoutId: Z.G, version: 4 });
        },
        { context: X.BRT.OVERLAY },
    );
}
let $ = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e,
            a = (0, b.X4)(A.A.OVERLAY);
        return (0, i.jsx)(d.DUT, {
            className: s()(K.LK, { [K.Zo]: !l, [K.vZ]: l }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === X.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: q,
            children: l
                ? null
                : (0, i.jsxs)(M.A, {
                      className: K.BE,
                      children: [
                          a
                              ? (0, i.jsx)(L.A, {
                                    onClick: () => (0, G.b)(A.A.OVERLAY, X.BRT.OVERLAY),
                                    IconComponent: d.iFK,
                                })
                              : null,
                          (0, i.jsx)(L.A, { keybind: t, onClick: n, IconComponent: d.d$L }),
                      ],
                  }),
        });
    }),
    ee = l.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(M.A, {
                  className: K.BE,
                  children: (0, i.jsx)(L.A, {
                      onClick: () => c.A.setInputLocked(!1, V.A.getTargetPID()),
                      IconComponent: d.wUM,
                  }),
              })
            : null;
    });
function et() {
    c.A.setInputLocked(!0, V.A.getTargetPID());
}
function en(e) {
    let t = P.A.isInputLocked(V.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? y._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && y._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function ei() {
    return (0, r.bG)([U.A], () => U.A.hasRenderDebugMode(j.x7.WindowContainer))
        ? (0, i.jsx)("div", { className: K.N1 })
        : null;
}
function el(e) {
    var t, n;
    let a,
        u,
        { isEmbeddedActivity: g } = e,
        v = (0, F.A)(),
        j = (0, r.bG)([V.A], () => V.A.getTargetPID()),
        {
            locked: L,
            focused: M,
            incompatibleApp: U,
            hasZeroSizeDimension: G,
            keybind: Z,
        } = (0, r.cf)([V.A, T.default, C.A, I.Ay, P.A], () => {
            let e = C.A.windowSize((0, O.Q2)(v)),
                t = I.Ay.getOverlayKeybind();
            return {
                locked: P.A.isInputLocked(j),
                focused: V.A.isFocused(j),
                incompatibleApp: T.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, N.dI)(t.shortcut, !0) : "???",
            };
        }, [v, j]),
        { analyticsLocations: q } = (0, m.Ay)(A.A.OVERLAY);
    return (
        (0, h.Ay)(() => {
            (0, b.E)();
        }),
        (t = () => {
            c.A.overlayReady(V.A.getTargetPID()), v.addEventListener("keydown", en), v.addEventListener("keyup", en);
        }),
        (n = () => {
            v.removeEventListener("keydown", en), v.removeEventListener("keyup", en);
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
            let e = (0, H.qv)(),
                t = S.A.getVoiceChannelId(),
                n = _.A.getChannel(t),
                i = null != n ? E.A.getGuild(n.guild_id) : null,
                l = null != f.A.getCurrentUserActiveStream(),
                a = null != t,
                s = (0, p.A)(x.Ay) && !l && null != e,
                r = a && null != i && null != t,
                o = V.A.getTargetPID();
            if (k.default.hasChangedRenderMode(o)) return;
            let d = z.A.isNotificationDisabled(W.KS.WelcomeNudge),
                h = z.A.isNotificationDisabled(W.KS.GoLiveNudge),
                A = z.A.isNotificationDisabled(W.KS.ActivityInvite),
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
            if ((y._.dispatch(X.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), L))
                return (
                    (0, o.closeAllModalsInContext)(d.KX8),
                    v.addEventListener("contextmenu", Q, !1),
                    () => {
                        v.removeEventListener("contextmenu", Q, !1);
                    }
                );
            v.removeEventListener("contextmenu", Q, !1);
        }, [L, v]),
        (0, i.jsx)(m.f5, {
            value: q,
            children:
                G || U
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: K.Lw,
                          children: [
                              !g && J,
                              (0, i.jsx)($, { locked: L, keybind: Z, onClick: et }),
                              (0, i.jsx)(D.A, { className: s()({ [K.ZK]: L, [K.al]: !L }) }),
                              (0, i.jsx)(Y.A, {}),
                              !g && B && (0, i.jsx)(ee, { locked: L, focused: M }),
                              (0, i.jsx)(w.A, {}),
                              (0, i.jsx)(R.A, { locked: L }),
                              (0, i.jsx)(d.N9M, { appContext: X.BRT.OVERLAY }),
                              (0, i.jsx)(ei, {}),
                          ],
                      }),
        })
    );
}
