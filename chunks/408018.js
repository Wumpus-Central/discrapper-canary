"use strict";
function i() {
    return { textValue: "", richValue: [{ type: "line", children: [{ text: "" }] }] };
}
function r(e) {
    return { textValue: e, richValue: a(e) };
}
n.d(t, { N3: () => i, QR: () => o, ur: () => r, x7: () => a });
let s = Object.freeze([Object.freeze({ type: "line", children: Object.freeze([Object.freeze({ text: "" })]) })]);
function a(e) {
    return "" !== e ? e.split("\n").map((e) => ({ type: "line", children: [{ text: e }] })) : s;
}
function o(e) {
    switch (e.type) {
        case "userMention":
            return { type: "userMention", userId: e.userId };
        case "channelMention":
            return { type: "channelMention", channelId: e.channelId };
        case "soundboard":
            return { type: "soundboard", guildId: e.guildId, soundId: e.soundId };
        case "roleMention":
            return { type: "roleMention", roleId: e.roleId };
        case "textMention":
            return { type: "textMention", text: e.name };
        case "emoji":
            return { type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate };
        case "customEmoji":
            return { type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated };
        case "testInlineVoid":
            throw Error("Unable to convert test types");
    }
    return null;
}
