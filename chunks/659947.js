(n.d(t, { Z: () => N }), n(539854), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(660216),
    o = n(40908),
    c = n(600164),
    d = n(415795),
    u = n(592125),
    m = n(984933),
    p = n(430824),
    g = n(914010),
    h = n(727785),
    f = n(388032),
    b = n(484671);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function _(e, t) {
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
function j() {}
let O = [h.h8.VOICE_CHANNEL];
function E(e) {
    (e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0));
}
function C(e) {
    let { height: t } = e;
    return (0, i.jsx)('div', { style: { height: t } });
}
function v() {
    return (0, i.jsx)(C, { height: 16 }, 'footer');
}
function S() {
    return (0, i.jsx)(C, { height: 8 }, 'header');
}
function T() {
    return (0, i.jsx)('div', {
        className: b.voiceListSearchEmpty,
        children: (0, i.jsx)(a.Text, {
            variant: 'text-md/medium',
            color: 'text-muted',
            className: b.noVoiceChannelSelected,
            children: f.intl.string(f.t.zHjCd3)
        })
    });
}
function N(e) {
    var t, n;
    let { keybind: s } = e,
        o = r.useRef(s);
    r.useEffect(() => {
        o.current = s;
    });
    let [d, u] = r.useState(null != (n = null == (t = s.params) ? void 0 : t.channelId) ? n : void 0),
        m = r.useCallback(() => {
            (0, a.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(
                        I,
                        _(x({}, e), {
                            onSelect: (e) => {
                                (u(e), l.Z.setKeybind(_(x({}, o.current), { params: { channelId: e } })));
                            }
                        })
                    )
            );
        }, []);
    return (0, i.jsx)(a.hjN, {
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
                    children: (0, i.jsx)(a.zxk, {
                        variant: 'primary',
                        text: f.intl.string(f.t.Dm8O4e),
                        onClick: m
                    })
                })
            ]
        })
    });
}
function I(e) {
    let { transitionState: t, onClose: n, onSelect: l } = e,
        c = r.useId(),
        x = r.useRef(null),
        {
            mouseFocusEnabled: _,
            enableMouseFocus: j,
            disableMouseFocus: C
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
            query: N,
            updateQuery: I,
            queryResults: y
        } = (0, o.Z)({
            visible: !0,
            autocompleterResultTypes: O,
            autocompleterBeforeCreateSearchContext: E
        }),
        A = (function (e) {
            let t = '' !== e,
                n = (0, s.Wu)(
                    [m.ZP, u.Z, g.Z],
                    () => {
                        let e = g.Z.getGuildId();
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
        })(N),
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
        })(N);
    r.useEffect(() => {
        let { current: e } = x;
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
        onMouseMove: j,
        children: (0, i.jsxs)(a.Y0X, {
            transitionState: t,
            size: a.CgR.MEDIUM,
            className: b.voiceModalRootContainer,
            parentComponent: 'SwitchChannelKeybindSettings',
            children: [
                (0, i.jsx)('div', {
                    className: b.inputWrapper,
                    children: (0, i.jsx)(a.oil, {
                        value: N,
                        onChange: I,
                        onKeyDown: function (e) {
                            C();
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
                                        (null == e ? l(void 0) : l(e.id), n());
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
                0 === D && '' !== N && (0, i.jsx)(T, {}),
                (D > 0 || '' === N) &&
                    (0, i.jsx)(a.Tvr, {
                        innerId: c,
                        innerRole: 'listbox',
                        'aria-label': f.intl.string(f.t['+N3fW1']),
                        ref: x,
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
                                a = p.Z.getGuild(r.guild_id);
                            return (0, i.jsx)(
                                d.$W,
                                {
                                    id: r.id,
                                    channel: r,
                                    category: s,
                                    focused: P === t,
                                    onMouseEnter: () => _.current && R(t),
                                    onClick: () => {
                                        (l(r.id), n());
                                    },
                                    onFocus: () => R(t),
                                    children:
                                        null != a
                                            ? (0, i.jsx)('div', {
                                                  className: b.guildName,
                                                  children: a.name
                                              })
                                            : null
                                },
                                r.id
                            );
                        },
                        renderListHeader: S,
                        renderFooter: v,
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
            guild: l
        } = (0, s.cj)([u.Z, p.Z], () => {
            let e = null != t ? u.Z.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? u.Z.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? p.Z.getGuild(e.guild_id) : void 0
                  }
                : {
                      channel: void 0,
                      category: void 0,
                      guild: void 0
                  };
        });
    return null == n
        ? (0, i.jsx)(a.Text, {
              variant: 'text-md/medium',
              color: 'text-muted',
              className: b.noVoiceChannelSelected,
              children: f.intl.string(f.t['/fYIKy'])
          })
        : (0, i.jsx)(d.$W, {
              channel: n,
              id: n.id,
              category: r,
              onClick: j,
              onFocus: j,
              onMouseEnter: j,
              focused: !1,
              children:
                  null != l
                      ? (0, i.jsx)('div', {
                            className: b.guildName,
                            children: l.name
                        })
                      : null
          });
}
