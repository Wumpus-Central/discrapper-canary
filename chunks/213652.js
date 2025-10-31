n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(906732),
    s = n(435064),
    c = n(39604),
    u = n(441167),
    d = n(871499),
    p = n(199902),
    f = n(314897),
    h = n(358221),
    m = n(522651),
    g = n(354459),
    b = n(388032),
    _ = n(591868);
function y(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, o.ZP)(),
        y = (0, l.e7)([h.Z], () => h.Z.getSelectedParticipant(t.id)),
        C = (null == y ? void 0 : y.type) === g.fO.STREAM,
        v = (0, l.e7)([p.Z], () => (C ? p.Z.getActiveStreamForStreamKey(y.id) : null)),
        { ignoreSenderPreference: O } = u.Z.useExperiment(
            { location: "ActionBarClipsButton" },
            { autoTrackExposure: !1 },
        ),
        { viewerClippingAllowed: x, isAtMaxSavingClipOperations: E } = (0, l.cj)([s.Z], () => ({
            viewerClippingAllowed: null != v && (s.Z.isViewerClippingAllowedForUser(v.ownerId) || O),
            isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations(),
        })),
        j = s.Z.getSettings().clipsEnabled,
        S = (null == v ? void 0 : v.ownerId) === f.default.getId(),
        P = !j || !(S || x) || E || null == y,
        I = i.useCallback((e) => {
            var t, n;
            return (0, r.jsx)(
                a.xmR,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n = { color: "currentColor" }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        }, []);
    return (0, r.jsx)(d.Z, {
        className: _.actionBarButton,
        onClick: () => {
            P || ((0, m.v)(n, m.d.CLIP), S ? (0, c.br)() : (0, c.C1)(y.id));
        },
        disabled: P,
        iconComponent: I,
        label:
            null == v
                ? b.intl.string(b.t.eg5qtV)
                : S || x
                  ? j
                      ? E
                          ? void 0
                          : b.intl.string(b.t.U4URzP)
                      : b.intl.string(b.t.wSS1yN)
                  : b.intl.string(b.t.aRifJX),
        grow: !1,
    });
}
