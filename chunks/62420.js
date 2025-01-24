t.d(e, {
    Z: function () {
        return d;
    }
}),
    t(653041),
    t(47120);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(117984),
    u = t(593214),
    a = t(362658),
    o = t(388032);
function d(n) {
    let e = (0, u.Mt)(),
        t = (0, u.s4)(n.id),
        d = (0, u.zv)(),
        { isFavoritesPerk: s } = (0, a.z)('useChannelMoveToCategory');
    if (__OVERLAY__ || !e || null == t || !s) return null;
    let [c, f] = (function (n) {
        let e = [],
            t = null;
        for (let i of n) null == i.id ? (t = i) : e.push(i);
        return [t, e];
    })(d.filter((n) => n.id !== (null == t ? void 0 : t.parentId)));
    function m(n) {
        null != t && (0, l.uA)(t.id, n);
    }
    return null == c && 0 === f.length
        ? null
        : (0, i.jsxs)(r.MenuItem, {
              id: 'move-to-category',
              label: o.intl.string(o.t.FAplmp),
              children: [
                  null != c &&
                      (0, i.jsx)(r.MenuGroup, {
                          children: (0, i.jsx)(r.MenuItem, {
                              id: 'favorite-uncategorized',
                              label: c.name,
                              action: () => m(c.id)
                          })
                      }),
                  f.length > 0 &&
                      (0, i.jsx)(r.MenuGroup, {
                          children: f.map((n) => {
                              let { id: e, name: t } = n;
                              return (0, i.jsx)(
                                  r.MenuItem,
                                  {
                                      id: 'favorite-'.concat(e),
                                      label: t,
                                      action: () => m(e)
                                  },
                                  e
                              );
                          })
                      })
              ]
          });
}
