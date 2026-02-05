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
    v = n(203982),
    y = n(723702),
    N = n(350535),
    O = n(365971),
    b = n(41984),
    j = n(589051),
    w = n(223251),
    L = n(935975),
    R = n(555153),
    D = n(155052),
    M = n(302614),
    k = n(833551),
    z = n(592598),
    V = n(395011),
    U = n(222506),
    P = n(127242),
    G = n(237984),
    H = n(243612),
    Y = n(575530),
    F = n(545807),
    W = n(672396),
    K = n(644434),
    Z = n(652215),
    B = n(661272);
let X = !y.isPlatformEmbedded && !1,
    J = X
        ? (0, i.jsx)(g.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: B.pN,
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
            return (t) => (0, i.jsx)(e, { ...t, layoutId: K.G, version: 4 });
        },
        { context: Z.BRT.OVERLAY },
    );
}
let $ = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e,
            a = (0, j.X4)(A.A.OVERLAY);
        return (0, i.jsx)(d.DUT, {
            className: s()(B.LK, { [B.Zo]: !l, [B.vZ]: l }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === Z.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: q,
            children: l
                ? null
                : (0, i.jsxs)(M.A, {
                      className: B.BE,
                      children: [
                          a
                              ? (0, i.jsx)(L.A, {
                                    onClick: () => (0, G.b)(A.A.OVERLAY, Z.BRT.OVERLAY),
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
                  className: B.BE,
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
    let t = U.A.isInputLocked(V.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? v._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && v._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function ei() {
    return (0, r.bG)([P.A], () => P.A.hasRenderDebugMode(b.x7.WindowContainer))
        ? (0, i.jsx)("div", { className: B.N1 })
        : null;
}
function el(e) {
    var t, n;
    let a,
        u,
        { isEmbeddedActivity: g } = e,
        y = (0, F.A)(),
        b = (0, r.bG)([V.A], () => V.A.getTargetPID()),
        {
            locked: L,
            focused: M,
            incompatibleApp: P,
            hasZeroSizeDimension: G,
            keybind: K,
        } = (0, r.cf)([V.A, T.default, C.A, I.Ay, U.A], () => {
            let e = C.A.windowSize((0, O.Q2)(y)),
                t = I.Ay.getOverlayKeybind();
            return {
                locked: U.A.isInputLocked(b),
                focused: V.A.isFocused(b),
                incompatibleApp: T.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, N.dI)(t.shortcut, !0) : "???",
            };
        }, [y, b]),
        { analyticsLocations: q } = (0, m.Ay)(A.A.OVERLAY);
    return (
        (0, h.Ay)(() => {
            (0, j.E)();
        }),
        (t = () => {
            c.A.overlayReady(V.A.getTargetPID()), y.addEventListener("keydown", en), y.addEventListener("keyup", en);
        }),
        (n = () => {
            y.removeEventListener("keydown", en), y.removeEventListener("keyup", en);
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
                s = (0, p.A)(x.A) && !l && null != e,
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
            if ((v._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), L))
                return (
                    (0, o.closeAllModalsInContext)(d.KX8),
                    y.addEventListener("contextmenu", Q, !1),
                    () => {
                        y.removeEventListener("contextmenu", Q, !1);
                    }
                );
            y.removeEventListener("contextmenu", Q, !1);
        }, [L, y]),
        (0, i.jsx)(m.f5, {
            value: q,
            children:
                G || P
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: B.Lw,
                          children: [
                              !g && J,
                              (0, i.jsx)($, { locked: L, keybind: K, onClick: et }),
                              (0, i.jsx)(D.A, { className: s()({ [B.ZK]: L, [B.al]: !L }) }),
                              (0, i.jsx)(Y.A, {}),
                              !g && X && (0, i.jsx)(ee, { locked: L, focused: M }),
                              (0, i.jsx)(w.A, {}),
                              (0, i.jsx)(R.A, { locked: L }),
                              (0, i.jsx)(d.N9M, { appContext: Z.BRT.OVERLAY }),
                              (0, i.jsx)(ei, {}),
                          ],
                      }),
        })
    );
}
