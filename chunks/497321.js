n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(313789),
    l = n(518596),
    c = n(981631),
    u = n(388032),
    d = n(656900);
function f(e) {
    let { disableButton: t } = e,
        n = () => {
            !0 !== t && (0, l.openUserSettings)(s.n.STREAMER_MODE_PANEL, { section: c.oAB.STREAMER_MODE });
        };
    return (0, r.jsxs)("div", {
        className: d.streamerModeEnabled,
        children: [
            (0, r.jsx)("div", { className: d.streamerModeEnabledImage }),
            (0, r.jsx)(o.P3F, {
                className: a()(d.streamerModeEnabledBtn, { [d.disabled]: t }),
                onClick: n,
                children: u.intl.string(u.t.Br1ls3),
            }),
        ],
    });
}
