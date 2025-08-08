e.d(n, { Z: () => u }), e(539854), e(388685);
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(117984),
    s = e(593214),
    a = e(362658),
    d = e(388032);
function u(t) {
    let n = (0, s.Mt)(),
        e = (0, s.s4)(t.id),
        u = (0, s.zv)(),
        { isFavoritesPerk: o } = (0, a.z)("useChannelMoveToCategory");
    if (__OVERLAY__ || !n || null == e || !o) return null;
    let [c, f] = (function (t) {
        let n = [],
            e = null;
        for (let i of t) null == i.id ? (e = i) : n.push(i);
        return [e, n];
    })(u.filter((t) => t.id !== (null == e ? void 0 : e.parentId)));
    function g(t) {
        null != e && (0, l.uA)(e.id, t);
    }
    return null == c && 0 === f.length
        ? null
        : (0, i.jsxs)(r.sNh, {
              id: "move-to-category",
              label: d.intl.string(d.t.FAplmp),
              children: [
                  null != c &&
                      (0, i.jsx)(r.kSQ, {
                          children: (0, i.jsx)(r.sNh, {
                              id: "favorite-uncategorized",
                              label: c.name,
                              action: () => g(c.id),
                          }),
                      }),
                  f.length > 0 &&
                      (0, i.jsx)(r.kSQ, {
                          children: f.map((t) => {
                              let { id: n, name: e } = t;
                              return (0, i.jsx)(
                                  r.sNh,
                                  {
                                      id: "favorite-".concat(n),
                                      label: e,
                                      action: () => g(n),
                                  },
                                  n,
                              );
                          }),
                      }),
              ],
          });
}
