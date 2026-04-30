s.d(i, { X: () => S, A: () => p });
var t,
    a = s(627968),
    d = s(64700),
    r = s(503698),
    n = s.n(r),
    l = s(735438),
    h = s(661531),
    o = s(602853),
    c = s(817281),
    u = s(761929),
    m = s(964404),
    b = s(318974),
    S =
        (((t = {})[(t.PostSidebar = 0)] = "PostSidebar"),
        (t[(t.ThreadSidebar = 1)] = "ThreadSidebar"),
        (t[(t.CallChatSidebar = 2)] = "CallChatSidebar"),
        (t[(t.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (t[(t.HomeSidebar = 4)] = "HomeSidebar"),
        t);
function R(e) {
    let { resizableNode: i, onResize: s, onResizeEnd: t, maxWidth: d, minWidth: r } = e,
        n = (0, u.A)({
            minDimension: r,
            maxDimension: d,
            resizableDomNodeRef: i,
            onElementResize: s,
            onElementResizeEnd: t,
            orientation: u.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, a.jsx)("div", { onMouseDown: n, className: b.Di });
}
function p(e) {
    let { sidebarType: i, maxWidth: s, onWidthChange: t, children: r, floatingLayer: u } = e,
        S = d.useRef(null),
        p = (function (e) {
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
            }
        })(i),
        [x, D] = d.useState(m.Ay[p]),
        E = d.useCallback(
            (e) => {
                c.Ay.updatedUnsyncedSettings({ [p]: e });
            },
            [p],
        ),
        W = ((e) => {
            let { maxWidth: i, minWidth: s } = e;
            return i <= s;
        })({ maxWidth: s, minWidth: 450 }),
        f = (0, o.r)(h.A.modules.chat.RESIZE_HANDLE_WIDTH),
        j = (0, l.clamp)(x, 450, s),
        A = W ? j : j + f;
    d.useEffect(() => {
        t?.(j, W);
    }, [j, t, W]);
    let C = u ?? d.Fragment;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !W && (0, a.jsx)("div", { style: { minWidth: A } }),
            (0, a.jsx)(C, {
                children: (0, a.jsxs)("div", {
                    className: n()(b.PA, { [b.R]: !1 }),
                    children: [
                        (0, a.jsx)("div", { className: n()(b.Uc, { [b.DU]: W, [b.iK]: !W }), style: { width: A } }),
                        !W &&
                            (0, a.jsx)(R, {
                                minWidth: 450,
                                maxWidth: s,
                                resizableNode: S,
                                onResize: D,
                                onResizeEnd: E,
                            }),
                        (0, a.jsx)("div", {
                            ref: S,
                            className: n()(b.kL, { [b.DU]: W }),
                            style: { width: j },
                            children: r,
                        }),
                    ],
                }),
            }),
        ],
    });
}
