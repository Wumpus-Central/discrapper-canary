var i = r(477660),
    a = r.n(i),
    o = r(818083);
let s = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
    l = (0, o.B)({
        kind: 'user',
        id: '2023-11_attachment_link_markup',
        label: 'Attachment Link Config User Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Shows links to attachments as regular links',
                config: { enabled: !1 }
            },
            {
                id: 2,
                label: 'Shows links to attachments as "mentions" of the filename',
                config: { enabled: !0 }
            }
        ]
    });
function u(e, n) {
    return {
        type: 'attachmentLink',
        content: [
            {
                type: 'text',
                content: e
            }
        ],
        attachmentUrl: n,
        attachmentName: e
    };
}
let c = {
    order: a().defaultRules.url.order - 0.5,
    requiredFirstCharacters: ['h'],
    match(e) {
        let n = s.exec(e);
        if (null !== n) {
            let { enabled: e } = l.getCurrentConfig({ location: 'markup' });
            if (!e) return null;
        }
        return n;
    },
    parse(e, n, r) {
        let i = e[0];
        return u(e[1], i);
    }
};
n.Z = { attachmentLink: c };
