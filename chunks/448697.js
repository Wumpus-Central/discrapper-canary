n.d(t, { R: () => g });
var r = n(200651),
    i = n(392711),
    a = n(642128),
    o = n(442837),
    l = n(481060),
    s = n(823379),
    c = n(709706),
    d = n(750180),
    u = n(56848),
    _ = n(378441),
    m = n(358820),
    f = n(388032),
    p = n(690410);
function g() {
    let { mostRecentlyRequestedVoiceId: e } = (0, _.o)(),
        { showProgressBar: t, progress: n } = (function (e) {
            let t = (0, u.z)(e),
                n = (0, o.Wu)([c.Z], () => (0, i.values)(null == t ? void 0 : t.modelIds).map((e) => c.Z.getModelState(e))),
                r = n.filter(s.lm).some((e) => {
                    let { status: t, downloadedBytes: n } = e;
                    return t === d.L.DOWNLOADING && (null != n ? n : 0) > 0;
                }),
                a = (0, i.chain)(n)
                    .filter(s.lm)
                    .map((e) => {
                        var t;
                        let { status: n, downloadedBytes: r, totalBytes: i } = e;
                        return null != (t = n === d.L.DOWNLOADING ? r : i) ? t : 0;
                    })
                    .sum()
                    .value(),
                l = (0, i.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
                });
            return {
                showProgressBar: r,
                progress: 0 === l ? 0 : Math.floor((a / l) * 100)
            };
        })(e),
        g = (0, l.dQu)(l.TVs.colors.WHITE);
    return (0, l.Yzy)(
        t,
        {
            from: {
                opacity: 0,
                translateY: 20
            },
            enter: {
                opacity: 1,
                translateY: 0
            },
            leave: {
                opacity: 0,
                translateY: 80
            }
        },
        'respect-motion-settings'
    )((e, t) =>
        t
            ? (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: p.floaterWrapper,
                  children: (0, r.jsxs)('div', {
                      className: p.visibleFloater,
                      children: [
                          (0, r.jsxs)('div', {
                              className: p.progressText,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-sm/semibold',
                                      color: 'always-white',
                                      children: f.NW.format(f.t['r+uZYW'], { progress: n })
                                  }),
                                  (0, r.jsx)(l.zxk, {
                                      look: l.zxk.Looks.LINK,
                                      size: l.zxk.Sizes.MIN,
                                      onClick: m.ge,
                                      children: (0, r.jsx)(l.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'always-white',
                                          children: f.NW.string(f.t['ETE/oK'])
                                      })
                                  })
                              ]
                          }),
                          (0, r.jsx)(l.Exd, {
                              percent: n,
                              foregroundColor: g.hex(),
                              backgroundColor: 'rgba(255,255,255,0.10)',
                              size: l.Exd.Sizes.LARGE
                          })
                      ]
                  })
              })
            : null
    );
}
