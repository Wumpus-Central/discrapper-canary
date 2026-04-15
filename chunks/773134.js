"use strict";
n.d(t, { A: () => u }), n(801541);
var i = n(627968);
n(64700);
var s = n(889137),
    r = n(397927),
    l = n(546727),
    a = n(975169),
    o = n(794696),
    c = n(985018),
    d = n(135622);
function u(e) {
    let t,
        { username: n, suggestion: u, globalName: h, isUsernameFocused: _, onClickSuggestion: p } = e,
        g = (0, a.i)(n, !0, !0),
        m = n.length > 0;
    return (
        (t = m
            ? (0, s.YW)(g)
                  .with({ type: l.q.ERROR, message: s.P.select() }, (e) =>
                      (0, i.jsx)(r.Text, { className: d.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: l.q.AVAILABLE, message: s.P.select() }, (e) =>
                      (0, i.jsx)(r.Text, { className: d.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, i.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: c.intl.string(c.t.z7c4bP),
                      }),
                  )
            : null != u && u.length > 0 && h.length > 0
              ? (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: c.intl.format(c.t.nDGqqq, { suggestion: u, nameOnClick: p }),
                })
              : (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: c.intl.string(c.t.z7c4bP),
                })),
        (0, i.jsx)(o.A, { show: (m && g?.type === l.q.ERROR) || _, top: -12, bottom: 20, children: t })
    );
}
