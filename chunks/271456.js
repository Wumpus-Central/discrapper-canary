n.d(e, { A: () => u });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(147087),
    s = n(867455),
    d = n(780057),
    o = n(985018);
function u(t) {
    let e = (0, r.bG)([d.A], () => d.A.isInProgress());
    return (0, a.b)() && t.isThread()
        ? (0, i.jsx)(l.Drp, {
              id: "summarize-thread",
              label: e ? o.intl.string(o.t.oKECxB) : o.intl.string(o.t.EXfguE),
              disabled: e,
              loading: e,
              action: () => s.A.summarizeThread(t),
              children: e
                  ? null
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.Drp, {
                                id: "summarize_thread_for_everyone",
                                label: o.intl.string(o.t.eCzSdd),
                                action: () => s.A.summarizeThread(t, !1),
                                icon: l.nFg,
                                leadingAccessory: { type: "icon", icon: l.nFg },
                            }),
                            (0, i.jsx)(l.Drp, {
                                id: "summarize_thread_for_me",
                                label: o.intl.string(o.t["HOe+Hq"]),
                                action: () => s.A.summarizeThread(t),
                                icon: l.nys,
                                leadingAccessory: { type: "icon", icon: l.nys },
                            }),
                        ],
                    }),
          })
        : null;
}
