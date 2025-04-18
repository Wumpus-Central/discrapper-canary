r.d(t, {
    $x: () => H,
    ZP: () => P,
    d7: () => V,
    w6: () => x
}),
    r(539854),
    r(361932),
    r(187205),
    r(388685);
var n = r(200651),
    i = r(192379),
    s = r(990547),
    o = r(692547),
    l = r(481060),
    a = r(213609),
    c = r(252618),
    h = r(243778),
    v = r(126848),
    u = r(207874),
    f = r(585483),
    p = r(960048),
    d = r(410575),
    b = r(493544),
    g = r(981631),
    Z = r(388032),
    j = r(728800);
function M(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                M(e, t, r[t]);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let m = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    H = 1.4,
    x = 15,
    V = 2;
function w(e) {
    var t, r;
    let { section: i, setPreventNavigation: o, scrollerRef: l } = e;
    (0, a.Z)({
        type: s.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties
    });
    let c = null != (t = null == i ? void 0 : i.element) ? t : g.VqG,
        h = null != (r = null == i ? void 0 : i.elementProps) ? r : {};
    return (0, n.jsx)(d.Z, {
        section: i.section,
        children: (0, n.jsx)(
            c,
            y(O({}, h), {
                setPreventNavigation: o,
                refToScroller: l
            })
        )
    });
}
class C extends i.PureComponent {
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: r } = t;
            null != r &&
                r.forEach((e) => {
                    e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e);
                });
        });
    }
    componentDidUpdate(e) {
        let { section: t } = e;
        t !== this.props.section && (this._intensity = H);
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
            { notice: r } = null != (e = this.getPredicateSections().find((e) => t === e.section)) ? e : {};
        return null != r && r.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (f.S.dispatch(g.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + V, x)),
              f.S.dispatch(g.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = H), !0);
    }
    renderSidebar(e) {
        let { section: t, title: r, showUserSettingsSearch: i } = this.props,
            s = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            o = null != t ? t : e[0].section;
        return (0, n.jsx)(h.ZP, {
            contentTypes: s,
            children: (t) => {
                let { visibleContent: s } = t;
                return (0, n.jsxs)(l.njP, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': r,
                    children: [
                        i ? (0, n.jsx)(u.Z, { style: j.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case b.ID.HEADER:
                                    return (0, n.jsx)(l.njP.Header, { children: e.label }, t);
                                case b.ID.DIVIDER:
                                    return (0, n.jsx)(l.njP.Separator, {}, t);
                                case b.ID.CUSTOM:
                                    var r;
                                    let i = null != (r = e.element) ? r : g.VqG;
                                    return (0, n.jsx)(i, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, o === e.section, s);
                            }
                        })
                    ]
                });
            }
        });
    }
    renderNotice(e) {
        let { theme: t } = this.props;
        if (null == e || null == e.notice) return null;
        let { stores: r, element: i } = e.notice;
        return null == r || r.some((e) => e.showNotice()) ? (0, n.jsx)(i, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: r, title: i, onClose: s, hideSidebar: o } = this.props,
            l = this.getPredicateSections(),
            a = l.find((e) => e.section === r);
        if (null == a || null == r) return null;
        let h = null != (e = 'string' == typeof a.label ? a.label : a.ariaLabel) ? e : i;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(c.yY, {
                    location: i,
                    subsection: h
                }),
                (0, n.jsx)(b.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: r,
                    sidebar: this.renderSidebar(l),
                    content: (0, n.jsx)(w, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: o,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != s ? this.handleClose : void 0
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            M(this, '_unmounted', !1),
            M(this, '_intensity', H),
            M(this, '_subscribedStores', []),
            M(this, 'scrollerRef', i.createRef()),
            M(this, 'state', y(O({}, m), { sidebarOpen: this.props.section !== g.oAB.SUBSCRIPTIONS && this.props.section !== g.oAB.PROFILE_CUSTOMIZATION })),
            M(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            M(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: r } = this.props,
                    { shouldPreventNavigation: n, onPreventNavigation: i } = this.state,
                    s = () => {
                        var n;
                        null == t || t(e);
                        let { notice: i } = null != (n = r.find((t) => e === t.section)) ? n : {},
                            s = null != i ? i.stores : null;
                        null != s &&
                            s.forEach((e) => {
                                this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(y(O({}, m), { sidebarOpen: !1 }));
                    };
                this.validNavigation() &&
                    !n &&
                    (s(),
                    p.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    n && null != i && i(s);
            }),
            M(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            M(this, 'handleNoticeStoreUpdate', () => {
                this._unmounted || ((this._intensity = H), this.forceUpdate());
            }),
            M(this, 'renderSettingsSectionTabBarItem', (e, t, r) => {
                let { section: i, label: s = null, ariaLabel: a, onClick: c, color: h, icon: u, className: f, newIndicator: p, newIndicatorDismissibleContentTypes: d, badgeCount: b } = e,
                    M = null;
                i === g.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (M = (0, n.jsx)(l.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: o.Z.colors.STATUS_WARNING.css
                      }))
                    : null != e.decoration
                      ? (M = (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: e.decoration
                        }))
                      : null != r && (null == d ? void 0 : d.includes(r)) && !t
                        ? (M = null != p ? p : (0, n.jsx)(l.IGR, { text: Z.NW.string(Z.t.y2b7CA) }))
                        : null != u
                          ? (M = u)
                          : null != b && b > 0 && (M = (0, n.jsx)(l.mAB, { count: b }));
                let O =
                    i === g.oAB.PREMIUM
                        ? (0, n.jsx)(v.Z, {
                              label: s,
                              isSelected: t,
                              decoration: M
                          })
                        : null == M
                          ? s
                          : (0, n.jsxs)('div', {
                                className: j.tabBarItemContainer,
                                children: [s, M]
                            });
                return (0, n.jsx)(
                    l.njP.Item,
                    {
                        color: h,
                        id: i,
                        onClick: c,
                        className: f,
                        'aria-label': a,
                        children: O
                    },
                    i
                );
            });
    }
}
let P = C;
