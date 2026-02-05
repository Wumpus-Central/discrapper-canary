t.d(e, { A: () => u }), t(321073);
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(422258),
    a = t(93055),
    d = t(616075),
    s = t(985018);
function u(n) {
    let e = (0, a.Fe)(),
        t = (0, a.Af)(n.id),
        u = (0, a.Rm)(),
        { isFavoritesPerk: c } = (0, d.l)("useChannelMoveToCategory");
    if (__OVERLAY__ || !e || null == t || !c) return null;
    let [o, A] = (function (n) {
        let e = [],
            t = null;
        for (let i of n) null == i.id ? (t = i) : e.push(i);
        return [t, e];
    })(u.filter((n) => n.id !== t?.parentId));
    function h(n) {
        null != t && (0, l.JD)(t.id, n);
    }
    return null == o && 0 === A.length
        ? null
        : (0, i.jsxs)(r.Drp, {
              id: "move-to-category",
              label: s.intl.string(s.t.FAplms),
              children: [
                  null != o &&
                      (0, i.jsx)(r.rXV, {
                          children: (0, i.jsx)(r.Drp, {
                              id: "favorite-uncategorized",
                              label: o.name,
                              action: () => h(o.id),
                          }),
                      }),
                  A.length > 0 &&
                      (0, i.jsx)(r.rXV, {
                          children: A.map((n) => {
                              let { id: e, name: t } = n;
                              return (0, i.jsx)(r.Drp, { id: `favorite-${e}`, label: t, action: () => h(e) }, e);
                          }),
                      }),
              ],
          });
}
