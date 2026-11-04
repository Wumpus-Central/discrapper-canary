var i = n(233444),
    r = n(287809),
    a = n(652215);
function s(e) {
    return r.default.getUser(e)?.hasFlag(a.nhx.SPAMMER) ?? !1;
}
n.d(
    t,
    {},
    {
        cx: s,
        iJ: function (e) {
            return void 0 !== e && e.type !== a.rbe.DM;
        },
        kf: function (e) {
            return s(e.author.id) && !(0, i.ER)(e);
        },
    },
);
