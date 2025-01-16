var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(512722),
    d = r.n(c),
    f = r(481060),
    _ = r(240872),
    h = r(19780),
    p = r(942389),
    m = r(572004),
    g = r(63063),
    E = r(358085),
    v = r(145022),
    I = r(981631),
    T = r(388032),
    b = r(434016);
function y(e, n) {
    return null != n && null != n.discord_web && e.id === n.discord_web.id && e.type === n.discord_web.type;
}
function S(e) {
    let { url: n } = e,
        [r, i] = o.useState(!1),
        a = o.useRef(void 0),
        l = o.useCallback(() => {
            if (!r) (0, m.JG)(n) && i(!0), (a.current = setTimeout(() => i(!1), 2000));
        }, [n, r]);
    return (
        o.useEffect(() => () => clearTimeout(a.current), []),
        m.wS
            ? (0, s.jsxs)(f.Clickable, {
                  className: u()(b.copyLink, r ? b.copied : null),
                  onClick: l,
                  children: [
                      (0, s.jsx)(f.LinkIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: b.copyLinkIcon
                      }),
                      r ? T.intl.string(T.t.GmrIJS) : T.intl.string(T.t.iVzBOj)
                  ]
              })
            : null
    );
}
function A() {
    return (0, s.jsxs)(o.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                className: b.buildInfo,
                children: [(0, s.jsx)('div', { className: u()(b.barLoader, b.barTitle) }), (0, s.jsx)('div', { className: b.barLoader })]
            }),
            (0, s.jsx)('div', { className: b.buttonLoader })
        ]
    });
}
function N(e) {
    let { subHead: n, buildDetails: r, buttonColor: i, buttonClick: a, buttonText: l, disabled: c = !1, submitting: d = !1 } = e;
    return (0, s.jsxs)(o.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                className: b.buildInfo,
                children: [
                    (0, s.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        className: b.subHead,
                        children: n
                    }),
                    (0, s.jsx)('div', {
                        className: b.buildDetails,
                        children: r
                    })
                ]
            }),
            (0, s.jsx)(f.Button, {
                submitting: d,
                color: i,
                onClick: a,
                className: u()(b.button, c ? b.disabledButtonOverride : null),
                size: b.buttonSize,
                disabled: c,
                children: l
            })
        ]
    });
}
function C(e) {
    let n,
        r,
        i,
        { currentOverrides: a, linkMeta: s, applyBuildOverride: o, clearBuildOverride: l, submitting: u } = e,
        c = ['discord_web'];
    !E.isPlatformEmbedded && c.push('discord_marketing', 'discord_developers');
    let p = (0, v.Z)(s, c);
    if (!p.valid) return R(p.reason);
    d()(null != s, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
    let { discord_web: m, discord_developers: g } = s.targetBuildOverride,
        I = null != m ? m : g;
    d()(null != I, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), y(I, a) ? ((r = T.intl.string(T.t.tX4xrq)), (n = l), (i = f.Button.Colors.RED)) : ((r = T.intl.string(T.t.nOunHB)), (n = o), (i = f.Button.Colors.GREEN));
    let b = () => {
        h.Z.isConnected()
            ? _.Z.show({
                  title: T.intl.string(T.t.tiu1l5),
                  body: T.intl.string(T.t['zK+lqa']),
                  onConfirm: n,
                  cancelText: T.intl.string(T.t['ETE/oK']),
                  confirmText: T.intl.string(T.t['QDX/qq'])
              })
            : n();
    };
    return N({
        subHead: T.intl.string(T.t.RCYGoq),
        buildDetails: I.id,
        buttonClick: b,
        buttonText: r,
        buttonColor: i,
        submitting: u
    });
}
function R(e) {
    return N({
        subHead: T.intl.string(T.t.ODXApK),
        buttonColor: f.Button.Colors.TRANSPARENT,
        buttonText: 'Invalid',
        buildDetails: e,
        disabled: !0
    });
}
function O(e, n, r) {
    return (0, s.jsxs)(f.Text, {
        variant: 'text-xs/normal',
        className: b.titleRegion,
        children: [
            (0, s.jsx)('strong', {
                className: b.title,
                children: null != e && null != e.releaseChannel ? T.intl.formatToPlainString(T.t.bFj63d, { releaseChannel: e.releaseChannel }) : T.intl.string(T.t.Wj3LW1)
            }),
            (0, s.jsx)(f.Anchor, {
                className: b.infoLink,
                href: g.Z.getArticleURL(I.BhN.BUILD_OVERRIDE_EMBED),
                target: '_blank',
                children: (0, s.jsx)(f.CircleInformationIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: b.infoIcon
                })
            }),
            r ? null : (0, s.jsx)(S, { url: n })
        ]
    });
}
let D = (e) => {
    let { loading: n = !1, currentOverrides: r, linkMeta: i, url: a, applyBuildOverride: l, clearBuildOverride: u } = e,
        [c, d] = o.useState(!1),
        f = o.useCallback(() => {
            if (!c) d(!0), l().catch(() => d(!1));
        }, [l, c]),
        _ = o.useCallback(() => {
            if (!c) d(!0), u().catch(() => d(!1));
        }, [u, c]);
    return (0, s.jsxs)('div', {
        className: b.wrapper,
        children: [
            O(i, a, n),
            (0, s.jsxs)('div', {
                className: b.content,
                children: [
                    (0, s.jsx)(p.Z, { className: b.icon }),
                    n
                        ? A()
                        : C({
                              currentOverrides: r,
                              linkMeta: i,
                              applyBuildOverride: f,
                              clearBuildOverride: _,
                              submitting: c
                          })
                ]
            })
        ]
    });
};
n.Z = D;
