"use strict";
n.d(t, { A: () => b, I: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(990078),
    c = n(778712),
    d = n(97808),
    _ = n(834730),
    h = n(140735),
    f = n(305866),
    p = n(364522),
    E = n(939249),
    m = n(922016),
    g = n(442433),
    A = n(538451),
    I = n(562153),
    T = n(427262),
    S = n(375708),
    y = n(758963);
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c._3.SIZE_24;
    switch (e) {
        case c._3.SIZE_16:
            return y.nc;
        case c._3.SIZE_20:
            return y.qV;
        case c._3.SIZE_32:
            return y.Hb;
        case c._3.SIZE_24:
        default:
            return y.q1;
    }
}
function N(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: r,
            channelId: s,
            size: o = c._3.SIZE_24,
            shouldShowOverflowCount: _,
            disableUsernameTooltip: h,
        } = e,
        f = C(o),
        p = _ ? n - 1 : Math.min(t.length, n),
        E = p - 1,
        m = l()(t)
            .take(p)
            .map((e, t) => {
                let n = I.Ay.getNickname(r, s, e) ?? T.Ay.getName(e),
                    l = a()(y.my, f, t === E && !_ && y.NE),
                    p = (0, i.jsx)(d.eu, { src: e.getAvatarURL(r, (0, c.FT)(o)), size: o, "aria-hidden": !0 });
                return (0, i.jsx)(
                    "li",
                    {
                        className: l,
                        children: h
                            ? (0, i.jsx)("span", { role: "img", "aria-label": n, children: p })
                            : (0, i.jsx)(u.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)("span", { role: "img", "aria-label": n, children: p }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, i.jsx)("ul", { className: y.HD, children: m });
}
function v(e) {
    let { count: t, textVariant: n, color: r = "interactive-text-default", size: s = c._3.SIZE_24, className: o } = e,
        l = C(s),
        u =
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
            })(s);
    return (0, i.jsxs)(_.E, {
        variant: u,
        color: r,
        className: a()(y.ju, l, o),
        children: [
            (0, i.jsx)(h.A, { children: S.intl.formatToPlainString(S.t.RGr9tj, { count: t }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function R(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: r,
            channelId: s,
            size: a = c._3.SIZE_24,
            overflowCountClassName: o,
            overflowCountColor: l = "interactive-text-default",
            hideOverflowCount: u = !1,
        } = e,
        d = t.length - n,
        _ = d > 0 && !u;
    return t.length <= 0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(N, {
                      users: t,
                      maxUsers: n,
                      guildId: r,
                      channelId: s,
                      size: a,
                      shouldShowOverflowCount: _,
                      disableUsernameTooltip: !0,
                  }),
                  _ && (0, i.jsx)(v, { count: d + 1, color: l, size: a, className: o }),
              ],
          });
}
function O(e) {
    let { className: t, "aria-label": n, "aria-labelledby": r, "aria-hidden": s, ...o } = e;
    return (0, i.jsx)("div", {
        role: "group",
        className: a()(t, y.HD),
        "aria-label": n,
        "aria-labelledby": r,
        "aria-hidden": s,
        children: (0, i.jsx)(R, { ...o }),
    });
}
function b(e) {
    let {
            ref: t,
            users: s,
            maxUsers: o,
            guildId: l,
            channelId: u,
            className: d,
            size: _ = c._3.SIZE_24,
            overflowCountVariant: h,
            overflowCountColor: T = "interactive-text-default",
            overflowCountClassName: C,
            popoutClassName: R,
            hideOverflowCount: O = !1,
            disableUsernameTooltip: b = !1,
            disableUserPopout: D = !1,
            onClickOverflow: L,
            onFocusOverflow: w,
            onUserClick: M,
            onUserListOpenChange: P,
            onUserPopoutRequestClose: x,
            "aria-label": k,
            "aria-labelledby": U,
            "aria-hidden": G,
        } = e,
        [F, V] = r.useState(!1),
        B = r.useRef(null),
        j = r.useRef(null),
        H = s.length - o,
        Y = H + 1,
        W = H > 0 && !O && !G,
        K = r.useCallback(() => {
            (j.current = null), V(!1), P?.(!1);
        }, [P]),
        $ = r.useCallback(
            (e) => {
                (j.current = e ?? B.current), V(!0), P?.(!0);
            },
            [P],
        );
    return (r.useImperativeHandle(t, () => ({ openUserList: $, closeUserList: K }), [$, K]), s.length <= 0)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      role: "group",
                      "aria-label": k,
                      "aria-labelledby": U,
                      className: a()(d, y.HD),
                      "aria-hidden": G,
                      children: [
                          (0, i.jsx)(N, {
                              users: s,
                              maxUsers: o,
                              guildId: l,
                              channelId: u,
                              size: _,
                              shouldShowOverflowCount: W,
                              disableUsernameTooltip: b,
                          }),
                          W &&
                              (0, i.jsx)(E.D, {
                                  innerRef: B,
                                  className: y.x6,
                                  onFocus: w,
                                  onClick: (e) => {
                                      L?.(e), $();
                                  },
                                  "aria-expanded": F,
                                  "aria-label": S.intl.formatToPlainString(S.t.R8Z8Qr, { count: Y }),
                                  children: (0, i.jsx)(v, {
                                      count: Y,
                                      textVariant: h,
                                      color: "interactive-text-default" === T ? "currentColor" : T,
                                      size: _,
                                      className: C,
                                  }),
                              }),
                      ],
                  }),
                  F &&
                      (0, i.jsx)(m.Y, {
                          targetElementRef: j,
                          renderPopout: () =>
                              (0, i.jsx)(f.l, {
                                  className: y.XM,
                                  "aria-label": k,
                                  "aria-labelledby": U,
                                  children: (0, i.jsx)(p.Ip, {
                                      className: a()(y.XG, R),
                                      children: s.map((e) =>
                                          (0, i.jsx)(
                                              A.A,
                                              {
                                                  user: e,
                                                  guildId: l,
                                                  channelId: u,
                                                  nick: I.Ay.getNickname(l, u, e),
                                                  disablePopout: "function" == typeof D ? D(e.id) : D,
                                                  onClick: M,
                                                  onPopoutRequestClose: () => {
                                                      x?.();
                                                  },
                                                  onContextMenu: (t) =>
                                                      (0, g.L3)(
                                                          t,
                                                          async () => {
                                                              let { default: t } = await Promise.all([
                                                                  n.e("41686"),
                                                                  n.e("71406"),
                                                                  n.e("94881"),
                                                                  n.e("26132"),
                                                                  n.e("46652"),
                                                                  n.e("93190"),
                                                                  n.e("34236"),
                                                                  n.e("34552"),
                                                                  n.e("36320"),
                                                                  n.e("90889"),
                                                                  n.e("8757"),
                                                                  n.e("96443"),
                                                                  n.e("85968"),
                                                                  n.e("71577"),
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
                                                                  n.e("49644"),
                                                                  n.e("42204"),
                                                                  n.e("42191"),
                                                                  n.e("32418"),
                                                              ]).then(n.bind(n, 668569));
                                                              return (n) =>
                                                                  (0, i.jsx)(t, {
                                                                      ...n,
                                                                      user: e,
                                                                      guildId: l,
                                                                      channelId: u,
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
