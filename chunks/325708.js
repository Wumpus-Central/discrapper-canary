n.d(t, {
    Z: () => E,
    y: () => h,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(692547),
    c = n(481060),
    u = n(153867),
    d = n(347469),
    f = n(740492),
    _ = n(36645),
    p = n(875675),
    h = (function (e) {
        return (
            (e[(e.PostSidebar = 0)] = "PostSidebar"),
            (e[(e.ThreadSidebar = 1)] = "ThreadSidebar"),
            (e[(e.CallChatSidebar = 2)] = "CallChatSidebar"),
            (e[(e.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
            (e[(e.HomeSidebar = 4)] = "HomeSidebar"),
            (e[(e.ParticipantsSidebar = 5)] = "ParticipantsSidebar"),
            e
        );
    })({});
function m(e) {
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
}
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: o, minWidth: a } = e,
        s = (0, d.Z)({
            minDimension: a,
            maxDimension: o,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: d.y.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, r.jsx)("div", {
        onMouseDown: s,
        className: p.resizeHandle,
    });
}
function E(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: o, children: d, floatingLayer: h } = e,
        E = i.useRef(null),
        b = m(t),
        [y, O] = i.useState(f.ZP[b]),
        v = i.useCallback(
            (e) => {
                u.ZP.updatedUnsyncedSettings({ [b]: e });
            },
            [b],
        ),
        I = 5 === t ? _.at : _.Co,
        T = (0, _.WL)({
            maxWidth: n,
            minWidth: I,
        }),
        S = (0, c.dQu)(l.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        A = (0, s.clamp)(y, I, n),
        N = T ? A : A + S;
    i.useEffect(() => {
        null == o || o(A, T);
    }, [A, o, T]);
    let C = null != h ? h : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !T && (0, r.jsx)("div", { style: { minWidth: N } }),
            (0, r.jsx)(C, {
                children: (0, r.jsxs)("div", {
                    className: a()(p.chatLayerWrapper, { [p.hidden]: !1 }),
                    children: [
                        (0, r.jsx)("div", {
                            className: a()(p.chatTarget, {
                                [p.floating]: T,
                                [p.notFloating]: !T,
                            }),
                            style: { width: N },
                        }),
                        !T &&
                            (0, r.jsx)(g, {
                                minWidth: I,
                                maxWidth: n,
                                resizableNode: E,
                                onResize: O,
                                onResizeEnd: v,
                            }),
                        (0, r.jsx)("div", {
                            ref: E,
                            className: a()(p.container, { [p.floating]: T }),
                            style: { width: A },
                            children: d,
                        }),
                    ],
                }),
            }),
        ],
    });
}
