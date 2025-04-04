let r, i, o;
n.d(t, {
    AS: () => f,
    Dw: () => _,
    KF: () => u,
    OU: () => c,
    li: () => d
}),
    n(566702),
    n(757143),
    n(301563),
    n(47120),
    n(474991),
    n(398202),
    n(512722);
var a = n(911969),
    s = n(702813),
    l = n(226951);
function c(e) {
    return null == e ? [] : e.filter((t, n) => 'text' !== t.type || (n > 0 && n < e.length - 1 ? '' !== t.text : '' !== t.text.trim()));
}
n(689079);
function u(e, t) {
    let n = e[t],
        r = '';
    for (let e of n)
        switch (e.type) {
            case 'text':
            case 'textMention':
                r += e.text;
                break;
            case 'userMention':
                r += '<@'.concat(e.userId, '>');
                break;
            case 'channelMention':
                r += '<#'.concat(e.channelId, '>');
                break;
            case 'roleMention':
                r += '<@&'.concat(e.roleId, '>');
                break;
            case 'emoji':
                r += e.surrogate;
                break;
            case 'customEmoji':
                r += '<'
                    .concat(e.animated ? 'a' : '', ':')
                    .concat(e.name.replace(/:/g, '').split('~')[0], ':')
                    .concat(e.emojiId, '>');
        }
    return r;
}
function d(e, t) {
    return null == e[t] ? null : u(e, t);
}
function f(e, t) {
    if (e !== o) {
        var n;
        o = e;
        let { group: t, decimal: a } = null != (n = s.L[e]) ? n : s.L['en-US'];
        (r = RegExp(l.Z.escape(t), 'g')), (i = RegExp(l.Z.escape(a), 'g'));
    }
    return t.replace(r, '').replace(i, '.');
}
function _(e, t) {
    let n = {};
    for (let i of t) {
        var r;
        let t = null == (r = e.options) ? void 0 : r.find((e) => e.name === i.name);
        i.type !== a.jw.ATTACHMENT && ((null != t && t.autocomplete) || (n[i.name] = i));
    }
    return n;
}
