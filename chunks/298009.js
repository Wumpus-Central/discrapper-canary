l.d(t, {
    A: () => c,
    u: () => d,
});
var r = l(64700),
    n = l(27023),
    s = l(294726),
    i = l(985018);
let a = ["/", "\\\\"];

function d(e) {
    let t = r.useMemo(() => a.some((t) => (null != e ? e : "").includes(t)), [e]);
    return {
        isValid: !t,
        errors: {
            name: t
                ? i.intl.formatToPlainString(s.default.jYZD44, {
                      forbiddenCharacters: a.join(", "),
                  })
                : void 0,
        },
    };
}

function c() {
    let { regionId: e, gameServerInstance: t, name: l, planId: r } = (0, n.bv)(),
        s = "" !== l && "" !== e && void 0 !== r;
    return null != t ? s && (t.name !== l || t.regionId !== e || t.planId !== r) : s;
}
