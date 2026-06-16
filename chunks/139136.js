t.d(s, { A: () => o });
var a = t(627968),
    r = t(64700),
    c = t(503698),
    d = t.n(c),
    i = t(203632);
t(881106);
var l = t(480335),
    n = t(621395),
    u = t(778765);
let o = (e) => {
    let {
            skuId: s,
            isHighlighted: t,
            removeSetHeight: c = !1,
            withScaleAnimation: o = !1,
            delayProfileEffectIntro: p = !1,
            hideBackground: h = !1,
        } = e,
        [m, v] = r.useState(!0);
    return (r.useEffect(() => {
        if (!0 !== o) v(!1);
        else {
            let e = setTimeout(() => {
                v(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [o]),
    null == s)
        ? null
        : (0, a.jsxs)("div", {
              className: d()(n.i1, { [n.qy]: o, [n.pE]: !c, [n.JQ]: h }),
              children: [
                  (0, a.jsx)("img", { src: u.A, alt: "", className: n.VH, "aria-hidden": !0, draggable: !1 }),
                  !m &&
                      (0, a.jsx)(l.A, {
                          skuId: s,
                          useThumbnail: !0,
                          autoPlay: o,
                          restartMethod: i.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: t,
                          useOpacityOnHover: !1,
                          delayIntro: p,
                          shopPreview: !0,
                      }),
              ],
          });
};
