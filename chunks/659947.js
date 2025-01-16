n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(660216),
    o = n(40908),
    c = n(600164),
    d = n(415795),
    u = n(592125),
    m = n(984933),
    g = n(430824),
    h = n(914010),
    p = n(727785),
    x = n(388032),
    f = n(198491);
function _() {}
let E = [p.h8.VOICE_CHANNEL];
function C(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function T(e) {
    let { height: t } = e;
    return (0, i.jsx)('div', { style: { height: t } });
}
function S() {
    return (0, i.jsx)(T, { height: 16 }, 'footer');
}
function b() {
    return (0, i.jsx)(T, { height: 8 }, 'header');
}
function I() {
    return (0, i.jsx)('div', {
        className: f.voiceListSearchEmpty,
        children: (0, i.jsx)(a.Text, {
            variant: 'text-md/medium',
            color: 'text-muted',
            className: f.noVoiceChannelSelected,
            children: x.intl.string(x.t.zHjCd3)
        })
    });
}
function N(e) {
    var t, n;
    let { keybind: s } = e,
        o = r.useRef(s);
    r.useEffect(() => void (o.current = s));
    let [d, u] = r.useState(null !== (n = null === (t = s.params) || void 0 === t ? void 0 : t.channelId) && void 0 !== n ? n : void 0),
        m = r.useCallback(() => {
            (0, a.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(v, {
                        ...e,
                        onSelect: (e) => {
                            u(e),
                                l.Z.setKeybind({
                                    ...o.current,
                                    params: { channelId: e }
                                });
                        }
                    })
            );
        }, []);
    return (0, i.jsx)(a.FormSection, {
        title: x.intl.string(x.t.q4JpMz),
        className: f.channelIdSection,
        children: (0, i.jsxs)(c.Z, {
            align: c.Z.Align.STRETCH,
            children: [
                (0, i.jsx)('div', {
                    className: f.selectedVoiceChannel,
                    children: (0, i.jsx)(A, { channelId: d })
                }),
                (0, i.jsx)(c.Z.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, i.jsx)(a.Button, {
                        onClick: m,
                        children: x.intl.string(x.t.Dm8O4e)
                    })
                })
            ]
        })
    });
}
function v(e) {
    let { transitionState: t, onClose: n, onSelect: l } = e,
        c = r.useId(),
        _ = r.useRef(null),
        {
            mouseFocusEnabled: T,
            enableMouseFocus: N,
            disableMouseFocus: v
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
            query: A,
            updateQuery: j,
            queryResults: O
        } = (0, o.Z)({
            visible: !0,
            autocompleterResultTypes: E,
            autocompleterBeforeCreateSearchContext: C
        }),
        R = (function (e) {
            let t = '' !== e,
                n = (0, s.Wu)(
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
        })(A),
        { focusedIndex: P, setFocusedIndex: y } = (function (e) {
            let [t, n] = r.useState(0),
                i = r.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                r.useEffect(() => void (i.current = e)),
                {
                    focusedIndex: t,
                    setFocusedIndex: n
                }
            );
        })(A);
    r.useEffect(() => {
        let { current: e } = _;
        !(null == e || e.isItemVisible(0, P, !0)) &&
            e.scrollToIndex({
                section: 0,
                row: P
            });
    }, [P]);
    let B = null != R ? R.length : O.length,
        D = (() => {
            if (null != R) {
                var e;
                return null === (e = R[P]) || void 0 === e ? void 0 : e.id;
            }
            let t = O[P];
            if ((null == t ? void 0 : t.type) === p.h8.VOICE_CHANNEL) return t.record.id;
        })();
    return (0, i.jsx)('div', {
        className: f.voiceModalContainer,
        onMouseMove: N,
        children: (0, i.jsxs)(a.ModalRoot, {
            transitionState: t,
            size: a.ModalSize.MEDIUM,
            className: f.voiceModalRootContainer,
            children: [
                (0, i.jsx)('div', {
                    className: f.inputWrapper,
                    children: (0, i.jsx)(a.TextInput, {
                        value: A,
                        onChange: j,
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
                                            if ((null == e ? void 0 : e.type) === p.h8.VOICE_CHANNEL) return e.record;
                                        })();
                                        null == e ? l(void 0) : l(e.id), n();
                                        break;
                                    }
                                    case 'arrowup':
                                        0 === P ? y(B - 1) : y(P - 1);
                                        break;
                                    case 'arrowdown':
                                        P >= B - 1 ? y(0) : y(P + 1);
                                }
                        },
                        placeholder: x.intl.string(x.t.tG0r7u),
                        role: 'combobox',
                        'aria-controls': c,
                        'aria-expanded': B > 0,
                        'aria-activedescendant': B > 0 && null != D ? D : void 0,
                        'aria-autocomplete': 'list',
                        spellCheck: !1
                    })
                }),
                0 === B && '' !== A && (0, i.jsx)(I, {}),
                (B > 0 || '' === A) &&
                    (0, i.jsx)(a.ListThin, {
                        innerId: c,
                        innerRole: 'listbox',
                        'aria-label': x.intl.string(x.t['+N3fW1']),
                        ref: _,
                        sections: [B],
                        renderRow: function (e) {
                            let { row: t } = e,
                                r = (() => {
                                    if (null != R) return R[t];
                                    let e = O[t];
                                    if ((null == e ? void 0 : e.type) === p.h8.VOICE_CHANNEL) return e.record;
                                })();
                            if (null == r) return null;
                            let s = null != r.parent_id ? u.Z.getChannel(r.parent_id) : void 0,
                                a = g.Z.getGuild(r.guild_id);
                            return (0, i.jsx)(
                                d.$W,
                                {
                                    id: r.id,
                                    channel: r,
                                    category: s,
                                    focused: P === t,
                                    onMouseEnter: () => T.current && y(t),
                                    onClick: () => {
                                        l(r.id), n();
                                    },
                                    onFocus: () => y(t),
                                    children:
                                        null != a
                                            ? (0, i.jsx)('div', {
                                                  className: f.guildName,
                                                  children: a.name
                                              })
                                            : null
                                },
                                r.id
                            );
                        },
                        renderListHeader: b,
                        renderFooter: S,
                        sectionHeight: 0,
                        rowHeight: 34,
                        className: f.voiceChannelList,
                        listHeaderHeight: 8,
                        footerHeight: 16
                    })
            ]
        })
    });
}
function A(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: r,
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
        ? (0, i.jsx)(a.Text, {
              variant: 'text-md/medium',
              color: 'text-muted',
              className: f.noVoiceChannelSelected,
              children: x.intl.string(x.t['/fYIKy'])
          })
        : (0, i.jsx)(d.$W, {
              channel: n,
              id: n.id,
              category: r,
              onClick: _,
              onFocus: _,
              onMouseEnter: _,
              focused: !1,
              children:
                  null != l
                      ? (0, i.jsx)('div', {
                            className: f.guildName,
                            children: l.name
                        })
                      : null
          });
}
