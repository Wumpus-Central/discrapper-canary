n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(493773),
    a = n(626135),
    s = n(144145),
    o = n(555927),
    c = n(738762),
    u = n(244080),
    d = n(247530),
    p = n(260889),
    f = n(981631),
    m = n(388032);
function h(e) {
    let { party: t, close: n, onSelect: h } = e,
        g = (0, c.Z)(t),
        _ = (0, p.Z)(t),
        b = (0, d.Z)(t),
        E = (0, u.Z)(t),
        O = (0, s.Z)(t),
        I = (0, o.Z)(t);
    return (
        (0, l.ZP)(() => {
            let e = t.currentActivities
                .filter((e) => {
                    var t, n;
                    return (
                        (null == (t = e.game) ? void 0 : t.name) != null &&
                        (0, a.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type)
                    );
                })
                .map((e) => e.game.name);
            a.default.track(f.rMx.OPEN_POPOUT, {
                type: "Now Playing Card Popout",
                games_detected: e,
            });
        }),
        (0, r.jsxs)(i.v2r, {
            navId: "now-playing-menu",
            onClose: n,
            "aria-label": m.intl.string(m.t.ogxXGq),
            onSelect: h,
            children: [
                g,
                (0, r.jsxs)(i.kSQ, {
                    children: [_, b],
                }),
                (0, r.jsx)(i.kSQ, { children: E }),
                (0, r.jsx)(i.kSQ, { children: O }),
                I,
            ],
        })
    );
}
