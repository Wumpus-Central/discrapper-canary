t.d(n, { Z: () => d }), t(539854), t(388685);
var i = t(54381);
t(473749);
var r = t(481060),
    l = t(117984),
    a = t(593214),
    s = t(362658),
    o = t(388032);
function d(e) {
    let n = (0, a.Mt)(),
        t = (0, a.s4)(e.id),
        d = (0, a.zv)(),
        { isFavoritesPerk: c } = (0, s.z)("useChannelMoveToCategory");
    if (__OVERLAY__ || !n || null == t || !c) return null;
    let [u, f] = (function (e) {
        let n = [],
            t = null;
        for (let i of e) null == i.id ? (t = i) : n.push(i);
        return [t, n];
    })(d.filter((e) => e.id !== (null == t ? void 0 : t.parentId)));
    function h(e) {
        null != t && (0, l.uA)(t.id, e);
    }
    return null == u && 0 === f.length
        ? null
        : (0, i.jsxs)(r.sNh, {
              id: "move-to-category",
              label: o.intl.string(o.t.FAplms),
              children: [
                  null != u &&
                      (0, i.jsx)(r.kSQ, {
                          children: (0, i.jsx)(r.sNh, {
                              id: "favorite-uncategorized",
                              label: u.name,
                              action: () => h(u.id),
                          }),
                      }),
                  f.length > 0 &&
                      (0, i.jsx)(r.kSQ, {
                          children: f.map((e) => {
                              let { id: n, name: t } = e;
                              return (0, i.jsx)(
                                  r.sNh,
                                  {
                                      id: "favorite-".concat(n),
                                      label: t,
                                      action: () => h(n),
                                  },
                                  n,
                              );
                          }),
                      }),
              ],
          });
}
