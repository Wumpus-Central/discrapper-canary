n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(956793),
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
        { parentAnalyticsLocation: r } = (0, s.Ay)(),
        d = l.useRef(null);
    return (0, i.jsx)(h.A, {
        tooltipText: t,
        ref: d,
        onClick: () => {
            (0, o.X)(r, o.O.DISCONNECT), n();
        },
        icon: (0, i.jsx)(a.AYu, {
            autoPause: !0,
            eventTargetRef: d,
            dataBinding: { fill: "currentColor" },
            className: a.d5l.refresh_sm,
        }),
    });
}
function g(e) {
    let { channel: t } = e;
    return (0, i.jsx)(m, {
        tooltipText: _.intl.string(_.t.SMKyih),
        onClick: () => {
            (0, A.A)(t) ? (0, u.j3)(t) : r.default.disconnect();
        },
    });
}
function p(e) {
    let { channel: t } = e;
    return (0, i.jsx)(m, {
        tooltipText: _.intl.string(_.t["6vrfgt"]),
        onClick: () => {
            (0, c.A)(t) ? (0, d.Py)(t) : r.default.disconnect();
        },
    });
}
function E(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(g, { channel: t }) : (0, i.jsx)(p, { channel: t });
}
