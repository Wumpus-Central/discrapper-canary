n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(685072),
    l = n(481060),
    a = n(287734),
    s = n(15274),
    o = n(389303),
    c = n(881824),
    d = n(719100),
    u = n(870569),
    h = n(388032);
function m(e) {
    let { tooltipText: t, onClick: n } = e,
        { events: a, Component: s } = (0, r.K)();
    return (0, i.jsx)(u.Z, {
        tooltipText: t,
        onClick: n,
        ...a,
        icon: (0, i.jsx)(s, {
            size: 'refresh_sm',
            color: l.tokens.colors.CHANNEL_ICON
        })
    });
}
function p(e) {
    let { channel: t } = e;
    return (0, i.jsx)(m, {
        tooltipText: h.intl.string(h.t.SMKyio),
        onClick: () => {
            if ((0, d.Z)(t)) {
                (0, c.Us)(t);
                return;
            }
            a.default.disconnect();
        }
    });
}
function g(e) {
    let { channel: t } = e;
    return (0, i.jsx)(m, {
        tooltipText: h.intl.string(h.t['6vrfgo']),
        onClick: () => {
            if ((0, o.Z)(t)) {
                (0, s.lC)(t);
                return;
            }
            a.default.disconnect();
        }
    });
}
function f(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, i.jsx)(p, { channel: t }) : (0, i.jsx)(g, { channel: t });
}
