n.d(t, { S: () => l });
var i = n(762399),
    r = n(940107);
function l(e, t, n) {
    return (0, r.W)(e, "control", n, {
        id: t,
        timeoutMs: (0, i.d5)(n),
        retryMs: 400,
        sourceMatch: "origin",
        label: "control",
    }).then(
        (e) =>
            "boolean" == typeof e?.ok && Array.isArray(e.results)
                ? { status: "completed", response: e }
                : { status: "failed", message: "the preview frame returned a malformed control result" },
        (e) =>
            e instanceof i.fq
                ? { status: "failed", message: "the preview frame did not answer the control batch" }
                : { status: "unavailable" },
    );
}
