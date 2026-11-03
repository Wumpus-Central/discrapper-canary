a.d(e, { A: () => f });
var n = a(477900),
    t = a(582128),
    i = a(503698),
    s = a.n(i),
    c = a(17928),
    r = a(289873),
    o = a(834730),
    d = a(734057),
    u = a(576705),
    h = a(450149),
    g = a(652215),
    v = a(105292),
    N = a(142893);
function A(l) {
    let { isLoading: e, noText: a, noImage: t, previewText: i, className: c } = l;
    return (0, n.jsx)("div", {
        className: s()(N.Hd, c),
        children: e
            ? (0, n.jsx)(r.y, {})
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      t ? null : (0, n.jsx)("div", { className: N.js }),
                      a
                          ? null
                          : (0, n.jsx)(o.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                className: N.pY,
                                children: i ?? v.intl.string(v.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function f(l) {
    let { stream: e, className: a, noText: i = !1, noImage: s = !1 } = l,
        r = (0, c.bG)([d.A], () => d.A.getBasicChannel(e.channelId)),
        o = (0, c.bG)([u.A], () => null != r && u.A.canBasicChannel(g.hVb.CONNECT, r)),
        { previewUrl: f, isLoading: E } = (0, h.A)(e.guildId, e.channelId, e.ownerId),
        m = t.useRef(E ? null : f);
    t.useEffect(() => {
        E || (m.current = f);
    }, [f, E]);
    let C = null == f || E ? m.current : f;
    return null == C
        ? (0, n.jsx)(A, {
              className: a,
              isLoading: E,
              noText: i,
              noImage: s,
              previewText: o ? void 0 : v.intl.string(v.t.pgUTZC),
          })
        : (0, n.jsx)("div", {
              className: a,
              children: (0, n.jsx)("img", { src: C, alt: "", className: N.Sl, draggable: !1 }),
          });
}
