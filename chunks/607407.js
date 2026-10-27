a.d(l, { A: () => N });
var n = a(477900),
    t = a(582128),
    i = a(503698),
    s = a.n(i),
    r = a(17928),
    d = a(289873),
    c = a(834730),
    o = a(734057),
    h = a(576705),
    u = a(450149),
    v = a(652215),
    g = a(105292),
    f = a(142893);
function A(e) {
    let { isLoading: l, noText: a, noImage: t, previewText: i, className: r } = e;
    return (0, n.jsx)("div", {
        className: s()(f.Hd, r),
        children: l
            ? (0, n.jsx)(d.y, {})
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      t ? null : (0, n.jsx)("div", { className: f.js }),
                      a
                          ? null
                          : (0, n.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                className: f.pY,
                                children: i ?? g.intl.string(g.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function N(e) {
    let { stream: l, className: a, noText: i = !1, noImage: s = !1 } = e,
        d = (0, r.bG)([o.A], () => o.A.getBasicChannel(l.channelId)),
        c = (0, r.bG)([h.A], () => null != d && h.A.canBasicChannel(v.hVb.CONNECT, d)),
        { previewUrl: N, isLoading: C } = (0, u.A)(l.guildId, l.channelId, l.ownerId),
        m = t.useRef(C ? null : N);
    t.useEffect(() => {
        C || (m.current = N);
    }, [N, C]);
    let w = null == N || C ? m.current : N;
    return null == w
        ? (0, n.jsx)(A, {
              className: a,
              isLoading: C,
              noText: i,
              noImage: s,
              previewText: c ? void 0 : g.intl.string(g.t.pgUTZC),
          })
        : (0, n.jsx)("div", {
              className: a,
              children: (0, n.jsx)("img", { src: w, alt: "", className: f.Sl, draggable: !1 }),
          });
}
