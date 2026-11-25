var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(855986),
    o = n(289873),
    u = n(834730),
    c = n(734057),
    d = n(576705),
    m = n(450149),
    A = n(652215),
    p = n(792996),
    h = n(142893);
function f(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: a, className: s } = e;
    return (0, l.jsx)("div", {
        className: r()(h.Hd, s),
        children: t
            ? (0, l.jsx)(o.y, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      i ? null : (0, l.jsx)("div", { className: h.js }),
                      n
                          ? null
                          : (0, l.jsx)(u.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                className: h.pY,
                                children: a ?? p.intl.string(p.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { stream: t, className: n, noText: a = !1, noImage: r = !1 } = e,
                o = (0, s.bG)([c.A], () => c.A.getBasicChannel(t.channelId)),
                u = (0, s.bG)([d.A], () => null != o && d.A.canBasicChannel(A.hVb.CONNECT, o)),
                { previewUrl: g, isLoading: x } = (0, m.A)(t.guildId, t.channelId, t.ownerId),
                I = i.useRef(x ? null : g);
            i.useEffect(() => {
                x || (I.current = g);
            }, [g, x]);
            let v = null == g || x ? I.current : g;
            return null == v
                ? (0, l.jsx)(f, {
                      className: n,
                      isLoading: x,
                      noText: a,
                      noImage: r,
                      previewText: u ? void 0 : p.intl.string(p.t.pgUTZC),
                  })
                : (0, l.jsx)("div", {
                      className: n,
                      children: (0, l.jsx)("img", { src: v, alt: "", className: h.Sl, draggable: !1 }),
                  });
        },
    },
);
