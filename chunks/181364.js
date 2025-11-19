n.d(t, { Z: () => p });
var i = n(54381);
n(473749);
var r = n(13245),
    s = n(593481),
    o = n(371651),
    l = n(237997),
    a = n(145597),
    c = n(312839),
    d = n(987650),
    u = n(388032);
let h = (e) => (0, s.QR)(e, (0, c.P)(), u.t["z8/sgJ"]);
function p(e) {
    let { type: t } = e,
        {
            icon: s,
            title: p,
            body: f,
            hint: g,
            notifType: m,
        } = (function (e, t) {
            if (t.type === d.nc.NEWS) {
                var n, i, r, s, o, l, a, c;
                return {
                    icon: null != (o = null == (n = t.news) ? void 0 : n.icon) ? o : e.icon,
                    title: null != (l = null == (i = t.news) ? void 0 : i.title) ? l : e.title,
                    body: null != (a = null == (r = t.news) ? void 0 : r.body) ? a : e.body,
                    hint: null != (c = null == (s = t.news) ? void 0 : s.hint) ? c : e.hint,
                    notifType: null != t.news ? d.n0.NewsNudge : e.notifType,
                };
            }
            return e;
        })(
            {
                icon: n(328756),
                title: u.intl.string(u.t.pkXAeG),
                body: null,
                hint: h,
                notifType: d.n0.WelcomeNudge,
            },
            e,
        ),
        { trackView: y, trackClick: b } = (0, c.R)(m, { notif_type: m });
    return {
        icon: s,
        title: p,
        body: f,
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
            y();
        },
        onNotificationClick: (e, n) => {
            b("unlock"),
                t === d.nc.NEWS && r.Z.updateNotificationStatus(n),
                o.default.isOverlayOOPEnabledForPid((0, a.getPID)())
                    ? r.Z.setInputLocked(!1, (0, a.getPID)())
                    : l.default.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            b("dismiss");
        },
    };
}
