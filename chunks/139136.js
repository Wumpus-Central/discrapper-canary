n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(203632);
n(881106);
var o = n(480335),
    d = n(621395),
    u = n(778765);
let c = (e) => {
    let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: a = !1,
            withScaleAnimation: c = !1,
            delayProfileEffectIntro: h = !1,
            hideBackground: E = !1,
        } = e,
        [A, _] = l.useState(!0);
    return (l.useEffect(() => {
        if (!0 !== c) _(!1);
        else {
            let e = setTimeout(() => {
                _(!1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [c]),
    null == t)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(d.i1, { [d.qy]: c, [d.pE]: !a, [d.JQ]: E }),
              children: [
                  (0, i.jsx)("img", { src: u.A, alt: "", className: d.VH, "aria-hidden": !0, draggable: !1 }),
                  !A &&
                      (0, i.jsx)(o.A, {
                          skuId: t,
                          useThumbnail: !0,
                          autoPlay: c,
                          restartMethod: s.HL.FromStart,
                          resetOnHover: !0,
                          isHovering: n,
                          useOpacityOnHover: !1,
                          delayIntro: h,
                          shopPreview: !0,
                      }),
              ],
          });
};
