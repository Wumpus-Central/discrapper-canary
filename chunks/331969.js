n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(189213),
    a = n(311907),
    r = n(834730),
    o = n(192308),
    d = n(452027),
    u = n(821609),
    c = n(292666),
    g = n(97260),
    m = n(337692),
    _ = n(235986),
    A = n(586068),
    h = n(734057),
    p = n(808728),
    x = n(71393),
    E = n(967198),
    T = n(926140),
    S = n(985018),
    f = n(194152);
function b() {}
let C = [T.rD.VOICE_CHANNEL];
function v(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function N() {
    return (0, i.jsx)("div", {
        className: f.i1,
        children: (0, i.jsx)(r.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: f.GN,
            children: S.intl.string(S.t.zHjCd1),
        }),
    });
}
function I(e) {
    let { keybind: t } = e,
        n = s.useRef(t);
    s.useEffect(() => {
        n.current = t;
    });
    let [l, a] = s.useState(t.params?.channelId ?? void 0),
        r = s.useCallback(() => {
            (0, o.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(y, {
                        ...e,
                        onSelect: (e) => {
                            a(e), g.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, i.jsx)("div", {
        className: f.a8,
        children: (0, i.jsx)(d.D, {
            label: S.intl.string(S.t.q4JpM8),
            children: (0, i.jsxs)(_.A, {
                align: _.A.Align.STRETCH,
                children: [
                    (0, i.jsx)("div", { className: f.$X, children: (0, i.jsx)(j, { channelId: l }) }),
                    (0, i.jsx)(_.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(u.$, { variant: "primary", text: S.intl.string(S.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function y(e) {
    let t,
        n,
        { transitionState: r, onClose: o, onSelect: d } = e,
        u = s.useId(),
        g = s.useRef(null),
        {
            query: _,
            updateQuery: b,
            queryResults: I,
        } = (0, m.A)({ visible: !0, autocompleterResultTypes: C, autocompleterBeforeCreateSearchContext: v }),
        y =
            ((t = "" !== _),
            (n = (0, a.yK)([p.Ay, h.A, E.A], () => {
                let e = E.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of p.Ay.getVocalChannelIds(e)) {
                    let e = h.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: j, setFocusedIndex: O } = (function (e) {
            let [t, n] = s.useState(0),
                i = s.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                s.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(_);
    s.useEffect(() => {
        let { current: e } = g;
        null == e || e.isItemVisible(0, j, !0) || e.scrollToIndex({ section: 0, row: j });
    }, [j]);
    let R = null != y ? y.length : I.length,
        L = (() => {
            if (null != y) return y[j]?.id;
            let e = I[j];
            if (e?.type === T.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        D =
            R > 0 || "" === _
                ? {
                      innerId: u,
                      innerRole: "listbox",
                      innerAriaLabel: S.intl.string(S.t["+N3fW7"]),
                      ref: g,
                      sections: [R],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != y) return y[t];
                                  let e = I[t];
                                  if (e?.type === T.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let s = null != n.parent_id ? h.A.getChannel(n.parent_id) : void 0,
                              l = x.A.getGuild(n.guild_id);
                          return (0, i.jsx)(
                              A.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: s,
                                  focused: j === t,
                                  onMouseEnter: () => O(t),
                                  onClick: () => {
                                      d(n.id), o();
                                  },
                                  onFocus: () => O(t),
                                  children: null != l ? (0, i.jsx)("div", { className: f.J5, children: l.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, i.jsx)(N, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, i.jsx)(l.Modal, {
        transitionState: r,
        onClose: o,
        title: S.intl.string(S.t.Dm8O4e),
        subtitle: S.intl.string(S.t.q4JpM8),
        actions: void 0,
        input: (0, i.jsx)(c.k, {
            value: _,
            onChange: b,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            o();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != y) return y[j];
                                let e = I[j];
                                if (e?.type === T.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? d(void 0) : d(e.id), o();
                            break;
                        }
                        case "arrowup":
                            0 === j ? O(R - 1) : O(j - 1);
                            break;
                        case "arrowdown":
                            j >= R - 1 ? O(0) : O(j + 1);
                    }
            },
            placeholder: S.intl.string(S.t.tG0r7g),
            role: "combobox",
            "aria-controls": u,
            "aria-expanded": R > 0,
            "aria-activedescendant": R > 0 && null != L ? L : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: D,
    });
}
function j(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: s,
            guild: l,
        } = (0, a.cf)([h.A, x.A], () => {
            let e = null != t ? h.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? h.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? x.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, i.jsx)(r.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: f.GN,
              children: S.intl.string(S.t["/fYIK7"]),
          })
        : (0, i.jsx)(A.c3, {
              channel: n,
              id: n.id,
              category: s,
              onClick: b,
              onFocus: b,
              onMouseEnter: b,
              focused: !1,
              children: null != l ? (0, i.jsx)("div", { className: f.J5, children: l.name }) : null,
          });
}
