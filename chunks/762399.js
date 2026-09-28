function r(e, t, n) {
    return "object" == typeof e && null != e && e.type === t && e.id === n;
}
n.d(t, { YX: () => r, d5: () => l, fq: () => i });
class i extends Error {
    constructor(e, t) {
        (super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout"));
    }
}
function l(e) {
    let t = e.timeoutMs;
    return (
        ("number" == typeof t && isFinite(t) && t > 0
            ? Math.min(Math.floor(t), 2e4)
            : Math.min(
                  5e3 +
                      e.steps.reduce((e, t) => {
                          var n;
                          let r;
                          return (
                              e +
                              ((r = "number" == typeof (n = t).ms && isFinite(n.ms) && n.ms > 0 ? n.ms : null),
                              "wait" === n.action
                                  ? null != n.target || "string" == typeof n.source
                                      ? Math.min(r ?? 3e3, 1e4)
                                      : Math.min(r ?? 250, 2e4)
                                  : "press" === n.action
                                    ? ("number" == typeof n.holdMs && isFinite(n.holdMs) && n.holdMs > 0
                                          ? Math.min(n.holdMs, 5e3)
                                          : 0) *
                                      ("number" == typeof n.repeat && n.repeat >= 1
                                          ? Math.min(Math.floor(n.repeat), 20)
                                          : 1)
                                    : "drag" === n.action
                                      ? null == r
                                          ? 0
                                          : Math.min(r, 5e3)
                                      : "script" === n.action
                                        ? Math.min(r ?? 1e4, 2e4)
                                        : 0)
                          );
                      }, 0),
                  2e4,
              )) + 4e3
    );
}
n.j;
