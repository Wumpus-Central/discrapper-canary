n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(665149),
    s = n(618158),
    c = n(819640),
    u = n(131951),
    d = n(924557),
    m = n(435064),
    h = n(779618),
    f = n(175470),
    p = n(203259),
    _ = n(356659),
    g = n(388032);
function E(e) {
    let { canShowReminder: t = !1, className: E } = e,
        C = (0, h.Z)(u.Z),
        { showClipsHeaderEntrypoint: I } = d.NV.useExperiment({ location: 'ClipsButton' }, { autoTrackExposure: !1 }),
        {
            hasClips: x,
            hasNewClips: N,
            lastClipsSession: v,
            remindersEnabled: T,
            hasAnyClipAnimations: S
        } = (0, l.cj)([m.Z], () => ({
            hasClips: m.Z.hasClips(),
            hasNewClips: m.Z.getNewClipIds().length > 0,
            lastClipsSession: m.Z.getLastClipsSession(),
            remindersEnabled: m.Z.getSettings().remindersEnabled,
            hasAnyClipAnimations: m.Z.hasAnyClipAnimations()
        })),
        A = null != v && v.newClipIds.length > 0,
        b = (0, f.n)((e) => e.clipsButtonRef),
        j = (0, f.n)((e) => e.setClipsButtonRef),
        R = (0, l.e7)([c.Z], () => c.Z.hasLayers()),
        { preventIdle: Z, allowIdle: P } = (0, s.Y)('animation');
    function L() {
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('74750')]).then(n.bind(n, 542055));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: _.Qr }
        );
    }
    return (r.useEffect(() => (S ? Z() : P(), () => P()), [S, Z, P]), I && C && x)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != b &&
                      t &&
                      T &&
                      A &&
                      !(0, a.hasAnyModalOpen)() &&
                      !R &&
                      (0, i.jsx)(p.Z, {
                          clipIconRef: b,
                          lastClipsSession: v,
                          onOpenClipsGallery: L
                      }),
                  (0, i.jsx)('div', {
                      ref: j,
                      children: (0, i.jsx)(o.JO, {
                          className: E,
                          icon: a.ClipsIcon,
                          showBadge: N,
                          tooltip: g.intl.string(g.t.MXaLEB),
                          onClick: L
                      })
                  })
              ]
          })
        : null;
}
