"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a);
n(216160);
var o = n(675100),
    l = n(182592),
    u = n(347064),
    c = n(306499);
let d = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: a = !1,
            withScaleAnimation: d = !1,
            delayProfileEffectIntro: _ = !1,
        } = e,
        [f, p] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== d) p(!1);
        else {
            let e = setTimeout(() => {
                p(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [d]),
    null == t)
        ? null
        : (0, r.jsxs)("div", {
              className: s()(u.i1, { [u.qy]: d, [u.pE]: !a }),
              children: [
                  (0, r.jsx)("img", { src: c, alt: "", className: u.VH, "aria-hidden": !0, draggable: !1 }),
                  !f &&
                      (0, r.jsx)(l.A, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: d,
                          restartMethod: o.H.FromStart,
                          resetOnHover: !0,
                          isHovering: n,
                          useOpacityOnHover: !1,
                          delayIntro: _,
                          shopPreview: !0,
                      }),
              ],
          });
};
