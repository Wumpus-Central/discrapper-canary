"use strict";
n.d(t, { A: () => o });
var r = n(791332),
    i = n.n(r);
let a =
    /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;
function s(e, t) {
    return { type: "attachmentLink", content: [{ type: "text", content: e }], attachmentUrl: t, attachmentName: e };
}
let o = {
    attachmentLink: {
        order: i().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => a.exec(e),
        parse(e, t, n) {
            let r = e[0];
            return s(e[1], r);
        },
    },
};
