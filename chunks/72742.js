n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(378570),
    s = n(323443),
    o = n(233993),
    l = n(82149),
    c = n(734057),
    u = n(576705),
    d = n(977997),
    f = n(939496),
    p = n(993401),
    _ = n(996988),
    h = n(985018);
function m(e) {
    let { activity: t, onAction: n, onClose: m } = e,
        { themeType: g } = (0, f.E)(),
        E = g === _.d.MODAL_V2,
        b = (0, l.UW)(t),
        { channelId: y, guildId: O } = null != b ? b : {},
        A = (0, i.bG)([d.A], () => null != y && d.A.isInChannel(y), [y]),
        v = (0, i.bG)([c.A], () => (null != y ? c.A.getChannel(y) : null), [y]),
        S = (0, i.bG)([u.A], () => null != v && u.A.can(o.Gk, v), [v]);
    if (!(0, l.Cy)(t) || !S || null == O || null == y) return null;
    let I = (e) => {
        e.stopPropagation(),
            null == n || n({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
            s.CH(O, y),
            (0, a.iN)(y),
            null == m || m();
    };
    return (0, r.jsx)(p.FD, {
        text: h.intl.string(h.t.ZYO5OK),
        fullWidth: !E,
        disabled: A,
        onClick: I,
    });
}
