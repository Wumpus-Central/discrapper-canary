var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(780384),
    l = n(481060),
    o = n(410030),
    c = n(726542),
    d = n(122021),
    u = n(231757),
    m = n(626135),
    g = n(981631),
    h = n(369255);
t.Z = (e) => {
    let { disabled: t = !1, type: n, className: r, innerClassName: p, onConnect: x } = e,
        f = (0, o.ZP)(),
        _ = c.Z.get((0, d.rR)(n));
    return (0, i.jsx)(l.Tooltip, {
        text: _.name,
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: d } = e;
            return (0, i.jsx)('div', {
                className: s()(h.wrapper, r),
                children: (0, i.jsx)(l.FocusRing, {
                    children: (0, i.jsx)('button', {
                        onMouseEnter: o,
                        onMouseLeave: d,
                        className: s()(h.inner, p),
                        type: 'button',
                        disabled: t,
                        style: { backgroundImage: "url('".concat((0, a.wj)(f) ? _.icon.darkSVG : _.icon.lightSVG, "')") },
                        onClick:
                            null != x
                                ? x
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
