var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    l = n(261435),
    d = n(237997),
    c = n(438015),
    u = n(981631),
    h = n(544690);
class p extends s.Component {
    render() {
        let { keybind: e, notifications: t, position: n, locked: s } = this.props;
        if (n === u._vf.DISABLED) return null;
        let r = -1;
        return (0, i.jsx)('div', {
            className: a()(h.container, h[n]),
            children: t.map((t) =>
                s && t.status === u._1z.TIMED_OUT
                    ? null
                    : ((r += 1),
                      (0, i.jsx)(
                          c.Z,
                          {
                              index: r,
                              zIndex: 100 - r,
                              position: n,
                              notification: t,
                              keybind: e,
                              locked: s
                          },
                          t.id
                      ))
            )
        });
    }
}
t.Z = o.ZP.connectStores([l.Z, d.Z], () => ({
    notifications: l.Z.getNotifications(),
    position: d.Z.getNotificationPositionMode()
}))(p);
