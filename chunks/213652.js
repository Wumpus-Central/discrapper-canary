n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(435064),
    s = n(39604),
    c = n(441167),
    u = n(871499),
    d = n(199902),
    p = n(314897),
    h = n(358221),
    f = n(354459),
    m = n(388032),
    g = n(71178);
function b(e) {
    let { channel: t } = e,
        n = (0, l.e7)([h.Z], () => h.Z.getSelectedParticipant(t.id)),
        b = (null == n ? void 0 : n.type) === f.fO.STREAM,
        _ = (0, l.e7)([d.Z], () => (b ? d.Z.getActiveStreamForStreamKey(n.id) : null)),
        { ignoreSenderPreference: C } = c.Z.useExperiment({ location: 'ActionBarClipsButton' }, { autoTrackExposure: !1 }),
        { viewerClippingAllowed: v, isAtMaxSavingClipOperations: y } = (0, l.cj)([a.Z], () => ({
            viewerClippingAllowed: null != _ && (a.Z.isViewerClippingAllowedForUser(_.ownerId) || C),
            isAtMaxSavingClipOperations: a.Z.getIsAtMaxSaveClipOperations()
        })),
        x = a.Z.getSettings().clipsEnabled,
        j = (null == _ ? void 0 : _.ownerId) === p.default.getId(),
        O = !x || !(j || v) || y || null == n,
        N = i.useCallback((e) => {
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
    return (0, r.jsx)(u.Z, {
        className: g.actionBarButton,
        onClick: () => {
            O || (j ? (0, s.C1)() : (0, s.C1)(n.id));
        },
        disabled: O,
        iconComponent: N,
        label: null == _ ? m.NW.string(m.t.eg5qtb) : j || v ? (x ? (y ? void 0 : m.NW.string(m.t.U4URzM)) : m.NW.string(m.t.wSS1yM)) : m.NW.string(m.t.aRifJS),
        grow: !1
    });
}
