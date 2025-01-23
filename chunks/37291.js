n.d(t, {
    Z: function () {
        return r;
    },
    p: function () {
        return l;
    }
}),
    n(47120);
var a = n(238675);
let r = Object.entries(a.sJ)
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
    l = Object.entries(a.fw).map((e) => {
        let [t, n] = e;
        return {
            label: t,
            value: n
        };
    });
