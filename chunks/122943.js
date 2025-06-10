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
    let { channel: t, textVariant: n, textClassName: a, iconClassName: _, hideText: g = !1, hideTooltip: O = !1, canTruncate: I = !0, showChannelName: S = !1 } = e,
        A = (0, l.vjg)(l.Skl.ONLINE),
        N = (0, d.ZP)(t),
        C = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: R } = (0, f.Cq)({ location: 'VoiceActivityStatus' }),
        P = !R && S,
        { analyticsLocations: w } = (0, c.ZP)(),
        D = i.useCallback(() => {
            (0, h.A)({
                analyticsLocations: w,
                activityType: 'VOICE',
                voiceChannelId: t.id
            });
        }, [w, t.id]),
        L = () =>
            O || C
                ? (0, r.jsx)(p.Z, {
                      size: 'custom',
                      color: A,
                      channel: t,
                      className: o()(y.icon, _)
                  })
                : (0, r.jsx)(l.ua7, {
                      text: N,
                      'aria-label': (0, u.ZP)({ channel: t }),
                      delay: E.X,
                      onTooltipShow: D,
                      children: (e) =>
                          (0, r.jsx)(
                              p.Z,
                              T(v({}, e), {
                                  size: 'custom',
                                  color: s.Z.colors.STATUS_POSITIVE,
                                  channel: t,
                                  className: o()(y.icon, _)
                              })
                          )
                  }),
        x = () => (R ? N : C ? b.intl.string(b.t['9FaEzs']) : t.isGuildStageVoice() ? b.intl.string(b.t.QygGCA) : b.intl.string(b.t.msxteH));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            L(),
            !g &&
                (0, r.jsxs)(m.Z, {
                    variant: n,
                    className: a,
                    canTruncate: I,
                    hideTooltip: O,
                    children: [x(), P && null != N && ' ('.concat(N, ')')]
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
