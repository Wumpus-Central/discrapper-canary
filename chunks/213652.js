n.d(t, { Z: () => C });
var i = n(951288),
    r = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(906732),
    s = n(435064),
    c = n(39604),
    u = n(441167),
    d = n(871499),
    p = n(199902),
    h = n(314897),
    f = n(358221),
    m = n(522651),
    g = n(354459),
    b = n(388032),
    y = n(591868);
function C(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, o.ZP)(),
        C = (0, l.e7)([f.Z], () => f.Z.getSelectedParticipant(t.id)),
        v = (null == C ? void 0 : C.type) === g.fO.STREAM,
        _ = (0, l.e7)([p.Z], () => (v ? p.Z.getActiveStreamForStreamKey(C.id) : null)),
        { ignoreSenderPreference: x } = u.Z.useExperiment(
            { location: "ActionBarClipsButton" },
            { autoTrackExposure: !1 },
        ),
        { viewerClippingAllowed: j, isAtMaxSavingClipOperations: O } = (0, l.cj)([s.Z], () => ({
            viewerClippingAllowed: null != _ && (s.Z.isViewerClippingAllowedForUser(_.ownerId) || x),
            isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations(),
        })),
        E = s.Z.getSettings().clipsEnabled,
        S = (null == _ ? void 0 : _.ownerId) === h.default.getId(),
        P = !E || !(S || j) || O || null == C,
        I = r.useCallback((e) => {
            var t, n;
            return (0, i.jsx)(
                a.xmR,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
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
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        }, []);
    return (0, i.jsx)(d.Z, {
        className: y.actionBarButton,
        onClick: () => {
            P || ((0, m.v)(n, m.d.CLIP), S ? (0, c.br)() : (0, c.C1)(C.id));
        },
        disabled: P,
        iconComponent: I,
        label:
            null == _
                ? b.intl.string(b.t.eg5qtV)
                : S || j
                  ? E
                      ? O
                          ? void 0
                          : b.intl.string(b.t.U4URzP)
                      : b.intl.string(b.t.wSS1yN)
                  : b.intl.string(b.t.aRifJX),
        grow: !1,
    });
}
