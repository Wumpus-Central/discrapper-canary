n.d(t, { Z: () => C });
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
function C(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, a.ZP)(),
        C = (0, l.e7)([f.Z], () => f.Z.getSelectedParticipant(t.id)),
        y = (null == C ? void 0 : C.type) === g.fO.STREAM,
        x = (0, l.e7)([p.Z], () => (y ? p.Z.getActiveStreamForStreamKey(C.id) : null)),
        { ignoreSenderPreference: v } = u.Z.useExperiment({ location: 'ActionBarClipsButton' }, { autoTrackExposure: !1 }),
        { viewerClippingAllowed: j, isAtMaxSavingClipOperations: O } = (0, l.cj)([s.Z], () => ({
            viewerClippingAllowed: null != x && (s.Z.isViewerClippingAllowedForUser(x.ownerId) || v),
            isAtMaxSavingClipOperations: s.Z.getIsAtMaxSaveClipOperations()
        })),
        E = s.Z.getSettings().clipsEnabled,
        N = (null == x ? void 0 : x.ownerId) === h.default.getId(),
        I = !E || !(N || j) || O || null == C,
        P = i.useCallback((e) => {
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
            I || ((0, m.v)(n, m.d.CLIP), N ? (0, c.C1)() : (0, c.C1)(C.id));
        },
        disabled: I,
        iconComponent: P,
        label: null == x ? b.NW.string(b.t.eg5qtb) : N || j ? (E ? (O ? void 0 : b.NW.string(b.t.U4URzM)) : b.NW.string(b.t.wSS1yM)) : b.NW.string(b.t.aRifJS),
        grow: !1
    });
}
