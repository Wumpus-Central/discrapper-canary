n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(906732),
    u = n(201895),
    d = n(933557),
    f = n(482798),
    p = n(209698),
    _ = n(788858),
    m = n(814454),
    h = n(170187),
    g = n(532657),
    E = n(556638),
    b = n(388032),
    y = n(175996);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: a,
            iconClassName: p,
            hideText: g = !1,
            hideTooltip: O = !1,
            canTruncate: v = !0,
            showChannelName: S = !1,
        } = e,
        I = (0, l.vjg)(l.Skl.ONLINE),
        T = (0, d.ZP)(t),
        C = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: A } = (0, f.Cq)({ location: "VoiceActivityStatus" }),
        N = !A && S,
        { analyticsLocations: P } = (0, c.ZP)(),
        R = i.useCallback(() => {
            (0, m.A)({
                analyticsLocations: P,
                activityType: "VOICE",
                voiceChannelId: t.id,
            });
        }, [P, t.id]),
        w = () =>
            O || C
                ? (0, r.jsx)(_.Z, {
                      size: "custom",
                      color: I,
                      channel: t,
                      className: o()(y.icon, p),
                  })
                : (0, r.jsx)(s.u, {
                      text: T,
                      delay: E.X,
                      onTooltipShow: R,
                      children: (0, r.jsx)(_.Z, {
                          size: "custom",
                          color: I,
                          channel: t,
                          className: o()(y.icon, p),
                          "aria-label": (0, u.ZP)({ channel: t }),
                      }),
                  }),
        D = () =>
            A
                ? T
                : C
                  ? b.intl.string(b.t["9FaEzi"])
                  : t.isGuildStageVoice()
                    ? b.intl.string(b.t.QygGCN)
                    : b.intl.string(b.t.msxteM),
        x = (null == n ? void 0 : n.startsWith("text-sm")) ? y.textSm : y.textXs;
    return (0, r.jsxs)("div", {
        className: o()(y.container, x),
        children: [
            w(),
            !g &&
                (0, r.jsxs)(h.Z, {
                    variant: n,
                    className: a,
                    canTruncate: v,
                    hideTooltip: O,
                    children: [D(), N && null != T && " (".concat(T, ")")],
                }),
        ],
    });
}
function I(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: a,
            hideText: s = !1,
            hideTooltip: c = !1,
            canTruncate: u = !0,
            showChannelName: p = !1,
        } = e,
        m = (0, l.vjg)(l.Skl.ONLINE),
        h = (0, d.ZP)(t),
        E = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: O } = (0, f.Cq)({ location: "VoiceActivityStatusWithCombinedTooltip" }),
        v =
            O && null != h
                ? h
                : E
                  ? b.intl.string(b.t["9FaEzi"])
                  : t.isGuildStageVoice()
                    ? b.intl.string(b.t.QygGCN)
                    : b.intl.string(b.t.msxteM),
        S = null == h || O ? v : "".concat(v, " (").concat(h, ")"),
        I = p ? S : v;
    return (0, r.jsx)(g.Z, {
        icon: (0, r.jsx)(_.Z, {
            size: "custom",
            color: m,
            channel: t,
            className: o()(y.icon, a),
        }),
        text: I,
        tooltipText: c ? void 0 : S,
        textVariant: n,
        textClassName: i,
        hideTooltip: c,
        canTruncate: u,
        "aria-label": S,
        hideText: s,
    });
}
function T(e) {
    return (0, p.b)({ location: "VoiceActivityStatusExperimentWrapper" })
        ? (0, r.jsx)(I, v({}, e))
        : (0, r.jsx)(S, v({}, e));
}
