t.d(n, { default: () => c });
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    a = t(637853),
    s = t(434404),
    u = t(837949),
    d = t(981631),
    o = t(388032);
function c(e) {
    let { guild: n, onSelect: t } = e,
        c = (0, u.Z)(n.id),
        h = (0, a.wC)(n.id);
    return (0, i.jsx)(r.v2r, {
        onSelect: t,
        navId: 'guild-browse-channels-context-menu',
        'aria-label': o.NW.string(o.t.ogxXGh),
        onClose: l.Zy,
        children: (0, i.jsxs)(r.kSQ, {
            children: [
                h &&
                    (0, i.jsx)(r.sNh, {
                        id: 'go-to-settings',
                        label: o.NW.string(o.t.X70lV1),
                        action: () => {
                            s.Z.open(n.id, d.pNK.ONBOARDING);
                        }
                    }),
                c
            ]
        })
    });
}
