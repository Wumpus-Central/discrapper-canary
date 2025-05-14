n.d(t, { R: () => _ });
var r = n(255367),
    i = n(392711),
    a = n(683305),
    o = n(442837),
    l = n(481060),
    s = n(709706),
    c = n(358820),
    d = n(388032),
    u = n(690410);
function _() {
    let { hasActiveDownloads: e, progress: t } = (function () {
            let e = (0, o.Wu)([s.Z], () => s.Z.getOngoingDownloads()),
                t = e.some((e) => {
                    let { downloadedBytes: t } = e;
                    return (null != t ? t : 0) > 0;
                }),
                n = (0, i.sumBy)(e, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0;
                }),
                r = (0, i.sumBy)(e, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
                });
            return {
                hasActiveDownloads: t,
                progress: 0 === r ? 0 : Math.floor((n / r) * 100)
            };
        })(),
        n = (0, l.dQu)(l.TVs.colors.WHITE);
    return (0, l.Yzy)(
        e,
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
    )((e, i) =>
        i
            ? (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: u.floaterWrapper,
                  children: (0, r.jsxs)('div', {
                      className: u.visibleFloater,
                      children: [
                          (0, r.jsxs)('div', {
                              className: u.progressText,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-sm/semibold',
                                      color: 'always-white',
                                      children: d.intl.format(d.t['r+uZYW'], { progress: t })
                                  }),
                                  (0, r.jsx)(l.zxk, {
                                      look: l.zxk.Looks.LINK,
                                      size: l.zxk.Sizes.MIN,
                                      onClick: c.ge,
                                      children: (0, r.jsx)(l.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'always-white',
                                          children: d.intl.string(d.t['ETE/oK'])
                                      })
                                  })
                              ]
                          }),
                          (0, r.jsx)(l.Exd, {
                              percent: t,
                              foregroundColor: n.hex(),
                              backgroundColor: 'rgba(255,255,255,0.10)',
                              size: l.Exd.Sizes.LARGE
                          })
                      ]
                  })
              })
            : null
    );
}
