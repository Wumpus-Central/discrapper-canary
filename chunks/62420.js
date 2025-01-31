e.d(t, { Z: () => u }), e(653041), e(47120);
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(117984),
    a = e(593214),
    s = e(362658),
    d = e(388032);
function u(n) {
    let t = (0, a.Mt)(),
        e = (0, a.s4)(n.id),
        u = (0, a.zv)(),
        { isFavoritesPerk: o } = (0, s.z)('useChannelMoveToCategory');
    if (__OVERLAY__ || !t || null == e || !o) return null;
    let [c, h] = (function (n) {
        let t = [],
            e = null;
        for (let i of n) null == i.id ? (e = i) : t.push(i);
        return [e, t];
    })(u.filter((n) => n.id !== (null == e ? void 0 : e.parentId)));
    function f(n) {
        null != e && (0, r.uA)(e.id, n);
    }
    return null == c && 0 === h.length
        ? null
        : (0, i.jsxs)(l.sNh, {
              id: 'move-to-category',
              label: d.intl.string(d.t.FAplmp),
              children: [
                  null != c &&
                      (0, i.jsx)(l.kSQ, {
                          children: (0, i.jsx)(l.sNh, {
                              id: 'favorite-uncategorized',
                              label: c.name,
                              action: () => f(c.id)
                          })
                      }),
                  h.length > 0 &&
                      (0, i.jsx)(l.kSQ, {
                          children: h.map((n) => {
                              let { id: t, name: e } = n;
                              return (0, i.jsx)(
                                  l.sNh,
                                  {
                                      id: 'favorite-'.concat(t),
                                      label: e,
                                      action: () => f(t)
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
