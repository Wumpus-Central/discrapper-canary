i.d(n, { Z: () => c }), i(47120);
var t = i(192379),
    l = i(881052),
    a = i(430927),
    r = i(610665);
let s = {
    onSuccess: () => {},
    permissionOverwrites: []
};
function c() {
    let [e, n] = t.useState(!1),
        [i, c] = t.useState(null);
    return [
        async function (e, i) {
            let { onSuccess: t = s.onSuccess, permissionOverwrites: o = s.permissionOverwrites } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
            n(!0);
            try {
                await r.GV(e, o), await r.iQ(e, i), await (0, a.o)(e, t), await (0, a.T)(e, t), n(!1);
            } catch (e) {
                c(new l.Hx(e)), n(!1);
            }
            n(!1);
        },
        {
            loading: e,
            error: i
        }
    ];
}
