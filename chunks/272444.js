r.d(t, {
    AX: () => W,
    JK: () => Q,
    Jx: () => I,
    YD: () => O,
    _h: () => $,
    bg: () => L,
    bj: () => b,
    c$: () => P,
    ge: () => H,
    k8: () => v,
    lF: () => N,
});
var s = r(627968);
r(64700);
var n = r(503698),
    l = r.n(n),
    a = r(311907),
    i = r(435371),
    o = r(397927),
    u = r(734057),
    c = r(309010),
    d = r(967198),
    h = r(287809),
    _ = r(562153),
    S = r(822382),
    E = r(771650),
    g = r(616252),
    p = r(315059),
    f = r(121806),
    A = r(949759),
    m = r(768570),
    R = r(652215),
    y = r(778712),
    T = r(985018),
    x = r(935606);
function I(e) {
    let { icon: t, label: r, sublabel: n, onSelect: l, navId: a, index: i, selected: u } = e;
    return (0, s.jsx)(o.DUT, {
        className: x.DB,
        onClick: () => {
            l({ searchAutocompleteSelectAction: m.oi.CLICK, selectedIndex: i });
        },
        ...(0, A.wR)({ navId: a, index: i, selected: u }),
        children: (0, s.jsxs)("div", {
            className: x.AS,
            children: [t, null == n ? r : (0, s.jsxs)("div", { children: [r, n] })],
        }),
    });
}
function L(e) {
    let { label: t, className: r } = e;
    return (0, s.jsx)(o.Text, { variant: "text-sm/medium", color: "text-strong", className: r, children: t });
}
function b(e) {
    let { searchTokenType: t, answer: r } = e,
        n = E.Ay[t]?.key ?? "",
        l = r ?? (0, S.sh)(t);
    return (0, s.jsxs)("div", {
        className: x.Xq,
        children: [
            (0, s.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-subtle", children: n }),
            (0, s.jsx)(o.Text, { variant: "text-sm/medium", color: "text-muted", children: l }),
        ],
    });
}
function N(e) {
    let t = (0, S.E3)(e);
    return (0, s.jsxs)("div", {
        className: x.aT,
        children: [
            (0, s.jsx)(p.A, { channel: e, avatarSize: o._3J.SIZE_16, iconClassName: x.er, iconSize: "xs" }),
            (0, s.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", className: x.HA, children: t }),
        ],
    });
}
function v(e) {
    let { searchContext: t } = e;
    return (0, s.jsx)(i.m_, {
        asContainer: !0,
        text: T.intl.string(T.t.dwAvX1),
        position: "left",
        children: (0, s.jsx)(o.DUT, {
            onClick: () => g.A.clearSearchHistory(t),
            className: x.Wf,
            title: T.intl.string(T.t.dwAvX1),
            "aria-label": T.intl.string(T.t.dwAvX1),
            children: (0, s.jsx)(o.ucK, { size: "sm", color: "currentColor", className: x.f }),
        }),
    });
}
function C(e) {
    let { title: t, showDivider: r, children: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            r && (0, s.jsx)("div", { className: x.yF }),
            (0, s.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: x.jw, children: n }, t),
        ],
    });
}
function F(e) {
    let { headerId: t, titleText: r, trailingIcon: n } = e;
    return (0, s.jsxs)("div", {
        id: t,
        className: x.x_,
        children: [(0, s.jsx)(o.Text, { variant: "text-xs/semibold", color: "text-subtle", children: r }), n],
    });
}
function O(e) {
    let { navId: t, item: r, startingIndex: n, selectedIndex: l } = e,
        a = n,
        { rows: i, title: o, trailingIcon: u } = r.data;
    return (0, s.jsxs)(C, {
        title: o,
        showDivider: n > 0,
        children: [
            (0, s.jsx)(F, { headerId: o, titleText: o, trailingIcon: u }),
            i.map((e) => {
                let { icon: n, label: i, sublabel: u, onSelect: c } = e.data,
                    d = l === a,
                    h = a;
                return (
                    (a += 1),
                    (0, s.jsx)(
                        I,
                        { icon: n, label: i, sublabel: u, onSelect: c, navId: t, index: h, selected: d },
                        `${r.type}-${o}-${h}`,
                    )
                );
            }),
        ],
    });
}
function j(e) {
    let { size: t, user: r, className: n } = e,
        l = (0, a.bG)([d.A], () => d.A.getGuildId()),
        i = (0, y.FT)(t);
    return (0, s.jsx)(o.euF, { size: t, src: r.getAvatarURL(l, i), "aria-label": r.username, className: n });
}
function k(e) {
    let { user: t } = e,
        { selectedGuildId: r, selectedChannelId: n } = (0, a.cf)([d.A, c.A], () => {
            let e = d.A.getGuildId(),
                t = c.A.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        l = _.Ay.useName(r, n, t);
    return (0, s.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-default", children: l });
}
function W(e) {
    let { value: t, avatarSize: r, iconSize: n } = e,
        l = "",
        a = (0, A.fh)(t).map((e, t) => {
            let a = e.getFullMatch();
            if (0 === a.trim().length) return null;
            l += a;
            let i = R.l90.test(e.type),
                o = R.T2E.test(e.type),
                u = `${e.type}-${a}-${t}`;
            if (o)
                switch (e.type) {
                    case R.LWr.ANSWER_USERNAME_FROM:
                    case R.LWr.ANSWER_USERNAME_MENTIONS:
                        return (0, s.jsx)(D, { token: e, avatarSize: r }, u);
                    case R.LWr.ANSWER_IN:
                        return (0, s.jsx)(w, { token: e, avatarSize: r, iconSize: n }, u);
                    default:
                        return (0, s.jsx)(M, { text: a, className: x.Mj }, u);
                }
            return (0, s.jsx)(M, { text: a, className: i ? x._y : x.Lc }, u);
        });
    return { label: (0, s.jsx)("div", { className: x.fH, children: a }), ariaLabel: l };
}
function M(e) {
    let { text: t, className: r } = e;
    return (0, s.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", className: r, children: t });
}
function D(e) {
    let { token: t, avatarSize: r } = e,
        n = t.getFullMatch(),
        l = t.getData("userId"),
        i = (0, a.bG)([h.default], () => h.default.getUser(l));
    return null == i
        ? (0, s.jsx)(M, { text: n, className: x.Mj })
        : (0, s.jsxs)("div", {
              className: x.Mj,
              children: [
                  (0, s.jsx)(j, { size: r, user: i }),
                  (0, s.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", children: i.username }),
              ],
          });
}
function w(e) {
    let { token: t, avatarSize: r, iconSize: n } = e,
        i = t.getFullMatch(),
        c = t.getData("channelIds") ?? [],
        d = (0, a.bG)([u.A], () => u.A.getChannel(c[0]));
    if (null == d) return (0, s.jsx)(M, { text: i, className: x.Mj });
    let h = (0, S.E3)(d);
    return (0, s.jsxs)("div", {
        className: l()(x.Mj, x.JG),
        children: [
            (0, s.jsx)(p.A, { channel: d, avatarSize: r, iconClassName: x.Wh, iconSize: n }),
            (0, s.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", children: h }),
        ],
    });
}
function H(e) {
    let { result: t, group: r } = e;
    if (r === R.x2k.HISTORY) return (0, s.jsx)(o.$p$, { size: "sm", color: "currentColor", className: x.Fx });
    let { channel: n, user: l } = t;
    return null != n
        ? (0, s.jsx)(o.N$i, { size: "sm", color: "currentColor", className: x.Fx })
        : null != l
          ? r === R.LWr.FILTER_MENTIONS
              ? (0, s.jsx)(o.XxR, { size: "sm", color: "currentColor", className: x.Fx })
              : (0, s.jsx)(o.nys, { size: "sm", color: "currentColor", className: x.Fx })
          : null;
}
function P(e) {
    let { channel: t, user: r, text: n } = e;
    return null != t
        ? {
              label: (0, s.jsxs)("div", {
                  className: x.YL,
                  children: [
                      (0, s.jsx)(o.Text, {
                          variant: "text-sm/medium",
                          color: "text-strong",
                          children: E.Ay[R.LWr.FILTER_IN].key ?? "",
                      }),
                      N(t),
                  ],
              }),
              ariaLabel: t.name,
          }
        : null != r
          ? {
                label: (0, s.jsxs)("div", {
                    className: x.YL,
                    children: [(0, s.jsx)(j, { size: o._3J.SIZE_16, user: r }), (0, s.jsx)(k, { user: r })],
                }),
                ariaLabel: r.username,
            }
          : { label: (0, s.jsx)(L, { label: n }), ariaLabel: n };
}
function U(e) {
    let { text: t, className: r, size: n } = e,
        l = (0, f.KD)(t);
    return null != l ? (0, s.jsx)(l, { size: n, color: "currentColor", className: r }) : null;
}
function q(e) {
    let { text: t, className: r, size: n } = e,
        l = (0, f.Ht)(t);
    return null != l ? (0, s.jsx)(l, { size: n, color: "currentColor", className: r }) : null;
}
function $(e) {
    let { result: t, group: r } = e,
        { channel: n, user: l } = t;
    return null != n
        ? (0, s.jsx)(p.A, { channel: n, avatarSize: o._3J.SIZE_20, iconClassName: x.Fx, iconSize: "refresh_sm" })
        : null != l
          ? (0, s.jsx)(j, { size: o._3J.SIZE_20, user: l, className: x.Fx })
          : r === R.LWr.FILTER_HAS
            ? (0, s.jsx)(U, { size: "sm", text: t.text, className: x.Fx })
            : r === R.LWr.FILTER_AUTHOR_TYPE
              ? (0, s.jsx)(q, { size: "sm", text: t.text, className: x.Fx })
              : null;
}
function Q(e) {
    let { channel: t, user: r, text: n } = e;
    if (null != t) {
        let e = (0, S.E3)(t);
        return {
            label: (0, s.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", children: e }),
            ariaLabel: t.name,
        };
    }
    return null != r
        ? {
              label: (0, s.jsxs)("div", {
                  className: x.YL,
                  children: [
                      (0, s.jsx)(k, { user: r }),
                      (0, s.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: r.username }),
                  ],
              }),
              ariaLabel: r.username,
          }
        : { label: (0, s.jsx)(L, { label: n }), ariaLabel: n };
}
