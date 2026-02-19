r.d(t, { A: () => h }), r(321073);
var n = r(627968),
    a = r(64700),
    i = r(397927),
    s = r(828904),
    l = r(522278),
    o = r(974175),
    d = r(985018);
let u = {
        hdrFrames: { key: "hdrFramesCapable", suffix: "Capable" },
        hybridDxgiFrames: { key: "hybridDxgiFramesUnique", suffix: "Unique" },
        hybridGdiBitBltFrames: { key: "hybridGdiBitBltFramesUnique", suffix: "Unique" },
        hybridGdiPrintWindowFrames: { key: "hybridGdiPrintWindowFramesUnique", suffix: "Unique" },
        hybridGraphicsCaptureFrames: { key: "hybridGraphicsCaptureFramesUnique", suffix: "Unique" },
        hybridVideohookFrames: { key: "hybridVideohookFramesUnique", suffix: "Unique" },
    },
    c = [
        "hdrFrames",
        "hybridCaptureMethodSwitches",
        "hybridDxgiFrames",
        "hybridGdiBitBltFrames",
        "hybridGdiPrintWindowFrames",
        "hybridGraphicsCaptureFrames",
        "hybridVideohookFrames",
        "hybridGdiFrames",
        "quartzFrames",
        "screenCaptureKitFrames",
        "screenshareFrames",
        "videohookFrames",
        "videohookBackend",
        "screenshareCapturedFps",
        "screenshareCapturedFpsUnique",
    ],
    m = new Set([...c, ...Object.values(u).map((e) => e.key)]);
class p extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        return null == e
            ? (0, n.jsx)(i.y$y, { type: i.y$y.Type.SPINNING_CIRCLE })
            : (0, n.jsxs)(i.BJc, {
                  children: [
                      (0, n.jsx)(i.Heading, { variant: "heading-md/medium", children: d.intl.string(d.t["gWbr/U"]) }),
                      (0, s.C6)(
                          (function (e) {
                              let t = null != e.hybridGdiBitBltFrames && null != e.hybridGdiPrintWindowFrames,
                                  r = [];
                              for (let a of c) {
                                  if ("hybridGdiFrames" === a && t) continue;
                                  let i = e[a];
                                  if (void 0 === i) continue;
                                  let s = u[a],
                                      d = null != s ? e[s.key] : void 0;
                                  null != s && void 0 !== d
                                      ? r.push(
                                            (0, n.jsx)(
                                                l.A,
                                                {
                                                    label: a,
                                                    valueRendered: `${i} (${d})`,
                                                    renderGraph: null,
                                                    children: `${o.f8[a] ?? a} (${s.suffix})`,
                                                },
                                                a,
                                            ),
                                        )
                                      : r.push((0, n.jsx)(o.q7, { label: a, value: i }, a));
                              }
                              for (let [t, a] of Object.entries(e))
                                  m.has(t) ||
                                      o.R[t] ||
                                      void 0 === a ||
                                      r.push((0, n.jsx)(o.q7, { label: t, value: a }, t));
                              return r;
                          })(e),
                      ),
                  ],
              });
    }
}
let h = p;
