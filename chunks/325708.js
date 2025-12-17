n.d(t, {
    Z: () => C,
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
    f = n(740492),
    h = n(36645),
    m = n(631871),
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
        [y, v] = l.useState(f.ZP[C]),
        x = l.useCallback(
            (e) => {
                d.ZP.updatedUnsyncedSettings({ [C]: e });
            },
            [C],
        ),
        O = 5 === t ? h.at : h.Co,
        E = (0, h.WL)({
            maxWidth: n,
            minWidth: O,
        }),
        j = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        S = (0, s.clamp)(y, O, n),
        _ = E ? S : S + j;
    l.useEffect(() => {
        null == i || i(S, E);
    }, [S, i, E]);
    let P = null != p ? p : l.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !E && (0, r.jsx)("div", { style: { minWidth: _ } }),
            (0, r.jsx)(P, {
                children: (0, r.jsxs)("div", {
                    className: o()(m.chatLayerWrapper, { [m.hidden]: !1 }),
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(m.chatTarget, {
                                [m.floating]: E,
                                [m.notFloating]: !E,
                            }),
                            style: { width: _ },
                        }),
                        !E &&
                            (0, r.jsx)(b, {
                                minWidth: O,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: v,
                                onResizeEnd: x,
                            }),
                        (0, r.jsx)("div", {
                            ref: g,
                            className: o()(m.container, { [m.floating]: E }),
                            style: { width: S },
                            children: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
