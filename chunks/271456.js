n.d(e, { A: () => h });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(477782),
    l = n(177953),
    d = n(950305),
    s = n(147087),
    o = n(867455),
    u = n(780057),
    c = n(375708);
function h(t) {
    let e = (0, r.bG)([u.A], () => u.A.isInProgress());
    return (0, s.b)() && t.isThread()
        ? (0, i.jsx)(a.Dr, {
              id: "summarize-thread",
              label: e ? c.intl.string(c.t.oKECxB) : c.intl.string(c.t.EXfguE),
              disabled: e,
              loading: e,
              action: () => o.A.summarizeThread(t),
              children: e
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
                                icon: d.n,
                                leadingAccessory: { type: "icon", icon: d.n },
                            }),
                        ],
                    }),
          })
        : null;
}
