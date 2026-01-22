n.d(t, { A: () => u });
var r = n(211401),
    i = n(500049),
    a = n(429913),
    s = n(355622),
    o = n(583846),
    l = n(360469),
    c = n(985018);
function u(e) {
    let { entry: t } = e,
        n = (0, a.h)(t.extra.application_id),
        u = null == n ? void 0 : n.getIconURL(l.iu.LARGE),
        d = t.extra.activity_name,
        f = (0, o.Hd)(t) ? c.t.vPg1JT : c.t.rPqqts,
        p = {
            onClick: () => {
                r.R(i.s4.TEXT, s.oU.NORMAL, { applicationId: t.extra.application_id });
            },
            ariaDescription: c.intl.formatToPlainString(c.t.NTHttN, { title: d }),
        };
    return {
        thumbnailUrl: u,
        title: d,
        titleClickable: p,
        thumbnailClickable: p,
        userDescription: f,
    };
}
