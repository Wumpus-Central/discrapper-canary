a.d(s, { A: () => o });
var l = a(627968),
    i = a(64700),
    t = a(503698),
    r = a.n(t),
    d = a(203632);
a(881106);
var n = a(480335),
    c = a(621395),
    u = a(778765);
let o = (e) => {
    let {
            skuId: s,
            isHighlighted: a,
            removeSetHeight: t = !1,
            withScaleAnimation: o = !1,
            delayProfileEffectIntro: h = !1,
            hideBackground: m = !1,
        } = e,
        [v, p] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== o) p(!1);
        else {
            let e = setTimeout(() => {
                p(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [o]),
    null == s)
        ? null
        : (0, l.jsxs)("div", {
              className: r()(c.i1, { [c.qy]: o, [c.pE]: !t, [c.JQ]: m }),
              children: [
                  (0, l.jsx)("img", { src: u.A, alt: "", className: c.VH, "aria-hidden": !0, draggable: !1 }),
                  !v &&
                      (0, l.jsx)(n.A, {
                          skuId: s,
                          useThumbnail: !0,
                          autoPlay: o,
                          restartMethod: d.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: a,
                          useOpacityOnHover: !1,
                          delayIntro: h,
                          shopPreview: !0,
                      }),
              ],
          });
};
