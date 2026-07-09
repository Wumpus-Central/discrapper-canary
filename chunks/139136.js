a.d(s, { A: () => o });
var t = a(627968),
    i = a(64700),
    l = a(503698),
    r = a.n(l),
    d = a(203632);
a(881106);
var c = a(480335),
    n = a(727360),
    u = a(778765);
let o = (e) => {
    let {
            skuId: s,
            isHighlighted: a,
            removeSetHeight: l = !1,
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
        : (0, t.jsxs)("div", {
              className: r()(n.i1, { [n.qy]: o, [n.pE]: !l, [n.JQ]: m }),
              children: [
                  (0, t.jsx)("img", { src: u.A, alt: "", className: n.VH, "aria-hidden": !0, draggable: !1 }),
                  !v &&
                      (0, t.jsx)(c.A, {
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
