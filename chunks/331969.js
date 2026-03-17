n.d(t, { A: () => f }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(97260),
    d = n(337692),
    c = n(235986),
    u = n(586068),
    _ = n(734057),
    m = n(808728),
    g = n(71393),
    A = n(967198),
    h = n(926140),
    x = n(985018),
    p = n(971953);
function T() {}
let E = [h.rD.VOICE_CHANNEL];
function S(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function C() {
    return (0, i.jsx)("div", {
        className: p.i1,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            className: p.GN,
            children: x.intl.string(x.t.zHjCd1),
        }),
    });
}
function f(e) {
    let { keybind: t } = e,
        n = s.useRef(t);
    s.useEffect(() => {
        n.current = t;
    });
    let [l, a] = s.useState(t.params?.channelId ?? void 0),
        d = s.useCallback(() => {
            (0, r.mMO)(
                async () => (e) =>
                    (0, i.jsx)(b, {
                        ...e,
                        onSelect: (e) => {
                            a(e), o.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, i.jsx)("div", {
        className: p.a8,
        children: (0, i.jsx)(r.D0$, {
            label: x.intl.string(x.t.q4JpM8),
            children: (0, i.jsxs)(c.A, {
                align: c.A.Align.STRETCH,
                children: [
                    (0, i.jsx)("div", { className: p.$X, children: (0, i.jsx)(N, { channelId: l }) }),
                    (0, i.jsx)(c.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(r.Button, {
                            variant: "primary",
                            text: x.intl.string(x.t.Dm8O4e),
                            onClick: d,
                        }),
                    }),
                ],
            }),
        }),
    });
}
function b(e) {
    let t,
        n,
        { transitionState: o, onClose: c, onSelect: T } = e,
        f = s.useId(),
        b = s.useRef(null),
        {
            query: N,
            updateQuery: I,
            queryResults: v,
        } = (0, d.A)({ visible: !0, autocompleterResultTypes: E, autocompleterBeforeCreateSearchContext: S }),
        j =
            ((t = "" !== N),
            (n = (0, a.yK)([m.Ay, _.A, A.A], () => {
                let e = A.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of m.Ay.getVocalChannelIds(e)) {
                    let e = _.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: y, setFocusedIndex: R } = (function (e) {
            let [t, n] = s.useState(0),
                i = s.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                s.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(N);
    s.useEffect(() => {
        let { current: e } = b;
        null == e || e.isItemVisible(0, y, !0) || e.scrollToIndex({ section: 0, row: y });
    }, [y]);
    let O = null != j ? j.length : v.length,
        P = (() => {
            if (null != j) return j[y]?.id;
            let e = v[y];
            if (e?.type === h.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        D =
            O > 0 || "" === N
                ? {
                      innerId: f,
                      innerRole: "listbox",
                      innerAriaLabel: x.intl.string(x.t["+N3fW7"]),
                      ref: b,
                      sections: [O],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != j) return j[t];
                                  let e = v[t];
                                  if (e?.type === h.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let s = null != n.parent_id ? _.A.getChannel(n.parent_id) : void 0,
                              l = g.A.getGuild(n.guild_id);
                          return (0, i.jsx)(
                              u.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: s,
                                  focused: y === t,
                                  onMouseEnter: () => R(t),
                                  onClick: () => {
                                      T(n.id), c();
                                  },
                                  onFocus: () => R(t),
                                  children: null != l ? (0, i.jsx)("div", { className: p.J5, children: l.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, i.jsx)(C, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, i.jsx)(l.Modal, {
        transitionState: o,
        onClose: c,
        title: x.intl.string(x.t.Dm8O4e),
        subtitle: x.intl.string(x.t.q4JpM8),
        actions: void 0,
        input: (0, i.jsx)(r.ksK, {
            value: N,
            onChange: I,
            onKeyDown: function (e) {
                let t = e.key.toLowerCase();
                if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t)
                    switch ((e.preventDefault(), t)) {
                        case "escape":
                            c();
                            break;
                        case "enter": {
                            let e = (() => {
                                if (null != j) return j[y];
                                let e = v[y];
                                if (e?.type === h.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? T(void 0) : T(e.id), c();
                            break;
                        }
                        case "arrowup":
                            0 === y ? R(O - 1) : R(y - 1);
                            break;
                        case "arrowdown":
                            y >= O - 1 ? R(0) : R(y + 1);
                    }
            },
            placeholder: x.intl.string(x.t.tG0r7g),
            role: "combobox",
            "aria-controls": f,
            "aria-expanded": O > 0,
            "aria-activedescendant": O > 0 && null != P ? P : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: D,
    });
}
function N(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: s,
            guild: l,
        } = (0, a.cf)([_.A, g.A], () => {
            let e = null != t ? _.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? _.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? g.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, i.jsx)(r.Text, {
              variant: "text-md/medium",
              color: "text-muted",
              className: p.GN,
              children: x.intl.string(x.t["/fYIK7"]),
          })
        : (0, i.jsx)(u.c3, {
              channel: n,
              id: n.id,
              category: s,
              onClick: T,
              onFocus: T,
              onMouseEnter: T,
              focused: !1,
              children: null != l ? (0, i.jsx)("div", { className: p.J5, children: l.name }) : null,
          });
}
