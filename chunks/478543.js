n.d(t, { Z: () => A }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(481060),
    u = n(240872),
    d = n(19780),
    f = n(942389),
    p = n(572004),
    _ = n(63063),
    h = n(358085),
    m = n(145022),
    g = n(981631),
    E = n(388032),
    v = n(642643);
function b(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function y(e) {
    let { url: t } = e,
        [n, o] = i.useState(!1),
        s = i.useRef(void 0),
        l = i.useCallback(() => {
            !n && ((0, p.JG)(t) && o(!0), (s.current = setTimeout(() => o(!1), 2000)));
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(s.current), []),
        p.wS
            ? (0, r.jsxs)(c.P3F, {
                  className: a()(v.copyLink, n ? v.copied : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(c.xPt, {
                          size: 'md',
                          color: 'currentColor',
                          className: v.copyLinkIcon
                      }),
                      n ? E.NW.string(E.t.GmrIJS) : E.NW.string(E.t.iVzBOj)
                  ]
              })
            : null
    );
}
function O() {
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: v.buildInfo,
                children: [(0, r.jsx)('div', { className: a()(v.barLoader, v.barTitle) }), (0, r.jsx)('div', { className: v.barLoader })]
            }),
            (0, r.jsx)('div', { className: v.buttonLoader })
        ]
    });
}
function S(e) {
    let { subHead: t, buildDetails: n, buttonColor: o, buttonClick: s, buttonText: l, disabled: u = !1, submitting: d = !1 } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: v.buildInfo,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        className: v.subHead,
                        children: t
                    }),
                    (0, r.jsx)('div', {
                        className: v.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, r.jsx)(c.zxk, {
                submitting: d,
                color: o,
                onClick: s,
                className: a()(v.button, u ? v.disabledButtonOverride : null),
                size: v.buttonSize,
                disabled: u,
                children: l
            })
        ]
    });
}
function I(e) {
    let t,
        n,
        r,
        { currentOverrides: i, linkMeta: o, applyBuildOverride: a, clearBuildOverride: s, submitting: f } = e,
        p = ['discord_web'];
    h.isPlatformEmbedded || p.push('discord_marketing', 'discord_developers');
    let _ = (0, m.Z)(o, p);
    if (!_.valid) return T(_.reason);
    l()(null != o, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
    let { discord_web: g, discord_developers: v } = o.targetBuildOverride,
        y = null != g ? g : v;
    l()(null != y, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), b(y, i) ? ((n = E.NW.string(E.t.tX4xrq)), (t = s), (r = c.zxk.Colors.RED)) : ((n = E.NW.string(E.t.nOunHB)), (t = a), (r = c.zxk.Colors.GREEN));
    let O = () => {
        d.Z.isConnected()
            ? u.Z.show({
                  title: E.NW.string(E.t.tiu1l5),
                  body: E.NW.string(E.t['zK+lqa']),
                  onConfirm: t,
                  cancelText: E.NW.string(E.t['ETE/oK']),
                  confirmText: E.NW.string(E.t['QDX/qq'])
              })
            : t();
    };
    return S({
        subHead: E.NW.string(E.t.RCYGoq),
        buildDetails: y.id,
        buttonClick: O,
        buttonText: n,
        buttonColor: r,
        submitting: f
    });
}
function T(e) {
    return S({
        subHead: E.NW.string(E.t.ODXApK),
        buttonColor: c.zxk.Colors.TRANSPARENT,
        buttonText: 'Invalid',
        buildDetails: e,
        disabled: !0
    });
}
function N(e, t, n) {
    return (0, r.jsxs)(c.Text, {
        variant: 'text-xs/normal',
        className: v.titleRegion,
        children: [
            (0, r.jsx)('strong', {
                className: v.title,
                children: null != e && null != e.releaseChannel ? E.NW.formatToPlainString(E.t.bFj63d, { releaseChannel: e.releaseChannel }) : E.NW.string(E.t.Wj3LW1)
            }),
            (0, r.jsx)(c.eee, {
                className: v.infoLink,
                href: _.Z.getArticleURL(g.BhN.BUILD_OVERRIDE_EMBED),
                target: '_blank',
                children: (0, r.jsx)(c.d3s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: v.infoIcon
                })
            }),
            n ? null : (0, r.jsx)(y, { url: t })
        ]
    });
}
let A = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: o, url: a, applyBuildOverride: s, clearBuildOverride: l } = e,
        [c, u] = i.useState(!1),
        d = i.useCallback(() => {
            !c && (u(!0), s().catch(() => u(!1)));
        }, [s, c]),
        p = i.useCallback(() => {
            !c && (u(!0), l().catch(() => u(!1)));
        }, [l, c]);
    return (0, r.jsxs)('div', {
        className: v.wrapper,
        children: [
            N(o, a, t),
            (0, r.jsxs)('div', {
                className: v.content,
                children: [
                    (0, r.jsx)(f.Z, { className: v.icon }),
                    t
                        ? O()
                        : I({
                              currentOverrides: n,
                              linkMeta: o,
                              applyBuildOverride: d,
                              clearBuildOverride: p,
                              submitting: c
                          })
                ]
            })
        ]
    });
};
