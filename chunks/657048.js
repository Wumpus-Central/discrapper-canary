n.d(l, { A: () => c });
var t = n(477900);
n(582128);
var s = n(503698),
    a = n.n(s),
    i = n(559106),
    r = n(939249),
    u = n(866665),
    o = n(105292),
    d = n(408968);
function c(e) {
    let l,
        {
            className: n,
            src: s,
            unicodeEmoji: c,
            name: m,
            size: x = 20,
            enableTooltip: h = !0,
            enableHeight: f = !0,
            onClick: p,
            ref: j,
        } = e;
    return null == s && null == c
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
                      className: a()(d.U, n, { [d.v]: null != p }),
                      height: f ? x : void 0,
                      src: s,
                      width: x,
                  })),
                  (null != c &&
                      (l = (0, t.jsx)("img", {
                          ref: j,
                          alt: c.allNamesString,
                          className: a()(d.U, n, { [d.v]: null != p }),
                          height: f ? x : void 0,
                          src: c.url,
                          width: x,
                      })),
                  null == p)
                      ? (0, t.jsx)(i.vN, { offset: { left: 5 }, children: l })
                      : (0, t.jsx)(r.D, { onClick: p, tag: "span", focusProps: { offset: { left: 5 } }, children: l })),
          });
}
