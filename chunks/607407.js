"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(289873),
    c = n(834730),
    u = n(734057),
    d = n(576705),
    h = n(450149),
    m = n(652215),
    p = n(985018),
    f = n(341250);
function g(e) {
    let { isLoading: t, noText: n, noImage: l, previewText: s, className: a } = e;
    return (0, i.jsx)("div", {
        className: r()(f.Hd, a),
        children: t
            ? (0, i.jsx)(o.y, {})
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: r()(f.js, { [f.$0]: l }) }),
                      n
                          ? null
                          : (0, i.jsx)(c.E, {
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
    let { stream: t, className: n, noText: s = !1, noImage: r = !1 } = e,
        o = (0, a.bG)([u.A], () => u.A.getBasicChannel(t.channelId)),
        c = (0, a.bG)([d.A], () => null != o && d.A.canBasicChannel(m.hVb.CONNECT, o)),
        { previewUrl: _, isLoading: x } = (0, h.A)(t.guildId, t.channelId, t.ownerId),
        A = l.useRef(x ? null : _);
    l.useEffect(() => {
        x || (A.current = _);
    }, [_, x]);
    let C = null == _ || x ? A.current : _;
    return null == C
        ? (0, i.jsx)(g, {
              className: n,
              isLoading: x,
              noText: s,
              noImage: r,
              previewText: c ? void 0 : p.intl.string(p.t.pgUTZC),
          })
        : (0, i.jsx)("div", { className: n, children: (0, i.jsx)("img", { src: C, alt: "", className: f.Sl }) });
}
