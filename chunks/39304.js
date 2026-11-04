n(321073);
let i = [];
n.d(
    t,
    {},
    {
        HV: function () {
            return i.length > 0 ? i[i.length - 1] : null;
        },
        WQ: function (e) {
            for (i.push(e); i.length > 10;) i.shift();
        },
        lK: function () {
            return i.join(" -> ");
        },
    },
);
