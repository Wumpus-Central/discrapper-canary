(r.d(t, { Z: () => d }), r(388685));
var n = r(255367),
    o = r(73800),
    a = r(481060),
    i = r(927160),
    s = r(203377),
    l = r(93841),
    c = r(388032),
    u = r(606055);
function d() {
    let [e, t] = o.useState('');
    return (0, n.jsxs)('div', {
        className: u.container,
        children: [
            (0, n.jsxs)('div', {
                className: u.demo,
                children: [
                    (0, n.jsxs)('div', {
                        className: u.previewCard,
                        children: [
                            (0, n.jsx)('div', {
                                className: u.avatar,
                                children: (0, n.jsx)(a.gw7, {
                                    size: 'custom',
                                    width: 24,
                                    height: 24
                                })
                            }),
                            (0, n.jsxs)('div', {
                                className: u.previewCardMessage,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: u.messageHeaderSkeleton,
                                        children: [(0, n.jsx)('div', { className: u.usernameSkeleton }), (0, n.jsx)('div', { className: u.timestampSkeleton })]
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: u.previewCardUrl,
                                        children: [
                                            (0, n.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-tertiary',
                                                className: u.baseUrl,
                                                children: ''.concat(s.mf, '/')
                                            }),
                                            (0, n.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'text-link',
                                                className: u.vanityCode,
                                                children: e
                                            })
                                        ]
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: u.messageEmbed,
                                        children: [
                                            (0, n.jsx)('div', { className: u.messageEmbedHeaderSkeleton }),
                                            (0, n.jsxs)('div', {
                                                className: u.messageEmbedContent,
                                                children: [
                                                    (0, n.jsx)('div', { className: u.messageEmbedContentIconSkeleton }),
                                                    (0, n.jsxs)('div', {
                                                        className: u.messageEmbedContentLines,
                                                        children: [(0, n.jsx)('div', { className: u.messageEmbedContenPrimaryLineSkeleton }), (0, n.jsx)('div', { className: u.messageEmbedContentSecondaryLineSkeleton })]
                                                    }),
                                                    (0, n.jsx)('div', { className: u.messageEmbedContentActionSkeleton })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(i.Z, {
                        autoFocus: !0,
                        value: e,
                        onChange: t,
                        className: u.vanityUrlInput
                    })
                ]
            }),
            (0, n.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-tertiary',
                className: u.disclaimer,
                children: c.intl.string(l.default.u5iNb2)
            })
        ]
    });
}
