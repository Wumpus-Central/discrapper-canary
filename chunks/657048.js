n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(559106),
    r = n(939249),
    o = n(866665),
    u = n(660183),
    d = n(408968);
function c(e) {
    let t,
        {
            className: n,
            src: i,
            unicodeEmoji: c,
            name: m,
            size: x = 20,
            enableTooltip: h = !0,
            enableHeight: j = !0,
            onClick: g,
            ref: p,
        } = e;
    return null == i && null == c
        ? null
        : (0, l.jsx)(o.m, {
              asContainer: !0,
              text: m,
              "aria-label": !1,
              shouldShow: h,
              tag: "span",
              children:
                  ((t = (0, l.jsx)("img", {
                      ref: p,
                      alt: u.intl.formatToPlainString(u.t["9+YWrE"], { name: m }),
                      className: s()(d.U, n, { [d.v]: null != g }),
                      height: j ? x : void 0,
                      src: i,
                      width: x,
                  })),
                  (null != c &&
                      (t = (0, l.jsx)("img", {
                          ref: p,
                          alt: c.allNamesString,
                          className: s()(d.U, n, { [d.v]: null != g }),
                          height: j ? x : void 0,
                          src: c.url,
                          width: x,
                      })),
                  null == g)
                      ? (0, l.jsx)(a.vN, { offset: { left: 5 }, children: t })
                      : (0, l.jsx)(r.D, { onClick: g, tag: "span", focusProps: { offset: { left: 5 } }, children: t })),
          });
}
