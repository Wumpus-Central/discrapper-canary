n.d(t, { Z: () => h });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(493683),
    s = n(367907),
    o = n(205129),
    c = n(626135),
    d = n(981631),
    u = n(388032);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { priorityMembers: n, partiedMembers: h } = e,
        m = l.useContext(c.AnalyticsContext),
        p = n.map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        g = 1 === h.length && 1 === n.length,
        _ = n.length - h.length > 0;
    return (g || t) && !_ && 0 !== p.length
        ? (0, i.jsx)(r.sNh, {
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
