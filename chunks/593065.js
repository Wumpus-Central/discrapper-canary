n.d(t, { A: () => J });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(64015),
    o = n.n(l),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    _ = n(52133),
    E = n(499373),
    A = n(312138),
    h = n(475825),
    f = n(38021),
    I = n(951001),
    p = n(775602),
    T = n(793574),
    m = n(666860),
    g = n(688810),
    S = n(660387),
    N = n(343328),
    C = n(485947),
    O = n(915089),
    R = n(840251),
    L = n(688151);
let y = new R.E([], L.$G.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
var D = n(611924),
    v = n(452015),
    b = n(380335),
    P = n(309199),
    M = n(157550),
    U = n(265872),
    w = n(365199),
    G = n(58736),
    x = n(980707),
    k = n(477782),
    F = n(192308),
    B = n(282858),
    V = n(105292);
function H(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(x.W, {
        navId: "clean-up-inactive-gdms",
        "aria-label": V.intl.string(B.default["/QQnjy"]),
        onClose: t,
        onSelect: t,
        children: (0, i.jsx)(k.rX, {
            children: (0, i.jsx)(k.Dr, {
                id: "clean-up-inactive-gdms",
                label: V.intl.string(B.default.RQbtb8),
                action: () => {
                    (0, F.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("866475"),
                            n.e("367675"),
                            n.e("844780"),
                            n.e("766031"),
                            n.e("510630"),
                            n.e("564828"),
                        ]).then(n.bind(n, 378455));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                },
            }),
        }),
    });
}
function j(e) {
    let { className: t, iconClassName: n } = e,
        a = r.useRef(null);
    return (0, i.jsx)(U.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(H, { onClose: t });
        },
        position: "bottom",
        align: "left",
        spacing: 8,
        children: (e, r) => {
            let { onClick: s } = e,
                { isShown: l } = r;
            return (0, i.jsx)(G.Ay.Icon, {
                ref: a,
                onClick: s,
                icon: w.MoreHorizontalIcon,
                selected: l,
                className: t,
                iconClassName: n,
                tooltip: V.intl.string(B.default.FCwJId),
                tooltipPosition: "top",
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var W = n(97469),
    Y = n(734057),
    K = n(290863),
    $ = n(645959),
    z = n(834058),
    X = n(652215),
    q = n(307636);
let Z = r.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: q.Ie,
        children: [
            (0, i.jsx)("rect", { x: 40, y: 6, width: 144, height: 20, rx: 10 }),
            (0, i.jsx)("circle", { cx: 16, cy: 16, r: 16 }),
            (0, i.jsx)("rect", { x: 40, y: 50, width: 144, height: 20, rx: 10, opacity: 0.9 }),
            (0, i.jsx)("circle", { cx: 16, cy: 60, r: 16, opacity: 0.9 }),
            (0, i.jsx)("rect", { x: 40, y: 94, width: 144, height: 20, rx: 10, opacity: 0.8 }),
            (0, i.jsx)("circle", { cx: 16, cy: 104, r: 16, opacity: 0.8 }),
            (0, i.jsx)("rect", { x: 40, y: 138, width: 144, height: 20, rx: 10, opacity: 0.7 }),
            (0, i.jsx)("circle", { cx: 16, cy: 148, r: 16, opacity: 0.7 }),
            (0, i.jsx)("rect", { x: 40, y: 182, width: 144, height: 20, rx: 10, opacity: 0.6 }),
            (0, i.jsx)("circle", { cx: 16, cy: 192, r: 16, opacity: 0.6 }),
            (0, i.jsx)("rect", { x: 40, y: 226, width: 144, height: 20, rx: 10, opacity: 0.5 }),
            (0, i.jsx)("circle", { cx: 16, cy: 236, r: 16, opacity: 0.5 }),
            (0, i.jsx)("rect", { x: 40, y: 270, width: 144, height: 20, rx: 10, opacity: 0.4 }),
            (0, i.jsx)("circle", { cx: 16, cy: 280, r: 16, opacity: 0.4 }),
            (0, i.jsx)("rect", { x: 40, y: 314, width: 144, height: 20, rx: 10, opacity: 0.3 }),
            (0, i.jsx)("circle", { cx: 16, cy: 324, r: 16, opacity: 0.3 }),
            (0, i.jsx)("rect", { x: 40, y: 358, width: 144, height: 20, rx: 10, opacity: 0.2 }),
            (0, i.jsx)("circle", { cx: 16, cy: 368, r: 16, opacity: 0.2 }),
            (0, i.jsx)("rect", { x: 40, y: 402, width: 144, height: 20, rx: 10, opacity: 0.1 }),
            (0, i.jsx)("circle", { cx: 16, cy: 412, r: 16, opacity: 0.1 }),
        ],
    });
});
class Q extends r.Component {
    static getDerivedStateFromProps(e) {
        let { children: t, privateChannelIds: n } = e;
        if (null == t) return { preRenderedChildren: 0, nonNullChildren: [], totalRowCount: n.length };
        {
            let e = t.filter((e) => null != e && !1 !== e),
                i = e.length;
            return { preRenderedChildren: i, nonNullChildren: e, totalRowCount: i + n.length };
        }
    }
    static defaultProps = { padding: 8 };
    state = { initialized: !1, preRenderedChildren: 0, totalRowCount: 0, nonNullChildren: [] };
    _list = null;
    hasReportedAnalytics = !1;
    componentDidMount() {
        let { selectedChannelId: e, homeLink: t } = this.props;
        (null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics());
    }
    shouldComponentUpdate(e) {
        return !(0, _.A)(this.props, e, ["children"]);
    }
    componentDidUpdate(e) {
        let { selectedChannelId: t, homeLink: n } = this.props;
        (null != t && t !== e.selectedChannelId
            ? this.scrollToChannel(t)
            : null == t && n !== e.homeLink && this.scrollToChannel(null),
            this.reportAnalytics());
    }
    scrollToChannel(e) {
        if (null == this._list) return;
        let { padding: t } = this.props,
            { preRenderedChildren: n } = this.state,
            i = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            r = 0;
        i < 0 || null == e
            ? this._list.scrollTo({ to: r })
            : ((r += 44 * (i + n) + t), this._list.scrollIntoViewRect({ start: Math.max(r - 8, 0), end: r + 44 + 8 }));
    }
    reportAnalytics = () => {
        if (this.hasReportedAnalytics) return;
        let e = this._list?.getScrollerState();
        if (null == e) return;
        let { privateChannelIds: t, channels: n } = this.props;
        if (0 === t.length) return;
        let i = r.Children.count(this.props.children);
        if (null == e) return;
        let a = Math.round((e.offsetHeight - 44 * i) / 44),
            s = a > t.length ? t.slice(0, a + 1) : t,
            l = s.map((e) => (null != n[e] ? n[e].getRecipientId() : null)),
            o = t.some((e) => (0, N.A)(e)),
            d = {
                num_users_visible: s.length,
                num_users_visible_with_mobile_indicator: l.filter((e) => null != e && K.A.isMobileOnline(e)).length,
            };
        ((this.hasReportedAnalytics = !0),
            m.Ay.trackWithMetadata(X.HAw.DM_LIST_VIEWED, {
                ...d,
                ...(0, S.F)(),
                visible_user_ids: l.filter((e) => null != e),
                changelog_dm_visible: o,
            }));
    };
    getSectionHeight = (e) => 24 * (0 !== e);
    handleScroll = o()(() => {
        if (null != this._list) {
            let e = this._list.getScrollerNode();
            null != e && I.A.updateChannelListScroll(X.ME, e.scrollTop);
        }
        void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
    }, 100);
    renderDM = (e, t) => {
        let { privateChannelIds: n, channels: r, selectedChannelId: a } = this.props,
            { totalRowCount: s, preRenderedChildren: l } = this.state,
            o = r[n[t]];
        return null == o
            ? null
            : (0, i.jsx)(
                  z.Ay,
                  { channel: o, selected: o.id === a, "aria-posinset": l + t + 1, "aria-setsize": s },
                  o.id,
              );
    };
    renderChild = (e) => {
        let { nonNullChildren: t, totalRowCount: n } = this.state,
            i = t[e];
        return r.isValidElement(i) ? r.cloneElement(i, { "aria-setsize": n, "aria-posinset": e + 1 }) : i;
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            { privateChannelIds: r } = this.props;
        return 0 === t
            ? this.renderChild(n)
            : 0 === n && 0 === r.length
              ? (0, i.jsx)(Z, {}, "no-private-channels")
              : this.renderDM(t, n);
    };
    renderSection = (e) => {
        let { section: t } = e;
        return 0 === t
            ? null
            : (0, i.jsxs)(
                  C.A,
                  {
                      className: q._e,
                      children: [
                          (0, i.jsx)("span", { className: q.TK, children: V.intl.string(V.t.YUU0RF) }),
                          (0, i.jsxs)("div", {
                              className: q.$s,
                              children: [
                                  (0, i.jsx)(j, { className: s()(q.U2, q.Mj), iconClassName: q.Br }),
                                  (0, i.jsx)(v.Ay, {
                                      tooltip: V.intl.string(V.t.bA875g),
                                      tooltipPosition: "top",
                                      className: q.U2,
                                      iconClassName: q.Br,
                                      icon: E.T,
                                      subscribeToGlobalHotkey: !0,
                                  }),
                              ],
                          }),
                      ],
                  },
                  t,
              );
    };
    getRowHeight = (e, t) => {
        let { privateChannelIds: n, density: i } = this.props,
            { nonNullChildren: a } = this.state,
            s = 44;
        if (0 === e) {
            let e = a[t];
            r.isValidElement(e) &&
                (s = e.key?.startsWith("section-divider") ? 25 : "dm-quick-launcher" === e.key ? 67 : 40);
        } else s = "compact" === i ? 40 : "default" === i ? 44 : 50;
        return 1 === e && 0 === t && 0 === n.length ? 428 : s;
    };
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, i.jsx)(d.PR, {
            children: (r) => {
                let { ref: a, role: s, ...l } = r;
                return (0, i.jsx)(A.sk, {
                    children: (r) =>
                        (0, i.jsx)(h.OZ, {
                            fade: !0,
                            innerRole: s,
                            innerAriaLabel: V.intl.string(V.t.YUU0RF),
                            innerTag: "ul",
                            ref: (e) => {
                                ((this._list = e),
                                    (this.props.listRef.current = e),
                                    (a.current = e?.getScrollerNode() ?? null));
                            },
                            onScroll: this.handleScroll,
                            className: q.XG,
                            sectionHeight: this.getSectionHeight,
                            paddingTop: t,
                            paddingBottom: 8,
                            rowHeight: this.getRowHeight,
                            renderSection: this.renderSection,
                            renderRow: this.renderRow,
                            sections: [n, Math.max(e.length, 1)],
                            ...l,
                            ...r,
                        }),
                });
            },
        });
    }
}
let J = function (e) {
    let { density: t } = (0, f.wR)(),
        { version: n, theme: a, children: s, listScrollerRef: l } = e,
        o = r.Children.count(s),
        _ = Y.A.getMutablePrivateChannels(),
        E = (0, P.uX)(_),
        A = (0, u.yK)([$.A, b.A, M.A], () => {
            let e = $.A.getPrivateChannelIds();
            return (0, P.eh)(e, [b.A, M.A]);
        });
    (0, D.P)(y);
    let { analyticsLocations: h } = (0, g.Ay)(T.A.CONTACTS_LIST),
        I = (0, W.NC)(),
        { keyboardModeEnabled: m, version: S } = (0, u.cf)([p.Ay, Y.A], () => ({
            keyboardModeEnabled: p.Ay.keyboardModeEnabled,
            version: null != n ? `${n}:${Y.A.getPrivateChannelsVersion()}` : Y.A.getPrivateChannelsVersion(),
        })),
        N = r.useRef(null),
        C = l ?? N,
        R = r.useCallback(
            (e) => {
                let t = C.current,
                    n = document.querySelector(e);
                null != t &&
                    null != n &&
                    t.scrollIntoViewNode({
                        node: n,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
            },
            [C],
        ),
        L = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [C],
        ),
        v = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [C],
        ),
        U = (0, O.GV)(),
        w = (0, c.Ay)({
            id: `private-channels-${U}`,
            isEnabled: m,
            scrollToStart: L,
            scrollToEnd: v,
            defaultFocused: (o + 1).toString(),
            setFocus: R,
        });
    return (0, i.jsx)(g.f5, {
        value: h,
        children: (0, i.jsx)(d.hD, {
            navigator: w,
            children: (0, i.jsx)(Q, {
                ...e,
                density: t,
                channels: E,
                privateChannelIds: A,
                listRef: C,
                theme: I ?? a,
                version: S,
            }),
        }),
    });
};
