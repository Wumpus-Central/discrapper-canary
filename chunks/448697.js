n.d(t, { R: () => h });
var r = n(255367),
    i = n(73800),
    o = n(392711),
    a = n(717976),
    s = n(442837),
    l = n(481060),
    c = n(709706),
    u = n(378441),
    d = n(358820),
    f = n(388032),
    _ = n(426995);
function p() {
    let e = (0, s.cj)([c.Z], () => c.Z.getOngoingDownloads()),
        t = i.useRef({});
    i.useEffect(() => {
        0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e);
    }, [e]);
    let n = Object.values(t.current),
        r = n.some((e) => {
            let { downloadedBytes: t } = e;
            return (null != t ? t : 0) > 0;
        }),
        a = (0, o.sumBy)(n, (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0;
        }),
        l = (0, o.sumBy)(n, (e) => {
            var t;
            return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
        });
    return {
        hasActiveDownloads: r,
        progress: 0 === l ? 0 : Math.floor((a / l) * 100),
    };
}
function h() {
    let { hasActiveDownloads: e, progress: t } = p(),
        { activeVoice: n } = (0, u.o)(),
        i = null != n,
        o = e ? (i ? "voice-on" : "voice-off") : null;
    return (0, l.Yzy)(
        o,
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
            ? (0, r.jsx)(a.animated.div, {
                  style: e,
                  className: _.floaterWrapper,
                  children: (0, r.jsxs)("div", {
                      className: _.visibleFloater,
                      children: [
                          (0, r.jsxs)("div", {
                              className: _.progressText,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/semibold",
                                      color: "text-primary",
                                      children: f.intl.format(f.t["r+uZYW"], { progress: t }),
                                  }),
                                  (0, r.jsx)(l.Avr, {
                                      text: f.intl.string(f.t["ETE/oK"]),
                                      onClick: d.ge,
                                      variant: "always-white",
                                      textVariant: "text-sm/normal",
                                  }),
                              ],
                          }),
                          (0, r.jsx)(l.Exd, {
                              percent: t,
                              size: l.Exd.Sizes.XSMALL,
                          }),
                      ],
                  }),
              })
            : null,
    );
}
