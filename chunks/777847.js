var r = n(582128),
    l = n(196765),
    a = n(775602),
    i = n(976860),
    u = n(751841),
    o = n(381991),
    s = n(313537),
    c = n(165963);
let d = { id: "move_walkthrough", dismissal: "forever" },
    h = (0, l.v)(() => ({ walkthrough: null })),
    p = null;
function f(e) {
    let t =
        "wand" === e.kind
            ? (p?.current ?? null)
            : document.querySelector(`[data-list-item-id="guildsnav___${e.guildId}"]`);
    if (null == t || !t.isConnected) return null;
    let n = t.getBoundingClientRect(),
        r = t.closest("nav")?.getBoundingClientRect();
    return n.height > 0 && n.top >= (r?.top ?? 0) && n.bottom <= (r?.bottom ?? window.innerHeight) ? t : null;
}
n.d(
    t,
    {},
    {
        Gl: function (e, t, n) {
            var r;
            if (null == t) return !1;
            let l = "server" === e.target.kind ? e.target.guildId : null;
            return (0, s.fL)(t) === l && (!e.blocking || ((r = e.projectId), (0, u.Xj)(n) === r));
        },
        H2: function (e) {
            r.useEffect(
                () => (
                    (p = e),
                    () => {
                        p = null;
                    }
                ),
                [e],
            );
        },
        US: f,
        bP: function () {
            return h((e) => e.walkthrough);
        },
        n0: function (e, t, n) {
            var r;
            if ((0, c.VS)(d, "") || null == f(n)) return;
            let l = ((r = (0, i.JK)().location.pathname), (0, u.Xj)(r) === e);
            h.setState({
                walkthrough: { projectId: e, appName: t, target: n, blocking: l, landed: !l || a.Ay.useReducedMotion },
            });
        },
        rK: function (e) {
            let { open: t, dontShowAgain: n = !1 } = e,
                { walkthrough: r } = h.getState();
            null != r && (n && (0, c.qv)(d, ""), h.setState({ walkthrough: null }), t && (0, o.A)(r.projectId));
        },
        vF: function () {
            let { walkthrough: e } = h.getState();
            null == e || e.landed || h.setState({ walkthrough: { ...e, landed: !0 } });
        },
    },
);
