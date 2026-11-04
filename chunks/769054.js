var i = n(637450),
    r = n(102609);
let a = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: i.FZ.OVERRIDE };
n.d(
    t,
    {},
    {
        h: function (e) {
            return e.system !== r.l5.APEX ? e.variants : [a].concat(e.variants);
        },
    },
);
