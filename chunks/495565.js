n.d(t, { r: () => s }), n(321073);
var r = n(64700),
    i = n(575593),
    l = n(375708);
let a = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return l.intl.formatToPlainString(l.t["/0Yndu"], { num: e.bundledProducts?.length });
        let n = e.bundledProducts ?? [],
            r = [],
            a = !1;
        for (let e of n)
            switch (e.type) {
                case i.R.AVATAR_DECORATION:
                    r.push(l.intl.formatToPlainString(l.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case i.R.PROFILE_EFFECT:
                    r.push(l.intl.formatToPlainString(l.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case i.R.NAMEPLATE:
                    r.push(l.intl.formatToPlainString(l.t["2keXky"], { itemName: e.name })), (a = !0);
            }
        if (a) {
            let e = r.join(", ").replace(/, ([^,]*)$/, " & $1");
            return l.intl.formatToPlainString(l.t.Ofrqj6, { joinedItems: e });
        }
        let s = r.join(" & ");
        return l.intl.formatToPlainString(l.t.Ofrqj6, { joinedItems: s });
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === i.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = a(e, t);
                    return e.summary.replace("{joinedItems}", n);
                }
                return e.summary;
            }
            switch (e?.type) {
                case i.R.AVATAR_DECORATION:
                    return l.intl.string(l.t["3lv7q2"]);
                case i.R.PROFILE_EFFECT:
                    return l.intl.string(l.t.VhJL72);
                case i.R.NAMEPLATE:
                    return l.intl.string(l.t.ik37EZ);
                case i.R.PROFILE_FRAME:
                    return l.intl.string(l.t.fWzWPp);
                case i.R.BUNDLE:
                    return a(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
