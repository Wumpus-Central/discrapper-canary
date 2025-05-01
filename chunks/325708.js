n.d(t, {
    Z: () => C,
    y: () => _
}),
    n(388685);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    p = n(153867),
    h = n(347469),
    f = n(317381),
    m = n(740492),
    g = n(36645),
    b = n(354494),
    _ = (((r = {})[(r.PostSidebar = 0)] = 'PostSidebar'), (r[(r.ThreadSidebar = 1)] = 'ThreadSidebar'), (r[(r.CallChatSidebar = 2)] = 'CallChatSidebar'), (r[(r.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (r[(r.HomeSidebar = 4)] = 'HomeSidebar'), (r[(r.ParticipantsSidebar = 5)] = 'ParticipantsSidebar'), r);
function y(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, maxWidth: l, minWidth: o } = e,
        a = (0, h.Z)({
            minDimension: o,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: h.y.HORIZONTAL_LEFT,
            throttleDuration: 16
        });
    return (0, i.jsx)('div', {
        onMouseDown: a,
        className: b.resizeHandle
    });
}
function C(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: r, children: o, floatingLayer: h } = e,
        _ = l.useRef(null),
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
        [x, v] = l.useState(m.ZP[C]),
        j = l.useCallback(
            (e) => {
                p.ZP.updatedUnsyncedSettings({ [C]: e });
            },
            [C]
        ),
        O = 5 === t ? g.at : g.Co,
        E = (0, g.WL)({
            maxWidth: n,
            minWidth: O
        }),
        I = (0, d.dQu)(u.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        P = (0, s.clamp)(x, O, n),
        S = E ? P : P + I;
    l.useEffect(() => {
        null == r || r(P, E);
    }, [P, r, E]);
    let Z = null != h ? h : l.Fragment,
        N = (0, c.e7)([f.ZP], () => f.ZP.isContextlessActivityInPanelMode());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !E && (0, i.jsx)('div', { style: { minWidth: S } }),
            (0, i.jsx)(Z, {
                children: (0, i.jsxs)('div', {
                    className: a()(b.chatLayerWrapper, { [b.hidden]: N }),
                    children: [
                        (0, i.jsx)('div', {
                            className: a()(b.chatTarget, {
                                [b.floating]: E,
                                [b.notFloating]: !E
                            }),
                            style: { width: S }
                        }),
                        !E &&
                            (0, i.jsx)(y, {
                                minWidth: O,
                                maxWidth: n,
                                resizableNode: _,
                                onResize: v,
                                onResizeEnd: j
                            }),
                        (0, i.jsx)('div', {
                            ref: _,
                            className: a()(b.container, { [b.floating]: E }),
                            style: { width: P },
                            children: o
                        })
                    ]
                })
            })
        ]
    });
}
