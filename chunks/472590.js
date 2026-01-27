n.d(t, {
    p: () => l,
});
var r = n(659051),
    i = n(652215);

function l(e, t, n, l) {
    return !t.hasAnyAfter(
        e,
        (e) => {
            var t;
            return (
                null != e.activity &&
                (null == (t = e.application) ? void 0 : t.id) === n &&
                e.activity.type === i.xL.JOIN &&
                !(0, r.A)(l, e, n)
            );
        },
        25,
    );
}
