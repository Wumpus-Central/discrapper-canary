function r() {
    return {
        textValue: '',
        richValue: [
            {
                type: 'line',
                children: [{ text: '' }]
            }
        ]
    };
}
function i(e) {
    return {
        textValue: e,
        richValue: a(e)
    };
}
n.d(t, {
    H2: () => r,
    JM: () => a,
    VI: () => s,
    eK: () => i
}),
    n(301563),
    n(411104);
let o = Object.freeze([
    Object.freeze({
        type: 'line',
        children: Object.freeze([Object.freeze({ text: '' })])
    })
]);
function a(e) {
    return '' !== e
        ? e.split('\n').map((e) => ({
              type: 'line',
              children: [{ text: e }]
          }))
        : o;
}
function s(e) {
    switch (e.type) {
        case 'userMention':
            return {
                type: 'userMention',
                userId: e.userId
            };
        case 'channelMention':
            return {
                type: 'channelMention',
                channelId: e.channelId
            };
        case 'soundboard':
            return {
                type: 'soundboard',
                guildId: e.guildId,
                soundId: e.soundId
            };
        case 'roleMention':
            return {
                type: 'roleMention',
                roleId: e.roleId
            };
        case 'textMention':
            return {
                type: 'textMention',
                text: e.name
            };
        case 'emoji':
            return {
                type: 'emoji',
                name: e.emoji.name,
                surrogate: e.emoji.surrogate
            };
        case 'customEmoji':
            return {
                type: 'customEmoji',
                emojiId: e.emoji.emojiId,
                name: e.emoji.name,
                animated: e.emoji.animated
            };
        case 'testInlineVoid':
            throw Error('Unable to convert test types');
    }
    return null;
}
