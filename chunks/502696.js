n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(861672),
    l = n(477782),
    a = n(964486),
    r = n(954571),
    o = n(217549),
    c = n(70856),
    d = n(875922),
    u = n(163518),
    m = n(294132),
    A = n(971203),
    h = n(652215),
    x = n(985018);
function p(e) {
    let { party: t, close: n, onSelect: p } = e,
        g = (0, d.A)(t),
        N = (0, A.A)(t),
        f = (0, m.A)(t),
        _ = (0, u.A)(t),
        I = (0, o.A)(t),
        v = (0, c.A)(t);
    return (
        (0, a.Ay)(() => {
            let e = t.currentActivities
                .filter((e) => e.game?.name != null && (0, r.isGameApplicationType)(e.game?.type))
                .map((e) => e.game.name);
            r.default.track(h.HAw.OPEN_POPOUT, { type: "Now Playing Card Popout", games_detected: e });
        }),
        (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            navId: "now-playing-menu",
            onClose: n,
            "aria-label": x.intl.string(x.t.ogxXGq),
            onSelect: p,
            children: [
                g,
                (0, i.jsxs)(l.rX, { children: [N, f] }),
                (0, i.jsx)(l.rX, { children: _ }),
                (0, i.jsx)(l.rX, { children: I }),
                v,
            ],
        })
    );
}
