r.d(t, { j: () => s });
var n = r(82255),
    a = r(366000),
    i = r(98076),
    o = r(549040),
    _ = r(889929);
function s() {
    _.m9 && _.m9.document
        ? _.m9.document.addEventListener("visibilitychange", () => {
              let e = (0, n.HN)();
              if (!e) return;
              let t = (0, n.Gx)(e);
              if (_.m9.document.hidden && t) {
                  let e = "cancelled",
                      { op: r, status: _ } = (0, n.XU)(t);
                  o.X && i.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${r}`),
                      _ ||
                          t.setStatus({
                              code: a.jt,
                              message: e,
                          }),
                      t.setAttribute("sentry.cancellation_reason", "document.hidden"),
                      t.end();
              }
          })
        : o.X && i.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document");
}
