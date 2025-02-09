n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(374470),
    o = n(481060),
    c = n(239091),
    d = n(294218),
    u = n(592125),
    h = n(388032),
    p = n(48965);
function m(e, t, n) {
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
class f extends l.PureComponent {
    render() {
        let { result: e, listItemProps: t, searchOffset: n, index: l, totalResults: a } = this.props,
            s = r().find(e, (e) => e.isSearchHit);
        if (null == s) return null;
        let c = u.Z.getChannel(s.channel_id);
        if (null == c) return null;
        let m = 'search-result-'.concat(s.id);
        return (0, i.jsx)(o.tEY, {
            ringTarget: this.hitRef,
            ringClassName: p.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, i.jsxs)('li', {
                className: p.container,
                ...t,
                'aria-posinset': 1 + n + l,
                'aria-setsize': a,
                'aria-labelledby': m,
                children: [
                    (0, i.jsx)(o.P3F, {
                        tabIndex: -1,
                        onClick: this.handleMessageClick,
                        innerRef: this.containerRef,
                        className: p.searchResult,
                        focusProps: { enabled: !1 },
                        children: (0, i.jsx)(
                            'div',
                            {
                                ref: this.hitRef,
                                className: p.message,
                                children: (0, i.jsx)(d.Z, {
                                    id: m,
                                    message: s,
                                    channel: c,
                                    onContextMenu: (e) => this.handleContextMenu(e, s),
                                    animateAvatar: !1,
                                    subscribeToComponentDispatch: !1,
                                    trackAnnouncementViews: !0,
                                    isSearchResult: !0
                                })
                            },
                            s.id
                        )
                    }),
                    (0, i.jsx)('div', {
                        className: p.buttonsContainer,
                        'aria-hidden': !0,
                        children: (0, i.jsx)(o.P3F, {
                            className: p.button,
                            onClick: this.jumpTo,
                            children: h.intl.string(h.t.k5WiPT)
                        })
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'containerRef', l.createRef()),
            m(this, 'hitRef', l.createRef()),
            m(this, 'handleContextMenu', (e, t) => {
                let l = u.Z.getChannel(t.channel_id);
                null != l &&
                    (e.stopPropagation(),
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('53809').then(n.bind(n, 858341));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                message: t,
                                channel: l
                            });
                    }));
            }),
            m(this, 'jumpTo', (e) => {
                null != e && (e.preventDefault(), e.stopPropagation());
                let { onJump: t, result: n } = this.props,
                    i = n.find((e) => e.isSearchHit);
                null != i && t(i);
            }),
            m(this, 'handleMessageClick', (e) => {
                if (
                    (function (e, t) {
                        var n;
                        let i = null === (n = window) || void 0 === n ? void 0 : n.getSelection();
                        if (null != i && !i.isCollapsed) return !0;
                        if (null == e || null == t) return !1;
                        for (; (0, s.k)(e) && e !== t; ) {
                            let { tagName: t } = e;
                            if ('A' === t || 'IMG' === t || 'BUTTON' === t) return !0;
                            e = e.parentNode;
                        }
                        return !1;
                    })(e.target, this.containerRef.current)
                ) {
                    e.stopPropagation();
                    return;
                }
                this.jumpTo(e);
            });
    }
}
