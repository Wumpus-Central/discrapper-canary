var a = t(477900),
    n = t(582128),
    i = t(503698),
    s = t.n(i),
    c = t(855986),
    r = t(289873),
    d = t(834730),
    o = t(734057),
    u = t(576705),
    h = t(450149),
    g = t(652215),
    v = t(792996),
    N = t(142893);
function A(l) {
    let { isLoading: e, noText: t, noImage: n, previewText: i, className: c } = l;
    return (0, a.jsx)("div", {
        className: s()(N.Hd, c),
        children: e
            ? (0, a.jsx)(r.y, {})
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      n ? null : (0, a.jsx)("div", { className: N.js }),
                      t
                          ? null
                          : (0, a.jsx)(d.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                className: N.pY,
                                children: i ?? v.intl.string(v.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
t.d(
    e,
    {},
    {
        A: function (l) {
            let { stream: e, className: t, noText: i = !1, noImage: s = !1 } = l,
                r = (0, c.bG)([o.A], () => o.A.getBasicChannel(e.channelId)),
                d = (0, c.bG)([u.A], () => null != r && u.A.canBasicChannel(g.hVb.CONNECT, r)),
                { previewUrl: f, isLoading: E } = (0, h.A)(e.guildId, e.channelId, e.ownerId),
                m = n.useRef(E ? null : f);
            n.useEffect(() => {
                E || (m.current = f);
            }, [f, E]);
            let C = null == f || E ? m.current : f;
            return null == C
                ? (0, a.jsx)(A, {
                      className: t,
                      isLoading: E,
                      noText: i,
                      noImage: s,
                      previewText: d ? void 0 : v.intl.string(v.t.pgUTZC),
                  })
                : (0, a.jsx)("div", {
                      className: t,
                      children: (0, a.jsx)("img", { src: C, alt: "", className: N.Sl, draggable: !1 }),
                  });
        },
    },
);
