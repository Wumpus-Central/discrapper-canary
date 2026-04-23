"use strict";
n.d(t, { A: () => u }), n(801541);
var i = n(627968);
n(64700);
var s = n(889137),
    r = n(834730),
    l = n(546727),
    a = n(975169),
    o = n(794696),
    c = n(985018),
    d = n(731286);
function u(e) {
    let t,
        { username: n, suggestion: u, globalName: _, isUsernameFocused: h, onClickSuggestion: m } = e,
        g = (0, a.i)(n, !0, !0),
        p = n.length > 0;
    return (
        (t = p
            ? (0, s.YW)(g)
                  .with({ type: l.q.ERROR, message: s.P.select() }, (e) =>
                      (0, i.jsx)(r.E, { className: d.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: l.q.AVAILABLE, message: s.P.select() }, (e) =>
                      (0, i.jsx)(r.E, { className: d.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, i.jsx)(r.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: c.intl.string(c.t.z7c4bP),
                      }),
                  )
            : null != u && u.length > 0 && _.length > 0
              ? (0, i.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: c.intl.format(c.t.nDGqqq, { suggestion: u, nameOnClick: m }),
                })
              : (0, i.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: c.intl.string(c.t.z7c4bP),
                })),
        (0, i.jsx)(o.A, { show: (p && g?.type === l.q.ERROR) || h, top: -12, bottom: 20, children: t })
    );
}
