e.d(r, { uh: () => l }), e(993408);
var i = e(442759);
function l(t) {
    var r;
    let e;
    return (function (t) {
        let { firstAvatarDecoration: r, firstProfileEffect: e, firstNameplate: i } = t;
        return (null != r && null != e && null == i) || (null != r && null != e && null != i);
    })(
        ((r = t.items),
        {
            firstProfileEffect: (e = new i.Ym(r)).firstProfileEffect,
            firstAvatarDecoration: e.firstAvatarDecoration,
            firstNameplate: e.firstNameplate,
        }),
    );
}
