n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(964486),
    a = n(954571),
    s = n(217549),
    o = n(70856),
    c = n(875922),
    u = n(163518),
    d = n(294132),
    p = n(971203),
    h = n(652215),
    g = n(985018);

function f(e) {
    let { party: t, close: n, onSelect: f } = e,
        m = (0, c.A)(t),
        A = (0, p.A)(t),
        _ = (0, d.A)(t),
        b = (0, u.A)(t),
        E = (0, s.A)(t),
        O = (0, o.A)(t);
    return (
        (0, l.Ay)(() => {
            let e = t.currentActivities
                .filter((e) => {
                    var t, n;
                    return (
                        (null == (t = e.game) ? void 0 : t.name) != null &&
                        (0, a.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type)
                    );
                })
                .map((e) => e.game.name);
            a.default.track(h.HAw.OPEN_POPOUT, {
                type: "Now Playing Card Popout",
                games_detected: e,
            });
        }),
        (0, r.jsxs)(i.W1t, {
            "data-menu-migrated": !0,
            navId: "now-playing-menu",
            onClose: n,
            "aria-label": g.intl.string(g.t.ogxXGq),
            onSelect: f,
            children: [
                m,
                (0, r.jsxs)(i.rXV, {
                    children: [A, _],
                }),
                (0, r.jsx)(i.rXV, {
                    children: b,
                }),
                (0, r.jsx)(i.rXV, {
                    children: E,
                }),
                O,
            ],
        })
    );
}
