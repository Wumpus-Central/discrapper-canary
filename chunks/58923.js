n.d(t, { A: () => H });
var i = n(627968),
    a = n(64700),
    r = n(985623),
    s = n.n(r),
    l = n(837381),
    o = n(887129),
    d = n(17928),
    c = n(52133),
    _ = n(499373),
    E = n(312138),
    u = n(475825),
    A = n(38021),
    I = n(951001),
    T = n(775602),
    h = n(793574),
    S = n(58149),
    N = n(688810),
    f = n(660387),
    p = n(343328),
    m = n(485947),
    O = n(915089),
    C = n(840251),
    R = n(688151);
let g = new C.E([], R.$G.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
var L = n(611924),
    D = n(95550),
    b = n(380335),
    M = n(309199),
    P = n(157550),
    U = n(97469),
    v = n(734057),
    y = n(290863),
    G = n(567761),
    w = n(696157),
    x = n(652215),
    V = n(985018),
    B = n(958847);
let F = a.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: B.Ie,
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
class k extends a.Component {
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
            a = 0;
        i < 0 || null == e
            ? this._list.scrollTo({ to: a })
            : ((a += 44 * (i + n) + t), this._list.scrollIntoViewRect({ start: Math.max(a - 8, 0), end: a + 44 + 8 }));
    }
    reportAnalytics = () => {
        if (this.hasReportedAnalytics) return;
        let e = this._list?.getScrollerState();
        if (null == e) return;
        let { privateChannelIds: t, channels: n } = this.props;
        if (0 === t.length) return;
        let i = a.Children.count(this.props.children);
        if (null == e) return;
        let r = Math.round((e.offsetHeight - 44 * i) / 44),
            s = r > t.length ? t.slice(0, r + 1) : t,
            l = s.map((e) => (null != n[e] ? n[e].getRecipientId() : null)),
            o = t.some((e) => (0, p.A)(e)),
            d = {
                num_users_visible: s.length,
                num_users_visible_with_mobile_indicator: l.filter((e) => null != e && y.A.isMobileOnline(e)).length,
            };
        (this.hasReportedAnalytics = !0),
            S.Ay.trackWithMetadata(x.HAw.DM_LIST_VIEWED, {
                ...d,
                ...(0, f.F)(),
                visible_user_ids: l.filter((e) => null != e),
                changelog_dm_visible: o,
            });
    };
    getSectionHeight = (e) => 24 * (0 !== e);
    handleScroll = s()(() => {
        if (null != this._list) {
            let e = this._list.getScrollerNode();
            null != e && I.A.updateChannelListScroll(x.ME, e.scrollTop);
        }
        void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
    }, 100);
    renderDM = (e, t) => {
        let { privateChannelIds: n, channels: a, selectedChannelId: r } = this.props,
            { totalRowCount: s, preRenderedChildren: l } = this.state,
            o = a[n[t]];
        return null == o
            ? null
            : (0, i.jsx)(
                  w.Ay,
                  { channel: o, selected: o.id === r, "aria-posinset": l + t + 1, "aria-setsize": s },
                  o.id,
              );
    };
    renderChild = (e) => {
        let { nonNullChildren: t, totalRowCount: n } = this.state,
            i = t[e];
        return a.isValidElement(i) ? a.cloneElement(i, { "aria-setsize": n, "aria-posinset": e + 1 }) : i;
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            { privateChannelIds: a } = this.props;
        return 0 === t
            ? this.renderChild(n)
            : 0 === n && 0 === a.length
              ? (0, i.jsx)(F, {}, "no-private-channels")
              : this.renderDM(t, n);
    };
    renderSection = (e) => {
        let { section: t } = e;
        return 0 === t
            ? null
            : (0, i.jsxs)(
                  m.A,
                  {
                      className: B._e,
                      children: [
                          (0, i.jsx)("span", { className: B.TK, children: V.intl.string(V.t.YUU0RF) }),
                          (0, i.jsx)(D.Ay, {
                              tooltip: V.intl.string(V.t.bA875g),
                              tooltipPosition: "top",
                              className: B.U2,
                              iconClassName: B.Br,
                              icon: _.T,
                              subscribeToGlobalHotkey: !0,
                          }),
                      ],
                  },
                  t,
              );
    };
    getRowHeight = (e, t) => {
        let { privateChannelIds: n, density: i } = this.props,
            { nonNullChildren: r } = this.state,
            s = 44;
        if (0 === e) {
            let e = r[t];
            a.isValidElement(e) &&
                (s = e.key?.startsWith("section-divider") ? 25 : "dm-quick-launcher" === e.key ? 67 : 40);
        } else s = "compact" === i ? 40 : "default" === i ? 44 : 50;
        return 1 === e && 0 === t && 0 === n.length ? 428 : s;
    };
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, i.jsx)(l.PR, {
            children: (a) => {
                let { ref: r, role: s, ...l } = a;
                return (0, i.jsx)(E.sk, {
                    children: (a) =>
                        (0, i.jsx)(u.OZ, {
                            fade: !0,
                            innerRole: s,
                            innerAriaLabel: V.intl.string(V.t.YUU0RF),
                            innerTag: "ul",
                            ref: (e) => {
                                (this._list = e),
                                    (this.props.listRef.current = e),
                                    (r.current = e?.getScrollerNode() ?? null);
                            },
                            onScroll: this.handleScroll,
                            className: B.XG,
                            sectionHeight: this.getSectionHeight,
                            paddingTop: t,
                            paddingBottom: 8,
                            rowHeight: this.getRowHeight,
                            renderSection: this.renderSection,
                            renderRow: this.renderRow,
                            sections: [n, Math.max(e.length, 1)],
                            ...l,
                            ...a,
                        }),
                });
            },
        });
    }
}
let H = (e) => {
    let { density: t } = (0, A.wR)(),
        { version: n, theme: r, children: s, listScrollerRef: c } = e,
        _ = a.Children.count(s),
        E = v.A.getMutablePrivateChannels(),
        u = (0, M.uX)(E),
        I = (0, d.yK)([G.default, b.A, P.A], () => {
            let e = G.default.getPrivateChannelIds();
            return (0, M.eh)(e, [b.A, P.A]);
        });
    (0, L.P)(g);
    let { analyticsLocations: S } = (0, N.Ay)(h.A.CONTACTS_LIST),
        f = (0, U.NC)(),
        { keyboardModeEnabled: p, version: m } = (0, d.cf)([T.A, v.A], () => ({
            keyboardModeEnabled: T.A.keyboardModeEnabled,
            version: null != n ? `${n}:${v.A.getPrivateChannelsVersion()}` : v.A.getPrivateChannelsVersion(),
        })),
        C = a.useRef(null),
        R = c ?? C,
        D = a.useCallback(
            (e) => {
                let t = R.current,
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
            [R],
        ),
        y = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = R.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [R],
        ),
        w = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = R.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [R],
        ),
        x = (0, O.GV)(),
        V = (0, o.Ay)({
            id: `private-channels-${x}`,
            isEnabled: p,
            scrollToStart: y,
            scrollToEnd: w,
            defaultFocused: (_ + 1).toString(),
            setFocus: D,
        });
    return (0, i.jsx)(N.f5, {
        value: S,
        children: (0, i.jsx)(l.hD, {
            navigator: V,
            children: (0, i.jsx)(k, {
                ...e,
                density: t,
                channels: u,
                privateChannelIds: I,
                listRef: R,
                theme: f ?? r,
                version: m,
            }),
        }),
    });
};
