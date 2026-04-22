"use strict";
n.d(t, { A: () => a });
var r = n(791332),
    i = n.n(r);
let s =
        /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
    a = {
        attachmentLink: {
            order: i().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ["h"],
            match: (e) => s.exec(e),
            parse(e, t, n) {
                var r;
                let i = e[0];
                return {
                    type: "attachmentLink",
                    content: [{ type: "text", content: (r = e[1]) }],
                    attachmentUrl: i,
                    attachmentName: r,
                };
            },
        },
    };
