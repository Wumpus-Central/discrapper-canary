n.d(t, {
    $x: () => P,
    ZP: () => N,
    d7: () => C,
    w6: () => E,
}),
    n(539854),
    n(361932),
    n(187205),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(990547),
    o = n(692547),
    s = n(481060),
    c = n(213609),
    a = n(252618),
    u = n(243778),
    d = n(126848),
    f = n(207874),
    p = n(585483),
    b = n(960048),
    O = n(410575),
    m = n(493544),
    h = n(981631),
    g = n(388032),
    j = n(486807);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0,
    }),
    P = 1.4,
    E = 15,
    C = 2;
function w(e) {
    var t, n;
    let { section: i, setPreventNavigation: o, scrollerRef: s } = e;
    (0, c.Z)({
        type: l.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties,
    });
    let a = null != (t = null == i ? void 0 : i.element) ? t : h.VqG,
        u = null != (n = null == i ? void 0 : i.elementProps) ? n : {};
    return (0, r.jsx)(O.Z, {
        section: i.section,
        children: (0, r.jsx)(
            a,
            S(v({}, u), {
                setPreventNavigation: o,
                refToScroller: s,
            }),
        ),
    });
}
class _ extends i.PureComponent {
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: n } = t;
            null != n &&
                n.forEach((e) => {
                    e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e);
                });
        });
    }
    componentDidUpdate(e) {
        let { section: t } = e;
        t !== this.props.section && (this._intensity = P);
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            this._subscribedStores.forEach((e) => e.removeChangeListener(this.handleNoticeStoreUpdate)),
            this.props.sections.forEach((e) => {
                var t;
                return null == (t = e.onSettingsClose) ? void 0 : t.call(e);
            });
    }
    getPredicateSections() {
        return this.props.sections.filter((e) => null == e.predicate || e.predicate());
    }
    validNavigation() {
        var e;
        let { section: t } = this.props,
            { notice: n } = null != (e = this.getPredicateSections().find((e) => t === e.section)) ? e : {};
        return null != n && n.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (p.S.dispatch(h.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + C, E)),
              p.S.dispatch(h.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = P), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: i } = this.props,
            l = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            o = null != t ? t : e[0].section;
        return (0, r.jsx)(u.ZP, {
            contentTypes: l,
            children: (t) => {
                let { visibleContent: l } = t;
                return (0, r.jsxs)(s.njP, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: [
                        i ? (0, r.jsx)(f.Z, { style: j.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case m.ID.HEADER:
                                    return (0, r.jsx)(s.njP.Header, { children: e.label }, t);
                                case m.ID.DIVIDER:
                                    return (0, r.jsx)(s.njP.Separator, {}, t);
                                case m.ID.CUSTOM:
                                    var n;
                                    let i = null != (n = e.element) ? n : h.VqG;
                                    return (0, r.jsx)(i, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, o === e.section, l);
                            }
                        }),
                    ],
                });
            },
        });
    }
    renderNotice(e) {
        let { theme: t } = this.props;
        if (null == e || null == e.notice) return null;
        let { stores: n, element: i } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, r.jsx)(i, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: i, onClose: l, hideSidebar: o } = this.props,
            s = this.getPredicateSections(),
            c = s.find((e) => e.section === n);
        if (null == c || null == n) return null;
        let u = null != (e = "string" == typeof c.label ? c.label : c.ariaLabel) ? e : i;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.yY, {
                    location: i,
                    subsection: u,
                }),
                (0, r.jsx)(m.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(s),
                    content: (0, r.jsx)(w, {
                        section: c,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef,
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: o,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: c.type,
                    notice: this.renderNotice(c),
                    closeAction: null != l ? this.handleClose : void 0,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "_unmounted", !1),
            y(this, "_intensity", P),
            y(this, "_subscribedStores", []),
            y(this, "scrollerRef", i.createRef()),
            y(
                this,
                "state",
                S(v({}, x), {
                    sidebarOpen:
                        this.props.section !== h.oAB.SUBSCRIPTIONS &&
                        this.props.section !== h.oAB.PROFILE_CUSTOMIZATION,
                }),
            ),
            y(this, "setPreventNavigation", (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t,
                });
            }),
            y(this, "handleSetSection", (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: r, onPreventNavigation: i } = this.state,
                    l = () => {
                        var r;
                        null == t || t(e);
                        let { notice: i } = null != (r = n.find((t) => e === t.section)) ? r : {},
                            l = null != i ? i.stores : null;
                        null != l &&
                            l.forEach((e) => {
                                this._subscribedStores.includes(e) ||
                                    (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(S(v({}, x), { sidebarOpen: !1 }));
                    };
                this.validNavigation() &&
                    !r &&
                    (l(),
                    b.Z.addBreadcrumb({
                        category: "settings",
                        message: "Set section: ".concat(e),
                    })),
                    r && null != i && i(l);
            }),
            y(this, "handleClose", () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            y(this, "handleNoticeStoreUpdate", () => {
                this._unmounted || ((this._intensity = P), this.forceUpdate());
            }),
            y(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
                let {
                        section: i,
                        label: l = null,
                        ariaLabel: c,
                        onClick: a,
                        variant: u,
                        icon: f,
                        className: p,
                        newIndicator: b,
                        newIndicatorDismissibleContentTypes: O,
                        badgeCount: m,
                    } = e,
                    y = null;
                i === h.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (y = (0, r.jsx)(s.Mgn, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: o.Z.colors.STATUS_WARNING.css,
                      }))
                    : null != e.decoration
                      ? (y = (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: e.decoration,
                        }))
                      : null != n && (null == O ? void 0 : O.includes(n)) && !t
                        ? (y = null != b ? b : (0, r.jsx)(s.IGR, { text: g.intl.string(g.t.y2b7CA) }))
                        : null != f
                          ? (y = f)
                          : null != m && m > 0 && (y = (0, r.jsx)(s.mAB, { count: m }));
                let v =
                    i === h.oAB.PREMIUM
                        ? (0, r.jsx)(d.Z, {
                              label: l,
                              isSelected: t,
                              decoration: y,
                          })
                        : null == y
                          ? l
                          : (0, r.jsxs)("div", {
                                className: j.tabBarItemContainer,
                                children: [l, y],
                            });
                return (0, r.jsx)(
                    s.njP.Item,
                    {
                        variant: u,
                        id: i,
                        onClick: a,
                        className: p,
                        "aria-label": c,
                        children: v,
                    },
                    i,
                );
            });
    }
}
let N = _;
