n.d(t, {
    BF: () => d,
    QA: () => u,
    cp: () => c
});
var r = n(367907),
    l = n(368859),
    o = n(626135),
    i = n(135899),
    a = n(981631),
    s = n(943702);
function c(e) {
    return ((0, l.Z)(e) && e.messageReference.guild_id === i.M_) || (null != e.author && e.author.id === i.c9);
}
function u() {
    return s;
}
let d = (e) => {
    o.default.track(
        a.rMx.USER_FLOW_TRANSITION,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                flow_type: i.tA,
                from_step: e.fromStep,
                to_step: e.toStep
            },
            (0, r.hH)(e.guildId)
        )
    );
};
