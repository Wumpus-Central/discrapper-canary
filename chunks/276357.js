n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(924826),
    l = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(109434),
    u = n(456269),
    m = n(228392),
    h = n(479099),
    g = n(981631),
    f = n(388032),
    p = n(414464);
function x() {
    return Promise.resolve();
}
function b(e) {
    let { channel: t, closePopout: n, setPopoutRef: b } = e,
        j = (0, u.Vm)(t),
        { tagFilter: v } = (0, d.H)(t.id),
        C = (0, d.v)(),
        _ = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        y = a.useCallback(
            (e) => {
                (0, m.e7)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(v),
                    added: !v.has(e),
                    location: {
                        page: g.ZY5.GUILD_CHANNEL,
                        section: g.jXE.FORUM_CHANNEL_HEADER,
                        object: g.qAy.CHANNEL_TAG
                    }
                }),
                    C.getState().toggleTagFilter(t.id, e);
            },
            [t, v, C]
        ),
        N = a.useCallback(() => {
            C.getState().setTagFilter(t.id, new Set()), _ || n();
        }, [C, t.id, _, n]),
        O = (0, i.ZP)({
            id: ''.concat(t.id, '-all-tags-dropdown-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: x,
            scrollToEnd: x
        }),
        w = a.useRef(null);
    return (
        a.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != w.current) {
                    let e = w.current.querySelector('.'.concat(p.tag));
                    null != e && e.focus();
                }
            });
        }, []),
        (0, r.jsxs)(o.VqE, {
            ref: b,
            'aria-label': f.NW.string(f.t.TdqRTk),
            className: p.container,
            children: [
                (0, r.jsx)('div', {
                    className: p.header,
                    children: (0, r.jsxs)('div', {
                        className: p.headerLeft,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                color: 'interactive-normal',
                                variant: 'heading-md/semibold',
                                className: p.headerText,
                                children: f.NW.string(f.t.HPu3kp)
                            }),
                            (0, r.jsx)('div', {
                                className: p.countContainer,
                                children: (0, r.jsx)(o.Text, {
                                    className: p.countText,
                                    color: 'none',
                                    variant: 'text-xs/medium',
                                    tabularNumbers: !0,
                                    children: v.size
                                })
                            })
                        ]
                    })
                }),
                (0, r.jsx)(l.bG, {
                    navigator: O,
                    children: (0, r.jsx)(l.SJ, {
                        children: (e) => {
                            var t,
                                n,
                                { ref: a } = e,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                a = {},
                                                i = Object.keys(e);
                                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                            return a;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                                    }
                                    return a;
                                })(e, ['ref']);
                            return (0, r.jsx)(
                                'div',
                                ((t = (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        ref: (e) => {
                                            (a.current = e), (w.current = e);
                                        }
                                    },
                                    i
                                )),
                                (n = n =
                                    {
                                        className: p.tagContainer,
                                        children: j.map((e) =>
                                            (0, r.jsx)(
                                                h.Z,
                                                {
                                                    className: p.tag,
                                                    tag: e,
                                                    selected: v.has(e.id),
                                                    onClick: () => y(e.id)
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
                (0, r.jsx)(o.zxk, {
                    look: o.zxk.Looks.LINK,
                    size: o.zxk.Sizes.MIN,
                    color: o.zxk.Colors.CUSTOM,
                    className: p.clear,
                    'aria-label': f.NW.string(f.t['98EPQE']),
                    onClick: N,
                    children: (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-link',
                        children: f.NW.string(f.t['98EPQE'])
                    })
                })
            ]
        })
    );
}
