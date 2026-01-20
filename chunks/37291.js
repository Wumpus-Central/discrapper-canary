l.d(t, {
    Z: () => i,
    p: () => n,
}),
    l(388685);
var a = l(238675);
let i = Object.entries(a.sJ)
        .map((e) => {
            let [t, l] = e;
            return {
                id: l.toString(),
                label: t,
                value: l,
            };
        })
        .filter(function (e) {
            return "string" != typeof e.value;
        }),
    n = Object.entries(a.fw).map((e) => {
        let [t, l] = e;
        return {
            id: l,
            label: t,
            value: l,
        };
    });
