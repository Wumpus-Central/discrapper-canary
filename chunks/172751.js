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
    h = n(551199),
    m = n(261905);
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
                  className: o()(m.badge, n),
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
            "aria-label": _.intl.formatToPlainString(h.default["fw2p/x"], { tag: n }),
            tag: "span",
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: d,
            className: o()(m.chipletContainerInner, O && m.chipletContainerInline, null != u && m.clickable, a),
            children: (0, r.jsxs)(l.Text, {
                variant: g,
                lineClamp: 1,
                color: E,
                tag: "span",
                className: o()(m.text, s),
                children: [
                    null != i && "string" == typeof i
                        ? (0, r.jsx)(b, {
                              src: (0, f.Ic)(t, i, y),
                              size: y,
                              className: c,
                          })
                        : i,
                    (0, r.jsx)("span", {
                        className: m.tagText,
                        children: n,
                    }),
                ],
            }),
        });
    }),
    O = i.memo(function (e) {
        let {
                primaryGuild: t,
                userId: n,
                contextGuildId: a,
                className: p,
                containerClassName: _,
                textVariant: h,
                textColor: g,
                badgeSize: b,
                disableGuildProfile: O = !1,
                inline: v = !0,
                onShowProfile: S,
                onClose: I,
            } = e,
            T = i.useRef(null),
            C = (0, s.e7)([d.default], () => d.default.getUser(n), [n]),
            A = (0, s.e7)([u.Z], () => u.Z.theme),
            N = void 0 !== t ? t : null == C ? void 0 : C.primaryGuild,
            { tag: P, badge: w, guildId: R } = (0, f.Pb)(N);
        return (0, f.yF)(n, a, N) && null != R
            ? O
                ? (0, r.jsx)(y, {
                      guildId: R,
                      guildTag: P,
                      guildBadge: w,
                      className: o()(m.noTooltip, p),
                      textVariant: h,
                      textColor: g,
                      badgeSize: b,
                      inline: v,
                  })
                : (0, r.jsx)(l.ze6, {
                      theme: A,
                      children: (0, r.jsx)(c.Z, {
                          guildId: R,
                          onRequestOpen: S,
                          onClose: I,
                          targetElementRef: T,
                          children: (e) =>
                              (0, r.jsx)("span", {
                                  className: _,
                                  ref: T,
                                  children: (0, r.jsx)(
                                      y,
                                      E(
                                          {
                                              guildId: R,
                                              guildTag: P,
                                              guildBadge: w,
                                              className: p,
                                              textVariant: h,
                                              textColor: g,
                                              badgeSize: b,
                                              inline: v,
                                          },
                                          e,
                                      ),
                                  ),
                              }),
                      }),
                  })
            : null;
    });
