var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(855986),
    c = t(289873),
    d = t(834730),
    o = t(734057),
    u = t(576705),
    N = t(450149),
    g = t(652215),
    C = t(792996),
    E = t(142893);
function h(e) {
    let { isLoading: n, noText: t, noImage: i, previewText: a, className: r } = e;
    return (0, l.jsx)("div", {
        className: s()(E.Hd, r),
        children: n
            ? (0, l.jsx)(c.y, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      i ? null : (0, l.jsx)("div", { className: E.js }),
                      t
                          ? null
                          : (0, l.jsx)(d.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                className: E.pY,
                                children: a ?? C.intl.string(C.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let { stream: n, className: t, noText: a = !1, noImage: s = !1 } = e,
                c = (0, r.bG)([o.A], () => o.A.getBasicChannel(n.channelId)),
                d = (0, r.bG)([u.A], () => null != c && u.A.canBasicChannel(g.hVb.CONNECT, c)),
                { previewUrl: f, isLoading: A } = (0, N.A)(n.guildId, n.channelId, n.ownerId),
                m = i.useRef(A ? null : f);
            i.useEffect(() => {
                A || (m.current = f);
            }, [f, A]);
            let I = null == f || A ? m.current : f;
            return null == I
                ? (0, l.jsx)(h, {
                      className: t,
                      isLoading: A,
                      noText: a,
                      noImage: s,
                      previewText: d ? void 0 : C.intl.string(C.t.pgUTZC),
                  })
                : (0, l.jsx)("div", {
                      className: t,
                      children: (0, l.jsx)("img", { src: I, alt: "", className: E.Sl, draggable: !1 }),
                  });
        },
    },
);
