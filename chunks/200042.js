"use strict";
n.d(t, { A: () => ec }), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(192308),
    d = n(939249),
    u = n(138134),
    c = n(972213),
    A = n(328162),
    h = n(231723),
    g = n(988393),
    f = n(442433),
    m = n(684013),
    v = n(964486),
    y = n(793574),
    p = n(688810),
    _ = n(607470),
    E = n(880144),
    w = n(616356),
    x = n(734057),
    b = n(71393),
    C = n(430452),
    I = n(309010),
    O = n(532624),
    L = n(256415),
    D = n(531685),
    N = n(203982),
    k = n(723702),
    j = n(350535),
    S = n(365971),
    P = n(41984),
    R = n(589051),
    T = n(223251),
    G = n(935975),
    M = n(555153),
    U = n(155052),
    V = n(452075),
    W = n(302614),
    Y = n(833551),
    K = n(592598),
    B = n(395011),
    F = n(222506),
    z = n(127242),
    H = n(237984),
    X = n(243612),
    Z = n(575530),
    J = n(545807),
    Q = n(672396),
    q = n(644434),
    $ = n(652215),
    ee = n(649831);
let et = !k.isPlatformEmbedded && !1,
    en = et
        ? (0, r.jsx)(_.A, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: ee.pN,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function er(e) {
    e.preventDefault();
}
function ei(e) {
    (0, f.L3)(
        e,
        async () => {
            let { default: e } = await n.e("86437").then(n.bind(n, 171300));
            return (t) => (0, r.jsx)(e, { ...t, layoutId: q.G, version: 4 });
        },
        { context: $.BRT.OVERLAY },
    );
}
let el = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(d.D, {
            className: a()(ee.LK, { [ee.Zo]: !i, [ee.vZ]: i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: r, button: i } = e;
                i === $.hE4.PRIMARY && t === r && n();
            },
            onContextMenu: ei,
            children: i
                ? null
                : (0, r.jsxs)(W.A, {
                      className: ee.BE,
                      children: [
                          (0, r.jsx)(G.A, { onClick: () => (0, H.b)(y.A.OVERLAY, $.BRT.OVERLAY), IconComponent: u.i }),
                          (0, r.jsx)(G.A, { keybind: t, onClick: n, IconComponent: c.d }),
                      ],
                  }),
        });
    }),
    ea = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(W.A, {
                  className: ee.BE,
                  children: (0, r.jsx)(G.A, {
                      onClick: () => m.A.setInputLocked(!1, B.A.getTargetPID()),
                      IconComponent: A.w,
                  }),
              })
            : null;
    });
function es() {
    m.A.setInputLocked(!0, B.A.getTargetPID());
}
function eo(e) {
    let t = F.A.isInputLocked(B.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? N._.dispatch($.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && N._.dispatch($.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && m.A.setInputLocked(!0, B.A.getTargetPID());
        })(e, t),
        et &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = O.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, j.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), m.A.setInputLocked(!t, B.A.getTargetPID()));
}
let ed = i.memo(function () {
        return (0, s.bG)([z.A], () => z.A.hasRenderDebugMode(P.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: ee.N1 })
            : null;
    }),
    eu = i.memo(function () {
        let e = (0, J.A)(),
            t = (0, s.bG)([B.A], () => B.A.getTargetPID()),
            n = (0, s.bG)([F.A], () => F.A.isInputLocked(t), [t]),
            l = (0, s.bG)([B.A], () => B.A.isFocused(t), [t]),
            d = (0, s.bG)(
                [O.Ay],
                () => (null != O.Ay.getOverlayKeybind() ? (0, j.dI)(O.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((N._.dispatch($.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, o.closeAllModalsInContext)(h.KX),
                        e.addEventListener("contextmenu", er, !1),
                        () => {
                            e.removeEventListener("contextmenu", er, !1);
                        }
                    );
                e.removeEventListener("contextmenu", er, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(el, { locked: n, keybind: d, onClick: es }),
                    (0, r.jsx)(U.A, { className: a()({ [ee.ZK]: n, [ee.al]: !n }) }),
                    et && (0, r.jsx)(ea, { locked: n, focused: l }),
                    (0, r.jsx)(M.A, { locked: n }),
                ],
            })
        );
    });
function ec() {
    var e, t;
    let n,
        l,
        a,
        o = (0, J.A)(),
        d = (0, s.bG)([L.default], () => L.default.incompatibleApp),
        u = (0, s.bG)([D.A], () => {
            let e = (0, S.Q2)(o),
                t = D.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [o]),
        { analyticsLocations: c } = (0, p.Ay)(y.A.OVERLAY);
    return (
        (0, V.e)(),
        (0, v.Ay)(() => {
            (0, R.E)();
        }),
        (n = (0, J.A)()),
        (e = () => {
            m.A.overlayReady(B.A.getTargetPID()),
                n.addEventListener("keydown", eo, !0),
                n.addEventListener("keyup", eo);
        }),
        (t = () => {
            n.removeEventListener("keydown", eo, !0), n.removeEventListener("keyup", eo);
        }),
        (l = i.useRef({ mount: e, unmount: t })),
        i.useEffect(() => {
            l.current = { mount: e, unmount: t };
        }),
        i.useEffect(
            () => (
                l.current.mount(),
                () => {
                    l.current.unmount();
                }
            ),
            [],
        ),
        ((a = i.useRef(null)),
        (0, v.Ay)(() => {
            let e = (0, X.qv)(),
                t = I.A.getVoiceChannelId(),
                n = x.A.getChannel(t),
                r = null != n ? b.A.getGuild(n.guild_id) : null,
                i = null != w.A.getCurrentUserActiveStream(),
                l = null != t,
                s = (0, E.A)(C.Ay) && !i && null != e,
                o = l && null != r && null != t,
                d = B.A.getTargetPID();
            if (Y.default.hasChangedRenderMode(d)) return;
            let u = K.A.isNotificationDisabled(Q.KS.WelcomeNudge),
                c = K.A.isNotificationDisabled(Q.KS.GoLiveNudge),
                A = K.A.isNotificationDisabled(Q.KS.ActivityInvite),
                h = [];
            !u &&
                (h.push({ type: Q.Jr.WELCOME }),
                !c &&
                    (s && o
                        ? h.push({ type: Q.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : s && h.push({ type: Q.Jr.GO_LIVE_NON_VOICE, game: e })),
                A || h.push({ type: Q.Jr.CONTENT_INVENTORY, entries: [] })),
                null != a.current && clearTimeout(a.current),
                (a.current = setTimeout(() => {
                    m.A.overlayMounted(...h);
                }, 1e3));
        }),
        (0, v.l0)(() => {
            null != a.current && (clearTimeout(a.current), (a.current = null));
        }),
        u || d)
            ? null
            : (0, r.jsx)(p.f5, {
                  value: c,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: ee.Lw,
                      children: [
                          en,
                          (0, r.jsx)(eu, {}),
                          (0, r.jsx)(Z.A, {}),
                          (0, r.jsx)(T.A, {}),
                          (0, r.jsx)(g.N, { appContext: $.BRT.OVERLAY }),
                          (0, r.jsx)(ed, {}),
                      ],
                  }),
              })
    );
}
