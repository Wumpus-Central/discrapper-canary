n.d(t, { Z: () => _ }), n(474991), n(398202), n(301563), n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(957730),
    a = n(662594),
    s = n(496675),
    l = n(981631);
let c = new RegExp(/@(:?everyone|here)/),
    u = 30;
function d(e, t) {
    let n = 0;
    if (t.isThread()) {
        var r;
        return null != (r = t.memberCount) ? r : 0;
    }
    return (
        a.ZP.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
            ('@everyone' === e || t.id !== l.Skl.OFFLINE) && (n += t.count);
        }),
        n
    );
}
function f(e) {
    if ('string' == typeof e.content) {
        var t;
        if ('inlineCode' === e.type || 'codeBlock' === e.type) return null;
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
let _ = {
    shouldShowEveryoneGuard: function (e, t) {
        let n = t.getGuildId();
        return i()(n, 'isGuildChannel with null guildId'), d(e, t) > u && s.Z.can(l.Plq.MENTION_EVERYONE, t);
    },
    everyoneMemberCount: d,
    extractEveryoneRole: function (e, t) {
        for (let n of o.ZP.parsePreprocessor(t, e)) {
            let e = f(n);
            if (null != e) return e;
        }
        return null;
    }
};
