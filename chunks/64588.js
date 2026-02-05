a.d(e, { U: () => u });
var n = a(64700),
    r = a(954571),
    s = a(501957),
    i = a(473702),
    l = a(652215);
let u = (t, e, a) => {
    let [u, c] = n.useState(t),
        [o, d] = n.useState(Date.now()),
        [m] = n.useState(Date.now()),
        _ = n.useCallback(
            (t) => {
                r.default.track(l.HAw.CANCELLATION_FLOW_STEP, {
                    from_step: i.T[u],
                    to_step: i.T[t],
                    step_duration_ms: Date.now() - o,
                    flow_duration_ms: Date.now() - m,
                    location_stack: a,
                    ...(0, s.j)(e),
                }),
                    c(t),
                    d(Date.now());
            },
            [a, m, o, u, e],
        );
    return [u, _, o, m];
};
