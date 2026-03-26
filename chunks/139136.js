"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s);
n(881106);
var o = n(649802),
    l = n(351966),
    u = n(995811),
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
        [p, h] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== d) h(!1);
        else {
            let e = setTimeout(() => {
                h(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [d]),
    null == t)
        ? null
        : (0, r.jsxs)("div", {
              className: a()(u.i1, { [u.qy]: d, [u.pE]: !s, [u.JQ]: f }),
              children: [
                  (0, r.jsx)("img", { src: c.A, alt: "", className: u.VH, "aria-hidden": !0, draggable: !1 }),
                  !p &&
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
