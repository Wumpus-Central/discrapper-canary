n.d(t, { Z: () => h });
var i = n(54381);
n(473749);
var r = n(13245),
    a = n(593481),
    s = n(371651),
    o = n(237997),
    l = n(145597),
    c = n(312839),
    d = n(987650),
    u = n(388032);
let f = (e) => (0, a.QR)(e, (0, c.P)(), u.t["z8/sgJ"]);
function h(e) {
    let { type: t } = e,
        {
            icon: a,
            title: h,
            body: p,
            hint: g,
            notifType: b,
        } = (function (e, t) {
            if (t.type === d.nc.NEWS) {
                var n, i, r, a, s, o, l, c;
                return {
                    icon: null != (s = null == (n = t.news) ? void 0 : n.icon) ? s : e.icon,
                    title: null != (o = null == (i = t.news) ? void 0 : i.title) ? o : e.title,
                    body: null != (l = null == (r = t.news) ? void 0 : r.body) ? l : e.body,
                    hint: null != (c = null == (a = t.news) ? void 0 : a.hint) ? c : e.hint,
                    notifType: null != t.news ? d.n0.NewsNudge : e.notifType,
                };
            }
            return e;
        })(
            {
                icon: n(328756),
                title: u.intl.string(u.t.pkXAeG),
                body: null,
                hint: f,
                notifType: d.n0.WelcomeNudge,
            },
            e,
        ),
        { trackView: m, trackClick: y } = (0, c.R)(b, { notif_type: b });
    return {
        icon: a,
        title: h,
        body: p,
        hint: g,
        renderFooter: () =>
            (0, i.jsx)("div", {
                style: {
                    textAlign: "center",
                    padding: 2,
                },
                children: u.intl.string(u.t["9MyuT0"]),
            }),
        onNotificationShow: () => {
            m();
        },
        onNotificationClick: (e, n) => {
            y("unlock"),
                t === d.nc.NEWS && r.Z.updateNotificationStatus(n),
                s.default.isOverlayOOPEnabledForPid((0, l.getPID)())
                    ? r.Z.setInputLocked(!1, (0, l.getPID)())
                    : o.default.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            y("dismiss");
        },
    };
}
