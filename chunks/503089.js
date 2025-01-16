s.d(t, {
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
    s(653041),
    s(390547),
    s(47120);
var n = s(200651),
    i = s(192379),
    r = s(990547),
    o = s(692547),
    c = s(481060),
    a = s(213609),
    l = s(252618),
    u = s(243778),
    d = s(126848),
    f = s(207874),
    p = s(585483),
    g = s(960048),
    x = s(410575),
    b = s(493544),
    h = s(981631),
    m = s(388032),
    v = s(583535);
function S(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
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
    var t, s;
    let { section: i, setPreventNavigation: o, scrollerRef: c } = e;
    (0, a.Z)({
        type: r.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties
    });
    let l = null !== (t = null == i ? void 0 : i.element) && void 0 !== t ? t : h.VqG,
        u = null !== (s = null == i ? void 0 : i.elementProps) && void 0 !== s ? s : {};
    return (0, n.jsx)(x.Z, {
        section: i.section,
        children: (0, n.jsx)(l, {
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
            let { stores: s } = t;
            null != s &&
                s.forEach((e) => {
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
            { notice: s } = null !== (e = this.getPredicateSections().find((e) => t === e.section)) && void 0 !== e ? e : {};
        return null != s && s.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (p.S.dispatch(h.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + j, N)),
              p.S.dispatch(h.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = E), !0);
    }
    renderSidebar(e) {
        let { section: t, title: s, isUserSettingsSearchEnabled: i } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            o = null != t ? t : e[0].section;
        return (0, n.jsx)(u.ZP, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, n.jsxs)(c.TabBar, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': s,
                    children: [
                        i ? (0, n.jsx)(f.Z, { style: v.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case b.ID.HEADER:
                                    return (0, n.jsx)(c.TabBar.Header, { children: e.label }, t);
                                case b.ID.DIVIDER:
                                    return (0, n.jsx)(c.TabBar.Separator, {}, t);
                                case b.ID.CUSTOM:
                                    var s;
                                    let i = null !== (s = e.element) && void 0 !== s ? s : h.VqG;
                                    return (0, n.jsx)(i, {}, t);
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
        let { stores: s, element: i } = e.notice;
        return null == s || s.some((e) => e.showNotice()) ? (0, n.jsx)(i, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: s, title: i, onClose: r, hideSidebar: o } = this.props,
            c = this.getPredicateSections(),
            a = c.find((e) => e.section === s);
        if (null == a || null == s) return null;
        let u = null !== (e = 'string' == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : i;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(l.yY, {
                    location: i,
                    subsection: u
                }),
                (0, n.jsx)(b.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: s,
                    sidebar: this.renderSidebar(c),
                    content: (0, n.jsx)(T, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: o,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
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
                sidebarOpen: this.props.section !== h.oAB.SUBSCRIPTIONS && this.props.section !== h.oAB.PROFILE_CUSTOMIZATION
            }),
            S(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            S(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: s } = this.props,
                    { shouldPreventNavigation: n, onPreventNavigation: i } = this.state,
                    r = () => {
                        var n;
                        null == t || t(e);
                        let { notice: i } = null !== (n = s.find((t) => e === t.section)) && void 0 !== n ? n : {},
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
                    !n &&
                    (r(),
                    g.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    n && null != i && i(r);
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
            S(this, 'renderSettingsSectionTabBarItem', (e, t, s) => {
                let { section: i, label: r = null, ariaLabel: a, onClick: l, color: u, icon: f, className: p, newIndicator: g, newIndicatorDismissibleContentTypes: x, badgeCount: b, searchFilterCount: S } = e,
                    C = null;
                null != S && S > 0
                    ? (C = (0, n.jsx)(c.NumberBadge, {
                          count: S,
                          disableColor: !0,
                          className: v.searchFilterCount
                      }))
                    : i === h.oAB.ACCOUNT && this.props.isEligibleForPomelo
                      ? (C = (0, n.jsx)(c.CircleWarningIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: o.Z.colors.STATUS_WARNING.css
                        }))
                      : null != e.decoration
                        ? (C = (0, n.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: e.decoration
                          }))
                        : null != s && (null == x ? void 0 : x.includes(s)) && !t
                          ? (C = null != g ? g : (0, n.jsx)(c.TextBadge, { text: m.intl.string(m.t.y2b7CA) }))
                          : null != f
                            ? (C = f)
                            : null != b && b > 0 && (C = (0, n.jsx)(c.NumberBadge, { count: b }));
                let E =
                    i === h.oAB.PREMIUM
                        ? (0, n.jsx)(d.Z, {
                              label: r,
                              isSelected: t,
                              decoration: C
                          })
                        : null == C
                          ? r
                          : (0, n.jsxs)('div', {
                                className: v.tabBarItemContainer,
                                children: [r, C]
                            });
                return (0, n.jsx)(
                    c.TabBar.Item,
                    {
                        color: u,
                        id: i,
                        onClick: l,
                        className: p,
                        'aria-label': a,
                        children: E
                    },
                    i
                );
            });
    }
}
t.ZP = _;
