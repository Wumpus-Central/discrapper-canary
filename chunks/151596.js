let i, r, a;
(n.d(t, { Gk: () => d, DB: () => E, Eq: () => u, AA: () => c, ib: () => _ }), n(284009));
var s = n(155718);
let l = {
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
var o = n(257120);
function d(e) {
    return null == e
        ? []
        : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()));
}
function c(e, t) {
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
function u(e, t) {
    return null == e[t] ? null : c(e, t);
}
function _(e, t) {
    if (e !== a) {
        a = e;
        let { group: t, decimal: n } = l[e] ?? l["en-US"];
        ((i = RegExp(o.A.escape(t), "g")), (r = RegExp(o.A.escape(n), "g")));
    }
    return t.replace(i, "").replace(r, ".");
}
function E(e, t) {
    let n = {};
    for (let i of t) {
        let t = e.options?.find((e) => e.name === i.name);
        i.type !== s.n4.ATTACHMENT && (t?.autocomplete || (n[i.name] = i));
    }
    return n;
}
n(73510);
