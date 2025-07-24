n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(493773),
    a = n(626135),
    o = n(144145),
    s = n(555927),
    c = n(738762),
    u = n(244080),
    d = n(247530),
    p = n(260889),
    h = n(981631),
    f = n(388032);
function g(e) {
    let { party: t, close: n, onSelect: g } = e,
        m = (0, c.Z)(t),
        b = (0, p.Z)(t),
        _ = (0, d.Z)(t),
        O = (0, u.Z)(t),
        E = (0, o.Z)(t),
        y = (0, s.Z)(t);
    return (
        (0, l.ZP)(() => {
            let e = t.currentActivities
                .filter((e) => {
                    var t, n;
                    return (null == (t = e.game) ? void 0 : t.name) != null && (0, a.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type);
                })
                .map((e) => e.game.name);
            a.default.track(h.rMx.OPEN_POPOUT, {
                type: 'Now Playing Card Popout',
                games_detected: e
            });
        }),
        (0, r.jsxs)(i.v2r, {
            navId: 'now-playing-menu',
            onClose: n,
            'aria-label': f.intl.string(f.t.ogxXGh),
            onSelect: g,
            children: [
                m,
                (0, r.jsxs)(i.kSQ, {
                    children: [b, _]
                }),
                (0, r.jsx)(i.kSQ, { children: O }),
                (0, r.jsx)(i.kSQ, { children: E }),
                y
            ]
        })
    );
}
