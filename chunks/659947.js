n.d(t, { Z: () => P }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(660216),
    l = n(40908),
    c = n(600164),
    u = n(415795),
    d = n(592125),
    f = n(984933),
    _ = n(430824),
    p = n(914010),
    h = n(727785),
    m = n(388032),
    g = n(704563);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v() {}
let I = [h.h8.VOICE_CHANNEL];
function T(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function S(e) {
    let { height: t } = e;
    return (0, r.jsx)("div", { style: { height: t } });
}
function A() {
    return (0, r.jsx)(S, { height: 16 }, "footer");
}
function C() {
    return (0, r.jsx)(S, { height: 8 }, "header");
}
function N() {
    return (0, r.jsx)("div", {
        className: g.voiceListSearchEmpty,
        children: (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: g.noVoiceChannelSelected,
            children: m.intl.string(m.t.zHjCd1),
        }),
    });
}
function R(e) {
    let t = "" !== e,
        n = (0, a.Wu)([f.ZP, d.Z, p.Z], () => {
            let e = p.Z.getGuildId();
            if (t || null == e) return [];
            let n = [];
            for (let t of f.ZP.getVocalChannelIds(e)) {
                let e = d.Z.getChannel(t);
                null != e && n.push(e);
            }
            return n;
        }, [t]);
    return t ? null : n;
}
function P(e) {
    var t, n;
    let { keybind: a } = e,
        l = i.useRef(a);
    i.useEffect(() => {
        l.current = a;
    });
    let [u, d] = i.useState(null != (n = null == (t = a.params) ? void 0 : t.channelId) ? n : void 0),
        f = i.useCallback(() => {
            (0, o.ZDy)(
                async () => (e) =>
                    (0, r.jsx)(
                        L,
                        O(b({}, e), {
                            onSelect: (e) => {
                                d(e), s.Z.setKeybind(O(b({}, l.current), { params: { channelId: e } }));
                            },
                        }),
                    ),
            );
        }, []);
    return (0, r.jsx)("div", {
        className: g.channelIdSection,
        children: (0, r.jsx)(o.gNt, {
            label: m.intl.string(m.t.q4JpM8),
            children: (0, r.jsxs)(c.Z, {
                align: c.Z.Align.STRETCH,
                children: [
                    (0, r.jsx)("div", {
                        className: g.selectedVoiceChannel,
                        children: (0, r.jsx)(x, { channelId: u }),
                    }),
                    (0, r.jsx)(c.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, r.jsx)(o.Button, {
                            variant: "primary",
                            text: m.intl.string(m.t.Dm8O4e),
                            onClick: f,
                        }),
                    }),
                ],
            }),
        }),
    });
}
function D() {
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
        disableMouseFocus: n,
    };
}
function w(e) {
    let [t, n] = i.useState(0),
        r = i.useRef(e);
    return (
        e !== r.current && 0 !== t && n(0),
        i.useEffect(() => {
            r.current = e;
        }),
        {
            focusedIndex: t,
            setFocusedIndex: n,
        }
    );
}
function L(e) {
    let { transitionState: t, onClose: n, onSelect: a } = e,
        s = i.useId(),
        c = i.useRef(null),
        { mouseFocusEnabled: f, enableMouseFocus: p, disableMouseFocus: E } = D(),
        {
            query: b,
            updateQuery: y,
            queryResults: O,
        } = (0, l.Z)({
            visible: !0,
            autocompleterResultTypes: I,
            autocompleterBeforeCreateSearchContext: T,
        }),
        v = R(b),
        { focusedIndex: S, setFocusedIndex: P } = w(b);
    i.useEffect(() => {
        let { current: e } = c;
        null == e ||
            e.isItemVisible(0, S, !0) ||
            e.scrollToIndex({
                section: 0,
                row: S,
            });
    }, [S]);
    let L = null != v ? v.length : O.length;
    function x(e) {
        let { row: t } = e,
            i = (() => {
                if (null != v) return v[t];
                let e = O[t];
                if ((null == e ? void 0 : e.type) === h.h8.VOICE_CHANNEL) return e.record;
            })();
        if (null == i) return null;
        let o = null != i.parent_id ? d.Z.getChannel(i.parent_id) : void 0,
            s = _.Z.getGuild(i.guild_id);
        return (0, r.jsx)(
            u.$W,
            {
                id: i.id,
                channel: i,
                category: o,
                focused: S === t,
                onMouseEnter: () => f.current && P(t),
                onClick: () => {
                    a(i.id), n();
                },
                onFocus: () => P(t),
                children:
                    null != s
                        ? (0, r.jsx)("div", {
                              className: g.guildName,
                              children: s.name,
                          })
                        : null,
            },
            i.id,
        );
    }
    function M(e) {
        E();
        let t = e.key.toLowerCase();
        if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
            switch ((e.preventDefault(), t)) {
                case "escape":
                    n();
                    break;
                case "enter": {
                    let e = (() => {
                        if (null != v) return v[S];
                        let e = O[S];
                        if ((null == e ? void 0 : e.type) === h.h8.VOICE_CHANNEL) return e.record;
                    })();
                    null == e ? a(void 0) : a(e.id), n();
                    break;
                }
                case "arrowup":
                    0 === S ? P(L - 1) : P(S - 1);
                    break;
                case "arrowdown":
                    S >= L - 1 ? P(0) : P(S + 1);
            }
    }
    let j = (() => {
        if (null != v) {
            var e;
            return null == (e = v[S]) ? void 0 : e.id;
        }
        let t = O[S];
        if ((null == t ? void 0 : t.type) === h.h8.VOICE_CHANNEL) return t.record.id;
    })();
    return (0, r.jsx)(o.IX, {
        transitionState: t,
        size: "lg",
        onClose: n,
        children: (0, r.jsxs)("div", {
            className: g.container,
            onMouseMove: p,
            children: [
                (0, r.jsx)("div", {
                    className: g.inputWrapper,
                    children: (0, r.jsx)(o.oil, {
                        value: b,
                        onChange: y,
                        onKeyDown: M,
                        placeholder: m.intl.string(m.t.tG0r7g),
                        role: "combobox",
                        "aria-controls": s,
                        "aria-expanded": L > 0,
                        "aria-activedescendant": L > 0 && null != j ? j : void 0,
                        "aria-autocomplete": "list",
                        spellCheck: !1,
                    }),
                }),
                0 === L && "" !== b && (0, r.jsx)(N, {}),
                (L > 0 || "" === b) &&
                    (0, r.jsx)(o.Tvr, {
                        innerId: s,
                        innerRole: "listbox",
                        "aria-label": m.intl.string(m.t["+N3fW7"]),
                        ref: c,
                        sections: [L],
                        renderRow: x,
                        renderListHeader: C,
                        renderFooter: A,
                        sectionHeight: 0,
                        rowHeight: 34,
                        className: g.voiceChannelList,
                        listHeaderHeight: 8,
                        footerHeight: 16,
                    }),
            ],
        }),
    });
}
function x(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: s,
        } = (0, a.cj)([d.Z, _.Z], () => {
            let e = null != t ? d.Z.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? d.Z.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? _.Z.getGuild(e.guild_id) : void 0,
                  }
                : {
                      channel: void 0,
                      category: void 0,
                      guild: void 0,
                  };
        });
    return null == n
        ? (0, r.jsx)(o.Text, {
              variant: "text-md/medium",
              color: "text-muted",
              className: g.noVoiceChannelSelected,
              children: m.intl.string(m.t["/fYIK7"]),
          })
        : (0, r.jsx)(u.$W, {
              channel: n,
              id: n.id,
              category: i,
              onClick: v,
              onFocus: v,
              onMouseEnter: v,
              focused: !1,
              children:
                  null != s
                      ? (0, r.jsx)("div", {
                            className: g.guildName,
                            children: s.name,
                        })
                      : null,
          });
}
