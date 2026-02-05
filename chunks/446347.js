"use strict";
n.d(t, { A: () => N }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(652215),
    E = n(985018),
    A = n(596475);
function I(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function T(e) {
    let { url: t } = e,
        [n, a] = i.useState(!1),
        o = i.useRef(void 0),
        l = i.useCallback(() => {
            n ||
                (0, f.C)(t, () => {
                    a(!0), (o.current = setTimeout(() => a(!1), 2e3));
                });
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(o.current), []),
        f.p5
            ? (0, r.jsxs)(u.DUT, {
                  className: s()(A.S, n ? A.pG : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(u.qYV, { size: "md", color: "currentColor", className: A.n7 }),
                      n ? E.intl.string(E.t.GmrIJY) : E.intl.string(E.t.iVzBOh),
                  ],
              })
            : null
    );
}
function y() {
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: A.NT,
                children: [(0, r.jsx)("div", { className: s()(A.Pz, A.w9) }), (0, r.jsx)("div", { className: A.Pz })],
            }),
            (0, r.jsx)("div", { className: A.MM }),
        ],
    });
}
function S(e) {
    let {
        subHead: t,
        buildDetails: n,
        variant: a,
        buttonClick: s,
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
            (0, r.jsx)(u.Button, { text: o, loading: c, variant: a, onClick: s, fullWidth: !0, disabled: l }),
        ],
    });
}
function v(e) {
    let t,
        n,
        r,
        { currentOverrides: i, linkMeta: a, applyBuildOverride: s, clearBuildOverride: o, submitting: u } = e,
        _ = ["discord_web"];
    h.isPlatformEmbedded || _.push("discord_marketing", "discord_developers");
    let f = (0, m.A)(a, _);
    if (!f.valid) return C(f.reason);
    l()(null != a, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
    let { discord_web: p, discord_developers: g } = a.targetBuildOverride,
        A = p ?? g;
    l()(
        null != A,
        "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved",
    ),
        I(A, i)
            ? ((n = E.intl.string(E.t.tX4xrt)), (t = o), (r = "critical-primary"))
            : ((n = E.intl.string(E.t.nOunHC)), (t = s), (r = "primary"));
    let T = () => {
        d.A.isConnected()
            ? c.A.show({
                  title: E.intl.string(E.t.tiu1ly),
                  body: E.intl.string(E.t["zK+lqW"]),
                  onConfirm: t,
                  cancelText: E.intl.string(E.t["ETE/oC"]),
                  confirmText: E.intl.string(E.t["QDX/qu"]),
                  confirmVariant: "critical-primary",
              })
            : t();
    };
    return S({
        subHead: E.intl.string(E.t.RCYGot),
        buildDetails: A.id,
        buttonClick: T,
        buttonText: n,
        variant: r,
        submitting: u,
    });
}
function C(e) {
    return S({
        subHead: E.intl.string(E.t.ODXApH),
        variant: "secondary",
        buttonText: "Invalid",
        buildDetails: e,
        disabled: !0,
    });
}
function b(e, t, n) {
    return (0, r.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: A.lS,
        children: [
            (0, r.jsx)("strong", {
                className: A.DD,
                children:
                    null != e && null != e.releaseChannel
                        ? E.intl.formatToPlainString(E.t.bFj63b, { releaseChannel: e.releaseChannel })
                        : E.intl.string(E.t.Wj3LW4),
            }),
            (0, r.jsx)(u.MzZ, {
                className: A.Pl,
                href: p.A.getArticleURL(g.MVz.BUILD_OVERRIDE_EMBED),
                target: "_blank",
                children: (0, r.jsx)(u.mir, { size: "xs", color: "currentColor", className: A.G }),
            }),
            n ? null : (0, r.jsx)(T, { url: t }),
        ],
    });
}
let N = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: a, url: s, applyBuildOverride: o, clearBuildOverride: l } = e,
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
            b(a, s, t),
            (0, r.jsxs)("div", {
                className: A.Qs,
                children: [
                    (0, r.jsx)(_.A, { className: A.Kk }),
                    t
                        ? y()
                        : v({
                              currentOverrides: n,
                              linkMeta: a,
                              applyBuildOverride: d,
                              clearBuildOverride: f,
                              submitting: u,
                          }),
                ],
            }),
        ],
    });
};
