n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(493683),
    s = n(367907),
    o = n(205129),
    c = n(626135),
    d = n(981631),
    u = n(388032);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { priorityMembers: n, partiedMembers: h } = e,
        m = r.useContext(c.AnalyticsContext),
        p = n.map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        g = 1 === h.length && 1 === n.length,
        f = n.length - h.length > 0;
    return (g || t) && !f && 0 !== p.length
        ? (0, i.jsx)(l.MenuItem, {
              id: 'message',
              action: function () {
                  a.Z.openPrivateChannel(p).then((t) =>
                      s.ZP.trackWithMetadata(d.rMx.ACTIVITY_FEED_DM_VISITED, {
                          source: {
                              ...m.location,
                              object: d.qAy.LIST_ITEM
                          },
                          channel_id: t,
                          recipient_id: 'string' == typeof p ? p : p[0],
                          af_recently_played: !1,
                          ...(0, o.y)(e)
                      })
                  );
              },
              label: u.intl.string(u.t['g33r/P'])
          })
        : null;
}
