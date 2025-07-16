(r.d(t, { Z: () => u }), r(388685));
var n = r(255367),
    o = r(73800),
    a = r(481060),
    i = r(927160),
    s = r(203377),
    l = r(93841),
    c = r(388032),
    d = r(606055);
function u() {
    let [e, t] = o.useState('');
    return (0, n.jsxs)('div', {
        className: d.container,
        children: [
            (0, n.jsxs)('div', {
                className: d.demo,
                children: [
                    (0, n.jsxs)('div', {
                        className: d.previewCard,
                        children: [
                            (0, n.jsx)('div', {
                                className: d.avatar,
                                children: (0, n.jsx)(a.gw7, {
                                    size: 'custom',
                                    width: 24,
                                    height: 24
                                })
                            }),
                            (0, n.jsxs)('div', {
                                className: d.previewCardMessage,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: d.messageHeaderSkeleton,
                                        children: [(0, n.jsx)('div', { className: d.usernameSkeleton }), (0, n.jsx)('div', { className: d.timestampSkeleton })]
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: d.previewCardUrl,
                                        children: [
                                            (0, n.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-tertiary',
                                                className: d.baseUrl,
                                                children: ''.concat(s.mf, '/')
                                            }),
                                            (0, n.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-link',
                                                className: d.vanityCode,
                                                children: e
                                            })
                                        ]
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: d.messageEmbed,
                                        children: [
                                            (0, n.jsx)('div', { className: d.messageEmbedHeaderSkeleton }),
                                            (0, n.jsxs)('div', {
                                                className: d.messageEmbedContent,
                                                children: [
                                                    (0, n.jsx)('div', { className: d.messageEmbedContentIconSkeleton }),
                                                    (0, n.jsxs)('div', {
                                                        className: d.messageEmbedContentLines,
                                                        children: [(0, n.jsx)('div', { className: d.messageEmbedContenPrimaryLineSkeleton }), (0, n.jsx)('div', { className: d.messageEmbedContentSecondaryLineSkeleton })]
                                                    }),
                                                    (0, n.jsx)('div', { className: d.messageEmbedContentActionSkeleton })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(i.Z, {
                        value: e,
                        onChange: t,
                        className: d.vanityUrlInput
                    })
                ]
            }),
            (0, n.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-tertiary',
                className: d.disclaimer,
                children: c.intl.string(l.default.u5iNb2)
            })
        ]
    });
}
