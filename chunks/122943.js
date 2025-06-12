n.d(t, { Z: () => N });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(906732),
    u = n(201895),
    d = n(933557),
    f = n(482798),
    _ = n(209698),
    p = n(788858),
    h = n(814454),
    m = n(170187),
    g = n(532657),
    E = n(556638),
    b = n(388032),
    y = n(843280);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { channel: t, textVariant: n, textClassName: a, iconClassName: g, hideText: O = !1, hideTooltip: I = !1, canTruncate: S = !0, showChannelName: A = !1 } = e,
        N = (0, _.b)({ location: 'ActivityStatusIcon' }),
        C = (0, l.vjg)(l.Skl.ONLINE),
        R = N ? s.Z.colors.TEXT_POSITIVE : C,
        P = (0, d.ZP)(t),
        w = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: D } = (0, f.Cq)({ location: 'VoiceActivityStatus' }),
        L = !D && A,
        { analyticsLocations: x } = (0, c.ZP)(),
        k = i.useCallback(() => {
            (0, h.A)({
                analyticsLocations: x,
                activityType: 'VOICE',
                voiceChannelId: t.id
            });
        }, [x, t.id]),
        M = () =>
            I || w
                ? (0, r.jsx)(p.Z, {
                      size: 'custom',
                      color: R,
                      channel: t,
                      className: o()(y.icon, g)
                  })
                : (0, r.jsx)(l.ua7, {
                      text: P,
                      'aria-label': (0, u.ZP)({ channel: t }),
                      delay: E.X,
                      onTooltipShow: k,
                      children: (e) =>
                          (0, r.jsx)(
                              p.Z,
                              T(v({}, e), {
                                  size: 'custom',
                                  color: R,
                                  channel: t,
                                  className: o()(y.icon, g)
                              })
                          )
                  }),
        j = () => (D ? P : w ? b.intl.string(b.t['9FaEzs']) : t.isGuildStageVoice() ? b.intl.string(b.t.QygGCA) : b.intl.string(b.t.msxteH));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            M(),
            !O &&
                (0, r.jsxs)(m.Z, {
                    variant: n,
                    className: a,
                    canTruncate: S,
                    hideTooltip: I,
                    children: [j(), L && null != P && ' ('.concat(P, ')')]
                })
        ]
    });
}
function A(e) {
    let { channel: t, textVariant: n, textClassName: i, iconClassName: a, hideText: s = !1, hideTooltip: c = !1, canTruncate: u = !0, showChannelName: _ = !1 } = e,
        h = (0, l.vjg)(l.Skl.ONLINE),
        m = (0, d.ZP)(t),
        E = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: O } = (0, f.Cq)({ location: 'VoiceActivityStatusWithCombinedTooltip' }),
        v = O && null != m ? m : E ? b.intl.string(b.t['9FaEzs']) : t.isGuildStageVoice() ? b.intl.string(b.t.QygGCA) : b.intl.string(b.t.msxteH),
        I = null == m || O ? v : ''.concat(v, ' (').concat(m, ')'),
        T = _ ? I : v;
    return (0, r.jsx)(g.Z, {
        icon: (0, r.jsx)(p.Z, {
            size: 'custom',
            color: h,
            channel: t,
            className: o()(y.icon, a)
        }),
        text: T,
        tooltipText: c ? void 0 : I,
        textVariant: n,
        textClassName: i,
        hideTooltip: c,
        canTruncate: u,
        'aria-label': I,
        hideText: s
    });
}
function N(e) {
    return (0, _.b)({ location: 'VoiceActivityStatusExperimentWrapper' }) ? (0, r.jsx)(A, v({}, e)) : (0, r.jsx)(S, v({}, e));
}
