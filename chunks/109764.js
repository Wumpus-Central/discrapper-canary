n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(852229),
    a = n(399606),
    l = n(481060),
    o = n(228392),
    u = n(592125),
    d = n(934415),
    c = n(981631),
    s = n(388032);
function f(e, t, n) {
    let f = (0, a.e7)([u.Z], () => u.Z.getChannel(e.parent_id));
    return (0, i.jsx)(l.sNh, {
        id: 'channel-copy-link',
        label: s.NW.string(s.t.WqhZsr),
        action: () => {
            e.isForumPost() &&
                (0, o.B)({
                    postId: e.id,
                    location: { section: c.jXE.CONTEXT_MENU }
                }),
                (0, r.J)((0, d.EO)(e, f, t, n));
        }
    });
}
