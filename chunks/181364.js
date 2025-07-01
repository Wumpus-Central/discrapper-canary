n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(13245),
    o = n(593481),
    l = n(371651),
    s = n(237997),
    a = n(145597),
    c = n(312839),
    d = n(987650),
    u = n(388032);
let h = () => ({
        icon: n(328756),
        title: u.intl.string(u.t.pkXAeH),
        body: null,
        hint: p,
        notifType: d.n0.WelcomeNudge
    }),
    p = (e) => (0, o.QR)(e, (0, c.P)(), u.t['z8/sgI']);
function f(e) {
    let { type: t } = e,
        {
            icon: n,
            title: o,
            body: p,
            hint: f,
            notifType: g
        } = (function (e, t) {
            if (t.type === d.nc.NEWS) {
                var n, i, r, o, l, s, a, c;
                return {
                    icon: null != (l = null == (n = t.news) ? void 0 : n.icon) ? l : e.icon,
                    title: null != (s = null == (i = t.news) ? void 0 : i.title) ? s : e.title,
                    body: null != (a = null == (r = t.news) ? void 0 : r.body) ? a : e.body,
                    hint: null != (c = null == (o = t.news) ? void 0 : o.hint) ? c : e.hint,
                    notifType: null != t.news ? d.n0.NewsNudge : e.notifType
                };
            }
            return e;
        })(h(), e),
        { trackView: m, trackClick: y } = (0, c.R)(g, { notif_type: g });
    return {
        icon: n,
        title: o,
        body: p,
        hint: f,
        renderFooter: () =>
            (0, i.jsx)('div', {
                style: {
                    textAlign: 'center',
                    padding: 2
                },
                children: u.intl.string(u.t['9MyuT0'])
            }),
        onNotificationShow: () => {
            m();
        },
        onNotificationClick: (e, n) => {
            (y('unlock'), t === d.nc.NEWS && r.Z.updateNotificationStatus(n), l.default.isOverlayOOPEnabledForPid((0, a.getPID)()) ? r.Z.setInputLocked(!1, (0, a.getPID)()) : s.default.isInstanceLocked() && r.Z.setInstanceLocked(!1));
        },
        onDismissClick: () => {
            y('dismiss');
        }
    };
}
