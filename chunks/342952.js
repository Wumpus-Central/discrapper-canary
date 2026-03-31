"use strict";
n.d(t, { A: () => y, I: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(990078),
    c = n(397927),
    d = n(442433),
    _ = n(538451),
    f = n(562153),
    p = n(427262),
    h = n(985018),
    m = n(175075);
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c._3J.SIZE_24;
    switch (e) {
        case c._3J.SIZE_16:
            return m.nc;
        case c._3J.SIZE_20:
            return m.qV;
        case c._3J.SIZE_24:
        default:
            return m.q1;
    }
}
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c._3J.SIZE_24;
    switch (e) {
        case c._3J.SIZE_16:
        case c._3J.SIZE_20:
            return "text-xxs/semibold";
        case c._3J.SIZE_24:
        default:
            return "text-xs/medium";
    }
}
function A(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: i,
            channelId: s,
            size: o = c._3J.SIZE_24,
            shouldShowOverflowCount: d,
            disableUsernameTooltip: _,
        } = e,
        h = E(o),
        g = d ? n - 1 : Math.min(t.length, n),
        A = g - 1,
        I = l()(t)
            .take(g)
            .map((e, t) => {
                let n = f.Ay.getNickname(i, s, e) ?? p.Ay.getName(e),
                    l = t === A && !d,
                    E = a()(m.my, h, l && m.NE),
                    g = (0, r.jsx)(c.euF, { src: e.getAvatarURL(i, 24), size: o, "aria-hidden": !0 });
                return (0, r.jsx)(
                    "li",
                    {
                        className: E,
                        children: _
                            ? (0, r.jsx)("span", { role: "img", "aria-label": n, children: g })
                            : (0, r.jsx)(u.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, r.jsx)("span", { role: "img", "aria-label": n, children: g }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("ul", { className: m.HD, children: I });
}
function I(e) {
    let { count: t, textVariant: n, color: i = "interactive-text-default", size: s = c._3J.SIZE_24, className: o } = e,
        l = E(s),
        u = n ?? g(s);
    return (0, r.jsxs)(c.Text, {
        variant: u,
        color: i,
        className: a()(m.ju, l, o),
        children: [
            (0, r.jsx)(c.AC4, { children: h.intl.formatToPlainString(h.t.RGr9tj, { count: t }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function T(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: i,
            channelId: s,
            size: a = c._3J.SIZE_24,
            overflowCountClassName: o,
            overflowCountColor: l = "interactive-text-default",
            hideOverflowCount: u = !1,
        } = e,
        d = t.length - n,
        _ = d + 1,
        f = d > 0 && !u;
    return t.length <= 0
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A, {
                      users: t,
                      maxUsers: n,
                      guildId: i,
                      channelId: s,
                      size: a,
                      shouldShowOverflowCount: f,
                      disableUsernameTooltip: !0,
                  }),
                  f && (0, r.jsx)(I, { count: _, color: l, size: a, className: o }),
              ],
          });
}
function S(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, "aria-hidden": s, ...o } = e;
    return (0, r.jsx)("div", {
        role: "group",
        className: a()(t, m.HD),
        "aria-label": n,
        "aria-labelledby": i,
        "aria-hidden": s,
        children: (0, r.jsx)(T, { ...o }),
    });
}
function y(e) {
    let {
            users: t,
            maxUsers: s,
            guildId: o,
            channelId: l,
            className: u,
            size: p = c._3J.SIZE_24,
            overflowCountVariant: E,
            overflowCountColor: g = "interactive-text-default",
            overflowCountClassName: T,
            hideOverflowCount: S = !1,
            disableUsernameTooltip: y = !1,
            disableUserPopout: v = !1,
            onClickOverflow: N,
            onFocusOverflow: C,
            onUserClick: R,
            onUserPopoutRequestClose: O,
            "aria-label": b,
            "aria-labelledby": D,
            "aria-hidden": L,
        } = e,
        [w, M] = i.useState(!1),
        P = i.useRef(null),
        x = t.length - s,
        k = x + 1,
        U = x > 0 && !S && !L,
        G = () =>
            (0, r.jsx)(c.lGe, {
                className: m.XM,
                "aria-label": b,
                "aria-labelledby": D,
                children: (0, r.jsx)(c.HOs, {
                    className: m.XG,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            _.A,
                            {
                                user: e,
                                guildId: o,
                                channelId: l,
                                nick: f.Ay.getNickname(o, l, e),
                                disablePopout: "function" == typeof v ? v(e.id) : v,
                                onClick: R,
                                onPopoutRequestClose: () => {
                                    M(!1), O?.();
                                },
                                onContextMenu: (t) =>
                                    (0, d.L3)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("97262"),
                                                n.e("11478"),
                                                n.e("32418"),
                                                n.e("73417"),
                                            ]).then(n.bind(n, 668569));
                                            return (n) => (0, r.jsx)(t, { ...n, user: e, guildId: o, channelId: l });
                                        },
                                        { onClose: () => M(!1) },
                                    ),
                            },
                            e.id,
                        ),
                    ),
                }),
            }),
        F = () =>
            U
                ? (0, r.jsx)(
                      c.YNO,
                      {
                          targetElementRef: P,
                          renderPopout: G,
                          shouldShow: w,
                          position: "bottom",
                          onRequestClose: () => M(!1),
                          children: (e) =>
                              (0, r.jsx)(c.DUT, {
                                  ...e,
                                  innerRef: P,
                                  className: m.x6,
                                  onFocus: C,
                                  onClick: (e) => {
                                      N?.(e), M(!0);
                                  },
                                  "aria-label": h.intl.formatToPlainString(h.t.R8Z8Qr, { count: k }),
                                  children: (0, r.jsx)(I, {
                                      count: k,
                                      textVariant: E,
                                      color: g,
                                      size: p,
                                      className: T,
                                  }),
                              }),
                      },
                      "overflow",
                  )
                : null;
    return t.length <= 0
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-label": b,
              "aria-labelledby": D,
              className: a()(u, m.HD),
              "aria-hidden": L,
              children: [
                  (0, r.jsx)(A, {
                      users: t,
                      maxUsers: s,
                      guildId: o,
                      channelId: l,
                      size: p,
                      shouldShowOverflowCount: U,
                      disableUsernameTooltip: y,
                  }),
                  F(),
              ],
          });
}
