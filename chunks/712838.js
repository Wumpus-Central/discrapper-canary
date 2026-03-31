n.d(t, { A: () => _ });
var l = n(627968),
    r = n(64700),
    a = n(621466),
    i = n(397927),
    s = n(442433),
    o = n(636922),
    E = n(734057),
    u = n(985018),
    c = n(167415);
class _ extends r.PureComponent {
    containerRef = r.createRef();
    hitRef = r.createRef();
    handleContextMenu = (e, t) => {
        let r = E.A.getChannel(t.channel_id);
        null != r &&
            (e.stopPropagation(),
            (0, s.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("11902"), n.e("36802")]).then(n.bind(n, 847342));
                return (n) => (0, l.jsx)(e, { ...n, message: t, channel: r });
            }));
    };
    jumpTo = (e) => {
        null != e && (e.preventDefault(), e.stopPropagation());
        let { onJump: t, message: n, index: l } = this.props;
        null != n && t(n, l);
    };
    handleMessageClick = (e) => {
        !(function (e, t) {
            let n = window?.getSelection();
            if (null != n && !n.isCollapsed) return !0;
            if (null == e || null == t) return !1;
            for (; (0, a.vq)(e) && e !== t; ) {
                let { tagName: t } = e;
                if ("A" === t || "IMG" === t || "BUTTON" === t) return !0;
                e = e.parentNode;
            }
            return !1;
        })(e.target, this.containerRef.current)
            ? this.jumpTo(e)
            : e.stopPropagation();
    };
    render() {
        let { message: e, listItemProps: t, searchOffset: n, index: r, totalResults: a } = this.props,
            s = E.A.getChannel(e.channel_id);
        if (null == s) return null;
        let _ = `search-result-${e.id}`;
        return (0, l.jsx)(i.vN3, {
            ringTarget: this.hitRef,
            ringClassName: c.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, l.jsxs)("li", {
                className: c.kL,
                ...t,
                "aria-posinset": 1 + n + r,
                "aria-setsize": a,
                "aria-labelledby": _,
                children: [
                    (0, l.jsx)(i.DUT, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        innerRef: this.containerRef,
                        className: c.mk,
                        focusProps: { enabled: !1 },
                        children: (0, l.jsx)(
                            "div",
                            {
                                ref: this.hitRef,
                                className: c.iU,
                                children: (0, l.jsx)(o.A, {
                                    id: _,
                                    message: e,
                                    channel: s,
                                    onContextMenu: (t) => this.handleContextMenu(t, e),
                                    animateAvatar: !1,
                                    subscribeToComponentDispatch: !1,
                                    trackAnnouncementViews: !0,
                                }),
                            },
                            e.id,
                        ),
                    }),
                    (0, l.jsx)("div", {
                        className: c.NC,
                        "aria-hidden": !0,
                        children: (0, l.jsx)(i.DUT, {
                            className: c.x6,
                            onClick: this.jumpTo,
                            children: u.intl.string(u.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
