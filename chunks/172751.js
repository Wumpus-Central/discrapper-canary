n.d(t, {
    ZP: () => b,
    eI: () => g,
    m0: () => E
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(857395),
    u = n(594174),
    d = n(731722),
    f = n(131085),
    _ = n(388032),
    p = n(953790);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = i.memo(function (e) {
        let { src: t, tag: n, className: i, size: a = f.Gg.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)('img', {
                  src: t,
                  alt: _.intl.formatToPlainString(_.t.PShNVV, { tag: n }),
                  className: o()(p.badge, i),
                  width: a,
                  height: a
              });
    }),
    E = i.memo(function (e) {
        let { guildId: t, guildTag: n, guildBadge: i, className: a, textClassName: s, badgeClassName: c, onClick: u, onMouseEnter: _, textVariant: h = 'text-xs/semibold', textColor: m = 'text-normal', badgeSize: E = f.Gg.SIZE_12, inline: b = !0 } = e;
        return (0, r.jsx)(l.P3F, {
            tag: 'span',
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: _,
            className: o()(p.chipletContainerInner, b && p.chipletContainerInline, null != u && p.clickable, a),
            children: (0, r.jsxs)(l.Text, {
                variant: h,
                color: m,
                tag: 'span',
                className: o()(p.text, s),
                children: [
                    null != i && 'string' == typeof i
                        ? (0, r.jsx)(g, {
                              src: (0, d.Ic)(t, i, E),
                              tag: null == n ? void 0 : n.toString(),
                              size: E,
                              className: c
                          })
                        : i,
                    (0, r.jsx)('span', {
                        className: p.unselectable,
                        children: n
                    })
                ]
            })
        });
    }),
    b = i.memo(function (e) {
        var t;
        let { primaryGuild: n, userId: i, contextGuildId: a, className: l, containerClassName: f, textVariant: _, textColor: h, badgeSize: g, disableGuildProfile: b = !1, inline: y = !0, onShowProfile: v, onClose: O } = e,
            I = (0, s.e7)([u.default], () => u.default.getUser(i), [i]),
            S = null != (t = null == I ? void 0 : I.primaryGuild) ? t : n,
            { tag: T, badge: A, guildId: N } = (0, d.Pb)(S);
        return (0, d.yF)(i, a) && null != N
            ? b
                ? (0, r.jsx)(E, {
                      guildId: N,
                      guildTag: T,
                      guildBadge: A,
                      className: o()(p.noTooltip, l),
                      textVariant: _,
                      textColor: h,
                      badgeSize: g,
                      inline: y
                  })
                : (0, r.jsx)(c.Z, {
                      guildId: N,
                      onRequestOpen: v,
                      onClose: O,
                      children: (e) =>
                          (0, r.jsx)('span', {
                              className: f,
                              children: (0, r.jsx)(
                                  E,
                                  m(
                                      {
                                          guildId: N,
                                          guildTag: T,
                                          guildBadge: A,
                                          className: l,
                                          textVariant: _,
                                          textColor: h,
                                          badgeSize: g,
                                          inline: y
                                      },
                                      e
                                  )
                              )
                          })
                  })
            : null;
    });
