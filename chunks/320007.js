n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(665149),
    s = n(618158),
    c = n(819640),
    u = n(131951),
    d = n(924557),
    p = n(435064),
    f = n(779618),
    g = n(175470),
    h = n(203259),
    m = n(356659),
    b = n(388032);
function _(e) {
    let { canShowReminder: t = !1, className: _ } = e,
        E = (0, f.Z)(u.Z),
        { showClipsHeaderEntrypoint: O } = d.NV.useExperiment({ location: "ClipsButton" }, { autoTrackExposure: !1 }),
        {
            hasNewClips: v,
            lastClipsSession: y,
            remindersEnabled: I,
            hasAnyClipAnimations: C,
        } = (0, l.cj)([p.Z], () => ({
            hasNewClips: p.Z.getNewClipIds().length > 0,
            lastClipsSession: p.Z.getLastClipsSession(),
            remindersEnabled: p.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: p.Z.hasAnyClipAnimations(),
        })),
        S = null != y && y.newClipIds.length > 0,
        T = (0, g.n)((e) => e.clipsButtonRef),
        N = (0, g.n)((e) => e.setClipsButtonRef),
        j = (0, l.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: P, allowIdle: x } = (0, s.Y)("animation");
    function A() {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("61342"), n.e("17316")]).then(n.bind(n, 542055));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
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
                        })({}, t),
                    );
            },
            { modalKey: m.Qr },
        );
    }
    return (i.useEffect(() => (C ? P() : x(), () => x()), [C, P, x]), O && E)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != T &&
                      t &&
                      I &&
                      S &&
                      !(0, a.$sL)() &&
                      !j &&
                      (0, r.jsx)(h.Z, {
                          clipIconRef: T,
                          lastClipsSession: y,
                          onOpenClipsGallery: A,
                      }),
                  (0, r.jsx)("div", {
                      ref: N,
                      children: (0, r.jsx)(o.JO, {
                          className: _,
                          icon: a.AlX,
                          showBadge: v,
                          tooltip: b.intl.string(b.t.MXaLEM),
                          onClick: A,
                      }),
                  }),
              ],
          })
        : null;
}
