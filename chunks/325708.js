n.d(t, {
    Z: () => C,
    y: () => g,
}),
    n(388685);
var i,
    r = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    c = n(692547),
    u = n(481060),
    d = n(153867),
    p = n(347469),
    h = n(740492),
    f = n(36645),
    m = n(875675),
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
function C(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: a, floatingLayer: p } = e,
        g = l.useRef(null),
        C = (function (e) {
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
        [y, _] = l.useState(h.ZP[C]),
        v = l.useCallback(
            (e) => {
                d.ZP.updatedUnsyncedSettings({ [C]: e });
            },
            [C],
        ),
        x = 5 === t ? f.at : f.Co,
        O = (0, f.WL)({
            maxWidth: n,
            minWidth: x,
        }),
        j = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        E = (0, s.clamp)(y, x, n),
        S = O ? E : E + j;
    l.useEffect(() => {
        null == i || i(E, O);
    }, [E, i, O]);
    let P = null != p ? p : l.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !O && (0, r.jsx)("div", { style: { minWidth: S } }),
            (0, r.jsx)(P, {
                children: (0, r.jsxs)("div", {
                    className: o()(m.chatLayerWrapper, { [m.hidden]: !1 }),
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(m.chatTarget, {
                                [m.floating]: O,
                                [m.notFloating]: !O,
                            }),
                            style: { width: S },
                        }),
                        !O &&
                            (0, r.jsx)(b, {
                                minWidth: x,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: _,
                                onResizeEnd: v,
                            }),
                        (0, r.jsx)("div", {
                            ref: g,
                            className: o()(m.container, { [m.floating]: O }),
                            style: { width: E },
                            children: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
