n.d(t, { A: () => p, I: () => g });
var i = n(477900),
    s = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(435558),
    E = n.n(r),
    o = n(866665),
    c = n(834730),
    d = n(140735),
    _ = n(364522),
    S = n(939249),
    u = n(97808),
    A = n(305866),
    I = n(922016),
    h = n(442433),
    T = n(538451),
    R = n(562153),
    N = n(427262),
    m = n(778712),
    C = n(375708),
    P = n(150507);
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m._3.SIZE_24;
    switch (e) {
        case m._3.SIZE_16:
            return P.nc;
        case m._3.SIZE_20:
            return P.qV;
        case m._3.SIZE_32:
            return P.Hb;
        case m._3.SIZE_24:
        default:
            return P.q1;
    }
}
function x(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: s,
            channelId: a,
            size: r = m._3.SIZE_24,
            shouldShowOverflowCount: c,
            disableUsernameTooltip: d,
        } = e,
        _ = O(r),
        S = c ? n - 1 : Math.min(t.length, n),
        A = S - 1,
        I = E()(t)
            .take(S)
            .map((e, t) => {
                let n = R.Ay.getNickname(s, a, e) ?? N.Ay.getName(e),
                    E = l()(P.my, _, t === A && !c && P.NE),
                    S = (0, i.jsx)(u.eu, { src: e.getAvatarURL(s, (0, m.FT)(r)), size: r, "aria-hidden": !0 });
                return (0, i.jsx)(
                    "li",
                    {
                        className: E,
                        children: d
                            ? (0, i.jsx)("span", { role: "img", "aria-label": n, children: S })
                            : (0, i.jsx)(o.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)("span", { role: "img", "aria-label": n, children: S }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, i.jsx)("ul", { className: P.HD, children: I });
}
function f(e) {
    let { count: t, textVariant: n, color: s = "interactive-text-default", size: a = m._3.SIZE_24, className: r } = e,
        E = O(a),
        o =
            n ??
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m._3.SIZE_24;
                switch (e) {
                    case m._3.SIZE_16:
                    case m._3.SIZE_20:
                        return "text-xxs/semibold";
                    case m._3.SIZE_32:
                        return "text-sm/medium";
                    case m._3.SIZE_24:
                    default:
                        return "text-xs/medium";
                }
            })(a);
    return (0, i.jsxs)(c.E, {
        variant: o,
        color: s,
        className: l()(P.ju, E, r),
        children: [
            (0, i.jsx)(d.A, { children: C.intl.formatToPlainString(C.t.RGr9tj, { count: t }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function v(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: s,
            channelId: a,
            size: l = m._3.SIZE_24,
            overflowCountClassName: r,
            overflowCountColor: E = "interactive-text-default",
            hideOverflowCount: o = !1,
        } = e,
        c = t.length - n,
        d = c > 0 && !o;
    return t.length <= 0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x, {
                      users: t,
                      maxUsers: n,
                      guildId: s,
                      channelId: a,
                      size: l,
                      shouldShowOverflowCount: d,
                      disableUsernameTooltip: !0,
                  }),
                  d && (0, i.jsx)(f, { count: c + 1, color: E, size: l, className: r }),
              ],
          });
}
function g(e) {
    let { className: t, "aria-label": n, "aria-labelledby": s, "aria-hidden": a, ...r } = e;
    return (0, i.jsx)("div", {
        role: "group",
        className: l()(t, P.HD),
        "aria-label": n,
        "aria-labelledby": s,
        "aria-hidden": a,
        children: (0, i.jsx)(v, { ...r }),
    });
}
function p(e) {
    let {
            ref: t,
            users: a,
            maxUsers: r,
            guildId: E,
            channelId: o,
            className: c,
            size: d = m._3.SIZE_24,
            overflowCountVariant: u,
            overflowCountColor: N = "interactive-text-default",
            overflowCountClassName: O,
            popoutClassName: v,
            hideOverflowCount: g = !1,
            disableUsernameTooltip: p = !1,
            disableUserPopout: j = !1,
            onClickOverflow: D,
            onFocusOverflow: L,
            onUserClick: M,
            onUserListOpenChange: U,
            onUserPopoutRequestClose: G,
            "aria-label": V,
            "aria-labelledby": F,
            "aria-hidden": w,
        } = e,
        [y, b] = s.useState(!1),
        W = s.useRef(null),
        H = s.useRef(null),
        k = a.length - r,
        B = k + 1,
        Y = k > 0 && !g && !w,
        Z = s.useCallback(() => {
            (H.current = null), b(!1), U?.(!1);
        }, [U]),
        K = s.useCallback(
            (e) => {
                (H.current = e ?? W.current), b(!0), U?.(!0);
            },
            [U],
        );
    return (s.useImperativeHandle(t, () => ({ openUserList: K, closeUserList: Z }), [K, Z]), a.length <= 0)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      role: "group",
                      "aria-label": V,
                      "aria-labelledby": F,
                      className: l()(c, P.HD),
                      "aria-hidden": w,
                      children: [
                          (0, i.jsx)(x, {
                              users: a,
                              maxUsers: r,
                              guildId: E,
                              channelId: o,
                              size: d,
                              shouldShowOverflowCount: Y,
                              disableUsernameTooltip: p,
                          }),
                          Y &&
                              (0, i.jsx)(S.D, {
                                  innerRef: W,
                                  className: P.x6,
                                  onFocus: L,
                                  onClick: (e) => {
                                      D?.(e), K();
                                  },
                                  "aria-expanded": y,
                                  "aria-label": C.intl.formatToPlainString(C.t.R8Z8Qr, { count: B }),
                                  children: (0, i.jsx)(f, {
                                      count: B,
                                      textVariant: u,
                                      color: "interactive-text-default" === N ? "currentColor" : N,
                                      size: d,
                                      className: O,
                                  }),
                              }),
                      ],
                  }),
                  y &&
                      (0, i.jsx)(I.Y, {
                          targetElementRef: H,
                          renderPopout: () =>
                              (0, i.jsx)(A.l, {
                                  className: P.XM,
                                  "aria-label": V,
                                  "aria-labelledby": F,
                                  children: (0, i.jsx)(_.Ip, {
                                      className: l()(P.XG, v),
                                      children: a.map((e) =>
                                          (0, i.jsx)(
                                              T.A,
                                              {
                                                  user: e,
                                                  guildId: E,
                                                  channelId: o,
                                                  nick: R.Ay.getNickname(E, o, e),
                                                  disablePopout: "function" == typeof j ? j(e.id) : j,
                                                  onClick: M,
                                                  onPopoutRequestClose: () => {
                                                      G?.();
                                                  },
                                                  onContextMenu: (t) =>
                                                      (0, h.L3)(
                                                          t,
                                                          async () => {
                                                              let { default: t } = await Promise.all([
                                                                  n.e("671229"),
                                                                  n.e("197422"),
                                                                  n.e("397705"),
                                                                  n.e("926132"),
                                                                  n.e("146652"),
                                                                  n.e("893190"),
                                                                  n.e("834552"),
                                                                  n.e("708757"),
                                                                  n.e("183776"),
                                                                  n.e("585968"),
                                                                  n.e("253729"),
                                                                  n.e("189673"),
                                                                  n.e("468403"),
                                                                  n.e("234236"),
                                                                  n.e("229787"),
                                                                  n.e("936320"),
                                                                  n.e("882073"),
                                                                  n.e("797558"),
                                                                  n.e("190889"),
                                                                  n.e("214524"),
                                                                  n.e("691994"),
                                                                  n.e("576665"),
                                                                  n.e("776273"),
                                                                  n.e("624198"),
                                                                  n.e("856753"),
                                                                  n.e("214461"),
                                                                  n.e("172883"),
                                                                  n.e("825486"),
                                                                  n.e("242204"),
                                                                  n.e("349644"),
                                                                  n.e("442191"),
                                                                  n.e("532418"),
                                                              ]).then(n.bind(n, 668569));
                                                              return (n) =>
                                                                  (0, i.jsx)(t, {
                                                                      ...n,
                                                                      user: e,
                                                                      guildId: E,
                                                                      channelId: o,
                                                                  });
                                                          },
                                                          { onClose: () => Z() },
                                                      ),
                                              },
                                              e.id,
                                          ),
                                      ),
                                  }),
                              }),
                          shouldShow: !0,
                          position: "bottom",
                          onRequestClose: Z,
                          children: () => null,
                      }),
              ],
          });
}
