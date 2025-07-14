(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(924826),
    l = n(91192),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(607070),
    u = n(109434),
    m = n(456269),
    h = n(228392),
    g = n(479099),
    f = n(981631),
    x = n(388032),
    p = n(414464);
function b() {
    return Promise.resolve();
}
function j(e) {
    let { channel: t, closePopout: n, setPopoutRef: j } = e,
        v = (0, m.Vm)(t),
        { tagFilter: C } = (0, u.H)(t.id),
        _ = (0, u.v)(),
        y = (0, s.e7)([d.Z], () => d.Z.keyboardModeEnabled),
        O = i.useCallback(
            (e) => {
                ((0, h.e7)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(C),
                    added: !C.has(e),
                    location: {
                        page: f.ZY5.GUILD_CHANNEL,
                        section: f.jXE.FORUM_CHANNEL_HEADER,
                        object: f.qAy.CHANNEL_TAG
                    }
                }),
                    _.getState().toggleTagFilter(t.id, e));
            },
            [t, C, _]
        ),
        w = i.useCallback(() => {
            (_.getState().setTagFilter(t.id, new Set()), y || n());
        }, [_, t.id, y, n]),
        N = (0, a.ZP)({
            id: ''.concat(t.id, '-all-tags-dropdown-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: b,
            scrollToEnd: b
        }),
        S = i.useRef(null);
    return (
        i.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != S.current) {
                    let e = S.current.querySelector('.'.concat(p.tag));
                    null != e && e.focus();
                }
            });
        }, []),
        (0, r.jsxs)(c.VqE, {
            ref: (e) => {
                null == j || j(e);
            },
            'aria-label': x.intl.string(x.t.TdqRTk),
            className: p.container,
            children: [
                (0, r.jsx)('div', {
                    className: p.header,
                    children: (0, r.jsxs)('div', {
                        className: p.headerLeft,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                color: 'interactive-normal',
                                variant: 'heading-md/semibold',
                                className: p.headerText,
                                children: x.intl.string(x.t.HPu3kp)
                            }),
                            (0, r.jsx)('div', {
                                className: p.countContainer,
                                children: (0, r.jsx)(c.Text, {
                                    className: p.countText,
                                    color: 'none',
                                    variant: 'text-xs/medium',
                                    tabularNumbers: !0,
                                    children: C.size
                                })
                            })
                        ]
                    })
                }),
                (0, r.jsx)(l.bG, {
                    navigator: N,
                    children: (0, r.jsx)(l.SJ, {
                        children: (e) => {
                            var t,
                                n,
                                { ref: i } = e,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = {},
                                                a = Object.keys(e);
                                            for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                            return i;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var a = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                    }
                                    return i;
                                })(e, ['ref']);
                            return (0, r.jsx)(
                                'div',
                                ((t = (function (e) {
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
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })(
                                    {
                                        ref: (e) => {
                                            ((i.current = e), (S.current = e));
                                        }
                                    },
                                    a
                                )),
                                (n = n =
                                    {
                                        className: p.tagContainer,
                                        children: v.map((e) =>
                                            (0, r.jsx)(
                                                g.Z,
                                                {
                                                    className: p.tag,
                                                    tag: e,
                                                    selected: C.has(e.id),
                                                    onClick: () => O(e.id)
                                                },
                                                e.id
                                            )
                                        )
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t)
                            );
                        }
                    })
                }),
                (0, r.jsx)('div', { className: p.separator }),
                (0, r.jsx)(o.zx, {
                    look: o.zx.Looks.LINK,
                    size: o.zx.Sizes.MIN,
                    color: o.zx.Colors.CUSTOM,
                    className: p.clear,
                    'aria-label': x.intl.string(x.t['98EPQE']),
                    onClick: w,
                    children: (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-link',
                        children: x.intl.string(x.t['98EPQE'])
                    })
                })
            ]
        })
    );
}
