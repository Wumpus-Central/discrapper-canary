n.d(t, { Z: () => _ }), n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(957730),
    s = n(662594),
    o = n(496675),
    l = n(981631);
let u = new RegExp(/@(:?everyone|here)/),
    c = 30;
function d(e, t) {
    let n = 0;
    if (t.isThread()) {
        var i;
        return null !== (i = t.memberCount) && void 0 !== i ? i : 0;
    }
    return (
        s.ZP.getProps(t.getGuildId(), t.id).groups.forEach((t) => {
            ('@everyone' === e || t.id !== l.Skl.OFFLINE) && (n += t.count);
        }),
        n
    );
}
function f(e) {
    if ('string' == typeof e.content) {
        var t;
        if ('inlineCode' === e.type || 'codeBlock' === e.type) return null;
        let n = null === (t = e.content) || void 0 === t ? void 0 : t.match(u);
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
        return r()(n, 'isGuildChannel with null guildId'), d(e, t) > c && o.Z.can(l.Plq.MENTION_EVERYONE, t);
    },
    everyoneMemberCount: d,
    extractEveryoneRole: function (e, t) {
        for (let n of a.ZP.parsePreprocessor(t, e)) {
            let e = f(n);
            if (null != e) return e;
        }
        return null;
    }
};
