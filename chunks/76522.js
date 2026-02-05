"use strict";
n.d(t, { A: () => f });
var r = n(284009),
    i = n.n(r),
    a = n(451909),
    s = n(963307),
    o = n(576705),
    l = n(652215);
let u = new RegExp(/@(:?everyone|here)/),
    c = 30;
function d(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (s.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== l.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
function _(e) {
    if ("string" == typeof e.content) {
        if ("inlineCode" === e.type || "codeBlock" === e.type) return null;
        let t = e.content?.match(u);
        if (null != t) {
            let [e] = t;
            return e;
        }
    } else if (Array.isArray(e.content))
        for (let t of e.content) {
            let e = _(t);
            if (null != e) return e;
        }
    return null;
}
let f = {
    shouldShowEveryoneGuard: function (e, t) {
        let n = t.getGuildId();
        return i()(n, "isGuildChannel with null guildId"), d(e, t) > c && o.A.can(l.xBc.MENTION_EVERYONE, t);
    },
    everyoneMemberCount: d,
    extractEveryoneRole: function (e, t) {
        for (let n of a.Ay.parsePreprocessor(t, e)) {
            let e = _(n);
            if (null != e) return e;
        }
        return null;
    },
};
