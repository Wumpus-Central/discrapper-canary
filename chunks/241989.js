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
    f = n(756366),
    p = n(985018),
    h = n(559485);
function m(e) {
    let {
            header: t,
            headerIconSrc: n,
            headerIconComponent: s,
            bottomSubText: u,
            label: c,
            description: d,
            graphic: _,
            price: f,
            PriceIcon: p,
            priceTooltip: m,
            priceSubText: g,
            priceSubTextHasStrikethrough: A = !0,
            target: I,
            className: T,
        } = e,
        S = (0, r.jsx)(E, { target: I }),
        y = i.useMemo(() => {
            let e = (0, r.jsxs)(l.Text, {
                variant: "text-md/medium",
                color: "text-default",
                className: h.nw,
                children: [null != p && (0, r.jsx)(p, { size: "xs" }), f],
            });
            return null != m
                ? (0, r.jsx)(o.m_, { text: m, asContainer: !0, position: "top", align: "center", children: e })
                : e;
        }, [p, f, m]),
        v = i.useMemo(
            () =>
                null != s
                    ? (0, r.jsx)("span", { className: h.nr, children: s })
                    : null != n
                      ? (0, r.jsx)("img", { alt: "", src: n, className: h.nr })
                      : null,
            [n, s],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(h.kL, T),
                children: [
                    null != _ && (0, r.jsx)("div", { className: h.Kk, children: _ }),
                    (0, r.jsxs)("div", {
                        className: h.Qs,
                        children: [
                            null != t &&
                                (0, r.jsxs)(l.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    lineClamp: 2,
                                    className: h.wx,
                                    children: [v, t],
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
                                                lineClamp: 2,
                                                children: c,
                                            }),
                                            null != d &&
                                                (0, r.jsx)(l.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    lineClamp: 2,
                                                    children: d,
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
                                        className: h.p6,
                                        children: [
                                            y,
                                            null != g &&
                                                (0, r.jsx)(l.Text, {
                                                    variant: A ? "text-xs/medium" : "text-sm/normal",
                                                    color: "text-muted",
                                                    className: a()(h.Jb, { [h.Nc]: A }),
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
            null != u &&
                (0, r.jsx)(l.Text, { variant: "text-sm/medium", color: "text-muted", className: h.dx, children: u }),
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
                icon: (0, r.jsx)(c.Ay, { guild: t.guild, size: c.Ay.Sizes.SMOL, className: h.RG }),
            });
        case "boost":
            return p.intl.format(f.default["8imbq5"], {
                guildName: t.guild.name,
                guildIcon: () =>
                    (0, r.jsx)(c.Ay, { guild: t.guild, size: c.Ay.Sizes.SMOL, className: h.RG, active: !0 }),
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
