var l = a(477900),
    t = a(582128),
    r = a(503698),
    i = a.n(r),
    n = a(203632);
a(881106);
var c = a(971217),
    d = a(23240),
    u = a(778765);
a.d(
    s,
    {},
    {
        A: (e) => {
            let {
                    skuId: s,
                    isHighlighted: a,
                    removeSetHeight: r = !1,
                    withScaleAnimation: o = !1,
                    delayProfileEffectIntro: m = !1,
                    hideBackground: h = !1,
                } = e,
                [p, f] = t.useState(!0);
            return (t.useEffect(() => {
                if (!0 !== o) f(!1);
                else {
                    let e = setTimeout(() => {
                        f(!1);
                    }, 500);
                    return () => {
                        clearTimeout(e);
                    };
                }
            }, [o]),
            null == s)
                ? null
                : (0, l.jsxs)("div", {
                      className: i()(d.i1, { [d.qy]: o, [d.pE]: !r, [d.JQ]: h }),
                      children: [
                          (0, l.jsx)("img", { src: u.A, alt: "", className: d.VH, "aria-hidden": !0, draggable: !1 }),
                          !p &&
                              (0, l.jsx)(c.A, {
                                  skuId: s,
                                  useThumbnail: !0,
                                  autoPlay: o,
                                  restartMethod: n.HL.FromStart,
                                  resetOnHover: !0,
                                  isHovering: a,
                                  useOpacityOnHover: !1,
                                  delayIntro: m,
                                  shopPreview: !0,
                              }),
                      ],
                  });
        },
    },
);
