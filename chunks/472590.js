n.d(t, { p: () => s });
var r = n(659051),
    i = n(652215);
let a = 25;
function s(e, t, n, s) {
    return !t.hasAnyAfter(
        e,
        (e) => {
            var t;
            return (
                null != e.activity &&
                (null == (t = e.application) ? void 0 : t.id) === n &&
                e.activity.type === i.xL.JOIN &&
                !(0, r.A)(s, e, n)
            );
        },
        a,
    );
}
