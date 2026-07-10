"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(203632);
n(881106);
var o = n(480335),
    d = n(727360),
    c = n(778765);
let u = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: a = !1,
            withScaleAnimation: u = !1,
            delayProfileEffectIntro: _ = !1,
            hideBackground: E = !1,
        } = e,
        [A, h] = r.useState(!0);
    return (r.useEffect(() => {
        if (!0 !== u) h(!1);
        else {
            let e = setTimeout(() => {
                h(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u]),
    null == t)
        ? null
        : (0, i.jsxs)("div", {
              className: s()(d.i1, { [d.qy]: u, [d.pE]: !a, [d.JQ]: E }),
              children: [
                  (0, i.jsx)("img", { src: c.A, alt: "", className: d.VH, "aria-hidden": !0, draggable: !1 }),
                  !A &&
                      (0, i.jsx)(o.A, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: u,
                          restartMethod: l.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: n,
                          useOpacityOnHover: !1,
                          delayIntro: _,
                          shopPreview: !0,
                      }),
              ],
          });
};
