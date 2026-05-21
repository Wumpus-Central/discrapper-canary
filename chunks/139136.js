"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(203632);
n(881106);
var l = n(480335),
    u = n(621395),
    c = n(778765);
let d = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: s = !1,
            withScaleAnimation: d = !1,
            delayProfileEffectIntro: _ = !1,
            hideBackground: f = !1,
        } = e,
        [h, p] = r.useState(!0);
    return (r.useEffect(() => {
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
        : (0, i.jsxs)("div", {
              className: a()(u.i1, { [u.qy]: d, [u.pE]: !s, [u.JQ]: f }),
              children: [
                  (0, i.jsx)("img", { src: c.A, alt: "", className: u.VH, "aria-hidden": !0, draggable: !1 }),
                  !h &&
                      (0, i.jsx)(l.A, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: d,
                          restartMethod: o.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: n,
                          useOpacityOnHover: !1,
                          delayIntro: _,
                          shopPreview: !0,
                      }),
              ],
          });
};
