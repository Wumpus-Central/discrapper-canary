"use strict";
r.d(t, { U: () => o });
var a = r(64700),
    i = r(954571),
    n = r(501957),
    l = r(473702),
    s = r(652215);
let o = (e, t, r) => {
    let [o, c] = a.useState(e),
        [d, u] = a.useState(Date.now()),
        [_] = a.useState(Date.now()),
        p = a.useCallback(
            (e) => {
                i.default.track(s.HAw.CANCELLATION_FLOW_STEP, {
                    from_step: l.T[o],
                    to_step: l.T[e],
                    step_duration_ms: Date.now() - d,
                    flow_duration_ms: Date.now() - _,
                    location_stack: r,
                    ...(0, n.j)(t),
                }),
                    c(e),
                    u(Date.now());
            },
            [r, _, d, o, t],
        );
    return [o, p, d, _];
};
