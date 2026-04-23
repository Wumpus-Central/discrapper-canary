n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(377802),
    a = n(956793),
    l = n(688810),
    s = n(384059),
    o = n(707592),
    d = n(132860),
    u = n(993838),
    c = n(106044),
    A = n(42473),
    h = n(985018);
function _(e) {
    let { tooltipText: t, onClick: n } = e,
        { parentAnalyticsLocation: a } = (0, l.Ay)(),
        { events: o, Component: d } = (0, r.O)();
    return (0, i.jsx)(A.A, {
        tooltipText: t,
        onClick: () => {
            (0, s.X)(a, s.O.DISCONNECT), n();
        },
        ...o,
        icon: (0, i.jsx)(d, { size: "refresh_sm" }),
    });
}
function E(e) {
    let { channel: t } = e;
    return (0, i.jsx)(_, {
        tooltipText: h.intl.string(h.t.SMKyih),
        onClick: () => {
            (0, c.A)(t) ? (0, u.j3)(t) : a.default.disconnect();
        },
    });
}
function p(e) {
    let { channel: t } = e;
    return (0, i.jsx)(_, {
        tooltipText: h.intl.string(h.t["6vrfgt"]),
        onClick: () => {
            (0, d.A)(t) ? (0, o.Py)(t) : a.default.disconnect();
        },
    });
}
function m(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(E, { channel: t }) : (0, i.jsx)(p, { channel: t });
}
