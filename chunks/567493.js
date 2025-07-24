(n.d(t, { i: () => h }), n(388685), n(361932), n(187205), n(539854));
var r = n(73800),
    i = n(661869),
    l = n(876215),
    a = n(884439),
    o = n(442837),
    s = n(271383),
    c = n(158776),
    u = n(709054),
    d = n(206583);
let p = (e, t) => {
    let n = e.filter((e) => null != e.activity.application_id && d.yh.includes(e.activity.application_id)),
        r = t.filter((e) => null != e.activity.application_id && d.yh.includes(e.activity.application_id));
    if (n.length !== r.length) return !1;
    let i = new Set(n.map((e) => ''.concat(e.userId, '-').concat(e.activity.session_id, '-').concat(e.activity.application_id))),
        l = new Set(r.map((e) => ''.concat(e.userId, '-').concat(e.activity.session_id, '-').concat(e.activity.application_id)));
    if (i.size !== l.size) return !1;
    for (let e of i) if (!l.has(e)) return !1;
    return !0;
};
function h(e) {
    let t = (0, o.e7)([c.Z], () => (null != e && d.Hw.includes(e) ? d.yh.flatMap((e) => c.Z.getAllApplicationActivities(e)) : []), [e], p);
    return r.useMemo(
        () =>
            null == e || 0 === t.length
                ? []
                : (function (e, t) {
                      if (!d.Hw.includes(e)) return [];
                      let n = [];
                      return (
                          t.forEach((t) => {
                              var r, o, c;
                              let d = t.userId;
                              if (null == d || !s.ZP.isMember(e, d) || null == t.activity.application_id || '' === t.activity.name) return;
                              let p = null != (c = null != (o = null == (r = t.activity.timestamps) ? void 0 : r.start) ? o : t.activity.created_at) ? c : Date.now(),
                                  h = {
                                      id: u.default.fromTimestamp(p),
                                      author_id: d,
                                      author_type: i.i.USER,
                                      content_type: l.s.PLAYED_GAME,
                                      participants: [d],
                                      expires_at: new Date(Date.now() + 300000).toISOString(),
                                      traits: [
                                          {
                                              type: a.N.IS_LIVE,
                                              is_live: !0
                                          },
                                          {
                                              type: a.N.DURATION_SECONDS,
                                              duration_seconds: Math.floor((Date.now() - p) / 1000)
                                          }
                                      ],
                                      extra: {
                                          type: 'played_game_extra',
                                          game_name: t.activity.name,
                                          application_id: t.activity.application_id,
                                          fake_inventory_item: !0
                                      }
                                  };
                              n.push(h);
                          }),
                          n
                      );
                  })(e, t),
        [e, t]
    );
}
