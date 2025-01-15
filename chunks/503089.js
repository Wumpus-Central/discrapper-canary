n.d(t, {
    $x: function () {
        return E;
    },
    d7: function () {
        return j;
    },
    w6: function () {
        return N;
    }
}),
    n(653041),
    n(390547),
    n(47120);
var s = n(200651),
    i = n(192379),
    r = n(990547),
    o = n(692547),
    c = n(481060),
    l = n(213609),
    a = n(252618),
    u = n(243778),
    d = n(126848),
    f = n(207874),
    p = n(585483),
    g = n(960048),
    x = n(410575),
    h = n(493544),
    b = n(981631),
    m = n(388032),
    v = n(583535);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let C = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    E = 1.4,
    N = 15,
    j = 2;
function T(e) {
    var t, n;
    let { section: i, setPreventNavigation: o, scrollerRef: c } = e;
    (0, l.Z)({
        type: r.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties
    });
    let a = null !== (t = null == i ? void 0 : i.element) && void 0 !== t ? t : b.VqG,
        u = null !== (n = null == i ? void 0 : i.elementProps) && void 0 !== n ? n : {};
    return (0, s.jsx)(x.Z, {
        section: i.section,
        children: (0, s.jsx)(a, {
            ...u,
            setPreventNavigation: o,
            refToScroller: c
        })
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
        t !== this.props.section && (this._intensity = E);
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            this._subscribedStores.forEach((e) => e.removeChangeListener(this.handleNoticeStoreUpdate)),
            this.props.sections.forEach((e) => {
                var t;
                return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e);
            });
    }
    getPredicateSections() {
        return this.props.sections.filter((e) => null == e.predicate || e.predicate());
    }
    validNavigation() {
        var e;
        let { section: t } = this.props,
            { notice: n } = null !== (e = this.getPredicateSections().find((e) => t === e.section)) && void 0 !== e ? e : {};
        return null != n && n.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (p.S.dispatch(b.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + j, N)),
              p.S.dispatch(b.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = E), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, isUserSettingsSearchEnabled: i } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            o = null != t ? t : e[0].section;
        return (0, s.jsx)(u.ZP, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, s.jsxs)(c.TabBar, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        i ? (0, s.jsx)(f.Z, { style: v.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case h.ID.HEADER:
                                    return (0, s.jsx)(c.TabBar.Header, { children: e.label }, t);
                                case h.ID.DIVIDER:
                                    return (0, s.jsx)(c.TabBar.Separator, {}, t);
                                case h.ID.CUSTOM:
                                    var n;
                                    let i = null !== (n = e.element) && void 0 !== n ? n : b.VqG;
                                    return (0, s.jsx)(i, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, o === e.section, r);
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
        let { stores: n, element: i } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, s.jsx)(i, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: i, onClose: r, hideSidebar: o } = this.props,
            c = this.getPredicateSections(),
            l = c.find((e) => e.section === n);
        if (null == l || null == n) return null;
        let u = null !== (e = 'string' == typeof l.label ? l.label : l.ariaLabel) && void 0 !== e ? e : i;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(a.yY, {
                    location: i,
                    subsection: u
                }),
                (0, s.jsx)(h.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(c),
                    content: (0, s.jsx)(T, {
                        section: l,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: o,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: l.type,
                    notice: this.renderNotice(l),
                    closeAction: null != r ? this.handleClose : void 0
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, '_unmounted', !1),
            S(this, '_intensity', E),
            S(this, '_subscribedStores', []),
            S(this, 'scrollerRef', i.createRef()),
            S(this, 'state', {
                ...C,
                sidebarOpen: this.props.section !== b.oAB.SUBSCRIPTIONS && this.props.section !== b.oAB.PROFILE_CUSTOMIZATION
            }),
            S(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            S(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: s, onPreventNavigation: i } = this.state,
                    r = () => {
                        var s;
                        null == t || t(e);
                        let { notice: i } = null !== (s = n.find((t) => e === t.section)) && void 0 !== s ? s : {},
                            r = null != i ? i.stores : null;
                        null != r &&
                            r.forEach((e) => {
                                !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState({
                                ...C,
                                sidebarOpen: !1
                            });
                    };
                this.validNavigation() &&
                    !s &&
                    (r(),
                    g.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    s && null != i && i(r);
            }),
            S(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            S(this, 'handleNoticeStoreUpdate', () => {
                if (!this._unmounted) (this._intensity = E), this.forceUpdate();
            }),
            S(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: i, label: r = null, ariaLabel: l, onClick: a, color: u, icon: f, className: p, newIndicator: g, newIndicatorDismissibleContentTypes: x, badgeCount: h, searchFilterCount: S } = e,
                    C = null;
                null != S && S > 0
                    ? (C = (0, s.jsx)(c.NumberBadge, {
                          count: S,
                          disableColor: !0,
                          className: v.searchFilterCount
                      }))
                    : i === b.oAB.ACCOUNT && this.props.isEligibleForPomelo
                      ? (C = (0, s.jsx)(c.CircleWarningIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: o.Z.colors.STATUS_WARNING.css
                        }))
                      : null != e.decoration
                        ? (C = (0, s.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: e.decoration
                          }))
                        : null != n && (null == x ? void 0 : x.includes(n)) && !t
                          ? (C = null != g ? g : (0, s.jsx)(c.TextBadge, { text: m.intl.string(m.t.y2b7CA) }))
                          : null != f
                            ? (C = f)
                            : null != h && h > 0 && (C = (0, s.jsx)(c.NumberBadge, { count: h }));
                let E =
                    i === b.oAB.PREMIUM
                        ? (0, s.jsx)(d.Z, {
                              label: r,
                              isSelected: t,
                              decoration: C
                          })
                        : null == C
                          ? r
                          : (0, s.jsxs)('div', {
                                className: v.tabBarItemContainer,
                                children: [r, C]
                            });
                return (0, s.jsx)(
                    c.TabBar.Item,
                    {
                        color: u,
                        id: i,
                        onClick: a,
                        className: p,
                        'aria-label': l,
                        children: E
                    },
                    i
                );
            });
    }
}
t.ZP = _;
