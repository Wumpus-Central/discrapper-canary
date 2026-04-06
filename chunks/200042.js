n.d(t, { A: () => er }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(192308),
    d = n(397927),
    u = n(442433),
    c = n(684013),
    h = n(964486),
    g = n(793574),
    m = n(688810),
    p = n(607470),
    A = n(880144),
    x = n(616356),
    f = n(734057),
    E = n(71393),
    S = n(430452),
    I = n(309010),
    T = n(532624),
    v = n(256415),
    C = n(531685),
    j = n(203982),
    y = n(723702),
    w = n(350535),
    _ = n(365971),
    O = n(41984),
    N = n(589051),
    b = n(223251),
    R = n(935975),
    M = n(555153),
    L = n(155052),
    z = n(452075),
    D = n(302614),
    k = n(833551),
    P = n(592598),
    G = n(395011),
    V = n(222506),
    U = n(127242),
    H = n(237984),
    Y = n(243612),
    Z = n(575530),
    W = n(545807),
    X = n(672396),
    F = n(644434),
    K = n(652215),
    B = n(650519);
let Q = !y.isPlatformEmbedded && !1,
    q = Q
        ? (0, i.jsx)(p.A, {
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
function $(e) {
    (0, u.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, i.jsx)(e, { ...t, layoutId: F.G, version: 4 });
        },
        { context: K.BRT.OVERLAY },
    );
}
let ee = s.memo(function (e) {
        let { keybind: t, onClick: n, locked: s } = e;
        return (0, i.jsx)(d.DUT, {
            className: r()(B.LK, { [B.Zo]: !s, [B.vZ]: s }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === K.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: s
                ? null
                : (0, i.jsxs)(D.A, {
                      className: B.BE,
                      children: [
                          (0, i.jsx)(R.A, {
                              onClick: () => (0, H.b)(g.A.OVERLAY, K.BRT.OVERLAY),
                              IconComponent: d.iFK,
                          }),
                          (0, i.jsx)(R.A, { keybind: t, onClick: n, IconComponent: d.d$L }),
                      ],
                  }),
        });
    }),
    et = s.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(D.A, {
                  className: B.BE,
                  children: (0, i.jsx)(R.A, {
                      onClick: () => c.A.setInputLocked(!1, G.A.getTargetPID()),
                      IconComponent: d.wUM,
                  }),
              })
            : null;
    });
function en() {
    c.A.setInputLocked(!0, G.A.getTargetPID());
}
function ei(e) {
    let t = V.A.isInputLocked(G.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? j._.dispatch(K.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && j._.dispatch(K.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && c.A.setInputLocked(!0, G.A.getTargetPID());
        })(e, t),
        Q &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = T.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, w.pi)(t.shortcut).some(
                        (t) =>
                            0 !== t.keyCode &&
                            t.keyCode === e.keyCode &&
                            t.shiftKey === e.shiftKey &&
                            t.metaKey === e.metaKey &&
                            t.altKey === e.altKey &&
                            t.ctrlKey === e.ctrlKey,
                    )
                );
            })(e) &&
            (e.preventDefault(), e.stopPropagation(), c.A.setInputLocked(!t, G.A.getTargetPID()));
}
let es = s.memo(function () {
        return (0, a.bG)([U.A], () => U.A.hasRenderDebugMode(O.x7.WindowContainer))
            ? (0, i.jsx)("div", { className: B.N1 })
            : null;
    }),
    el = s.memo(function () {
        let e = (0, W.A)(),
            t = (0, a.bG)([G.A], () => G.A.getTargetPID()),
            n = (0, a.bG)([V.A], () => V.A.isInputLocked(t), [t]),
            l = (0, a.bG)([G.A], () => G.A.isFocused(t), [t]),
            u = (0, a.bG)(
                [T.Ay],
                () => (null != T.Ay.getOverlayKeybind() ? (0, w.dI)(T.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            s.useEffect(() => {
                if ((j._.dispatch(K.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, o.closeAllModalsInContext)(d.KX8),
                        e.addEventListener("contextmenu", J, !1),
                        () => {
                            e.removeEventListener("contextmenu", J, !1);
                        }
                    );
                e.removeEventListener("contextmenu", J, !1);
            }, [n, e]),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ee, { locked: n, keybind: u, onClick: en }),
                    (0, i.jsx)(L.A, { className: r()({ [B.ZK]: n, [B.al]: !n }) }),
                    Q && (0, i.jsx)(et, { locked: n, focused: l }),
                    (0, i.jsx)(M.A, { locked: n }),
                ],
            })
        );
    });
function er(e) {
    var t, n;
    let l,
        r,
        o,
        { isEmbeddedActivity: u } = e,
        p = (0, W.A)(),
        T = (0, a.bG)([v.default], () => v.default.incompatibleApp),
        j = (0, a.bG)([C.A], () => {
            let e = (0, _.Q2)(p),
                t = C.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [p]),
        { analyticsLocations: y } = (0, m.Ay)(g.A.OVERLAY);
    return (
        (0, z.e)(),
        (0, h.Ay)(() => {
            (0, N.E)();
        }),
        (l = (0, W.A)()),
        (t = () => {
            c.A.overlayReady(G.A.getTargetPID()),
                l.addEventListener("keydown", ei, !0),
                l.addEventListener("keyup", ei);
        }),
        (n = () => {
            l.removeEventListener("keydown", ei, !0), l.removeEventListener("keyup", ei);
        }),
        (r = s.useRef({ mount: t, unmount: n })),
        s.useEffect(() => {
            r.current = { mount: t, unmount: n };
        }),
        s.useEffect(
            () => (
                r.current.mount(),
                () => {
                    r.current.unmount();
                }
            ),
            [],
        ),
        ((o = s.useRef(null)),
        (0, h.Ay)(() => {
            let e = (0, Y.qv)(),
                t = I.A.getVoiceChannelId(),
                n = f.A.getChannel(t),
                i = null != n ? E.A.getGuild(n.guild_id) : null,
                s = null != x.A.getCurrentUserActiveStream(),
                l = null != t,
                r = (0, A.A)(S.Ay) && !s && null != e,
                a = l && null != i && null != t,
                d = G.A.getTargetPID();
            if (k.default.hasChangedRenderMode(d)) return;
            let u = P.A.isNotificationDisabled(X.KS.WelcomeNudge),
                h = P.A.isNotificationDisabled(X.KS.GoLiveNudge),
                g = P.A.isNotificationDisabled(X.KS.ActivityInvite),
                m = [];
            !u &&
                (m.push({ type: X.Jr.WELCOME }),
                !h &&
                    (r && a
                        ? m.push({ type: X.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: i })
                        : r && m.push({ type: X.Jr.GO_LIVE_NON_VOICE, game: e })),
                g || m.push({ type: X.Jr.CONTENT_INVENTORY, entries: [] })),
                null != o.current && clearTimeout(o.current),
                (o.current = setTimeout(() => {
                    c.A.overlayMounted(...m);
                }, 1e3));
        }),
        (0, h.l0)(() => {
            null != o.current && (clearTimeout(o.current), (o.current = null));
        }),
        j || T)
            ? null
            : (0, i.jsx)(m.f5, {
                  value: y,
                  children: (0, i.jsxs)("div", {
                      id: "overlay-container",
                      className: B.Lw,
                      children: [
                          !u && q,
                          (0, i.jsx)(el, {}),
                          (0, i.jsx)(Z.A, {}),
                          (0, i.jsx)(b.A, {}),
                          (0, i.jsx)(d.N9M, { appContext: K.BRT.OVERLAY }),
                          (0, i.jsx)(es, {}),
                      ],
                  }),
              })
    );
}
