r.d(t, {
    AX: () => M,
    JK: () => Q,
    Jx: () => L,
    YD: () => O,
    _h: () => q,
    bg: () => x,
    bj: () => C,
    c$: () => P,
    ge: () => D,
    k8: () => b,
    lF: () => N,
});
var n = r(627968);
r(64700);
var s = r(503698),
    l = r.n(s),
    a = r(311907),
    i = r(435371),
    u = r(397927),
    o = r(734057),
    c = r(309010),
    h = r(967198),
    d = r(287809),
    _ = r(562153),
    S = r(822382),
    E = r(771650),
    f = r(616252),
    p = r(315059),
    A = r(121806),
    g = r(949759),
    y = r(768570),
    R = r(652215),
    T = r(778712),
    I = r(985018),
    m = r(10691);
function L(e) {
    let { icon: t, label: r, sublabel: s, onSelect: l, navId: a, index: i, selected: o } = e;
    return (0, n.jsx)(u.DUT, {
        className: m.DB,
        onClick: () => {
            l({ searchAutocompleteSelectAction: y.oi.CLICK, selectedIndex: i });
        },
        ...(0, g.wR)({ navId: a, index: i, selected: o }),
        children: (0, n.jsxs)("div", {
            className: m.AS,
            children: [t, null == s ? r : (0, n.jsxs)("div", { children: [r, s] })],
        }),
    });
}
function x(e) {
    let { label: t, className: r } = e;
    return (0, n.jsx)(u.Text, { variant: "text-sm/medium", color: "text-strong", className: r, children: t });
}
function C(e) {
    let { searchTokenType: t, answer: r } = e,
        s = E.Ay[t]?.key ?? "",
        l = r ?? (0, S.sh)(t);
    return (0, n.jsxs)("div", {
        className: m.Xq,
        children: [
            (0, n.jsx)(u.Text, { variant: "text-sm/semibold", color: "text-subtle", children: s }),
            (0, n.jsx)(u.Text, { variant: "text-sm/medium", color: "text-muted", children: l }),
        ],
    });
}
function N(e) {
    let t = (0, S.E3)(e);
    return (0, n.jsxs)("div", {
        className: m.aT,
        children: [
            (0, n.jsx)(p.A, { channel: e, avatarSize: u._3J.SIZE_16, iconClassName: m.er, iconSize: "xs" }),
            (0, n.jsx)(u.Text, { variant: "text-sm/semibold", color: "text-strong", className: m.HA, children: t }),
        ],
    });
}
function b(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(i.m_, {
        asContainer: !0,
        text: I.intl.string(I.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(u.DUT, {
            onClick: () => f.A.clearSearchHistory(t),
            className: m.Wf,
            title: I.intl.string(I.t.dwAvX1),
            "aria-label": I.intl.string(I.t.dwAvX1),
            children: (0, n.jsx)(u.ucK, { size: "sm", color: "currentColor", className: m.f }),
        }),
    });
}
function F(e) {
    let { title: t, showDivider: r, children: s } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r && (0, n.jsx)("div", { className: m.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: m.jw, children: s }, t),
        ],
    });
}
function v(e) {
    let { headerId: t, titleText: r, trailingIcon: s } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: m.x_,
        children: [(0, n.jsx)(u.Text, { variant: "text-xs/semibold", color: "text-subtle", children: r }), s],
    });
}
function O(e) {
    let { navId: t, item: r, startingIndex: s, selectedIndex: l } = e,
        a = s,
        { rows: i, title: u, trailingIcon: o } = r.data;
    return (0, n.jsxs)(F, {
        title: u,
        showDivider: s > 0,
        children: [
            (0, n.jsx)(v, { headerId: u, titleText: u, trailingIcon: o }),
            i.map((e) => {
                let { icon: s, label: i, sublabel: o, onSelect: c } = e.data,
                    h = l === a,
                    d = a;
                return (
                    (a += 1),
                    (0, n.jsx)(
                        L,
                        { icon: s, label: i, sublabel: o, onSelect: c, navId: t, index: d, selected: h },
                        `${r.type}-${u}-${d}`,
                    )
                );
            }),
        ],
    });
}
function W(e) {
    let { size: t, user: r, className: s } = e,
        l = (0, a.bG)([h.A], () => h.A.getGuildId()),
        i = (0, T.FT)(t);
    return (0, n.jsx)(u.euF, { size: t, src: r.getAvatarURL(l, i), "aria-label": r.username, className: s });
}
function k(e) {
    let { user: t } = e,
        { selectedGuildId: r, selectedChannelId: s } = (0, a.cf)([h.A, c.A], () => {
            let e = h.A.getGuildId(),
                t = c.A.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        l = _.Ay.useName(r, s, t);
    return (0, n.jsx)(u.Text, { variant: "text-sm/semibold", color: "text-default", children: l });
}
function M(e) {
    let { value: t, avatarSize: r, iconSize: s } = e,
        l = "",
        a = (0, g.fh)(t).map((e, t) => {
            let a = e.getFullMatch();
            if (0 === a.trim().length) return null;
            l += a;
            let i = R.l90.test(e.type),
                u = R.T2E.test(e.type),
                o = `${e.type}-${a}-${t}`;
            if (u)
                switch (e.type) {
                    case R.LWr.ANSWER_USERNAME_FROM:
                    case R.LWr.ANSWER_USERNAME_MENTIONS:
                        return (0, n.jsx)(w, { token: e, avatarSize: r }, o);
                    case R.LWr.ANSWER_IN:
                        return (0, n.jsx)(j, { token: e, avatarSize: r, iconSize: s }, o);
                    default:
                        return (0, n.jsx)(H, { text: a, className: m.Mj }, o);
                }
            return (0, n.jsx)(H, { text: a, className: i ? m._y : m.Lc }, o);
        });
    return { label: (0, n.jsx)("div", { className: m.fH, children: a }), ariaLabel: l };
}
function H(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(u.Text, { variant: "text-sm/semibold", color: "text-strong", className: r, children: t });
}
function w(e) {
    let { token: t, avatarSize: r } = e,
        s = t.getFullMatch(),
        l = t.getData("userId"),
        i = (0, a.bG)([d.default], () => d.default.getUser(l));
    return null == i
        ? (0, n.jsx)(H, { text: s, className: m.Mj })
        : (0, n.jsxs)("div", {
              className: m.Mj,
              children: [
                  (0, n.jsx)(W, { size: r, user: i }),
                  (0, n.jsx)(u.Text, { variant: "text-sm/semibold", color: "text-strong", children: i.username }),
              ],
          });
}
function j(e) {
    let { token: t, avatarSize: r, iconSize: s } = e,
        i = t.getFullMatch(),
        c = t.getData("channelIds") ?? [],
        h = (0, a.bG)([o.A], () => o.A.getChannel(c[0]));
    if (null == h) return (0, n.jsx)(H, { text: i, className: m.Mj });
    let d = (0, S.E3)(h);
    return (0, n.jsxs)("div", {
        className: l()(m.Mj, m.JG),
        children: [
            (0, n.jsx)(p.A, { channel: h, avatarSize: r, iconClassName: m.Wh, iconSize: s }),
            (0, n.jsx)(u.Text, { variant: "text-sm/semibold", color: "text-strong", children: d }),
        ],
    });
}
function D(e) {
    let { result: t, group: r } = e;
    switch (r) {
        case R.x2k.HISTORY:
            return (0, n.jsx)(u.$p$, { size: "sm", color: "currentColor", className: m.Fx });
        case R.LWr.FILTER_IN:
            return (0, n.jsx)(u.N$i, { size: "sm", color: "currentColor", className: m.Fx });
        case R.LWr.FILTER_FROM:
            return (0, n.jsx)(u.nys, { size: "sm", color: "currentColor", className: m.Fx });
        case R.LWr.FILTER_MENTIONS:
            return (0, n.jsx)(u.XxR, { size: "sm", color: "currentColor", className: m.Fx });
        case R.LWr.FILTER_HAS:
            return (0, n.jsx)(U, { text: t.text, size: "sm", className: m.Fx });
        default:
            return null;
    }
}
function P(e) {
    let { channel: t, user: r, text: s } = e;
    return null != t
        ? {
              label: (0, n.jsxs)("div", {
                  className: m.YL,
                  children: [
                      (0, n.jsx)(u.Text, {
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
                label: (0, n.jsxs)("div", {
                    className: m.YL,
                    children: [(0, n.jsx)(W, { size: u._3J.SIZE_16, user: r }), (0, n.jsx)(k, { user: r })],
                }),
                ariaLabel: r.username,
            }
          : { label: (0, n.jsx)(x, { label: s }), ariaLabel: s };
}
function U(e) {
    let { text: t, className: r, size: s } = e,
        l = (0, A.KD)(t);
    return null != l ? (0, n.jsx)(l, { size: s, color: "currentColor", className: r }) : null;
}
function $(e) {
    let { text: t, className: r, size: s } = e,
        l = (0, A.Ht)(t);
    return null != l ? (0, n.jsx)(l, { size: s, color: "currentColor", className: r }) : null;
}
function q(e) {
    let { result: t, group: r } = e,
        { channel: s, user: l } = t;
    return null != s
        ? (0, n.jsx)(p.A, { channel: s, avatarSize: u._3J.SIZE_20, iconClassName: m.Fx, iconSize: "refresh_sm" })
        : null != l
          ? (0, n.jsx)(W, { size: u._3J.SIZE_20, user: l, className: m.Fx })
          : r === R.LWr.FILTER_HAS
            ? (0, n.jsx)(U, { size: "sm", text: t.text, className: m.Fx })
            : r === R.LWr.FILTER_AUTHOR_TYPE
              ? (0, n.jsx)($, { size: "sm", text: t.text, className: m.Fx })
              : null;
}
function Q(e) {
    let { channel: t, user: r, text: s } = e;
    if (null != t) {
        let e = (0, S.E3)(t);
        return {
            label: (0, n.jsx)(u.Text, { variant: "text-sm/semibold", color: "text-strong", children: e }),
            ariaLabel: t.name,
        };
    }
    return null != r
        ? {
              label: (0, n.jsxs)("div", {
                  className: m.YL,
                  children: [
                      (0, n.jsx)(k, { user: r }),
                      (0, n.jsx)(u.Text, { variant: "text-sm/medium", color: "text-subtle", children: r.username }),
                  ],
              }),
              ariaLabel: r.username,
          }
        : { label: (0, n.jsx)(x, { label: s }), ariaLabel: s };
}
