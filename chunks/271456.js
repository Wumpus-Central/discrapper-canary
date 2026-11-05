var i = t(477900);
t(582128);
var r = t(855986),
    l = t(477782),
    a = t(177953),
    o = t(950305),
    d = t(147087),
    s = t(7909),
    u = t(780057),
    c = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let e = (0, r.bG)([u.A], () => u.A.isInProgress());
            return (0, d.b)() && n.isThread()
                ? (0, i.jsx)(l.Dr, {
                      id: "summarize-thread",
                      label: e ? c.intl.string(c.t.oKECxB) : c.intl.string(c.t.EXfguE),
                      disabled: e,
                      loading: e,
                      action: () => s.A.summarizeThread(n),
                      children: e
                          ? null
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(l.Dr, {
                                        id: "summarize_thread_for_everyone",
                                        label: c.intl.string(c.t.eCzSdd),
                                        action: () => s.A.summarizeThread(n, !1),
                                        icon: a.GroupIcon,
                                        leadingAccessory: { type: "icon", icon: a.GroupIcon },
                                    }),
                                    (0, i.jsx)(l.Dr, {
                                        id: "summarize_thread_for_me",
                                        label: c.intl.string(c.t["HOe+Hq"]),
                                        action: () => s.A.summarizeThread(n),
                                        icon: o.UserIcon,
                                        leadingAccessory: { type: "icon", icon: o.UserIcon },
                                    }),
                                ],
                            }),
                  })
                : null;
        },
    },
);
