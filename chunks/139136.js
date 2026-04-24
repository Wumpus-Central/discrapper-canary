a.d(t, { A: () => u });
var r = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(203632);
a(881106);
var o = a(480335),
    c = a(621395),
    d = a(778765);
let u = (e) => {
    let {
            skuId: t,
            isHighlighted: a,
            removeSetHeight: l = !1,
            withScaleAnimation: u = !1,
            delayProfileEffectIntro: h = !1,
            hideBackground: p = !1,
        } = e,
        [m, f] = n.useState(!0);
    return (n.useEffect(() => {
        if (!0 !== u) f(!1);
        else {
            let e = setTimeout(() => {
                f(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u]),
    null == t)
        ? null
        : (0, r.jsxs)("div", {
              className: i()(c.i1, { [c.qy]: u, [c.pE]: !l, [c.JQ]: p }),
              children: [
                  (0, r.jsx)("img", { src: d.A, alt: "", className: c.VH, "aria-hidden": !0, draggable: !1 }),
                  !m &&
                      (0, r.jsx)(o.A, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: u,
                          restartMethod: s.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: a,
                          useOpacityOnHover: !1,
                          delayIntro: h,
                          shopPreview: !0,
                      }),
              ],
          });
};
