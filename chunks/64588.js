n.d(e, { U: () => l });
var r = n(64700),
    a = n(954571),
    o = n(501957),
    i = n(473702),
    s = n(652215);
let l = (t, e, n) => {
    let [l, _] = r.useState(t),
        [c, u] = r.useState(Date.now()),
        [d] = r.useState(Date.now()),
        m = r.useCallback(
            (t) => {
                a.default.track(s.HAw.CANCELLATION_FLOW_STEP, {
                    from_step: i.T[l],
                    to_step: i.T[t],
                    step_duration_ms: Date.now() - c,
                    flow_duration_ms: Date.now() - d,
                    location_stack: n,
                    ...(0, o.j)(e),
                }),
                    _(t),
                    u(Date.now());
            },
            [n, d, c, l, e],
        );
    return [l, m, c, d];
};
