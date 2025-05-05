t.d(n, { default: () => c });
var i = t(255367);
t(73800);
var l = t(481060),
    r = t(239091),
    a = t(637853),
    s = t(434404),
    u = t(837949),
    d = t(981631),
    o = t(388032);
function c(e) {
    let { guild: n, onSelect: t } = e,
        c = (0, u.Z)(n.id),
        h = (0, a.wC)(n.id);
    return (0, i.jsx)(l.v2r, {
        onSelect: t,
        navId: 'guild-browse-channels-context-menu',
        'aria-label': o.intl.string(o.t.ogxXGh),
        onClose: r.Zy,
        children: (0, i.jsxs)(l.kSQ, {
            children: [
                h &&
                    (0, i.jsx)(l.sNh, {
                        id: 'go-to-settings',
                        label: o.intl.string(o.t.X70lV1),
                        action: () => {
                            s.Z.open(n.id, d.pNK.ONBOARDING);
                        }
                    }),
                c
            ]
        })
    });
}
