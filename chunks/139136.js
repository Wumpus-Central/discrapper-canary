n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(203632);
n(881106);
var o = n(351966),
    d = n(621395),
    c = n(778765);
let u = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: s = !1,
            withScaleAnimation: u = !1,
            delayProfileEffectIntro: h = !1,
            hideBackground: A = !1,
        } = e,
        [_, m] = l.useState(!0);
    return (l.useEffect(() => {
        if (!0 !== u) m(!1);
        else {
            let e = setTimeout(() => {
                m(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [u]),
    null == t)
        ? null
        : (0, i.jsxs)("div", {
              className: a()(d.i1, { [d.qy]: u, [d.pE]: !s, [d.JQ]: A }),
              children: [
                  (0, i.jsx)("img", { src: c.A, alt: "", className: d.VH, "aria-hidden": !0, draggable: !1 }),
                  !_ &&
                      (0, i.jsx)(o.A, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: u,
                          restartMethod: r.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: n,
                          useOpacityOnHover: !1,
                          delayIntro: h,
                          shopPreview: !0,
                      }),
              ],
          });
};
