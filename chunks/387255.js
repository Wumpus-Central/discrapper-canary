n.d(t, {
    N: () => o,
    i: () => c,
}),
    n(896048),
    n(638769);
var l = n(136722),
    r = n(495273),
    a = n(34457),
    i = n(488926),
    s = n(652215);

function c(e) {
    return [...e].sort(r.uh).map((e) => (0, r.B4)(e));
}

function o(e, t, n) {
    return e.filter(
        (e) =>
            (0, a._m)(e, s.xBc.ADMINISTRATOR) ||
            ((e, t, n) => {
                if (null == e.id) return !1;
                let r = i.aH({
                    forceRoles: {
                        [e.id]: e,
                    },
                    context: n,
                });
                return l.zy(r, t);
            })(e, n, t),
    );
}
