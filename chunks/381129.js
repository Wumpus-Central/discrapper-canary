var i = r(47120);
var a = r(512722),
    s = r.n(a),
    o = r(957730),
    l = r(662594),
    u = r(496675),
    c = r(981631);
let d = new RegExp(/@(:?everyone|here)/),
    f = 30;
function _(e, n) {
    let r = n.getGuildId();
    return s()(r, 'isGuildChannel with null guildId'), h(e, n) > f && u.Z.can(c.Plq.MENTION_EVERYONE, n);
}
function h(e, n) {
    let r = 0;
    if (n.isThread()) {
        var i;
        return null !== (i = n.memberCount) && void 0 !== i ? i : 0;
    }
    return (
        l.ZP.getProps(n.getGuildId(), n.id).groups.forEach((n) => {
            ('@everyone' === e || n.id !== c.Skl.OFFLINE) && (r += n.count);
        }),
        r
    );
}
function p(e) {
    if ('string' == typeof e.content) {
        var n;
        if ('inlineCode' === e.type || 'codeBlock' === e.type) return null;
        let r = null === (n = e.content) || void 0 === n ? void 0 : n.match(d);
        if (null != r) {
            let [e] = r;
            return e;
        }
    } else if (Array.isArray(e.content))
        for (let n of e.content) {
            let e = p(n);
            if (null != e) return e;
        }
    return null;
}
function m(e, n) {
    for (let r of o.ZP.parsePreprocessor(n, e)) {
        let e = p(r);
        if (null != e) return e;
    }
    return null;
}
n.Z = {
    shouldShowEveryoneGuard: _,
    everyoneMemberCount: h,
    extractEveryoneRole: m
};
