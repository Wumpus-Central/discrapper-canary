var l = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    r = n(559106),
    s = n(939249),
    o = n(866665),
    u = n(792996),
    c = n(408968);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t,
                {
                    className: n,
                    src: i,
                    unicodeEmoji: d,
                    name: m,
                    size: A = 20,
                    enableTooltip: p = !0,
                    enableHeight: h = !0,
                    onClick: f,
                    ref: g,
                } = e;
            return null == i && null == d
                ? null
                : (0, l.jsx)(o.m, {
                      asContainer: !0,
                      text: m,
                      "aria-label": !1,
                      shouldShow: p,
                      tag: "span",
                      children:
                          ((t = (0, l.jsx)("img", {
                              ref: g,
                              alt: u.intl.formatToPlainString(u.t["9+YWrE"], { name: m }),
                              className: a()(c.U, n, { [c.v]: null != f }),
                              height: h ? A : void 0,
                              src: i,
                              width: A,
                          })),
                          (null != d &&
                              (t = (0, l.jsx)("img", {
                                  ref: g,
                                  alt: d.allNamesString,
                                  className: a()(c.U, n, { [c.v]: null != f }),
                                  height: h ? A : void 0,
                                  src: d.url,
                                  width: A,
                              })),
                          null == f)
                              ? (0, l.jsx)(r.vN, { offset: { left: 5 }, children: t })
                              : (0, l.jsx)(s.D, {
                                    onClick: f,
                                    tag: "span",
                                    focusProps: { offset: { left: 5 } },
                                    children: t,
                                })),
                  });
        },
    },
);
