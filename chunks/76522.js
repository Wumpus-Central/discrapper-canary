"use strict";
n.d(t, { A: () => d });
var r = n(284009),
    i = n.n(r),
    s = n(451909),
    a = n(963307),
    o = n(576705),
    l = n(652215);
let u = new RegExp(/@(:?everyone|here)/);
function c(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (a.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== l.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
let d = {
    shouldShowEveryoneGuard: function (e, t) {
        let n = t.getGuildId();
        return i()(n, "isGuildChannel with null guildId"), c(e, t) > 30 && o.A.can(l.xBc.MENTION_EVERYONE, t);
    },
    everyoneMemberCount: c,
    extractEveryoneRole: function (e, t) {
        for (let n of s.Ay.parsePreprocessor(t, e)) {
            let e = (function e(t) {
                if ("string" == typeof t.content) {
                    if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                    let e = t.content?.match(u);
                    if (null != e) {
                        let [t] = e;
                        return t;
                    }
                } else if (Array.isArray(t.content))
                    for (let n of t.content) {
                        let t = e(n);
                        if (null != t) return t;
                    }
                return null;
            })(n);
            if (null != e) return e;
        }
        return null;
    },
};
