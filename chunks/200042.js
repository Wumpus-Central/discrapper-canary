n.d(t, { A: () => el }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(192308),
    d = n(397927),
    c = n(442433),
    u = n(684013),
    _ = n(964486),
    h = n(793574),
    m = n(688810),
    f = n(607470),
    g = n(880144),
    p = n(616356),
    A = n(734057),
    E = n(71393),
    I = n(430452),
    x = n(309010),
    b = n(532624),
    v = n(256415),
    S = n(531685),
    C = n(203982),
    T = n(723702),
    y = n(350535),
    N = n(365971),
    w = n(41984),
    L = n(589051),
    O = n(223251),
    j = n(935975),
    P = n(555153),
    R = n(155052),
    D = n(452075),
    M = n(302614),
    k = n(833551),
    G = n(592598),
    z = n(395011),
    U = n(222506),
    V = n(127242),
    F = n(237984),
    W = n(243612),
    H = n(575530),
    B = n(545807),
    Y = n(672396),
    X = n(644434),
    Z = n(652215),
    K = n(650519);
let J = !T.isPlatformEmbedded && !1,
    Q = J
        ? (0, i.jsx)(f.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: K.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function q(e) {
    e.preventDefault();
}
function $(e) {
    (0, c.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, i.jsx)(e, { ...t, layoutId: X.G, version: 4 });
        },
        { context: Z.BRT.OVERLAY },
    );
}
let ee = a.memo(function (e) {
        let { keybind: t, onClick: n, locked: a } = e;
        return (0, i.jsx)(d.DUT, {
            className: l()(K.LK, { [K.Zo]: !a, [K.vZ]: a }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: a } = e;
                a === Z.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: a
                ? null
                : (0, i.jsxs)(M.A, {
                      className: K.BE,
                      children: [
                          (0, i.jsx)(j.A, {
                              onClick: () => (0, F.b)(h.A.OVERLAY, Z.BRT.OVERLAY),
                              IconComponent: d.iFK,
                          }),
                          (0, i.jsx)(j.A, { keybind: t, onClick: n, IconComponent: d.d$L }),
                      ],
                  }),
        });
    }),
    et = a.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(M.A, {
                  className: K.BE,
                  children: (0, i.jsx)(j.A, {
                      onClick: () => u.A.setInputLocked(!1, z.A.getTargetPID()),
                      IconComponent: d.wUM,
                  }),
              })
            : null;
    });
function en() {
    u.A.setInputLocked(!0, z.A.getTargetPID());
}
function ei(e) {
    let t = U.A.isInputLocked(z.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && u.A.setInputLocked(!0, z.A.getTargetPID());
        })(e, t),
        J &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = b.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, y.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), u.A.setInputLocked(!t, z.A.getTargetPID()));
}
let ea = a.memo(function () {
        return (0, s.bG)([V.A], () => V.A.hasRenderDebugMode(w.x7.WindowContainer))
            ? (0, i.jsx)("div", { className: K.N1 })
            : null;
    }),
    er = a.memo(function () {
        let e = (0, B.A)(),
            t = (0, s.bG)([z.A], () => z.A.getTargetPID()),
            n = (0, s.bG)([U.A], () => U.A.isInputLocked(t), [t]),
            r = (0, s.bG)([z.A], () => z.A.isFocused(t), [t]),
            c = (0, s.bG)(
                [b.Ay],
                () => (null != b.Ay.getOverlayKeybind() ? (0, y.dI)(b.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            a.useEffect(() => {
                if ((C._.dispatch(Z.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, o.closeAllModalsInContext)(d.KX8),
                        e.addEventListener("contextmenu", q, !1),
                        () => {
                            e.removeEventListener("contextmenu", q, !1);
                        }
                    );
                e.removeEventListener("contextmenu", q, !1);
            }, [n, e]),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ee, { locked: n, keybind: c, onClick: en }),
                    (0, i.jsx)(R.A, { className: l()({ [K.ZK]: n, [K.al]: !n }) }),
                    J && (0, i.jsx)(et, { locked: n, focused: r }),
                    (0, i.jsx)(P.A, { locked: n }),
                ],
            })
        );
    });
function el() {
    var e, t;
    let n,
        r,
        l,
        o = (0, B.A)(),
        c = (0, s.bG)([v.default], () => v.default.incompatibleApp),
        f = (0, s.bG)([S.A], () => {
            let e = (0, N.Q2)(o),
                t = S.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [o]),
        { analyticsLocations: b } = (0, m.Ay)(h.A.OVERLAY);
    return (
        (0, D.e)(),
        (0, _.Ay)(() => {
            (0, L.E)();
        }),
        (n = (0, B.A)()),
        (e = () => {
            u.A.overlayReady(z.A.getTargetPID()),
                n.addEventListener("keydown", ei, !0),
                n.addEventListener("keyup", ei);
        }),
        (t = () => {
            n.removeEventListener("keydown", ei, !0), n.removeEventListener("keyup", ei);
        }),
        (r = a.useRef({ mount: e, unmount: t })),
        a.useEffect(() => {
            r.current = { mount: e, unmount: t };
        }),
        a.useEffect(
            () => (
                r.current.mount(),
                () => {
                    r.current.unmount();
                }
            ),
            [],
        ),
        ((l = a.useRef(null)),
        (0, _.Ay)(() => {
            let e = (0, W.qv)(),
                t = x.A.getVoiceChannelId(),
                n = A.A.getChannel(t),
                i = null != n ? E.A.getGuild(n.guild_id) : null,
                a = null != p.A.getCurrentUserActiveStream(),
                r = null != t,
                s = (0, g.A)(I.Ay) && !a && null != e,
                o = r && null != i && null != t,
                d = z.A.getTargetPID();
            if (k.default.hasChangedRenderMode(d)) return;
            let c = G.A.isNotificationDisabled(Y.KS.WelcomeNudge),
                _ = G.A.isNotificationDisabled(Y.KS.GoLiveNudge),
                h = G.A.isNotificationDisabled(Y.KS.ActivityInvite),
                m = [];
            !c &&
                (m.push({ type: Y.Jr.WELCOME }),
                !_ &&
                    (s && o
                        ? m.push({ type: Y.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: i })
                        : s && m.push({ type: Y.Jr.GO_LIVE_NON_VOICE, game: e })),
                h || m.push({ type: Y.Jr.CONTENT_INVENTORY, entries: [] })),
                null != l.current && clearTimeout(l.current),
                (l.current = setTimeout(() => {
                    u.A.overlayMounted(...m);
                }, 1e3));
        }),
        (0, _.l0)(() => {
            null != l.current && (clearTimeout(l.current), (l.current = null));
        }),
        f || c)
            ? null
            : (0, i.jsx)(m.f5, {
                  value: b,
                  children: (0, i.jsxs)("div", {
                      id: "overlay-container",
                      className: K.Lw,
                      children: [
                          Q,
                          (0, i.jsx)(er, {}),
                          (0, i.jsx)(H.A, {}),
                          (0, i.jsx)(O.A, {}),
                          (0, i.jsx)(d.N9M, { appContext: Z.BRT.OVERLAY }),
                          (0, i.jsx)(ea, {}),
                      ],
                  }),
              })
    );
}
