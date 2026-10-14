(n.r(t), n.d(t, { Playground: () => ee }), n(323874), n(14289), n(35956));
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
    E = n(858899),
    A = n(862328),
    h = n(866665),
    f = n(67811),
    I = n(28863),
    p = n(417098),
    T = n(364522),
    m = n(398590),
    g = n(58736),
    S = n(856488),
    N = n(269880),
    C = n(25044),
    O = n(957565),
    R = n(101715),
    L = n(331322),
    y = n(683438),
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
    F = n(299163),
    B = n(450278);
function V(e) {
    let { controls: t, props: n, onPropsChange: r } = e;
    function a(e, t) {
        r({ ...n, [e]: t });
    }
    let s = Object.entries(t);
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: B.in,
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
                                      keyboardStep: null != r.markers ? 1 : (r.maxValue - r.minValue) * 0.05,
                                      markers: r.markers,
                                      asValueChanges: (e) => a(t, e),
                                      handleSize: 10,
                                      disabled: !1,
                                      stickToMarkers: null != r.markers,
                                      fillStyles: {},
                                      label: r.label,
                                      onValueRender: (e) => String(Math.round(1e3 * e) / 1e3),
                                  }),
                              "color" === r.type &&
                                  (0, i.jsxs)("div", {
                                      className: B.fJ,
                                      children: [
                                          (0, i.jsx)(D.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              tag: "label",
                                              children: r.label,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: B.nY,
                                              children: [
                                                  (0, i.jsx)("input", {
                                                      type: "color",
                                                      className: B.oP,
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
                                  let i = Math.min(e.maxValue, Math.max(e.minValue, n)),
                                      [r, ...a] = e.markers ?? [];
                                  if (null == r) return i;
                                  return a.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e), r);
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
        a = R.x.useField("controlOverrides"),
        s = t.useDefaultOverrides?.() ?? null,
        l = r.useMemo(() => JSON.stringify(s), [s]),
        [o, d] = r.useState(() => `${t.id}:${l}`),
        [c, u] = r.useState(() => W(t, a, s)),
        _ = `${t.id}:${l}`;
    (o !== _ && (d(_), u(W(t, a, s))),
        r.useLayoutEffect(() => {
            R.x.setState({ currentProps: c, currentDefaults: s, controlOverrides: null });
        }, [_]));
    let E = t.component,
        A = n !== R.G.HIDDEN && (null != t.controls || null != t.ControlsExtension);
    return (0, i.jsxs)("div", {
        className: P()(B.iW, { [B.vT]: n === R.G.BOTTOM, [B.Ix]: n === R.G.RIGHT }),
        children: [
            (0, i.jsx)("div", {
                className: B.Ji,
                children: (0, i.jsx)("div", { className: B.Dw, children: (0, i.jsx)(E, { ...c }, t.id) }),
            }),
            A &&
                (0, i.jsxs)("div", {
                    className: P()(B.ne, { [B.WK]: n === R.G.BOTTOM, [B.BT]: n === R.G.RIGHT }),
                    children: [
                        null != t.ControlsExtension && (0, i.jsx)(t.ControlsExtension, {}),
                        null != t.controls &&
                            (0, i.jsx)(V, {
                                controls: t.controls,
                                props: c,
                                onPropsChange: function (e) {
                                    (u(e), R.x.setState({ currentProps: e }));
                                },
                            }),
                    ],
                }),
        ],
    });
}
var $ = n(818348),
    z = n(660183);
function X() {
    let e = (0, N.A)(),
        t = (0, S.A)(),
        n = (0, C.A)(),
        a = R.x.useField("controlsLayout"),
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
                                action: () => R.x.setState({ controlsLayout: R.G.RIGHT }),
                                checked: a === R.G.RIGHT,
                            }),
                            (0, i.jsx)(c.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => R.x.setState({ controlsLayout: R.G.BOTTOM }),
                                checked: a === R.G.BOTTOM,
                            }),
                            (0, i.jsx)(c.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => R.x.setState({ controlsLayout: R.G.HIDDEN }),
                                checked: a === R.G.HIDDEN,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [a],
        );
    return (0, i.jsxs)(u.W, {
        "data-menu-migrated": !0,
        onSelect: $.tE,
        navId: "playground-settings-menu",
        onClose: $.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(c.Dr, {
                id: "appearance",
                label: z.intl.string(z.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), s],
            }),
            (0, i.jsx)(c.Dr, {
                id: "accessibility",
                label: z.intl.string(z.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(c.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function q() {
    let e = r.useRef(null);
    return (0, i.jsx)(_.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(X, {}),
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
function Z(e, t, n, i, r) {
    let a = null != t ? `dev://playground/${e.id}/${t.id}` : `dev://playground/${e.id}`;
    if (!n || null == t) return a;
    let s = Y(t, i, r),
        l = Object.keys(s);
    if (0 === l.length) return a;
    let o = new URLSearchParams();
    for (let e of l) o.set(e, s[e]);
    return `${a}?${o.toString()}`;
}
function Q(e) {
    (0, O.C)(e, () => (0, E.P0)({ text: "Copied playground link", variant: "success" }));
}
function J(e) {
    let { collection: t, story: n } = e,
        a = R.x.useField("currentProps"),
        o = R.x.useField("currentDefaults"),
        E = r.useRef(null),
        A = r.useMemo(() => null != n && Object.keys(Y(n, a, o)).length > 0, [n, a, o]),
        h = r.useCallback(() => Q(Z(t, n, !0, a, o)), [t, n, a, o]),
        f = r.useCallback(() => Q(Z(t, n, !1, a, o)), [t, n, a, o]);
    return A
        ? (0, i.jsxs)("div", {
              role: "group",
              "aria-label": "Copy playground link",
              className: B.sd,
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
                              onSelect: $.tE,
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
                                          (t(), f());
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
function ee(e) {
    let { configs: t } = e,
        n = R.x.useField("selectedCollection"),
        a = R.x.useField("selectedStory"),
        s = R.x.useField("controlsLayout"),
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
        S = _?.name,
        N = null != _ && null != u ? (0, i.jsx)(K, { story: _, groupTitle: u.title, controlsLayout: s }, _.id) : null,
        C = c?.Provider;
    return (0, i.jsxs)("div", {
        className: B.zr,
        "data-testid": "component-playground",
        children: [
            (0, i.jsx)("div", {
                className: B.Os,
                children: l.map((e) =>
                    (0, i.jsx)(
                        A.Q,
                        {
                            children: (0, i.jsx)(h.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, i.jsx)(f.j, {
                                    name: e.name,
                                    selected: (n ?? l[0]?.id) === e.id,
                                    onClick: () => {
                                        var t;
                                        return (
                                            (t = e.id),
                                            void R.x.setState({
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
                className: B.Qs,
                children: [
                    (0, i.jsxs)(g.Ay, {
                        className: B.wx,
                        children: [
                            null != E ? (0, i.jsx)(g.Ay.Title, { children: E }) : null,
                            null != S
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != E ? (0, i.jsx)(g.Ay.Caret, { className: B.zN }) : null,
                                          (0, i.jsx)(g.Ay.Title, { children: S }),
                                      ],
                                  })
                                : null,
                            _?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(g.Ay.Divider, { className: B.zN }),
                                          (0, i.jsx)(g.Ay.Title, {
                                              children: (0, i.jsx)(I.Anchor, { href: _.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != c ? (0, i.jsx)(J, { collection: c, story: _ }) : null,
                            (0, i.jsxs)("div", {
                                className: B.IE,
                                children: [
                                    c?.HeaderControl != null ? (0, i.jsx)(c.HeaderControl, {}) : null,
                                    (0, i.jsx)(q, {}),
                                    (0, i.jsx)(d.K, {
                                        size: "sm",
                                        icon: o.P,
                                        "aria-label": z.intl.string(z.t.cpT0Cq),
                                        variant: "icon-only",
                                        onClick: m.jH,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    c?.deprecationNotice != null &&
                        (0, i.jsx)(p.$T, { color: p.Hv.WARNING, className: B.B0, children: c.deprecationNotice }),
                    (0, i.jsxs)("div", {
                        className: B.MY,
                        children: [
                            (0, i.jsx)(T.Ip, {
                                fade: !0,
                                className: B.pz,
                                children:
                                    null != c
                                        ? (0, i.jsx)(b, {
                                              groups: c.groups,
                                              selectedStory: a,
                                              onStorySelect: function (e) {
                                                  R.x.setState({
                                                      selectedStory: e,
                                                      controlOverrides: null,
                                                      currentProps: null,
                                                  });
                                              },
                                          })
                                        : null,
                            }),
                            (0, i.jsx)("div", {
                                className: B.Qs,
                                children: null != C ? (0, i.jsx)(C, { children: N }) : N,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
