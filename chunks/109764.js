n.d(e, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(852229),
    a = n(399606),
    l = n(481060),
    s = n(228392),
    o = n(592125),
    d = n(934415),
    c = n(981631),
    u = n(388032);
function h(t, e, n) {
    let h = (0, a.e7)([o.Z], () => o.Z.getChannel(t.parent_id));
    return (0, i.jsx)(l.sNh, {
        id: 'channel-copy-link',
        label: u.NW.string(u.t.WqhZsr),
        action: () => {
            t.isForumPost() &&
                (0, s.B)({
                    postId: t.id,
                    location: { section: c.jXE.CONTEXT_MENU }
                }),
                (0, r.J)((0, d.EO)(t, h, e, n));
        }
    });
}
