n.d(t, {
    BF: () => p,
    QA: () => f,
    cp: () => d,
});
var r = n(367907),
    i = n(368859),
    a = n(626135),
    o = n(135899),
    s = n(981631),
    l = n(943702);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e) {
    return ((0, i.Z)(e) && e.messageReference.guild_id === o.M_) || (null != e.author && e.author.id === o.c9);
}
function f() {
    return l;
}
let p = (e) => {
    a.default.track(
        s.rMx.USER_FLOW_TRANSITION,
        u(
            {
                flow_type: o.tA,
                from_step: e.fromStep,
                to_step: e.toStep,
            },
            (0, r.hH)(e.guildId),
        ),
    );
};
