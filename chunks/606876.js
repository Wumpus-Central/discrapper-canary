(n.d(t, { Z: () => d }), n(388685));
var r = n(255367),
    o = n(73800),
    a = n(481060),
    s = n(927160),
    i = n(203377),
    l = n(93841),
    c = n(388032),
    u = n(606055);
function d() {
    let [e, t] = o.useState('');
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsxs)('div', {
                className: u.demo,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.previewCard,
                        children: [
                            (0, r.jsx)('div', {
                                className: u.avatar,
                                children: (0, r.jsx)(a.gw7, {
                                    size: 'custom',
                                    width: 24,
                                    height: 24
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: u.previewCardMessage,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: u.messageHeaderSkeleton,
                                        children: [(0, r.jsx)('div', { className: u.usernameSkeleton }), (0, r.jsx)('div', { className: u.timestampSkeleton })]
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: u.previewCardUrl,
                                        children: [
                                            (0, r.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-tertiary',
                                                className: u.baseUrl,
                                                children: ''.concat(i.mf, '/')
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-link',
                                                className: u.vanityCode,
                                                children: e
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: u.messageEmbed,
                                        children: [
                                            (0, r.jsx)('div', { className: u.messageEmbedHeaderSkeleton }),
                                            (0, r.jsxs)('div', {
                                                className: u.messageEmbedContent,
                                                children: [
                                                    (0, r.jsx)('div', { className: u.messageEmbedContentIconSkeleton }),
                                                    (0, r.jsxs)('div', {
                                                        className: u.messageEmbedContentLines,
                                                        children: [(0, r.jsx)('div', { className: u.messageEmbedContenPrimaryLineSkeleton }), (0, r.jsx)('div', { className: u.messageEmbedContentSecondaryLineSkeleton })]
                                                    }),
                                                    (0, r.jsx)('div', { className: u.messageEmbedContentActionSkeleton })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(s.Z, {
                        autoFocus: !0,
                        value: e,
                        onChange: t,
                        className: u.vanityUrlInput
                    })
                ]
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-tertiary',
                className: u.disclaimer,
                children: c.intl.string(l.default.u5iNb2)
            })
        ]
    });
}
