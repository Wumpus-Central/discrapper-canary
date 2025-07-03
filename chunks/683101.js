(n.d(t, { Z: () => T }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(392711),
    s = n.n(i),
    a = n(374470),
    o = n(481060),
    u = n(239091),
    c = n(294218),
    d = n(592125),
    E = n(388032),
    _ = n(548185);
function A(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
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
class T extends l.PureComponent {
    render() {
        let { result: e, listItemProps: t, searchOffset: n, index: l, totalResults: i } = this.props,
            a = s().find(e, (e) => e.isSearchHit);
        if (null == a) return null;
        let u = d.Z.getChannel(a.channel_id);
        if (null == u) return null;
        let A = 'search-result-'.concat(a.id);
        return (0, r.jsx)(o.tEY, {
            ringTarget: this.hitRef,
            ringClassName: _.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, r.jsxs)(
                'li',
                f(m({ className: _.container }, t), {
                    'aria-posinset': 1 + n + l,
                    'aria-setsize': i,
                    'aria-labelledby': A,
                    children: [
                        (0, r.jsx)(o.P3F, {
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
                                    children: (0, r.jsx)(c.Z, {
                                        id: A,
                                        message: a,
                                        channel: u,
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
                            className: _.buttonsContainer,
                            'aria-hidden': !0,
                            children: (0, r.jsx)(o.P3F, {
                                className: _.button,
                                onClick: this.jumpTo,
                                children: E.intl.string(E.t.k5WiPT)
                            })
                        })
                    ]
                })
            )
        });
    }
    constructor(...e) {
        (super(...e),
            A(this, 'containerRef', l.createRef()),
            A(this, 'hitRef', l.createRef()),
            A(this, 'handleContextMenu', (e, t) => {
                let l = d.Z.getChannel(t.channel_id);
                null != l &&
                    (e.stopPropagation(),
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('16705'), n.e('32670')]).then(n.bind(n, 858341));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                f(m({}, n), {
                                    message: t,
                                    channel: l
                                })
                            );
                    }));
            }),
            A(this, 'jumpTo', (e) => {
                null != e && (e.preventDefault(), e.stopPropagation());
                let { onJump: t, result: n, index: r } = this.props,
                    l = n.find((e) => e.isSearchHit);
                null != l && t(l, r);
            }),
            A(this, 'handleMessageClick', (e) => {
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
            }));
    }
}
