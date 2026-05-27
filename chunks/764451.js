"use strict";
n.r(t), n.d(t, { Playground: () => J, PlaygroundStore: () => $ }), n(323874), n(14289), n(35956);
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
    A = n(398590),
    I = n(839214),
    T = n(58736),
    S = n(856488),
    y = n(269880),
    N = n(25044),
    v = n(957565),
    C = n(761508);
function R(e) {
    let { groups: t, selectedStory: n, onStorySelect: s } = e;
    return (0, i.jsx)(C.V, {
        selectedItem: n,
        orientation: "vertical",
        onItemSelect: (e) => {
            null != e && s(e);
        },
        children: t.map((e, a) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)(C.V.Header, { children: e.title }),
                        e.stories.map((e) =>
                            (0, i.jsx)(
                                C.V.Item,
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
                        a < t.length - 1 && (0, i.jsx)(C.V.Separator, {}),
                    ],
                },
                e.title,
            ),
        ),
    });
}
var O = n(503698),
    b = n.n(O),
    D = n(310784),
    L = n.n(D),
    w = n(331322),
    M = n(834730),
    P = n(292666),
    x = n(691885),
    k = n(150934),
    U = n(106236),
    G = n(895925);
function F(e) {
    let { controls: t, props: n, onPropsChange: r } = e,
        s = (e, t) => {
            r({ ...n, [e]: t });
        },
        a = Object.entries(t);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: G.in,
              children: (0, i.jsx)(w.B, {
                  gap: 16,
                  children: a.map((e) => {
                      let [t, r] = e,
                          a = n[t] ?? r.defaultValue;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              "select" === r.type &&
                                  null != r.options &&
                                  (0, i.jsx)(x.l, {
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
                                  (0, i.jsx)(k.S, { checked: a, onChange: (e) => s(t, e), label: r.label }),
                              "text" === r.type &&
                                  (0, i.jsx)(P.k, { value: a, onChange: (e) => s(t, e), label: r.label }),
                              "number" === r.type &&
                                  (0, i.jsx)(P.k, {
                                      type: "number",
                                      value: String(a),
                                      min: r.minValue,
                                      onChange: (e) => s(t, Number(e)),
                                      label: r.label,
                                  }),
                              "slider" === r.type &&
                                  (0, i.jsx)(U.A, {
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
                                      className: G.fJ,
                                      children: [
                                          (0, i.jsx)(M.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              tag: "label",
                                              children: r.label,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: G.nY,
                                              children: [
                                                  (0, i.jsx)("input", {
                                                      type: "color",
                                                      className: G.oP,
                                                      value: (function (e) {
                                                          if (null == e || "" === e) return V;
                                                          try {
                                                              return L()(e).hex();
                                                          } catch {
                                                              return V;
                                                          }
                                                      })(a),
                                                      onChange: (e) => s(t, e.target.value),
                                                  }),
                                                  (0, i.jsx)(P.k, { value: a ?? "", onChange: (e) => s(t, e) }),
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
let V = "#000000";
function B(e, t) {
    let n = e.controls,
        i = {};
    if (null == n) return i;
    for (let [e, r] of Object.entries(n)) {
        let n = t?.[e],
            s =
                null != n
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
                      })(r, n)
                    : r.defaultValue;
        i[e] = s;
    }
    return i;
}
function H(e, t) {
    let n = e.controls,
        i = {};
    if (null == n || null == t) return i;
    for (let [e, r] of Object.entries(n)) {
        let n = t[e];
        n !== r.defaultValue && null != n && (i[e] = String(n));
    }
    return i;
}
function j(e) {
    let { story: t, controlsLayout: n } = e,
        s = $.useField("controlOverrides"),
        [a, o] = r.useState(t.id),
        [l, u] = r.useState(() => B(t, s));
    a !== t.id && (o(t.id), u(B(t, s))),
        r.useLayoutEffect(() => {
            $.setState({ currentProps: l, controlOverrides: null });
        }, [t.id]);
    let c = t.component,
        d = "hidden" !== n && null != t.controls;
    return (0, i.jsxs)("div", {
        className: b()(G.iW, { [G.vT]: "bottom" === n, [G.Ix]: "right" === n }),
        children: [
            (0, i.jsx)("div", {
                className: G.Ji,
                children: (0, i.jsx)("div", { className: G.Dw, children: (0, i.jsx)(c, { ...l }, t.id) }),
            }),
            d &&
                null != t.controls &&
                (0, i.jsx)("div", {
                    className: b()(G.ne, { [G.WK]: "bottom" === n, [G.BT]: "right" === n }),
                    children: (0, i.jsx)(F, {
                        controls: t.controls,
                        props: l,
                        onPropsChange: (e) => {
                            u(e), $.setState({ currentProps: e });
                        },
                    }),
                }),
        ],
    });
}
var Y = n(97483),
    W = n(818348),
    K = n(375708);
let $ = (0, I.D)(() => ({
    selectedCollection: null,
    selectedStory: null,
    controlsLayout: "right",
    controlOverrides: null,
    currentProps: null,
}));
function z() {
    let e = (0, y.A)(),
        t = (0, S.A)(),
        n = (0, N.A)(),
        s = $.useField("controlsLayout"),
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
                                action: () => $.setState({ controlsLayout: "right" }),
                                checked: "right" === s,
                            }),
                            (0, i.jsx)(h.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => $.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === s,
                            }),
                            (0, i.jsx)(h.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => $.setState({ controlsLayout: "hidden" }),
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
        onSelect: W.tE,
        navId: "playground-settings-menu",
        onClose: W.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(h.Dr, {
                id: "appearance",
                label: K.intl.string(K.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), a],
            }),
            (0, i.jsx)(h.Dr, {
                id: "accessibility",
                label: K.intl.string(K.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(h.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function q() {
    let e = r.useRef(null);
    return (0, i.jsx)(p.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(z, {}),
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
function X(e, t, n, i) {
    let r = null != t ? `dev://playground/${e.id}/${t.id}` : `dev://playground/${e.id}`;
    if (!n || null == t) return r;
    let s = H(t, i),
        a = Object.keys(s);
    if (0 === a.length) return r;
    let o = new URLSearchParams();
    for (let e of a) o.set(e, s[e]);
    return `${r}?${o.toString()}`;
}
function Z(e) {
    (0, v.C)(e, () =>
        (0, E.P0)({ id: "playground-link-copied", message: "Copied playground link", type: Y.Ck.SUCCESS }),
    );
}
function Q(e) {
    let { collection: t, story: n } = e,
        s = $.useField("currentProps"),
        l = r.useRef(null),
        u = r.useMemo(() => null != n && Object.keys(H(n, s)).length > 0, [n, s]),
        c = r.useCallback(() => Z(X(t, n, !0, s)), [t, n, s]),
        d = r.useCallback(() => Z(X(t, n, !1, s)), [t, n, s]);
    return u
        ? (0, i.jsxs)("div", {
              role: "group",
              "aria-label": "Copy playground link",
              className: G.sd,
              children: [
                  (0, i.jsx)(g.K, {
                      size: "sm",
                      "aria-label": "Copy link with configuration",
                      variant: "icon-only",
                      icon: a.T,
                      onClick: c,
                  }),
                  (0, i.jsx)(p.Y, {
                      targetElementRef: l,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsxs)(_.W, {
                              "data-menu-migrated": !0,
                              onSelect: W.tE,
                              navId: "playground-copy-link-menu",
                              onClose: t,
                              "aria-label": "Copy link options",
                              children: [
                                  (0, i.jsx)(h.Dr, {
                                      id: "copy-link-with-config",
                                      label: "Copy link with configuration",
                                      action: () => {
                                          t(), c();
                                      },
                                  }),
                                  (0, i.jsx)(h.Dr, {
                                      id: "copy-link-clean",
                                      label: "Copy clean link",
                                      action: () => {
                                          t(), d();
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
                              buttonRef: l,
                          }),
                  }),
              ],
          })
        : (0, i.jsx)(g.K, { size: "sm", "aria-label": "Copy Link", variant: "icon-only", icon: a.T, onClick: c });
}
function J(e) {
    let { configs: t } = e,
        n = $.useField("selectedCollection"),
        s = $.useField("selectedStory"),
        a = $.useField("controlsLayout"),
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
        I = p?.name;
    return (0, i.jsxs)("div", {
        className: G.zr,
        children: [
            (0, i.jsx)("div", {
                className: G.Os,
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
                                            void $.setState({
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
                className: G.Qs,
                children: [
                    (0, i.jsxs)(T.Ay, {
                        className: G.wx,
                        children: [
                            null != E ? (0, i.jsx)(T.Ay.Title, { children: E }) : null,
                            null != I
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != E ? (0, i.jsx)(T.Ay.Caret, { className: G.zN }) : null,
                                          (0, i.jsx)(T.Ay.Title, { children: I }),
                                      ],
                                  })
                                : null,
                            p?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(T.Ay.Divider, { className: G.zN }),
                                          (0, i.jsx)(T.Ay.Title, {
                                              children: (0, i.jsx)(c.Anchor, { href: p.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != _ ? (0, i.jsx)(Q, { collection: _, story: p }) : null,
                            (0, i.jsxs)("div", {
                                className: G.IE,
                                children: [
                                    (0, i.jsx)(q, {}),
                                    (0, i.jsx)(g.K, {
                                        size: "sm",
                                        icon: l.P,
                                        "aria-label": K.intl.string(K.t.cpT0Cq),
                                        variant: "icon-only",
                                        onClick: A.jH,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: G.MY,
                        children: [
                            (0, i.jsx)(u.Ip, {
                                fade: !0,
                                className: G.pz,
                                children:
                                    null != _
                                        ? (0, i.jsx)(R, {
                                              groups: _.groups,
                                              selectedStory: s,
                                              onStorySelect: (e) => {
                                                  $.setState({
                                                      selectedStory: e,
                                                      controlOverrides: null,
                                                      currentProps: null,
                                                  });
                                              },
                                          })
                                        : null,
                            }),
                            (0, i.jsx)("div", {
                                className: G.Qs,
                                children:
                                    null != p && null != h
                                        ? (0, i.jsx)(j, { story: p, groupTitle: h.title, controlsLayout: a })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
