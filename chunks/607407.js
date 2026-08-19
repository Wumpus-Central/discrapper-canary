"use strict";
n.d(t, { A: () => x });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(289873),
    u = n(834730),
    c = n(734057),
    d = n(576705),
    h = n(450149),
    m = n(652215),
    f = n(375708),
    p = n(450202);
function g(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: s, className: a } = e;
    return (0, l.jsx)("div", {
        className: r()(p.Hd, a),
        children: t
            ? (0, l.jsx)(o.y, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: r()(p.js, { [p.$0]: i }) }),
                      n
                          ? null
                          : (0, l.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: p.pY,
                                children: s ?? f.intl.string(f.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function x(e) {
    let { stream: t, className: n, noText: s = !1, noImage: r = !1 } = e,
        o = (0, a.bG)([c.A], () => c.A.getBasicChannel(t.channelId)),
        u = (0, a.bG)([d.A], () => null != o && d.A.canBasicChannel(m.hVb.CONNECT, o)),
        { previewUrl: x, isLoading: A } = (0, h.A)(t.guildId, t.channelId, t.ownerId),
        E = i.useRef(A ? null : x);
    i.useEffect(() => {
        A || (E.current = x);
    }, [x, A]);
    let C = null == x || A ? E.current : x;
    return null == C
        ? (0, l.jsx)(g, {
              className: n,
              isLoading: A,
              noText: s,
              noImage: r,
              previewText: u ? void 0 : f.intl.string(f.t.pgUTZC),
          })
        : (0, l.jsx)("div", {
              className: n,
              children: (0, l.jsx)("img", { src: C, alt: "", className: p.Sl, draggable: !1 }),
          });
}
