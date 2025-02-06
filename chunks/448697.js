n.d(t, { R: () => g });
var i = n(200651),
    l = n(392711),
    a = n(642128),
    r = n(442837),
    s = n(481060),
    o = n(823379),
    c = n(709706),
    d = n(750180),
    u = n(56848),
    h = n(378441),
    p = n(358820),
    m = n(388032),
    f = n(656563);
function g() {
    let { mostRecentlyRequestedVoiceId: e } = (0, h.o)(),
        { showProgressBar: t, progress: n } = (function (e) {
            let t = (0, u.z)(e),
                n = (0, r.Wu)([c.Z], () => (0, l.values)(null == t ? void 0 : t.modelIds).map((e) => c.Z.getModelState(e))),
                i = n.filter(o.lm).some((e) => {
                    let { status: t, downloadedBytes: n } = e;
                    return t === d.L.DOWNLOADING && (null != n ? n : 0) > 0;
                }),
                a = (0, l.chain)(n)
                    .filter(o.lm)
                    .map((e) => {
                        var t;
                        let { status: n, downloadedBytes: i, totalBytes: l } = e;
                        return null !== (t = n === d.L.DOWNLOADING ? i : l) && void 0 !== t ? t : 0;
                    })
                    .sum()
                    .value(),
                s = (0, l.sumBy)(n, (e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.totalBytes) && void 0 !== t ? t : 0;
                });
            return {
                showProgressBar: i,
                progress: 0 === s ? 0 : Math.floor((a / s) * 100)
            };
        })(e),
        g = (0, s.dQu)(s.TVs.colors.WHITE);
    return (0, s.Yzy)(
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
            ? (0, i.jsx)(a.animated.div, {
                  style: e,
                  className: f.floaterWrapper,
                  children: (0, i.jsxs)('div', {
                      className: f.visibleFloater,
                      children: [
                          (0, i.jsxs)('div', {
                              className: f.progressText,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-sm/semibold',
                                      color: 'always-white',
                                      children: m.intl.format(m.t['r+uZYW'], { progress: n })
                                  }),
                                  (0, i.jsx)(s.zxk, {
                                      look: s.zxk.Looks.LINK,
                                      size: s.zxk.Sizes.MIN,
                                      onClick: p.ge,
                                      children: (0, i.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'always-white',
                                          children: m.intl.string(m.t['ETE/oK'])
                                      })
                                  })
                              ]
                          }),
                          (0, i.jsx)(s.Exd, {
                              percent: n,
                              foregroundColor: g.hex(),
                              backgroundColor: 'rgba(255,255,255,0.10)',
                              size: s.Exd.Sizes.LARGE
                          })
                      ]
                  })
              })
            : null
    );
}
