n.d(t, {
    ZP: () => O,
    eI: () => b,
    m0: () => y,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(857395),
    u = n(210887),
    d = n(594174),
    f = n(731722),
    p = n(131085),
    _ = n(388032),
    m = n(713328),
    h = n(655262);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = i.memo(function (e) {
        let { src: t, className: n, size: i = p.Gg.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)("img", {
                  src: t,
                  alt: "",
                  className: o()(h.badge, n),
                  width: i,
                  height: i,
              });
    }),
    y = i.memo(function (e) {
        let {
            guildId: t,
            guildTag: n,
            guildBadge: i,
            className: a,
            textClassName: s,
            badgeClassName: c,
            onClick: u,
            onMouseEnter: d,
            textVariant: g = "text-xs/semibold",
            textColor: E = "text-default",
            badgeSize: y = p.Gg.SIZE_14,
            inline: O = !0,
        } = e;
        return (0, r.jsx)(l.P3F, {
            "aria-label": _.intl.formatToPlainString(m.default["fw2p/x"], { tag: n }),
            tag: "span",
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: d,
            className: o()(h.chipletContainerInner, O && h.chipletContainerInline, null != u && h.clickable, a),
            children: (0, r.jsxs)(l.Text, {
                variant: g,
                lineClamp: 1,
                color: E,
                tag: "span",
                className: o()(h.text, s),
                children: [
                    null != i && "string" == typeof i
                        ? (0, r.jsx)(b, {
                              src: (0, f.Ic)(t, i, y),
                              size: y,
                              className: c,
                          })
                        : i,
                    (0, r.jsx)("span", {
                        className: h.tagText,
                        children: n,
                    }),
                ],
            }),
        });
    }),
    O = i.memo(function (e) {
        var t;
        let {
                primaryGuild: n,
                userId: a,
                contextGuildId: p,
                className: _,
                containerClassName: m,
                textVariant: g,
                textColor: b,
                badgeSize: O,
                disableGuildProfile: v = !1,
                inline: S = !0,
                onShowProfile: I,
                onClose: T,
            } = e,
            A = i.useRef(null),
            C = (0, s.e7)([d.default], () => d.default.getUser(a), [a]),
            N = (0, s.e7)([u.Z], () => u.Z.theme),
            P = null != (t = null == C ? void 0 : C.primaryGuild) ? t : n,
            { tag: R, badge: D, guildId: w } = (0, f.Pb)(P);
        return (0, f.yF)(a, p) && null != w
            ? v
                ? (0, r.jsx)(y, {
                      guildId: w,
                      guildTag: R,
                      guildBadge: D,
                      className: o()(h.noTooltip, _),
                      textVariant: g,
                      textColor: b,
                      badgeSize: O,
                      inline: S,
                  })
                : (0, r.jsx)(l.ze6, {
                      theme: N,
                      children: (0, r.jsx)(c.Z, {
                          guildId: w,
                          onRequestOpen: I,
                          onClose: T,
                          targetElementRef: A,
                          children: (e) =>
                              (0, r.jsx)("span", {
                                  className: m,
                                  ref: A,
                                  children: (0, r.jsx)(
                                      y,
                                      E(
                                          {
                                              guildId: w,
                                              guildTag: R,
                                              guildBadge: D,
                                              className: _,
                                              textVariant: g,
                                              textColor: b,
                                              badgeSize: O,
                                              inline: S,
                                          },
                                          e,
                                      ),
                                  ),
                              }),
                      }),
                  })
            : null;
    });
