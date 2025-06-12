n.d(t, {
    ZP: () => y,
    eI: () => E,
    m0: () => b
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(857395),
    u = n(210887),
    d = n(594174),
    _ = n(731722),
    f = n(131085),
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
        let { src: t, tag: n, className: i, size: a = f.Gg.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)('img', {
                  src: t,
                  alt: p.intl.formatToPlainString(p.t.uPLDZG, { tag: n }),
                  className: o()(h.badge, i),
                  width: a,
                  height: a
              });
    }),
    b = i.memo(function (e) {
        let { guildId: t, guildTag: n, guildBadge: i, className: a, textClassName: s, badgeClassName: c, onClick: u, onMouseEnter: d, textVariant: p = 'text-xs/semibold', textColor: m = 'text-normal', badgeSize: g = f.Gg.SIZE_12, inline: b = !0 } = e;
        return (0, r.jsx)(l.P3F, {
            tag: 'span',
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: d,
            className: o()(h.chipletContainerInner, b && h.chipletContainerInline, null != u && h.clickable, a),
            children: (0, r.jsxs)(l.Text, {
                variant: p,
                lineClamp: 1,
                color: m,
                tag: 'span',
                className: o()(h.text, s),
                children: [
                    null != i && 'string' == typeof i
                        ? (0, r.jsx)(E, {
                              src: (0, _.Ic)(t, i, g),
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
        let { primaryGuild: n, userId: a, contextGuildId: f, className: p, containerClassName: m, textVariant: E, textColor: y, badgeSize: O, disableGuildProfile: v = !1, inline: I = !0, onShowProfile: T, onClose: S } = e,
            A = i.useRef(null),
            N = (0, s.e7)([d.default], () => d.default.getUser(a), [a]),
            C = (0, s.e7)([u.Z], () => u.Z.theme),
            R = null != (t = null == N ? void 0 : N.primaryGuild) ? t : n,
            { tag: P, badge: w, guildId: D } = (0, _.Pb)(R);
        return (0, _.yF)(a, f) && null != D
            ? v
                ? (0, r.jsx)(b, {
                      guildId: D,
                      guildTag: P,
                      guildBadge: w,
                      className: o()(h.noTooltip, p),
                      textVariant: E,
                      textColor: y,
                      badgeSize: O,
                      inline: I
                  })
                : (0, r.jsx)(l.ze6, {
                      theme: C,
                      children: (0, r.jsx)(c.Z, {
                          guildId: D,
                          onRequestOpen: T,
                          onClose: S,
                          targetElementRef: A,
                          children: (e) =>
                              (0, r.jsx)('span', {
                                  className: m,
                                  ref: A,
                                  children: (0, r.jsx)(
                                      b,
                                      g(
                                          {
                                              guildId: D,
                                              guildTag: P,
                                              guildBadge: w,
                                              className: p,
                                              textVariant: E,
                                              textColor: y,
                                              badgeSize: O,
                                              inline: I
                                          },
                                          e
                                      )
                                  )
                              })
                      })
                  })
            : null;
    });
