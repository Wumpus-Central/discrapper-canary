"use strict";
n.d(t, { A: () => S, I: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(990078),
    c = n(397927),
    d = n(442433),
    _ = n(538451),
    f = n(562153),
    p = n(427262),
    h = n(985018),
    m = n(232358);
function g() {
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
function E() {
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
            channelId: a,
            size: o = c._3J.SIZE_24,
            shouldShowOverflowCount: d,
            disableUsernameTooltip: _,
        } = e,
        h = g(o),
        E = d ? n - 1 : Math.min(t.length, n),
        A = E - 1,
        I = l()(t)
            .take(E)
            .map((e, t) => {
                let n = f.Ay.getNickname(i, a, e) ?? p.Ay.getName(e),
                    l = t === A && !d,
                    g = s()(m.my, h, l && m.NE),
                    E = (0, r.jsx)(c.euF, { src: e.getAvatarURL(i, 24), size: o, "aria-hidden": !0 });
                return (0, r.jsx)(
                    "li",
                    {
                        className: g,
                        children: _
                            ? (0, r.jsx)("span", { role: "img", "aria-label": n, children: E })
                            : (0, r.jsx)(u.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, r.jsx)("span", { role: "img", "aria-label": n, children: E }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("ul", { className: m.HD, children: I });
}
function I(e) {
    let { count: t, textVariant: n, color: i = "interactive-text-default", size: a = c._3J.SIZE_24, className: o } = e,
        l = g(a),
        u = n ?? E(a);
    return (0, r.jsxs)(c.Text, {
        variant: u,
        color: i,
        className: s()(m.ju, l, o),
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
            channelId: a,
            size: s = c._3J.SIZE_24,
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
                      channelId: a,
                      size: s,
                      shouldShowOverflowCount: f,
                      disableUsernameTooltip: !0,
                  }),
                  f && (0, r.jsx)(I, { count: _, color: l, size: s, className: o }),
              ],
          });
}
function y(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, "aria-hidden": a, ...o } = e;
    return (0, r.jsx)("div", {
        role: "group",
        className: s()(t, m.HD),
        "aria-label": n,
        "aria-labelledby": i,
        "aria-hidden": a,
        children: (0, r.jsx)(T, { ...o }),
    });
}
function S(e) {
    let {
            users: t,
            maxUsers: a,
            guildId: o,
            channelId: l,
            className: u,
            size: p = c._3J.SIZE_24,
            overflowCountVariant: g,
            overflowCountColor: E = "interactive-text-default",
            overflowCountClassName: T,
            hideOverflowCount: y = !1,
            disableUsernameTooltip: S = !1,
            disableUserPopout: v = !1,
            onClickOverflow: C,
            onFocusOverflow: b,
            onUserClick: N,
            onUserPopoutRequestClose: R,
            "aria-label": O,
            "aria-labelledby": D,
            "aria-hidden": L,
        } = e,
        [w, x] = i.useState(!1),
        P = i.useRef(null),
        M = t.length - a,
        k = M + 1,
        U = M > 0 && !y && !L,
        G = () =>
            (0, r.jsx)(c.lGe, {
                className: m.XM,
                "aria-label": O,
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
                                onClick: N,
                                onPopoutRequestClose: () => {
                                    x(!1), R?.();
                                },
                                onContextMenu: (t) =>
                                    (0, d.L3)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("97262"),
                                                n.e("3795"),
                                                n.e("32418"),
                                                n.e("57600"),
                                            ]).then(n.bind(n, 668569));
                                            return (n) => (0, r.jsx)(t, { ...n, user: e, guildId: o, channelId: l });
                                        },
                                        { onClose: () => x(!1) },
                                    ),
                            },
                            e.id,
                        ),
                    ),
                }),
            }),
        V = () =>
            U
                ? (0, r.jsx)(
                      c.YNO,
                      {
                          targetElementRef: P,
                          renderPopout: G,
                          shouldShow: w,
                          position: "bottom",
                          onRequestClose: () => x(!1),
                          children: (e) =>
                              (0, r.jsx)(c.DUT, {
                                  ...e,
                                  innerRef: P,
                                  className: m.x6,
                                  onFocus: b,
                                  onClick: (e) => {
                                      C?.(e), x(!0);
                                  },
                                  "aria-label": h.intl.formatToPlainString(h.t.R8Z8Qr, { count: k }),
                                  children: (0, r.jsx)(I, {
                                      count: k,
                                      textVariant: g,
                                      color: E,
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
              "aria-label": O,
              "aria-labelledby": D,
              className: s()(u, m.HD),
              "aria-hidden": L,
              children: [
                  (0, r.jsx)(A, {
                      users: t,
                      maxUsers: a,
                      guildId: o,
                      channelId: l,
                      size: p,
                      shouldShowOverflowCount: U,
                      disableUsernameTooltip: S,
                  }),
                  V(),
              ],
          });
}
