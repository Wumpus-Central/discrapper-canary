n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(665149),
    s = n(618158),
    c = n(819640),
    u = n(131951),
    d = n(924557),
    p = n(435064),
    f = n(779618),
    h = n(175470),
    g = n(203259),
    m = n(356659),
    b = n(388032);
function _(e) {
    let { canShowReminder: t = !1, className: _ } = e,
        O = (0, f.Z)(u.Z),
        { showClipsHeaderEntrypoint: E } = d.NV.useExperiment({ location: "ClipsButton" }, { autoTrackExposure: !1 }),
        {
            hasClips: v,
            hasNewClips: y,
            lastClipsSession: I,
            remindersEnabled: C,
            hasAnyClipAnimations: S,
        } = (0, l.cj)([p.Z], () => ({
            hasClips: p.Z.hasClips(),
            hasNewClips: p.Z.getNewClipIds().length > 0,
            lastClipsSession: p.Z.getLastClipsSession(),
            remindersEnabled: p.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: p.Z.hasAnyClipAnimations(),
        })),
        T = null != I && I.newClipIds.length > 0,
        N = (0, h.n)((e) => e.clipsButtonRef),
        j = (0, h.n)((e) => e.setClipsButtonRef),
        P = (0, l.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: x, allowIdle: A } = (0, s.Y)("animation");
    function Z() {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await n.e("57478").then(n.bind(n, 542055));
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
    return (i.useEffect(() => (S ? x() : A(), () => A()), [S, x, A]), E && O && v)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  null != N &&
                      t &&
                      C &&
                      T &&
                      !(0, a.$sL)() &&
                      !P &&
                      (0, r.jsx)(g.Z, {
                          clipIconRef: N,
                          lastClipsSession: I,
                          onOpenClipsGallery: Z,
                      }),
                  (0, r.jsx)("div", {
                      ref: j,
                      children: (0, r.jsx)(o.JO, {
                          className: _,
                          icon: a.AlX,
                          showBadge: y,
                          tooltip: b.intl.string(b.t.MXaLEB),
                          onClick: Z,
                      }),
                  }),
              ],
          })
        : null;
}
