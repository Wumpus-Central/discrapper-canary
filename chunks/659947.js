n.d(t, { Z: () => N }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(660216),
    c = n(40908),
    u = n(600164),
    d = n(415795),
    f = n(592125),
    p = n(984933),
    _ = n(430824),
    m = n(914010),
    h = n(727785),
    g = n(388032),
    E = n(704563);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S() {}
let I = [h.h8.VOICE_CHANNEL];
function T(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function A() {
    return (0, r.jsx)("div", {
        className: E.voiceListSearchEmpty,
        children: (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: E.noVoiceChannelSelected,
            children: g.intl.string(g.t.zHjCd1),
        }),
    });
}
function C(e) {
    let t = "" !== e,
        n = (0, o.Wu)([p.ZP, f.Z, m.Z], () => {
            let e = m.Z.getGuildId();
            if (t || null == e) return [];
            let n = [];
            for (let t of p.ZP.getVocalChannelIds(e)) {
                let e = f.Z.getChannel(t);
                null != e && n.push(e);
            }
            return n;
        }, [t]);
    return t ? null : n;
}
function N(e) {
    var t, n;
    let { keybind: a } = e,
        o = i.useRef(a);
    i.useEffect(() => {
        o.current = a;
    });
    let [c, d] = i.useState(null != (n = null == (t = a.params) ? void 0 : t.channelId) ? n : void 0),
        f = i.useCallback(() => {
            (0, s.ZDy)(
                async () => (e) =>
                    (0, r.jsx)(
                        R,
                        v(y({}, e), {
                            onSelect: (e) => {
                                d(e), l.Z.setKeybind(v(y({}, o.current), { params: { channelId: e } }));
                            },
                        }),
                    ),
            );
        }, []);
    return (0, r.jsx)("div", {
        className: E.channelIdSection,
        children: (0, r.jsx)(s.gNt, {
            label: g.intl.string(g.t.q4JpM8),
            children: (0, r.jsxs)(u.Z, {
                align: u.Z.Align.STRETCH,
                children: [
                    (0, r.jsx)("div", {
                        className: E.selectedVoiceChannel,
                        children: (0, r.jsx)(D, { channelId: c }),
                    }),
                    (0, r.jsx)(u.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, r.jsx)(s.Button, {
                            variant: "primary",
                            text: g.intl.string(g.t.Dm8O4e),
                            onClick: f,
                        }),
                    }),
                ],
            }),
        }),
    });
}
function P(e) {
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
function R(e) {
    let { transitionState: t, onClose: n, onSelect: o } = e,
        l = i.useId(),
        u = i.useRef(null),
        {
            query: p,
            updateQuery: m,
            queryResults: b,
        } = (0, c.Z)({
            visible: !0,
            autocompleterResultTypes: I,
            autocompleterBeforeCreateSearchContext: T,
        }),
        y = C(p),
        { focusedIndex: O, setFocusedIndex: v } = P(p);
    i.useEffect(() => {
        let { current: e } = u;
        null == e ||
            e.isItemVisible(0, O, !0) ||
            e.scrollToIndex({
                section: 0,
                row: O,
            });
    }, [O]);
    let S = null != y ? y.length : b.length;
    function N(e) {
        let { row: t } = e,
            i = (() => {
                if (null != y) return y[t];
                let e = b[t];
                if ((null == e ? void 0 : e.type) === h.h8.VOICE_CHANNEL) return e.record;
            })();
        if (null == i) return null;
        let a = null != i.parent_id ? f.Z.getChannel(i.parent_id) : void 0,
            s = _.Z.getGuild(i.guild_id);
        return (0, r.jsx)(
            d.$W,
            {
                id: i.id,
                channel: i,
                category: a,
                focused: O === t,
                onMouseEnter: () => v(t),
                onClick: () => {
                    o(i.id), n();
                },
                onFocus: () => v(t),
                children:
                    null != s
                        ? (0, r.jsx)("div", {
                              className: E.guildName,
                              children: s.name,
                          })
                        : null,
            },
            i.id,
        );
    }
    function R(e) {
        let t = e.key.toLowerCase();
        if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
            switch ((e.preventDefault(), t)) {
                case "escape":
                    n();
                    break;
                case "enter": {
                    let e = (() => {
                        if (null != y) return y[O];
                        let e = b[O];
                        if ((null == e ? void 0 : e.type) === h.h8.VOICE_CHANNEL) return e.record;
                    })();
                    null == e ? o(void 0) : o(e.id), n();
                    break;
                }
                case "arrowup":
                    0 === O ? v(S - 1) : v(O - 1);
                    break;
                case "arrowdown":
                    O >= S - 1 ? v(0) : v(O + 1);
            }
    }
    let D = (() => {
            if (null != y) {
                var e;
                return null == (e = y[O]) ? void 0 : e.id;
            }
            let t = b[O];
            if ((null == t ? void 0 : t.type) === h.h8.VOICE_CHANNEL) return t.record.id;
        })(),
        w =
            S > 0 || "" === p
                ? {
                      innerId: l,
                      innerRole: "listbox",
                      innerAriaLabel: g.intl.string(g.t["+N3fW7"]),
                      ref: u,
                      sections: [S],
                      renderRow: N,
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : {
                      sections: [1],
                      renderRow: () => (0, r.jsx)(A, {}),
                      sectionHeight: 0,
                      rowHeight: 52,
                  };
    return (0, r.jsx)(a.Modal, {
        transitionState: t,
        onClose: n,
        title: g.intl.string(g.t.Dm8O4e),
        subtitle: g.intl.string(g.t.q4JpM8),
        actions: void 0,
        input: (0, r.jsx)(s.oil, {
            value: p,
            onChange: m,
            onKeyDown: R,
            placeholder: g.intl.string(g.t.tG0r7g),
            role: "combobox",
            "aria-controls": l,
            "aria-expanded": S > 0,
            "aria-activedescendant": S > 0 && null != D ? D : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: w,
    });
}
function D(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: a,
        } = (0, o.cj)([f.Z, _.Z], () => {
            let e = null != t ? f.Z.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? f.Z.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? _.Z.getGuild(e.guild_id) : void 0,
                  }
                : {
                      channel: void 0,
                      category: void 0,
                      guild: void 0,
                  };
        });
    return null == n
        ? (0, r.jsx)(s.Text, {
              variant: "text-md/medium",
              color: "text-muted",
              className: E.noVoiceChannelSelected,
              children: g.intl.string(g.t["/fYIK7"]),
          })
        : (0, r.jsx)(d.$W, {
              channel: n,
              id: n.id,
              category: i,
              onClick: S,
              onFocus: S,
              onMouseEnter: S,
              focused: !1,
              children:
                  null != a
                      ? (0, r.jsx)("div", {
                            className: E.guildName,
                            children: a.name,
                        })
                      : null,
          });
}
