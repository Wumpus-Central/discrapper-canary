"use strict";
let i, r, s;
n.r(t),
    n.d(t, {
        getBoolean: () => f,
        getUserId: () => m,
        getOptionalRoleId: () => I,
        getOptionalString: () => S,
        getOptionalUserId: () => g,
        filterEmpty: () => _,
        getOptionalBoolean: () => h,
        getOptionalChannelId: () => E,
        getRoleId: () => A,
        normalizeNumericString: () => N,
        getInitialValuesFromInteractionOptions: () => y,
        getString: () => T,
        getChannelId: () => p,
    });
var a = n(284009),
    o = n.n(a),
    l = n(155718);
let u = {
    __proto__: null,
    bg: { group: " ", decimal: "," },
    cs: { group: " ", decimal: "," },
    da: { group: ".", decimal: "," },
    de: { group: ".", decimal: "," },
    el: { group: ".", decimal: "," },
    "en-GB": { group: ",", decimal: "." },
    "en-US": { group: ",", decimal: "." },
    "es-ES": { group: ".", decimal: "," },
    "es-419": { group: ".", decimal: "," },
    fi: { group: " ", decimal: "," },
    fr: { group: "\u202F", decimal: "," },
    hi: { group: ",", decimal: "." },
    hr: { group: ".", decimal: "," },
    hu: { group: " ", decimal: "," },
    it: { group: ".", decimal: "," },
    ja: { group: ",", decimal: "." },
    ko: { group: ",", decimal: "." },
    lt: { group: " ", decimal: "," },
    nl: { group: ".", decimal: "," },
    no: { group: " ", decimal: "," },
    pl: { group: " ", decimal: "," },
    "pt-BR": { group: ".", decimal: "," },
    ro: { group: ".", decimal: "," },
    ru: { group: " ", decimal: "," },
    "sv-SE": { group: " ", decimal: "," },
    th: { group: ",", decimal: "." },
    tr: { group: ".", decimal: "," },
    uk: { group: " ", decimal: "," },
    vi: { group: ".", decimal: "," },
    "zh-CN": { group: ",", decimal: "." },
    "zh-TW": { group: ",", decimal: "." },
};
var c = n(257120),
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
function h(e, t) {
    return null == e[t] ? null : f(e, t);
}
function p(e, t) {
    let n = _(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "channelMention", "First value is not a channel mention"),
        n[0].channelId
    );
}
function E(e, t) {
    return null == e[t] ? null : p(e, t);
}
function m(e, t) {
    let n = _(e[t]);
    return (
        o()(1 === n.length, "Contains multiple values"),
        o()(n[0]?.type === "userMention", "First value is not a user mention"),
        n[0].userId
    );
}
function g(e, t) {
    return null == e[t] ? null : m(e, t);
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
        let { group: t, decimal: n } = u[e] ?? u["en-US"];
        (i = RegExp(c.A.escape(t), "g")), (r = RegExp(c.A.escape(n), "g"));
    }
    return t.replace(i, "").replace(r, ".");
}
function y(e, t) {
    let n = {};
    for (let i of t) {
        let t = e.options?.find((e) => e.name === i.name);
        i.type !== l.n4.ATTACHMENT && (t?.autocomplete || (n[i.name] = i));
    }
    return n;
}
