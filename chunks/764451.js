(n.r(t), n.d(t, { Playground: () => en, PlaygroundStore: () => q }), n(323874), n(14289), n(35956));
var i = n(477900),
    r = n(582128),
    a = n(625903),
    s = n(624479),
    l = n(847374),
    o = n(789645),
    d = n(408278),
    c = n(477782),
    u = n(980707),
    _ = n(922016),
    E = n(691540),
    A = n(97483),
    h = n(862328),
    I = n(866665),
    f = n(67811),
    p = n(28863),
    T = n(417098),
    m = n(364522),
    g = n(398590),
    S = n(839214),
    N = n(58736),
    C = n(856488),
    O = n(269880),
    R = n(25044),
    L = n(957565),
    y = n(331322),
    D = n(683438),
    v = n(834730),
    b = n(761508);
function M(e) {
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
            (0, i.jsx)(y.B, {
                style: { marginBottom: "var(--space-12)" },
                children: (0, i.jsx)(D.I, {
                    size: "sm",
                    query: s,
                    onChange: l,
                    onClear: () => l(""),
                    placeholder: "Search stories\u2026",
                    "aria-label": "Search stories",
                }),
            }),
            0 === o.length
                ? (0, i.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: "No results" })
                : (0, i.jsx)(b.V, {
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
                                      (0, i.jsx)(b.V.Header, { children: e.title }),
                                      e.stories.map((e) =>
                                          (0, i.jsx)(
                                              b.V.Item,
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
                                      t < o.length - 1 && (0, i.jsx)(b.V.Separator, {}),
                                  ],
                              },
                              e.title,
                          ),
                      ),
                  }),
        ],
    });
}
var P = n(503698),
    U = n.n(P),
    w = n(310784),
    G = n.n(w),
    x = n(691885),
    k = n(150934),
    F = n(95477),
    B = n(299163),
    V = n(450278);
function H(e) {
    let { controls: t, props: n, onPropsChange: r } = e;
    function a(e, t) {
        r({ ...n, [e]: t });
    }
    let s = Object.entries(t);
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: V.in,
              children: (0, i.jsx)(y.B, {
                  gap: 16,
                  children: s.map((e) => {
                      let [t, r] = e,
                          s = n[t] ?? r.defaultValue;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              "select" === r.type &&
                                  null != r.options &&
                                  (0, i.jsx)(x.l, {
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
                                  (0, i.jsx)(k.S, { checked: s, onChange: (e) => a(t, e), label: r.label }),
                              "text" === r.type &&
                                  (0, i.jsx)(F.k, { value: s, onChange: (e) => a(t, e), label: r.label }),
                              "number" === r.type &&
                                  (0, i.jsx)(F.k, {
                                      type: "number",
                                      value: String(s),
                                      min: r.minValue,
                                      onChange: (e) => a(t, Number(e)),
                                      label: r.label,
                                  }),
                              "slider" === r.type &&
                                  (0, i.jsx)(B.A, {
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
                                          (0, i.jsx)(v.E, {
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
                                                              return G()(e).hex();
                                                          } catch {
                                                              return j;
                                                          }
                                                      })(s),
                                                      onChange: (e) => a(t, e.target.value),
                                                  }),
                                                  (0, i.jsx)(F.k, { value: s ?? "", onChange: (e) => a(t, e) }),
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
function W(e, t, n) {
    let i = n?.[e];
    return void 0 !== i ? i : t.defaultValue;
}
function Y(e, t) {
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
                    : W(e, a, n);
        r[e] = s;
    }
    return r;
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = e.controls,
        r = {};
    if (null == i || null == t) return r;
    for (let [e, a] of Object.entries(i)) {
        let i = t[e];
        i !== W(e, a, n) && null != i && (r[e] = String(i));
    }
    return r;
}
function $(e) {
    let { story: t, controlsLayout: n } = e,
        a = q.useField("controlOverrides"),
        s = t.useDefaultOverrides?.() ?? null,
        l = r.useMemo(() => JSON.stringify(s), [s]),
        [o, d] = r.useState(() => `${t.id}:${l}`),
        [c, u] = r.useState(() => Y(t, a, s)),
        _ = `${t.id}:${l}`;
    (o !== _ && (d(_), u(Y(t, a, s))),
        r.useLayoutEffect(() => {
            q.setState({ currentProps: c, currentDefaults: s, controlOverrides: null });
        }, [_]));
    let E = t.component,
        A = "hidden" !== n && (null != t.controls || null != t.ControlsExtension);
    return (0, i.jsxs)("div", {
        className: U()(V.iW, { [V.vT]: "bottom" === n, [V.Ix]: "right" === n }),
        children: [
            (0, i.jsx)("div", {
                className: V.Ji,
                children: (0, i.jsx)("div", { className: V.Dw, children: (0, i.jsx)(E, { ...c }, t.id) }),
            }),
            A &&
                (0, i.jsxs)("div", {
                    className: U()(V.ne, { [V.WK]: "bottom" === n, [V.BT]: "right" === n }),
                    children: [
                        null != t.ControlsExtension && (0, i.jsx)(t.ControlsExtension, {}),
                        null != t.controls &&
                            (0, i.jsx)(H, {
                                controls: t.controls,
                                props: c,
                                onPropsChange: function (e) {
                                    (u(e), q.setState({ currentProps: e }));
                                },
                            }),
                    ],
                }),
        ],
    });
}
var z = n(818348),
    X = n(375708);
let q = (0, S.D)(() => ({
    selectedCollection: null,
    selectedStory: null,
    controlsLayout: "right",
    controlOverrides: null,
    currentProps: null,
    currentDefaults: null,
}));
function Z() {
    let e = (0, O.A)(),
        t = (0, C.A)(),
        n = (0, R.A)(),
        a = q.useField("controlsLayout"),
        s = r.useMemo(
            () =>
                (0, i.jsxs)(
                    c.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, i.jsx)(c.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => q.setState({ controlsLayout: "right" }),
                                checked: "right" === a,
                            }),
                            (0, i.jsx)(c.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => q.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === a,
                            }),
                            (0, i.jsx)(c.iD, {
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
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated": !0,
        onSelect: z.tE,
        navId: "playground-settings-menu",
        onClose: z.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(c.Dr, {
                id: "appearance",
                label: X.intl.string(X.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), s],
            }),
            (0, i.jsx)(c.Dr, {
                id: "accessibility",
                label: X.intl.string(X.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(c.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function Q() {
    let e = r.useRef(null);
    return (0, i.jsx)(_.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(Z, {}),
        position: "bottom",
        align: "center",
        animation: _.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, i.jsx)(d.K, {
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
    let s = K(t, i, r),
        l = Object.keys(s);
    if (0 === l.length) return a;
    let o = new URLSearchParams();
    for (let e of l) o.set(e, s[e]);
    return `${a}?${o.toString()}`;
}
function ee(e) {
    (0, L.C)(e, () =>
        (0, E.P0)({ id: "playground-link-copied", message: "Copied playground link", type: A.Ck.SUCCESS }),
    );
}
function et(e) {
    let { collection: t, story: n } = e,
        a = q.useField("currentProps"),
        o = q.useField("currentDefaults"),
        E = r.useRef(null),
        A = r.useMemo(() => null != n && Object.keys(K(n, a, o)).length > 0, [n, a, o]),
        h = r.useCallback(() => ee(J(t, n, !0, a, o)), [t, n, a, o]),
        I = r.useCallback(() => ee(J(t, n, !1, a, o)), [t, n, a, o]);
    return A
        ? (0, i.jsxs)("div", {
              role: "group",
              "aria-label": "Copy playground link",
              className: V.sd,
              children: [
                  (0, i.jsx)(d.K, {
                      size: "sm",
                      "aria-label": "Copy link with configuration",
                      variant: "icon-only",
                      icon: s.CopyIcon,
                      onClick: h,
                  }),
                  (0, i.jsx)(_.Y, {
                      targetElementRef: E,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsxs)(u.W, {
                              "data-menu-migrated": !0,
                              onSelect: z.tE,
                              navId: "playground-copy-link-menu",
                              onClose: t,
                              "aria-label": "Copy link options",
                              children: [
                                  (0, i.jsx)(c.Dr, {
                                      id: "copy-link-with-config",
                                      label: "Copy link with configuration",
                                      action: () => {
                                          (t(), h());
                                      },
                                  }),
                                  (0, i.jsx)(c.Dr, {
                                      id: "copy-link-clean",
                                      label: "Copy clean link",
                                      action: () => {
                                          (t(), I());
                                      },
                                  }),
                              ],
                          });
                      },
                      position: "bottom",
                      align: "center",
                      animation: _.Y.Animation.SCALE,
                      onRequestClose: () => {},
                      children: (e) =>
                          (0, i.jsx)(d.K, {
                              size: "sm",
                              "aria-haspopup": "menu",
                              "aria-label": "More copy link options",
                              variant: "icon-only",
                              icon: l.a,
                              ...e,
                              buttonRef: E,
                          }),
                  }),
              ],
          })
        : (0, i.jsx)(d.K, {
              size: "sm",
              "aria-label": "Copy Link",
              variant: "icon-only",
              icon: s.CopyIcon,
              onClick: h,
          });
}
function en(e) {
    let { configs: t } = e,
        n = q.useField("selectedCollection"),
        a = q.useField("selectedStory"),
        s = q.useField("controlsLayout"),
        l = r.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: c,
            group: u,
            story: _,
        } = r.useMemo(() => {
            let e = null != n ? l.find((e) => e.id === n) : l[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === a)),
                i = t?.stories.find((e) => e.id === a) ?? null;
            return { collection: e, group: t, story: i };
        }, [n, a, l]),
        E = c?.name ?? "Design System",
        A = _?.name,
        S = null != _ && null != u ? (0, i.jsx)($, { story: _, groupTitle: u.title, controlsLayout: s }, _.id) : null,
        C = c?.Provider;
    return (0, i.jsxs)("div", {
        className: V.zr,
        "data-testid": "component-playground",
        children: [
            (0, i.jsx)("div", {
                className: V.Os,
                children: l.map((e) =>
                    (0, i.jsx)(
                        h.Q,
                        {
                            children: (0, i.jsx)(I.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, i.jsx)(f.j, {
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
                    (0, i.jsxs)(N.Ay, {
                        className: V.wx,
                        children: [
                            null != E ? (0, i.jsx)(N.Ay.Title, { children: E }) : null,
                            null != A
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != E ? (0, i.jsx)(N.Ay.Caret, { className: V.zN }) : null,
                                          (0, i.jsx)(N.Ay.Title, { children: A }),
                                      ],
                                  })
                                : null,
                            _?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(N.Ay.Divider, { className: V.zN }),
                                          (0, i.jsx)(N.Ay.Title, {
                                              children: (0, i.jsx)(p.Anchor, { href: _.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != c ? (0, i.jsx)(et, { collection: c, story: _ }) : null,
                            (0, i.jsxs)("div", {
                                className: V.IE,
                                children: [
                                    c?.HeaderControl != null ? (0, i.jsx)(c.HeaderControl, {}) : null,
                                    (0, i.jsx)(Q, {}),
                                    (0, i.jsx)(d.K, {
                                        size: "sm",
                                        icon: o.P,
                                        "aria-label": X.intl.string(X.t.cpT0Cq),
                                        variant: "icon-only",
                                        onClick: g.jH,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    c?.deprecationNotice != null &&
                        (0, i.jsx)(T.$T, { color: T.Hv.WARNING, className: V.B0, children: c.deprecationNotice }),
                    (0, i.jsxs)("div", {
                        className: V.MY,
                        children: [
                            (0, i.jsx)(m.Ip, {
                                fade: !0,
                                className: V.pz,
                                children:
                                    null != c
                                        ? (0, i.jsx)(M, {
                                              groups: c.groups,
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
                                children: null != C ? (0, i.jsx)(C, { children: S }) : S,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
