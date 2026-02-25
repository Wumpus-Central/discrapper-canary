"use strict";
n.d(t, { DH: () => h, JW: () => p, a6: () => m, f7: () => _, jw: () => E, oo: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(435371),
    l = n(397927),
    u = n(523376),
    c = n(985018),
    d = n(547595);
function _(e) {
    let {
            header: t,
            headerIconSrc: n,
            label: s,
            description: _,
            graphic: f,
            price: p,
            PriceIcon: h,
            priceTooltip: m,
            priceSubText: E,
            priceSubTextHasStrikethrough: g = !0,
            gift: A,
            className: I,
        } = e,
        T =
            null != A
                ? c.intl.format(u.default["2PiTTi"], {
                      username: A.username,
                      nickname: A.nickname ?? A.username,
                      avatar: () => (0, r.jsx)("img", { alt: "", src: A.avatarUrl, className: d.s }),
                  })
                : null,
        S = i.useMemo(() => {
            let e = (0, r.jsxs)(l.Text, {
                variant: "text-md/medium",
                color: "text-default",
                className: d.nw,
                children: [null != h && (0, r.jsx)(h, { size: "xs" }), p],
            });
            return null != m
                ? (0, r.jsx)(o.m_, { text: m, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [h, p, m]);
    return (0, r.jsxs)("div", {
        className: a()(d.kL, I),
        children: [
            null != f && (0, r.jsx)("div", { className: d.Kk, children: f }),
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
                                        children: s,
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        lineClamp: 2,
                                        children: _,
                                    }),
                                    null != T &&
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            lineClamp: 1,
                                            children: T,
                                        }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: d.p6,
                                children: [
                                    S,
                                    null != E &&
                                        (0, r.jsx)(l.Text, {
                                            variant: g ? "text-xs/medium" : "text-sm/normal",
                                            color: "text-muted",
                                            className: a()(d.Jb, { [d.Nc]: g }),
                                            children: E,
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
