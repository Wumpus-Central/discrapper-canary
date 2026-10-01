a.d(e, { A: () => N });
var t = a(477900),
    n = a(582128),
    i = a(503698),
    s = a.n(i),
    c = a(17928),
    r = a(289873),
    o = a(834730),
    d = a(734057),
    h = a(576705),
    v = a(450149),
    u = a(652215),
    g = a(375708),
    f = a(142893);
function A(l) {
    let { isLoading: e, noText: a, noImage: n, previewText: i, className: c } = l;
    return (0, t.jsx)("div", {
        className: s()(f.Hd, c),
        children: e
            ? (0, t.jsx)(r.y, {})
            : (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)("div", { className: s()(f.js, { [f.$0]: n }) }),
                      a
                          ? null
                          : (0, t.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: f.pY,
                                children: i ?? g.intl.string(g.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function N(l) {
    let { stream: e, className: a, noText: i = !1, noImage: s = !1 } = l,
        r = (0, c.bG)([d.A], () => d.A.getBasicChannel(e.channelId)),
        o = (0, c.bG)([h.A], () => null != r && h.A.canBasicChannel(u.hVb.CONNECT, r)),
        { previewUrl: N, isLoading: p } = (0, v.A)(e.guildId, e.channelId, e.ownerId),
        x = n.useRef(p ? null : N);
    n.useEffect(() => {
        p || (x.current = N);
    }, [N, p]);
    let w = null == N || p ? x.current : N;
    return null == w
        ? (0, t.jsx)(A, {
              className: a,
              isLoading: p,
              noText: i,
              noImage: s,
              previewText: o ? void 0 : g.intl.string(g.t.pgUTZC),
          })
        : (0, t.jsx)("div", {
              className: a,
              children: (0, t.jsx)("img", { src: w, alt: "", className: f.Sl, draggable: !1 }),
          });
}
