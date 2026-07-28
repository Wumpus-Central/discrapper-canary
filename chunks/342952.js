"use strict";
n.d(t, { A: () => D, I: () => y });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(866665),
    c = n(778712),
    u = n(97808),
    _ = n(834730),
    E = n(140735),
    A = n(305866),
    h = n(364522),
    I = n(939249),
    f = n(922016),
    p = n(442433),
    T = n(538451),
    m = n(562153),
    g = n(427262),
    S = n(375708),
    N = n(150507);
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c._3.SIZE_24;
    switch (e) {
        case c._3.SIZE_16:
            return N.nc;
        case c._3.SIZE_20:
            return N.qV;
        case c._3.SIZE_32:
            return N.Hb;
        case c._3.SIZE_24:
        default:
            return N.q1;
    }
}
function O(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: r,
            channelId: a,
            size: l = c._3.SIZE_24,
            shouldShowOverflowCount: _,
            disableUsernameTooltip: E,
        } = e,
        A = C(l),
        h = _ ? n - 1 : Math.min(t.length, n),
        I = h - 1,
        f = o()(t)
            .take(h)
            .map((e, t) => {
                let n = m.Ay.getNickname(r, a, e) ?? g.Ay.getName(e),
                    o = s()(N.my, A, t === I && !_ && N.NE),
                    h = (0, i.jsx)(u.eu, { src: e.getAvatarURL(r, (0, c.FT)(l)), size: l, "aria-hidden": !0 });
                return (0, i.jsx)(
                    "li",
                    {
                        className: o,
                        children: E
                            ? (0, i.jsx)("span", { role: "img", "aria-label": n, children: h })
                            : (0, i.jsx)(d.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)("span", { role: "img", "aria-label": n, children: h }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, i.jsx)("ul", { className: N.HD, children: f });
}
function R(e) {
    let { count: t, textVariant: n, color: r = "interactive-text-default", size: a = c._3.SIZE_24, className: l } = e,
        o = C(a),
        d =
            n ??
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c._3.SIZE_24;
                switch (e) {
                    case c._3.SIZE_16:
                    case c._3.SIZE_20:
                        return "text-xxs/semibold";
                    case c._3.SIZE_32:
                        return "text-sm/medium";
                    case c._3.SIZE_24:
                    default:
                        return "text-xs/medium";
                }
            })(a);
    return (0, i.jsxs)(_.E, {
        variant: d,
        color: r,
        className: s()(N.ju, o, l),
        children: [
            (0, i.jsx)(E.A, { children: S.intl.formatToPlainString(S.t.RGr9tj, { count: t }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function L(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: r,
            channelId: a,
            size: s = c._3.SIZE_24,
            overflowCountClassName: l,
            overflowCountColor: o = "interactive-text-default",
            hideOverflowCount: d = !1,
        } = e,
        u = t.length - n,
        _ = u > 0 && !d;
    return t.length <= 0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(O, {
                      users: t,
                      maxUsers: n,
                      guildId: r,
                      channelId: a,
                      size: s,
                      shouldShowOverflowCount: _,
                      disableUsernameTooltip: !0,
                  }),
                  _ && (0, i.jsx)(R, { count: u + 1, color: o, size: s, className: l }),
              ],
          });
}
function y(e) {
    let { className: t, "aria-label": n, "aria-labelledby": r, "aria-hidden": a, ...l } = e;
    return (0, i.jsx)("div", {
        role: "group",
        className: s()(t, N.HD),
        "aria-label": n,
        "aria-labelledby": r,
        "aria-hidden": a,
        children: (0, i.jsx)(L, { ...l }),
    });
}
function D(e) {
    let {
            ref: t,
            users: a,
            maxUsers: l,
            guildId: o,
            channelId: d,
            className: u,
            size: _ = c._3.SIZE_24,
            overflowCountVariant: E,
            overflowCountColor: g = "interactive-text-default",
            overflowCountClassName: C,
            popoutClassName: L,
            hideOverflowCount: y = !1,
            disableUsernameTooltip: D = !1,
            disableUserPopout: v = !1,
            onClickOverflow: b,
            onFocusOverflow: M,
            onUserClick: P,
            onUserListOpenChange: U,
            onUserPopoutRequestClose: w,
            "aria-label": G,
            "aria-labelledby": x,
            "aria-hidden": k,
        } = e,
        [F, V] = r.useState(!1),
        B = r.useRef(null),
        H = r.useRef(null),
        j = a.length - l,
        W = j + 1,
        Y = j > 0 && !y && !k,
        K = r.useCallback(() => {
            (H.current = null), V(!1), U?.(!1);
        }, [U]),
        $ = r.useCallback(
            (e) => {
                (H.current = e ?? B.current), V(!0), U?.(!0);
            },
            [U],
        );
    return (r.useImperativeHandle(t, () => ({ openUserList: $, closeUserList: K }), [$, K]), a.length <= 0)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      role: "group",
                      "aria-label": G,
                      "aria-labelledby": x,
                      className: s()(u, N.HD),
                      "aria-hidden": k,
                      children: [
                          (0, i.jsx)(O, {
                              users: a,
                              maxUsers: l,
                              guildId: o,
                              channelId: d,
                              size: _,
                              shouldShowOverflowCount: Y,
                              disableUsernameTooltip: D,
                          }),
                          Y &&
                              (0, i.jsx)(I.D, {
                                  innerRef: B,
                                  className: N.x6,
                                  onFocus: M,
                                  onClick: (e) => {
                                      b?.(e), $();
                                  },
                                  "aria-expanded": F,
                                  "aria-label": S.intl.formatToPlainString(S.t.R8Z8Qr, { count: W }),
                                  children: (0, i.jsx)(R, {
                                      count: W,
                                      textVariant: E,
                                      color: "interactive-text-default" === g ? "currentColor" : g,
                                      size: _,
                                      className: C,
                                  }),
                              }),
                      ],
                  }),
                  F &&
                      (0, i.jsx)(f.Y, {
                          targetElementRef: H,
                          renderPopout: () =>
                              (0, i.jsx)(A.l, {
                                  className: N.XM,
                                  "aria-label": G,
                                  "aria-labelledby": x,
                                  children: (0, i.jsx)(h.Ip, {
                                      className: s()(N.XG, L),
                                      children: a.map((e) =>
                                          (0, i.jsx)(
                                              T.A,
                                              {
                                                  user: e,
                                                  guildId: o,
                                                  channelId: d,
                                                  nick: m.Ay.getNickname(o, d, e),
                                                  disablePopout: "function" == typeof v ? v(e.id) : v,
                                                  onClick: P,
                                                  onPopoutRequestClose: () => {
                                                      w?.();
                                                  },
                                                  onContextMenu: (t) =>
                                                      (0, p.L3)(
                                                          t,
                                                          async () => {
                                                              let { default: t } = await Promise.all([
                                                                  n.e("97422"),
                                                                  n.e("97705"),
                                                                  n.e("26132"),
                                                                  n.e("46652"),
                                                                  n.e("93190"),
                                                                  n.e("34552"),
                                                                  n.e("8757"),
                                                                  n.e("85968"),
                                                                  n.e("89673"),
                                                                  n.e("68403"),
                                                                  n.e("29787"),
                                                                  n.e("82073"),
                                                                  n.e("97558"),
                                                                  n.e("91994"),
                                                                  n.e("76665"),
                                                                  n.e("76273"),
                                                                  n.e("24198"),
                                                                  n.e("56753"),
                                                                  n.e("14461"),
                                                                  n.e("72883"),
                                                                  n.e("25486"),
                                                                  n.e("42204"),
                                                                  n.e("49644"),
                                                                  n.e("42191"),
                                                                  n.e("32418"),
                                                              ]).then(n.bind(n, 668569));
                                                              return (n) =>
                                                                  (0, i.jsx)(t, {
                                                                      ...n,
                                                                      user: e,
                                                                      guildId: o,
                                                                      channelId: d,
                                                                  });
                                                          },
                                                          { onClose: () => K() },
                                                      ),
                                              },
                                              e.id,
                                          ),
                                      ),
                                  }),
                              }),
                          shouldShow: !0,
                          position: "bottom",
                          onRequestClose: K,
                          children: () => null,
                      }),
              ],
          });
}
