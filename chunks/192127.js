e.d(n, { Z: () => u });
var i = e(951288);
e(647438);
var a = e(442837),
    l = e(481060),
    r = e(39952),
    s = e(346479),
    o = e(286934),
    d = e(388032);
function u(t) {
    let n = (0, a.e7)([o.Z], () => o.Z.isInProgress());
    return (0, r.o)() && t.isThread()
        ? (0, i.jsx)(l.sNh, {
              id: "summarize-thread",
              label: n ? d.intl.string(d.t.oKECxB) : d.intl.string(d.t.EXfguE),
              disabled: n,
              icon: n ? (0, i.jsx)(l.$jN, { type: l.RAz.PULSING_ELLIPSIS }) : null,
              action: () => s.Z.summarizeThread(t),
              children: n
                  ? null
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.sNh, {
                                id: "summarize_thread_for_everyone",
                                label: d.intl.string(d.t.eCzSdd),
                                action: () => s.Z.summarizeThread(t, !1),
                                icon: (0, i.jsx)(l.BFJ, { size: "sm" }),
                            }),
                            (0, i.jsx)(l.sNh, {
                                id: "summarize_thread_for_me",
                                label: d.intl.string(d.t["HOe+Hq"]),
                                action: () => s.Z.summarizeThread(t),
                                icon: (0, i.jsx)(l.tBG, { size: "sm" }),
                            }),
                        ],
                    }),
          })
        : null;
}
