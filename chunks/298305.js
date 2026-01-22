n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(920064),
    l = n(287809),
    c = n(504721),
    u = n(513653),
    d = n(180391);
let f = 1.5,
    p = 0.321;
function _(e) {
    let { maxRewardImageSrc: t, claimableRewards: n, size: _, imageScaling: h = f } = e,
        m = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        g = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        E = (0, a.FT9)(_),
        b = { height: E * h };
    return n.length > 0
        ? (0, r.jsx)("img", {
              alt: "",
              src: t,
              style: b,
          })
        : (0, r.jsxs)("div", {
              className: c.kL,
              children: [
                  (1 === n.length || 2 === n.length) &&
                      (0, r.jsx)(a.JsQ, {
                          "aria-label": null == m ? void 0 : m.username,
                          size: _,
                          className: c.M8,
                          src: 1 === n.length ? (null == m ? void 0 : m.getAvatarURL(void 0, (0, a.FT9)(_), !g)) : d,
                          avatarDecoration: (0, o.A)(n[0].assetId, _, !g),
                      }),
                  2 === n.length &&
                      (0, r.jsx)("div", {
                          style: { marginRight: -Math.round(E * p) },
                          children: (0, r.jsx)(a.JsQ, {
                              "aria-label": null == m ? void 0 : m.username,
                              size: _,
                              src: u,
                              avatarDecoration: (0, o.A)(n[1].assetId, _, !g),
                          }),
                      }),
              ],
          });
}
