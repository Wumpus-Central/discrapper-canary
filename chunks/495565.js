n.d(t, { r: () => l }), n(321073);
var a = n(64700),
    r = n(575593),
    i = n(985018);
let s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return i.intl.formatToPlainString(i.t["/0Yndu"], { num: e.bundledProducts?.length });
        let n = e.bundledProducts ?? [],
            a = [],
            s = !1;
        for (let e of n)
            switch (e.type) {
                case r.R.AVATAR_DECORATION:
                    a.push(i.intl.formatToPlainString(i.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case r.R.PROFILE_EFFECT:
                    a.push(i.intl.formatToPlainString(i.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case r.R.NAMEPLATE:
                    a.push(i.intl.formatToPlainString(i.t["2keXky"], { itemName: e.name })), (s = !0);
            }
        if (s) {
            let e = a.join(", ").replace(/, ([^,]*)$/, " & $1");
            return i.intl.formatToPlainString(i.t.Ofrqj6, { joinedItems: e });
        }
        let l = a.join(" & ");
        return i.intl.formatToPlainString(i.t.Ofrqj6, { joinedItems: l });
    },
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, a.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === r.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = s(e, t);
                    return e.summary.replace("{joinedItems}", n);
                }
                return e.summary;
            }
            switch (e?.type) {
                case r.R.AVATAR_DECORATION:
                    return i.intl.string(i.t["3lv7q2"]);
                case r.R.PROFILE_EFFECT:
                    return i.intl.string(i.t.VhJL72);
                case r.R.NAMEPLATE:
                    return i.intl.string(i.t.ik37EZ);
                case r.R.PROFILE_FRAME:
                    return i.intl.string(i.t.fWzWPp);
                case r.R.BUNDLE:
                    return s(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
