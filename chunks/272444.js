r.d(t, {
    AX: () => M,
    JK: () => z,
    Jx: () => I,
    YD: () => O,
    _h: () => $,
    bg: () => b,
    bj: () => L,
    c$: () => P,
    ge: () => H,
    k8: () => N,
    lF: () => C,
});
var n = r(627968);
r(64700);
var s = r(503698),
    l = r.n(s),
    a = r(311907),
    i = r(435371),
    o = r(397927),
    c = r(734057),
    u = r(309010),
    d = r(967198),
    h = r(287809),
    _ = r(562153),
    f = r(822382),
    S = r(771650),
    E = r(616252),
    g = r(315059),
    p = r(121806),
    A = r(949759),
    m = r(768570),
    R = r(652215),
    y = r(778712),
    x = r(985018),
    T = r(935606);
function I(e) {
    let { icon: t, label: r, sublabel: s, onSelect: l, navId: a, index: i, selected: c } = e;
    return (0, n.jsx)(o.DUT, {
        className: T.DB,
        onClick: () => {
            l({ searchAutocompleteSelectAction: m.oi.CLICK, selectedIndex: i });
        },
        ...(0, A.wR)({ navId: a, index: i, selected: c }),
        children: (0, n.jsxs)("div", {
            className: T.AS,
            children: [t, null == s ? r : (0, n.jsxs)("div", { children: [r, s] })],
        }),
    });
}
function b(e) {
    let { label: t, className: r } = e;
    return (0, n.jsx)(o.Text, { variant: "text-sm/medium", color: "text-strong", className: r, children: t });
}
function L(e) {
    let { searchTokenType: t, answer: r } = e,
        s = S.Ay[t]?.key ?? "",
        l = r ?? (0, f.sh)(t);
    return (0, n.jsxs)("div", {
        className: T.Xq,
        children: [
            (0, n.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-subtle", children: s }),
            (0, n.jsx)(o.Text, { variant: "text-sm/medium", color: "text-muted", children: l }),
        ],
    });
}
function C(e) {
    let t = (0, f.E3)(e);
    return (0, n.jsxs)("div", {
        className: T.aT,
        children: [
            (0, n.jsx)(g.A, { channel: e, avatarSize: o._3J.SIZE_16, iconClassName: T.er, iconSize: "xs" }),
            (0, n.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", className: T.HA, children: t }),
        ],
    });
}
function N(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(i.m_, {
        asContainer: !0,
        text: x.intl.string(x.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(o.DUT, {
            onClick: () => E.A.clearSearchHistory(t),
            className: T.Wf,
            title: x.intl.string(x.t.dwAvX1),
            "aria-label": x.intl.string(x.t.dwAvX1),
            children: (0, n.jsx)(o.ucK, { size: "sm", color: "currentColor", className: T.f }),
        }),
    });
}
function v(e) {
    let { title: t, showDivider: r, children: s } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r && (0, n.jsx)("div", { className: T.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: T.jw, children: s }, t),
        ],
    });
}
function F(e) {
    let { headerId: t, titleText: r, trailingIcon: s } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: T.x_,
        children: [(0, n.jsx)(o.Text, { variant: "text-xs/semibold", color: "text-subtle", children: r }), s],
    });
}
function O(e) {
    let { navId: t, item: r, startingIndex: s, selectedIndex: l } = e,
        a = s,
        { rows: i, title: o, trailingIcon: c } = r.data;
    return (0, n.jsxs)(v, {
        title: o,
        showDivider: s > 0,
        children: [
            (0, n.jsx)(F, { headerId: o, titleText: o, trailingIcon: c }),
            i.map((e) => {
                let { icon: s, label: i, sublabel: c, onSelect: u } = e.data,
                    d = l === a,
                    h = a;
                return (
                    (a += 1),
                    (0, n.jsx)(
                        I,
                        { icon: s, label: i, sublabel: c, onSelect: u, navId: t, index: h, selected: d },
                        `${r.type}-${o}-${h}`,
                    )
                );
            }),
        ],
    });
}
function k(e) {
    let { size: t, user: r, className: s } = e,
        l = (0, a.bG)([d.A], () => d.A.getGuildId()),
        i = (0, y.FT)(t);
    return (0, n.jsx)(o.euF, { size: t, src: r.getAvatarURL(l, i), "aria-label": r.username, className: s });
}
function j(e) {
    let { user: t } = e,
        { selectedGuildId: r, selectedChannelId: s } = (0, a.cf)([d.A, u.A], () => {
            let e = d.A.getGuildId(),
                t = u.A.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        l = _.Ay.useName(r, s, t);
    return (0, n.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-default", children: l });
}
function M(e) {
    let { value: t, avatarSize: r, iconSize: s } = e,
        l = "",
        a = (0, A.fh)(t).map((e, t) => {
            let a = e.getFullMatch();
            if (0 === a.trim().length) return null;
            l += a;
            let i = R.l90.test(e.type),
                o = R.T2E.test(e.type),
                c = `${e.type}-${a}-${t}`;
            if (o)
                switch (e.type) {
                    case R.LWr.ANSWER_USERNAME_FROM:
                    case R.LWr.ANSWER_USERNAME_MENTIONS:
                        return (0, n.jsx)(w, { token: e, avatarSize: r }, c);
                    case R.LWr.ANSWER_IN:
                        return (0, n.jsx)(D, { token: e, avatarSize: r, iconSize: s }, c);
                    default:
                        return (0, n.jsx)(W, { text: a, className: T.Mj }, c);
                }
            return (0, n.jsx)(W, { text: a, className: i ? T._y : T.Lc }, c);
        });
    return { label: (0, n.jsx)("div", { className: T.fH, children: a }), ariaLabel: l };
}
function W(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", className: r, children: t });
}
function w(e) {
    let { token: t, avatarSize: r } = e,
        s = t.getFullMatch(),
        l = t.getData("userId"),
        i = (0, a.bG)([h.default], () => h.default.getUser(l));
    return null == i
        ? (0, n.jsx)(W, { text: s, className: T.Mj })
        : (0, n.jsxs)("div", {
              className: T.Mj,
              children: [
                  (0, n.jsx)(k, { size: r, user: i }),
                  (0, n.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", children: i.username }),
              ],
          });
}
function D(e) {
    let { token: t, avatarSize: r, iconSize: s } = e,
        i = t.getFullMatch(),
        u = t.getData("channelIds") ?? [],
        d = (0, a.bG)([c.A], () => c.A.getChannel(u[0]));
    if (null == d) return (0, n.jsx)(W, { text: i, className: T.Mj });
    let h = (0, f.E3)(d);
    return (0, n.jsxs)("div", {
        className: l()(T.Mj, T.JG),
        children: [
            (0, n.jsx)(g.A, { channel: d, avatarSize: r, iconClassName: T.Wh, iconSize: s }),
            (0, n.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", children: h }),
        ],
    });
}
function H(e) {
    let { result: t, group: r } = e;
    switch (r) {
        case R.x2k.HISTORY:
            return (0, n.jsx)(o.$p$, { size: "sm", color: "currentColor", className: T.Fx });
        case R.LWr.FILTER_IN:
            return (0, n.jsx)(o.N$i, { size: "sm", color: "currentColor", className: T.Fx });
        case R.LWr.FILTER_FROM:
            return (0, n.jsx)(o.nys, { size: "sm", color: "currentColor", className: T.Fx });
        case R.LWr.FILTER_MENTIONS:
            return (0, n.jsx)(o.XxR, { size: "sm", color: "currentColor", className: T.Fx });
        case R.LWr.FILTER_HAS:
            return (0, n.jsx)(U, { text: t.text, size: "sm", className: T.Fx });
        default:
            return null;
    }
}
function P(e) {
    let { channel: t, user: r, text: s } = e;
    return null != t
        ? {
              label: (0, n.jsxs)("div", {
                  className: T.YL,
                  children: [
                      (0, n.jsx)(o.Text, {
                          variant: "text-sm/medium",
                          color: "text-strong",
                          children: S.Ay[R.LWr.FILTER_IN].key ?? "",
                      }),
                      C(t),
                  ],
              }),
              ariaLabel: t.name,
          }
        : null != r
          ? {
                label: (0, n.jsxs)("div", {
                    className: T.YL,
                    children: [(0, n.jsx)(k, { size: o._3J.SIZE_16, user: r }), (0, n.jsx)(j, { user: r })],
                }),
                ariaLabel: r.username,
            }
          : { label: (0, n.jsx)(b, { label: s }), ariaLabel: s };
}
function U(e) {
    let { text: t, className: r, size: s } = e,
        l = (0, p.KD)(t);
    return null != l ? (0, n.jsx)(l, { size: s, color: "currentColor", className: r }) : null;
}
function q(e) {
    let { text: t, className: r, size: s } = e,
        l = (0, p.Ht)(t);
    return null != l ? (0, n.jsx)(l, { size: s, color: "currentColor", className: r }) : null;
}
function $(e) {
    let { result: t, group: r } = e,
        { channel: s, user: l } = t;
    return null != s
        ? (0, n.jsx)(g.A, { channel: s, avatarSize: o._3J.SIZE_20, iconClassName: T.Fx, iconSize: "refresh_sm" })
        : null != l
          ? (0, n.jsx)(k, { size: o._3J.SIZE_20, user: l, className: T.Fx })
          : r === R.LWr.FILTER_HAS
            ? (0, n.jsx)(U, { size: "sm", text: t.text, className: T.Fx })
            : r === R.LWr.FILTER_AUTHOR_TYPE
              ? (0, n.jsx)(q, { size: "sm", text: t.text, className: T.Fx })
              : null;
}
function z(e) {
    let { channel: t, user: r, text: s } = e;
    if (null != t) {
        let e = (0, f.E3)(t);
        return {
            label: (0, n.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-strong", children: e }),
            ariaLabel: t.name,
        };
    }
    return null != r
        ? {
              label: (0, n.jsxs)("div", {
                  className: T.YL,
                  children: [
                      (0, n.jsx)(j, { user: r }),
                      (0, n.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: r.username }),
                  ],
              }),
              ariaLabel: r.username,
          }
        : { label: (0, n.jsx)(b, { label: s }), ariaLabel: s };
}
