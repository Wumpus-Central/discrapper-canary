var i = n(284009),
    r = n.n(i),
    a = n(274652),
    s = n(292348);
n.d(
    t,
    {},
    {
        Si: function (e, t) {
            r()(e.item.platform === a.x.WEB, "Upload must be in the Web format");
            let n = (0, s.OW)(e, t);
            return Promise.resolve({ file: e.item.file, name: n.filename ?? "" });
        },
        a$: function (e) {
            return !1;
        },
        sm: async function (e) {},
    },
);
