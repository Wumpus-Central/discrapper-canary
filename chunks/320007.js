n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(665149),
    s = n(618158),
    c = n(819640),
    u = n(131951),
    d = n(924557),
    p = n(435064),
    h = n(779618),
    f = n(175470),
    g = n(203259),
    m = n(356659),
    b = n(388032);
function _(e) {
    let { canShowReminder: t = !1, className: _ } = e,
        O = (0, h.Z)(u.Z),
        { showClipsHeaderEntrypoint: E } = d.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }),
        {
            hasClips: y,
            hasNewClips: I,
            lastClipsSession: v,
            remindersEnabled: C,
            hasAnyClipAnimations: S
        } = (0, l.cj)([p.Z], () => ({
            hasClips: p.Z.hasClips(),
            hasNewClips: p.Z.getNewClipIds().length > 0,
            lastClipsSession: p.Z.getLastClipsSession(),
            remindersEnabled: p.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: p.Z.hasAnyClipAnimations()
        })),
        N = null != v && v.newClipIds.length > 0,
        T = (0, f.n)((e) => e.clipsButtonRef),
        P = (0, f.n)((e) => e.setClipsButtonRef),
        j = (0, l.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: A, allowIdle: Z } = (0, s.Y)('animation');
    function x() {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('71248')]).then(n.bind(n, 542055));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, t)
                    );
            },
            { modalKey: m.Qr }
        );
    }
    return (i.useEffect(() => (S ? A() : Z(), () => Z()), [S, A, Z]), E && O && y)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != T &&
                      t &&
                      C &&
                      N &&
                      !(0, a.$sL)() &&
                      !j &&
                      (0, r.jsx)(g.Z, {
                          clipIconRef: T,
                          lastClipsSession: v,
                          onOpenClipsGallery: x
                      }),
                  (0, r.jsx)('div', {
                      ref: P,
                      children: (0, r.jsx)(o.JO, {
                          className: _,
                          icon: a.AlX,
                          showBadge: I,
                          tooltip: b.intl.string(b.t.MXaLEB),
                          onClick: x
                      })
                  })
              ]
          })
        : null;
}
