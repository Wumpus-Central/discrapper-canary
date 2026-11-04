var i = e(477900);
e(582128);
var r = e(855986),
    a = e(477782),
    l = e(177953),
    d = e(950305),
    s = e(147087),
    o = e(7909),
    u = e(780057),
    c = e(792996);
e.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, r.bG)([u.A], () => u.A.isInProgress());
            return (0, s.b)() && t.isThread()
                ? (0, i.jsx)(a.Dr, {
                      id: "summarize-thread",
                      label: n ? c.intl.string(c.t.oKECxB) : c.intl.string(c.t.EXfguE),
                      disabled: n,
                      loading: n,
                      action: () => o.A.summarizeThread(t),
                      children: n
                          ? null
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(a.Dr, {
                                        id: "summarize_thread_for_everyone",
                                        label: c.intl.string(c.t.eCzSdd),
                                        action: () => o.A.summarizeThread(t, !1),
                                        icon: l.n,
                                        leadingAccessory: { type: "icon", icon: l.n },
                                    }),
                                    (0, i.jsx)(a.Dr, {
                                        id: "summarize_thread_for_me",
                                        label: c.intl.string(c.t["HOe+Hq"]),
                                        action: () => o.A.summarizeThread(t),
                                        icon: d.UserIcon,
                                        leadingAccessory: { type: "icon", icon: d.UserIcon },
                                    }),
                                ],
                            }),
                  })
                : null;
        },
    },
);
