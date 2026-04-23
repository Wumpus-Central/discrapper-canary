n.d(t, { A: () => c });
var a = n(211401),
    l = n(500049),
    r = n(429913),
    i = n(355622),
    s = n(583846),
    o = n(360469),
    d = n(985018);
function c(e) {
    let { entry: t } = e,
        n = (0, r.h)(t.extra.application_id),
        c = n?.getIconURL(o.iu.LARGE),
        u = t.extra.activity_name,
        m = (0, s.Hd)(t) ? d.t.vPg1JT : d.t.rPqqts,
        _ = {
            onClick: () => {
                a.R(l.s4.TEXT, i.oU.NORMAL, { applicationId: t.extra.application_id });
            },
            ariaDescription: d.intl.formatToPlainString(d.t.NTHttN, { title: u }),
        };
    return { thumbnailUrl: c, title: u, titleClickable: _, thumbnailClickable: _, userDescription: m };
}
