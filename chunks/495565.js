"use strict";
r.d(t, { r: () => l }), r(321073);
var n = r(64700),
    i = r(575593),
    s = r(985018);
let a = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return s.intl.formatToPlainString(s.t["/0Yndu"], { num: e.bundledProducts?.length });
        let r = e.bundledProducts ?? [],
            n = [],
            a = !1;
        for (let e of r)
            switch (e.type) {
                case i.R.AVATAR_DECORATION:
                    n.push(s.intl.formatToPlainString(s.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case i.R.PROFILE_EFFECT:
                    n.push(s.intl.formatToPlainString(s.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case i.R.NAMEPLATE:
                    n.push(s.intl.formatToPlainString(s.t["2keXky"], { itemName: e.name })), (a = !0);
            }
        if (a) {
            let e = n.join(", ").replace(/, ([^,]*)$/, " & $1");
            return s.intl.formatToPlainString(s.t.Ofrqj6, { joinedItems: e });
        }
        let l = n.join(" & ");
        return s.intl.formatToPlainString(s.t.Ofrqj6, { joinedItems: l });
    },
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, n.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === i.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let r = a(e, t);
                    return e.summary.replace("{joinedItems}", r);
                }
                return e.summary;
            }
            switch (e?.type) {
                case i.R.AVATAR_DECORATION:
                    return s.intl.string(s.t["3lv7q2"]);
                case i.R.PROFILE_EFFECT:
                    return s.intl.string(s.t.VhJL72);
                case i.R.NAMEPLATE:
                    return s.intl.string(s.t.ik37EZ);
                case i.R.BUNDLE:
                    return a(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
