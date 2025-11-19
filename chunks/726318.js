_.d(e, { r: () => r });
var a = _(101284);
let r = (0, _(151122)._I)(() => {
    let t = 1000 * (0, a.ph)();
    return {
        name: "SessionTiming",
        processEvent(e) {
            let _ = 1000 * (0, a.ph)();
            return {
                ...e,
                extra: {
                    ...e.extra,
                    "session:start": t,
                    "session:duration": _ - t,
                    "session:end": _,
                },
            };
        },
    };
});
