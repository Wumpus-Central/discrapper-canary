n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(493773),
    d = n(11352),
    c = n(610617),
    u = n(413684),
    h = n(298812),
    g = n(200115),
    m = n(406205),
    x = n(388032),
    S = n(752863);
function p(e) {
    return (0, i.jsx)('div', {
        className: S.sectionHeader,
        children: (0, i.jsx)(a.Heading, {
            variant: 'text-xs/bold',
            className: S.sectionHeaderTitle,
            color: 'text-muted',
            children: e.title
        })
    });
}
function v(e) {
    return (0, i.jsxs)('div', {
        children: [
            null != e.title && (0, i.jsx)(p, { title: e.title }),
            (0, i.jsx)('div', {
                className: r()(S.sectionContent, { [S.sectionContentPadding]: !0 !== e.noPadding }),
                children: e.children
            })
        ]
    });
}
function N(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(a.ModalHeader, {
        className: S.header,
        children: [
            (0, i.jsxs)('div', {
                className: S.headerLeft,
                children: [
                    (0, i.jsx)(a.BellIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: S.headerBell
                    }),
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-lg/semibold',
                        children: x.intl.string(x.t.h850Sk)
                    })
                ]
            }),
            (0, i.jsx)(a.ModalCloseButton, { onClick: t })
        ]
    });
}
function j(e) {
    let t = s.useRef(null),
        n = d.Y.useExperiment({ location: 'notification_settings_modal_redesign' }, { autoTrackExposure: !0 }).enabled,
        l = s.useRef(null);
    return (
        (0, o.N)(() => {
            let n = setTimeout(() => {
                e.scrollToChannels &&
                    null != t.current &&
                    null != l.current &&
                    t.current.scrollIntoViewNode({
                        node: l.current,
                        shouldScrollToStart: !0,
                        padding: 40
                    });
            }, 1000);
            return () => clearTimeout(n);
        }),
        (0, i.jsxs)(a.ModalRoot, {
            size: a.ModalSize.MEDIUM,
            transitionState: e.transitionState,
            'aria-label': x.intl.string(x.t.h850Sk),
            children: [
                (0, i.jsx)(N, { onClose: e.onClose }),
                (0, i.jsxs)(a.ModalContent, {
                    className: S.content,
                    scrollerRef: t,
                    children: [
                        (0, i.jsx)(v, { children: (0, i.jsx)(g.Z, { guildId: e.guildId }) }),
                        (0, i.jsx)(v, {
                            title: x.intl.string(x.t['R9Ej9/']),
                            noPadding: !0,
                            children: (0, i.jsx)(m.Z, { guildId: e.guildId })
                        }),
                        n &&
                            (0, i.jsx)(v, {
                                children: (0, i.jsx)(c.Z, {
                                    onClose: e.onClose,
                                    guildId: e.guildId,
                                    isRedesign: !0
                                })
                            }),
                        (0, i.jsx)(v, {
                            title: x.intl.string(x.t['31DySk']),
                            children: (0, i.jsx)(u.Z, { guildId: e.guildId })
                        }),
                        (0, i.jsx)(p, { title: x.intl.string(x.t.JrySi4) }),
                        (0, i.jsx)(h.Z, {
                            guildId: e.guildId,
                            requestScrollToBottom: () => {
                                null != t && null != t.current && t.current.scrollToBottom({ animate: !0 });
                            },
                            ref: l
                        })
                    ]
                })
            ]
        })
    );
}
