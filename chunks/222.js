n.d(t, { l: () => F });
var r = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(834730),
    u = n(939249),
    o = n(276293),
    c = n(866665),
    d = n(47167),
    f = n(713654),
    h = n(997141),
    m = n(146849),
    g = n(647660),
    x = n(863439),
    p = n(354777),
    E = n(78377),
    C = n(378570),
    A = n(302031),
    T = n(288254),
    N = n(253932),
    v = n(95701),
    I = n(734057),
    _ = n(576705),
    P = n(994500),
    j = n(309010),
    S = n(287809),
    b = n(621466),
    D = n(559106),
    y = n(442433),
    k = n(636922),
    R = n(486020),
    M = n(792996),
    U = n(823954);
function L(e) {
    let { message: t } = e,
        n = R.Ay.getUserAvatarURL({ avatar: t.author.avatar, id: t.author.id, discriminator: t.author.discriminator }),
        l = t.author.globalName ?? t.author.username;
    return (0, r.jsxs)("div", {
        className: U.Iy,
        children: [
            (0, r.jsx)("img", { className: U.gJ, src: n, alt: "", "aria-hidden": !0 }),
            (0, r.jsxs)("div", {
                className: U.ur,
                children: [
                    (0, r.jsx)(i.E, { variant: "body-sm/semibold", color: "text-default", children: l }),
                    (0, r.jsx)(i.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: U.SR,
                        children: M.intl.string(M.t["5uaI/7"]),
                    }),
                ],
            }),
        ],
    });
}
class O extends l.PureComponent {
    containerRef = l.createRef();
    hitRef = l.createRef();
    handleContextMenu = (e, t) => {
        let l = I.A.getChannel(t.channel_id);
        null != l &&
            (e.stopPropagation(),
            (0, y.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e(587308),
                    n.e(292699),
                    n.e(691671),
                    n.e(944801),
                    n.e(295998),
                    n.e(720045),
                    n.e(527687),
                    n.e(81189),
                    n.e(200203),
                    n.e(528916),
                    n.e(480419),
                ]).then(n.bind(n, 847342));
                return (n) => (0, r.jsx)(e, { ...n, message: t, channel: l });
            }));
    };
    jumpTo = (e) => {
        null != e && (e.preventDefault(), e.stopPropagation());
        let { onJump: t, message: n, index: r } = this.props;
        null != n && t(n, r);
    };
    handleMessageClick = (e) => {
        !(function (e, t) {
            let n = window?.getSelection();
            if (null != n && !n.isCollapsed) return !0;
            if (null == e || null == t) return !1;
            for (; (0, b.vq)(e) && e !== t;) {
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
                index: l,
                totalResults: a,
                isSpoilerHidden: s,
            } = this.props,
            i = I.A.getChannel(e.channel_id);
        if (null == i) return null;
        let o =
            null == this.props.resultIdPrefix ? `search-result-${e.id}` : `${this.props.resultIdPrefix}-${l}-${e.id}`;
        return (0, r.jsx)(D.vN, {
            ringTarget: this.hitRef,
            ringClassName: U.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, r.jsxs)("li", {
                className: U.kL,
                ...t,
                "aria-posinset": 1 + n + l,
                "aria-setsize": a,
                "aria-labelledby": o,
                children: [
                    (0, r.jsx)(u.D, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        ignoreKeyPress: !0,
                        innerRef: this.containerRef,
                        className: U.mk,
                        focusProps: { enabled: !1 },
                        children: (0, r.jsx)(
                            "div",
                            {
                                ref: this.hitRef,
                                className: U.iU,
                                children: s
                                    ? (0, r.jsx)(L, { message: e })
                                    : (0, r.jsx)(k.A, {
                                          id: o,
                                          message: e,
                                          channel: i,
                                          onContextMenu: (t) => this.handleContextMenu(t, e),
                                          animateAvatar: !1,
                                          subscribeToComponentDispatch: !1,
                                          trackAnnouncementViews: !0,
                                      }),
                            },
                            e.id,
                        ),
                    }),
                    (0, r.jsx)("div", {
                        className: U.NC,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(u.D, {
                            className: U.x6,
                            onClick: this.jumpTo,
                            children: M.intl.string(M.t.k5WiPf),
                        }),
                    }),
                ],
            }),
        });
    }
}
var X = n(652215),
    G = n(979882);
function $(e) {
    let { parentChannel: t, onSelectChannel: n } = e,
        l = (0, d.Ay)(t);
    if (null == l) return null;
    let a = null != t ? (0, f.gU)(t) : null;
    if (null == a) return null;
    let o = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a, { className: G.gQ, size: "xxs", color: "currentColor" }),
            (0, r.jsx)(i.E, {
                className: G.yK,
                variant: "body-xs/medium",
                color: "text-default",
                lineClamp: 1,
                children: l,
            }),
        ],
    });
    return null != t && (0, v.Z_)(t.type)
        ? (0, r.jsx)(u.D, {
              className: s()(G.rg, G.fj),
              onClick: (e) => {
                  (e.stopPropagation(), n(t.id));
              },
              children: o,
          })
        : (0, r.jsx)("div", { className: G.rg, children: o });
}
let w = { formatInline: !0, noStyleAndInteraction: !0 };
function F(e) {
    let {
            channel: t,
            messages: n,
            highlighter: a,
            startIndex: s,
            resultRefs: v,
            totalResults: b,
            scrollTo: D,
            renderEmbeds: y,
            offset: k,
            jumpToMessage: R,
            listNavigator: M,
            resultIdPrefix: U,
        } = e,
        L = N.gs.useSetting(),
        F = (0, T.IL)(t),
        V = l.useCallback((e) => {
            if (e === j.Ay.getChannelId()) return;
            let t = I.A.getChannel(e);
            null == t || ((_.A.can(X.xBc.VIEW_CHANNEL, t) || t.isPrivate()) && (0, C.iN)(t.id));
        }, []),
        W = null != t ? (0, d.m1)(t, S.default, P.A, !1) : "???",
        B = t?.parent_id != null ? I.A.getChannel(t.parent_id) : null,
        K = null != B ? (0, d.m1)(B, S.default, P.A) : null,
        z = (0, f.gU)(t) ?? o.TextIcon,
        J = _.A.can(X.xBc.MANAGE_MESSAGES, t),
        H = (0, m.I2)({ location: "SearchResultListChannelResults" }).enabled,
        q = (0, h.j)({ excluded: h.Z }),
        Q = (0, g.N)(W, { enabled: H, syntax: q }),
        Z = H
            ? (0, r.jsx)(E.O.Provider, {
                  value: w,
                  children: (0, r.jsx)(l.Suspense, { children: (0, r.jsx)(g.A, { content: W, parsed: Q }) }),
              })
            : (0, p.Ay)({ content: W, embeds: [] }, { postProcessor: a }).content,
        Y = l.useRef(null),
        [ee, et] = l.useState(!1);
    l.useEffect(() => {
        let e = Y.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && et(e.offsetWidth < e.scrollWidth);
    }, [W, Q]);
    let en = [W, K].filter((e) => null != e).join(", "),
        er = (0, x.A)(L, J);
    return (0, r.jsx)(A.Bs.Provider, {
        value: er,
        children: (0, r.jsxs)("ul", {
            role: "group",
            className: G.JT,
            "aria-label": en,
            children: [
                (0, r.jsx)(u.D, {
                    onClick: () => V(t.id),
                    children: (0, r.jsxs)("div", {
                        className: G.aT,
                        children: [
                            (0, r.jsx)(z, { className: G.er, size: "xs", color: "currentColor" }),
                            (0, r.jsx)("div", {
                                className: G.rm,
                                children: (0, r.jsx)(c.m, {
                                    asContainer: !0,
                                    text: W,
                                    shouldShow: ee,
                                    children: (0, r.jsx)(i.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        tag: "span",
                                        ref: Y,
                                        className: G.Kw,
                                        children: Z,
                                    }),
                                }),
                            }),
                            (0, r.jsx)($, { parentChannel: B, onSelectChannel: V }),
                        ],
                    }),
                }),
                n.map((e, t) => {
                    let l = s + t;
                    return (0, r.jsx)(
                        O,
                        {
                            ref: (e) => {
                                v.current[l] = e;
                            },
                            resultIdPrefix: U,
                            totalResults: b,
                            scrollTo: D,
                            renderEmbeds: y,
                            searchOffset: k,
                            pageResultsLength: n.length,
                            message: e,
                            index: l,
                            onJump: R,
                            listItemProps: M.getItemProps({ index: l }),
                            isSpoilerHidden: F,
                        },
                        `search-result-${l}`,
                    );
                }),
            ],
        }),
    });
}
