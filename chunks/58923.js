"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    r = n(64700),
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
    D = n(277370),
    y = n(380335),
    v = n(309199),
    b = n(157550),
    M = n(97469),
    P = n(734057),
    U = n(290863),
    w = n(645959),
    G = n(715069),
    x = n(652215),
    k = n(375708),
    F = n(958847);
let V = r.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: F.Ie,
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
class B extends r.Component {
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
                num_users_visible_with_mobile_indicator: l.filter((e) => null != e && U.A.isMobileOnline(e)).length,
            };
        (this.hasReportedAnalytics = !0),
            p.Ay.trackWithMetadata(x.HAw.DM_LIST_VIEWED, {
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
            null != e && h.A.updateChannelListScroll(x.ME, e.scrollTop);
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
                  G.Ay,
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
              ? (0, i.jsx)(V, {}, "no-private-channels")
              : this.renderDM(t, n);
    };
    renderSection = (e) => {
        let { section: t } = e;
        return 0 === t
            ? null
            : (0, i.jsxs)(
                  S.A,
                  {
                      className: F._e,
                      children: [
                          (0, i.jsx)("span", { className: F.TK, children: k.intl.string(k.t.YUU0RF) }),
                          (0, i.jsx)(D.Ay, {
                              tooltip: k.intl.string(k.t.bA875g),
                              tooltipPosition: "top",
                              className: F.U2,
                              iconClassName: F.Br,
                              icon: u.T,
                              subscribeToGlobalHotkey: !0,
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
                            innerAriaLabel: k.intl.string(k.t.YUU0RF),
                            innerTag: "ul",
                            ref: (e) => {
                                (this._list = e),
                                    (this.props.listRef.current = e),
                                    (a.current = e?.getScrollerNode() ?? null);
                            },
                            onScroll: this.handleScroll,
                            className: F.XG,
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
let H = function (e) {
    let { density: t } = (0, A.wR)(),
        { version: n, theme: a, children: s, listScrollerRef: c } = e,
        u = r.Children.count(s),
        _ = P.A.getMutablePrivateChannels(),
        E = (0, v.uX)(_),
        h = (0, d.yK)([w.A, y.A, b.A], () => {
            let e = w.A.getPrivateChannelIds();
            return (0, v.eh)(e, [y.A, b.A]);
        });
    (0, L.P)(R);
    let { analyticsLocations: p } = (0, T.Ay)(f.A.CONTACTS_LIST),
        m = (0, M.NC)(),
        { keyboardModeEnabled: g, version: S } = (0, d.cf)([I.Ay, P.A], () => ({
            keyboardModeEnabled: I.Ay.keyboardModeEnabled,
            version: null != n ? `${n}:${P.A.getPrivateChannelsVersion()}` : P.A.getPrivateChannelsVersion(),
        })),
        C = r.useRef(null),
        O = c ?? C,
        D = r.useCallback(
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
        U = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = O.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [O],
        ),
        G = r.useCallback(
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
        x = (0, N.GV)(),
        k = (0, o.Ay)({
            id: `private-channels-${x}`,
            isEnabled: g,
            scrollToStart: U,
            scrollToEnd: G,
            defaultFocused: (u + 1).toString(),
            setFocus: D,
        });
    return (0, i.jsx)(T.f5, {
        value: p,
        children: (0, i.jsx)(l.hD, {
            navigator: k,
            children: (0, i.jsx)(B, {
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
