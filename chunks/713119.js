a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(573613),
    s = a(834730),
    r = a(331322),
    o = a(292666),
    d = a(821609),
    c = a(77729),
    u = a(430452),
    m = a(505206),
    h = a(36934);
function p() {
    let [e, t] = l.useState(""),
        [a, p] = l.useState(""),
        [x, g] = l.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        v = "processing" === x.status;
    return (0, n.jsx)(i.Ip, {
        className: m.nd,
        children: (0, n.jsxs)("div", {
            className: h.l7,
            children: [
                (0, n.jsx)(s.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, n.jsx)(s.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, n.jsxs)(r.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, n.jsx)(o.k, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Input directory (wav files)",
                        }),
                        (0, n.jsx)(d.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await c.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, n.jsxs)(r.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, n.jsx)(o.k, { fullWidth: !0, value: a, onChange: p, placeholder: "Output directory" }),
                        (0, n.jsx)(d.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await c.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && p(e[0]);
                            },
                        }),
                    ],
                }),
                (0, n.jsx)(d.$, {
                    variant: v ? "critical-primary" : "primary",
                    text: v ? "Cancel" : "Start Processing",
                    onClick: v
                        ? function () {
                              u.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  g((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (g({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  u.Ay.getMediaEngine().processBatchAudioFiles(
                                      e,
                                      a,
                                      (e, t, a, n) => {
                                          g((l) => ({
                                              ...l,
                                              current: t,
                                              total: a,
                                              log: [...l.log, { filename: e, success: n }],
                                          }));
                                      },
                                      (e, t) => {
                                          g((a) => ({
                                              ...a,
                                              status: "processing" === a.status ? "complete" : "cancelled",
                                              processed: e,
                                              failed: t,
                                          }));
                                      },
                                  ));
                          },
                    disabled: !v && ("" === e || "" === a),
                }),
                "idle" !== x.status &&
                    (0, n.jsxs)(r.B, {
                        gap: 4,
                        children: [
                            (0, n.jsxs)(s.E, {
                                variant: "text-sm/semibold",
                                children: [
                                    "processing" === x.status && `Processing: ${x.current}/${x.total}`,
                                    "complete" === x.status && `Complete: ${x.processed} processed, ${x.failed} failed`,
                                    "cancelled" === x.status &&
                                        `Cancelled: ${x.processed} processed, ${x.failed} failed`,
                                ],
                            }),
                            x.log
                                .slice(-20)
                                .reverse()
                                .map((e, t) =>
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: h.TZ,
                                            children: (0, n.jsxs)(s.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? h.$D : h.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            x.log.length > 20 &&
                                (0, n.jsxs)(s.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", x.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
