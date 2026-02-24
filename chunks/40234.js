n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(956793),
    s = n(688810),
    o = n(384059),
    d = n(707592),
    c = n(132860),
    u = n(993838),
    A = n(106044),
    h = n(42473),
    _ = n(985018);
function m(e) {
    let { tooltipText: t, onClick: n } = e,
        { parentAnalyticsLocation: a } = (0, s.Ay)(),
        d = r.useRef(null);
    return (0, i.jsx)(h.A, {
        tooltipText: t,
        ref: d,
        onClick: () => {
            (0, o.X)(a, o.O.DISCONNECT), n();
        },
        icon: (0, i.jsx)(l.AYu, {
            eventTargetRef: d,
            dataBinding: { fill: "currentColor" },
            className: l.d5l.refresh_sm,
        }),
    });
}
function p(e) {
    let { channel: t } = e;
    return (0, i.jsx)(m, {
        tooltipText: _.intl.string(_.t.SMKyih),
        onClick: () => {
            (0, A.A)(t) ? (0, u.j3)(t) : a.default.disconnect();
        },
    });
}
function g(e) {
    let { channel: t } = e;
    return (0, i.jsx)(m, {
        tooltipText: _.intl.string(_.t["6vrfgt"]),
        onClick: () => {
            (0, c.A)(t) ? (0, d.Py)(t) : a.default.disconnect();
        },
    });
}
function E(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(p, { channel: t }) : (0, i.jsx)(g, { channel: t });
}
