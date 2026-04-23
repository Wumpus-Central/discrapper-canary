n.d(t, { r: () => s }), n(321073);
var r = n(64700),
    i = n(575593),
    a = n(985018);
let l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return a.intl.formatToPlainString(a.t["/0Yndu"], { num: e.bundledProducts?.length });
        let n = e.bundledProducts ?? [],
            r = [],
            l = !1;
        for (let e of n)
            switch (e.type) {
                case i.R.AVATAR_DECORATION:
                    r.push(a.intl.formatToPlainString(a.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case i.R.PROFILE_EFFECT:
                    r.push(a.intl.formatToPlainString(a.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case i.R.NAMEPLATE:
                    r.push(a.intl.formatToPlainString(a.t["2keXky"], { itemName: e.name })), (l = !0);
            }
        if (l) {
            let e = r.join(", ").replace(/, ([^,]*)$/, " & $1");
            return a.intl.formatToPlainString(a.t.Ofrqj6, { joinedItems: e });
        }
        let s = r.join(" & ");
        return a.intl.formatToPlainString(a.t.Ofrqj6, { joinedItems: s });
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === i.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = l(e, t);
                    return e.summary.replace("{joinedItems}", n);
                }
                return e.summary;
            }
            switch (e?.type) {
                case i.R.AVATAR_DECORATION:
                    return a.intl.string(a.t["3lv7q2"]);
                case i.R.PROFILE_EFFECT:
                    return a.intl.string(a.t.VhJL72);
                case i.R.NAMEPLATE:
                    return a.intl.string(a.t.ik37EZ);
                case i.R.PROFILE_FRAME:
                    return a.intl.string(a.t.fWzWPp);
                case i.R.BUNDLE:
                    return l(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
