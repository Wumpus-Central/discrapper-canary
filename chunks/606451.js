n.d(t, { m: () => A });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(382222),
    r = n(311907),
    o = n(397927),
    c = n(971778),
    d = n(494783),
    u = n(342887),
    h = n(985018),
    m = n(298808);
function A() {
    let e,
        t,
        n,
        A,
        g,
        p,
        { hasActiveDownloads: f, progress: _ } =
            ((e = (0, r.cf)([c.A], () => c.A.getOngoingDownloads())),
            (t = l.useRef({})),
            l.useEffect(() => {
                0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e);
            }, [e]),
            (A = (n = Object.values(t.current)).some((e) => {
                let { downloadedBytes: t } = e;
                return (t ?? 0) > 0;
            })),
            (g = (0, s.sumBy)(n, (e) => e?.downloadedBytes ?? 0)),
            {
                hasActiveDownloads: A,
                progress: 0 === (p = (0, s.sumBy)(n, (e) => e?.totalBytes ?? 0)) ? 0 : Math.floor((g / p) * 100),
            }),
        { activeVoice: E } = (0, d.f)();
    return (0, o.pnh)(
        f ? (null != E ? "voice-on" : "voice-off") : null,
        {
            from: { opacity: 0, translateY: 20 },
            enter: (e) => ({ opacity: 1, translateY: "voice-on" === e ? -72 : 0 }),
            leave: { opacity: 0, translateY: 80 },
        },
        "respect-motion-settings",
    )((e, t) =>
        null != t
            ? (0, i.jsx)(a.animated.div, {
                  style: e,
                  className: m.zh,
                  children: (0, i.jsxs)("div", {
                      className: m.AY,
                      children: [
                          (0, i.jsxs)("div", {
                              className: m.l_,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/semibold",
                                      color: "text-strong",
                                      children: h.intl.format(h.t["r+uZYZ"], { progress: _ }),
                                  }),
                                  (0, i.jsx)(o.QWc, {
                                      text: h.intl.string(h.t["ETE/oC"]),
                                      onClick: u.HD,
                                      variant: "always-white",
                                      textVariant: "text-sm/normal",
                                  }),
                              ],
                          }),
                          (0, i.jsx)(o.iCB, { percent: _, size: o.iCB.Sizes.XSMALL }),
                      ],
                  }),
              })
            : null,
    );
}
