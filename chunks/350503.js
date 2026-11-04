var i = n(873298);
function r(e) {
    return e === i.tI.PERSONAL ? i.tI.PERSONAL : i.tI.GUILD;
}
n.d(
    t,
    {},
    {
        p: function (e, t) {
            return e === i.tI.GUILD || e === i.tI.PERSONAL ? e : r(t);
        },
        v: r,
    },
);
