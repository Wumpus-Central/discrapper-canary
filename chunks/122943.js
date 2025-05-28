n.d(t, { Z: () => I });
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
    _ = n(788858),
    p = n(814454),
    h = n(170187),
    m = n(556638),
    g = n(388032),
    E = n(843280);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { channel: t, textVariant: n, textClassName: a, iconClassName: b, hideText: O = !1, hideTooltip: I = !1, canTruncate: S = !0, showChannelName: T = !1 } = e,
        A = (0, l.vjg)(l.Skl.ONLINE),
        N = (0, d.ZP)(t),
        C = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: P } = (0, f.Cq)({ location: 'VoiceActivityStatus' }),
        R = !P && T,
        { analyticsLocations: w } = (0, c.ZP)(),
        D = i.useCallback(() => {
            (0, p.A)({
                analyticsLocations: w,
                activityType: 'VOICE',
                voiceChannelId: t.id
            });
        }, [w, t.id]),
        L = () =>
            I || C
                ? (0, r.jsx)(_.Z, {
                      size: 'custom',
                      color: A,
                      channel: t,
                      className: o()(E.icon, b)
                  })
                : (0, r.jsx)(l.ua7, {
                      text: N,
                      'aria-label': (0, u.ZP)({ channel: t }),
                      delay: m.X,
                      onTooltipShow: D,
                      children: (e) =>
                          (0, r.jsx)(
                              _.Z,
                              v(y({}, e), {
                                  size: 'custom',
                                  color: s.Z.colors.STATUS_POSITIVE,
                                  channel: t,
                                  className: o()(E.icon, b)
                              })
                          )
                  }),
        x = () => (P ? N : C ? g.intl.string(g.t['9FaEzs']) : t.isGuildStageVoice() ? g.intl.string(g.t.QygGCA) : g.intl.string(g.t.msxteH));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            L(),
            !O &&
                (0, r.jsxs)(h.Z, {
                    variant: n,
                    className: a,
                    canTruncate: S,
                    hideTooltip: I,
                    children: [x(), R && null != N && ' ('.concat(N, ')')]
                })
        ]
    });
}
