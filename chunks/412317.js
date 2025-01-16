t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(194359),
    r = t(906732),
    s = t(475413),
    c = t(934861),
    a = t(981631),
    d = t(388032),
    u = t(997243);
function f(e) {
    let { isCurrentUser: n, user: t, relationshipType: f, friendToken: m, onClose: x } = e,
        { newestAnalyticsLocation: I } = (0, r.ZP)();
    return n || f === a.OGo.BLOCKED
        ? null
        : f === a.OGo.FRIEND || t.bot
          ? (0, i.jsx)('div', {
                className: u.multipleButtons,
                children: (0, i.jsx)(c.c, {
                    userId: t.id,
                    onClose: x
                })
            })
          : f === a.OGo.PENDING_OUTGOING || f === a.OGo.PENDING_INCOMING
            ? (0, i.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, i.jsx)(s.ef, {
                          icon: l.UserClockIcon,
                          tooltipText: d.intl.string(d.t.p6IHGB),
                          disabled: !0
                      }),
                      (0, i.jsx)(c.c, {
                          userId: t.id,
                          onClose: x
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: u.multipleButtons,
                  children: [
                      (0, i.jsx)(c.v, {
                          userId: t.id,
                          onClose: x
                      }),
                      (0, i.jsx)(s.tG, {
                          action: 'SEND_FRIEND_REQUEST',
                          icon: l.UserPlusIcon,
                          text: d.intl.string(d.t['7815aW']),
                          color: l.Button.Colors.BRAND,
                          onClick: () => {
                              o.Z.addRelationship({
                                  userId: t.id,
                                  context: { location: I },
                                  friendToken: m
                              });
                          }
                      })
                  ]
              });
}
