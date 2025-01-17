n.d(t, {
    Z: function () {
        return x;
    },
    y: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(392711),
    d = n(692547),
    u = n(481060),
    h = n(153867),
    p = n(347469),
    m = n(740492),
    f = n(36645),
    g = n(311572);
((l = i || (i = {}))[(l.PostSidebar = 0)] = 'PostSidebar'), (l[(l.ThreadSidebar = 1)] = 'ThreadSidebar'), (l[(l.CallChatSidebar = 2)] = 'CallChatSidebar'), (l[(l.MessageRequestSidebar = 3)] = 'MessageRequestSidebar'), (l[(l.HomeSidebar = 4)] = 'HomeSidebar'), (l[(l.ParticipantsSidebar = 5)] = 'ParticipantsSidebar');
function C(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: l, minWidth: a } = e,
        s = (0, p.Z)({
            minDimension: a,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: p.y.HORIZONTAL_LEFT,
            throttleDuration: 16
        });
    return (0, r.jsx)('div', {
        onMouseDown: s,
        className: g.resizeHandle
    });
}
function x(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: l, floatingLayer: s } = e,
        p = a.useRef(null),
        x = (function (e) {
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
        [v, _] = a.useState(m.ZP[x]),
        I = a.useCallback(
            (e) => {
                h.ZP.updatedUnsyncedSettings({ [x]: e });
            },
            [x]
        ),
        E = 5 === t ? f.at : f.Co,
        b = (0, f.WL)({
            maxWidth: n,
            minWidth: E
        }),
        Z = (0, u.useToken)(d.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        S = (0, c.clamp)(v, E, n),
        N = b ? S : S + Z;
    a.useEffect(() => {
        null == i || i(S, b);
    }, [S, i, b]);
    let T = null != s ? s : a.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !b && (0, r.jsx)('div', { style: { minWidth: N } }),
            (0, r.jsx)(T, {
                children: (0, r.jsxs)('div', {
                    className: g.chatLayerWrapper,
                    children: [
                        (0, r.jsx)('div', {
                            className: o()(g.chatTarget, {
                                [g.floating]: b,
                                [g.notFloating]: !b
                            }),
                            style: { width: N }
                        }),
                        !b &&
                            (0, r.jsx)(C, {
                                minWidth: E,
                                maxWidth: n,
                                resizableNode: p,
                                onResize: _,
                                onResizeEnd: I
                            }),
                        (0, r.jsx)('div', {
                            ref: p,
                            className: o()(g.container, { [g.floating]: b }),
                            style: { width: S },
                            children: l
                        })
                    ]
                })
            })
        ]
    });
}
