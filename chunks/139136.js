"use strict";
n.d(t, { A: () => u });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(203632);
n(881106);
var c = n(480335),
    o = n(621395),
    d = n(778765);
let u = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: l = !1,
            withScaleAnimation: u = !1,
            delayProfileEffectIntro: m = !1,
            hideBackground: f = !1,
        } = e,
        [h, _] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== u) _(!1);
        else {
            let e = setTimeout(() => {
                _(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u]),
    null == t)
        ? null
        : (0, a.jsxs)("div", {
              className: r()(o.i1, { [o.qy]: u, [o.pE]: !l, [o.JQ]: f }),
              children: [
                  (0, a.jsx)("img", { src: d.A, alt: "", className: o.VH, "aria-hidden": !0, draggable: !1 }),
                  !h &&
                      (0, a.jsx)(c.A, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: u,
                          restartMethod: s.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: n,
                          useOpacityOnHover: !1,
                          delayIntro: m,
                          shopPreview: !0,
                      }),
              ],
          });
};
