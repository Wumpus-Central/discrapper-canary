"use strict";
n.d(t, { i: () => o });
var i = n(64700),
    a = n(17928),
    r = n(287809),
    s = n(403362),
    l = n(427262),
    c = n(985018);
function o(e) {
    let t = (0, a.yK)([r.default], () =>
        e.recipients
            .map((e) => r.default.getUser(e))
            .filter(s.Vq)
            .map((e) => l.Ay.getName(e)),
    );
    return i.useMemo(() => {
        if ("" === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return c.intl.formatToPlainString(c.t["J+Wpst"], { first: t[0] });
        if (2 === t.length) return c.intl.formatToPlainString(c.t.gwRP0Y, { first: t[0], second: t[1] });
        if (3 === t.length) return c.intl.formatToPlainString(c.t.QDB5et, { first: t[0], second: t[1], third: t[2] });
        let n = t.length - 3;
        return c.intl.formatToPlainString(c.t.VYfueb, { first: t[0], second: t[1], third: t[2], count: n });
    }, [e, t]);
}
