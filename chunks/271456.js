i.d(n, {
    A: () => u,
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(147087),
    d = i(867455),
    o = i(780057),
    s = i(985018);

function u(t) {
    let n = (0, r.bG)([o.A], () => o.A.isInProgress());
    return (0, a.b)() && t.isThread()
        ? (0, e.jsx)(l.Drp, {
              id: "summarize-thread",
              label: n ? s.intl.string(s.t.oKECxB) : s.intl.string(s.t.EXfguE),
              disabled: n,
              loading: n,
              action: () => d.A.summarizeThread(t),
              children: n
                  ? null
                  : (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(l.Drp, {
                                id: "summarize_thread_for_everyone",
                                label: s.intl.string(s.t.eCzSdd),
                                action: () => d.A.summarizeThread(t, !1),
                                icon: l.nFg,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: l.nFg,
                                },
                            }),
                            (0, e.jsx)(l.Drp, {
                                id: "summarize_thread_for_me",
                                label: s.intl.string(s.t["HOe+Hq"]),
                                action: () => d.A.summarizeThread(t),
                                icon: l.nys,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: l.nys,
                                },
                            }),
                        ],
                    }),
          })
        : null;
}
