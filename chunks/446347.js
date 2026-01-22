n.d(t, {
    A: () => C,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(397927),
    u = n(579872),
    d = n(383501),
    f = n(710067),
    p = n(957565),
    _ = n(975571),
    h = n(723702),
    m = n(938463),
    g = n(652215),
    E = n(985018),
    b = n(596475);

function y(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}

function O(e) {
    let { url: t } = e,
        [n, a] = i.useState(!1),
        o = i.useRef(void 0),
        l = i.useCallback(() => {
            n ||
                (0, p.C)(t, () => {
                    a(!0), (o.current = setTimeout(() => a(!1), 2e3));
                });
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(o.current), []),
        p.p5
            ? (0, r.jsxs)(c.DUT, {
                  className: s()(b.S, n ? b.pG : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(c.qYV, {
                          size: "md",
                          color: "currentColor",
                          className: b.n7,
                      }),
                      n ? E.intl.string(E.t.GmrIJY) : E.intl.string(E.t.iVzBOh),
                  ],
              })
            : null
    );
}

function A() {
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: b.NT,
                children: [
                    (0, r.jsx)("div", {
                        className: s()(b.Pz, b.w9),
                    }),
                    (0, r.jsx)("div", {
                        className: b.Pz,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: b.MM,
            }),
        ],
    });
}

function v(e) {
    let {
        subHead: t,
        buildDetails: n,
        variant: a,
        buttonClick: s,
        buttonText: o,
        disabled: l = !1,
        submitting: u = !1,
    } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: b.NT,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        className: b.V$,
                        children: t,
                    }),
                    (0, r.jsx)("div", {
                        className: b.Jb,
                        children: n,
                    }),
                ],
            }),
            (0, r.jsx)(c.Button, {
                text: o,
                loading: u,
                variant: a,
                onClick: s,
                fullWidth: !0,
                disabled: l,
            }),
        ],
    });
}

function S(e) {
    let t,
        n,
        r,
        { currentOverrides: i, linkMeta: a, applyBuildOverride: s, clearBuildOverride: o, submitting: c } = e,
        f = ["discord_web"];
    h.isPlatformEmbedded || f.push("discord_marketing", "discord_developers");
    let p = (0, m.A)(a, f);
    if (!p.valid) return I(p.reason);
    l()(null != a, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
    let { discord_web: _, discord_developers: g } = a.targetBuildOverride,
        b = null != _ ? _ : g;
    l()(
        null != b,
        "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved",
    ),
        y(b, i)
            ? ((n = E.intl.string(E.t.tX4xrt)), (t = o), (r = "critical-primary"))
            : ((n = E.intl.string(E.t.nOunHC)), (t = s), (r = "primary"));
    let O = () => {
        d.A.isConnected()
            ? u.A.show({
                  title: E.intl.string(E.t.tiu1ly),
                  body: E.intl.string(E.t["zK+lqW"]),
                  onConfirm: t,
                  cancelText: E.intl.string(E.t["ETE/oC"]),
                  confirmText: E.intl.string(E.t["QDX/qu"]),
                  confirmVariant: "critical-primary",
              })
            : t();
    };
    return v({
        subHead: E.intl.string(E.t.RCYGot),
        buildDetails: b.id,
        buttonClick: O,
        buttonText: n,
        variant: r,
        submitting: c,
    });
}

function I(e) {
    return v({
        subHead: E.intl.string(E.t.ODXApH),
        variant: "secondary",
        buttonText: "Invalid",
        buildDetails: e,
        disabled: !0,
    });
}

function T(e, t, n) {
    return (0, r.jsxs)(c.Text, {
        variant: "text-xs/normal",
        className: b.lS,
        children: [
            (0, r.jsx)("strong", {
                className: b.DD,
                children:
                    null != e && null != e.releaseChannel
                        ? E.intl.formatToPlainString(E.t.bFj63b, {
                              releaseChannel: e.releaseChannel,
                          })
                        : E.intl.string(E.t.Wj3LW4),
            }),
            (0, r.jsx)(c.MzZ, {
                className: b.Pl,
                href: _.A.getArticleURL(g.MVz.BUILD_OVERRIDE_EMBED),
                target: "_blank",
                children: (0, r.jsx)(c.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: b.G,
                }),
            }),
            n
                ? null
                : (0, r.jsx)(O, {
                      url: t,
                  }),
        ],
    });
}
let C = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: a, url: s, applyBuildOverride: o, clearBuildOverride: l } = e,
        [c, u] = i.useState(!1),
        d = i.useCallback(() => {
            c || (u(!0), o().catch(() => u(!1)));
        }, [o, c]),
        p = i.useCallback(() => {
            c || (u(!0), l().catch(() => u(!1)));
        }, [l, c]);
    return (0, r.jsxs)("div", {
        className: b.iE,
        children: [
            T(a, s, t),
            (0, r.jsxs)("div", {
                className: b.Qs,
                children: [
                    (0, r.jsx)(f.A, {
                        className: b.Kk,
                    }),
                    t
                        ? A()
                        : S({
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
