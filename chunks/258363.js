"use strict";
let i, r, s;
n.r(t),
    n.d(t, {
        filterEmpty: () => c,
        getBoolean: () => E,
        getChannelId: () => m,
        getInitialValuesFromInteractionOptions: () => O,
        getOptionalBoolean: () => h,
        getOptionalChannelId: () => f,
        getOptionalRoleId: () => p,
        getOptionalString: () => S,
        getOptionalUserId: () => A,
        getRoleId: () => I,
        getString: () => T,
        getUserId: () => g,
        normalizeNumericString: () => N,
    });
var a = n(284009),
    o = n.n(a),
    l = n(155718),
    _ = n(25662),
    d = n(257120),
    u = n(73510);
function c(e) {
    return null == e
        ? []
        : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()));
}
function E(e, t) {
    let n = c(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "text", "First value is not text"),
        n[0].text === u.NH
    );
}
function h(e, t) {
    return null == e[t] ? null : E(e, t);
}
function m(e, t) {
    let n = c(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "channelMention", "First value is not a channel mention"),
        n[0].channelId
    );
}
function f(e, t) {
    return null == e[t] ? null : m(e, t);
}
function g(e, t) {
    let n = c(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "userMention", "First value is not a user mention"),
        n[0].userId
    );
}
function A(e, t) {
    return null == e[t] ? null : g(e, t);
}
function I(e, t) {
    let n = c(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "roleMention", "First value is not a role mention"),
        n[0].roleId
    );
}
function p(e, t) {
    return null == e[t] ? null : I(e, t);
}
function T(e, t) {
    let n = e[t],
        i = "";
    for (let e of n)
        switch (e.type) {
            case "text":
            case "textMention":
                i += e.text;
                break;
            case "userMention":
                i += `<@${e.userId}>`;
                break;
            case "channelMention":
                i += `<#${e.channelId}>`;
                break;
            case "roleMention":
                i += `<@&${e.roleId}>`;
                break;
            case "emoji":
                i += e.surrogate;
                break;
            case "customEmoji":
                i += `<${e.animated ? "a" : ""}:${e.name.replace(/:/g, "").split("~")[0]}:${e.emojiId}>`;
        }
    return i;
}
function S(e, t) {
    return null == e[t] ? null : T(e, t);
}
function N(e, t) {
    if (e !== s) {
        s = e;
        let { group: t, decimal: n } = _.i[e] ?? _.i["en-US"];
        (i = RegExp(d.A.escape(t), "g")), (r = RegExp(d.A.escape(n), "g"));
    }
    return t.replace(i, "").replace(r, ".");
}
function O(e, t) {
    let n = {};
    for (let i of t) {
        let t = e.options?.find((e) => e.name === i.name);
        i.type !== l.n4.ATTACHMENT && (t?.autocomplete || (n[i.name] = i));
    }
    return n;
}
