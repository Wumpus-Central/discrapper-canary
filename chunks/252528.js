e.d(i, { ActivityAgeGateModal: () => r });
var n = e(200651);
e(192379);
var s = e(481060),
    a = e(986035),
    c = e(388032),
    o = e(277100);
function r(t) {
    let { application: i, onAgree: e, onClose: r, onDisagree: l, ...d } = t;
    return (0, n.jsx)(s.Y0X, {
        ...d,
        children: (0, n.jsx)('div', {
            children: (0, n.jsx)(a.Z, {
                onAgree: () => {
                    e(), r();
                },
                onDisagree: () => {
                    l(), r();
                },
                title: c.intl.string(c.t.SSDPOD),
                description: c.intl.formatToPlainString(c.t.OgmIq6, { applicationName: i.name }),
                agreement: c.intl.string(c.t.wVq7ur),
                disagreement: c.intl.string(c.t.hg1uxs),
                imageClassName: o.image
            })
        })
    });
}
