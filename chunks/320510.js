n.d(t, { S: () => l });
var r = n(762399),
    i = n(940107);
function l(e, t, n) {
    return (0, i.W)(e, "control", n, {
        id: t,
        timeoutMs: (0, r.d5)(n),
        retryMs: 400,
        sourceMatch: "origin",
        label: "control",
    }).then(
        (e) =>
            "boolean" == typeof e?.ok && Array.isArray(e.results)
                ? { status: "completed", response: e }
                : { status: "failed", message: "the preview frame returned a malformed control result" },
        (e) =>
            e instanceof r.fq
                ? { status: "failed", message: "the preview frame did not answer the control batch" }
                : { status: "unavailable" },
    );
}
