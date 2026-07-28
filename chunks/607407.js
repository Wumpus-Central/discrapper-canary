"use strict";
n.d(t, { A: () => f });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(289873),
    d = n(834730),
    c = n(734057),
    u = n(576705),
    _ = n(450149),
    E = n(652215),
    A = n(375708),
    h = n(450202);
function I(e) {
    let { isLoading: t, noText: n, noImage: r, previewText: a, className: l } = e;
    return (0, i.jsx)("div", {
        className: s()(h.Hd, l),
        children: t
            ? (0, i.jsx)(o.y, {})
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: s()(h.js, { [h.$0]: r }) }),
                      n
                          ? null
                          : (0, i.jsx)(d.E, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: h.pY,
                                children: a ?? A.intl.string(A.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function f(e) {
    let { stream: t, className: n, noText: a = !1, noImage: s = !1 } = e,
        o = (0, l.bG)([c.A], () => c.A.getBasicChannel(t.channelId)),
        d = (0, l.bG)([u.A], () => null != o && u.A.canBasicChannel(E.hVb.CONNECT, o)),
        { previewUrl: f, isLoading: p } = (0, _.A)(t.guildId, t.channelId, t.ownerId),
        T = r.useRef(p ? null : f);
    r.useEffect(() => {
        p || (T.current = f);
    }, [f, p]);
    let m = null == f || p ? T.current : f;
    return null == m
        ? (0, i.jsx)(I, {
              className: n,
              isLoading: p,
              noText: a,
              noImage: s,
              previewText: d ? void 0 : A.intl.string(A.t.pgUTZC),
          })
        : (0, i.jsx)("div", { className: n, children: (0, i.jsx)("img", { src: m, alt: "", className: h.Sl }) });
}
