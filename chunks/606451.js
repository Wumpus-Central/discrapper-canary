n.d(t, {
    m: () => b,
});
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n(108531),
    s = n(311907),
    o = n(397927),
    c = n(971778),
    u = n(494783),
    d = n(342887),
    f = n(985018),
    p = n(938663);

function b() {
    let e,
        t,
        n,
        b,
        g,
        m,
        { hasActiveDownloads: h, progress: A } =
            ((e = (0, s.cf)([c.A], () => c.A.getOngoingDownloads())),
            (t = r.useRef({})),
            r.useEffect(() => {
                0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e);
            }, [e]),
            (b = (n = Object.values(t.current)).some((e) => {
                let { downloadedBytes: t } = e;
                return (null != t ? t : 0) > 0;
            })),
            (g = (0, i.sumBy)(n, (e) => {
                var t;
                return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0;
            })),
            {
                hasActiveDownloads: b,
                progress:
                    0 ===
                    (m = (0, i.sumBy)(n, (e) => {
                        var t;
                        return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
                    }))
                        ? 0
                        : Math.floor((g / m) * 100),
            }),
        { activeVoice: y } = (0, u.f)();
    return (0, o.pnh)(
        h ? (null != y ? "voice-on" : "voice-off") : null,
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
    )((e, t) =>
        null != t
            ? (0, l.jsx)(a.animated.div, {
                  style: e,
                  className: p.zh,
                  children: (0, l.jsxs)("div", {
                      className: p.AY,
                      children: [
                          (0, l.jsxs)("div", {
                              className: p.l_,
                              children: [
                                  (0, l.jsx)(o.Text, {
                                      variant: "text-sm/semibold",
                                      color: "text-strong",
                                      children: f.intl.format(f.t["r+uZYZ"], {
                                          progress: A,
                                      }),
                                  }),
                                  (0, l.jsx)(o.QWc, {
                                      text: f.intl.string(f.t["ETE/oC"]),
                                      onClick: d.HD,
                                      variant: "always-white",
                                      textVariant: "text-sm/normal",
                                  }),
                              ],
                          }),
                          (0, l.jsx)(o.kej, {
                              percent: A,
                              size: o.kej.Sizes.XSMALL,
                          }),
                      ],
                  }),
              })
            : null,
    );
}
