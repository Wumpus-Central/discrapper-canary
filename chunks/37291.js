n.d(t, {
    Z: () => l,
    p: () => s
}),
    n(47120);
var a = n(238675);
let l = Object.entries(a.sJ)
        .map((e) => {
            let [t, n] = e;
            return {
                label: t,
                value: n
            };
        })
        .filter(function (e) {
            return 'string' != typeof e.value;
        }),
    s = Object.entries(a.fw).map((e) => {
        let [t, n] = e;
        return {
            label: t,
            value: n
        };
    });
