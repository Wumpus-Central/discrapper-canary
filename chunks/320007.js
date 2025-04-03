n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(665149),
    s = n(618158),
    c = n(819640),
    u = n(131951),
    d = n(924557),
    p = n(435064),
    m = n(779618),
    f = n(175470),
    h = n(203259),
    g = n(356659),
    _ = n(388032);
function b(e) {
    let { canShowReminder: t = !1, className: b } = e,
        x = (0, m.Z)(u.Z),
        { showClipsHeaderEntrypoint: y } = d.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }),
        {
            hasClips: E,
            hasNewClips: v,
            lastClipsSession: O,
            remindersEnabled: N,
            hasAnyClipAnimations: j
        } = (0, a.cj)([p.Z], () => ({
            hasClips: p.Z.hasClips(),
            hasNewClips: p.Z.getNewClipIds().length > 0,
            lastClipsSession: p.Z.getLastClipsSession(),
            remindersEnabled: p.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: p.Z.hasAnyClipAnimations()
        })),
        C = null != O && O.newClipIds.length > 0,
        I = (0, f.n)((e) => e.clipsButtonRef),
        S = (0, f.n)((e) => e.setClipsButtonRef),
        T = (0, a.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: P, allowIdle: A } = (0, s.Y)('animation');
    function w() {
        (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('89129')]).then(n.bind(n, 542055));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
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
                        })({}, t)
                    );
            },
            { modalKey: g.Qr }
        );
    }
    return (i.useEffect(() => (j ? P() : A(), () => A()), [j, P, A]), y && x && E)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != I &&
                      t &&
                      N &&
                      C &&
                      !(0, l.$sL)() &&
                      !T &&
                      (0, r.jsx)(h.Z, {
                          clipIconRef: I,
                          lastClipsSession: O,
                          onOpenClipsGallery: w
                      }),
                  (0, r.jsx)('div', {
                      ref: S,
                      children: (0, r.jsx)(o.JO, {
                          className: b,
                          icon: l.AlX,
                          showBadge: v,
                          tooltip: _.NW.string(_.t.MXaLEB),
                          onClick: w
                      })
                  })
              ]
          })
        : null;
}
