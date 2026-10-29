a.d(e, { A: () => N });
var t = a(477900),
    n = a(582128),
    i = a(503698),
    s = a.n(i),
    c = a(17928),
    r = a(289873),
    d = a(834730),
    o = a(734057),
    h = a(576705),
    u = a(450149),
    v = a(652215),
    g = a(105292),
    f = a(142893);
function A(l) {
    let { isLoading: e, noText: a, noImage: n, previewText: i, className: c } = l;
    return (0, t.jsx)("div", {
        className: s()(f.Hd, c),
        children: e
            ? (0, t.jsx)(r.y, {})
            : (0, t.jsxs)(t.Fragment, {
                  children: [
                      n ? null : (0, t.jsx)("div", { className: f.js }),
                      a
                          ? null
                          : (0, t.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                className: f.pY,
                                children: i ?? g.intl.string(g.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function N(l) {
    let { stream: e, className: a, noText: i = !1, noImage: s = !1 } = l,
        r = (0, c.bG)([o.A], () => o.A.getBasicChannel(e.channelId)),
        d = (0, c.bG)([h.A], () => null != r && h.A.canBasicChannel(v.hVb.CONNECT, r)),
        { previewUrl: N, isLoading: x } = (0, u.A)(e.guildId, e.channelId, e.ownerId),
        p = n.useRef(x ? null : N);
    n.useEffect(() => {
        x || (p.current = N);
    }, [N, x]);
    let w = null == N || x ? p.current : N;
    return null == w
        ? (0, t.jsx)(A, {
              className: a,
              isLoading: x,
              noText: i,
              noImage: s,
              previewText: d ? void 0 : g.intl.string(g.t.pgUTZC),
          })
        : (0, t.jsx)("div", {
              className: a,
              children: (0, t.jsx)("img", { src: w, alt: "", className: f.Sl, draggable: !1 }),
          });
}
