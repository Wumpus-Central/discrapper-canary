n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var s = n(13245),
    l = n(593481),
    r = n(371651),
    o = n(237997),
    a = n(145597),
    d = n(312839),
    c = n(987650),
    u = n(388032);
let h = () => ({
        icon: n(328756),
        title: u.intl.string(u.t.pkXAeH),
        body: null,
        hint: p,
        notifType: c.n0.WelcomeNudge
    }),
    p = (e) => (0, l.QR)(e, (0, d.P)(), u.t['z8/sgI']);
function g(e) {
    let { type: t } = e,
        {
            icon: n,
            title: l,
            body: p,
            hint: g,
            notifType: f
        } = (function (e, t) {
            if (t.type === c.nc.NEWS) {
                var n, i, s, l, r, o, a, d;
                return {
                    icon: null !== (r = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== r ? r : e.icon,
                    title: null !== (o = null === (i = t.news) || void 0 === i ? void 0 : i.title) && void 0 !== o ? o : e.title,
                    body: null !== (a = null === (s = t.news) || void 0 === s ? void 0 : s.body) && void 0 !== a ? a : e.body,
                    hint: null !== (d = null === (l = t.news) || void 0 === l ? void 0 : l.hint) && void 0 !== d ? d : e.hint,
                    notifType: null != t.news ? c.n0.NewsNudge : e.notifType
                };
            }
            return e;
        })(h(), e),
        { trackView: m, trackClick: x } = (0, d.R)(f, { notif_type: f });
    return {
        icon: n,
        title: l,
        body: p,
        hint: g,
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
            x('unlock'), t === c.nc.NEWS && s.Z.updateNotificationStatus(n), r.Z.isOverlayOOPEnabledForPid((0, a.QF)()) ? s.Z.setInputLocked(!1, (0, a.QF)()) : o.Z.isInstanceLocked() && s.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            x('dismiss');
        }
    };
}
