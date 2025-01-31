e.d(t, { Z: () => f });
var i = e(200651);
e(192379);
var a = e(852229),
    l = e(399606),
    r = e(481060),
    o = e(228392),
    d = e(592125),
    s = e(934415),
    u = e(981631),
    c = e(388032);
function f(n, t, e) {
    let f = (0, l.e7)([d.Z], () => d.Z.getChannel(n.parent_id));
    return (0, i.jsx)(r.sNh, {
        id: 'channel-copy-link',
        label: c.intl.string(c.t.WqhZsr),
        action: () => {
            n.isForumPost() &&
                (0, o.B)({
                    postId: n.id,
                    location: { section: u.jXE.CONTEXT_MENU }
                }),
                (0, a.J)((0, s.EO)(n, f, t, e));
        }
    });
}
