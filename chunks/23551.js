n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(726542),
    d = n(122021),
    u = n(231757),
    h = n(626135),
    m = n(981631),
    g = n(11553);
let x = (e) => {
    let { disabled: t = !1, type: n, className: s, innerClassName: x, onConnect: _ } = e,
        p = (0, o.ZP)(),
        E = c.Z.get((0, d.rR)(n));
    return (0, i.jsx)(a.ua7, {
        text: E.name,
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: d } = e;
            return (0, i.jsx)('div', {
                className: l()(g.wrapper, s),
                children: (0, i.jsx)(a.tEY, {
                    children: (0, i.jsx)('button', {
                        onMouseEnter: o,
                        onMouseLeave: d,
                        className: l()(g.inner, x),
                        type: 'button',
                        disabled: t,
                        style: { backgroundImage: "url('".concat((0, r.wj)(p) ? E.icon.darkSVG : E.icon.lightSVG, "')") },
                        onClick:
                            null != _
                                ? _
                                : () =>
                                      (function (e) {
                                          let t = c.Z.get(e);
                                          (0, u.Z)({
                                              platformType: t.type,
                                              location: 'Friends List'
                                          }),
                                              h.default.track(m.rMx.ACCOUNT_LINK_STEP, {
                                                  previous_step: 'desktop connections',
                                                  current_step: 'desktop oauth',
                                                  platform_type: t.type
                                              });
                                      })(n),
                        'aria-label': E.name
                    })
                })
            });
        }
    });
};
