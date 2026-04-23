l.d(t, { K: () => i, m: () => n });
var a = l(943357);
let i = Object.entries(a.Wn)
        .map((e) => {
            let [t, l] = e;
            return { id: l.toString(), label: t, value: l };
        })
        .filter(function (e) {
            return "string" != typeof e.value;
        }),
    n = Object.entries(a.Fo).map((e) => {
        let [t, l] = e;
        return { id: l, label: t, value: l };
    });
