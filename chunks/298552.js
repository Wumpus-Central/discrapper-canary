n.d(t, { Z: () => c }), n(301563);
var r = n(477660),
    i = n.n(r),
    o = n(818083);
let a = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
    s = (0, o.B)({
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
function l(e, t) {
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
let c = {
    attachmentLink: {
        order: i().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match(e) {
            let t = a.exec(e);
            if (null !== t) {
                let { enabled: e } = s.getCurrentConfig({ location: 'markup' });
                if (!e) return null;
            }
            return t;
        },
        parse(e, t, n) {
            let r = e[0];
            return l(e[1], r);
        }
    }
};
