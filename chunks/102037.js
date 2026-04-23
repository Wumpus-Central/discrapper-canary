"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(684013),
    l = n(471024),
    a = n(833551),
    r = n(256415),
    o = n(9302),
    d = n(684748),
    c = n(672396),
    u = n(985018);
let h = (e) => (0, l.sI)(e, (0, d.J)(), u.t["z8/sgJ"]);
function p(e) {
    var t;
    let { type: l } = e,
        {
            icon: p,
            title: A,
            body: f,
            hint: _,
            notifType: g,
        } = ((t = {
            icon: n(513653),
            title: u.intl.string(u.t.pkXAeG),
            body: null,
            hint: h,
            notifType: c.KS.WelcomeNudge,
        }),
        e.type === c.Jr.NEWS
            ? {
                  icon: e.news?.icon ?? t.icon,
                  title: e.news?.title ?? t.title,
                  body: e.news?.body ?? t.body,
                  hint: e.news?.hint ?? t.hint,
                  notifType: null != e.news ? c.KS.NewsNudge : t.notifType,
              }
            : t),
        { trackView: m, trackClick: E } = (0, d.Y)(g, { notif_type: g });
    return {
        icon: p,
        title: A,
        body: f,
        hint: _,
        renderFooter: () =>
            (0, i.jsx)("div", { style: { textAlign: "center", padding: 2 }, children: u.intl.string(u.t["9MyuT0"]) }),
        onNotificationShow: () => {
            m();
        },
        onNotificationClick: (e, t) => {
            E("unlock"),
                l === c.Jr.NEWS && s.A.updateNotificationStatus(t),
                a.default.isOverlayOOPEnabledForPid((0, o.getPID)())
                    ? s.A.setInputLocked(!1, (0, o.getPID)())
                    : r.default.isInstanceLocked() && s.A.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            E("dismiss");
        },
    };
}
