a.d(l, { A: () => N });
var t = a(477900),
    n = a(582128),
    i = a(503698),
    s = a.n(i),
    r = a(17928),
    c = a(289873),
    d = a(834730),
    o = a(734057),
    h = a(576705),
    u = a(450149),
    v = a(652215),
    f = a(660183),
    g = a(142893);
function A(e) {
    let { isLoading: l, noText: a, noImage: n, previewText: i, className: r } = e;
    return (0, t.jsx)("div", {
        className: s()(g.Hd, r),
        children: l
            ? (0, t.jsx)(c.y, {})
            : (0, t.jsxs)(t.Fragment, {
                  children: [
                      n ? null : (0, t.jsx)("div", { className: g.js }),
                      a
                          ? null
                          : (0, t.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                className: g.pY,
                                children: i ?? f.intl.string(f.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function N(e) {
    let { stream: l, className: a, noText: i = !1, noImage: s = !1 } = e,
        c = (0, r.bG)([o.A], () => o.A.getBasicChannel(l.channelId)),
        d = (0, r.bG)([h.A], () => null != c && h.A.canBasicChannel(v.hVb.CONNECT, c)),
        { previewUrl: N, isLoading: x } = (0, u.A)(l.guildId, l.channelId, l.ownerId),
        p = n.useRef(x ? null : N);
    n.useEffect(() => {
        x || (p.current = N);
    }, [N, x]);
    let C = null == N || x ? p.current : N;
    return null == C
        ? (0, t.jsx)(A, {
              className: a,
              isLoading: x,
              noText: i,
              noImage: s,
              previewText: d ? void 0 : f.intl.string(f.t.pgUTZC),
          })
        : (0, t.jsx)("div", {
              className: a,
              children: (0, t.jsx)("img", { src: C, alt: "", className: g.Sl, draggable: !1 }),
          });
}
