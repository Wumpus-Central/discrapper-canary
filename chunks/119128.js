a.d(e, { j: () => c });
var r = a(696486),
    n = a(793373),
    _ = a(622916),
    o = a(454463),
    i = a(163162);
function c() {
    i.m9 && i.m9.document
        ? i.m9.document.addEventListener('visibilitychange', () => {
              let t = (0, r.HN)();
              if (!t) return;
              let e = (0, r.Gx)(t);
              if (i.m9.document.hidden && e) {
                  let t = 'cancelled',
                      { op: a, status: i } = (0, r.XU)(e);
                  o.X && _.kg.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${a}`),
                      i ||
                          e.setStatus({
                              code: n.jt,
                              message: t
                          }),
                      e.setAttribute('sentry.cancellation_reason', 'document.hidden'),
                      e.end();
              }
          })
        : o.X && _.kg.warn('[Tracing] Could not set up background tab detection due to lack of global document');
}
