i.d(n, {
    A: () => u,
});
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(147087),
    d = i(867455),
    s = i(780057),
    o = i(985018);

function u(t) {
    let n = (0, r.bG)([s.A], () => s.A.isInProgress());
    return (0, a.b)() && t.isThread()
        ? (0, e.jsx)(l.Drp, {
              id: "summarize-thread",
              label: n ? o.intl.string(o.t.oKECxB) : o.intl.string(o.t.EXfguE),
              disabled: n,
              icon: n
                  ? (0, e.jsx)(l.y$y, {
                        type: l.tVU.PULSING_ELLIPSIS,
                    })
                  : null,
              action: () => d.A.summarizeThread(t),
              children: n
                  ? null
                  : (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(l.Drp, {
                                id: "summarize_thread_for_everyone",
                                label: o.intl.string(o.t.eCzSdd),
                                action: () => d.A.summarizeThread(t, !1),
                                icon: (0, e.jsx)(l.nFg, {
                                    size: "sm",
                                }),
                            }),
                            (0, e.jsx)(l.Drp, {
                                id: "summarize_thread_for_me",
                                label: o.intl.string(o.t["HOe+Hq"]),
                                action: () => d.A.summarizeThread(t),
                                icon: (0, e.jsx)(l.nys, {
                                    size: "sm",
                                }),
                            }),
                        ],
                    }),
          })
        : null;
}
