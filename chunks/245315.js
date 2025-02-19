r.d(t, {
    BF: () => m,
    QA: () => u,
    cp: () => s
});
var n = r(367907),
    i = r(368859),
    a = r(626135),
    l = r(135899),
    o = r(981631),
    c = r(943702);
function s(e) {
    return ((0, i.Z)(e) && e.messageReference.guild_id === l.M_) || (null != e.author && e.author.id === l.c9);
}
function u() {
    return c;
}
let m = (e) => {
    a.default.track(
        o.rMx.USER_FLOW_TRANSITION,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                flow_type: l.tA,
                from_step: e.fromStep,
                to_step: e.toStep
            },
            (0, n.hH)(e.guildId)
        )
    );
};
