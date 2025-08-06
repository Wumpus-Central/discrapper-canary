(n.d(t, { Z: () => s }), n(35282));
var r = n(159635),
    i = n.n(r);
let o = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;
function a(e, t) {
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
        match: (e) => o.exec(e),
        parse(e, t, n) {
            let r = e[0];
            return a(e[1], r);
        }
    }
};
