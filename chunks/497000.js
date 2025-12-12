n.d(t, { j: () => s });
var r = n(82255),
    i = n(366000),
    a = n(98076),
    o = n(549040),
    _ = n(889929);
function s() {
    _.m9 && _.m9.document
        ? _.m9.document.addEventListener("visibilitychange", () => {
              let e = (0, r.HN)();
              if (!e) return;
              let t = (0, r.Gx)(e);
              if (_.m9.document.hidden && t) {
                  let e = "cancelled",
                      { op: n, status: _ } = (0, r.XU)(t);
                  o.X && a.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`),
                      _ ||
                          t.setStatus({
                              code: i.jt,
                              message: e,
                          }),
                      t.setAttribute("sentry.cancellation_reason", "document.hidden"),
                      t.end();
              }
          })
        : o.X && a.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document");
}
