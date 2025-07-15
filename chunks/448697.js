n.d(t, { R: () => g });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n(108542),
    a = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(709706),
    d = n(378441),
    p = n(358820),
    f = n(388032),
    m = n(690410);
function g() {
    let { hasActiveDownloads: e, progress: t } = (function () {
            let e = (0, a.cj)([u.Z], () => u.Z.getOngoingDownloads()),
                t = i.useRef({});
            i.useEffect(() => {
                (0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e));
            }, [e]);
            let n = Object.values(t.current),
                r = n.some((e) => {
                    let { downloadedBytes: t } = e;
                    return (null != t ? t : 0) > 0;
                }),
                o = (0, l.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0;
                }),
                s = (0, l.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
                });
            return {
                hasActiveDownloads: r,
                progress: 0 === s ? 0 : Math.floor((o / s) * 100)
            };
        })(),
        { activeVoice: n } = (0, d.o)();
    return (0, c.Yzy)(
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
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/semibold',
                                      color: 'text-primary',
                                      children: f.intl.format(f.t['r+uZYW'], { progress: t })
                                  }),
                                  (0, r.jsx)(s.zx, {
                                      look: s.zx.Looks.LINK,
                                      size: s.zx.Sizes.MIN,
                                      onClick: p.ge,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-primary',
                                          children: f.intl.string(f.t['ETE/oK'])
                                      })
                                  })
                              ]
                          }),
                          (0, r.jsx)(c.Exd, {
                              percent: t,
                              size: c.Exd.Sizes.XSMALL
                          })
                      ]
                  })
              })
            : null
    );
}
