s.d(t, {
    $x: () => E,
    ZP: () => O,
    d7: () => j,
    w6: () => N
}),
    s(653041),
    s(390547),
    s(47120);
var n = s(200651),
    i = s(192379),
    r = s(990547),
    a = s(692547),
    o = s(481060),
    l = s(213609),
    c = s(252618),
    u = s(243778),
    d = s(126848),
    p = s(207874),
    f = s(585483),
    g = s(960048),
    x = s(410575),
    h = s(493544),
    m = s(981631),
    v = s(388032),
    b = s(583535);
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
    let { section: i, setPreventNavigation: a, scrollerRef: o } = e;
    (0, l.Z)({
        type: r.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties
    });
    let c = null !== (t = null == i ? void 0 : i.element) && void 0 !== t ? t : m.VqG,
        u = null !== (s = null == i ? void 0 : i.elementProps) && void 0 !== s ? s : {};
    return (0, n.jsx)(x.Z, {
        section: i.section,
        children: (0, n.jsx)(c, {
            ...u,
            setPreventNavigation: a,
            refToScroller: o
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
            ? (f.S.dispatch(m.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + j, N)),
              f.S.dispatch(m.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = E), !0);
    }
    renderSidebar(e) {
        let { section: t, title: s, isUserSettingsSearchEnabled: i } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            a = null != t ? t : e[0].section;
        return (0, n.jsx)(u.ZP, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, n.jsxs)(o.njP, {
                    selectedItem: a,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': s,
                    children: [
                        i ? (0, n.jsx)(p.Z, { style: b.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case h.ID.HEADER:
                                    return (0, n.jsx)(o.njP.Header, { children: e.label }, t);
                                case h.ID.DIVIDER:
                                    return (0, n.jsx)(o.njP.Separator, {}, t);
                                case h.ID.CUSTOM:
                                    var s;
                                    let i = null !== (s = e.element) && void 0 !== s ? s : m.VqG;
                                    return (0, n.jsx)(i, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, a === e.section, r);
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
        let { sidebarTheme: t, section: s, title: i, onClose: r, hideSidebar: a } = this.props,
            o = this.getPredicateSections(),
            l = o.find((e) => e.section === s);
        if (null == l || null == s) return null;
        let u = null !== (e = 'string' == typeof l.label ? l.label : l.ariaLabel) && void 0 !== e ? e : i;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(c.yY, {
                    location: i,
                    subsection: u
                }),
                (0, n.jsx)(h.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: s,
                    sidebar: this.renderSidebar(o),
                    content: (0, n.jsx)(T, {
                        section: l,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: a,
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
                sidebarOpen: this.props.section !== m.oAB.SUBSCRIPTIONS && this.props.section !== m.oAB.PROFILE_CUSTOMIZATION
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
                                this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
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
                !this._unmounted && ((this._intensity = E), this.forceUpdate());
            }),
            S(this, 'renderSettingsSectionTabBarItem', (e, t, s) => {
                let { section: i, label: r = null, ariaLabel: l, onClick: c, color: u, icon: p, className: f, newIndicator: g, newIndicatorDismissibleContentTypes: x, badgeCount: h, searchFilterCount: S } = e,
                    C = null;
                null != S && S > 0
                    ? (C = (0, n.jsx)(o.mAB, {
                          count: S,
                          disableColor: !0,
                          className: b.searchFilterCount
                      }))
                    : i === m.oAB.ACCOUNT && this.props.isEligibleForPomelo
                      ? (C = (0, n.jsx)(o.P4T, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: a.Z.colors.STATUS_WARNING.css
                        }))
                      : null != e.decoration
                        ? (C = (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: e.decoration
                          }))
                        : null != s && (null == x ? void 0 : x.includes(s)) && !t
                          ? (C = null != g ? g : (0, n.jsx)(o.IGR, { text: v.intl.string(v.t.y2b7CA) }))
                          : null != p
                            ? (C = p)
                            : null != h && h > 0 && (C = (0, n.jsx)(o.mAB, { count: h }));
                let E =
                    i === m.oAB.PREMIUM
                        ? (0, n.jsx)(d.Z, {
                              label: r,
                              isSelected: t,
                              decoration: C
                          })
                        : null == C
                          ? r
                          : (0, n.jsxs)('div', {
                                className: b.tabBarItemContainer,
                                children: [r, C]
                            });
                return (0, n.jsx)(
                    o.njP.Item,
                    {
                        color: u,
                        id: i,
                        onClick: c,
                        className: f,
                        'aria-label': l,
                        children: E
                    },
                    i
                );
            });
    }
}
let O = _;
