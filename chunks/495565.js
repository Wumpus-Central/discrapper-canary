n.d(t, { r: () => s }), n(321073), n(896048), n(747238), n(812715);
var r = n(64700),
    l = n(575593),
    a = n(985018);
let i = function (e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (r)
            return a.intl.formatToPlainString(a.t["/0Yndu"], {
                num: null == (n = e.bundledProducts) ? void 0 : n.length,
            });
        let i = null != (t = e.bundledProducts) ? t : [],
            s = [],
            c = !1;
        for (let e of i)
            switch (e.type) {
                case l.R.AVATAR_DECORATION:
                    s.push(a.intl.formatToPlainString(a.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case l.R.PROFILE_EFFECT:
                    s.push(a.intl.formatToPlainString(a.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case l.R.NAMEPLATE:
                    s.push(a.intl.formatToPlainString(a.t["2keXky"], { itemName: e.name })), (c = !0);
            }
        if (c) {
            let e = s.join(", ").replace(/, ([^,]*)$/, " & $1");
            return a.intl.formatToPlainString(a.t.Ofrqj6, { joinedItems: e });
        }
        let o = s.join(" & ");
        return a.intl.formatToPlainString(a.t.Ofrqj6, { joinedItems: o });
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        return (0, r.useMemo)(() => {
            if (null != n)
                return 3 === n
                    ? a.intl.string(a.t.QUjmjp)
                    : 7 === n
                      ? a.intl.string(a.t.yPxJA2)
                      : a.intl.string(a.t["o+VpXZ"]);
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === l.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = i(e, t);
                    return e.summary.replace("{joinedItems}", n);
                }
                return e.summary;
            }
            switch (null == e ? void 0 : e.type) {
                case l.R.AVATAR_DECORATION:
                    return a.intl.string(a.t["3lv7q2"]);
                case l.R.PROFILE_EFFECT:
                    return a.intl.string(a.t.VhJL72);
                case l.R.NAMEPLATE:
                    return a.intl.string(a.t.ik37EZ);
                case l.R.BUNDLE:
                    return i(e, t);
                default:
                    return "";
            }
        }, [e, t, n]);
    };
