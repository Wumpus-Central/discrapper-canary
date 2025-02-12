n.d(t, {
    Z: () => C,
    y: () => g
}),
    n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(392711),
    c = n(692547),
    d = n(481060),
    u = n(153867),
    h = n(347469),
    p = n(740492),
    m = n(36645),
    f = n(971179),
    g = (((i = {})[(i.PostSidebar = 0)] = 'PostSidebar'), (i[(i.ThreadSidebar = 1)] = 'ThreadSidebar'), (i[(i.CallChatSidebar = 2)] = 'CallChatSidebar'), (i[(i.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (i[(i.HomeSidebar = 4)] = 'HomeSidebar'), (i[(i.ParticipantsSidebar = 5)] = 'ParticipantsSidebar'), i);
function _(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: a, minWidth: r } = e,
        s = (0, h.Z)({
            minDimension: r,
            maxDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.y.HORIZONTAL_LEFT,
            throttleDuration: 16
        });
    return (0, l.jsx)('div', {
        onMouseDown: s,
        className: f.resizeHandle
    });
}
function C(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: r, floatingLayer: h } = e,
        g = a.useRef(null),
        C = (function (e) {
            switch (e) {
                case 0:
                    return 'postSidebarWidth';
                case 1:
                    return 'threadSidebarWidth';
                case 2:
                    return 'callChatSidebarWidth';
                case 3:
                    return 'messageRequestSidebarWidth';
                case 4:
                    return 'homeSidebarWidth';
                case 5:
                    return 'callParticipantsSidebarWidth';
            }
        })(t),
        [x, v] = a.useState(p.ZP[C]),
        E = a.useCallback(
            (e) => {
                u.ZP.updatedUnsyncedSettings({ [C]: e });
            },
            [C]
        ),
        I = 5 === t ? m.at : m.Co,
        b = (0, m.WL)({
            maxWidth: n,
            minWidth: I
        }),
        Z = (0, d.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        N = (0, o.clamp)(x, I, n),
        T = b ? N : N + Z;
    a.useEffect(() => {
        null == i || i(N, b);
    }, [N, i, b]);
    let S = null != h ? h : a.Fragment;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !b && (0, l.jsx)('div', { style: { minWidth: T } }),
            (0, l.jsx)(S, {
                children: (0, l.jsxs)('div', {
                    className: f.chatLayerWrapper,
                    children: [
                        (0, l.jsx)('div', {
                            className: s()(f.chatTarget, {
                                [f.floating]: b,
                                [f.notFloating]: !b
                            }),
                            style: { width: T }
                        }),
                        !b &&
                            (0, l.jsx)(_, {
                                minWidth: I,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: v,
                                onResizeEnd: E
                            }),
                        (0, l.jsx)('div', {
                            ref: g,
                            className: s()(f.container, { [f.floating]: b }),
                            style: { width: N },
                            children: r
                        })
                    ]
                })
            })
        ]
    });
}
