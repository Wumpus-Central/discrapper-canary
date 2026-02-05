n.d(t, { D: () => c });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    u = n(193663),
    o = n(576420),
    d = n(783346);
function c(e) {
    let {
            listItemId: t,
            isVisuallyOffline: n = !1,
            recentlyAddedTimestampMs: s = null,
            outerRef: c,
            leftIndicator: h,
            avatar: g,
            primaryText: I,
            secondaryText: E,
            rightActions: A,
            onClick: f,
            onContextMenu: m,
            onMouseEnter: S,
            onMouseLeave: p,
            className: N,
            rowInnerClassName: T,
        } = e,
        _ = (0, a.rm)(t),
        [y, C] = i.useState(!1),
        x = i.useRef(null),
        [v, M] = i.useState(!1);
    return (
        i.useEffect(() => {
            if (null == s || x.current === s) return;
            x.current = s;
            let e = Date.now();
            s > e || e - s > o.WS || M(!0);
        }, [s]),
        (0, l.jsxs)("div", {
            ref: c,
            className: r()(d.nM, N, { [d.SS]: n }),
            onAnimationEnd: (e) => {
                "friendsWidgetRowRecentlyAdded" === e.animationName && M(!1);
            },
            children: [
                null != h ? (0, l.jsx)("div", { className: d.oT, children: h }) : null,
                (0, l.jsx)(u.A, {
                    innerClassName: r()(d.bL, T),
                    className: v ? d.fc : void 0,
                    onClick: f,
                    onContextMenu: m,
                    onMouseEnter: (e) => {
                        C(!0), S?.(e);
                    },
                    onMouseLeave: (e) => {
                        C(!1), p?.(e);
                    },
                    avatar: g,
                    name: I,
                    subText: E,
                    hovered: y,
                    ..._,
                    children: null != A ? (0, l.jsx)("div", { className: d.cm, children: A(y) }) : null,
                }),
            ],
        })
    );
}
