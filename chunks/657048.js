n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(559106),
    o = n(939249),
    u = n(866665),
    d = n(375708),
    c = n(408968);
let m = i.forwardRef(function (e, t) {
    let n,
        {
            className: i,
            src: s,
            unicodeEmoji: m,
            name: x,
            size: h = 20,
            enableTooltip: j = !0,
            enableHeight: g = !0,
            onClick: p,
        } = e;
    return null == s && null == m
        ? null
        : (0, l.jsx)(u.m, {
              asContainer: !0,
              text: x,
              "aria-label": !1,
              shouldShow: j,
              tag: "span",
              children:
                  ((n = (0, l.jsx)("img", {
                      ref: t,
                      alt: d.intl.formatToPlainString(d.t["9+YWrE"], { name: x }),
                      className: a()(c.U, i, { [c.v]: null != p }),
                      height: g ? h : void 0,
                      src: s,
                      width: h,
                  })),
                  (null != m &&
                      (n = (0, l.jsx)("img", {
                          ref: t,
                          alt: m.allNamesString,
                          className: a()(c.U, i, { [c.v]: null != p }),
                          height: g ? h : void 0,
                          src: m.url,
                          width: h,
                      })),
                  null == p)
                      ? (0, l.jsx)(r.vN, { offset: { left: 5 }, children: n })
                      : (0, l.jsx)(o.D, { onClick: p, tag: "span", focusProps: { offset: { left: 5 } }, children: n })),
          });
});
