n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(726542),
    d = n(122021),
    u = n(231757),
    m = n(626135),
    g = n(981631),
    p = n(286990);
let h = (e) => {
    let { disabled: t = !1, type: n, className: r, innerClassName: h, onConnect: f } = e,
        b = (0, o.ZP)(),
        _ = c.Z.get((0, d.rR)(n));
    return (0, i.jsx)(a.ua7, {
        text: _.name,
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: d } = e;
            return (0, i.jsx)('div', {
                className: s()(p.wrapper, r),
                children: (0, i.jsx)(a.tEY, {
                    children: (0, i.jsx)('button', {
                        onMouseEnter: o,
                        onMouseLeave: d,
                        className: s()(p.inner, h),
                        type: 'button',
                        disabled: t,
                        style: { backgroundImage: "url('".concat((0, l.wj)(b) ? _.icon.darkSVG : _.icon.lightSVG, "')") },
                        onClick:
                            null != f
                                ? f
                                : () =>
                                      (function (e) {
                                          let t = c.Z.get(e);
                                          (0, u.Z)({
                                              platformType: t.type,
                                              location: 'Friends List'
                                          }),
                                              m.default.track(g.rMx.ACCOUNT_LINK_STEP, {
                                                  previous_step: 'desktop connections',
                                                  current_step: 'desktop oauth',
                                                  platform_type: t.type
                                              });
                                      })(n),
                        'aria-label': _.name
                    })
                })
            });
        }
    });
};
