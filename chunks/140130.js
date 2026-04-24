i.d(e, { X: () => A, A: () => S });
var n,
    s = i(627968),
    r = i(64700),
    a = i(503698),
    l = i.n(a),
    o = i(735438),
    d = i(661531),
    c = i(602853),
    h = i(817281),
    g = i(761929),
    E = i(964404),
    m = i(318974),
    A =
        (((n = {})[(n.PostSidebar = 0)] = "PostSidebar"),
        (n[(n.ThreadSidebar = 1)] = "ThreadSidebar"),
        (n[(n.CallChatSidebar = 2)] = "CallChatSidebar"),
        (n[(n.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (n[(n.HomeSidebar = 4)] = "HomeSidebar"),
        n);
function u(t) {
    let { resizableNode: e, onResize: i, onResizeEnd: n, maxWidth: r, minWidth: a } = t,
        l = (0, g.A)({
            minDimension: a,
            maxDimension: r,
            resizableDomNodeRef: e,
            onElementResize: i,
            onElementResizeEnd: n,
            orientation: g.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, s.jsx)("div", { onMouseDown: l, className: m.Di });
}
function S(t) {
    let { sidebarType: e, maxWidth: i, onWidthChange: n, children: a, floatingLayer: g } = t,
        A = r.useRef(null),
        S = (function (t) {
            switch (t) {
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
        })(e),
        [N, p] = r.useState(E.Ay[S]),
        C = r.useCallback(
            (t) => {
                h.Ay.updatedUnsyncedSettings({ [S]: t });
            },
            [S],
        ),
        I = ((t) => {
            let { maxWidth: e, minWidth: i } = t;
            return e <= i;
        })({ maxWidth: i, minWidth: 450 }),
        f = (0, c.r)(d.A.modules.chat.RESIZE_HANDLE_WIDTH),
        x = (0, o.clamp)(N, 450, i),
        b = I ? x : x + f;
    r.useEffect(() => {
        n?.(x, I);
    }, [x, n, I]);
    let D = g ?? r.Fragment;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            !I && (0, s.jsx)("div", { style: { minWidth: b } }),
            (0, s.jsx)(D, {
                children: (0, s.jsxs)("div", {
                    className: l()(m.PA, { [m.R]: !1 }),
                    children: [
                        (0, s.jsx)("div", { className: l()(m.Uc, { [m.DU]: I, [m.iK]: !I }), style: { width: b } }),
                        !I &&
                            (0, s.jsx)(u, {
                                minWidth: 450,
                                maxWidth: i,
                                resizableNode: A,
                                onResize: p,
                                onResizeEnd: C,
                            }),
                        (0, s.jsx)("div", {
                            ref: A,
                            className: l()(m.kL, { [m.DU]: I }),
                            style: { width: x },
                            children: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
