n.d(t, { Z: () => C }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(481060),
    c = n(240872),
    d = n(19780),
    f = n(942389),
    _ = n(572004),
    p = n(63063),
    h = n(358085),
    m = n(145022),
    g = n(981631),
    E = n(388032),
    v = n(520512);
function y(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function I(e) {
    let { url: t } = e,
        [n, a] = r.useState(!1),
        o = r.useRef(void 0),
        l = r.useCallback(() => {
            !n && ((0, _.JG)(t) && a(!0), (o.current = setTimeout(() => a(!1), 2000)));
        }, [t, n]);
    return (
        r.useEffect(() => () => clearTimeout(o.current), []),
        _.wS
            ? (0, i.jsxs)(u.P3F, {
                  className: s()(v.copyLink, n ? v.copied : null),
                  onClick: l,
                  children: [
                      (0, i.jsx)(u.xPt, {
                          size: 'md',
                          color: 'currentColor',
                          className: v.copyLinkIcon
                      }),
                      n ? E.intl.string(E.t.GmrIJS) : E.intl.string(E.t.iVzBOj)
                  ]
              })
            : null
    );
}
function b() {
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: v.buildInfo,
                children: [(0, i.jsx)('div', { className: s()(v.barLoader, v.barTitle) }), (0, i.jsx)('div', { className: v.barLoader })]
            }),
            (0, i.jsx)('div', { className: v.buttonLoader })
        ]
    });
}
function T(e) {
    let { subHead: t, buildDetails: n, buttonColor: a, buttonClick: o, buttonText: l, disabled: c = !1, submitting: d = !1 } = e;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: v.buildInfo,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        className: v.subHead,
                        children: t
                    }),
                    (0, i.jsx)('div', {
                        className: v.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, i.jsx)(u.zxk, {
                submitting: d,
                color: a,
                onClick: o,
                className: s()(v.button, c ? v.disabledButtonOverride : null),
                size: v.buttonSize,
                disabled: c,
                children: l
            })
        ]
    });
}
function S(e) {
    let t,
        n,
        i,
        { currentOverrides: r, linkMeta: a, applyBuildOverride: s, clearBuildOverride: o, submitting: f } = e,
        _ = ['discord_web'];
    h.isPlatformEmbedded || _.push('discord_marketing', 'discord_developers');
    let p = (0, m.Z)(a, _);
    if (!p.valid) return A(p.reason);
    l()(null != a, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
    let { discord_web: g, discord_developers: v } = a.targetBuildOverride,
        I = null != g ? g : v;
    l()(null != I, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), y(I, r) ? ((n = E.intl.string(E.t.tX4xrq)), (t = o), (i = u.zxk.Colors.RED)) : ((n = E.intl.string(E.t.nOunHB)), (t = s), (i = u.zxk.Colors.GREEN));
    let b = () => {
        d.Z.isConnected()
            ? c.Z.show({
                  title: E.intl.string(E.t.tiu1l5),
                  body: E.intl.string(E.t['zK+lqa']),
                  onConfirm: t,
                  cancelText: E.intl.string(E.t['ETE/oK']),
                  confirmText: E.intl.string(E.t['QDX/qq'])
              })
            : t();
    };
    return T({
        subHead: E.intl.string(E.t.RCYGoq),
        buildDetails: I.id,
        buttonClick: b,
        buttonText: n,
        buttonColor: i,
        submitting: f
    });
}
function A(e) {
    return T({
        subHead: E.intl.string(E.t.ODXApK),
        buttonColor: u.zxk.Colors.TRANSPARENT,
        buttonText: 'Invalid',
        buildDetails: e,
        disabled: !0
    });
}
function N(e, t, n) {
    return (0, i.jsxs)(u.Text, {
        variant: 'text-xs/normal',
        className: v.titleRegion,
        children: [
            (0, i.jsx)('strong', {
                className: v.title,
                children: null != e && null != e.releaseChannel ? E.intl.formatToPlainString(E.t.bFj63d, { releaseChannel: e.releaseChannel }) : E.intl.string(E.t.Wj3LW1)
            }),
            (0, i.jsx)(u.eee, {
                className: v.infoLink,
                href: p.Z.getArticleURL(g.BhN.BUILD_OVERRIDE_EMBED),
                target: '_blank',
                children: (0, i.jsx)(u.d3s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: v.infoIcon
                })
            }),
            n ? null : (0, i.jsx)(I, { url: t })
        ]
    });
}
let C = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: a, url: s, applyBuildOverride: o, clearBuildOverride: l } = e,
        [u, c] = r.useState(!1),
        d = r.useCallback(() => {
            !u && (c(!0), o().catch(() => c(!1)));
        }, [o, u]),
        _ = r.useCallback(() => {
            !u && (c(!0), l().catch(() => c(!1)));
        }, [l, u]);
    return (0, i.jsxs)('div', {
        className: v.wrapper,
        children: [
            N(a, s, t),
            (0, i.jsxs)('div', {
                className: v.content,
                children: [
                    (0, i.jsx)(f.Z, { className: v.icon }),
                    t
                        ? b()
                        : S({
                              currentOverrides: n,
                              linkMeta: a,
                              applyBuildOverride: d,
                              clearBuildOverride: _,
                              submitting: u
                          })
                ]
            })
        ]
    });
};
