"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    r = n(64700),
    s = n(985623),
    a = n.n(s),
    o = n(837381),
    l = n(887129),
    u = n(17928),
    c = n(52133),
    d = n(499373),
    _ = n(312138),
    f = n(475825),
    h = n(38021),
    p = n(951001),
    E = n(775602),
    m = n(793574),
    g = n(95561),
    A = n(688810),
    I = n(660387),
    T = n(343328),
    S = n(485947),
    N = n(915089),
    y = n(840251),
    C = n(688151);
let v = new y.E([], C.$G.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
var O = n(611924),
    R = n(880682),
    b = n(380335),
    D = n(309199),
    L = n(157550),
    w = n(97469),
    M = n(734057),
    P = n(290863),
    x = n(567761),
    U = n(696157),
    k = n(652215),
    G = n(375708),
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
        let s = Math.round((e.offsetHeight - 44 * i) / 44),
            a = s > t.length ? t.slice(0, s + 1) : t,
            o = a.map((e) => (null != n[e] ? n[e].getRecipientId() : null)),
            l = t.some((e) => (0, T.A)(e)),
            u = {
                num_users_visible: a.length,
                num_users_visible_with_mobile_indicator: o.filter((e) => null != e && P.A.isMobileOnline(e)).length,
            };
        (this.hasReportedAnalytics = !0),
            g.Ay.trackWithMetadata(k.HAw.DM_LIST_VIEWED, {
                ...u,
                ...(0, I.F)(),
                visible_user_ids: o.filter((e) => null != e),
                changelog_dm_visible: l,
            });
    };
    getSectionHeight = (e) => 24 * (0 !== e);
    handleScroll = a()(() => {
        if (null != this._list) {
            let e = this._list.getScrollerNode();
            null != e && p.A.updateChannelListScroll(k.ME, e.scrollTop);
        }
        void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
    }, 100);
    renderDM = (e, t) => {
        let { privateChannelIds: n, channels: r, selectedChannelId: s } = this.props,
            { totalRowCount: a, preRenderedChildren: o } = this.state,
            l = r[n[t]];
        return null == l
            ? null
            : (0, i.jsx)(
                  U.Ay,
                  { channel: l, selected: l.id === s, "aria-posinset": o + t + 1, "aria-setsize": a },
                  l.id,
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
                          (0, i.jsx)("span", { className: F.TK, children: G.intl.string(G.t.YUU0RF) }),
                          (0, i.jsx)(R.Ay, {
                              tooltip: G.intl.string(G.t.bA875g),
                              tooltipPosition: "top",
                              className: F.U2,
                              iconClassName: F.Br,
                              icon: d.T,
                              subscribeToGlobalHotkey: !0,
                          }),
                      ],
                  },
                  t,
              );
    };
    getRowHeight = (e, t) => {
        let { privateChannelIds: n, density: i } = this.props,
            { nonNullChildren: s } = this.state,
            a = 44;
        if (0 === e) {
            let e = s[t];
            r.isValidElement(e) &&
                (a = e.key?.startsWith("section-divider") ? 25 : "dm-quick-launcher" === e.key ? 67 : 40);
        } else a = "compact" === i ? 40 : "default" === i ? 44 : 50;
        return 1 === e && 0 === t && 0 === n.length ? 428 : a;
    };
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, i.jsx)(o.PR, {
            children: (r) => {
                let { ref: s, role: a, ...o } = r;
                return (0, i.jsx)(_.sk, {
                    children: (r) =>
                        (0, i.jsx)(f.OZ, {
                            fade: !0,
                            innerRole: a,
                            innerAriaLabel: G.intl.string(G.t.YUU0RF),
                            innerTag: "ul",
                            ref: (e) => {
                                (this._list = e),
                                    (this.props.listRef.current = e),
                                    (s.current = e?.getScrollerNode() ?? null);
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
                            ...o,
                            ...r,
                        }),
                });
            },
        });
    }
}
let H = (e) => {
    let { density: t } = (0, h.wR)(),
        { version: n, theme: s, children: a, listScrollerRef: c } = e,
        d = r.Children.count(a),
        _ = M.A.getMutablePrivateChannels(),
        f = (0, D.uX)(_),
        p = (0, u.yK)([x.default, b.A, L.A], () => {
            let e = x.default.getPrivateChannelIds();
            return (0, D.eh)(e, [b.A, L.A]);
        });
    (0, O.P)(v);
    let { analyticsLocations: g } = (0, A.Ay)(m.A.CONTACTS_LIST),
        I = (0, w.NC)(),
        { keyboardModeEnabled: T, version: S } = (0, u.cf)([E.A, M.A], () => ({
            keyboardModeEnabled: E.A.keyboardModeEnabled,
            version: null != n ? `${n}:${M.A.getPrivateChannelsVersion()}` : M.A.getPrivateChannelsVersion(),
        })),
        y = r.useRef(null),
        C = c ?? y,
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
        P = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [C],
        ),
        U = r.useCallback(
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
        k = (0, N.GV)(),
        G = (0, l.Ay)({
            id: `private-channels-${k}`,
            isEnabled: T,
            scrollToStart: P,
            scrollToEnd: U,
            defaultFocused: (d + 1).toString(),
            setFocus: R,
        });
    return (0, i.jsx)(A.f5, {
        value: g,
        children: (0, i.jsx)(o.hD, {
            navigator: G,
            children: (0, i.jsx)(B, {
                ...e,
                density: t,
                channels: f,
                privateChannelIds: p,
                listRef: C,
                theme: I ?? s,
                version: S,
            }),
        }),
    });
};
