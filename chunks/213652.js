n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(906732),
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
    _ = n(940221);
function y(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, a.ZP)(),
        y = (0, l.e7)([f.Z], () => f.Z.getSelectedParticipant(t.id)),
        C = (null == y ? void 0 : y.type) === g.fO.STREAM,
        x = (0, l.e7)([p.Z], () => (C ? p.Z.getActiveStreamForStreamKey(y.id) : null)),
        { ignoreSenderPreference: v } = u.Z.useExperiment({ location: 'ActionBarClipsButton' }, { autoTrackExposure: !1 }),
        { viewerClippingAllowed: j, isAtMaxSavingClipOperations: O } = (0, l.cj)([s.Z], () => ({
            viewerClippingAllowed: null != x && (s.Z.isViewerClippingAllowedForUser(x.ownerId) || v),
            isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
        })),
        E = s.Z.getSettings().clipsEnabled,
        I = (null == x ? void 0 : x.ownerId) === h.default.getId(),
        P = !E || !(I || j) || O || null == y,
        S = i.useCallback((e) => {
            var t, n;
            return (0, r.jsx)(
                o.xmR,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n = { color: 'currentColor' }),
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
                t)
            );
        }, []);
    return (0, r.jsx)(d.Z, {
        className: _.actionBarButton,
        onClick: () => {
            P || ((0, m.v)(n, m.d.CLIP), I ? (0, c.C1)() : (0, c.C1)(y.id));
        },
        disabled: P,
        iconComponent: S,
        label: null == x ? b.intl.string(b.t.eg5qtb) : I || j ? (E ? (O ? void 0 : b.intl.string(b.t.U4URzM)) : b.intl.string(b.t.wSS1yM)) : b.intl.string(b.t.aRifJS),
        grow: !1
    });
}
