n.d(t, { Z: () => A }), n(388685), n(539854);
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
    _ = n(572004),
    p = n(63063),
    h = n(358085),
    m = n(145022),
    g = n(981631),
    E = n(388032),
    b = n(468920);
function y(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function v(e) {
    let { url: t } = e,
        [n, o] = i.useState(!1),
        s = i.useRef(void 0),
        l = i.useCallback(() => {
            n ||
                (0, _.JG)(t, () => {
                    o(!0), (s.current = setTimeout(() => o(!1), 2000));
                });
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(s.current), []),
        _.wS
            ? (0, r.jsxs)(c.P3F, {
                  className: a()(b.copyLink, n ? b.copied : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(c.xPt, {
                          size: 'md',
                          color: 'currentColor',
                          className: b.copyLinkIcon
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
                className: b.buildInfo,
                children: [(0, r.jsx)('div', { className: a()(b.barLoader, b.barTitle) }), (0, r.jsx)('div', { className: b.barLoader })]
            }),
            (0, r.jsx)('div', { className: b.buttonLoader })
        ]
    });
}
function I(e) {
    let { subHead: t, buildDetails: n, buttonColor: o, buttonClick: s, buttonText: l, disabled: u = !1, submitting: d = !1 } = e;
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
                color: o,
                onClick: s,
                className: a()(b.button, u ? b.disabledButtonOverride : null),
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
        { currentOverrides: i, linkMeta: o, applyBuildOverride: a, clearBuildOverride: s, submitting: f } = e,
        _ = ['discord_web'];
    h.isPlatformEmbedded || _.push('discord_marketing', 'discord_developers');
    let p = (0, m.Z)(o, _);
    if (!p.valid) return T(p.reason);
    l()(null != o, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
    let { discord_web: g, discord_developers: b } = o.targetBuildOverride,
        v = null != g ? g : b;
    l()(null != v, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), y(v, i) ? ((n = E.NW.string(E.t.tX4xrq)), (t = s), (r = c.zxk.Colors.RED)) : ((n = E.NW.string(E.t.nOunHB)), (t = a), (r = c.zxk.Colors.GREEN));
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
    return I({
        subHead: E.NW.string(E.t.RCYGoq),
        buildDetails: v.id,
        buttonClick: O,
        buttonText: n,
        buttonColor: r,
        submitting: f
    });
}
function T(e) {
    return I({
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
        className: b.titleRegion,
        children: [
            (0, r.jsx)('strong', {
                className: b.title,
                children: null != e && null != e.releaseChannel ? E.NW.formatToPlainString(E.t.bFj63d, { releaseChannel: e.releaseChannel }) : E.NW.string(E.t.Wj3LW1)
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
            n ? null : (0, r.jsx)(v, { url: t })
        ]
    });
}
let A = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: o, url: a, applyBuildOverride: s, clearBuildOverride: l } = e,
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
            N(o, a, t),
            (0, r.jsxs)('div', {
                className: b.content,
                children: [
                    (0, r.jsx)(f.Z, { className: b.icon }),
                    t
                        ? O()
                        : S({
                              currentOverrides: n,
                              linkMeta: o,
                              applyBuildOverride: d,
                              clearBuildOverride: _,
                              submitting: c
                          })
                ]
            })
        ]
    });
};
