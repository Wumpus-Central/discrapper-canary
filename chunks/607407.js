"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(734057),
    c = n(576705),
    d = n(450149),
    _ = n(652215),
    f = n(985018),
    p = n(571283);
function h(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: a, className: o } = e;
    return (0, r.jsx)("div", {
        className: s()(p.Hd, o),
        children: t
            ? (0, r.jsx)(l.y$y, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", { className: s()(p.js, { [p.$0]: i }) }),
                      n
                          ? null
                          : (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: p.pY,
                                children: a ?? f.intl.string(f.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function m(e) {
    let { stream: t, className: n, noText: a = !1, noImage: s = !1 } = e,
        l = (0, o.bG)([u.A], () => u.A.getBasicChannel(t.channelId)),
        m = (0, o.bG)([c.A], () => null != l && c.A.canBasicChannel(_.hVb.CONNECT, l)),
        { previewUrl: g, isLoading: E } = (0, d.A)(t.guildId, t.channelId, t.ownerId),
        A = i.useRef(E ? null : g);
    i.useEffect(() => {
        E || (A.current = g);
    }, [g, E]);
    let I = null == g || E ? A.current : g;
    return null == I
        ? (0, r.jsx)(h, {
              className: n,
              isLoading: E,
              noText: a,
              noImage: s,
              previewText: m ? void 0 : f.intl.string(f.t.pgUTZC),
          })
        : (0, r.jsx)("div", { className: n, children: (0, r.jsx)("img", { src: I, alt: "", className: p.Sl }) });
}
