"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(378570),
    s = n(323443),
    o = n(233993),
    l = n(82149),
    u = n(734057),
    c = n(576705),
    d = n(977997),
    _ = n(939496),
    f = n(993401),
    p = n(996988),
    h = n(985018);
function m(e) {
    let { activity: t, onAction: n, onClose: m } = e,
        { themeType: g } = (0, _.E)(),
        E = g === p.d.MODAL_V2,
        { channelId: A, guildId: I } = (0, l.UW)(t) ?? {},
        T = (0, i.bG)([d.A], () => null != A && d.A.isInChannel(A), [A]),
        y = (0, i.bG)([u.A], () => (null != A ? u.A.getChannel(A) : null), [A]),
        S = (0, i.bG)([c.A], () => null != y && c.A.can(o.Gk, y), [y]);
    if (!(0, l.Cy)(t) || !S || null == I || null == A) return null;
    let v = (e) => {
        e.stopPropagation(), n?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }), s.CH(I, A), (0, a.iN)(A), m?.();
    };
    return (0, r.jsx)(f.FD, { text: h.intl.string(h.t.ZYO5OK), fullWidth: !E, disabled: T, onClick: v });
}
