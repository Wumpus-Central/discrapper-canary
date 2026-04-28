"use strict";
n.d(t, { A: () => _ });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(289873),
    c = n(834730),
    u = n(734057),
    d = n(576705),
    h = n(450149),
    m = n(652215),
    p = n(985018),
    f = n(341250);
function g(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: s, className: r } = e;
    return (0, l.jsx)("div", {
        className: a()(f.Hd, r),
        children: t
            ? (0, l.jsx)(o.y, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: a()(f.js, { [f.$0]: i }) }),
                      n
                          ? null
                          : (0, l.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: f.pY,
                                children: s ?? p.intl.string(p.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function _(e) {
    let { stream: t, className: n, noText: s = !1, noImage: a = !1 } = e,
        o = (0, r.bG)([u.A], () => u.A.getBasicChannel(t.channelId)),
        c = (0, r.bG)([d.A], () => null != o && d.A.canBasicChannel(m.hVb.CONNECT, o)),
        { previewUrl: _, isLoading: x } = (0, h.A)(t.guildId, t.channelId, t.ownerId),
        C = i.useRef(x ? null : _);
    i.useEffect(() => {
        x || (C.current = _);
    }, [_, x]);
    let A = null == _ || x ? C.current : _;
    return null == A
        ? (0, l.jsx)(g, {
              className: n,
              isLoading: x,
              noText: s,
              noImage: a,
              previewText: c ? void 0 : p.intl.string(p.t.pgUTZC),
          })
        : (0, l.jsx)("div", { className: n, children: (0, l.jsx)("img", { src: A, alt: "", className: f.Sl }) });
}
