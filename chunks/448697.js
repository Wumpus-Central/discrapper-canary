n.d(t, { R: () => m });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n(104721),
    o = n(442837),
    s = n(481060),
    c = n(709706),
    u = n(378441),
    d = n(358820),
    p = n(388032),
    f = n(690410);
function m() {
    let { hasActiveDownloads: e, progress: t } = (function () {
            let e = (0, o.cj)([c.Z], () => c.Z.getOngoingDownloads()),
                t = i.useRef({});
            i.useEffect(() => {
                (0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e));
            }, [e]);
            let n = Object.values(t.current),
                r = n.some((e) => {
                    let { downloadedBytes: t } = e;
                    return (null != t ? t : 0) > 0;
                }),
                a = (0, l.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0;
                }),
                s = (0, l.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
                });
            return {
                hasActiveDownloads: r,
                progress: 0 === s ? 0 : Math.floor((a / s) * 100)
            };
        })(),
        { activeVoice: n } = (0, u.o)();
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
            ? (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: f.floaterWrapper,
                  children: (0, r.jsxs)('div', {
                      className: f.visibleFloater,
                      children: [
                          (0, r.jsxs)('div', {
                              className: f.progressText,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/semibold',
                                      color: 'text-primary',
                                      children: p.intl.format(p.t['r+uZYW'], { progress: t })
                                  }),
                                  (0, r.jsx)(s.Avr, {
                                      text: p.intl.string(p.t['ETE/oK']),
                                      onClick: d.ge,
                                      variant: 'always-white',
                                      textVariant: 'text-sm/normal'
                                  })
                              ]
                          }),
                          (0, r.jsx)(s.Exd, {
                              percent: t,
                              size: s.Exd.Sizes.XSMALL
                          })
                      ]
                  })
              })
            : null
    );
}
