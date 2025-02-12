n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    a = n(481060),
    r = n(518084),
    o = n(981631),
    d = n(388032),
    c = n(183298);
let u = function (e) {
    let t;
    let { title: n, header: s, children: u, renderSettings: h, onDragStart: p } = e;
    return (
        (t =
            null != n
                ? (0, i.jsxs)(r.ZP.Bar, {
                      className: l()(c.header, c.draggableStartArea),
                      onMouseDown: p,
                      children: [
                          (0, i.jsx)(r.ZP.Content, {
                              className: l()(c.headerTitle, c.draggableStartArea),
                              dynamicSize: !0,
                              children: n
                          }),
                          (0, i.jsx)(r.ZP.Content, {
                              children: (0, i.jsx)(a.yRy, {
                                  position: 'right',
                                  renderPopout: null != h ? h : o.dG4,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, i.jsx)(r.ZP.Icon, {
                                          ...e,
                                          icon: a.ewm,
                                          label: d.intl.string(d.t['3D5yo6'])
                                      })
                              })
                          })
                      ]
                  })
                : s),
        (0, i.jsxs)('div', {
            className: c.sidebar,
            children: [
                t,
                (0, i.jsx)('div', {
                    className: c.children,
                    children: u
                })
            ]
        })
    );
};
