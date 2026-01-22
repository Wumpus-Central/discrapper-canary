n.d(t, { A: () => d }), n(321073), n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(422258),
    a = n(93055),
    o = n(616075),
    s = n(985018);
function d(e) {
    let t = (0, a.Fe)(),
        n = (0, a.Af)(e.id),
        d = (0, a.Rm)(),
        { isFavoritesPerk: c } = (0, o.l)("useChannelMoveToCategory");
    if (__OVERLAY__ || !t || null == n || !c) return null;
    let [u, A] = (function (e) {
        let t = [],
            n = null;
        for (let r of e) null == r.id ? (n = r) : t.push(r);
        return [n, t];
    })(d.filter((e) => e.id !== (null == n ? void 0 : n.parentId)));
    function f(e) {
        null != n && (0, l.JD)(n.id, e);
    }
    return null == u && 0 === A.length
        ? null
        : (0, r.jsxs)(i.Drp, {
              id: "move-to-category",
              label: s.intl.string(s.t.FAplms),
              children: [
                  null != u &&
                      (0, r.jsx)(i.rXV, {
                          children: (0, r.jsx)(i.Drp, {
                              id: "favorite-uncategorized",
                              label: u.name,
                              action: () => f(u.id),
                          }),
                      }),
                  A.length > 0 &&
                      (0, r.jsx)(i.rXV, {
                          children: A.map((e) => {
                              let { id: t, name: n } = e;
                              return (0, r.jsx)(
                                  i.Drp,
                                  {
                                      id: "favorite-".concat(t),
                                      label: n,
                                      action: () => f(t),
                                  },
                                  t,
                              );
                          }),
                      }),
              ],
          });
}
