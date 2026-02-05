"use strict";
let r, i, a;
n.r(t),
    n.d(t, {
        filterEmpty: () => _,
        getBoolean: () => f,
        getChannelId: () => h,
        getInitialValuesFromInteractionOptions: () => v,
        getOptionalBoolean: () => p,
        getOptionalChannelId: () => m,
        getOptionalRoleId: () => I,
        getOptionalString: () => y,
        getOptionalUserId: () => E,
        getRoleId: () => A,
        getString: () => T,
        getUserId: () => g,
        normalizeNumericString: () => S,
    });
var s = n(284009),
    o = n.n(s),
    l = n(155718),
    u = n(25662),
    c = n(257120),
    d = n(73510);
function _(e) {
    return null == e
        ? []
        : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()));
}
function f(e, t) {
    let n = _(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "text", "First value is not text"),
        n[0].text === d.NH
    );
}
function p(e, t) {
    return null == e[t] ? null : f(e, t);
}
function h(e, t) {
    let n = _(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "channelMention", "First value is not a channel mention"),
        n[0].channelId
    );
}
function m(e, t) {
    return null == e[t] ? null : h(e, t);
}
function g(e, t) {
    let n = _(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "userMention", "First value is not a user mention"),
        n[0].userId
    );
}
function E(e, t) {
    return null == e[t] ? null : g(e, t);
}
function A(e, t) {
    let n = _(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "roleMention", "First value is not a role mention"),
        n[0].roleId
    );
}
function I(e, t) {
    return null == e[t] ? null : A(e, t);
}
function T(e, t) {
    let n = e[t],
        r = "";
    for (let e of n)
        switch (e.type) {
            case "text":
            case "textMention":
                r += e.text;
                break;
            case "userMention":
                r += `<@${e.userId}>`;
                break;
            case "channelMention":
                r += `<#${e.channelId}>`;
                break;
            case "roleMention":
                r += `<@&${e.roleId}>`;
                break;
            case "emoji":
                r += e.surrogate;
                break;
            case "customEmoji":
                r += `<${e.animated ? "a" : ""}:${e.name.replace(/:/g, "").split("~")[0]}:${e.emojiId}>`;
        }
    return r;
}
function y(e, t) {
    return null == e[t] ? null : T(e, t);
}
function S(e, t) {
    if (e !== a) {
        a = e;
        let { group: t, decimal: n } = u.i[e] ?? u.i["en-US"];
        (r = RegExp(c.A.escape(t), "g")), (i = RegExp(c.A.escape(n), "g"));
    }
    return t.replace(r, "").replace(i, ".");
}
function v(e, t) {
    let n = {};
    for (let r of t) {
        let t = e.options?.find((e) => e.name === r.name);
        r.type !== l.n4.ATTACHMENT && (t?.autocomplete || (n[r.name] = r));
    }
    return n;
}
