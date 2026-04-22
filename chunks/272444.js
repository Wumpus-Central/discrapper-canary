r.d(t, {
    AX: () => $,
    JK: () => Z,
    Jx: () => O,
    YD: () => D,
    _h: () => V,
    bg: () => W,
    bj: () => k,
    c$: () => K,
    ge: () => B,
    k8: () => w,
    lF: () => M,
});
var n = r(627968);
r(64700);
var s = r(503698),
    l = r.n(s),
    a = r(311907),
    i = r(990078),
    o = r(939249),
    u = r(834730),
    c = r(778712),
    h = r(241326),
    d = r(97808),
    _ = r(7689),
    E = r(276293),
    S = r(950305),
    f = r(935063),
    p = r(734057),
    g = r(309010),
    A = r(967198),
    y = r(287809),
    R = r(562153),
    m = r(822382),
    I = r(771650),
    T = r(616252),
    L = r(315059),
    x = r(121806),
    b = r(949759),
    N = r(768570),
    C = r(652215),
    F = r(985018),
    v = r(611027);
function O(e) {
    let { icon: t, label: r, sublabel: s, onSelect: l, navId: a, index: i, selected: u } = e;
    return (0, n.jsx)(o.D, {
        className: v.DB,
        onClick: () => {
            l({ searchAutocompleteSelectAction: N.oi.CLICK, selectedIndex: i });
        },
        ...(0, b.wR)({ navId: a, index: i, selected: u }),
        children: (0, n.jsxs)("div", {
            className: v.AS,
            children: [t, null == s ? r : (0, n.jsxs)("div", { children: [r, s] })],
        }),
    });
}
function W(e) {
    let { label: t, className: r } = e;
    return (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-strong", className: r, children: t });
}
function k(e) {
    let { searchTokenType: t, answer: r } = e,
        s = I.Ay[t]?.key ?? "",
        l = r ?? (0, m.sh)(t);
    return (0, n.jsxs)("div", {
        className: v.Xq,
        children: [
            (0, n.jsx)(u.E, { variant: "text-sm/semibold", color: "text-subtle", children: s }),
            (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
        ],
    });
}
function M(e) {
    let t = (0, m.E3)(e);
    return (0, n.jsxs)("div", {
        className: v.aT,
        children: [
            (0, n.jsx)(L.A, { channel: e, avatarSize: c._3.SIZE_16, iconClassName: v.er, iconSize: "xs" }),
            (0, n.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", className: v.HA, children: t }),
        ],
    });
}
function w(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(i.m, {
        asContainer: !0,
        text: F.intl.string(F.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(o.D, {
            onClick: () => T.A.clearSearchHistory(t),
            className: v.Wf,
            title: F.intl.string(F.t.dwAvX1),
            "aria-label": F.intl.string(F.t.dwAvX1),
            children: (0, n.jsx)(h.u, { size: "sm", color: "currentColor", className: v.f }),
        }),
    });
}
function H(e) {
    let { title: t, showDivider: r, children: s } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r && (0, n.jsx)("div", { className: v.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: v.jw, children: s }, t),
        ],
    });
}
function j(e) {
    let { headerId: t, titleText: r, trailingIcon: s } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: v.x_,
        children: [(0, n.jsx)(u.E, { variant: "text-xs/semibold", color: "text-subtle", children: r }), s],
    });
}
function D(e) {
    let { navId: t, item: r, startingIndex: s, selectedIndex: l } = e,
        a = s,
        { rows: i, title: o, trailingIcon: u } = r.data;
    return (0, n.jsxs)(H, {
        title: o,
        showDivider: s > 0,
        children: [
            (0, n.jsx)(j, { headerId: o, titleText: o, trailingIcon: u }),
            i.map((e) => {
                let { icon: s, label: i, sublabel: u, onSelect: c } = e.data,
                    h = l === a,
                    d = a;
                return (
                    (a += 1),
                    (0, n.jsx)(
                        O,
                        { icon: s, label: i, sublabel: u, onSelect: c, navId: t, index: d, selected: h },
                        `${r.type}-${o}-${d}`,
                    )
                );
            }),
        ],
    });
}
function P(e) {
    let { size: t, user: r, className: s } = e,
        l = (0, a.bG)([A.A], () => A.A.getGuildId()),
        i = (0, c.FT)(t);
    return (0, n.jsx)(d.eu, { size: t, src: r.getAvatarURL(l, i), "aria-label": r.username, className: s });
}
function U(e) {
    let { user: t } = e,
        { selectedGuildId: r, selectedChannelId: s } = (0, a.cf)([A.A, g.A], () => {
            let e = A.A.getGuildId(),
                t = g.A.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        l = R.Ay.useName(r, s, t);
    return (0, n.jsx)(u.E, { variant: "text-sm/semibold", color: "text-default", children: l });
}
function $(e) {
    let { value: t, avatarSize: r, iconSize: s } = e,
        l = "",
        a = (0, b.fh)(t).map((e, t) => {
            let a = e.getFullMatch();
            if (0 === a.trim().length) return null;
            l += a;
            let i = C.l90.test(e.type),
                o = C.T2E.test(e.type),
                u = `${e.type}-${a}-${t}`;
            if (o)
                switch (e.type) {
                    case C.LWr.ANSWER_USERNAME_FROM:
                    case C.LWr.ANSWER_USERNAME_MENTIONS:
                        return (0, n.jsx)(Q, { token: e, avatarSize: r }, u);
                    case C.LWr.ANSWER_IN:
                        return (0, n.jsx)(z, { token: e, avatarSize: r, iconSize: s }, u);
                    default:
                        return (0, n.jsx)(q, { text: a, className: v.Mj }, u);
                }
            return (0, n.jsx)(q, { text: a, className: i ? v._y : v.Lc }, u);
        });
    return { label: (0, n.jsx)("div", { className: v.fH, children: a }), ariaLabel: l };
}
function q(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", className: r, children: t });
}
function Q(e) {
    let { token: t, avatarSize: r } = e,
        s = t.getFullMatch(),
        l = t.getData("userId"),
        i = (0, a.bG)([y.default], () => y.default.getUser(l));
    return null == i
        ? (0, n.jsx)(q, { text: s, className: v.Mj })
        : (0, n.jsxs)("div", {
              className: v.Mj,
              children: [
                  (0, n.jsx)(P, { size: r, user: i }),
                  (0, n.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: i.username }),
              ],
          });
}
function z(e) {
    let { token: t, avatarSize: r, iconSize: s } = e,
        i = t.getFullMatch(),
        o = t.getData("channelIds") ?? [],
        c = (0, a.bG)([p.A], () => p.A.getChannel(o[0]));
    if (null == c) return (0, n.jsx)(q, { text: i, className: v.Mj });
    let h = (0, m.E3)(c);
    return (0, n.jsxs)("div", {
        className: l()(v.Mj, v.JG),
        children: [
            (0, n.jsx)(L.A, { channel: c, avatarSize: r, iconClassName: v.Wh, iconSize: s }),
            (0, n.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: h }),
        ],
    });
}
function B(e) {
    let { result: t, group: r } = e;
    switch (r) {
        case C.x2k.HISTORY:
            return (0, n.jsx)(_.$, { size: "sm", color: "currentColor", className: v.Fx });
        case C.LWr.FILTER_IN:
            return (0, n.jsx)(E.N, { size: "sm", color: "currentColor", className: v.Fx });
        case C.LWr.FILTER_FROM:
            return (0, n.jsx)(S.n, { size: "sm", color: "currentColor", className: v.Fx });
        case C.LWr.FILTER_MENTIONS:
            return (0, n.jsx)(f.X, { size: "sm", color: "currentColor", className: v.Fx });
        case C.LWr.FILTER_HAS:
            return (0, n.jsx)(G, { text: t.text, size: "sm", className: v.Fx });
        default:
            return null;
    }
}
function K(e) {
    let { channel: t, user: r, text: s } = e;
    return null != t
        ? {
              label: (0, n.jsxs)("div", {
                  className: v.YL,
                  children: [
                      (0, n.jsx)(u.E, {
                          variant: "text-sm/medium",
                          color: "text-strong",
                          children: I.Ay[C.LWr.FILTER_IN].key ?? "",
                      }),
                      M(t),
                  ],
              }),
              ariaLabel: (0, m.E3)(t),
          }
        : null != r
          ? {
                label: (0, n.jsxs)("div", {
                    className: v.YL,
                    children: [(0, n.jsx)(P, { size: c._3.SIZE_16, user: r }), (0, n.jsx)(U, { user: r })],
                }),
                ariaLabel: r.username,
            }
          : { label: (0, n.jsx)(W, { label: s }), ariaLabel: s };
}
function G(e) {
    let { text: t, className: r, size: s } = e,
        l = (0, x.KD)(t);
    return null != l ? (0, n.jsx)(l, { size: s, color: "currentColor", className: r }) : null;
}
function Y(e) {
    let { text: t, className: r, size: s } = e,
        l = (0, x.Ht)(t);
    return null != l ? (0, n.jsx)(l, { size: s, color: "currentColor", className: r }) : null;
}
function V(e) {
    let { result: t, group: r } = e,
        { channel: s, user: l } = t;
    return null != s
        ? (0, n.jsx)(L.A, { channel: s, avatarSize: c._3.SIZE_20, iconClassName: v.Fx, iconSize: "refresh_sm" })
        : null != l
          ? (0, n.jsx)(P, { size: c._3.SIZE_20, user: l, className: v.Fx })
          : r === C.LWr.FILTER_HAS
            ? (0, n.jsx)(G, { size: "sm", text: t.text, className: v.Fx })
            : r === C.LWr.FILTER_AUTHOR_TYPE
              ? (0, n.jsx)(Y, { size: "sm", text: t.text, className: v.Fx })
              : null;
}
function Z(e) {
    let { channel: t, user: r, text: s } = e;
    if (null != t) {
        let e = (0, m.E3)(t);
        return {
            label: (0, n.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: e }),
            ariaLabel: (0, m.E3)(t),
        };
    }
    return null != r
        ? {
              label: (0, n.jsxs)("div", {
                  className: v.YL,
                  children: [
                      (0, n.jsx)(U, { user: r }),
                      (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: r.username }),
                  ],
              }),
              ariaLabel: r.username,
          }
        : { label: (0, n.jsx)(W, { label: s }), ariaLabel: s };
}
