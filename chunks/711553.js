var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    o = n(518084),
    l = n(981631),
    d = n(388032),
    c = n(624414);
t.Z = function (e) {
    let t;
    let { title: n, header: s, children: u, renderSettings: h, onDragStart: p } = e;
    return (
        (t =
            null != n
                ? (0, i.jsxs)(o.ZP.Bar, {
                      className: r()(c.header, c.draggableStartArea),
                      onMouseDown: p,
                      children: [
                          (0, i.jsx)(o.ZP.Content, {
                              className: r()(c.headerTitle, c.draggableStartArea),
                              dynamicSize: !0,
                              children: n
                          }),
                          (0, i.jsx)(o.ZP.Content, {
                              children: (0, i.jsx)(a.Popout, {
                                  position: 'right',
                                  renderPopout: null != h ? h : l.dG4,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, i.jsx)(o.ZP.Icon, {
                                          ...e,
                                          icon: a.SettingsIcon,
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
