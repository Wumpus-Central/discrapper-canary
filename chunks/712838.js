n.d(t, { A: () => A });
var l = n(627968),
    r = n(64700),
    a = n(621466),
    i = n(397927),
    s = n(442433),
    o = n(636922),
    E = n(734057),
    u = n(486020),
    c = n(985018),
    _ = n(167415);
function d(e) {
    let { message: t } = e,
        n = u.Ay.getUserAvatarURL({ avatar: t.author.avatar, id: t.author.id, discriminator: t.author.discriminator }),
        r = t.author.globalName ?? t.author.username;
    return (0, l.jsxs)("div", {
        className: _.Iy,
        children: [
            (0, l.jsx)("img", { className: _.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: _.ur,
                children: [
                    (0, l.jsx)(i.Text, { variant: "text-sm/semibold", color: "text-default", children: r }),
                    (0, l.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: _.SR,
                        children: c.intl.string(c.t["5uaI/7"]),
                    }),
                ],
            }),
        ],
    });
}
class A extends r.PureComponent {
    containerRef = r.createRef();
    hitRef = r.createRef();
    handleContextMenu = (e, t) => {
        let r = E.A.getChannel(t.channel_id);
        null != r &&
            (e.stopPropagation(),
            (0, s.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("64879"), n.e("42183")]).then(n.bind(n, 847342));
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
                totalResults: a,
                isSpoilerHidden: s,
            } = this.props,
            u = E.A.getChannel(e.channel_id);
        if (null == u) return null;
        let A = `search-result-${e.id}`;
        return (0, l.jsx)(i.vN3, {
            ringTarget: this.hitRef,
            ringClassName: _.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, l.jsxs)("li", {
                className: _.kL,
                ...t,
                "aria-posinset": 1 + n + r,
                "aria-setsize": a,
                "aria-labelledby": A,
                children: [
                    (0, l.jsx)(i.DUT, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        ignoreKeyPress: !0,
                        innerRef: this.containerRef,
                        className: _.mk,
                        focusProps: { enabled: !1 },
                        children: (0, l.jsx)(
                            "div",
                            {
                                ref: this.hitRef,
                                className: _.iU,
                                children: s
                                    ? (0, l.jsx)(d, { message: e })
                                    : (0, l.jsx)(o.A, {
                                          id: A,
                                          message: e,
                                          channel: u,
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
                        className: _.NC,
                        "aria-hidden": !0,
                        children: (0, l.jsx)(i.DUT, {
                            className: _.x6,
                            onClick: this.jumpTo,
                            children: c.intl.string(c.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
