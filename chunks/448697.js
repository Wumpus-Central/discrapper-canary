n.d(t, { R: () => f });
var r = n(54381),
    i = n(473749),
    o = n(392711),
    l = n(790519),
    a = n(442837),
    s = n(481060),
    c = n(709706),
    u = n(378441),
    d = n(358820),
    p = n(388032),
    m = n(48528);
function f() {
    let { hasActiveDownloads: e, progress: t } = (function () {
            let e = (0, a.cj)([c.Z], () => c.Z.getOngoingDownloads()),
                t = i.useRef({});
            i.useEffect(() => {
                0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e);
            }, [e]);
            let n = Object.values(t.current),
                r = n.some((e) => {
                    let { downloadedBytes: t } = e;
                    return (null != t ? t : 0) > 0;
                }),
                l = (0, o.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0;
                }),
                s = (0, o.sumBy)(n, (e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
                });
            return {
                hasActiveDownloads: r,
                progress: 0 === s ? 0 : Math.floor((l / s) * 100),
            };
        })(),
        { activeVoice: n } = (0, u.o)();
    return (0, s.Yzy)(
        e ? (null != n ? "voice-on" : "voice-off") : null,
        {
            from: {
                opacity: 0,
                translateY: 20,
            },
            enter: (e) => ({
                opacity: 1,
                translateY: "voice-on" === e ? -72 : 0,
            }),
            leave: {
                opacity: 0,
                translateY: 80,
            },
        },
        "respect-motion-settings",
    )((e, n) =>
        null != n
            ? (0, r.jsx)(l.animated.div, {
                  style: e,
                  className: m.floaterWrapper,
                  children: (0, r.jsxs)("div", {
                      className: m.visibleFloater,
                      children: [
                          (0, r.jsxs)("div", {
                              className: m.progressText,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/semibold",
                                      color: "text-primary",
                                      children: p.intl.format(p.t["r+uZYZ"], { progress: t }),
                                  }),
                                  (0, r.jsx)(s.Avr, {
                                      text: p.intl.string(p.t["ETE/oC"]),
                                      onClick: d.ge,
                                      variant: "always-white",
                                      textVariant: "text-sm/normal",
                                  }),
                              ],
                          }),
                          (0, r.jsx)(s.Exd, {
                              percent: t,
                              size: s.Exd.Sizes.XSMALL,
                          }),
                      ],
                  }),
              })
            : null,
    );
}
