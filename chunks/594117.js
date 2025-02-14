n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(685072),
    r = n(287734),
    a = n(15274),
    s = n(389303),
    o = n(881824),
    d = n(719100),
    c = n(870569),
    u = n(388032);
function h(e) {
    let { tooltipText: t, onClick: n } = e,
        { events: r, Component: a } = (0, l.K)();
    return (0, i.jsx)(c.Z, {
        tooltipText: t,
        onClick: n,
        ...r,
        icon: (0, i.jsx)(a, { size: 'refresh_sm' })
    });
}
function m(e) {
    let { channel: t } = e;
    return (0, i.jsx)(h, {
        tooltipText: u.intl.string(u.t.SMKyio),
        onClick: () => {
            if ((0, d.Z)(t)) {
                (0, o.Us)(t);
                return;
            }
            r.default.disconnect();
        }
    });
}
function p(e) {
    let { channel: t } = e;
    return (0, i.jsx)(h, {
        tooltipText: u.intl.string(u.t['6vrfgo']),
        onClick: () => {
            if ((0, s.Z)(t)) {
                (0, a.lC)(t);
                return;
            }
            r.default.disconnect();
        }
    });
}
function g(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(m, { channel: t }) : (0, i.jsx)(p, { channel: t });
}
