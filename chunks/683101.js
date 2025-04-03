n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(374470),
    s = n(481060),
    c = n(239091),
    u = n(294218),
    d = n(592125),
    p = n(388032),
    h = n(548185);
function f(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
class b extends i.PureComponent {
    render() {
        let { result: e, listItemProps: t, searchOffset: n, index: i, totalResults: l } = this.props,
            a = o().find(e, (e) => e.isSearchHit);
        if (null == a) return null;
        let c = d.Z.getChannel(a.channel_id);
        if (null == c) return null;
        let f = 'search-result-'.concat(a.id);
        return (0, r.jsx)(s.tEY, {
            ringTarget: this.hitRef,
            ringClassName: h.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, r.jsxs)(
                'li',
                g(m({ className: h.container }, t), {
                    'aria-posinset': 1 + n + i,
                    'aria-setsize': l,
                    'aria-labelledby': f,
                    children: [
                        (0, r.jsx)(s.P3F, {
                            tabIndex: -1,
                            onClick: this.handleMessageClick,
                            innerRef: this.containerRef,
                            className: h.searchResult,
                            focusProps: { enabled: !1 },
                            children: (0, r.jsx)(
                                'div',
                                {
                                    ref: this.hitRef,
                                    className: h.message,
                                    children: (0, r.jsx)(u.Z, {
                                        id: f,
                                        message: a,
                                        channel: c,
                                        onContextMenu: (e) => this.handleContextMenu(e, a),
                                        animateAvatar: !1,
                                        subscribeToComponentDispatch: !1,
                                        trackAnnouncementViews: !0,
                                        isSearchResult: !0
                                    })
                                },
                                a.id
                            )
                        }),
                        (0, r.jsx)('div', {
                            className: h.buttonsContainer,
                            'aria-hidden': !0,
                            children: (0, r.jsx)(s.P3F, {
                                className: h.button,
                                onClick: this.jumpTo,
                                children: p.NW.string(p.t.k5WiPT)
                            })
                        })
                    ]
                })
            )
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'containerRef', i.createRef()),
            f(this, 'hitRef', i.createRef()),
            f(this, 'handleContextMenu', (e, t) => {
                let i = d.Z.getChannel(t.channel_id);
                null != i &&
                    (e.stopPropagation(),
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('53809').then(n.bind(n, 858341));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                g(m({}, n), {
                                    message: t,
                                    channel: i
                                })
                            );
                    }));
            }),
            f(this, 'jumpTo', (e) => {
                null != e && (e.preventDefault(), e.stopPropagation());
                let { onJump: t, result: n } = this.props,
                    r = n.find((e) => e.isSearchHit);
                null != r && t(r);
            }),
            f(this, 'handleMessageClick', (e) => {
                if (
                    (function (e, t) {
                        var n;
                        let r = null == (n = window) ? void 0 : n.getSelection();
                        if (null != r && !r.isCollapsed) return !0;
                        if (null == e || null == t) return !1;
                        for (; (0, a.k)(e) && e !== t; ) {
                            let { tagName: t } = e;
                            if ('A' === t || 'IMG' === t || 'BUTTON' === t) return !0;
                            e = e.parentNode;
                        }
                        return !1;
                    })(e.target, this.containerRef.current)
                )
                    return void e.stopPropagation();
                this.jumpTo(e);
            });
    }
}
