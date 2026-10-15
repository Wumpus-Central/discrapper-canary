n.d(l, { A: () => d });
var t = n(477900);
n(582128);
var s = n(503698),
    i = n.n(s),
    a = n(559106),
    r = n(939249),
    u = n(866665),
    o = n(105292),
    c = n(408968);
function d(e) {
    let l,
        {
            className: n,
            src: s,
            unicodeEmoji: d,
            name: m,
            size: x = 20,
            enableTooltip: h = !0,
            enableHeight: f = !0,
            onClick: p,
            ref: j,
        } = e;
    return null == s && null == d
        ? null
        : (0, t.jsx)(u.m, {
              asContainer: !0,
              text: m,
              "aria-label": !1,
              shouldShow: h,
              tag: "span",
              children:
                  ((l = (0, t.jsx)("img", {
                      ref: j,
                      alt: o.intl.formatToPlainString(o.t["9+YWrE"], { name: m }),
                      className: i()(c.U, n, { [c.v]: null != p }),
                      height: f ? x : void 0,
                      src: s,
                      width: x,
                  })),
                  (null != d &&
                      (l = (0, t.jsx)("img", {
                          ref: j,
                          alt: d.allNamesString,
                          className: i()(c.U, n, { [c.v]: null != p }),
                          height: f ? x : void 0,
                          src: d.url,
                          width: x,
                      })),
                  null == p)
                      ? (0, t.jsx)(a.vN, { offset: { left: 5 }, children: l })
                      : (0, t.jsx)(r.D, { onClick: p, tag: "span", focusProps: { offset: { left: 5 } }, children: l })),
          });
}
