"use strict";
n.d(t, { DH: () => f, JW: () => _, a6: () => p, f7: () => c, jw: () => h, oo: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(523376),
    l = n(985018),
    u = n(547595);
function c(e) {
    let {
            header: t,
            headerIconSrc: n,
            label: i,
            description: c,
            graphic: d,
            price: _,
            PriceIcon: f,
            priceSubText: p,
            priceSubTextHasStrikethrough: h = !0,
            gift: m,
            className: E,
        } = e,
        g =
            null != m
                ? l.intl.format(o.default["2PiTTi"], {
                      username: m.username,
                      nickname: m.nickname ?? m.username,
                      avatar: () => (0, r.jsx)("img", { alt: "", src: m.avatarUrl, className: u.s }),
                  })
                : null;
    return (0, r.jsxs)("div", {
        className: s()(u.kL, E),
        children: [
            null != d && (0, r.jsx)("div", { className: u.Kk, children: d }),
            (0, r.jsxs)("div", {
                className: u.Qs,
                children: [
                    null != t &&
                        (0, r.jsxs)(a.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            lineClamp: 1,
                            className: u.wx,
                            children: [null != n && (0, r.jsx)("img", { alt: "", src: n, className: u.nr }), t],
                        }),
                    (0, r.jsxs)("div", {
                        className: u.zH,
                        children: [
                            (0, r.jsxs)("div", {
                                className: u.Qq,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        lineClamp: 1,
                                        children: i,
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        lineClamp: 2,
                                        children: c,
                                    }),
                                    null != g &&
                                        (0, r.jsx)(a.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            lineClamp: 1,
                                            children: g,
                                        }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: u.p6,
                                children: [
                                    (0, r.jsxs)(a.Text, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        className: u.nw,
                                        children: [null != f && (0, r.jsx)(f, { size: "xs" }), _],
                                    }),
                                    null != p &&
                                        (0, r.jsx)(a.Text, {
                                            variant: h ? "text-xs/medium" : "text-sm/normal",
                                            color: "text-muted",
                                            className: s()(u.Jb, { [u.Nc]: h }),
                                            children: p,
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function d(e) {
    let { color: t, Icon: n } = e;
    return (0, r.jsx)(a.hLv, {
        color: t,
        className: u.nC,
        children: (0, r.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function _() {
    return (0, r.jsx)(d, { color: "nitro-pink", Icon: a.tvc });
}
function f() {
    return (0, r.jsx)(d, { color: "nitro-green", Icon: a.tvc });
}
function p() {
    return (0, r.jsx)(d, { color: "pink", Icon: a._Jp });
}
function h() {
    return (0, r.jsx)(a.k9F, { size: "lg", color: "var(--icon-muted)" });
}
function m() {
    return (0, r.jsx)("div", {
        className: u.CX,
        children: (0, r.jsx)(a.tvc, { size: "lg", color: "var(--neutral-1)" }),
    });
}
