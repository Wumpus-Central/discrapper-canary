"use strict";
n.d(t, { DH: () => h, JW: () => p, a6: () => m, f7: () => _, jw: () => E, oo: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(435371),
    l = n(397927),
    u = n(756366),
    c = n(985018),
    d = n(559485);
function _(e) {
    let {
            header: t,
            headerIconSrc: n,
            bottomSubText: s,
            label: _,
            description: f,
            graphic: p,
            price: h,
            PriceIcon: m,
            priceTooltip: E,
            priceSubText: g,
            priceSubTextHasStrikethrough: A = !0,
            gift: I,
            className: T,
        } = e,
        S =
            null != I
                ? c.intl.format(u.default["2PiTTi"], {
                      username: I.username,
                      nickname: I.nickname ?? I.username,
                      avatar: () => (0, r.jsx)("img", { alt: "", src: I.avatarUrl, className: d.s }),
                  })
                : null,
        y = i.useMemo(() => {
            let e = (0, r.jsxs)(l.Text, {
                variant: "text-md/medium",
                color: "text-default",
                className: d.nw,
                children: [null != m && (0, r.jsx)(m, { size: "xs" }), h],
            });
            return null != E
                ? (0, r.jsx)(o.m_, { text: E, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [m, h, E]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(d.kL, T),
                children: [
                    null != p && (0, r.jsx)("div", { className: d.Kk, children: p }),
                    (0, r.jsxs)("div", {
                        className: d.Qs,
                        children: [
                            null != t &&
                                (0, r.jsxs)(l.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    className: d.wx,
                                    children: [null != n && (0, r.jsx)("img", { alt: "", src: n, className: d.nr }), t],
                                }),
                            (0, r.jsxs)("div", {
                                className: d.zH,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: d.Qq,
                                        children: [
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 1,
                                                children: _,
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                lineClamp: 2,
                                                children: f,
                                            }),
                                            null != S &&
                                                (0, r.jsx)(l.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 1,
                                                    children: S,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: d.p6,
                                        children: [
                                            y,
                                            null != g &&
                                                (0, r.jsx)(l.Text, {
                                                    variant: A ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: a()(d.Jb, { [d.Nc]: A }),
                                                    children: g,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != s &&
                (0, r.jsx)(l.Text, { variant: "text-sm/medium", color: "text-muted", className: d.dx, children: s }),
        ],
    });
}
function f(e) {
    let { color: t, Icon: n } = e;
    return (0, r.jsx)(l.hLv, {
        color: t,
        className: d.nC,
        children: (0, r.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function p() {
    return (0, r.jsx)(f, { color: "nitro-pink", Icon: l.tvc });
}
function h() {
    return (0, r.jsx)(f, { color: "nitro-green", Icon: l.tvc });
}
function m() {
    return (0, r.jsx)(f, { color: "pink", Icon: l._Jp });
}
function E() {
    return (0, r.jsx)(l.k9F, { size: "lg", color: "var(--icon-muted)" });
}
function g() {
    return (0, r.jsx)("div", {
        className: d.CX,
        children: (0, r.jsx)(l.tvc, { size: "lg", color: "var(--neutral-1)" }),
    });
}
