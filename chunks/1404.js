n.d(t, { D: () => c });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(837381),
    u = n(193663),
    o = n(576420),
    d = n(760023);
function c(e) {
    let {
            listItemId: t,
            isVisuallyOffline: n = !1,
            recentlyAddedTimestampMs: r = null,
            outerRef: c,
            leftIndicator: h,
            avatar: g,
            primaryText: m,
            secondaryText: I,
            rightActions: E,
            onClick: A,
            onContextMenu: f,
            onMouseEnter: p,
            onMouseLeave: S,
            className: N,
            rowInnerClassName: x,
        } = e,
        T = (0, a.rm)(t),
        [_, y] = i.useState(!1),
        v = i.useRef(null),
        [C, R] = i.useState(!1);
    return (
        i.useEffect(() => {
            if (null == r || v.current === r) return;
            v.current = r;
            let e = Date.now();
            r > e || e - r > o.WS || R(!0);
        }, [r]),
        (0, l.jsxs)("div", {
            ref: c,
            className: s()(d.nM, N, { [d.SS]: n }),
            onAnimationEnd: (e) => {
                "friendsWidgetRowRecentlyAdded" === e.animationName && R(!1);
            },
            children: [
                null != h ? (0, l.jsx)("div", { className: d.oT, children: h }) : null,
                (0, l.jsx)(u.A, {
                    innerClassName: s()(d.bL, x),
                    className: C ? d.fc : void 0,
                    onClick: A,
                    onContextMenu: f,
                    onMouseEnter: (e) => {
                        y(!0), p?.(e);
                    },
                    onMouseLeave: (e) => {
                        y(!1), S?.(e);
                    },
                    avatar: g,
                    name: m,
                    subText: I,
                    hovered: _,
                    ...T,
                    children: null != E ? (0, l.jsx)("div", { className: d.cm, children: E(_) }) : null,
                }),
            ],
        })
    );
}
