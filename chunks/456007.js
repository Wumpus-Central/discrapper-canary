let i, a, o;
r.d(n, {
    AS: function () {
        return y;
    },
    Dw: function () {
        return b;
    },
    KF: function () {
        return E;
    },
    OU: function () {
        return p;
    },
    li: function () {
        return v;
    }
});
var s = r(757143);
var l = r(47120);
var u = r(512722);
var c = r(911969),
    d = r(702813),
    f = r(226951);
function p(e) {
    return null == e ? [] : e.filter((n, r) => 'text' !== n.type || (r > 0 && r < e.length - 1 ? '' !== n.text : '' !== n.text.trim()));
}
function h(e, n) {
    var r;
    let i = p(e[n]);
    return invariant(1 === i.length, 'Contains multiple values'), invariant((null === (r = i[0]) || void 0 === r ? void 0 : r.type) === 'text', 'First value is not text'), i[0].text === TRUE_OPTION_NAME;
}
r(689079);
function _(e, n) {
    var r;
    let i = p(e[n]);
    return invariant(1 === i.length, 'Contains multiple values'), invariant((null === (r = i[0]) || void 0 === r ? void 0 : r.type) === 'channelMention', 'First value is not a channel mention'), i[0].channelId;
}
function m(e, n) {
    var r;
    let i = p(e[n]);
    return invariant(1 === i.length, 'Contains multiple values'), invariant((null === (r = i[0]) || void 0 === r ? void 0 : r.type) === 'userMention', 'First value is not a user mention'), i[0].userId;
}
function g(e, n) {
    var r;
    let i = p(e[n]);
    return invariant(1 === i.length, 'Contains multiple values'), invariant((null === (r = i[0]) || void 0 === r ? void 0 : r.type) === 'roleMention', 'First value is not a role mention'), i[0].roleId;
}
function E(e, n) {
    let r = e[n],
        i = '';
    for (let e of r)
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
function v(e, n) {
    return null == e[n] ? null : E(e, n);
}
function y(e, n) {
    if (e !== o) {
        var r;
        o = e;
        let { group: n, decimal: s } = null !== (r = d.L[e]) && void 0 !== r ? r : d.L['en-US'];
        (i = RegExp(f.Z.escape(n), 'g')), (a = RegExp(f.Z.escape(s), 'g'));
    }
    return n.replace(i, '').replace(a, '.');
}
function b(e, n) {
    let r = {};
    for (let a of n) {
        var i;
        let n = null === (i = e.options) || void 0 === i ? void 0 : i.find((e) => e.name === a.name);
        if (a.type !== c.jw.ATTACHMENT && (null == n ? !void 0 : !n.autocomplete)) r[a.name] = a;
    }
    return r;
}
