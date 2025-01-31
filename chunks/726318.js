a.d(e, { r: () => n });
var r = a(101284);
let n = (0, a(151122)._I)(() => {
    let t = 1000 * (0, r.ph)();
    return {
        name: 'SessionTiming',
        processEvent(e) {
            let a = 1000 * (0, r.ph)();
            return {
                ...e,
                extra: {
                    ...e.extra,
                    'session:start': t,
                    'session:duration': a - t,
                    'session:end': a
                }
            };
        }
    };
});
