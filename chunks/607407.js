a.d(e, { A: () => A });
var t = a(477900),
    n = a(582128),
    s = a(503698),
    i = a.n(s),
    c = a(17928),
    r = a(289873),
    d = a(834730),
    o = a(734057),
    h = a(576705),
    u = a(450149),
    v = a(652215),
    g = a(105292),
    f = a(142893);
function N(l) {
    let { isLoading: e, noText: a, noImage: n, previewText: s, className: c } = l;
    return (0, t.jsx)("div", {
        className: i()(f.Hd, c),
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
                                children: s ?? g.intl.string(g.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function A(l) {
    let { stream: e, className: a, noText: s = !1, noImage: i = !1 } = l,
        r = (0, c.bG)([o.A], () => o.A.getBasicChannel(e.channelId)),
        d = (0, c.bG)([h.A], () => null != r && h.A.canBasicChannel(v.hVb.CONNECT, r)),
        { previewUrl: A, isLoading: p } = (0, u.A)(e.guildId, e.channelId, e.ownerId),
        x = n.useRef(p ? null : A);
    n.useEffect(() => {
        p || (x.current = A);
    }, [A, p]);
    let m = null == A || p ? x.current : A;
    return null == m
        ? (0, t.jsx)(N, {
              className: a,
              isLoading: p,
              noText: s,
              noImage: i,
              previewText: d ? void 0 : g.intl.string(g.t.pgUTZC),
          })
        : (0, t.jsx)("div", {
              className: a,
              children: (0, t.jsx)("img", { src: m, alt: "", className: f.Sl, draggable: !1 }),
          });
}
