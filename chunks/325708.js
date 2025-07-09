(n.d(t, {
    Z: () => _,
    y: () => g
}),
    n(388685));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
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
    let { resizableNode: t, onResize: n, onResizeEnd: r, maxWidth: l, minWidth: a } = e,
        o = (0, p.Z)({
            minDimension: a,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: p.y.HORIZONTAL_LEFT,
            throttleDuration: 16
        });
    return (0, i.jsx)('div', {
        onMouseDown: o,
        className: m.resizeHandle
    });
}
function _(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: r, children: a, floatingLayer: p } = e,
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
        [y, C] = l.useState(h.ZP[_]),
        x = l.useCallback(
            (e) => {
                d.ZP.updatedUnsyncedSettings({ [_]: e });
            },
            [_]
        ),
        v = 5 === t ? f.at : f.Co,
        O = (0, f.WL)({
            maxWidth: n,
            minWidth: v
        }),
        j = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        E = (0, s.clamp)(y, v, n),
        S = O ? E : E + j;
    l.useEffect(() => {
        null == r || r(E, O);
    }, [E, r, O]);
    let I = null != p ? p : l.Fragment;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !O && (0, i.jsx)('div', { style: { minWidth: S } }),
            (0, i.jsx)(I, {
                children: (0, i.jsxs)('div', {
                    className: o()(m.chatLayerWrapper, { [m.hidden]: !1 }),
                    children: [
                        (0, i.jsx)('div', {
                            className: o()(m.chatTarget, {
                                [m.floating]: O,
                                [m.notFloating]: !O
                            }),
                            style: { width: S }
                        }),
                        !O &&
                            (0, i.jsx)(b, {
                                minWidth: v,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: C,
                                onResizeEnd: x
                            }),
                        (0, i.jsx)('div', {
                            ref: g,
                            className: o()(m.container, { [m.floating]: O }),
                            style: { width: E },
                            children: a
                        })
                    ]
                })
            })
        ]
    });
}
