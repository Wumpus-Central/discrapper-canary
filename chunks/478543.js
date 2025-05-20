n.d(t, { Z: () => N }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(481060),
    u = n(240872),
    d = n(19780),
    f = n(942389),
    _ = n(572004),
    p = n(63063),
    h = n(358085),
    m = n(145022),
    g = n(981631),
    E = n(388032),
    b = n(176396);
function y(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function O(e) {
    let { url: t } = e,
        [n, a] = i.useState(!1),
        s = i.useRef(void 0),
        l = i.useCallback(() => {
            n ||
                (0, _.JG)(t, () => {
                    a(!0), (s.current = setTimeout(() => a(!1), 2000));
                });
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(s.current), []),
        _.wS
            ? (0, r.jsxs)(c.P3F, {
                  className: o()(b.copyLink, n ? b.copied : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(c.xPt, {
                          size: 'md',
                          color: 'currentColor',
                          className: b.copyLinkIcon
                      }),
                      n ? E.intl.string(E.t.GmrIJS) : E.intl.string(E.t.iVzBOj)
                  ]
              })
            : null
    );
}
function v() {
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: b.buildInfo,
                children: [(0, r.jsx)('div', { className: o()(b.barLoader, b.barTitle) }), (0, r.jsx)('div', { className: b.barLoader })]
            }),
            (0, r.jsx)('div', { className: b.buttonLoader })
        ]
    });
}
function I(e) {
    let { subHead: t, buildDetails: n, buttonColor: a, buttonClick: s, buttonText: l, disabled: u = !1, submitting: d = !1 } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: b.buildInfo,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        className: b.subHead,
                        children: t
                    }),
                    (0, r.jsx)('div', {
                        className: b.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, r.jsx)(c.zxk, {
                submitting: d,
                color: a,
                onClick: s,
                className: o()(b.button, u ? b.disabledButtonOverride : null),
                size: b.buttonSize,
                disabled: u,
                children: l
            })
        ]
    });
}
function S(e) {
    let t,
        n,
        r,
        { currentOverrides: i, linkMeta: a, applyBuildOverride: o, clearBuildOverride: s, submitting: f } = e,
        _ = ['discord_web'];
    h.isPlatformEmbedded || _.push('discord_marketing', 'discord_developers');
    let p = (0, m.Z)(a, _);
    if (!p.valid) return T(p.reason);
    l()(null != a, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
    let { discord_web: g, discord_developers: b } = a.targetBuildOverride,
        O = null != g ? g : b;
    l()(null != O, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), y(O, i) ? ((n = E.intl.string(E.t.tX4xrq)), (t = s), (r = c.zxk.Colors.RED)) : ((n = E.intl.string(E.t.nOunHB)), (t = o), (r = c.zxk.Colors.GREEN));
    let v = () => {
        d.Z.isConnected()
            ? u.Z.show({
                  title: E.intl.string(E.t.tiu1l5),
                  body: E.intl.string(E.t['zK+lqa']),
                  onConfirm: t,
                  cancelText: E.intl.string(E.t['ETE/oK']),
                  confirmText: E.intl.string(E.t['QDX/qq'])
              })
            : t();
    };
    return I({
        subHead: E.intl.string(E.t.RCYGoq),
        buildDetails: O.id,
        buttonClick: v,
        buttonText: n,
        buttonColor: r,
        submitting: f
    });
}
function T(e) {
    return I({
        subHead: E.intl.string(E.t.ODXApK),
        buttonColor: c.zxk.Colors.TRANSPARENT,
        buttonText: 'Invalid',
        buildDetails: e,
        disabled: !0
    });
}
function A(e, t, n) {
    return (0, r.jsxs)(c.Text, {
        variant: 'text-xs/normal',
        className: b.titleRegion,
        children: [
            (0, r.jsx)('strong', {
                className: b.title,
                children: null != e && null != e.releaseChannel ? E.intl.formatToPlainString(E.t.bFj63d, { releaseChannel: e.releaseChannel }) : E.intl.string(E.t.Wj3LW1)
            }),
            (0, r.jsx)(c.eee, {
                className: b.infoLink,
                href: p.Z.getArticleURL(g.BhN.BUILD_OVERRIDE_EMBED),
                target: '_blank',
                children: (0, r.jsx)(c.d3s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: b.infoIcon
                })
            }),
            n ? null : (0, r.jsx)(O, { url: t })
        ]
    });
}
let N = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: a, url: o, applyBuildOverride: s, clearBuildOverride: l } = e,
        [c, u] = i.useState(!1),
        d = i.useCallback(() => {
            c || (u(!0), s().catch(() => u(!1)));
        }, [s, c]),
        _ = i.useCallback(() => {
            c || (u(!0), l().catch(() => u(!1)));
        }, [l, c]);
    return (0, r.jsxs)('div', {
        className: b.wrapper,
        children: [
            A(a, o, t),
            (0, r.jsxs)('div', {
                className: b.content,
                children: [
                    (0, r.jsx)(f.Z, { className: b.icon }),
                    t
                        ? v()
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
