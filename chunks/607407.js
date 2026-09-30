n.d(t, { A: () => x });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(289873),
    u = n(834730),
    c = n(734057),
    d = n(576705),
    m = n(450149),
    h = n(652215),
    p = n(375708),
    f = n(142893);
function g(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: s, className: a } = e;
    return (0, l.jsx)("div", {
        className: r()(f.Hd, a),
        children: t
            ? (0, l.jsx)(o.y, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: r()(f.js, { [f.$0]: i }) }),
                      n
                          ? null
                          : (0, l.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: f.pY,
                                children: s ?? p.intl.string(p.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function x(e) {
    let { stream: t, className: n, noText: s = !1, noImage: r = !1 } = e,
        o = (0, a.bG)([c.A], () => c.A.getBasicChannel(t.channelId)),
        u = (0, a.bG)([d.A], () => null != o && d.A.canBasicChannel(h.hVb.CONNECT, o)),
        { previewUrl: x, isLoading: A } = (0, m.A)(t.guildId, t.channelId, t.ownerId),
        C = i.useRef(A ? null : x);
    i.useEffect(() => {
        A || (C.current = x);
    }, [x, A]);
    let E = null == x || A ? C.current : x;
    return null == E
        ? (0, l.jsx)(g, {
              className: n,
              isLoading: A,
              noText: s,
              noImage: r,
              previewText: u ? void 0 : p.intl.string(p.t.pgUTZC),
          })
        : (0, l.jsx)("div", {
              className: n,
              children: (0, l.jsx)("img", { src: E, alt: "", className: f.Sl, draggable: !1 }),
          });
}
