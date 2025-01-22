var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(512722),
    d = r.n(c),
    f = r(481060),
    p = r(240872),
    h = r(19780),
    _ = r(942389),
    m = r(572004),
    g = r(63063),
    E = r(358085),
    v = r(145022),
    y = r(981631),
    b = r(388032),
    I = r(520512);
function T(e, n) {
    return null != n && null != n.discord_web && e.id === n.discord_web.id && e.type === n.discord_web.type;
}
function S(e) {
    let { url: n } = e,
        [r, i] = s.useState(!1),
        a = s.useRef(void 0),
        l = s.useCallback(() => {
            if (!r) (0, m.JG)(n) && i(!0), (a.current = setTimeout(() => i(!1), 2000));
        }, [n, r]);
    return (
        s.useEffect(() => () => clearTimeout(a.current), []),
        m.wS
            ? (0, o.jsxs)(f.Clickable, {
                  className: u()(I.copyLink, r ? I.copied : null),
                  onClick: l,
                  children: [
                      (0, o.jsx)(f.LinkIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: I.copyLinkIcon
                      }),
                      r ? b.intl.string(b.t.GmrIJS) : b.intl.string(b.t.iVzBOj)
                  ]
              })
            : null
    );
}
function A() {
    return (0, o.jsxs)(s.Fragment, {
        children: [
            (0, o.jsxs)('div', {
                className: I.buildInfo,
                children: [(0, o.jsx)('div', { className: u()(I.barLoader, I.barTitle) }), (0, o.jsx)('div', { className: I.barLoader })]
            }),
            (0, o.jsx)('div', { className: I.buttonLoader })
        ]
    });
}
function C(e) {
    let { subHead: n, buildDetails: r, buttonColor: i, buttonClick: a, buttonText: l, disabled: c = !1, submitting: d = !1 } = e;
    return (0, o.jsxs)(s.Fragment, {
        children: [
            (0, o.jsxs)('div', {
                className: I.buildInfo,
                children: [
                    (0, o.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        className: I.subHead,
                        children: n
                    }),
                    (0, o.jsx)('div', {
                        className: I.buildDetails,
                        children: r
                    })
                ]
            }),
            (0, o.jsx)(f.Button, {
                submitting: d,
                color: i,
                onClick: a,
                className: u()(I.button, c ? I.disabledButtonOverride : null),
                size: I.buttonSize,
                disabled: c,
                children: l
            })
        ]
    });
}
function N(e) {
    let n,
        r,
        i,
        { currentOverrides: a, linkMeta: o, applyBuildOverride: s, clearBuildOverride: l, submitting: u } = e,
        c = ['discord_web'];
    !E.isPlatformEmbedded && c.push('discord_marketing', 'discord_developers');
    let _ = (0, v.Z)(o, c);
    if (!_.valid) return R(_.reason);
    d()(null != o, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
    let { discord_web: m, discord_developers: g } = o.targetBuildOverride,
        y = null != m ? m : g;
    d()(null != y, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), T(y, a) ? ((r = b.intl.string(b.t.tX4xrq)), (n = l), (i = f.Button.Colors.RED)) : ((r = b.intl.string(b.t.nOunHB)), (n = s), (i = f.Button.Colors.GREEN));
    let I = () => {
        h.Z.isConnected()
            ? p.Z.show({
                  title: b.intl.string(b.t.tiu1l5),
                  body: b.intl.string(b.t['zK+lqa']),
                  onConfirm: n,
                  cancelText: b.intl.string(b.t['ETE/oK']),
                  confirmText: b.intl.string(b.t['QDX/qq'])
              })
            : n();
    };
    return C({
        subHead: b.intl.string(b.t.RCYGoq),
        buildDetails: y.id,
        buttonClick: I,
        buttonText: r,
        buttonColor: i,
        submitting: u
    });
}
function R(e) {
    return C({
        subHead: b.intl.string(b.t.ODXApK),
        buttonColor: f.Button.Colors.TRANSPARENT,
        buttonText: 'Invalid',
        buildDetails: e,
        disabled: !0
    });
}
function O(e, n, r) {
    return (0, o.jsxs)(f.Text, {
        variant: 'text-xs/normal',
        className: I.titleRegion,
        children: [
            (0, o.jsx)('strong', {
                className: I.title,
                children: null != e && null != e.releaseChannel ? b.intl.formatToPlainString(b.t.bFj63d, { releaseChannel: e.releaseChannel }) : b.intl.string(b.t.Wj3LW1)
            }),
            (0, o.jsx)(f.Anchor, {
                className: I.infoLink,
                href: g.Z.getArticleURL(y.BhN.BUILD_OVERRIDE_EMBED),
                target: '_blank',
                children: (0, o.jsx)(f.CircleInformationIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: I.infoIcon
                })
            }),
            r ? null : (0, o.jsx)(S, { url: n })
        ]
    });
}
let D = (e) => {
    let { loading: n = !1, currentOverrides: r, linkMeta: i, url: a, applyBuildOverride: l, clearBuildOverride: u } = e,
        [c, d] = s.useState(!1),
        f = s.useCallback(() => {
            if (!c) d(!0), l().catch(() => d(!1));
        }, [l, c]),
        p = s.useCallback(() => {
            if (!c) d(!0), u().catch(() => d(!1));
        }, [u, c]);
    return (0, o.jsxs)('div', {
        className: I.wrapper,
        children: [
            O(i, a, n),
            (0, o.jsxs)('div', {
                className: I.content,
                children: [
                    (0, o.jsx)(_.Z, { className: I.icon }),
                    n
                        ? A()
                        : N({
                              currentOverrides: r,
                              linkMeta: i,
                              applyBuildOverride: f,
                              clearBuildOverride: p,
                              submitting: c
                          })
                ]
            })
        ]
    });
};
n.Z = D;
