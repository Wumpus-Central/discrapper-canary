"use strict";
n.d(t, { DH: () => f, JW: () => _, a6: () => p, f7: () => c, jw: () => h, oo: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(756366),
    l = n(985018),
    u = n(559485);
function c(e) {
    let {
            header: t,
            headerIconSrc: n,
            label: i,
            description: c,
            graphic: d,
            price: _,
            PriceIcon: f,
            strikethroughPrice: p,
            gift: h,
            className: m,
        } = e,
        g =
            null != h
                ? l.intl.format(o.default["2PiTTi"], {
                      username: h.username,
                      nickname: h.nickname ?? h.username,
                      avatar: () => (0, r.jsx)("img", { alt: "", src: h.avatarUrl, className: u.s }),
                  })
                : null;
    return (0, r.jsxs)("div", {
        className: a()(u.kL, m),
        children: [
            null != d && (0, r.jsx)("div", { className: u.Kk, children: d }),
            (0, r.jsxs)("div", {
                className: u.Qs,
                children: [
                    null != t &&
                        (0, r.jsxs)(s.Text, {
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
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        lineClamp: 1,
                                        children: i,
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        lineClamp: 2,
                                        children: c,
                                    }),
                                    null != g &&
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            lineClamp: 1,
                                            className: u.Qy,
                                            children: g,
                                        }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: u.p6,
                                children: [
                                    (0, r.jsxs)(s.Text, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        className: u.nw,
                                        children: [null != f && (0, r.jsx)(f, { size: "xs" }), _],
                                    }),
                                    null != p &&
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: u.Jb,
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
    return (0, r.jsx)(s.hLv, {
        color: t,
        className: u.nC,
        children: (0, r.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function _() {
    return (0, r.jsx)(d, { color: "nitro-pink", Icon: s.tvc });
}
function f() {
    return (0, r.jsx)(d, { color: "nitro-green", Icon: s.tvc });
}
function p() {
    return (0, r.jsx)(d, { color: "pink", Icon: s._Jp });
}
function h() {
    return (0, r.jsx)(s.k9F, { size: "lg", color: "var(--icon-muted)" });
}
function m() {
    return (0, r.jsx)("div", {
        className: u.CX,
        children: (0, r.jsx)(s.tvc, { size: "lg", color: "var(--neutral-1)" }),
    });
}
