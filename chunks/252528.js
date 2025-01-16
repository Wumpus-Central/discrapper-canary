i.r(e),
    i.d(e, {
        ActivityAgeGateModal: function () {
            return c;
        }
    });
var n = i(200651);
i(192379);
var s = i(481060),
    o = i(986035),
    a = i(388032),
    r = i(966474);
function c(t) {
    let { application: e, onAgree: i, onClose: c, onDisagree: l, ...d } = t;
    return (0, n.jsx)(s.ModalRoot, {
        ...d,
        children: (0, n.jsx)('div', {
            children: (0, n.jsx)(o.Z, {
                onAgree: () => {
                    i(), c();
                },
                onDisagree: () => {
                    l(), c();
                },
                title: a.intl.string(a.t.SSDPOD),
                description: a.intl.formatToPlainString(a.t.OgmIq6, { applicationName: e.name }),
                agreement: a.intl.string(a.t.wVq7ur),
                disagreement: a.intl.string(a.t.hg1uxs),
                imageClassName: r.image
            })
        })
    });
}
