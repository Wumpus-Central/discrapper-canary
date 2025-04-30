n.d(t, {
    ZP: () => y,
    eI: () => E,
    m0: () => b
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(857395),
    u = n(210887),
    d = n(594174),
    f = n(731722),
    _ = n(131085),
    p = n(388032),
    h = n(953790);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = i.memo(function (e) {
        let { src: t, tag: n, className: i, size: o = _.Gg.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)('img', {
                  src: t,
                  alt: p.intl.formatToPlainString(p.t.uPLDZG, { tag: n }),
                  className: a()(h.badge, i),
                  width: o,
                  height: o
              });
    }),
    b = i.memo(function (e) {
        let { guildId: t, guildTag: n, guildBadge: i, className: o, textClassName: s, badgeClassName: c, onClick: u, onMouseEnter: d, textVariant: p = 'text-xs/semibold', textColor: m = 'text-normal', badgeSize: g = _.Gg.SIZE_12, inline: b = !0 } = e;
        return (0, r.jsx)(l.P3F, {
            tag: 'span',
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: d,
            className: a()(h.chipletContainerInner, b && h.chipletContainerInline, null != u && h.clickable, o),
            children: (0, r.jsxs)(l.Text, {
                variant: p,
                color: m,
                tag: 'span',
                className: a()(h.text, s),
                children: [
                    null != i && 'string' == typeof i
                        ? (0, r.jsx)(E, {
                              src: (0, f.Ic)(t, i, g),
                              tag: null == n ? void 0 : n.toString(),
                              size: g,
                              className: c
                          })
                        : i,
                    (0, r.jsx)('span', {
                        className: h.unselectable,
                        children: n
                    })
                ]
            })
        });
    }),
    y = i.memo(function (e) {
        var t;
        let { primaryGuild: n, userId: i, contextGuildId: o, className: _, containerClassName: p, textVariant: m, textColor: E, badgeSize: y, disableGuildProfile: O = !1, inline: v = !0, onShowProfile: I, onClose: S } = e,
            T = (0, s.e7)([d.default], () => d.default.getUser(i), [i]),
            A = (0, s.e7)([u.Z], () => u.Z.theme),
            N = null != (t = null == T ? void 0 : T.primaryGuild) ? t : n,
            { tag: C, badge: R, guildId: P } = (0, f.Pb)(N);
        return (0, f.yF)(i, o) && null != P
            ? O
                ? (0, r.jsx)(b, {
                      guildId: P,
                      guildTag: C,
                      guildBadge: R,
                      className: a()(h.noTooltip, _),
                      textVariant: m,
                      textColor: E,
                      badgeSize: y,
                      inline: v
                  })
                : (0, r.jsx)(l.ze6, {
                      theme: A,
                      children: (0, r.jsx)(c.Z, {
                          guildId: P,
                          onRequestOpen: I,
                          onClose: S,
                          children: (e) =>
                              (0, r.jsx)('span', {
                                  className: p,
                                  children: (0, r.jsx)(
                                      b,
                                      g(
                                          {
                                              guildId: P,
                                              guildTag: C,
                                              guildBadge: R,
                                              className: _,
                                              textVariant: m,
                                              textColor: E,
                                              badgeSize: y,
                                              inline: v
                                          },
                                          e
                                      )
                                  )
                              })
                      })
                  })
            : null;
    });
