l.d(a, { A: () => y, I: () => k });
var n = l(477900),
    t = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(435558),
    d = l.n(s),
    u = l(866665),
    c = l(834730),
    o = l(140735),
    h = l(364522),
    x = l(939249),
    m = l(97808),
    _ = l(305866),
    b = l(922016),
    j = l(442433),
    I = l(538451),
    f = l(562153),
    g = l(427262),
    p = l(778712),
    S = l(375708),
    E = l(661248);
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p._3.SIZE_24;
    switch (e) {
        case p._3.SIZE_16:
            return E.nc;
        case p._3.SIZE_20:
            return E.qV;
        case p._3.SIZE_32:
            return E.Hb;
        case p._3.SIZE_24:
        default:
            return E.q1;
    }
}
function Z(e) {
    let {
            users: a,
            maxUsers: l,
            guildId: t,
            channelId: r,
            size: s = p._3.SIZE_24,
            shouldShowOverflowCount: c,
            disableUsernameTooltip: o,
        } = e,
        h = v(s),
        x = c ? l - 1 : Math.min(a.length, l),
        _ = x - 1,
        b = d()(a)
            .take(x)
            .map((e, a) => {
                let l = f.Ay.getNickname(t, r, e) ?? g.Ay.getName(e),
                    d = i()(E.my, h, a === _ && !c && E.NE),
                    x = (0, n.jsx)(m.eu, { src: e.getAvatarURL(t, (0, p.FT)(s)), size: s, "aria-hidden": !0 });
                return (0, n.jsx)(
                    "li",
                    {
                        className: d,
                        children: o
                            ? (0, n.jsx)("span", { role: "img", "aria-label": l, children: x })
                            : (0, n.jsx)(u.m, {
                                  text: l,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)("span", { role: "img", "aria-label": l, children: x }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, n.jsx)("ul", { className: E.HD, children: b });
}
function N(e) {
    let { count: a, textVariant: l, color: t = "interactive-text-default", size: r = p._3.SIZE_24, className: s } = e,
        d = v(r),
        u =
            l ??
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p._3.SIZE_24;
                switch (e) {
                    case p._3.SIZE_16:
                    case p._3.SIZE_20:
                        return "text-xxs/semibold";
                    case p._3.SIZE_32:
                        return "text-sm/medium";
                    case p._3.SIZE_24:
                    default:
                        return "text-xs/medium";
                }
            })(r);
    return (0, n.jsxs)(c.E, {
        variant: u,
        color: t,
        className: i()(E.ju, d, s),
        children: [
            (0, n.jsx)(o.A, { children: S.intl.formatToPlainString(S.t.RGr9tj, { count: a }) }),
            (0, n.jsx)("span", { "aria-hidden": !0, children: a > 99 ? ">99" : `+${a}` }),
        ],
    });
}
function C(e) {
    let {
            users: a,
            maxUsers: l,
            guildId: t,
            channelId: r,
            size: i = p._3.SIZE_24,
            overflowCountClassName: s,
            overflowCountColor: d = "interactive-text-default",
            hideOverflowCount: u = !1,
        } = e,
        c = a.length - l,
        o = c > 0 && !u;
    return a.length <= 0
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(Z, {
                      users: a,
                      maxUsers: l,
                      guildId: t,
                      channelId: r,
                      size: i,
                      shouldShowOverflowCount: o,
                      disableUsernameTooltip: !0,
                  }),
                  o && (0, n.jsx)(N, { count: c + 1, color: d, size: i, className: s }),
              ],
          });
}
function k(e) {
    let { className: a, "aria-label": l, "aria-labelledby": t, "aria-hidden": r, ...s } = e;
    return (0, n.jsx)("div", {
        role: "group",
        className: i()(a, E.HD),
        "aria-label": l,
        "aria-labelledby": t,
        "aria-hidden": r,
        children: (0, n.jsx)(C, { ...s }),
    });
}
function y(e) {
    let {
            ref: a,
            users: r,
            maxUsers: s,
            guildId: d,
            channelId: u,
            className: c,
            size: o = p._3.SIZE_24,
            overflowCountVariant: m,
            overflowCountColor: g = "interactive-text-default",
            overflowCountClassName: v,
            popoutClassName: C,
            hideOverflowCount: k = !1,
            disableUsernameTooltip: y = !1,
            disableUserPopout: w = !1,
            onClickOverflow: R,
            onFocusOverflow: A,
            onUserClick: H,
            onUserListOpenChange: P,
            onUserPopoutRequestClose: z,
            "aria-label": T,
            "aria-labelledby": U,
            "aria-hidden": q,
        } = e,
        [D, F] = t.useState(!1),
        M = t.useRef(null),
        G = t.useRef(null),
        L = r.length - s,
        O = L + 1,
        V = L > 0 && !k && !q,
        X = t.useCallback(() => {
            (G.current = null), F(!1), P?.(!1);
        }, [P]),
        Q = t.useCallback(
            (e) => {
                (G.current = e ?? M.current), F(!0), P?.(!0);
            },
            [P],
        );
    return (t.useImperativeHandle(a, () => ({ openUserList: Q, closeUserList: X }), [Q, X]), r.length <= 0)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)("div", {
                      role: "group",
                      "aria-label": T,
                      "aria-labelledby": U,
                      className: i()(c, E.HD),
                      "aria-hidden": q,
                      children: [
                          (0, n.jsx)(Z, {
                              users: r,
                              maxUsers: s,
                              guildId: d,
                              channelId: u,
                              size: o,
                              shouldShowOverflowCount: V,
                              disableUsernameTooltip: y,
                          }),
                          V &&
                              (0, n.jsx)(x.D, {
                                  innerRef: M,
                                  className: E.x6,
                                  onFocus: A,
                                  onClick: (e) => {
                                      R?.(e), Q();
                                  },
                                  "aria-expanded": D,
                                  "aria-label": S.intl.formatToPlainString(S.t.R8Z8Qr, { count: O }),
                                  children: (0, n.jsx)(N, {
                                      count: O,
                                      textVariant: m,
                                      color: "interactive-text-default" === g ? "currentColor" : g,
                                      size: o,
                                      className: v,
                                  }),
                              }),
                      ],
                  }),
                  D &&
                      (0, n.jsx)(b.Y, {
                          targetElementRef: G,
                          renderPopout: () =>
                              (0, n.jsx)(_.l, {
                                  className: E.XM,
                                  "aria-label": T,
                                  "aria-labelledby": U,
                                  children: (0, n.jsx)(h.Ip, {
                                      className: i()(E.XG, C),
                                      children: r.map((e) =>
                                          (0, n.jsx)(
                                              I.A,
                                              {
                                                  user: e,
                                                  guildId: d,
                                                  channelId: u,
                                                  nick: f.Ay.getNickname(d, u, e),
                                                  disablePopout: "function" == typeof w ? w(e.id) : w,
                                                  onClick: H,
                                                  onPopoutRequestClose: () => {
                                                      z?.();
                                                  },
                                                  onContextMenu: (a) =>
                                                      (0, j.L3)(
                                                          a,
                                                          async () => {
                                                              let { default: a } = await Promise.all([
                                                                  l.e("205035"),
                                                                  l.e("790484"),
                                                                  l.e("866038"),
                                                                  l.e("926132"),
                                                                  l.e("146652"),
                                                                  l.e("834552"),
                                                                  l.e("708757"),
                                                                  l.e("585968"),
                                                                  l.e("776273"),
                                                                  l.e("893190"),
                                                                  l.e("253729"),
                                                                  l.e("234236"),
                                                                  l.e("936320"),
                                                                  l.e("190889"),
                                                                  l.e("189673"),
                                                                  l.e("696443"),
                                                                  l.e("183776"),
                                                                  l.e("229787"),
                                                                  l.e("61129"),
                                                                  l.e("882073"),
                                                                  l.e("797558"),
                                                                  l.e("691994"),
                                                                  l.e("428296"),
                                                                  l.e("576665"),
                                                                  l.e("444795"),
                                                                  l.e("624198"),
                                                                  l.e("856753"),
                                                                  l.e("214461"),
                                                                  l.e("172883"),
                                                                  l.e("349644"),
                                                                  l.e("442191"),
                                                                  l.e("825486"),
                                                                  l.e("242204"),
                                                                  l.e("532418"),
                                                              ]).then(l.bind(l, 668569));
                                                              return (l) =>
                                                                  (0, n.jsx)(a, {
                                                                      ...l,
                                                                      user: e,
                                                                      guildId: d,
                                                                      channelId: u,
                                                                  });
                                                          },
                                                          { onClose: () => X() },
                                                      ),
                                              },
                                              e.id,
                                          ),
                                      ),
                                  }),
                              }),
                          shouldShow: !0,
                          position: "bottom",
                          onRequestClose: X,
                          children: () => null,
                      }),
              ],
          });
}
