"use strict";
n.d(t, { Ay: () => A, Z9: () => g, o9: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(517905),
    c = n(544028),
    d = n(287809),
    _ = n(685073),
    f = n(743981),
    p = n(985018),
    h = n(583970),
    m = n(478858);
let g = i.memo(function (e) {
        let { src: t, className: n, size: i = f.Sl.SIZE_16 } = e;
        return null == t ? null : (0, r.jsx)("img", { src: t, alt: "", className: s()(m.qS, n), width: i, height: i });
    }),
    E = i.memo(function (e) {
        let {
            guildId: t,
            guildTag: n,
            guildBadge: i,
            className: a,
            textClassName: o,
            badgeClassName: u,
            onClick: c,
            onMouseEnter: d,
            textVariant: E = "text-xs/semibold",
            textColor: A = "text-default",
            badgeSize: I = f.Sl.SIZE_14,
            inline: T = !0,
        } = e;
        return (0, r.jsx)(l.DUT, {
            "aria-label": p.intl.formatToPlainString(h.default["fw2p/x"], { tag: n }),
            tag: "span",
            tabIndex: null == c ? -1 : void 0,
            onClick: c,
            onMouseEnter: d,
            className: s()(m.nz, T && m.os, null != c && m.vk, a),
            children: (0, r.jsxs)(l.Text, {
                variant: E,
                lineClamp: 1,
                color: A,
                tag: "span",
                className: s()(m.Qq, o),
                children: [
                    null != i && "string" == typeof i
                        ? (0, r.jsx)(g, { src: (0, _.gC)(t, i, I), size: I, className: u })
                        : i,
                    (0, r.jsx)("span", { className: m.em, children: n }),
                ],
            }),
        });
    }),
    A = i.memo(function (e) {
        let {
                primaryGuild: t,
                userId: n,
                contextGuildId: a,
                className: f,
                containerClassName: p,
                textVariant: h,
                textColor: g,
                badgeSize: A,
                disableGuildProfile: I = !1,
                inline: T = !0,
                onShowProfile: y,
                onClose: S,
            } = e,
            v = i.useRef(null),
            C = (0, o.bG)([d.default], () => d.default.getUser(n), [n]),
            b = (0, o.bG)([c.A], () => c.A.theme),
            N = void 0 !== t ? t : C?.primaryGuild,
            { tag: R, badge: O, guildId: D } = (0, _.Zo)(N);
        return (0, _.Wb)(n, a, N) && null != D
            ? I
                ? (0, r.jsx)(E, {
                      guildId: D,
                      guildTag: R,
                      guildBadge: O,
                      className: s()(m.Zy, f),
                      textVariant: h,
                      textColor: g,
                      badgeSize: A,
                      inline: T,
                  })
                : (0, r.jsx)(l.wXn, {
                      theme: b,
                      children: (0, r.jsx)(u.A, {
                          guildId: D,
                          onRequestOpen: y,
                          onClose: S,
                          targetElementRef: v,
                          children: (e) =>
                              (0, r.jsx)("span", {
                                  className: p,
                                  ref: v,
                                  children: (0, r.jsx)(E, {
                                      guildId: D,
                                      guildTag: R,
                                      guildBadge: O,
                                      className: f,
                                      textVariant: h,
                                      textColor: g,
                                      badgeSize: A,
                                      inline: T,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    });
