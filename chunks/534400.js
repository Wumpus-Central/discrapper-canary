n.d(t, {
    Ay: () => O,
    Z9: () => b,
    o9: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(517905),
    u = n(544028),
    d = n(287809),
    f = n(685073),
    p = n(743981),
    _ = n(985018),
    h = n(583970),
    m = n(478858);

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
        let { src: t, className: n, size: i = p.Sl.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)("img", {
                  src: t,
                  alt: "",
                  className: s()(m.qS, n),
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
            textClassName: o,
            badgeClassName: c,
            onClick: u,
            onMouseEnter: d,
            textVariant: g = "text-xs/semibold",
            textColor: E = "text-default",
            badgeSize: y = p.Sl.SIZE_14,
            inline: O = !0,
        } = e;
        return (0, r.jsx)(l.DUT, {
            "aria-label": _.intl.formatToPlainString(h.default["fw2p/x"], {
                tag: n,
            }),
            tag: "span",
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: d,
            className: s()(m.nz, O && m.os, null != u && m.vk, a),
            children: (0, r.jsxs)(l.Text, {
                variant: g,
                lineClamp: 1,
                color: E,
                tag: "span",
                className: s()(m.Qq, o),
                children: [
                    null != i && "string" == typeof i
                        ? (0, r.jsx)(b, {
                              src: (0, f.gC)(t, i, y),
                              size: y,
                              className: c,
                          })
                        : i,
                    (0, r.jsx)("span", {
                        className: m.em,
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
                inline: A = !0,
                onShowProfile: v,
                onClose: S,
            } = e,
            I = i.useRef(null),
            T = (0, o.bG)([d.default], () => d.default.getUser(n), [n]),
            C = (0, o.bG)([u.A], () => u.A.theme),
            N = void 0 !== t ? t : null == T ? void 0 : T.primaryGuild,
            { tag: R, badge: w, guildId: P } = (0, f.Zo)(N);
        return (0, f.Wb)(n, a, N) && null != P
            ? O
                ? (0, r.jsx)(y, {
                      guildId: P,
                      guildTag: R,
                      guildBadge: w,
                      className: s()(m.Zy, p),
                      textVariant: h,
                      textColor: g,
                      badgeSize: b,
                      inline: A,
                  })
                : (0, r.jsx)(l.wXn, {
                      theme: C,
                      children: (0, r.jsx)(c.A, {
                          guildId: P,
                          onRequestOpen: v,
                          onClose: S,
                          targetElementRef: I,
                          children: (e) =>
                              (0, r.jsx)("span", {
                                  className: _,
                                  ref: I,
                                  children: (0, r.jsx)(
                                      y,
                                      E(
                                          {
                                              guildId: P,
                                              guildTag: R,
                                              guildBadge: w,
                                              className: p,
                                              textVariant: h,
                                              textColor: g,
                                              badgeSize: b,
                                              inline: A,
                                          },
                                          e,
                                      ),
                                  ),
                              }),
                      }),
                  })
            : null;
    });
