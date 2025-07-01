(n.d(t, { Z: () => s }), n(35282));
var r = n(159635),
    i = n.n(r);
let a = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;
function o(e, t) {
    return {
        type: 'attachmentLink',
        content: [
            {
                type: 'text',
                content: e
            }
        ],
        attachmentUrl: t,
        attachmentName: e
    };
}
let s = {
    attachmentLink: {
        order: i().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match: (e) => a.exec(e),
        parse(e, t, n) {
            let r = e[0];
            return o(e[1], r);
        }
    }
};
