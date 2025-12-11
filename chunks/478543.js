n.d(t, { Z: () => A }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(481060),
    u = n(240872),
    d = n(19780),
    f = n(942389),
    p = n(572004),
    _ = n(63063),
    m = n(358085),
    h = n(145022),
    g = n(981631),
    E = n(388032),
    b = n(80558);
function y(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function O(e) {
    let { url: t } = e,
        [n, a] = i.useState(!1),
        s = i.useRef(void 0),
        l = i.useCallback(() => {
            n ||
                (0, p.JG)(t, () => {
                    a(!0), (s.current = setTimeout(() => a(!1), 2000));
                });
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(s.current), []),
        p.wS
            ? (0, r.jsxs)(c.P3F, {
                  className: o()(b.copyLink, n ? b.copied : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(c.xPt, {
                          size: "md",
                          color: "currentColor",
                          className: b.copyLinkIcon,
                      }),
                      n ? E.intl.string(E.t.GmrIJY) : E.intl.string(E.t.iVzBOh),
                  ],
              })
            : null
    );
}
function v() {
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: b.buildInfo,
                children: [
                    (0, r.jsx)("div", { className: o()(b.barLoader, b.barTitle) }),
                    (0, r.jsx)("div", { className: b.barLoader }),
                ],
            }),
            (0, r.jsx)("div", { className: b.buttonLoader }),
        ],
    });
}
function S(e) {
    let {
        subHead: t,
        buildDetails: n,
        variant: a,
        buttonClick: o,
        buttonText: s,
        disabled: l = !1,
        submitting: u = !1,
    } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: b.buildInfo,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        className: b.subHead,
                        children: t,
                    }),
                    (0, r.jsx)("div", {
                        className: b.buildDetails,
                        children: n,
                    }),
                ],
            }),
            (0, r.jsx)(c.Button, {
                text: s,
                loading: u,
                variant: a,
                onClick: o,
                fullWidth: !0,
                disabled: l,
            }),
        ],
    });
}
function I(e) {
    let t,
        n,
        r,
        { currentOverrides: i, linkMeta: a, applyBuildOverride: o, clearBuildOverride: s, submitting: c } = e,
        f = ["discord_web"];
    m.isPlatformEmbedded || f.push("discord_marketing", "discord_developers");
    let p = (0, h.Z)(a, f);
    if (!p.valid) return T(p.reason);
    l()(null != a, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
    let { discord_web: _, discord_developers: g } = a.targetBuildOverride,
        b = null != _ ? _ : g;
    l()(
        null != b,
        "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved",
    ),
        y(b, i)
            ? ((n = E.intl.string(E.t.tX4xrt)), (t = s), (r = "critical-primary"))
            : ((n = E.intl.string(E.t.nOunHC)), (t = o), (r = "primary"));
    let O = () => {
        d.Z.isConnected()
            ? u.Z.show({
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
        buildDetails: b.id,
        buttonClick: O,
        buttonText: n,
        variant: r,
        submitting: c,
    });
}
function T(e) {
    return S({
        subHead: E.intl.string(E.t.ODXApH),
        variant: "secondary",
        buttonText: "Invalid",
        buildDetails: e,
        disabled: !0,
    });
}
function C(e, t, n) {
    return (0, r.jsxs)(c.Text, {
        variant: "text-xs/normal",
        className: b.titleRegion,
        children: [
            (0, r.jsx)("strong", {
                className: b.title,
                children:
                    null != e && null != e.releaseChannel
                        ? E.intl.formatToPlainString(E.t.bFj63b, { releaseChannel: e.releaseChannel })
                        : E.intl.string(E.t.Wj3LW4),
            }),
            (0, r.jsx)(c.Anchor, {
                className: b.infoLink,
                href: _.Z.getArticleURL(g.BhN.BUILD_OVERRIDE_EMBED),
                target: "_blank",
                children: (0, r.jsx)(c.d3s, {
                    size: "xs",
                    color: "currentColor",
                    className: b.infoIcon,
                }),
            }),
            n ? null : (0, r.jsx)(O, { url: t }),
        ],
    });
}
let A = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: a, url: o, applyBuildOverride: s, clearBuildOverride: l } = e,
        [c, u] = i.useState(!1),
        d = i.useCallback(() => {
            c || (u(!0), s().catch(() => u(!1)));
        }, [s, c]),
        p = i.useCallback(() => {
            c || (u(!0), l().catch(() => u(!1)));
        }, [l, c]);
    return (0, r.jsxs)("div", {
        className: b.wrapper,
        children: [
            C(a, o, t),
            (0, r.jsxs)("div", {
                className: b.content,
                children: [
                    (0, r.jsx)(f.Z, { className: b.icon }),
                    t
                        ? v()
                        : I({
                              currentOverrides: n,
                              linkMeta: a,
                              applyBuildOverride: d,
                              clearBuildOverride: p,
                              submitting: c,
                          }),
                ],
            }),
        ],
    });
};
