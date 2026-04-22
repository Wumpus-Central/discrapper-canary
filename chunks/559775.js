"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(942381),
    o = n(541952),
    c = n(151271),
    u = n(545428),
    d = n(698279),
    h = n(985018),
    m = n(266599);
let p = l.memo(
    l.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: p } = e,
            [f, g, _, x] = (0, c.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], a.x),
            A = f === d.kx.STICKER && x === s && _ === p.id,
            C = l.useCallback(() => {
                (0, c.r$)(d.kx.STICKER, s, p.id);
            }, [s, p.id]),
            { Component: E, events: I, play: v } = (0, o.g)();
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: r()(d.VQ, m.UD),
                  ref: t,
                  children: (0, i.jsx)(u.A, {
                      className: r()(m.x6, m.KE),
                      ...I,
                      onClick: () => {
                          C(), v();
                      },
                      isActive: A,
                      "aria-label": h.intl.string(h.t.rZpidU),
                      "aria-expanded": A,
                      "aria-haspopup": "dialog",
                      "aria-controls": g,
                      sparkle: !1,
                      children: (0, i.jsx)(E, { size: "refresh_sm", color: "currentColor" }),
                  }),
              });
    }),
);
