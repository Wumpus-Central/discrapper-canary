n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(377802),
    a = n(956793),
    r = n(688810),
    s = n(384059),
    o = n(707592),
    d = n(132860),
    c = n(993838),
    u = n(106044),
    A = n(42473),
    h = n(985018);
function _(e) {
    let { tooltipText: t, onClick: n } = e,
        { parentAnalyticsLocation: a } = (0, r.Ay)(),
        { events: o, Component: d } = (0, l.O)();
    return (0, i.jsx)(A.A, {
        tooltipText: t,
        onClick: () => {
            (0, s.X)(a, s.O.DISCONNECT), n();
        },
        ...o,
        icon: (0, i.jsx)(d, { size: "refresh_sm" }),
    });
}
function m(e) {
    let { channel: t } = e;
    return (0, i.jsx)(_, {
        tooltipText: h.intl.string(h.t.SMKyih),
        onClick: () => {
            (0, u.A)(t) ? (0, c.j3)(t) : a.default.disconnect();
        },
    });
}
function g(e) {
    let { channel: t } = e;
    return (0, i.jsx)(_, {
        tooltipText: h.intl.string(h.t["6vrfgt"]),
        onClick: () => {
            (0, d.A)(t) ? (0, o.Py)(t) : a.default.disconnect();
        },
    });
}
function p(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(m, { channel: t }) : (0, i.jsx)(g, { channel: t });
}
