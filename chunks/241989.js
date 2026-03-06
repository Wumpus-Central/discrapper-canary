"use strict";
n.d(t, { DH: () => I, JW: () => A, a6: () => T, f7: () => m, jw: () => S, oo: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(435371),
    l = n(397927),
    u = n(966327),
    c = n(263063),
    d = n(403362),
    _ = n(427262),
    f = n(523376),
    p = n(985018),
    h = n(547595);
function m(e) {
    let {
            header: t,
            headerIconSrc: n,
            bottomSubText: s,
            label: u,
            description: c,
            graphic: d,
            price: _,
            PriceIcon: f,
            priceTooltip: p,
            priceSubText: m,
            priceSubTextHasStrikethrough: g = !0,
            target: A,
            className: I,
        } = e,
        T = (0, r.jsx)(E, { target: A }),
        S = i.useMemo(() => {
            let e = (0, r.jsxs)(l.Text, {
                variant: "text-md/medium",
                color: "text-default",
                className: h.nw,
                children: [null != f && (0, r.jsx)(f, { size: "xs" }), _],
            });
            return null != p
                ? (0, r.jsx)(o.m_, { text: p, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [f, _, p]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(h.kL, I),
                children: [
                    null != d && (0, r.jsx)("div", { className: h.Kk, children: d }),
                    (0, r.jsxs)("div", {
                        className: h.Qs,
                        children: [
                            null != t &&
                                (0, r.jsxs)(l.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    className: h.wx,
                                    children: [null != n && (0, r.jsx)("img", { alt: "", src: n, className: h.nr }), t],
                                }),
                            (0, r.jsxs)("div", {
                                className: h.zH,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: h.Qq,
                                        children: [
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                lineClamp: 1,
                                                children: u,
                                            }),
                                            null != c &&
                                                (0, r.jsx)(l.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: c,
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
                                        className: h.p6,
                                        children: [
                                            S,
                                            null != m &&
                                                (0, r.jsx)(l.Text, {
                                                    variant: g ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: a()(h.Jb, { [h.Nc]: g }),
                                                    children: m,
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
                (0, r.jsx)(l.Text, { variant: "text-sm/medium", color: "text-muted", className: h.dx, children: s }),
        ],
    });
}
function E(e) {
    let { target: t } = e;
    switch (t?.type) {
        case "gift":
            return p.intl.format(f.default["2PiTTi"], {
                username: _.Ay.getUserTag(t.user),
                nickname: _.Ay.getName(t.user),
                avatar: (0, r.jsx)(u.A, { user: t.user, size: l._3J.SIZE_16, className: h.RG }),
            });
        case "guildSubscription":
            return p.intl.format(f.default.mXvZt2, {
                guildName: t.guild.name,
                icon: (0, r.jsx)(c.Ay, { guild: t.guild, iconSize: 16, className: h.RG }),
            });
        case void 0:
            return null;
        default:
            (0, d.xb)(t);
    }
}
function g(e) {
    let { color: t, Icon: n } = e;
    return (0, r.jsx)(l.hLv, {
        color: t,
        className: h.nC,
        children: (0, r.jsx)(n, { size: "lg", color: "var(--icon-strong)" }),
    });
}
function A() {
    return (0, r.jsx)(g, { color: "nitro-pink", Icon: l.tvc });
}
function I() {
    return (0, r.jsx)(g, { color: "nitro-green", Icon: l.tvc });
}
function T() {
    return (0, r.jsx)(g, { color: "pink", Icon: l._Jp });
}
function S() {
    return (0, r.jsx)(l.k9F, { size: "lg", color: "var(--icon-muted)" });
}
function y() {
    return (0, r.jsx)("div", {
        className: h.CX,
        children: (0, r.jsx)(l.tvc, { size: "lg", color: "var(--neutral-1)" }),
    });
}
