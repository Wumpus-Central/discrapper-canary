n.d(t, { default: () => c });
var i = n(54381);
n(473749);
var l = n(481060),
    r = n(239091),
    a = n(637853),
    s = n(434404),
    u = n(837949),
    d = n(981631),
    o = n(388032);
function c(e) {
    let { guild: t, onSelect: n } = e,
        c = (0, u.Z)(t.id),
        f = (0, a.wC)(t.id);
    return (0, i.jsx)(l.v2r, {
        onSelect: n,
        navId: "guild-browse-channels-context-menu",
        "aria-label": o.intl.string(o.t.ogxXGq),
        onClose: r.Zy,
        children: (0, i.jsxs)(l.kSQ, {
            children: [
                f &&
                    (0, i.jsx)(l.sNh, {
                        id: "go-to-settings",
                        label: o.intl.string(o.t.X70lV6),
                        action: () => {
                            s.Z.open(t.id, d.pNK.ONBOARDING);
                        },
                    }),
                c,
            ],
        }),
    });
}
