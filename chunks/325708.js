n.d(t, {
    Z: () => y,
    y: () => g,
}),
    n(388685);
var i,
    r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    c = n(692547),
    u = n(481060),
    d = n(153867),
    p = n(347469),
    h = n(740492),
    f = n(36645),
    m = n(994425),
    g =
        (((i = {})[(i.PostSidebar = 0)] = "PostSidebar"),
        (i[(i.ThreadSidebar = 1)] = "ThreadSidebar"),
        (i[(i.CallChatSidebar = 2)] = "CallChatSidebar"),
        (i[(i.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (i[(i.HomeSidebar = 4)] = "HomeSidebar"),
        (i[(i.ParticipantsSidebar = 5)] = "ParticipantsSidebar"),
        i);
function b(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: l, minWidth: a } = e,
        o = (0, p.Z)({
            minDimension: a,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: p.y.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, r.jsx)("div", {
        onMouseDown: o,
        className: m.resizeHandle,
    });
}
function y(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: a, floatingLayer: p } = e,
        g = l.useRef(null),
        y = (function (e) {
            switch (e) {
                case 0:
                    return "postSidebarWidth";
                case 1:
                    return "threadSidebarWidth";
                case 2:
                    return "callChatSidebarWidth";
                case 3:
                    return "messageRequestSidebarWidth";
                case 4:
                    return "homeSidebarWidth";
                case 5:
                    return "callParticipantsSidebarWidth";
            }
        })(t),
        [C, v] = l.useState(h.ZP[y]),
        _ = l.useCallback(
            (e) => {
                d.ZP.updatedUnsyncedSettings({ [y]: e });
            },
            [y],
        ),
        x = 5 === t ? f.at : f.Co,
        j = (0, f.WL)({
            maxWidth: n,
            minWidth: x,
        }),
        O = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        E = (0, s.clamp)(C, x, n),
        S = j ? E : E + O;
    l.useEffect(() => {
        null == i || i(E, j);
    }, [E, i, j]);
    let P = null != p ? p : l.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !j && (0, r.jsx)("div", { style: { minWidth: S } }),
            (0, r.jsx)(P, {
                children: (0, r.jsxs)("div", {
                    className: o()(m.chatLayerWrapper, { [m.hidden]: !1 }),
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(m.chatTarget, {
                                [m.floating]: j,
                                [m.notFloating]: !j,
                            }),
                            style: { width: S },
                        }),
                        !j &&
                            (0, r.jsx)(b, {
                                minWidth: x,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: v,
                                onResizeEnd: _,
                            }),
                        (0, r.jsx)("div", {
                            ref: g,
                            className: o()(m.container, { [m.floating]: j }),
                            style: { width: E },
                            children: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
