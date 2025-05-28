n.d(t, { R: () => f });
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n(240894),
    l = n(442837),
    s = n(481060),
    c = n(709706),
    d = n(378441),
    u = n(358820),
    _ = n(388032),
    m = n(690410);
function f() {
    let { hasActiveDownloads: e, progress: t } = (function () {
            let e = (0, l.cj)([c.Z], () => c.Z.getOngoingDownloads()),
                t = i.useRef({});
            i.useEffect(() => {
                0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e);
            }, [e]);
            let n = Object.values(t.current),
                r = n.some((e) => {
                    let { downloadedBytes: t } = e;
                    return (null != t ? t : 0) > 0;
                }),
                o = (0, a.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0;
                }),
                s = (0, a.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
                });
            return {
                hasActiveDownloads: r,
                progress: 0 === s ? 0 : Math.floor((o / s) * 100)
            };
        })(),
        { activeVoice: n } = (0, d.o)(),
        f = (0, s.dQu)(s.TVs.colors.WHITE);
    return (0, s.Yzy)(
        e ? (null != n ? 'voice-on' : 'voice-off') : null,
        {
            from: {
                opacity: 0,
                translateY: 20
            },
            enter: (e) => ({
                opacity: 1,
                translateY: 'voice-on' === e ? -72 : 0
            }),
            leave: {
                opacity: 0,
                translateY: 80
            }
        },
        'respect-motion-settings'
    )((e, n) =>
        null != n
            ? (0, r.jsx)(o.animated.div, {
                  style: e,
                  className: m.floaterWrapper,
                  children: (0, r.jsxs)('div', {
                      className: m.visibleFloater,
                      children: [
                          (0, r.jsxs)('div', {
                              className: m.progressText,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/semibold',
                                      color: 'always-white',
                                      children: _.intl.format(_.t['r+uZYW'], { progress: t })
                                  }),
                                  (0, r.jsx)(s.zxk, {
                                      look: s.zxk.Looks.LINK,
                                      size: s.zxk.Sizes.MIN,
                                      onClick: u.ge,
                                      children: (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'always-white',
                                          children: _.intl.string(_.t['ETE/oK'])
                                      })
                                  })
                              ]
                          }),
                          (0, r.jsx)(s.Exd, {
                              percent: t,
                              foregroundColor: f.hex(),
                              backgroundColor: 'rgba(255,255,255,0.10)',
                              size: s.Exd.Sizes.LARGE
                          })
                      ]
                  })
              })
            : null
    );
}
