n.d(e, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(852229),
    r = n(399606),
    a = n(481060),
    d = n(228392),
    s = n(592125),
    u = n(934415),
    o = n(981631),
    _ = n(388032);
function c(t, e, n) {
    let c = (0, r.e7)([s.Z], () => s.Z.getChannel(t.parent_id));
    return (0, i.jsx)(a.sNh, {
        id: 'channel-copy-link',
        label: _.intl.string(_.t.WqhZsr),
        action: () => {
            t.isForumPost() &&
                (0, d.B)({
                    postId: t.id,
                    location: { section: o.jXE.CONTEXT_MENU }
                }),
                (0, l.J)((0, u.EO)(t, c, e, n));
        }
    });
}
