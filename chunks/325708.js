n.d(t, {
    Z: () => _,
    y: () => g
}),
    n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    c = n(692547),
    u = n(481060),
    d = n(153867),
    p = n(347469),
    h = n(740492),
    f = n(36645),
    m = n(354494),
    g = (((r = {})[(r.PostSidebar = 0)] = 'PostSidebar'), (r[(r.ThreadSidebar = 1)] = 'ThreadSidebar'), (r[(r.CallChatSidebar = 2)] = 'CallChatSidebar'), (r[(r.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (r[(r.HomeSidebar = 4)] = 'HomeSidebar'), (r[(r.ParticipantsSidebar = 5)] = 'ParticipantsSidebar'), r);
function b(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, maxWidth: l, minWidth: o } = e,
        a = (0, p.Z)({
            minDimension: o,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: p.y.HORIZONTAL_LEFT,
            throttleDuration: 16
        });
    return (0, i.jsx)('div', {
        onMouseDown: a,
        className: m.resizeHandle
    });
}
function _(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: r, children: o, floatingLayer: p } = e,
        g = l.useRef(null),
        _ = (function (e) {
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
        [C, y] = l.useState(h.ZP[_]),
        x = l.useCallback(
            (e) => {
                d.ZP.updatedUnsyncedSettings({ [_]: e });
            },
            [_]
        ),
        v = 5 === t ? f.at : f.Co,
        j = (0, f.WL)({
            maxWidth: n,
            minWidth: v
        }),
        O = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        E = (0, s.clamp)(C, v, n),
        N = j ? E : E + O;
    l.useEffect(() => {
        null == r || r(E, j);
    }, [E, r, j]);
    let I = null != p ? p : l.Fragment;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !j && (0, i.jsx)('div', { style: { minWidth: N } }),
            (0, i.jsx)(I, {
                children: (0, i.jsxs)('div', {
                    className: m.chatLayerWrapper,
                    children: [
                        (0, i.jsx)('div', {
                            className: a()(m.chatTarget, {
                                [m.floating]: j,
                                [m.notFloating]: !j
                            }),
                            style: { width: N }
                        }),
                        !j &&
                            (0, i.jsx)(b, {
                                minWidth: v,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: y,
                                onResizeEnd: x
                            }),
                        (0, i.jsx)('div', {
                            ref: g,
                            className: a()(m.container, { [m.floating]: j }),
                            style: { width: E },
                            children: o
                        })
                    ]
                })
            })
        ]
    });
}
