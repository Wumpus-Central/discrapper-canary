var i = n(164636),
    r = n(696451);
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Ay],
        [i] = n,
        a = null != t && null != e ? i.getMember(t, e.id) : null;
    return a?.avatarDecoration ?? e?.avatarDecoration;
}
n.d(
    t,
    {},
    {
        U: a,
        Z: function (e, t) {
            return (0, i.bG)([r.Ay], () => a(e, t, [r.Ay]));
        },
    },
);
