n.d(t, {
    A: () => A,
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
    f = n(652215),
    h = n(985018);

function A(e) {
    let { party: t, close: n, onSelect: A } = e,
        g = (0, c.A)(t),
        m = (0, p.A)(t),
        b = (0, d.A)(t),
        _ = (0, u.A)(t),
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
            a.default.track(f.HAw.OPEN_POPOUT, {
                type: "Now Playing Card Popout",
                games_detected: e,
            });
        }),
        (0, r.jsxs)(i.W1t, {
            navId: "now-playing-menu",
            onClose: n,
            "aria-label": h.intl.string(h.t.ogxXGq),
            onSelect: A,
            children: [
                g,
                (0, r.jsxs)(i.rXV, {
                    children: [m, b],
                }),
                (0, r.jsx)(i.rXV, {
                    children: _,
                }),
                (0, r.jsx)(i.rXV, {
                    children: E,
                }),
                O,
            ],
        })
    );
}
