i.d(n, { A: () => A });
var e = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    a = i(177953),
    s = i(950305),
    d = i(147087),
    o = i(867455),
    u = i(780057),
    c = i(985018);
function A(t) {
    let n = (0, l.bG)([u.A], () => u.A.isInProgress());
    return (0, d.b)() && t.isThread()
        ? (0, e.jsx)(r.Dr, {
              id: "summarize-thread",
              label: n ? c.intl.string(c.t.oKECxB) : c.intl.string(c.t.EXfguE),
              disabled: n,
              loading: n,
              action: () => o.A.summarizeThread(t),
              children: n
                  ? null
                  : (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(r.Dr, {
                                id: "summarize_thread_for_everyone",
                                label: c.intl.string(c.t.eCzSdd),
                                action: () => o.A.summarizeThread(t, !1),
                                icon: a.n,
                                leadingAccessory: { type: "icon", icon: a.n },
                            }),
                            (0, e.jsx)(r.Dr, {
                                id: "summarize_thread_for_me",
                                label: c.intl.string(c.t["HOe+Hq"]),
                                action: () => o.A.summarizeThread(t),
                                icon: s.n,
                                leadingAccessory: { type: "icon", icon: s.n },
                            }),
                        ],
                    }),
          })
        : null;
}
