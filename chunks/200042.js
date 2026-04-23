n.d(t, { A: () => eu }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(311907),
    d = n(192308),
    s = n(939249),
    c = n(138134),
    u = n(972213),
    _ = n(328162),
    A = n(231723),
    h = n(988393),
    f = n(442433),
    g = n(684013),
    m = n(964486),
    b = n(793574),
    p = n(688810),
    v = n(607470),
    y = n(880144),
    w = n(616356),
    C = n(734057),
    x = n(71393),
    E = n(430452),
    I = n(309010),
    L = n(532624),
    O = n(256415),
    k = n(531685),
    D = n(203982),
    N = n(723702),
    T = n(350535),
    S = n(365971),
    P = n(41984),
    j = n(589051),
    R = n(223251),
    G = n(935975),
    M = n(555153),
    U = n(155052),
    V = n(452075),
    W = n(302614),
    B = n(833551),
    K = n(592598),
    Y = n(395011),
    F = n(222506),
    H = n(127242),
    z = n(237984),
    X = n(243612),
    Z = n(575530),
    J = n(545807),
    Q = n(672396),
    q = n(644434),
    $ = n(652215),
    ee = n(649831);
let et = !N.isPlatformEmbedded && !1,
    en = et
        ? (0, r.jsx)(v.A, {
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
let ea = i.memo(function (e) {
        let { keybind: t, onClick: n, locked: i } = e;
        return (0, r.jsx)(s.D, {
            className: l()(ee.LK, { [ee.Zo]: !i, [ee.vZ]: i }),
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
                          (0, r.jsx)(G.A, { onClick: () => (0, z.b)(b.A.OVERLAY, $.BRT.OVERLAY), IconComponent: c.i }),
                          (0, r.jsx)(G.A, { keybind: t, onClick: n, IconComponent: u.d }),
                      ],
                  }),
        });
    }),
    el = i.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, r.jsx)(W.A, {
                  className: ee.BE,
                  children: (0, r.jsx)(G.A, {
                      onClick: () => g.A.setInputLocked(!1, Y.A.getTargetPID()),
                      IconComponent: _.w,
                  }),
              })
            : null;
    });
function eo() {
    g.A.setInputLocked(!0, Y.A.getTargetPID());
}
function ed(e) {
    let t = F.A.isInputLocked(Y.A.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? D._.dispatch($.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && D._.dispatch($.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })),
        (function (e, t) {
            if (t || "keydown" !== e.type.toLowerCase()) return;
            let n = e.key.toLowerCase();
            ("escape" === n || "esc" === n) && g.A.setInputLocked(!0, Y.A.getTargetPID());
        })(e, t),
        et &&
            (function (e) {
                if ("keydown" !== e.type.toLowerCase() || e.repeat) return !1;
                let t = L.Ay.getOverlayKeybind();
                return (
                    !!t.enabled &&
                    0 !== t.shortcut.length &&
                    (0, T.pi)(t.shortcut).some(
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
            (e.preventDefault(), e.stopPropagation(), g.A.setInputLocked(!t, Y.A.getTargetPID()));
}
let es = i.memo(function () {
        return (0, o.bG)([H.A], () => H.A.hasRenderDebugMode(P.x7.WindowContainer))
            ? (0, r.jsx)("div", { className: ee.N1 })
            : null;
    }),
    ec = i.memo(function () {
        let e = (0, J.A)(),
            t = (0, o.bG)([Y.A], () => Y.A.getTargetPID()),
            n = (0, o.bG)([F.A], () => F.A.isInputLocked(t), [t]),
            a = (0, o.bG)([Y.A], () => Y.A.isFocused(t), [t]),
            s = (0, o.bG)(
                [L.Ay],
                () => (null != L.Ay.getOverlayKeybind() ? (0, T.dI)(L.Ay.getOverlayKeybind()?.shortcut, !0) : "???"),
                [],
            );
        return (
            i.useEffect(() => {
                if ((D._.dispatch($.jej.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), n))
                    return (
                        (0, d.closeAllModalsInContext)(A.KX),
                        e.addEventListener("contextmenu", er, !1),
                        () => {
                            e.removeEventListener("contextmenu", er, !1);
                        }
                    );
                e.removeEventListener("contextmenu", er, !1);
            }, [n, e]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ea, { locked: n, keybind: s, onClick: eo }),
                    (0, r.jsx)(U.A, { className: l()({ [ee.ZK]: n, [ee.al]: !n }) }),
                    et && (0, r.jsx)(el, { locked: n, focused: a }),
                    (0, r.jsx)(M.A, { locked: n }),
                ],
            })
        );
    });
function eu() {
    var e, t;
    let n,
        a,
        l,
        d = (0, J.A)(),
        s = (0, o.bG)([O.default], () => O.default.incompatibleApp),
        c = (0, o.bG)([k.A], () => {
            let e = (0, S.Q2)(d),
                t = k.A.windowSize(e);
            return t.height < 360 || t.width < 640;
        }, [d]),
        { analyticsLocations: u } = (0, p.Ay)(b.A.OVERLAY);
    return (
        (0, V.e)(),
        (0, m.Ay)(() => {
            (0, j.E)();
        }),
        (n = (0, J.A)()),
        (e = () => {
            g.A.overlayReady(Y.A.getTargetPID()),
                n.addEventListener("keydown", ed, !0),
                n.addEventListener("keyup", ed);
        }),
        (t = () => {
            n.removeEventListener("keydown", ed, !0), n.removeEventListener("keyup", ed);
        }),
        (a = i.useRef({ mount: e, unmount: t })),
        i.useEffect(() => {
            a.current = { mount: e, unmount: t };
        }),
        i.useEffect(
            () => (
                a.current.mount(),
                () => {
                    a.current.unmount();
                }
            ),
            [],
        ),
        ((l = i.useRef(null)),
        (0, m.Ay)(() => {
            let e = (0, X.qv)(),
                t = I.A.getVoiceChannelId(),
                n = C.A.getChannel(t),
                r = null != n ? x.A.getGuild(n.guild_id) : null,
                i = null != w.A.getCurrentUserActiveStream(),
                a = null != t,
                o = (0, y.A)(E.Ay) && !i && null != e,
                d = a && null != r && null != t,
                s = Y.A.getTargetPID();
            if (B.default.hasChangedRenderMode(s)) return;
            let c = K.A.isNotificationDisabled(Q.KS.WelcomeNudge),
                u = K.A.isNotificationDisabled(Q.KS.GoLiveNudge),
                _ = K.A.isNotificationDisabled(Q.KS.ActivityInvite),
                A = [];
            !c &&
                (A.push({ type: Q.Jr.WELCOME }),
                !u &&
                    (o && d
                        ? A.push({ type: Q.Jr.GO_LIVE_VOICE, game: e, voiceChannelId: t, voiceGuild: r })
                        : o && A.push({ type: Q.Jr.GO_LIVE_NON_VOICE, game: e })),
                _ || A.push({ type: Q.Jr.CONTENT_INVENTORY, entries: [] })),
                null != l.current && clearTimeout(l.current),
                (l.current = setTimeout(() => {
                    g.A.overlayMounted(...A);
                }, 1e3));
        }),
        (0, m.l0)(() => {
            null != l.current && (clearTimeout(l.current), (l.current = null));
        }),
        c || s)
            ? null
            : (0, r.jsx)(p.f5, {
                  value: u,
                  children: (0, r.jsxs)("div", {
                      id: "overlay-container",
                      className: ee.Lw,
                      children: [
                          en,
                          (0, r.jsx)(ec, {}),
                          (0, r.jsx)(Z.A, {}),
                          (0, r.jsx)(R.A, {}),
                          (0, r.jsx)(h.N, { appContext: $.BRT.OVERLAY }),
                          (0, r.jsx)(es, {}),
                      ],
                  }),
              })
    );
}
