(n.d(t, { Z: () => C }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(755721),
    u = n(481060),
    d = n(240872),
    _ = n(19780),
    f = n(942389),
    p = n(572004),
    h = n(63063),
    m = n(358085),
    g = n(145022),
    E = n(981631),
    b = n(388032),
    y = n(176396);
function O(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function v(e) {
    let { url: t } = e,
        [n, a] = i.useState(!1),
        s = i.useRef(void 0),
        l = i.useCallback(() => {
            n ||
                (0, p.JG)(t, () => {
                    (a(!0), (s.current = setTimeout(() => a(!1), 2000)));
                });
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(s.current), []),
        p.wS
            ? (0, r.jsxs)(u.P3F, {
                  className: o()(y.copyLink, n ? y.copied : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(u.xPt, {
                          size: 'md',
                          color: 'currentColor',
                          className: y.copyLinkIcon
                      }),
                      n ? b.intl.string(b.t.GmrIJS) : b.intl.string(b.t.iVzBOj)
                  ]
              })
            : null
    );
}
function I() {
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: y.buildInfo,
                children: [(0, r.jsx)('div', { className: o()(y.barLoader, y.barTitle) }), (0, r.jsx)('div', { className: y.barLoader })]
            }),
            (0, r.jsx)('div', { className: y.buttonLoader })
        ]
    });
}
function T(e) {
    let { subHead: t, buildDetails: n, buttonColor: a, buttonClick: s, buttonText: l, disabled: d = !1, submitting: _ = !1 } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: y.buildInfo,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        className: y.subHead,
                        children: t
                    }),
                    (0, r.jsx)('div', {
                        className: y.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, r.jsx)(c.zx, {
                submitting: _,
                color: a,
                onClick: s,
                className: o()(y.button, d ? y.disabledButtonOverride : null),
                size: y.buttonSize,
                disabled: d,
                children: l
            })
        ]
    });
}
function S(e) {
    let t,
        n,
        r,
        { currentOverrides: i, linkMeta: a, applyBuildOverride: o, clearBuildOverride: s, submitting: u } = e,
        f = ['discord_web'];
    m.isPlatformEmbedded || f.push('discord_marketing', 'discord_developers');
    let p = (0, g.Z)(a, f);
    if (!p.valid) return A(p.reason);
    l()(null != a, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
    let { discord_web: h, discord_developers: E } = a.targetBuildOverride,
        y = null != h ? h : E;
    (l()(null != y, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), O(y, i) ? ((n = b.intl.string(b.t.tX4xrq)), (t = s), (r = c.zx.Colors.RED)) : ((n = b.intl.string(b.t.nOunHB)), (t = o), (r = c.zx.Colors.GREEN)));
    let v = () => {
        _.Z.isConnected()
            ? d.Z.show({
                  title: b.intl.string(b.t.tiu1l5),
                  body: b.intl.string(b.t['zK+lqa']),
                  onConfirm: t,
                  cancelText: b.intl.string(b.t['ETE/oK']),
                  confirmText: b.intl.string(b.t['QDX/qq']),
                  confirmVariant: 'critical-primary'
              })
            : t();
    };
    return T({
        subHead: b.intl.string(b.t.RCYGoq),
        buildDetails: y.id,
        buttonClick: v,
        buttonText: n,
        buttonColor: r,
        submitting: u
    });
}
function A(e) {
    return T({
        subHead: b.intl.string(b.t.ODXApK),
        buttonColor: c.zx.Colors.TRANSPARENT,
        buttonText: 'Invalid',
        buildDetails: e,
        disabled: !0
    });
}
function N(e, t, n) {
    return (0, r.jsxs)(u.Text, {
        variant: 'text-xs/normal',
        className: y.titleRegion,
        children: [
            (0, r.jsx)('strong', {
                className: y.title,
                children: null != e && null != e.releaseChannel ? b.intl.formatToPlainString(b.t.bFj63d, { releaseChannel: e.releaseChannel }) : b.intl.string(b.t.Wj3LW1)
            }),
            (0, r.jsx)(u.eee, {
                className: y.infoLink,
                href: h.Z.getArticleURL(E.BhN.BUILD_OVERRIDE_EMBED),
                target: '_blank',
                children: (0, r.jsx)(u.d3s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: y.infoIcon
                })
            }),
            n ? null : (0, r.jsx)(v, { url: t })
        ]
    });
}
let C = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: a, url: o, applyBuildOverride: s, clearBuildOverride: l } = e,
        [c, u] = i.useState(!1),
        d = i.useCallback(() => {
            c || (u(!0), s().catch(() => u(!1)));
        }, [s, c]),
        _ = i.useCallback(() => {
            c || (u(!0), l().catch(() => u(!1)));
        }, [l, c]);
    return (0, r.jsxs)('div', {
        className: y.wrapper,
        children: [
            N(a, o, t),
            (0, r.jsxs)('div', {
                className: y.content,
                children: [
                    (0, r.jsx)(f.Z, { className: y.icon }),
                    t
                        ? I()
                        : S({
                              currentOverrides: n,
                              linkMeta: a,
                              applyBuildOverride: d,
                              clearBuildOverride: _,
                              submitting: c
                          })
                ]
            })
        ]
    });
};
