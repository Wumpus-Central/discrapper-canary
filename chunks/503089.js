n.d(t, {
    $x: () => g,
    ZP: () => E,
    d7: () => _,
    w6: () => N
}),
    n(653041),
    n(390547),
    n(47120);
var i = n(200651),
    s = n(192379),
    l = n(990547),
    r = n(692547),
    o = n(481060),
    a = n(213609),
    c = n(252618),
    d = n(243778),
    u = n(126848),
    h = n(207874),
    m = n(585483),
    p = n(960048),
    f = n(410575),
    b = n(493544),
    C = n(981631),
    v = n(388032),
    x = n(419066);
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
let j = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    g = 1.4,
    N = 15,
    _ = 2;
function P(e) {
    var t, n;
    let { section: s, setPreventNavigation: r, scrollerRef: o } = e;
    (0, a.Z)({
        type: l.ImpressionTypes.PANE,
        name: null == s ? void 0 : s.impressionName,
        properties: null == s ? void 0 : s.impressionProperties
    });
    let c = null !== (t = null == s ? void 0 : s.element) && void 0 !== t ? t : C.VqG,
        d = null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n ? n : {};
    return (0, i.jsx)(f.Z, {
        section: s.section,
        children: (0, i.jsx)(c, {
            ...d,
            setPreventNavigation: r,
            refToScroller: o
        })
    });
}
class R extends s.PureComponent {
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
        t !== this.props.section && (this._intensity = g);
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
            ? (m.S.dispatch(C.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + _, N)),
              m.S.dispatch(C.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = g), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: s } = this.props,
            l = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            r = null != t ? t : e[0].section;
        return (0, i.jsx)(d.ZP, {
            contentTypes: l,
            children: (t) => {
                let { visibleContent: l } = t;
                return (0, i.jsxs)(o.njP, {
                    selectedItem: r,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        s ? (0, i.jsx)(h.Z, { style: x.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case b.ID.HEADER:
                                    return (0, i.jsx)(o.njP.Header, { children: e.label }, t);
                                case b.ID.DIVIDER:
                                    return (0, i.jsx)(o.njP.Separator, {}, t);
                                case b.ID.CUSTOM:
                                    var n;
                                    let s = null !== (n = e.element) && void 0 !== n ? n : C.VqG;
                                    return (0, i.jsx)(s, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, r === e.section, l);
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
        let { stores: n, element: s } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, i.jsx)(s, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: s, onClose: l, hideSidebar: r } = this.props,
            o = this.getPredicateSections(),
            a = o.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let d = null !== (e = 'string' == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : s;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.yY, {
                    location: s,
                    subsection: d
                }),
                (0, i.jsx)(b.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(o),
                    content: (0, i.jsx)(P, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: r,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != l ? this.handleClose : void 0
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, '_unmounted', !1),
            S(this, '_intensity', g),
            S(this, '_subscribedStores', []),
            S(this, 'scrollerRef', s.createRef()),
            S(this, 'state', {
                ...j,
                sidebarOpen: this.props.section !== C.oAB.SUBSCRIPTIONS && this.props.section !== C.oAB.PROFILE_CUSTOMIZATION
            }),
            S(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            S(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: i, onPreventNavigation: s } = this.state,
                    l = () => {
                        var i;
                        null == t || t(e);
                        let { notice: s } = null !== (i = n.find((t) => e === t.section)) && void 0 !== i ? i : {},
                            l = null != s ? s.stores : null;
                        null != l &&
                            l.forEach((e) => {
                                this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState({
                                ...j,
                                sidebarOpen: !1
                            });
                    };
                this.validNavigation() &&
                    !i &&
                    (l(),
                    p.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    i && null != s && s(l);
            }),
            S(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            S(this, 'handleNoticeStoreUpdate', () => {
                !this._unmounted && ((this._intensity = g), this.forceUpdate());
            }),
            S(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: s, label: l = null, ariaLabel: a, onClick: c, color: d, icon: h, className: m, newIndicator: p, newIndicatorDismissibleContentTypes: f, badgeCount: b } = e,
                    S = null;
                s === C.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (S = (0, i.jsx)(o.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: r.Z.colors.STATUS_WARNING.css
                      }))
                    : null != e.decoration
                      ? (S = (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: e.decoration
                        }))
                      : null != n && (null == f ? void 0 : f.includes(n)) && !t
                        ? (S = null != p ? p : (0, i.jsx)(o.IGR, { text: v.intl.string(v.t.y2b7CA) }))
                        : null != h
                          ? (S = h)
                          : null != b && b > 0 && (S = (0, i.jsx)(o.mAB, { count: b }));
                let j =
                    s === C.oAB.PREMIUM
                        ? (0, i.jsx)(u.Z, {
                              label: l,
                              isSelected: t,
                              decoration: S
                          })
                        : null == S
                          ? l
                          : (0, i.jsxs)('div', {
                                className: x.tabBarItemContainer,
                                children: [l, S]
                            });
                return (0, i.jsx)(
                    o.njP.Item,
                    {
                        color: d,
                        id: s,
                        onClick: c,
                        className: m,
                        'aria-label': a,
                        children: j
                    },
                    s
                );
            });
    }
}
let E = R;
