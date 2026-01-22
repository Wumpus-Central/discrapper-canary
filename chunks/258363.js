let r, i, a;
n.d(t, {
    AA: () => u,
    DB: () => p,
    Eq: () => d,
    Gk: () => c,
    ib: () => f,
}),
    n(733351),
    n(747238),
    n(812715),
    n(896048),
    n(591487),
    n(727858),
    n(284009);
var s = n(155718),
    o = n(25662),
    l = n(257120);
function c(e) {
    return null == e
        ? []
        : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()));
}
n(73510);
function u(e, t) {
    let n = e[t],
        r = "";
    for (let e of n)
        switch (e.type) {
            case "text":
            case "textMention":
                r += e.text;
                break;
            case "userMention":
                r += "<@".concat(e.userId, ">");
                break;
            case "channelMention":
                r += "<#".concat(e.channelId, ">");
                break;
            case "roleMention":
                r += "<@&".concat(e.roleId, ">");
                break;
            case "emoji":
                r += e.surrogate;
                break;
            case "customEmoji":
                r += "<"
                    .concat(e.animated ? "a" : "", ":")
                    .concat(e.name.replace(/:/g, "").split("~")[0], ":")
                    .concat(e.emojiId, ">");
        }
    return r;
}
function d(e, t) {
    return null == e[t] ? null : u(e, t);
}
function f(e, t) {
    if (e !== a) {
        var n;
        a = e;
        let { group: t, decimal: s } = null != (n = o.i[e]) ? n : o.i["en-US"];
        (r = RegExp(l.A.escape(t), "g")), (i = RegExp(l.A.escape(s), "g"));
    }
    return t.replace(r, "").replace(i, ".");
}
function p(e, t) {
    let n = {};
    for (let i of t) {
        var r;
        let t = null == (r = e.options) ? void 0 : r.find((e) => e.name === i.name);
        i.type !== s.n4.ATTACHMENT && ((null != t && t.autocomplete) || (n[i.name] = i));
    }
    return n;
}
