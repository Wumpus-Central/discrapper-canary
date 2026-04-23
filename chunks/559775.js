"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(942381),
    l = n(541952),
    u = n(151271),
    c = n(545428),
    d = n(698279),
    _ = n(985018),
    f = n(266599);
let p = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: s, channel: p } = e,
            [h, E, m, g] = (0, u.RQ)((e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType], o.x),
            A = h === d.kx.STICKER && g === s && m === p.id,
            I = i.useCallback(() => {
                (0, u.r$)(d.kx.STICKER, s, p.id);
            }, [s, p.id]),
            { Component: T, events: S, play: y } = (0, l.g)();
        return n
            ? null
            : (0, r.jsx)("div", {
                  className: a()(d.VQ, f.UD),
                  ref: t,
                  children: (0, r.jsx)(c.A, {
                      className: a()(f.x6, f.KE),
                      ...S,
                      onClick: () => {
                          I(), y();
                      },
                      isActive: A,
                      "aria-label": _.intl.string(_.t.rZpidU),
                      "aria-expanded": A,
                      "aria-haspopup": "dialog",
                      "aria-controls": E,
                      sparkle: !1,
                      children: (0, r.jsx)(T, { size: "refresh_sm", color: "currentColor" }),
                  }),
              });
    }),
);
