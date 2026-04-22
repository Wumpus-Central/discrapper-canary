n.d(t, { A: () => m });
var a = n(627968),
    r = n(64700),
    l = n(621466),
    s = n(834730),
    i = n(187322),
    u = n(939249),
    o = n(442433),
    c = n(636922),
    d = n(734057),
    h = n(486020),
    g = n(985018),
    f = n(208423);
function p(e) {
    let { message: t } = e,
        n = h.Ay.getUserAvatarURL({ avatar: t.author.avatar, id: t.author.id, discriminator: t.author.discriminator }),
        r = t.author.globalName ?? t.author.username;
    return (0, a.jsxs)("div", {
        className: f.Iy,
        children: [
            (0, a.jsx)("img", { className: f.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: f.ur,
                children: [
                    (0, a.jsx)(s.E, { variant: "text-sm/semibold", color: "text-default", children: r }),
                    (0, a.jsx)(s.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: f.SR,
                        children: g.intl.string(g.t["5uaI/7"]),
                    }),
                ],
            }),
        ],
    });
}
class m extends r.PureComponent {
    containerRef = r.createRef();
    hitRef = r.createRef();
    handleContextMenu = (e, t) => {
        let r = d.A.getChannel(t.channel_id);
        null != r &&
            (e.stopPropagation(),
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("93103"), n.e("64879"), n.e("74473")]).then(
                    n.bind(n, 847342),
                );
                return (n) => (0, a.jsx)(e, { ...n, message: t, channel: r });
            }));
    };
    jumpTo = (e) => {
        null != e && (e.preventDefault(), e.stopPropagation());
        let { onJump: t, message: n, index: a } = this.props;
        null != n && t(n, a);
    };
    handleMessageClick = (e) => {
        !(function (e, t) {
            let n = window?.getSelection();
            if (null != n && !n.isCollapsed) return !0;
            if (null == e || null == t) return !1;
            for (; (0, l.vq)(e) && e !== t; ) {
                let { tagName: t } = e;
                if ("A" === t || "BUTTON" === t || ("IMG" === t && "true" !== e.getAttribute("aria-hidden"))) return !0;
                e = e.parentNode;
            }
            return !1;
        })(e.target, this.containerRef.current)
            ? this.jumpTo(e)
            : e.stopPropagation();
    };
    render() {
        let {
                message: e,
                listItemProps: t,
                searchOffset: n,
                index: r,
                totalResults: l,
                isSpoilerHidden: s,
            } = this.props,
            o = d.A.getChannel(e.channel_id);
        if (null == o) return null;
        let h = `search-result-${e.id}`;
        return (0, a.jsx)(i.vN, {
            ringTarget: this.hitRef,
            ringClassName: f.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, a.jsxs)("li", {
                className: f.kL,
                ...t,
                "aria-posinset": 1 + n + r,
                "aria-setsize": l,
                "aria-labelledby": h,
                children: [
                    (0, a.jsx)(u.D, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        ignoreKeyPress: !0,
                        innerRef: this.containerRef,
                        className: f.mk,
                        focusProps: { enabled: !1 },
                        children: (0, a.jsx)(
                            "div",
                            {
                                ref: this.hitRef,
                                className: f.iU,
                                children: s
                                    ? (0, a.jsx)(p, { message: e })
                                    : (0, a.jsx)(c.A, {
                                          id: h,
                                          message: e,
                                          channel: o,
                                          onContextMenu: (t) => this.handleContextMenu(t, e),
                                          animateAvatar: !1,
                                          subscribeToComponentDispatch: !1,
                                          trackAnnouncementViews: !0,
                                      }),
                            },
                            e.id,
                        ),
                    }),
                    (0, a.jsx)("div", {
                        className: f.NC,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(u.D, {
                            className: f.x6,
                            onClick: this.jumpTo,
                            children: g.intl.string(g.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
