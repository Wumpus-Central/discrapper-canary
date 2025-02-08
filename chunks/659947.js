n.d(t, { Z: () => b }), n(653041), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(660216),
    o = n(40908),
    c = n(600164),
    d = n(415795),
    u = n(592125),
    m = n(984933),
    g = n(430824),
    h = n(914010),
    x = n(727785),
    _ = n(388032),
    p = n(198491);
function E() {}
let C = [x.h8.VOICE_CHANNEL];
function f(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function T(e) {
    let { height: t } = e;
    return (0, i.jsx)('div', { style: { height: t } });
}
function N() {
    return (0, i.jsx)(T, { height: 16 }, 'footer');
}
function I() {
    return (0, i.jsx)(T, { height: 8 }, 'header');
}
function S() {
    return (0, i.jsx)('div', {
        className: p.voiceListSearchEmpty,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-md/medium',
            color: 'text-muted',
            className: p.noVoiceChannelSelected,
            children: _.intl.string(_.t.zHjCd3)
        })
    });
}
function b(e) {
    var t, n;
    let { keybind: r } = e,
        o = s.useRef(r);
    s.useEffect(() => void (o.current = r));
    let [d, u] = s.useState(null !== (n = null === (t = r.params) || void 0 === t ? void 0 : t.channelId) && void 0 !== n ? n : void 0),
        m = s.useCallback(() => {
            (0, l.ZDy)(
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
    return (0, i.jsx)(l.hjN, {
        title: _.intl.string(_.t.q4JpMz),
        className: p.channelIdSection,
        children: (0, i.jsxs)(c.Z, {
            align: c.Z.Align.STRETCH,
            children: [
                (0, i.jsx)('div', {
                    className: p.selectedVoiceChannel,
                    children: (0, i.jsx)(j, { channelId: d })
                }),
                (0, i.jsx)(c.Z.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, i.jsx)(l.zxk, {
                        onClick: m,
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
            mouseFocusEnabled: T,
            enableMouseFocus: b,
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
            query: j,
            updateQuery: A,
            queryResults: O
        } = (0, o.Z)({
            visible: !0,
            autocompleterResultTypes: C,
            autocompleterBeforeCreateSearchContext: f
        }),
        R = (function (e) {
            let t = '' !== e,
                n = (0, r.Wu)(
                    [m.ZP, u.Z, h.Z],
                    () => {
                        let e = h.Z.getGuildId();
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
        })(j),
        { focusedIndex: P, setFocusedIndex: D } = (function (e) {
            let [t, n] = s.useState(0),
                i = s.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                s.useEffect(() => void (i.current = e)),
                {
                    focusedIndex: t,
                    setFocusedIndex: n
                }
            );
        })(j);
    s.useEffect(() => {
        let { current: e } = E;
        null == e ||
            e.isItemVisible(0, P, !0) ||
            e.scrollToIndex({
                section: 0,
                row: P
            });
    }, [P]);
    let y = null != R ? R.length : O.length,
        Z = (() => {
            if (null != R) {
                var e;
                return null === (e = R[P]) || void 0 === e ? void 0 : e.id;
            }
            let t = O[P];
            if ((null == t ? void 0 : t.type) === x.h8.VOICE_CHANNEL) return t.record.id;
        })();
    return (0, i.jsx)('div', {
        className: p.voiceModalContainer,
        onMouseMove: b,
        children: (0, i.jsxs)(l.Y0X, {
            transitionState: t,
            size: l.CgR.MEDIUM,
            className: p.voiceModalRootContainer,
            children: [
                (0, i.jsx)('div', {
                    className: p.inputWrapper,
                    children: (0, i.jsx)(l.oil, {
                        value: j,
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
                                            if (null != R) return R[P];
                                            let e = O[P];
                                            if ((null == e ? void 0 : e.type) === x.h8.VOICE_CHANNEL) return e.record;
                                        })();
                                        null == e ? a(void 0) : a(e.id), n();
                                        break;
                                    }
                                    case 'arrowup':
                                        0 === P ? D(y - 1) : D(P - 1);
                                        break;
                                    case 'arrowdown':
                                        P >= y - 1 ? D(0) : D(P + 1);
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
                0 === y && '' !== j && (0, i.jsx)(S, {}),
                (y > 0 || '' === j) &&
                    (0, i.jsx)(l.Tvr, {
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
                            let r = null != s.parent_id ? u.Z.getChannel(s.parent_id) : void 0,
                                l = g.Z.getGuild(s.guild_id);
                            return (0, i.jsx)(
                                d.$W,
                                {
                                    id: s.id,
                                    channel: s,
                                    category: r,
                                    focused: P === t,
                                    onMouseEnter: () => T.current && D(t),
                                    onClick: () => {
                                        a(s.id), n();
                                    },
                                    onFocus: () => D(t),
                                    children:
                                        null != l
                                            ? (0, i.jsx)('div', {
                                                  className: p.guildName,
                                                  children: l.name
                                              })
                                            : null
                                },
                                s.id
                            );
                        },
                        renderListHeader: I,
                        renderFooter: N,
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
function j(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: s,
            guild: a
        } = (0, r.cj)([u.Z, g.Z], () => {
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
