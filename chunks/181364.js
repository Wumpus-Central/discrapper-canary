n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(593481),
    o = n(371651),
    l = n(237997),
    a = n(145597),
    c = n(312839),
    u = n(987650),
    d = n(388032);
let h = () => ({
        icon: n(328756),
        title: d.NW.string(d.t.pkXAeH),
        body: null,
        hint: p,
        notifType: u.n0.WelcomeNudge
    }),
    p = (e) => (0, s.QR)(e, (0, c.P)(), d.t['z8/sgI']);
function f(e) {
    let { type: t } = e,
        {
            icon: n,
            title: s,
            body: p,
            hint: f,
            notifType: g
        } = (function (e, t) {
            if (t.type === u.nc.NEWS) {
                var n, i, r, s, o, l, a, c;
                return {
                    icon: null != (o = null == (n = t.news) ? void 0 : n.icon) ? o : e.icon,
                    title: null != (l = null == (i = t.news) ? void 0 : i.title) ? l : e.title,
                    body: null != (a = null == (r = t.news) ? void 0 : r.body) ? a : e.body,
                    hint: null != (c = null == (s = t.news) ? void 0 : s.hint) ? c : e.hint,
                    notifType: null != t.news ? u.n0.NewsNudge : e.notifType
                };
            }
            return e;
        })(h(), e),
        { trackView: m, trackClick: y } = (0, c.R)(g, { notif_type: g });
    return {
        icon: n,
        title: s,
        body: p,
        hint: f,
        renderFooter: () =>
            (0, i.jsx)('div', {
                style: {
                    textAlign: 'center',
                    padding: 2
                },
                children: d.NW.string(d.t['9MyuT0'])
            }),
        onNotificationShow: () => {
            m();
        },
        onNotificationClick: (e, n) => {
            y('unlock'), t === u.nc.NEWS && r.Z.updateNotificationStatus(n), o.default.isOverlayOOPEnabledForPid((0, a.getPID)()) ? r.Z.setInputLocked(!1, (0, a.getPID)()) : l.default.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            y('dismiss');
        }
    };
}
