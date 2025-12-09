n.d(t, { Z: () => _ });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(906732),
    s = n(435064),
    c = n(341569),
    u = n(39604),
    d = n(441167),
    p = n(871499),
    h = n(199902),
    f = n(314897),
    m = n(358221),
    g = n(522651),
    b = n(354459),
    C = n(388032),
    y = n(591868);
function _(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, o.ZP)(),
        _ = (0, l.e7)([m.Z], () => m.Z.getSelectedParticipant(t.id)),
        v = (null == _ ? void 0 : _.type) === b.fO.STREAM,
        O = (0, l.e7)([h.Z], () => (v ? h.Z.getActiveStreamForStreamKey(_.id) : null)),
        { ignoreSenderPreference: x } = d.Z.useExperiment(
            { location: "ActionBarClipsButton" },
            { autoTrackExposure: !1 },
        ),
        { viewerClippingAllowed: E, isAtMaxSavingClipOperations: j } = (0, l.cj)([s.Z], () => ({
            viewerClippingAllowed: null != O && (s.Z.isViewerClippingAllowedForUser(O.ownerId) || x),
            isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations(),
        })),
        S = (0, c.z8)(),
        P = (null == O ? void 0 : O.ownerId) === f.default.getId(),
        I = !S || !(P || E) || j || null == _,
        Z = r.useCallback((e) => {
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
    return (0, i.jsx)(p.Z, {
        className: y.actionBarButton,
        onClick: () => {
            I || ((0, g.v)(n, g.d.CLIP), P ? (0, u.br)() : (0, u.C1)(_.id));
        },
        disabled: I,
        iconComponent: Z,
        label:
            null == O
                ? C.intl.string(C.t.eg5qtV)
                : P || E
                  ? S
                      ? j
                          ? void 0
                          : C.intl.string(C.t.U4URzP)
                      : C.intl.string(C.t.wSS1yN)
                  : C.intl.string(C.t.aRifJX),
        grow: !1,
    });
}
