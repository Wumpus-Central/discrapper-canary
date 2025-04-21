n.d(t, { Z: () => I }), n(539854), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(660216),
    o = n(40908),
    c = n(600164),
    d = n(415795),
    u = n(592125),
    m = n(984933),
    g = n(430824),
    p = n(914010),
    h = n(727785),
    f = n(388032),
    b = n(484671);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E() {}
let j = [h.h8.VOICE_CHANNEL];
function C(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function O(e) {
    let { height: t } = e;
    return (0, i.jsx)('div', { style: { height: t } });
}
function S() {
    return (0, i.jsx)(O, { height: 16 }, 'footer');
}
function v() {
    return (0, i.jsx)(O, { height: 8 }, 'header');
}
function T() {
    return (0, i.jsx)('div', {
        className: b.voiceListSearchEmpty,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-md/medium',
            color: 'text-muted',
            className: b.noVoiceChannelSelected,
            children: f.intl.string(f.t.zHjCd3)
        })
    });
}
function I(e) {
    var t, n;
    let { keybind: s } = e,
        o = r.useRef(s);
    r.useEffect(() => {
        o.current = s;
    });
    let [d, u] = r.useState(null != (n = null == (t = s.params) ? void 0 : t.channelId) ? n : void 0),
        m = r.useCallback(() => {
            (0, l.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(
                        N,
                        x(_({}, e), {
                            onSelect: (e) => {
                                u(e), a.Z.setKeybind(x(_({}, o.current), { params: { channelId: e } }));
                            }
                        })
                    )
            );
        }, []);
    return (0, i.jsx)(l.hjN, {
        title: f.intl.string(f.t.q4JpMz),
        className: b.channelIdSection,
        children: (0, i.jsxs)(c.Z, {
            align: c.Z.Align.STRETCH,
            children: [
                (0, i.jsx)('div', {
                    className: b.selectedVoiceChannel,
                    children: (0, i.jsx)(y, { channelId: d })
                }),
                (0, i.jsx)(c.Z.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, i.jsx)(l.zxk, {
                        onClick: m,
                        children: f.intl.string(f.t.Dm8O4e)
                    })
                })
            ]
        })
    });
}
function N(e) {
    let { transitionState: t, onClose: n, onSelect: a } = e,
        c = r.useId(),
        _ = r.useRef(null),
        {
            mouseFocusEnabled: x,
            enableMouseFocus: E,
            disableMouseFocus: O
        } = (function () {
            let e = r.useRef(!1),
                t = r.useCallback(() => {
                    e.current = !0;
                }, []),
                n = r.useCallback(() => {
                    e.current = !1;
                }, []);
            return {
                mouseFocusEnabled: e,
                enableMouseFocus: t,
                disableMouseFocus: n
            };
        })(),
        {
            query: I,
            updateQuery: N,
            queryResults: y
        } = (0, o.Z)({
            visible: !0,
            autocompleterResultTypes: j,
            autocompleterBeforeCreateSearchContext: C
        }),
        A = (function (e) {
            let t = '' !== e,
                n = (0, s.Wu)(
                    [m.ZP, u.Z, p.Z],
                    () => {
                        let e = p.Z.getGuildId();
                        if (t || null == e) return [];
                        let n = [];
                        for (let t of m.ZP.getVocalChannelIds(e)) {
                            let e = u.Z.getChannel(t);
                            null != e && n.push(e);
                        }
                        return n;
                    },
                    [t]
                );
            return t ? null : n;
        })(I),
        { focusedIndex: P, setFocusedIndex: R } = (function (e) {
            let [t, n] = r.useState(0),
                i = r.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                r.useEffect(() => {
                    i.current = e;
                }),
                {
                    focusedIndex: t,
                    setFocusedIndex: n
                }
            );
        })(I);
    r.useEffect(() => {
        let { current: e } = _;
        null == e ||
            e.isItemVisible(0, P, !0) ||
            e.scrollToIndex({
                section: 0,
                row: P
            });
    }, [P]);
    let D = null != A ? A.length : y.length,
        Z = (() => {
            if (null != A) {
                var e;
                return null == (e = A[P]) ? void 0 : e.id;
            }
            let t = y[P];
            if ((null == t ? void 0 : t.type) === h.h8.VOICE_CHANNEL) return t.record.id;
        })();
    return (0, i.jsx)('div', {
        className: b.voiceModalContainer,
        onMouseMove: E,
        children: (0, i.jsxs)(l.Y0X, {
            transitionState: t,
            size: l.CgR.MEDIUM,
            className: b.voiceModalRootContainer,
            children: [
                (0, i.jsx)('div', {
                    className: b.inputWrapper,
                    children: (0, i.jsx)(l.oil, {
                        value: I,
                        onChange: N,
                        onKeyDown: function (e) {
                            O();
                            let t = e.key.toLowerCase();
                            if ('arrowdown' === t || 'arrowup' === t || 'enter' === t || 'escape' === t)
                                switch ((e.preventDefault(), t)) {
                                    case 'escape':
                                        n();
                                        break;
                                    case 'enter': {
                                        let e = (() => {
                                            if (null != A) return A[P];
                                            let e = y[P];
                                            if ((null == e ? void 0 : e.type) === h.h8.VOICE_CHANNEL) return e.record;
                                        })();
                                        null == e ? a(void 0) : a(e.id), n();
                                        break;
                                    }
                                    case 'arrowup':
                                        0 === P ? R(D - 1) : R(P - 1);
                                        break;
                                    case 'arrowdown':
                                        P >= D - 1 ? R(0) : R(P + 1);
                                }
                        },
                        placeholder: f.intl.string(f.t.tG0r7u),
                        role: 'combobox',
                        'aria-controls': c,
                        'aria-expanded': D > 0,
                        'aria-activedescendant': D > 0 && null != Z ? Z : void 0,
                        'aria-autocomplete': 'list',
                        spellCheck: !1
                    })
                }),
                0 === D && '' !== I && (0, i.jsx)(T, {}),
                (D > 0 || '' === I) &&
                    (0, i.jsx)(l.Tvr, {
                        innerId: c,
                        innerRole: 'listbox',
                        'aria-label': f.intl.string(f.t['+N3fW1']),
                        ref: _,
                        sections: [D],
                        renderRow: function (e) {
                            let { row: t } = e,
                                r = (() => {
                                    if (null != A) return A[t];
                                    let e = y[t];
                                    if ((null == e ? void 0 : e.type) === h.h8.VOICE_CHANNEL) return e.record;
                                })();
                            if (null == r) return null;
                            let s = null != r.parent_id ? u.Z.getChannel(r.parent_id) : void 0,
                                l = g.Z.getGuild(r.guild_id);
                            return (0, i.jsx)(
                                d.$W,
                                {
                                    id: r.id,
                                    channel: r,
                                    category: s,
                                    focused: P === t,
                                    onMouseEnter: () => x.current && R(t),
                                    onClick: () => {
                                        a(r.id), n();
                                    },
                                    onFocus: () => R(t),
                                    children:
                                        null != l
                                            ? (0, i.jsx)('div', {
                                                  className: b.guildName,
                                                  children: l.name
                                              })
                                            : null
                                },
                                r.id
                            );
                        },
                        renderListHeader: v,
                        renderFooter: S,
                        sectionHeight: 0,
                        rowHeight: 34,
                        className: b.voiceChannelList,
                        listHeaderHeight: 8,
                        footerHeight: 16
                    })
            ]
        })
    });
}
function y(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: r,
            guild: a
        } = (0, s.cj)([u.Z, g.Z], () => {
            let e = null != t ? u.Z.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? u.Z.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? g.Z.getGuild(e.guild_id) : void 0
                  }
                : {
                      channel: void 0,
                      category: void 0,
                      guild: void 0
                  };
        });
    return null == n
        ? (0, i.jsx)(l.Text, {
              variant: 'text-md/medium',
              color: 'text-muted',
              className: b.noVoiceChannelSelected,
              children: f.intl.string(f.t['/fYIKy'])
          })
        : (0, i.jsx)(d.$W, {
              channel: n,
              id: n.id,
              category: r,
              onClick: E,
              onFocus: E,
              onMouseEnter: E,
              focused: !1,
              children:
                  null != a
                      ? (0, i.jsx)('div', {
                            className: b.guildName,
                            children: a.name
                        })
                      : null
          });
}
