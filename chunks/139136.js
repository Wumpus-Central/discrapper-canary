a.d(s, { A: () => o });
var l = a(477900),
    t = a(582128),
    i = a(503698),
    n = a.n(i),
    r = a(203632);
a(881106);
var c = a(480335),
    d = a(23240),
    u = a(778765);
let o = (e) => {
    let {
            skuId: s,
            isHighlighted: a,
            removeSetHeight: i = !1,
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
              className: n()(d.i1, { [d.qy]: o, [d.pE]: !i, [d.JQ]: h }),
              children: [
                  (0, l.jsx)("img", { src: u.A, alt: "", className: d.VH, "aria-hidden": !0, draggable: !1 }),
                  !p &&
                      (0, l.jsx)(c.A, {
                          skuId: s,
                          useThumbnail: !0,
                          autoPlay: o,
                          restartMethod: r.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: a,
                          useOpacityOnHover: !1,
                          delayIntro: m,
                          shopPreview: !0,
                      }),
              ],
          });
};
