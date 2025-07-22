(t.d(n, { Z: () => c }), t(388685));
var i = t(73800),
    l = t(881052),
    r = t(430927),
    a = t(610665);
let s = {
    onSuccess: () => {},
    permissionOverwrites: []
};
function c() {
    let [e, n] = i.useState(!1),
        [t, c] = i.useState(null);
    return [
        async function (e, t) {
            let { onSuccess: i = s.onSuccess, permissionOverwrites: o = s.permissionOverwrites } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
            n(!0);
            try {
                (await a.GV(e, o), await a.iQ(e, t), await (0, r.o)(e, i), await (0, r.T)(e, i), n(!1));
            } catch (e) {
                (c(new l.Hx(e)), n(!1));
            }
            n(!1);
        },
        {
            loading: e,
            error: t
        }
    ];
}
