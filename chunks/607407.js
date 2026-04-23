"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(289873),
    u = n(834730),
    c = n(734057),
    d = n(576705),
    _ = n(450149),
    f = n(652215),
    p = n(985018),
    h = n(341250);
function E(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: s, className: o } = e;
    return (0, r.jsx)("div", {
        className: a()(h.Hd, o),
        children: t
            ? (0, r.jsx)(l.y, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", { className: a()(h.js, { [h.$0]: i }) }),
                      n
                          ? null
                          : (0, r.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: h.pY,
                                children: s ?? p.intl.string(p.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function m(e) {
    let { stream: t, className: n, noText: s = !1, noImage: a = !1 } = e,
        l = (0, o.bG)([c.A], () => c.A.getBasicChannel(t.channelId)),
        u = (0, o.bG)([d.A], () => null != l && d.A.canBasicChannel(f.hVb.CONNECT, l)),
        { previewUrl: m, isLoading: g } = (0, _.A)(t.guildId, t.channelId, t.ownerId),
        A = i.useRef(g ? null : m);
    i.useEffect(() => {
        g || (A.current = m);
    }, [m, g]);
    let I = null == m || g ? A.current : m;
    return null == I
        ? (0, r.jsx)(E, {
              className: n,
              isLoading: g,
              noText: s,
              noImage: a,
              previewText: u ? void 0 : p.intl.string(p.t.pgUTZC),
          })
        : (0, r.jsx)("div", { className: n, children: (0, r.jsx)("img", { src: I, alt: "", className: h.Sl }) });
}
