n.d(t, { Z: () => s }), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(117984),
    a = n(593214),
    o = n(362658),
    c = n(388032);
function s(e) {
    let t = (0, a.Mt)(),
        n = (0, a.s4)(e.id),
        s = (0, a.zv)(),
        { isFavoritesPerk: u } = (0, o.z)('useChannelMoveToCategory');
    if (__OVERLAY__ || !t || null == n || !u) return null;
    let [d, f] = (function (e) {
        let t = [],
            n = null;
        for (let r of e) null == r.id ? (n = r) : t.push(r);
        return [n, t];
    })(s.filter((e) => e.id !== (null == n ? void 0 : n.parentId)));
    function O(e) {
        null != n && (0, l.uA)(n.id, e);
    }
    return null == d && 0 === f.length
        ? null
        : (0, r.jsxs)(i.sNh, {
              id: 'move-to-category',
              label: c.NW.string(c.t.FAplmp),
              children: [
                  null != d &&
                      (0, r.jsx)(i.kSQ, {
                          children: (0, r.jsx)(i.sNh, {
                              id: 'favorite-uncategorized',
                              label: d.name,
                              action: () => O(d.id)
                          })
                      }),
                  f.length > 0 &&
                      (0, r.jsx)(i.kSQ, {
                          children: f.map((e) => {
                              let { id: t, name: n } = e;
                              return (0, r.jsx)(
                                  i.sNh,
                                  {
                                      id: 'favorite-'.concat(t),
                                      label: n,
                                      action: () => O(t)
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
