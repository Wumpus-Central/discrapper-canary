let i = /\r\n|[\r\n]/g;
n.d(
    t,
    {},
    {
        A: function (e, t) {
            return ((e = e.replace(i, " ")), t && (e = e.trim()), e);
        },
    },
);
