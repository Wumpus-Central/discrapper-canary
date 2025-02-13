n.d(t, { Z: () => x });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(665149),
    o = n(618158),
    c = n(819640),
    d = n(131951),
    u = n(924557),
    m = n(435064),
    _ = n(779618),
    h = n(175470),
    p = n(203259),
    g = n(356659),
    f = n(388032);
function x(e) {
    let { canShowReminder: t = !1, className: x } = e,
        C = (0, _.Z)(d.Z),
        { showClipsHeaderEntrypoint: v } = u.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }),
        {
            hasClips: E,
            hasNewClips: I,
            lastClipsSession: N,
            remindersEnabled: S,
            hasAnyClipAnimations: T
        } = (0, a.cj)([m.Z], () => ({
            hasClips: m.Z.hasClips(),
            hasNewClips: m.Z.getNewClipIds().length > 0,
            lastClipsSession: m.Z.getLastClipsSession(),
            remindersEnabled: m.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: m.Z.hasAnyClipAnimations()
        })),
        b = null != N && N.newClipIds.length > 0,
        A = (0, h.n)((e) => e.clipsButtonRef),
        j = (0, h.n)((e) => e.setClipsButtonRef),
        y = (0, a.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: Z, allowIdle: R } = (0, o.Y)('animation');
    function L() {
        (0, r.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('60097')]).then(n.bind(n, 542055));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: g.Qr }
        );
    }
    return (l.useEffect(() => (T ? Z() : R(), () => R()), [T, Z, R]), v && C && E)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != A &&
                      t &&
                      S &&
                      b &&
                      !(0, r.$sL)() &&
                      !y &&
                      (0, i.jsx)(p.Z, {
                          clipIconRef: A,
                          lastClipsSession: N,
                          onOpenClipsGallery: L
                      }),
                  (0, i.jsx)('div', {
                      ref: j,
                      children: (0, i.jsx)(s.JO, {
                          className: x,
                          icon: r.AlX,
                          showBadge: I,
                          tooltip: f.intl.string(f.t.MXaLEB),
                          onClick: L
                      })
                  })
              ]
          })
        : null;
}
