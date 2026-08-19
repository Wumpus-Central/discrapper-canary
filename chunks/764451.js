"use strict";
n.r(t), n.d(t, { Playground: () => en, PlaygroundStore: () => q }), n(323874), n(14289), n(35956);
var i = n(477900),
    r = n(582128),
    a = n(625903),
    s = n(624479),
    l = n(847374),
    o = n(789645),
    d = n(364522),
    c = n(349288),
    u = n(862328),
    _ = n(980707),
    E = n(477782),
    A = n(67811),
    h = n(922016),
    I = n(691540),
    f = n(408278),
    p = n(866665),
    T = n(417098),
    m = n(398590),
    g = n(839214),
    S = n(58736),
    N = n(856488),
    C = n(269880),
    O = n(25044),
    R = n(957565),
    L = n(331322),
    y = n(892547),
    D = n(834730),
    v = n(761508);
function b(e) {
    let { groups: t, selectedStory: n, onStorySelect: a } = e,
        [s, l] = r.useState(""),
        o = r.useMemo(() => {
            if ("" === s.trim()) return t;
            let e = s.toLowerCase();
            return t
                .map((t) => ({ ...t, stories: t.stories.filter((t) => t.name.toLowerCase().includes(e)) }))
                .filter((e) => e.stories.length > 0);
        }, [t, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(L.B, {
                style: { marginBottom: "var(--space-12)" },
                children: (0, i.jsx)(y.I, {
                    size: "sm",
                    query: s,
                    onChange: l,
                    onClear: () => l(""),
                    placeholder: "Search stories\u2026",
                    "aria-label": "Search stories",
                }),
            }),
            0 === o.length
                ? (0, i.jsx)(D.E, { variant: "text-sm/normal", color: "text-muted", children: "No results" })
                : (0, i.jsx)(v.V, {
                      selectedItem: n,
                      orientation: "vertical",
                      onItemSelect: (e) => {
                          null != e && a(e);
                      },
                      children: o.map((e, t) =>
                          (0, i.jsxs)(
                              r.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(v.V.Header, { children: e.title }),
                                      e.stories.map((e) =>
                                          (0, i.jsx)(
                                              v.V.Item,
                                              {
                                                  selectedItem: n,
                                                  id: e.id,
                                                  "aria-label": e.name,
                                                  onItemSelect: () => {
                                                      a(e.id);
                                                  },
                                                  children: (0, i.jsx)("span", {
                                                      "data-testid": `playground-story-${e.id}`,
                                                      children: e.name,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                                      t < o.length - 1 && (0, i.jsx)(v.V.Separator, {}),
                                  ],
                              },
                              e.title,
                          ),
                      ),
                  }),
        ],
    });
}
var M = n(503698),
    P = n.n(M),
    U = n(310784),
    w = n.n(U),
    G = n(691885),
    x = n(150934),
    k = n(95477),
    F = n(106236),
    V = n(892813);
function B(e) {
    let { controls: t, props: n, onPropsChange: r } = e;
    function a(e, t) {
        r({ ...n, [e]: t });
    }
    let s = Object.entries(t);
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: V.in,
              children: (0, i.jsx)(L.B, {
                  gap: 16,
                  children: s.map((e) => {
                      let [t, r] = e,
                          s = n[t] ?? r.defaultValue;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              "select" === r.type &&
                                  null != r.options &&
                                  (0, i.jsx)(G.l, {
                                      label: r.label,
                                      value: s,
                                      onSelectionChange: (e) => a(t, e),
                                      options: r.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return { id: n, value: n, label: t };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === r.type &&
                                  (0, i.jsx)(x.S, { checked: s, onChange: (e) => a(t, e), label: r.label }),
                              "text" === r.type &&
                                  (0, i.jsx)(k.k, { value: s, onChange: (e) => a(t, e), label: r.label }),
                              "number" === r.type &&
                                  (0, i.jsx)(k.k, {
                                      type: "number",
                                      value: String(s),
                                      min: r.minValue,
                                      onChange: (e) => a(t, Number(e)),
                                      label: r.label,
                                  }),
                              "slider" === r.type &&
                                  (0, i.jsx)(F.A, {
                                      initialValue: null != s ? Number(s) : 0,
                                      value: null != s ? Number(s) : void 0,
                                      minValue: r.minValue,
                                      maxValue: r.maxValue,
                                      keyboardStep: (r.maxValue - r.minValue) * 0.05,
                                      asValueChanges: (e) => a(t, e),
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
                                          (0, i.jsx)(D.E, {
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
                                                          if (null == e || "" === e) return H;
                                                          try {
                                                              return w()(e).hex();
                                                          } catch {
                                                              return H;
                                                          }
                                                      })(s),
                                                      onChange: (e) => a(t, e.target.value),
                                                  }),
                                                  (0, i.jsx)(k.k, { value: s ?? "", onChange: (e) => a(t, e) }),
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
let H = "#000000";
function j(e, t, n) {
    let i = n?.[e];
    return void 0 !== i ? i : t.defaultValue;
}
function W(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = e.controls,
        r = {};
    if (null == i) return r;
    for (let [e, a] of Object.entries(i)) {
        let i = t?.[e],
            s =
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
                      })(a, i)
                    : j(e, a, n);
        r[e] = s;
    }
    return r;
}
function Y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = e.controls,
        r = {};
    if (null == i || null == t) return r;
    for (let [e, a] of Object.entries(i)) {
        let i = t[e];
        i !== j(e, a, n) && null != i && (r[e] = String(i));
    }
    return r;
}
function K(e) {
    let { story: t, controlsLayout: n } = e,
        a = q.useField("controlOverrides"),
        s = t.useDefaultOverrides?.() ?? null,
        l = r.useMemo(() => JSON.stringify(s), [s]),
        [o, d] = r.useState(() => `${t.id}:${l}`),
        [c, u] = r.useState(() => W(t, a, s)),
        _ = `${t.id}:${l}`;
    o !== _ && (d(_), u(W(t, a, s))),
        r.useLayoutEffect(() => {
            q.setState({ currentProps: c, currentDefaults: s, controlOverrides: null });
        }, [_]);
    let E = t.component,
        A = "hidden" !== n && (null != t.controls || null != t.ControlsExtension);
    return (0, i.jsxs)("div", {
        className: P()(V.iW, { [V.vT]: "bottom" === n, [V.Ix]: "right" === n }),
        children: [
            (0, i.jsx)("div", {
                className: V.Ji,
                children: (0, i.jsx)("div", { className: V.Dw, children: (0, i.jsx)(E, { ...c }, t.id) }),
            }),
            A &&
                (0, i.jsxs)("div", {
                    className: P()(V.ne, { [V.WK]: "bottom" === n, [V.BT]: "right" === n }),
                    children: [
                        null != t.ControlsExtension && (0, i.jsx)(t.ControlsExtension, {}),
                        null != t.controls &&
                            (0, i.jsx)(B, {
                                controls: t.controls,
                                props: c,
                                onPropsChange: function (e) {
                                    u(e), q.setState({ currentProps: e });
                                },
                            }),
                    ],
                }),
        ],
    });
}
var $ = n(97483),
    z = n(818348),
    Z = n(375708);
let q = (0, g.D)(() => ({
    selectedCollection: null,
    selectedStory: null,
    controlsLayout: "right",
    controlOverrides: null,
    currentProps: null,
    currentDefaults: null,
}));
function X() {
    let e = (0, C.A)(),
        t = (0, N.A)(),
        n = (0, O.A)(),
        a = q.useField("controlsLayout"),
        s = r.useMemo(
            () =>
                (0, i.jsxs)(
                    E.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, i.jsx)(E.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => q.setState({ controlsLayout: "right" }),
                                checked: "right" === a,
                            }),
                            (0, i.jsx)(E.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => q.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === a,
                            }),
                            (0, i.jsx)(E.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => q.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === a,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [a],
        );
    return (0, i.jsxs)(_.W, {
        "data-menu-migrated": !0,
        onSelect: z.tE,
        navId: "playground-settings-menu",
        onClose: z.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(E.Dr, {
                id: "appearance",
                label: Z.intl.string(Z.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), s],
            }),
            (0, i.jsx)(E.Dr, {
                id: "accessibility",
                label: Z.intl.string(Z.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(E.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function Q() {
    let e = r.useRef(null);
    return (0, i.jsx)(h.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(X, {}),
        position: "bottom",
        align: "center",
        animation: h.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, i.jsx)(f.K, {
                size: "sm",
                icon: a.SettingsIcon,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function J(e, t, n, i, r) {
    let a = null != t ? `dev://playground/${e.id}/${t.id}` : `dev://playground/${e.id}`;
    if (!n || null == t) return a;
    let s = Y(t, i, r),
        l = Object.keys(s);
    if (0 === l.length) return a;
    let o = new URLSearchParams();
    for (let e of l) o.set(e, s[e]);
    return `${a}?${o.toString()}`;
}
function ee(e) {
    (0, R.C)(e, () =>
        (0, I.P0)({ id: "playground-link-copied", message: "Copied playground link", type: $.Ck.SUCCESS }),
    );
}
function et(e) {
    let { collection: t, story: n } = e,
        a = q.useField("currentProps"),
        o = q.useField("currentDefaults"),
        d = r.useRef(null),
        c = r.useMemo(() => null != n && Object.keys(Y(n, a, o)).length > 0, [n, a, o]),
        u = r.useCallback(() => ee(J(t, n, !0, a, o)), [t, n, a, o]),
        A = r.useCallback(() => ee(J(t, n, !1, a, o)), [t, n, a, o]);
    return c
        ? (0, i.jsxs)("div", {
              role: "group",
              "aria-label": "Copy playground link",
              className: V.sd,
              children: [
                  (0, i.jsx)(f.K, {
                      size: "sm",
                      "aria-label": "Copy link with configuration",
                      variant: "icon-only",
                      icon: s.CopyIcon,
                      onClick: u,
                  }),
                  (0, i.jsx)(h.Y, {
                      targetElementRef: d,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsxs)(_.W, {
                              "data-menu-migrated": !0,
                              onSelect: z.tE,
                              navId: "playground-copy-link-menu",
                              onClose: t,
                              "aria-label": "Copy link options",
                              children: [
                                  (0, i.jsx)(E.Dr, {
                                      id: "copy-link-with-config",
                                      label: "Copy link with configuration",
                                      action: () => {
                                          t(), u();
                                      },
                                  }),
                                  (0, i.jsx)(E.Dr, {
                                      id: "copy-link-clean",
                                      label: "Copy clean link",
                                      action: () => {
                                          t(), A();
                                      },
                                  }),
                              ],
                          });
                      },
                      position: "bottom",
                      align: "center",
                      animation: h.Y.Animation.SCALE,
                      onRequestClose: () => {},
                      children: (e) =>
                          (0, i.jsx)(f.K, {
                              size: "sm",
                              "aria-haspopup": "menu",
                              "aria-label": "More copy link options",
                              variant: "icon-only",
                              icon: l.a,
                              ...e,
                              buttonRef: d,
                          }),
                  }),
              ],
          })
        : (0, i.jsx)(f.K, {
              size: "sm",
              "aria-label": "Copy Link",
              variant: "icon-only",
              icon: s.CopyIcon,
              onClick: u,
          });
}
function en(e) {
    let { configs: t } = e,
        n = q.useField("selectedCollection"),
        a = q.useField("selectedStory"),
        s = q.useField("controlsLayout"),
        l = r.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: _,
            group: E,
            story: h,
        } = r.useMemo(() => {
            let e = null != n ? l.find((e) => e.id === n) : l[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === a)),
                i = t?.stories.find((e) => e.id === a) ?? null;
            return { collection: e, group: t, story: i };
        }, [n, a, l]),
        I = _?.name ?? "Design System",
        g = h?.name,
        N = null != h && null != E ? (0, i.jsx)(K, { story: h, groupTitle: E.title, controlsLayout: s }, h.id) : null,
        C = _?.Provider;
    return (0, i.jsxs)("div", {
        className: V.zr,
        "data-testid": "component-playground",
        children: [
            (0, i.jsx)("div", {
                className: V.Os,
                children: l.map((e) =>
                    (0, i.jsx)(
                        u.Q,
                        {
                            children: (0, i.jsx)(p.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, i.jsx)(A.j, {
                                    name: e.name,
                                    selected: (n ?? l[0]?.id) === e.id,
                                    onClick: () => {
                                        var t;
                                        return (
                                            (t = e.id),
                                            void q.setState({
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
                            null != I ? (0, i.jsx)(S.Ay.Title, { children: I }) : null,
                            null != g
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != I ? (0, i.jsx)(S.Ay.Caret, { className: V.zN }) : null,
                                          (0, i.jsx)(S.Ay.Title, { children: g }),
                                      ],
                                  })
                                : null,
                            h?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(S.Ay.Divider, { className: V.zN }),
                                          (0, i.jsx)(S.Ay.Title, {
                                              children: (0, i.jsx)(c.Anchor, { href: h.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != _ ? (0, i.jsx)(et, { collection: _, story: h }) : null,
                            (0, i.jsxs)("div", {
                                className: V.IE,
                                children: [
                                    _?.HeaderControl != null ? (0, i.jsx)(_.HeaderControl, {}) : null,
                                    (0, i.jsx)(Q, {}),
                                    (0, i.jsx)(f.K, {
                                        size: "sm",
                                        icon: o.P,
                                        "aria-label": Z.intl.string(Z.t.cpT0Cq),
                                        variant: "icon-only",
                                        onClick: m.jH,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    _?.deprecationNotice != null &&
                        (0, i.jsx)(T.$T, { color: T.Hv.WARNING, className: V.B0, children: _.deprecationNotice }),
                    (0, i.jsxs)("div", {
                        className: V.MY,
                        children: [
                            (0, i.jsx)(d.Ip, {
                                fade: !0,
                                className: V.pz,
                                children:
                                    null != _
                                        ? (0, i.jsx)(b, {
                                              groups: _.groups,
                                              selectedStory: a,
                                              onStorySelect: function (e) {
                                                  q.setState({
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
                                children: null != C ? (0, i.jsx)(C, { children: N }) : N,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
