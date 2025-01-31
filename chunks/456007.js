let i, r, a;
n.d(t, {
    AS: () => f,
    Dw: () => _,
    KF: () => c,
    OU: () => u,
    li: () => d
}),
    n(757143),
    n(47120),
    n(512722);
var s = n(911969),
    o = n(702813),
    l = n(226951);
function u(e) {
    return null == e ? [] : e.filter((t, n) => 'text' !== t.type || (n > 0 && n < e.length - 1 ? '' !== t.text : '' !== t.text.trim()));
}
n(689079);
function c(e, t) {
    let n = e[t],
        i = '';
    for (let e of n)
        switch (e.type) {
            case 'text':
            case 'textMention':
                i += e.text;
                break;
            case 'userMention':
                i += '<@'.concat(e.userId, '>');
                break;
            case 'channelMention':
                i += '<#'.concat(e.channelId, '>');
                break;
            case 'roleMention':
                i += '<@&'.concat(e.roleId, '>');
                break;
            case 'emoji':
                i += e.surrogate;
                break;
            case 'customEmoji':
                i += '<'
                    .concat(e.animated ? 'a' : '', ':')
                    .concat(e.name.replace(/:/g, '').split('~')[0], ':')
                    .concat(e.emojiId, '>');
        }
    return i;
}
function d(e, t) {
    return null == e[t] ? null : c(e, t);
}
function f(e, t) {
    if (e !== a) {
        var n;
        a = e;
        let { group: t, decimal: s } = null !== (n = o.L[e]) && void 0 !== n ? n : o.L['en-US'];
        (i = RegExp(l.Z.escape(t), 'g')), (r = RegExp(l.Z.escape(s), 'g'));
    }
    return t.replace(i, '').replace(r, '.');
}
function _(e, t) {
    let n = {};
    for (let r of t) {
        var i;
        let t = null === (i = e.options) || void 0 === i ? void 0 : i.find((e) => e.name === r.name);
        r.type !== s.jw.ATTACHMENT && (null == t || !t.autocomplete) && (n[r.name] = r);
    }
    return n;
}
