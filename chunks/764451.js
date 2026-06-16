"use strict";
n.r(t), n.d(t, { Playground: () => en, PlaygroundStore: () => Z }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    s = n(625903),
    a = n(624479),
    o = n(847374),
    l = n(789645),
    u = n(364522),
    c = n(349288),
    d = n(862328),
    _ = n(980707),
    h = n(477782),
    f = n(67811),
    p = n(922016),
    E = n(691540),
    m = n(990078),
    g = n(408278),
    A = n(417098),
    I = n(398590),
    T = n(839214),
    S = n(58736),
    y = n(856488),
    C = n(269880),
    N = n(25044),
    v = n(957565),
    R = n(331322),
    O = n(892547),
    b = n(834730),
    D = n(761508);
function L(e) {
    let { groups: t, selectedStory: n, onStorySelect: s } = e,
        [a, o] = r.useState(""),
        l = r.useMemo(() => {
            if ("" === a.trim()) return t;
            let e = a.toLowerCase();
            return t
                .map((t) => ({ ...t, stories: t.stories.filter((t) => t.name.toLowerCase().includes(e)) }))
                .filter((e) => e.stories.length > 0);
        }, [t, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(R.B, {
                style: { marginBottom: "var(--space-12)" },
                children: (0, i.jsx)(O.I, {
                    size: "sm",
                    query: a,
                    onChange: o,
                    onClear: () => o(""),
                    placeholder: "Search stories\u2026",
                    "aria-label": "Search stories",
                }),
            }),
            0 === l.length
                ? (0, i.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: "No results" })
                : (0, i.jsx)(D.V, {
                      selectedItem: n,
                      orientation: "vertical",
                      onItemSelect: (e) => {
                          null != e && s(e);
                      },
                      children: l.map((e, t) =>
                          (0, i.jsxs)(
                              r.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(D.V.Header, { children: e.title }),
                                      e.stories.map((e) =>
                                          (0, i.jsx)(
                                              D.V.Item,
                                              {
                                                  selectedItem: n,
                                                  id: e.id,
                                                  "aria-label": e.name,
                                                  onItemSelect: () => {
                                                      s(e.id);
                                                  },
                                                  children: (0, i.jsx)("span", {
                                                      "data-testid": `playground-story-${e.id}`,
                                                      children: e.name,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                                      t < l.length - 1 && (0, i.jsx)(D.V.Separator, {}),
                                  ],
                              },
                              e.title,
                          ),
                      ),
                  }),
        ],
    });
}
var w = n(503698),
    M = n.n(w),
    P = n(310784),
    x = n.n(P),
    k = n(292666),
    U = n(691885),
    G = n(150934),
    F = n(106236),
    V = n(895925);
function B(e) {
    let { controls: t, props: n, onPropsChange: r } = e,
        s = (e, t) => {
            r({ ...n, [e]: t });
        },
        a = Object.entries(t);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: V.in,
              children: (0, i.jsx)(R.B, {
                  gap: 16,
                  children: a.map((e) => {
                      let [t, r] = e,
                          a = n[t] ?? r.defaultValue;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              "select" === r.type &&
                                  null != r.options &&
                                  (0, i.jsx)(U.l, {
                                      label: r.label,
                                      value: a,
                                      onSelectionChange: (e) => s(t, e),
                                      options: r.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return { id: n, value: n, label: t };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === r.type &&
                                  (0, i.jsx)(G.S, { checked: a, onChange: (e) => s(t, e), label: r.label }),
                              "text" === r.type &&
                                  (0, i.jsx)(k.k, { value: a, onChange: (e) => s(t, e), label: r.label }),
                              "number" === r.type &&
                                  (0, i.jsx)(k.k, {
                                      type: "number",
                                      value: String(a),
                                      min: r.minValue,
                                      onChange: (e) => s(t, Number(e)),
                                      label: r.label,
                                  }),
                              "slider" === r.type &&
                                  (0, i.jsx)(F.A, {
                                      initialValue: null != a ? Number(a) : 0,
                                      value: null != a ? Number(a) : void 0,
                                      minValue: r.minValue,
                                      maxValue: r.maxValue,
                                      keyboardStep: (r.maxValue - r.minValue) * 0.05,
                                      asValueChanges: (e) => s(t, e),
                                      handleSize: 10,
                                      disabled: !1,
                                      stickToMarkers: !1,
                                      fillStyles: {},
                                      label: r.label,
                                      onValueRender: (e) => String(Math.round(1e3 * e) / 1e3),
                                  }),
                              "color" === r.type &&
                                  (0, i.jsxs)("div", {
                                      className: V.fJ,
                                      children: [
                                          (0, i.jsx)(b.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              tag: "label",
                                              children: r.label,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: V.nY,
                                              children: [
                                                  (0, i.jsx)("input", {
                                                      type: "color",
                                                      className: V.oP,
                                                      value: (function (e) {
                                                          if (null == e || "" === e) return j;
                                                          try {
                                                              return x()(e).hex();
                                                          } catch {
                                                              return j;
                                                          }
                                                      })(a),
                                                      onChange: (e) => s(t, e.target.value),
                                                  }),
                                                  (0, i.jsx)(k.k, { value: a ?? "", onChange: (e) => s(t, e) }),
                                              ],
                                          }),
                                      ],
                                  }),
                          ],
                      });
                  }),
              }),
          });
}
let j = "#000000";
function H(e, t, n) {
    let i = n?.[e];
    return void 0 !== i ? i : t.defaultValue;
}
function Y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = e.controls,
        r = {};
    if (null == i) return r;
    for (let [e, s] of Object.entries(i)) {
        let i = t?.[e],
            a =
                null != i
                    ? (function (e, t) {
                          switch (e.type) {
                              case "select": {
                                  let n = e.options.find((e) => String(e.value) === t);
                                  return null != n ? n.value : e.defaultValue;
                              }
                              case "boolean":
                                  if ("true" === t) return !0;
                                  if ("false" === t) return !1;
                                  return e.defaultValue;
                              case "number": {
                                  let n = Number(t);
                                  return Number.isNaN(n) ? e.defaultValue : n;
                              }
                              case "slider": {
                                  let n = Number(t);
                                  if (Number.isNaN(n)) return e.defaultValue;
                                  return Math.min(e.maxValue, Math.max(e.minValue, n));
                              }
                              case "text":
                              case "color":
                                  return t;
                          }
                      })(s, i)
                    : H(e, s, n);
        r[e] = a;
    }
    return r;
}
function W(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = e.controls,
        r = {};
    if (null == i || null == t) return r;
    for (let [e, s] of Object.entries(i)) {
        let i = t[e];
        i !== H(e, s, n) && null != i && (r[e] = String(i));
    }
    return r;
}
function K(e) {
    let { story: t, controlsLayout: n } = e,
        s = Z.useField("controlOverrides"),
        a = t.useDefaultOverrides?.() ?? null,
        o = r.useMemo(() => JSON.stringify(a), [a]),
        [l, u] = r.useState(() => `${t.id}:${o}`),
        [c, d] = r.useState(() => Y(t, s, a)),
        _ = `${t.id}:${o}`;
    l !== _ && (u(_), d(Y(t, s, a))),
        r.useLayoutEffect(() => {
            Z.setState({ currentProps: c, currentDefaults: a, controlOverrides: null });
        }, [_]);
    let h = t.component,
        f = "hidden" !== n && null != t.controls;
    return (0, i.jsxs)("div", {
        className: M()(V.iW, { [V.vT]: "bottom" === n, [V.Ix]: "right" === n }),
        children: [
            (0, i.jsx)("div", {
                className: V.Ji,
                children: (0, i.jsx)("div", { className: V.Dw, children: (0, i.jsx)(h, { ...c }, t.id) }),
            }),
            f &&
                null != t.controls &&
                (0, i.jsx)("div", {
                    className: M()(V.ne, { [V.WK]: "bottom" === n, [V.BT]: "right" === n }),
                    children: (0, i.jsx)(B, {
                        controls: t.controls,
                        props: c,
                        onPropsChange: (e) => {
                            d(e), Z.setState({ currentProps: e });
                        },
                    }),
                }),
        ],
    });
}
var $ = n(97483),
    z = n(818348),
    q = n(375708);
let Z = (0, T.D)(() => ({
    selectedCollection: null,
    selectedStory: null,
    controlsLayout: "right",
    controlOverrides: null,
    currentProps: null,
    currentDefaults: null,
}));
function X() {
    let e = (0, C.A)(),
        t = (0, y.A)(),
        n = (0, N.A)(),
        s = Z.useField("controlsLayout"),
        a = r.useMemo(
            () =>
                (0, i.jsxs)(
                    h.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, i.jsx)(h.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => Z.setState({ controlsLayout: "right" }),
                                checked: "right" === s,
                            }),
                            (0, i.jsx)(h.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => Z.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === s,
                            }),
                            (0, i.jsx)(h.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => Z.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === s,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [s],
        );
    return (0, i.jsxs)(_.W, {
        "data-menu-migrated": !0,
        onSelect: z.tE,
        navId: "playground-settings-menu",
        onClose: z.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(h.Dr, {
                id: "appearance",
                label: q.intl.string(q.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), a],
            }),
            (0, i.jsx)(h.Dr, {
                id: "accessibility",
                label: q.intl.string(q.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(h.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function Q() {
    let e = r.useRef(null);
    return (0, i.jsx)(p.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(X, {}),
        position: "bottom",
        align: "center",
        animation: p.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, i.jsx)(g.K, {
                size: "sm",
                icon: s.Z,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function J(e, t, n, i, r) {
    let s = null != t ? `dev://playground/${e.id}/${t.id}` : `dev://playground/${e.id}`;
    if (!n || null == t) return s;
    let a = W(t, i, r),
        o = Object.keys(a);
    if (0 === o.length) return s;
    let l = new URLSearchParams();
    for (let e of o) l.set(e, a[e]);
    return `${s}?${l.toString()}`;
}
function ee(e) {
    (0, v.C)(e, () =>
        (0, E.P0)({ id: "playground-link-copied", message: "Copied playground link", type: $.Ck.SUCCESS }),
    );
}
function et(e) {
    let { collection: t, story: n } = e,
        s = Z.useField("currentProps"),
        l = Z.useField("currentDefaults"),
        u = r.useRef(null),
        c = r.useMemo(() => null != n && Object.keys(W(n, s, l)).length > 0, [n, s, l]),
        d = r.useCallback(() => ee(J(t, n, !0, s, l)), [t, n, s, l]),
        f = r.useCallback(() => ee(J(t, n, !1, s, l)), [t, n, s, l]);
    return c
        ? (0, i.jsxs)("div", {
              role: "group",
              "aria-label": "Copy playground link",
              className: V.sd,
              children: [
                  (0, i.jsx)(g.K, {
                      size: "sm",
                      "aria-label": "Copy link with configuration",
                      variant: "icon-only",
                      icon: a.T,
                      onClick: d,
                  }),
                  (0, i.jsx)(p.Y, {
                      targetElementRef: u,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsxs)(_.W, {
                              "data-menu-migrated": !0,
                              onSelect: z.tE,
                              navId: "playground-copy-link-menu",
                              onClose: t,
                              "aria-label": "Copy link options",
                              children: [
                                  (0, i.jsx)(h.Dr, {
                                      id: "copy-link-with-config",
                                      label: "Copy link with configuration",
                                      action: () => {
                                          t(), d();
                                      },
                                  }),
                                  (0, i.jsx)(h.Dr, {
                                      id: "copy-link-clean",
                                      label: "Copy clean link",
                                      action: () => {
                                          t(), f();
                                      },
                                  }),
                              ],
                          });
                      },
                      position: "bottom",
                      align: "center",
                      animation: p.Y.Animation.SCALE,
                      onRequestClose: () => {},
                      children: (e) =>
                          (0, i.jsx)(g.K, {
                              size: "sm",
                              "aria-haspopup": "menu",
                              "aria-label": "More copy link options",
                              variant: "icon-only",
                              icon: o.a,
                              ...e,
                              buttonRef: u,
                          }),
                  }),
              ],
          })
        : (0, i.jsx)(g.K, { size: "sm", "aria-label": "Copy Link", variant: "icon-only", icon: a.T, onClick: d });
}
function en(e) {
    let { configs: t } = e,
        n = Z.useField("selectedCollection"),
        s = Z.useField("selectedStory"),
        a = Z.useField("controlsLayout"),
        o = r.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: _,
            group: h,
            story: p,
        } = r.useMemo(() => {
            let e = null != n ? o.find((e) => e.id === n) : o[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === s)),
                i = t?.stories.find((e) => e.id === s) ?? null;
            return { collection: e, group: t, story: i };
        }, [n, s, o]),
        E = _?.name ?? "Design System",
        T = p?.name,
        y = null != p && null != h ? (0, i.jsx)(K, { story: p, groupTitle: h.title, controlsLayout: a }, p.id) : null,
        C = _?.Provider;
    return (0, i.jsxs)("div", {
        className: V.zr,
        children: [
            (0, i.jsx)("div", {
                className: V.Os,
                children: o.map((e) =>
                    (0, i.jsx)(
                        d.Q,
                        {
                            children: (0, i.jsx)(m.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, i.jsx)(f.j, {
                                    name: e.name,
                                    selected: (n ?? o[0]?.id) === e.id,
                                    onClick: () => {
                                        var t;
                                        return (
                                            (t = e.id),
                                            void Z.setState({
                                                selectedCollection: t,
                                                selectedStory: null,
                                                controlOverrides: null,
                                                currentProps: null,
                                            })
                                        );
                                    },
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: V.Qs,
                children: [
                    (0, i.jsxs)(S.Ay, {
                        className: V.wx,
                        children: [
                            null != E ? (0, i.jsx)(S.Ay.Title, { children: E }) : null,
                            null != T
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != E ? (0, i.jsx)(S.Ay.Caret, { className: V.zN }) : null,
                                          (0, i.jsx)(S.Ay.Title, { children: T }),
                                      ],
                                  })
                                : null,
                            p?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(S.Ay.Divider, { className: V.zN }),
                                          (0, i.jsx)(S.Ay.Title, {
                                              children: (0, i.jsx)(c.Anchor, { href: p.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != _ ? (0, i.jsx)(et, { collection: _, story: p }) : null,
                            (0, i.jsxs)("div", {
                                className: V.IE,
                                children: [
                                    _?.HeaderControl != null ? (0, i.jsx)(_.HeaderControl, {}) : null,
                                    (0, i.jsx)(Q, {}),
                                    (0, i.jsx)(g.K, {
                                        size: "sm",
                                        icon: l.P,
                                        "aria-label": q.intl.string(q.t.cpT0Cq),
                                        variant: "icon-only",
                                        onClick: I.jH,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _?.deprecationNotice != null &&
                        (0, i.jsx)(A.$T, { color: A.Hv.WARNING, className: V.B0, children: _.deprecationNotice }),
                    (0, i.jsxs)("div", {
                        className: V.MY,
                        children: [
                            (0, i.jsx)(u.Ip, {
                                fade: !0,
                                className: V.pz,
                                children:
                                    null != _
                                        ? (0, i.jsx)(L, {
                                              groups: _.groups,
                                              selectedStory: s,
                                              onStorySelect: (e) => {
                                                  Z.setState({
                                                      selectedStory: e,
                                                      controlOverrides: null,
                                                      currentProps: null,
                                                  });
                                              },
                                          })
                                        : null,
                            }),
                            (0, i.jsx)("div", {
                                className: V.Qs,
                                children: null != C ? (0, i.jsx)(C, { children: y }) : y,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
