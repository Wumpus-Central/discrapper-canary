n.d(t, { A: () => d });
var a = n(284009),
    r = n.n(a),
    l = n(451909),
    i = n(963307),
    o = n(576705),
    s = n(652215);
let c = new RegExp(/@(:?everyone|here)/);
function u(e, t) {
    let n = 0;
    return t.isThread()
        ? (t.memberCount ?? 0)
        : (i.Ay.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
              ("@everyone" === e || t.id !== s.clD.OFFLINE) && (n += t.count);
          }),
          n);
}
let d = {
    shouldShowEveryoneGuard: function (e, t) {
        let n = t.getGuildId();
        return r()(n, "isGuildChannel with null guildId"), u(e, t) > 30 && o.A.can(s.xBc.MENTION_EVERYONE, t);
    },
    everyoneMemberCount: u,
    extractEveryoneRole: function (e, t) {
        for (let n of l.Ay.parsePreprocessor(t, e)) {
            let e = (function e(t) {
                if ("string" == typeof t.content) {
                    if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
                    let e = t.content?.match(c);
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
