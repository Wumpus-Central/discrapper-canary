_.d(e, { j: () => i });
var a = _(696486),
    r = _(793373),
    n = _(622916),
    o = _(454463),
    E = _(163162);
function i() {
    E.m9 && E.m9.document
        ? E.m9.document.addEventListener("visibilitychange", () => {
              let t = (0, a.HN)();
              if (!t) return;
              let e = (0, a.Gx)(t);
              if (E.m9.document.hidden && e) {
                  let t = "cancelled",
                      { op: _, status: E } = (0, a.XU)(e);
                  o.X && n.kg.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${_}`),
                      E ||
                          e.setStatus({
                              code: r.jt,
                              message: t,
                          }),
                      e.setAttribute("sentry.cancellation_reason", "document.hidden"),
                      e.end();
              }
          })
        : o.X && n.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document");
}
