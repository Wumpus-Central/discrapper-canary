n.d(t, { Z: () => A });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(906732),
    c = n(201895),
    u = n(933557),
    d = n(482798),
    f = n(209698),
    p = n(788858),
    _ = n(814454),
    m = n(170187),
    h = n(532657),
    g = n(556638),
    E = n(388032),
    b = n(80568);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
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
function I(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: a,
            iconClassName: f,
            hideText: h = !1,
            hideTooltip: y = !1,
            canTruncate: v = !0,
            showChannelName: I = !1,
        } = e,
        T = (0, s.vjg)(s.Skl.ONLINE),
        A = (0, u.ZP)(t),
        C = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: N } = (0, d.Cq)({ location: "VoiceActivityStatus" }),
        P = !N && I,
        { analyticsLocations: R } = (0, l.ZP)(),
        D = i.useCallback(() => {
            (0, _.A)({
                analyticsLocations: R,
                activityType: "VOICE",
                voiceChannelId: t.id,
            });
        }, [R, t.id]),
        w = () =>
            y || C
                ? (0, r.jsx)(p.Z, {
                      size: "custom",
                      color: T,
                      channel: t,
                      className: o()(b.icon, f),
                  })
                : (0, r.jsx)(s.aML, {
                      "data-migration-pending": !0,
                      text: A,
                      "aria-label": (0, c.ZP)({ channel: t }),
                      delay: g.X,
                      onTooltipShow: D,
                      children: (e) =>
                          (0, r.jsx)(
                              p.Z,
                              S(O({}, e), {
                                  size: "custom",
                                  color: T,
                                  channel: t,
                                  className: o()(b.icon, f),
                              }),
                          ),
                  }),
        x = () =>
            N
                ? A
                : C
                  ? E.intl.string(E.t["9FaEzi"])
                  : t.isGuildStageVoice()
                    ? E.intl.string(E.t.QygGCN)
                    : E.intl.string(E.t.msxteM);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w(),
            !h &&
                (0, r.jsxs)(m.Z, {
                    variant: n,
                    className: a,
                    canTruncate: v,
                    hideTooltip: y,
                    children: [x(), P && null != A && " (".concat(A, ")")],
                }),
        ],
    });
}
function T(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: a,
            hideText: l = !1,
            hideTooltip: c = !1,
            canTruncate: f = !0,
            showChannelName: _ = !1,
        } = e,
        m = (0, s.vjg)(s.Skl.ONLINE),
        g = (0, u.ZP)(t),
        y = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: O } = (0, d.Cq)({ location: "VoiceActivityStatusWithCombinedTooltip" }),
        v =
            O && null != g
                ? g
                : y
                  ? E.intl.string(E.t["9FaEzi"])
                  : t.isGuildStageVoice()
                    ? E.intl.string(E.t.QygGCN)
                    : E.intl.string(E.t.msxteM),
        S = null == g || O ? v : "".concat(v, " (").concat(g, ")"),
        I = _ ? S : v;
    return (0, r.jsx)(h.Z, {
        icon: (0, r.jsx)(p.Z, {
            size: "custom",
            color: m,
            channel: t,
            className: o()(b.icon, a),
        }),
        text: I,
        tooltipText: c ? void 0 : S,
        textVariant: n,
        textClassName: i,
        hideTooltip: c,
        canTruncate: f,
        "aria-label": S,
        hideText: l,
    });
}
function A(e) {
    return (0, f.b)({ location: "VoiceActivityStatusExperimentWrapper" })
        ? (0, r.jsx)(T, O({}, e))
        : (0, r.jsx)(I, O({}, e));
}
