n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(313789),
    l = n(518596),
    c = n(981631),
    u = n(388032),
    d = n(26621);
function f(e) {
    let { disableButton: t } = e,
        n = () => {
            !0 !== t && (0, l.openUserSettings)(s.n.STREAMER_MODE_PANEL, { section: c.oAB.STREAMER_MODE });
        };
    return (0, r.jsxs)("div", {
        className: d.streamerModeEnabled,
        children: [
            (0, r.jsx)("div", { className: d.streamerModeEnabledImage }),
            (0, r.jsx)(a.P3F, {
                className: o()(d.streamerModeEnabledBtn, { [d.disabled]: t }),
                onClick: n,
                children: u.intl.string(u.t.Br1ls3),
            }),
        ],
    });
}
