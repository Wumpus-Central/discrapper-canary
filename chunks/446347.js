"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(397927),
    c = n(579872),
    d = n(383501),
    _ = n(710067),
    f = n(957565),
    p = n(975571),
    h = n(723702),
    m = n(938463),
    E = n(652215),
    g = n(985018),
    A = n(722836);
function I(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function T(e) {
    let { url: t } = e,
        [n, s] = i.useState(!1),
        o = i.useRef(void 0),
        l = i.useCallback(() => {
            n ||
                (0, f.C)(t, () => {
                    s(!0), (o.current = setTimeout(() => s(!1), 2e3));
                });
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(o.current), []),
        f.p5
            ? (0, r.jsxs)(u.DUT, {
                  className: a()(A.S, n ? A.pG : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(u.qYV, { size: "md", color: "currentColor", className: A.n7 }),
                      n ? g.intl.string(g.t.GmrIJY) : g.intl.string(g.t.iVzBOh),
                  ],
              })
            : null
    );
}
function S() {
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: A.NT,
                children: [(0, r.jsx)("div", { className: a()(A.Pz, A.w9) }), (0, r.jsx)("div", { className: A.Pz })],
            }),
            (0, r.jsx)("div", { className: A.MM }),
        ],
    });
}
function y(e) {
    let {
        subHead: t,
        buildDetails: n,
        variant: s,
        buttonClick: a,
        buttonText: o,
        disabled: l = !1,
        submitting: c = !1,
    } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: A.NT,
                children: [
                    (0, r.jsx)(u.Text, { variant: "text-sm/medium", className: A.V$, children: t }),
                    (0, r.jsx)("div", { className: A.Jb, children: n }),
                ],
            }),
            (0, r.jsx)(u.Button, { text: o, loading: c, variant: s, onClick: a, fullWidth: !0, disabled: l }),
        ],
    });
}
function v(e) {
    let t,
        n,
        r,
        { currentOverrides: i, linkMeta: s, applyBuildOverride: a, clearBuildOverride: o, submitting: u } = e,
        _ = ["discord_web"];
    h.isPlatformEmbedded || _.push("discord_marketing", "discord_developers");
    let f = (0, m.A)(s, _);
    if (!f.valid) return N(f.reason);
    l()(null != s, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
    let { discord_web: p, discord_developers: E } = s.targetBuildOverride,
        A = p ?? E;
    l()(
        null != A,
        "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved",
    ),
        I(A, i)
            ? ((n = g.intl.string(g.t.tX4xrt)), (t = o), (r = "critical-primary"))
            : ((n = g.intl.string(g.t.nOunHC)), (t = a), (r = "primary"));
    let T = () => {
        d.A.isConnected()
            ? c.A.show({
                  title: g.intl.string(g.t.tiu1ly),
                  body: g.intl.string(g.t["zK+lqW"]),
                  onConfirm: t,
                  cancelText: g.intl.string(g.t["ETE/oC"]),
                  confirmText: g.intl.string(g.t["QDX/qu"]),
                  confirmVariant: "critical-primary",
              })
            : t();
    };
    return y({
        subHead: g.intl.string(g.t.RCYGot),
        buildDetails: A.id,
        buttonClick: T,
        buttonText: n,
        variant: r,
        submitting: u,
    });
}
function N(e) {
    return y({
        subHead: g.intl.string(g.t.ODXApH),
        variant: "secondary",
        buttonText: "Invalid",
        buildDetails: e,
        disabled: !0,
    });
}
function C(e, t, n) {
    return (0, r.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: A.lS,
        children: [
            (0, r.jsx)("strong", {
                className: A.DD,
                children:
                    null != e && null != e.releaseChannel
                        ? g.intl.formatToPlainString(g.t.bFj63b, { releaseChannel: e.releaseChannel })
                        : g.intl.string(g.t.Wj3LW4),
            }),
            (0, r.jsx)(u.MzZ, {
                className: A.Pl,
                href: p.A.getArticleURL(E.MVz.BUILD_OVERRIDE_EMBED),
                target: "_blank",
                children: (0, r.jsx)(u.mir, { size: "xs", color: "currentColor", className: A.G }),
            }),
            n ? null : (0, r.jsx)(T, { url: t }),
        ],
    });
}
let R = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: s, url: a, applyBuildOverride: o, clearBuildOverride: l } = e,
        [u, c] = i.useState(!1),
        d = i.useCallback(() => {
            u || (c(!0), o().catch(() => c(!1)));
        }, [o, u]),
        f = i.useCallback(() => {
            u || (c(!0), l().catch(() => c(!1)));
        }, [l, u]);
    return (0, r.jsxs)("div", {
        className: A.iE,
        children: [
            C(s, a, t),
            (0, r.jsxs)("div", {
                className: A.Qs,
                children: [
                    (0, r.jsx)(_.A, { className: A.Kk }),
                    t
                        ? S()
                        : v({
                              currentOverrides: n,
                              linkMeta: s,
                              applyBuildOverride: d,
                              clearBuildOverride: f,
                              submitting: u,
                          }),
                ],
            }),
        ],
    });
};
