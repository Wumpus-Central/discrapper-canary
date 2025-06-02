n.d(t, { Z: () => f });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(257559),
    o = n(946273),
    s = n(592125),
    c = n(375954),
    u = n(496675),
    d = n(796263),
    p = n(463959),
    h = n(388032);
function f(e) {
    let { message: t, user: n, guild: f } = e,
        m = (0, i.e7)([u.Z], () => null != n && null != f && (0, o.CX)(n, f, [u.Z])),
        { messageReference: g } = t,
        b = (0, i.e7)([c.Z], () => (null != g ? c.Z.getMessage(g.channel_id, g.message_id) : null)),
        _ = (0, i.e7)([s.Z], () => (null != b ? s.Z.getChannel(b.channel_id) : null));
    if (!m) return null;
    let x = null == b ? h.intl.string(p.default['0IZbwM']) : h.intl.string(p.default.Uj6oDw),
        y = null == b,
        C = 'delete-message-'.concat(t.id);
    return (0, r.jsx)(
        d.Z,
        {
            text: x,
            icon: l.XHJ,
            onClick: () => {
                null != _ && null != b && a.Z.confirmDelete(_, b);
            },
            disabled: y,
            color: l.zxk.Colors.RED
        },
        C
    );
}
