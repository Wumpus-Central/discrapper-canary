(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n.n(a),
    s = n(374470),
    l = n(481060),
    c = n(239091),
    u = n(294218),
    d = n(592125),
    f = n(388032),
    _ = n(548185);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    var n;
    let r = null == (n = window) ? void 0 : n.getSelection();
    if (null != r && !r.isCollapsed) return !0;
    if (null == e || null == t) return !1;
    for (; (0, s.k)(e) && e !== t; ) {
        let { tagName: t } = e;
        if ('A' === t || 'IMG' === t || 'BUTTON' === t) return !0;
        e = e.parentNode;
    }
    return !1;
}
class b extends i.PureComponent {
    render() {
        let { result: e, listItemProps: t, searchOffset: n, index: i, totalResults: a } = this.props,
            s = o().find(e, (e) => e.isSearchHit);
        if (null == s) return null;
        let c = d.Z.getChannel(s.channel_id);
        if (null == c) return null;
        let p = 'search-result-'.concat(s.id);
        return (0, r.jsx)(l.tEY, {
            ringTarget: this.hitRef,
            ringClassName: _.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, r.jsxs)(
                'li',
                g(h({ className: _.container }, t), {
                    'aria-posinset': 1 + n + i,
                    'aria-setsize': a,
                    'aria-labelledby': p,
                    children: [
                        (0, r.jsx)(l.P3F, {
                            tabIndex: -1,
                            onClick: this.handleMessageClick,
                            innerRef: this.containerRef,
                            className: _.searchResult,
                            focusProps: { enabled: !1 },
                            children: (0, r.jsx)(
                                'div',
                                {
                                    ref: this.hitRef,
                                    className: _.message,
                                    children: (0, r.jsx)(u.Z, {
                                        id: p,
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
                        (0, r.jsx)('div', {
                            className: _.buttonsContainer,
                            'aria-hidden': !0,
                            children: (0, r.jsx)(l.P3F, {
                                className: _.button,
                                onClick: this.jumpTo,
                                children: f.intl.string(f.t.k5WiPT)
                            })
                        })
                    ]
                })
            )
        });
    }
    constructor(...e) {
        (super(...e),
            p(this, 'containerRef', i.createRef()),
            p(this, 'hitRef', i.createRef()),
            p(this, 'handleContextMenu', (e, t) => {
                let i = d.Z.getChannel(t.channel_id);
                null != i &&
                    (e.stopPropagation(),
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('53809').then(n.bind(n, 858341));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                g(h({}, n), {
                                    message: t,
                                    channel: i
                                })
                            );
                    }));
            }),
            p(this, 'jumpTo', (e) => {
                null != e && (e.preventDefault(), e.stopPropagation());
                let { onJump: t, result: n, index: r } = this.props,
                    i = n.find((e) => e.isSearchHit);
                null != i && t(i, r);
            }),
            p(this, 'handleMessageClick', (e) => {
                if (E(e.target, this.containerRef.current)) return void e.stopPropagation();
                this.jumpTo(e);
            }));
    }
}
