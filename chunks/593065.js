n.d(t, { A: () => X });
var i = n(477900),
    r = n(582128),
    a = n(64015),
    s = n.n(a),
    l = n(837381),
    o = n(887129),
    d = n(17928),
    c = n(52133),
    u = n(499373),
    _ = n(312138),
    E = n(475825),
    A = n(38021),
    h = n(951001),
    I = n(775602),
    f = n(793574),
    p = n(95561),
    T = n(688810),
    m = n(660387),
    g = n(343328),
    S = n(485947),
    N = n(915089),
    C = n(840251),
    O = n(688151);
let R = new C.E([], O.$G.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
var L = n(611924),
    y = n(452015),
    D = n(380335),
    v = n(309199),
    b = n(157550),
    M = n(922016),
    P = n(365199),
    U = n(58736),
    w = n(980707),
    G = n(477782),
    x = n(192308),
    k = n(282858),
    F = n(375708);
function V(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(w.W, {
        navId: "clean-up-inactive-gdms",
        "aria-label": F.intl.string(k.default["/QQnjy"]),
        onClose: t,
        onSelect: t,
        children: (0, i.jsx)(G.rX, {
            children: (0, i.jsx)(G.Dr, {
                id: "clean-up-inactive-gdms",
                label: F.intl.string(k.default.RQbtb8),
                action: () => {
                    (0, x.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("130891"),
                            n.e("367675"),
                            n.e("844780"),
                            n.e("766031"),
                            n.e("564828"),
                        ]).then(n.bind(n, 378455));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                },
            }),
        }),
    });
}
function B(e) {
    let { className: t, iconClassName: n } = e,
        a = r.useRef(null);
    return (0, i.jsx)(M.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(V, { onClose: t });
        },
        position: "bottom",
        align: "left",
        spacing: 8,
        children: (e, r) => {
            let { onClick: s } = e,
                { isShown: l } = r;
            return (0, i.jsx)(U.Ay.Icon, {
                ref: a,
                onClick: s,
                icon: P.MoreHorizontalIcon,
                selected: l,
                className: t,
                iconClassName: n,
                tooltip: F.intl.string(k.default.FCwJId),
                tooltipPosition: "top",
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var H = n(97469),
    j = n(734057),
    W = n(290863),
    Y = n(645959),
    K = n(715069),
    $ = n(652215),
    z = n(307636);
let q = r.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: z.Ie,
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
class Z extends r.Component {
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
        null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics();
    }
    shouldComponentUpdate(e) {
        return !(0, c.A)(this.props, e, ["children"]);
    }
    componentDidUpdate(e) {
        let { selectedChannelId: t, homeLink: n } = this.props;
        null != t && t !== e.selectedChannelId
            ? this.scrollToChannel(t)
            : null == t && n !== e.homeLink && this.scrollToChannel(null),
            this.reportAnalytics();
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
            o = t.some((e) => (0, g.A)(e)),
            d = {
                num_users_visible: s.length,
                num_users_visible_with_mobile_indicator: l.filter((e) => null != e && W.A.isMobileOnline(e)).length,
            };
        (this.hasReportedAnalytics = !0),
            p.Ay.trackWithMetadata($.HAw.DM_LIST_VIEWED, {
                ...d,
                ...(0, m.F)(),
                visible_user_ids: l.filter((e) => null != e),
                changelog_dm_visible: o,
            });
    };
    getSectionHeight = (e) => 24 * (0 !== e);
    handleScroll = s()(() => {
        if (null != this._list) {
            let e = this._list.getScrollerNode();
            null != e && h.A.updateChannelListScroll($.ME, e.scrollTop);
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
                  K.Ay,
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
              ? (0, i.jsx)(q, {}, "no-private-channels")
              : this.renderDM(t, n);
    };
    renderSection = (e) => {
        let { section: t } = e;
        return 0 === t
            ? null
            : (0, i.jsxs)(
                  S.A,
                  {
                      className: z._e,
                      children: [
                          (0, i.jsx)("span", { className: z.TK, children: F.intl.string(F.t.YUU0RF) }),
                          (0, i.jsxs)("div", {
                              className: z.$s,
                              children: [
                                  (0, i.jsx)(B, { className: `${z.U2} ${z.Mj}`, iconClassName: z.Br }),
                                  (0, i.jsx)(y.Ay, {
                                      tooltip: F.intl.string(F.t.bA875g),
                                      tooltipPosition: "top",
                                      className: z.U2,
                                      iconClassName: z.Br,
                                      icon: u.T,
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
        return (0, i.jsx)(l.PR, {
            children: (r) => {
                let { ref: a, role: s, ...l } = r;
                return (0, i.jsx)(_.sk, {
                    children: (r) =>
                        (0, i.jsx)(E.OZ, {
                            fade: !0,
                            innerRole: s,
                            innerAriaLabel: F.intl.string(F.t.YUU0RF),
                            innerTag: "ul",
                            ref: (e) => {
                                (this._list = e),
                                    (this.props.listRef.current = e),
                                    (a.current = e?.getScrollerNode() ?? null);
                            },
                            onScroll: this.handleScroll,
                            className: z.XG,
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
let X = function (e) {
    let { density: t } = (0, A.wR)(),
        { version: n, theme: a, children: s, listScrollerRef: c } = e,
        u = r.Children.count(s),
        _ = j.A.getMutablePrivateChannels(),
        E = (0, v.uX)(_),
        h = (0, d.yK)([Y.A, D.A, b.A], () => {
            let e = Y.A.getPrivateChannelIds();
            return (0, v.eh)(e, [D.A, b.A]);
        });
    (0, L.P)(R);
    let { analyticsLocations: p } = (0, T.Ay)(f.A.CONTACTS_LIST),
        m = (0, H.NC)(),
        { keyboardModeEnabled: g, version: S } = (0, d.cf)([I.Ay, j.A], () => ({
            keyboardModeEnabled: I.Ay.keyboardModeEnabled,
            version: null != n ? `${n}:${j.A.getPrivateChannelsVersion()}` : j.A.getPrivateChannelsVersion(),
        })),
        C = r.useRef(null),
        O = c ?? C,
        y = r.useCallback(
            (e) => {
                let t = O.current,
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
            [O],
        ),
        M = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = O.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [O],
        ),
        P = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = O.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [O],
        ),
        U = (0, N.GV)(),
        w = (0, o.Ay)({
            id: `private-channels-${U}`,
            isEnabled: g,
            scrollToStart: M,
            scrollToEnd: P,
            defaultFocused: (u + 1).toString(),
            setFocus: y,
        });
    return (0, i.jsx)(T.f5, {
        value: p,
        children: (0, i.jsx)(l.hD, {
            navigator: w,
            children: (0, i.jsx)(Z, {
                ...e,
                density: t,
                channels: E,
                privateChannelIds: h,
                listRef: O,
                theme: m ?? a,
                version: S,
            }),
        }),
    });
};
