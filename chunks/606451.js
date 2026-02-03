n.d(t, {
    m: () => f,
});
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n(92674),
    s = n(311907),
    o = n(397927),
    c = n(971778),
    u = n(494783),
    d = n(342887),
    h = n(985018),
    p = n(938663);

function f() {
    let e,
        t,
        n,
        f,
        m,
        g,
        { hasActiveDownloads: A, progress: b } =
            ((e = (0, s.cf)([c.A], () => c.A.getOngoingDownloads())),
            (t = r.useRef({})),
            r.useEffect(() => {
                0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e);
            }, [e]),
            (f = (n = Object.values(t.current)).some((e) => {
                let { downloadedBytes: t } = e;
                return (null != t ? t : 0) > 0;
            })),
            (m = (0, i.sumBy)(n, (e) => {
                var t;
                return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0;
            })),
            {
                hasActiveDownloads: f,
                progress:
                    0 ===
                    (g = (0, i.sumBy)(n, (e) => {
                        var t;
                        return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0;
                    }))
                        ? 0
                        : Math.floor((m / g) * 100),
            }),
        { activeVoice: _ } = (0, u.f)();
    return (0, o.pnh)(
        A ? (null != _ ? "voice-on" : "voice-off") : null,
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
                                      children: h.intl.format(h.t["r+uZYZ"], {
                                          progress: b,
                                      }),
                                  }),
                                  (0, l.jsx)(o.QWc, {
                                      text: h.intl.string(h.t["ETE/oC"]),
                                      onClick: d.HD,
                                      variant: "always-white",
                                      textVariant: "text-sm/normal",
                                  }),
                              ],
                          }),
                          (0, l.jsx)(o.iCB, {
                              percent: b,
                              size: o.iCB.Sizes.XSMALL,
                          }),
                      ],
                  }),
              })
            : null,
    );
}
