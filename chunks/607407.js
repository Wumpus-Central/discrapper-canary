e.d(a, { A: () => A });
var t = e(477900),
    n = e(582128),
    s = e(503698),
    i = e.n(s),
    c = e(17928),
    r = e(289873),
    d = e(834730),
    o = e(734057),
    h = e(576705),
    u = e(450149),
    v = e(652215),
    g = e(105292),
    f = e(142893);
function N(l) {
    let { isLoading: a, noText: e, noImage: n, previewText: s, className: c } = l;
    return (0, t.jsx)("div", {
        className: i()(f.Hd, c),
        children: a
            ? (0, t.jsx)(r.y, {})
            : (0, t.jsxs)(t.Fragment, {
                  children: [
                      n ? null : (0, t.jsx)("div", { className: f.js }),
                      e
                          ? null
                          : (0, t.jsx)(d.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                className: f.pY,
                                children: s ?? g.intl.string(g.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function A(l) {
    let { stream: a, className: e, noText: s = !1, noImage: i = !1 } = l,
        r = (0, c.bG)([o.A], () => o.A.getBasicChannel(a.channelId)),
        d = (0, c.bG)([h.A], () => null != r && h.A.canBasicChannel(v.hVb.CONNECT, r)),
        { previewUrl: A, isLoading: p } = (0, u.A)(a.guildId, a.channelId, a.ownerId),
        m = n.useRef(p ? null : A);
    n.useEffect(() => {
        p || (m.current = A);
    }, [A, p]);
    let w = null == A || p ? m.current : A;
    return null == w
        ? (0, t.jsx)(N, {
              className: e,
              isLoading: p,
              noText: s,
              noImage: i,
              previewText: d ? void 0 : g.intl.string(g.t.pgUTZC),
          })
        : (0, t.jsx)("div", {
              className: e,
              children: (0, t.jsx)("img", { src: w, alt: "", className: f.Sl, draggable: !1 }),
          });
}
