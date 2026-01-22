n.d(t, { A: () => d }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a);
n(216160);
var o = n(675100),
    l = n(182592),
    c = n(347064),
    u = n(306499);
let d = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: a = !1,
            withScaleAnimation: d = !1,
            delayProfileEffectIntro: f = !1,
        } = e,
        [p, _] = i.useState(!0);
    return (i.useEffect(() => {
        if (!0 !== d) _(!1);
        else {
            let e = setTimeout(() => {
                _(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [d]),
    null == t)
        ? null
        : (0, r.jsxs)("div", {
              className: s()(c.i1, {
                  [c.qy]: d,
                  [c.pE]: !a,
              }),
              children: [
                  (0, r.jsx)("img", {
                      src: u,
                      alt: "",
                      className: c.VH,
                      "aria-hidden": !0,
                      draggable: !1,
                  }),
                  !p &&
                      (0, r.jsx)(l.A, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: d,
                          restartMethod: o.H.FromStart,
                          resetOnHover: !0,
                          isHovering: n,
                          useOpacityOnHover: !1,
                          delayIntro: f,
                          shopPreview: !0,
                      }),
              ],
          });
};
