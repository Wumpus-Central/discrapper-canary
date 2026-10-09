n.d(t, { A: () => d });
var l = n(477900);
n(582128);
var s = n(503698),
    i = n.n(s),
    a = n(559106),
    r = n(939249),
    o = n(866665),
    u = n(660183),
    c = n(408968);
function d(e) {
    let t,
        {
            className: n,
            src: s,
            unicodeEmoji: d,
            name: m,
            size: x = 20,
            enableTooltip: h = !0,
            enableHeight: j = !0,
            onClick: p,
            ref: g,
        } = e;
    return null == s && null == d
        ? null
        : (0, l.jsx)(o.m, {
              asContainer: !0,
              text: m,
              "aria-label": !1,
              shouldShow: h,
              tag: "span",
              children:
                  ((t = (0, l.jsx)("img", {
                      ref: g,
                      alt: u.intl.formatToPlainString(u.t["9+YWrE"], { name: m }),
                      className: i()(c.U, n, { [c.v]: null != p }),
                      height: j ? x : void 0,
                      src: s,
                      width: x,
                  })),
                  (null != d &&
                      (t = (0, l.jsx)("img", {
                          ref: g,
                          alt: d.allNamesString,
                          className: i()(c.U, n, { [c.v]: null != p }),
                          height: j ? x : void 0,
                          src: d.url,
                          width: x,
                      })),
                  null == p)
                      ? (0, l.jsx)(a.vN, { offset: { left: 5 }, children: t })
                      : (0, l.jsx)(r.D, { onClick: p, tag: "span", focusProps: { offset: { left: 5 } }, children: t })),
          });
}
