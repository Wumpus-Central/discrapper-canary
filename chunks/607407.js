"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(289873),
    d = n(834730),
    _ = n(734057),
    u = n(576705),
    c = n(450149),
    E = n(652215),
    h = n(985018),
    m = n(341250);
function f(e) {
    let { isLoading: t, noText: n, noImage: r, previewText: s, className: o } = e;
    return (0, i.jsx)("div", {
        className: a()(m.Hd, o),
        children: t
            ? (0, i.jsx)(l.y, {})
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: a()(m.js, { [m.$0]: r }) }),
                      n
                          ? null
                          : (0, i.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: m.pY,
                                children: s ?? h.intl.string(h.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function g(e) {
    let { stream: t, className: n, noText: s = !1, noImage: a = !1 } = e,
        l = (0, o.bG)([_.A], () => _.A.getBasicChannel(t.channelId)),
        d = (0, o.bG)([u.A], () => null != l && u.A.canBasicChannel(E.hVb.CONNECT, l)),
        { previewUrl: g, isLoading: p } = (0, c.A)(t.guildId, t.channelId, t.ownerId),
        A = r.useRef(p ? null : g);
    r.useEffect(() => {
        p || (A.current = g);
    }, [g, p]);
    let I = null == g || p ? A.current : g;
    return null == I
        ? (0, i.jsx)(f, {
              className: n,
              isLoading: p,
              noText: s,
              noImage: a,
              previewText: d ? void 0 : h.intl.string(h.t.pgUTZC),
          })
        : (0, i.jsx)("div", { className: n, children: (0, i.jsx)("img", { src: I, alt: "", className: m.Sl }) });
}
