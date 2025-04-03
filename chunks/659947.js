n.d(t, { Z: () => T }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(660216),
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
function N(e) {
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
}
function x(e, t) {
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
function _() {}
let E = [h.h8.VOICE_CHANNEL];
function j(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function O(e) {
    let { height: t } = e;
    return (0, r.jsx)('div', { style: { height: t } });
}
function C() {
    return (0, r.jsx)(O, { height: 16 }, 'footer');
}
function S() {
    return (0, r.jsx)(O, { height: 8 }, 'header');
}
function v() {
    return (0, r.jsx)('div', {
        className: b.voiceListSearchEmpty,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-md/medium',
            color: 'text-muted',
            className: b.noVoiceChannelSelected,
            children: f.NW.string(f.t.zHjCd3)
        })
    });
}
function T(e) {
    var t, n;
    let { keybind: s } = e,
        o = i.useRef(s);
    i.useEffect(() => {
        o.current = s;
    });
    let [d, u] = i.useState(null != (n = null == (t = s.params) ? void 0 : t.channelId) ? n : void 0),
        m = i.useCallback(() => {
            (0, a.ZDy)(
                async () => (e) =>
                    (0, r.jsx)(
                        I,
                        x(N({}, e), {
                            onSelect: (e) => {
                                u(e), l.Z.setKeybind(x(N({}, o.current), { params: { channelId: e } }));
                            }
                        })
                    )
            );
        }, []);
    return (0, r.jsx)(a.hjN, {
        title: f.NW.string(f.t.q4JpMz),
        className: b.channelIdSection,
        children: (0, r.jsxs)(c.Z, {
            align: c.Z.Align.STRETCH,
            children: [
                (0, r.jsx)('div', {
                    className: b.selectedVoiceChannel,
                    children: (0, r.jsx)(y, { channelId: d })
                }),
                (0, r.jsx)(c.Z.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, r.jsx)(a.zxk, {
                        onClick: m,
                        children: f.NW.string(f.t.Dm8O4e)
                    })
                })
            ]
        })
    });
}
function I(e) {
    let { transitionState: t, onClose: n, onSelect: l } = e,
        c = i.useId(),
        N = i.useRef(null),
        {
            mouseFocusEnabled: x,
            enableMouseFocus: _,
            disableMouseFocus: O
        } = (function () {
            let e = i.useRef(!1),
                t = i.useCallback(() => {
                    e.current = !0;
                }, []),
                n = i.useCallback(() => {
                    e.current = !1;
                }, []);
            return {
                mouseFocusEnabled: e,
                enableMouseFocus: t,
                disableMouseFocus: n
            };
        })(),
        {
            query: T,
            updateQuery: I,
            queryResults: y
        } = (0, o.Z)({
            visible: !0,
            autocompleterResultTypes: E,
            autocompleterBeforeCreateSearchContext: j
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
        })(T),
        { focusedIndex: P, setFocusedIndex: R } = (function (e) {
            let [t, n] = i.useState(0),
                r = i.useRef(e);
            return (
                e !== r.current && 0 !== t && n(0),
                i.useEffect(() => {
                    r.current = e;
                }),
                {
                    focusedIndex: t,
                    setFocusedIndex: n
                }
            );
        })(T);
    i.useEffect(() => {
        let { current: e } = N;
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
    return (0, r.jsx)('div', {
        className: b.voiceModalContainer,
        onMouseMove: _,
        children: (0, r.jsxs)(a.Y0X, {
            transitionState: t,
            size: a.CgR.MEDIUM,
            className: b.voiceModalRootContainer,
            children: [
                (0, r.jsx)('div', {
                    className: b.inputWrapper,
                    children: (0, r.jsx)(a.oil, {
                        value: T,
                        onChange: I,
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
                                        null == e ? l(void 0) : l(e.id), n();
                                        break;
                                    }
                                    case 'arrowup':
                                        0 === P ? R(D - 1) : R(P - 1);
                                        break;
                                    case 'arrowdown':
                                        P >= D - 1 ? R(0) : R(P + 1);
                                }
                        },
                        placeholder: f.NW.string(f.t.tG0r7u),
                        role: 'combobox',
                        'aria-controls': c,
                        'aria-expanded': D > 0,
                        'aria-activedescendant': D > 0 && null != Z ? Z : void 0,
                        'aria-autocomplete': 'list',
                        spellCheck: !1
                    })
                }),
                0 === D && '' !== T && (0, r.jsx)(v, {}),
                (D > 0 || '' === T) &&
                    (0, r.jsx)(a.Tvr, {
                        innerId: c,
                        innerRole: 'listbox',
                        'aria-label': f.NW.string(f.t['+N3fW1']),
                        ref: N,
                        sections: [D],
                        renderRow: function (e) {
                            let { row: t } = e,
                                i = (() => {
                                    if (null != A) return A[t];
                                    let e = y[t];
                                    if ((null == e ? void 0 : e.type) === h.h8.VOICE_CHANNEL) return e.record;
                                })();
                            if (null == i) return null;
                            let s = null != i.parent_id ? u.Z.getChannel(i.parent_id) : void 0,
                                a = g.Z.getGuild(i.guild_id);
                            return (0, r.jsx)(
                                d.$W,
                                {
                                    id: i.id,
                                    channel: i,
                                    category: s,
                                    focused: P === t,
                                    onMouseEnter: () => x.current && R(t),
                                    onClick: () => {
                                        l(i.id), n();
                                    },
                                    onFocus: () => R(t),
                                    children:
                                        null != a
                                            ? (0, r.jsx)('div', {
                                                  className: b.guildName,
                                                  children: a.name
                                              })
                                            : null
                                },
                                i.id
                            );
                        },
                        renderListHeader: S,
                        renderFooter: C,
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
            category: i,
            guild: l
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
        ? (0, r.jsx)(a.Text, {
              variant: 'text-md/medium',
              color: 'text-muted',
              className: b.noVoiceChannelSelected,
              children: f.NW.string(f.t['/fYIKy'])
          })
        : (0, r.jsx)(d.$W, {
              channel: n,
              id: n.id,
              category: i,
              onClick: _,
              onFocus: _,
              onMouseEnter: _,
              focused: !1,
              children:
                  null != l
                      ? (0, r.jsx)('div', {
                            className: b.guildName,
                            children: l.name
                        })
                      : null
          });
}
