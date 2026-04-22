r.d(t, { A: () => b }), r(321073);
var n = r(627968),
    i = r(64700),
    a = r(289873),
    o = r(331322),
    l = r(534514),
    s = r(828904),
    d = r(522278),
    c = r(974175),
    u = r(985018);
let m = {
        hdrFrames: { key: "hdrFramesCapable", suffix: "Capable" },
        hybridDxgiFrames: { key: "hybridDxgiFramesUnique", suffix: "Unique" },
        hybridGdiBitBltFrames: { key: "hybridGdiBitBltFramesUnique", suffix: "Unique" },
        hybridGdiPrintWindowFrames: { key: "hybridGdiPrintWindowFramesUnique", suffix: "Unique" },
        hybridGraphicsCaptureFrames: { key: "hybridGraphicsCaptureFramesUnique", suffix: "Unique" },
        hybridVideohookFrames: { key: "hybridVideohookFramesUnique", suffix: "Unique" },
    },
    p = [
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
    h = new Set([...p, ...Object.values(m).map((e) => e.key)]);
class y extends i.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        return null == e
            ? (0, n.jsx)(a.y, { type: a.y.Type.SPINNING_CIRCLE })
            : (0, n.jsxs)(o.B, {
                  children: [
                      (0, n.jsx)(l.D, { variant: "heading-md/medium", children: u.intl.string(u.t["gWbr/U"]) }),
                      (0, s.C6)(
                          (function (e) {
                              let t = null != e.hybridGdiBitBltFrames && null != e.hybridGdiPrintWindowFrames,
                                  r = [];
                              for (let i of p) {
                                  if ("hybridGdiFrames" === i && t) continue;
                                  let a = e[i];
                                  if (void 0 === a) continue;
                                  let o = m[i],
                                      l = null != o ? e[o.key] : void 0;
                                  null != o && void 0 !== l
                                      ? r.push(
                                            (0, n.jsx)(
                                                d.A,
                                                {
                                                    label: i,
                                                    valueRendered: `${a} (${l})`,
                                                    renderGraph: null,
                                                    children: `${c.f8[i] ?? i} (${o.suffix})`,
                                                },
                                                i,
                                            ),
                                        )
                                      : r.push((0, n.jsx)(c.q7, { label: i, value: a }, i));
                              }
                              for (let [t, i] of Object.entries(e))
                                  h.has(t) ||
                                      c.R[t] ||
                                      void 0 === i ||
                                      r.push((0, n.jsx)(c.q7, { label: t, value: i }, t));
                              return r;
                          })(e),
                      ),
                  ],
              });
    }
}
let b = y;
