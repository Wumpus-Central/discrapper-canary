n.d(t, {
    BF: () => d,
    QA: () => u,
    cp: () => c
});
var r = n(367907),
    i = n(368859),
    l = n(626135),
    s = n(135899),
    a = n(981631),
    o = n(943702);
function c(e) {
    return ((0, i.Z)(e) && e.messageReference.guild_id === s.M_) || (null != e.author && e.author.id === s.c9);
}
function u() {
    return o;
}
let d = (e) => {
    l.default.track(
        a.rMx.USER_FLOW_TRANSITION,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {
                flow_type: s.tA,
                from_step: e.fromStep,
                to_step: e.toStep
            },
            (0, r.hH)(e.guildId)
        )
    );
};
