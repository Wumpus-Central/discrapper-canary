n.d(t, {
    A: () => m,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(734057),
    u = n(576705),
    d = n(450149),
    f = n(652215),
    p = n(985018),
    _ = n(571283);

function h(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: a, className: o } = e;
    return (0, r.jsx)("div", {
        className: s()(_.Hd, o),
        children: t
            ? (0, r.jsx)(l.y$y, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: s()(_.js, {
                              [_.$0]: i,
                          }),
                      }),
                      n
                          ? null
                          : (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: _.pY,
                                children: null != a ? a : p.intl.string(p.t.uQZTBV),
                            }),
                  ],
              }),
    });
}

function m(e) {
    let { stream: t, className: n, noText: a = !1, noImage: s = !1 } = e,
        l = (0, o.bG)([c.A], () => c.A.getBasicChannel(t.channelId)),
        m = (0, o.bG)([u.A], () => null != l && u.A.canBasicChannel(f.hVb.CONNECT, l)),
        { previewUrl: g, isLoading: E } = (0, d.A)(t.guildId, t.channelId, t.ownerId),
        b = i.useRef(E ? null : g);
    i.useEffect(() => {
        E || (b.current = g);
    }, [g, E]);
    let y = null == g || E ? b.current : g;
    return null == y
        ? (0, r.jsx)(h, {
              className: n,
              isLoading: E,
              noText: a,
              noImage: s,
              previewText: m ? void 0 : p.intl.string(p.t.pgUTZC),
          })
        : (0, r.jsx)("div", {
              className: n,
              children: (0, r.jsx)("img", {
                  src: y,
                  alt: "",
                  className: _.Sl,
              }),
          });
}
