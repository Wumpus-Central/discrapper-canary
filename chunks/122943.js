n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(201895),
    u = n(933557),
    d = n(482798),
    f = n(209698),
    _ = n(788858),
    p = n(814454),
    h = n(170187),
    m = n(532657),
    g = n(556638),
    E = n(388032),
    b = n(843280);
function y(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let { channel: t, textVariant: n, textClassName: a, iconClassName: f, hideText: m = !1, hideTooltip: y = !1, canTruncate: v = !0, showChannelName: T = !1 } = e,
        S = (0, s.vjg)(s.Skl.ONLINE),
        A = (0, u.ZP)(t),
        N = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: C } = (0, d.Cq)({ location: 'VoiceActivityStatus' }),
        R = !C && T,
        { analyticsLocations: P } = (0, l.ZP)(),
        w = i.useCallback(() => {
            (0, p.A)({
                analyticsLocations: P,
                activityType: 'VOICE',
                voiceChannelId: t.id
            });
        }, [P, t.id]),
        D = () =>
            y || N
                ? (0, r.jsx)(_.Z, {
                      size: 'custom',
                      color: S,
                      channel: t,
                      className: o()(b.icon, f)
                  })
                : (0, r.jsx)(s.ua7, {
                      text: A,
                      'aria-label': (0, c.ZP)({ channel: t }),
                      delay: g.X,
                      onTooltipShow: w,
                      children: (e) =>
                          (0, r.jsx)(
                              _.Z,
                              I(O({}, e), {
                                  size: 'custom',
                                  color: S,
                                  channel: t,
                                  className: o()(b.icon, f)
                              })
                          )
                  }),
        L = () => (C ? A : N ? E.intl.string(E.t['9FaEzs']) : t.isGuildStageVoice() ? E.intl.string(E.t.QygGCA) : E.intl.string(E.t.msxteH));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            D(),
            !m &&
                (0, r.jsxs)(h.Z, {
                    variant: n,
                    className: a,
                    canTruncate: v,
                    hideTooltip: y,
                    children: [L(), R && null != A && ' ('.concat(A, ')')]
                })
        ]
    });
}
function S(e) {
    let { channel: t, textVariant: n, textClassName: i, iconClassName: a, hideText: l = !1, hideTooltip: c = !1, canTruncate: f = !0, showChannelName: p = !1 } = e,
        h = (0, s.vjg)(s.Skl.ONLINE),
        g = (0, u.ZP)(t),
        y = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: O } = (0, d.Cq)({ location: 'VoiceActivityStatusWithCombinedTooltip' }),
        v = O && null != g ? g : y ? E.intl.string(E.t['9FaEzs']) : t.isGuildStageVoice() ? E.intl.string(E.t.QygGCA) : E.intl.string(E.t.msxteH),
        I = null == g || O ? v : ''.concat(v, ' (').concat(g, ')'),
        T = p ? I : v;
    return (0, r.jsx)(m.Z, {
        icon: (0, r.jsx)(_.Z, {
            size: 'custom',
            color: h,
            channel: t,
            className: o()(b.icon, a)
        }),
        text: T,
        tooltipText: c ? void 0 : I,
        textVariant: n,
        textClassName: i,
        hideTooltip: c,
        canTruncate: f,
        'aria-label': I,
        hideText: l
    });
}
function A(e) {
    return (0, f.b)({ location: 'VoiceActivityStatusExperimentWrapper' }) ? (0, r.jsx)(S, O({}, e)) : (0, r.jsx)(T, O({}, e));
}
