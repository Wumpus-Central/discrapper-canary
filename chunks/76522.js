n.d(t, { A: () => p }), n(591487), n(727858), n(747238), n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(451909),
    s = n(963307),
    o = n(576705),
    l = n(652215);
let c = new RegExp(/@(:?everyone|here)/),
    u = 30;
function d(e, t) {
    let n = 0;
    if (t.isThread()) {
        var r;
        return null != (r = t.memberCount) ? r : 0;
    }
    return (
        s.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
            ("@everyone" === e || t.id !== l.clD.OFFLINE) && (n += t.count);
        }),
        n
    );
}
function f(e) {
    if ("string" == typeof e.content) {
        var t;
        if ("inlineCode" === e.type || "codeBlock" === e.type) return null;
        let n = null == (t = e.content) ? void 0 : t.match(c);
        if (null != n) {
            let [e] = n;
            return e;
        }
    } else if (Array.isArray(e.content))
        for (let t of e.content) {
            let e = f(t);
            if (null != e) return e;
        }
    return null;
}
let p = {
    shouldShowEveryoneGuard: function (e, t) {
        let n = t.getGuildId();
        return i()(n, "isGuildChannel with null guildId"), d(e, t) > u && o.A.can(l.xBc.MENTION_EVERYONE, t);
    },
    everyoneMemberCount: d,
    extractEveryoneRole: function (e, t) {
        for (let n of a.Ay.parsePreprocessor(t, e)) {
            let e = f(n);
            if (null != e) return e;
        }
        return null;
    },
};
