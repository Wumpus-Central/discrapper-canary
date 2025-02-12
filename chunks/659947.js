n.d(t, { Z: () => j }), n(653041), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(660216),
    o = n(40908),
    c = n(600164),
    d = n(415795),
    u = n(592125),
    h = n(984933),
    m = n(430824),
    g = n(914010),
    x = n(727785),
    _ = n(388032),
    p = n(664396);
function E() {}
let C = [x.h8.VOICE_CHANNEL];
function N(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function f(e) {
    let { height: t } = e;
    return (0, i.jsx)('div', { style: { height: t } });
}
function I() {
    return (0, i.jsx)(f, { height: 16 }, 'footer');
}
function T() {
    return (0, i.jsx)(f, { height: 8 }, 'header');
}
function S() {
    return (0, i.jsx)('div', {
        className: p.voiceListSearchEmpty,
        children: (0, i.jsx)(r.Text, {
            variant: 'text-md/medium',
            color: 'text-muted',
            className: p.noVoiceChannelSelected,
            children: _.intl.string(_.t.zHjCd3)
        })
    });
}
function j(e) {
    var t, n;
    let { keybind: l } = e,
        o = s.useRef(l);
    s.useEffect(() => {
        o.current = l;
    });
    let [d, u] = s.useState(null !== (n = null === (t = l.params) || void 0 === t ? void 0 : t.channelId) && void 0 !== n ? n : void 0),
        h = s.useCallback(() => {
            (0, r.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(v, {
                        ...e,
                        onSelect: (e) => {
                            u(e),
                                a.Z.setKeybind({
                                    ...o.current,
                                    params: { channelId: e }
                                });
                        }
                    })
            );
        }, []);
    return (0, i.jsx)(r.hjN, {
        title: _.intl.string(_.t.q4JpMz),
        className: p.channelIdSection,
        children: (0, i.jsxs)(c.Z, {
            align: c.Z.Align.STRETCH,
            children: [
                (0, i.jsx)('div', {
                    className: p.selectedVoiceChannel,
                    children: (0, i.jsx)(b, { channelId: d })
                }),
                (0, i.jsx)(c.Z.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, i.jsx)(r.zxk, {
                        onClick: h,
                        children: _.intl.string(_.t.Dm8O4e)
                    })
                })
            ]
        })
    });
}
function v(e) {
    let { transitionState: t, onClose: n, onSelect: a } = e,
        c = s.useId(),
        E = s.useRef(null),
        {
            mouseFocusEnabled: f,
            enableMouseFocus: j,
            disableMouseFocus: v
        } = (function () {
            let e = s.useRef(!1),
                t = s.useCallback(() => {
                    e.current = !0;
                }, []),
                n = s.useCallback(() => {
                    e.current = !1;
                }, []);
            return {
                mouseFocusEnabled: e,
                enableMouseFocus: t,
                disableMouseFocus: n
            };
        })(),
        {
            query: b,
            updateQuery: A,
            queryResults: O
        } = (0, o.Z)({
            visible: !0,
            autocompleterResultTypes: C,
            autocompleterBeforeCreateSearchContext: N
        }),
        R = (function (e) {
            let t = '' !== e,
                n = (0, l.Wu)(
                    [h.ZP, u.Z, g.Z],
                    () => {
                        let e = g.Z.getGuildId();
                        if (t || null == e) return [];
                        let n = [];
                        for (let t of h.ZP.getVocalChannelIds(e)) {
                            let e = u.Z.getChannel(t);
                            null != e && n.push(e);
                        }
                        return n;
                    },
                    [t]
                );
            return t ? null : n;
        })(b),
        { focusedIndex: D, setFocusedIndex: P } = (function (e) {
            let [t, n] = s.useState(0),
                i = s.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                s.useEffect(() => {
                    i.current = e;
                }),
                {
                    focusedIndex: t,
                    setFocusedIndex: n
                }
            );
        })(b);
    s.useEffect(() => {
        let { current: e } = E;
        null == e ||
            e.isItemVisible(0, D, !0) ||
            e.scrollToIndex({
                section: 0,
                row: D
            });
    }, [D]);
    let y = null != R ? R.length : O.length,
        Z = (() => {
            if (null != R) {
                var e;
                return null === (e = R[D]) || void 0 === e ? void 0 : e.id;
            }
            let t = O[D];
            if ((null == t ? void 0 : t.type) === x.h8.VOICE_CHANNEL) return t.record.id;
        })();
    return (0, i.jsx)('div', {
        className: p.voiceModalContainer,
        onMouseMove: j,
        children: (0, i.jsxs)(r.Y0X, {
            transitionState: t,
            size: r.CgR.MEDIUM,
            className: p.voiceModalRootContainer,
            children: [
                (0, i.jsx)('div', {
                    className: p.inputWrapper,
                    children: (0, i.jsx)(r.oil, {
                        value: b,
                        onChange: A,
                        onKeyDown: function (e) {
                            v();
                            let t = e.key.toLowerCase();
                            if ('arrowdown' === t || 'arrowup' === t || 'enter' === t || 'escape' === t)
                                switch ((e.preventDefault(), t)) {
                                    case 'escape':
                                        n();
                                        break;
                                    case 'enter': {
                                        let e = (() => {
                                            if (null != R) return R[D];
                                            let e = O[D];
                                            if ((null == e ? void 0 : e.type) === x.h8.VOICE_CHANNEL) return e.record;
                                        })();
                                        null == e ? a(void 0) : a(e.id), n();
                                        break;
                                    }
                                    case 'arrowup':
                                        0 === D ? P(y - 1) : P(D - 1);
                                        break;
                                    case 'arrowdown':
                                        D >= y - 1 ? P(0) : P(D + 1);
                                }
                        },
                        placeholder: _.intl.string(_.t.tG0r7u),
                        role: 'combobox',
                        'aria-controls': c,
                        'aria-expanded': y > 0,
                        'aria-activedescendant': y > 0 && null != Z ? Z : void 0,
                        'aria-autocomplete': 'list',
                        spellCheck: !1
                    })
                }),
                0 === y && '' !== b && (0, i.jsx)(S, {}),
                (y > 0 || '' === b) &&
                    (0, i.jsx)(r.Tvr, {
                        innerId: c,
                        innerRole: 'listbox',
                        'aria-label': _.intl.string(_.t['+N3fW1']),
                        ref: E,
                        sections: [y],
                        renderRow: function (e) {
                            let { row: t } = e,
                                s = (() => {
                                    if (null != R) return R[t];
                                    let e = O[t];
                                    if ((null == e ? void 0 : e.type) === x.h8.VOICE_CHANNEL) return e.record;
                                })();
                            if (null == s) return null;
                            let l = null != s.parent_id ? u.Z.getChannel(s.parent_id) : void 0,
                                r = m.Z.getGuild(s.guild_id);
                            return (0, i.jsx)(
                                d.$W,
                                {
                                    id: s.id,
                                    channel: s,
                                    category: l,
                                    focused: D === t,
                                    onMouseEnter: () => f.current && P(t),
                                    onClick: () => {
                                        a(s.id), n();
                                    },
                                    onFocus: () => P(t),
                                    children:
                                        null != r
                                            ? (0, i.jsx)('div', {
                                                  className: p.guildName,
                                                  children: r.name
                                              })
                                            : null
                                },
                                s.id
                            );
                        },
                        renderListHeader: T,
                        renderFooter: I,
                        sectionHeight: 0,
                        rowHeight: 34,
                        className: p.voiceChannelList,
                        listHeaderHeight: 8,
                        footerHeight: 16
                    })
            ]
        })
    });
}
function b(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: s,
            guild: a
        } = (0, l.cj)([u.Z, m.Z], () => {
            let e = null != t ? u.Z.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? u.Z.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? m.Z.getGuild(e.guild_id) : void 0
                  }
                : {
                      channel: void 0,
                      category: void 0,
                      guild: void 0
                  };
        });
    return null == n
        ? (0, i.jsx)(r.Text, {
              variant: 'text-md/medium',
              color: 'text-muted',
              className: p.noVoiceChannelSelected,
              children: _.intl.string(_.t['/fYIKy'])
          })
        : (0, i.jsx)(d.$W, {
              channel: n,
              id: n.id,
              category: s,
              onClick: E,
              onFocus: E,
              onMouseEnter: E,
              focused: !1,
              children:
                  null != a
                      ? (0, i.jsx)('div', {
                            className: p.guildName,
                            children: a.name
                        })
                      : null
          });
}
