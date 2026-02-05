n.d(t, { A: () => c });
var l = n(211401),
    a = n(500049),
    r = n(429913),
    s = n(355622),
    i = n(583846),
    o = n(360469),
    d = n(985018);
function c(e) {
    let { entry: t } = e,
        n = (0, r.h)(t.extra.application_id),
        c = n?.getIconURL(o.iu.LARGE),
        u = t.extra.activity_name,
        m = (0, i.Hd)(t) ? d.t.vPg1JT : d.t.rPqqts,
        p = {
            onClick: () => {
                l.R(a.s4.TEXT, s.oU.NORMAL, { applicationId: t.extra.application_id });
            },
            ariaDescription: d.intl.formatToPlainString(d.t.NTHttN, { title: u }),
        };
    return { thumbnailUrl: c, title: u, titleClickable: p, thumbnailClickable: p, userDescription: m };
}
