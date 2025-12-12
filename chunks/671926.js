n.d(t, { R: () => _ });
var r = n(98076),
    i = n(4757),
    a = n(451542),
    o = n(380206);
function _(e, t) {
    let n;
    if (!(0, a.z)(e)) return [!1];
    n =
        "function" == typeof e.tracesSampler
            ? e.tracesSampler(t)
            : void 0 !== t.parentSampled
              ? t.parentSampled
              : void 0 !== e.tracesSampleRate
                ? e.tracesSampleRate
                : 1;
    let _ = (0, o.o)(n);
    return void 0 === _
        ? (i.X && r.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), [!1])
        : _
          ? Math.random() < _
              ? [!0, _]
              : (i.X &&
                    r.kg.log(
                        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`,
                    ),
                [!1, _])
          : (i.X &&
                r.kg.log(
                    `[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
                ),
            [!1, _]);
}
