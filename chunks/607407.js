a.d(l, { A: () => N });
var n = a(477900),
    t = a(582128),
    i = a(503698),
    s = a.n(i),
    r = a(17928),
    c = a(289873),
    o = a(834730),
    d = a(734057),
    h = a(576705),
    u = a(450149),
    v = a(652215),
    g = a(660183),
    f = a(142893);
function A(e) {
    let { isLoading: l, noText: a, noImage: t, previewText: i, className: r } = e;
    return (0, n.jsx)("div", {
        className: s()(f.Hd, r),
        children: l
            ? (0, n.jsx)(c.y, {})
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", { className: s()(f.js, { [f.$0]: t }) }),
                      a
                          ? null
                          : (0, n.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: f.pY,
                                children: i ?? g.intl.string(g.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function N(e) {
    let { stream: l, className: a, noText: i = !1, noImage: s = !1 } = e,
        c = (0, r.bG)([d.A], () => d.A.getBasicChannel(l.channelId)),
        o = (0, r.bG)([h.A], () => null != c && h.A.canBasicChannel(v.hVb.CONNECT, c)),
        { previewUrl: N, isLoading: p } = (0, u.A)(l.guildId, l.channelId, l.ownerId),
        x = t.useRef(p ? null : N);
    t.useEffect(() => {
        p || (x.current = N);
    }, [N, p]);
    let C = null == N || p ? x.current : N;
    return null == C
        ? (0, n.jsx)(A, {
              className: a,
              isLoading: p,
              noText: i,
              noImage: s,
              previewText: o ? void 0 : g.intl.string(g.t.pgUTZC),
          })
        : (0, n.jsx)("div", {
              className: a,
              children: (0, n.jsx)("img", { src: C, alt: "", className: f.Sl, draggable: !1 }),
          });
}
