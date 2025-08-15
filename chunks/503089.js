n.d(t, {
    $x: () => _,
    ZP: () => N,
    d7: () => I,
    w6: () => w,
}),
    n(539854),
    n(361932),
    n(187205),
    n(388685);
var i = n(951288),
    r = n(647438),
    s = n(990547),
    l = n(692547),
    o = n(481060),
    a = n(213609),
    u = n(252618),
    c = n(243778),
    d = n(126848),
    h = n(207874),
    p = n(585483),
    g = n(960048),
    f = n(410575),
    v = n(493544),
    m = n(981631),
    C = n(388032),
    b = n(486807);
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0,
    }),
    _ = 1.4,
    w = 15,
    I = 2;
function j(e) {
    var t, n;
    let { section: r, setPreventNavigation: l, scrollerRef: o } = e;
    (0, a.Z)({
        type: s.ImpressionTypes.PANE,
        name: null == r ? void 0 : r.impressionName,
        properties: null == r ? void 0 : r.impressionProperties,
    });
    let u = null != (t = null == r ? void 0 : r.element) ? t : m.VqG,
        c = null != (n = null == r ? void 0 : r.elementProps) ? n : {};
    return (0, i.jsx)(f.Z, {
        section: r.section,
        children: (0, i.jsx)(
            u,
            S(O({}, c), {
                setPreventNavigation: l,
                refToScroller: o,
            }),
        ),
    });
}
class P extends r.PureComponent {
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
        t !== this.props.section && (this._intensity = _);
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
            ? (p.S.dispatch(m.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity,
              }),
              (this._intensity = Math.min(this._intensity + I, w)),
              p.S.dispatch(m.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = _), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: r } = this.props,
            s = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            l = null != t ? t : e[0].section;
        return (0, i.jsx)(c.ZP, {
            contentTypes: s,
            children: (t) => {
                let { visibleContent: s } = t;
                return (0, i.jsxs)(o.njP, {
                    selectedItem: l,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: [
                        r ? (0, i.jsx)(h.Z, { style: b.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case v.ID.HEADER:
                                    return (0, i.jsx)(o.njP.Header, { children: e.label }, t);
                                case v.ID.DIVIDER:
                                    return (0, i.jsx)(o.njP.Separator, {}, t);
                                case v.ID.CUSTOM:
                                    var n;
                                    let r = null != (n = e.element) ? n : m.VqG;
                                    return (0, i.jsx)(r, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, l === e.section, s);
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
        let { stores: n, element: r } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, i.jsx)(r, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: r, onClose: s, hideSidebar: l } = this.props,
            o = this.getPredicateSections(),
            a = o.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let c = null != (e = "string" == typeof a.label ? a.label : a.ariaLabel) ? e : r;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.yY, {
                    location: r,
                    subsection: c,
                }),
                (0, i.jsx)(v.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(o),
                    content: (0, i.jsx)(j, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef,
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: l,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != s ? this.handleClose : void 0,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "_unmounted", !1),
            y(this, "_intensity", _),
            y(this, "_subscribedStores", []),
            y(this, "scrollerRef", r.createRef()),
            y(
                this,
                "state",
                S(O({}, E), {
                    sidebarOpen:
                        this.props.section !== m.oAB.SUBSCRIPTIONS &&
                        this.props.section !== m.oAB.PROFILE_CUSTOMIZATION,
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
                    { shouldPreventNavigation: i, onPreventNavigation: r } = this.state,
                    s = () => {
                        var i;
                        null == t || t(e);
                        let { notice: r } = null != (i = n.find((t) => e === t.section)) ? i : {},
                            s = null != r ? r.stores : null;
                        null != s &&
                            s.forEach((e) => {
                                this._subscribedStores.includes(e) ||
                                    (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(S(O({}, E), { sidebarOpen: !1 }));
                    };
                this.validNavigation() &&
                    !i &&
                    (s(),
                    g.Z.addBreadcrumb({
                        category: "settings",
                        message: "Set section: ".concat(e),
                    })),
                    i && null != r && r(s);
            }),
            y(this, "handleClose", () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            y(this, "handleNoticeStoreUpdate", () => {
                this._unmounted || ((this._intensity = _), this.forceUpdate());
            }),
            y(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
                let {
                        section: r,
                        label: s = null,
                        ariaLabel: a,
                        onClick: u,
                        variant: c,
                        icon: h,
                        className: p,
                        newIndicator: g,
                        newIndicatorDismissibleContentTypes: f,
                        badgeCount: v,
                    } = e,
                    y = null;
                r === m.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (y = (0, i.jsx)(o.Mgn, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: l.Z.colors.STATUS_WARNING.css,
                      }))
                    : null != e.decoration
                      ? (y = (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: e.decoration,
                        }))
                      : null != n && (null == f ? void 0 : f.includes(n)) && !t
                        ? (y = null != g ? g : (0, i.jsx)(o.IGR, { text: C.intl.string(C.t.y2b7CA) }))
                        : null != h
                          ? (y = h)
                          : null != v && v > 0 && (y = (0, i.jsx)(o.mAB, { count: v }));
                let O =
                    r === m.oAB.PREMIUM
                        ? (0, i.jsx)(d.Z, {
                              label: s,
                              isSelected: t,
                              decoration: y,
                          })
                        : null == y
                          ? s
                          : (0, i.jsxs)("div", {
                                className: b.tabBarItemContainer,
                                children: [s, y],
                            });
                return (0, i.jsx)(
                    o.njP.Item,
                    {
                        variant: c,
                        id: r,
                        onClick: u,
                        className: p,
                        "aria-label": a,
                        children: O,
                    },
                    r,
                );
            });
    }
}
let N = P;
