(r.d(t, { Z: () => C }), r(388685), r(953529));
var n = r(255367),
    o = r(73800),
    a = r(120356),
    s = r.n(a),
    i = r(481060),
    l = r(762762),
    c = r(973772),
    d = r(795338),
    u = r(880419),
    p = r(279604),
    f = r(535396),
    x = r(93841),
    m = r(388032),
    j = r(153013);
function C(e) {
    let { canUseBoosts: t, guildId: r, powerup: a } = e,
        [C, b] = o.useState(!1),
        h = (0, c.Z)(r, a).type !== f.A3.INACTIVE,
        { disabled: v } = (0, l.Z)(r, a, h),
        { onShowDeactivate: g, onActivate: O } = (0, p.ZP)(r, a),
        y = !t || v,
        k = h && !y;
    return (0, n.jsxs)(i.P3F, {
        className: s()(j.perkCard, { [j.disabled]: y }),
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        'aria-disabled': y,
        onClick: (e) => {
            (e.stopPropagation(), y || (h ? null == g || g(e) : null == O || O(e, { shouldCloseAllModals: !1 })));
        },
        children: [
            (0, n.jsx)('div', {
                className: s()(j.perkCardImage, { [j.active]: h }),
                children: (0, n.jsx)(d.m, {
                    powerup: a,
                    isHovering: C
                })
            }),
            (0, n.jsxs)('div', {
                className: j.footerContainer,
                children: [
                    (0, n.jsxs)('div', {
                        className: j.footerDetails,
                        children: [
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(i.Text, {
                                    variant: 'text-sm/medium',
                                    color: h || C ? 'text-primary' : 'text-secondary',
                                    children: a.description
                                })
                            }),
                            (0, n.jsx)('div', {
                                children: h
                                    ? (0, n.jsxs)('div', {
                                          className: j.statusContainer,
                                          children: [
                                              (0, n.jsx)(i.owK, {
                                                  size: 'xs',
                                                  color: i.TVs.colors.STATUS_POSITIVE
                                              }),
                                              (0, n.jsx)(i.Text, {
                                                  variant: 'text-sm/bold',
                                                  color: 'text-feedback-positive',
                                                  children: m.intl.string(x.default.FFLkm5)
                                              })
                                          ]
                                      })
                                    : (0, n.jsxs)('div', {
                                          className: j.statusContainer,
                                          children: [
                                              (0, n.jsx)(i.$Eu, {
                                                  size: 'sm',
                                                  color: i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                                              }),
                                              (0, n.jsx)(i.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-secondary',
                                                  children: m.intl.formatToPlainString(m.t.t2Wbo6, {
                                                      required: a.cost,
                                                      decorator: ''
                                                  })
                                              })
                                          ]
                                      })
                            })
                        ]
                    }),
                    k &&
                        (0, n.jsx)(u.Z, {
                            compact: !0,
                            iconSize: 'md',
                            guildId: r,
                            powerup: a,
                            onClick: g,
                            className: j.toggleButton
                        })
                ]
            })
        ]
    });
}
