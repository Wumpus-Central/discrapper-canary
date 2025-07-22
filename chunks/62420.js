(n.d(t, { Z: () => s }), n(539854), n(388685));
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(117984),
    o = n(593214),
    c = n(362658),
    a = n(388032);
function s(e) {
    let t = (0, o.Mt)(),
        n = (0, o.s4)(e.id),
        s = (0, o.zv)(),
        { isFavoritesPerk: u } = (0, c.z)('useChannelMoveToCategory');
    if (__OVERLAY__ || !t || null == n || !u) return null;
    let [d, b] = (function (e) {
        let t = [],
            n = null;
        for (let r of e) null == r.id ? (n = r) : t.push(r);
        return [n, t];
    })(s.filter((e) => e.id !== (null == n ? void 0 : n.parentId)));
    function f(e) {
        null != n && (0, l.uA)(n.id, e);
    }
    return null == d && 0 === b.length
        ? null
        : (0, r.jsxs)(i.sNh, {
              id: 'move-to-category',
              label: a.intl.string(a.t.FAplmp),
              children: [
                  null != d &&
                      (0, r.jsx)(i.kSQ, {
                          children: (0, r.jsx)(i.sNh, {
                              id: 'favorite-uncategorized',
                              label: d.name,
                              action: () => f(d.id)
                          })
                      }),
                  b.length > 0 &&
                      (0, r.jsx)(i.kSQ, {
                          children: b.map((e) => {
                              let { id: t, name: n } = e;
                              return (0, r.jsx)(
                                  i.sNh,
                                  {
                                      id: 'favorite-'.concat(t),
                                      label: n,
                                      action: () => f(t)
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
