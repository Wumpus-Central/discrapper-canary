(n.d(t, { Z: () => u }), n(388685));
var r = n(255367),
    a = n(73800),
    o = n(481060),
    l = n(927160),
    s = n(203377),
    i = n(93841),
    c = n(388032),
    d = n(606055);
function u() {
    let [e, t] = a.useState('');
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsxs)('div', {
                className: d.demo,
                children: [
                    (0, r.jsxs)('div', {
                        className: d.previewCard,
                        children: [
                            (0, r.jsx)('div', {
                                className: d.avatar,
                                children: (0, r.jsx)(o.gw7, {
                                    size: 'custom',
                                    width: 24,
                                    height: 24
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: d.previewCardMessage,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: d.messageHeaderSkeleton,
                                        children: [(0, r.jsx)('div', { className: d.usernameSkeleton }), (0, r.jsx)('div', { className: d.timestampSkeleton })]
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: d.previewCardUrl,
                                        children: [
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-tertiary',
                                                className: d.baseUrl,
                                                children: ''.concat(s.mf, '/')
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-link',
                                                className: d.vanityCode,
                                                children: e
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: d.messageEmbed,
                                        children: [
                                            (0, r.jsx)('div', { className: d.messageEmbedHeaderSkeleton }),
                                            (0, r.jsxs)('div', {
                                                className: d.messageEmbedContent,
                                                children: [
                                                    (0, r.jsx)('div', { className: d.messageEmbedContentIconSkeleton }),
                                                    (0, r.jsxs)('div', {
                                                        className: d.messageEmbedContentLines,
                                                        children: [(0, r.jsx)('div', { className: d.messageEmbedContenPrimaryLineSkeleton }), (0, r.jsx)('div', { className: d.messageEmbedContentSecondaryLineSkeleton })]
                                                    }),
                                                    (0, r.jsx)('div', { className: d.messageEmbedContentActionSkeleton })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Z, {
                        autoFocus: !0,
                        value: e,
                        onChange: t,
                        className: d.vanityUrlInput
                    })
                ]
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-tertiary',
                className: d.disclaimer,
                children: c.intl.string(i.default.u5iNb2)
            })
        ]
    });
}
