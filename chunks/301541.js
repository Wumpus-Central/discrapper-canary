var n = t(477900);
t(582128);
var s = t(855986),
    a = t(477782),
    c = t(192308),
    d = t(308528),
    l = t(267102),
    r = t(474397),
    p = t(46653),
    u = t(652215),
    o = t(792996);
t.d(
    i,
    {},
    {
        A: function (e, i, t) {
            let h = (0, l.aL)();
            return (0, s.bG)([p.default], () => p.default.getId() === e) || i === u.BRT.POPOUT
                ? null
                : (0, n.jsx)(a.Dr, {
                      id: "message-user",
                      label: o.intl.string(o.t.OAJQlP),
                      action: () => {
                          ((0, r.A)(i, !0),
                              d.A.openPrivateChannel({ recipientIds: e }),
                              h.dispatch(u.jej.POPOUT_CLOSE),
                              (0, c.s7)());
                      },
                      icon: t,
                      leadingAccessory: null != t ? { type: "icon", icon: t } : void 0,
                  });
        },
    },
);
