n.d(t, { N: () => c, i: () => o });
var l = n(136722),
    i = n(495273),
    s = n(34457),
    r = n(488926),
    a = n(652215);
function o(e) {
    return [...e].sort(i.uh).map((e) => (0, i.B4)(e));
}
function c(e, t, n) {
    return e.filter(
        (e) =>
            (0, s._m)(e, a.xBc.ADMINISTRATOR) ||
            ((e, t, n) => {
                if (null == e.id) return !1;
                let i = r.aH({ forceRoles: { [e.id]: e }, context: n });
                return l.zy(i, t);
            })(e, n, t),
    );
}
