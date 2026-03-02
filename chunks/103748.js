n.d(t, { A: () => E }), n(321073), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(854284),
    o = n(311907),
    d = n(732955),
    c = n(397927),
    u = n(900686),
    m = n(817363),
    h = n(287070),
    x = n(239606),
    p = n(287809),
    g = n(43708),
    _ = n(14752),
    f = n(930442),
    b = n(553622),
    v = n(727220),
    j = n(445292);
let A = { [_.qH.THUMBNAIL]: null, [_.qH.STATIC]: null, [_.qH.REDUCED_MOTION]: null },
    C = "debug",
    T = "reduced-motion-preview-modal",
    y = (e) => {
        let { transitionState: t, onClose: n, frameSrc: i, theme: s } = e;
        return (0, a.jsx)(d.dWK, {
            transitionState: t,
            size: "md",
            onClose: n,
            maxHeight: "viewport",
            children: (0, a.jsxs)("div", {
                className: b.Xd,
                children: [
                    (0, a.jsx)("div", {
                        className: b.y6,
                        children: (0, a.jsx)(c.K0, {
                            "aria-label": "Close",
                            onClick: n,
                            icon: c.d$L,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: b.rU,
                        children: [
                            (0, a.jsx)(c.NPJ, {
                                theme: s,
                                children: (e) =>
                                    (0, a.jsx)("img", {
                                        src: j.A,
                                        alt: "",
                                        className: l()(b.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != i &&
                                "" !== i &&
                                (0, a.jsx)("img", { src: i, className: b.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    S = (e) => {
        let { type: t, frame: n, theme: i, onClear: s } = e,
            r = t === _.qH.REDUCED_MOTION,
            o = r ? j.A : v.A,
            d = (0, a.jsx)(c.NPJ, {
                theme: i,
                children: (e) =>
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("img", { src: o, alt: "", className: l()(b.aM, e), "aria-hidden": !0 }),
                            n?.src != null &&
                                "" !== n.src &&
                                (0, a.jsx)("img", { src: n.src, className: l()(b.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, a.jsxs)("div", {
            className: b.pK,
            children: [
                (0, a.jsx)(c.Heading, { variant: "heading-sm/bold", children: t }),
                r
                    ? (0, a.jsx)(c.DUT, {
                          className: l()(b.zd, b.eB),
                          onClick: () => {
                              (0, c.kBI)(T)
                                  ? (0, c.OoC)(T)
                                  : (0, c.mMO)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, a.jsx)(y, { ...e, frameSrc: n?.src ?? null, theme: i }),
                                            ),
                                        { modalKey: T, onCloseRequest: () => (0, c.OoC)(T) },
                                    );
                          },
                          children: d,
                      })
                    : (0, a.jsx)("div", { className: b.zd, children: d }),
                null != n &&
                    (0, a.jsx)(c.Button, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: s }),
            ],
        });
    },
    E = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, g.wu)(),
            s = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
            [d, j] = i.useState(!0),
            T = i.useRef({}),
            [y, E] = i.useState(!1),
            [N, I] = i.useState(!1),
            [k, R] = i.useState(8),
            [O, w] = i.useState([]),
            [D, M] = i.useState(A),
            P = i.useRef([]),
            [L, U] = i.useState(t.name),
            B = L.toLowerCase().replace(/\s+/g, "_"),
            G = i.useMemo(
                () => ({
                    id: C,
                    skuId: C,
                    title: C,
                    description: C,
                    accessibilityLabel: C,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: O,
                    animationType: r.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [O],
            ),
            F = y ? c.LU0.themes.DARKER : c.LU0.themes.LIGHT,
            V = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            W = (e, t) => {
                let n = V(t);
                null != n &&
                    (0, _.Mz)(n, (t) => {
                        M((a) => ({ ...a, [e]: (0, _.GT)(t, n) }));
                    });
            };
        i.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 && w(e);
        }, [t.config.effects]),
            i.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            if ("" !== n.src && null != n.src && ("" === n.base64 || null == n.base64))
                                M((e) => ({ ...e, [t]: n }));
                            else if ("" !== n.base64 && null != n.base64) {
                                let e = (0, _.fB)(n.base64);
                                (n.src = e), P.current.push(e), M((e) => ({ ...e, [t]: n }));
                            }
                        }
                    });
            }, [t.config.stillFrames]);
        let H = { effect: t, upsertConfig: n },
            K = i.useRef(H);
        return (i.useEffect(() => {
            K.current = H;
        }),
        i.useEffect(() => {
            let { effect: e, upsertConfig: t } = K.current;
            e.readonly || t({ skuId: e.skuId, name: L, config: { effects: O, stillFrames: D } });
        }, [O, D, L]),
        i.useEffect(
            () => () => {
                P.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (P.current = []);
            },
            [],
        ),
        null == s)
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: b.zr,
                  children: [
                      (0, a.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      T.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = V(e);
                                      null != t &&
                                          (0, _.Mz)(t, async (e) => {
                                              let n = await (0, _.Ay)(e, t, O.length);
                                              w((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      T.current.thumbnail = e;
                                  },
                                  onChange: (e) => W(_.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      T.current.static = e;
                                  },
                                  onChange: (e) => W(_.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      T.current.reducedMotion = e;
                                  },
                                  onChange: (e) => W(_.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: b.Vg,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: l()(b.nM, b.uW),
                                  children: [
                                      (0, a.jsx)(c.Text, {
                                          variant: "text-md/normal",
                                          children: "Profile Effect Name",
                                      }),
                                      (0, a.jsx)("input", {
                                          type: "text",
                                          value: L,
                                          className: b.hF,
                                          onChange: (e) => {
                                              U(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.nM,
                                  children: [
                                      (0, a.jsx)(c.Text, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, a.jsx)("input", {
                                          type: "checkbox",
                                          checked: y,
                                          className: b.OO,
                                          onChange: () => {
                                              E(!y);
                                          },
                                      }),
                                      (0, a.jsx)(c.Text, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, a.jsx)("input", {
                                          type: "checkbox",
                                          checked: N,
                                          className: b.OO,
                                          onChange: () => {
                                              I(!N);
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.nM,
                                  children: [
                                      (0, a.jsx)(c.Text, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, a.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: k,
                                          onChange: (e) => R(+e.target.value),
                                      }),
                                      (0, a.jsxs)(c.Text, { variant: "text-sm/normal", children: [k, "px"] }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(b.nz, b.VH),
                                  style: { borderRadius: k },
                                  children: [
                                      N
                                          ? (0, a.jsx)("div", {
                                                className: b.jq,
                                                children: (0, a.jsx)(x.A, {
                                                    user: s,
                                                    currentUser: s,
                                                    transitionState: c.ip4.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: b.JB,
                                                }),
                                            })
                                          : (0, a.jsx)(c.NPJ, {
                                                theme: F,
                                                children: (e) =>
                                                    (0, a.jsx)("div", {
                                                        className: l()(b.aM, e),
                                                        children: (0, a.jsx)("img", { src: v.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      d &&
                                          (0, a.jsx)("div", {
                                              className: b.KJ,
                                              children: (0, a.jsx)(f.A, { config: G }),
                                          }),
                                  ],
                              }),
                              (0, a.jsx)("div", {
                                  children:
                                      N &&
                                      (0, a.jsxs)("div", {
                                          className: l()(b.f5, b.VH),
                                          style: { borderRadius: k },
                                          children: [
                                              (0, a.jsx)(h.A, {
                                                  user: s,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, a.jsx)(f.A, { config: G }),
                                          ],
                                      }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.nz,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: b.nM,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => T.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: b.nM,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => T.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => T.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => T.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", {
                                          className: b.q6,
                                          children: (0, a.jsx)("div", {
                                              className: b.nM,
                                              children: (0, a.jsx)(c.Button, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      j(!1), setTimeout(() => j(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: l()(b.q6, b.XA),
                                          children: [
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: b.nM,
                                                  children: [
                                                      (0, a.jsx)(u.A, {
                                                          fileContents: () => (0, _.rs)(O),
                                                          contentType: "text/plain",
                                                          fileName: `${B}_timing_config.txt`,
                                                          children: (0, a.jsx)(c.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(u.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: L,
                                                                  readonly: !1,
                                                                  config: { ...t.config, effects: O, stillFrames: D },
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${B}_config.txt`,
                                                          children: (0, a.jsx)(c.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Full Config",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: b.uW,
                                          children: [
                                              (0, a.jsx)(c.Heading, {
                                                  variant: "heading-lg/bold",
                                                  children: "Still Frames",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: b.mv,
                                                  children: Object.entries(D).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsx)(
                                                          S,
                                                          {
                                                              type: t,
                                                              frame: n,
                                                              theme: F,
                                                              onClear: () => {
                                                                  M((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      O.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, a.jsxs)("div", {
                                              className: l()(b.uW, b.l7),
                                              children: [
                                                  (0, a.jsx)(c.Text, {
                                                      variant: "text-md/bold",
                                                      children: "Rules of Randomized Effects",
                                                  }),
                                                  (0, a.jsxs)("ol", {
                                                      children: [
                                                          (0, a.jsx)("li", {
                                                              children:
                                                                  "When an effect has randomization, all layers with random options must have the same number of options.",
                                                          }),
                                                          (0, a.jsx)("li", {
                                                              children:
                                                                  "The duration for the random options of a layer must be the same",
                                                          }),
                                                          (0, a.jsx)("li", {
                                                              children:
                                                                  "If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)",
                                                          }),
                                                          (0, a.jsx)("li", {
                                                              children:
                                                                  'Click "Replay Animation" to "reroll" the randomization',
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(b.Vg, b.ZF),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: b.cD,
                                          children: (0, a.jsx)(c.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  w([]), M(A);
                                              },
                                          }),
                                      }),
                                      O.map((e, t) =>
                                          (0, a.jsxs)(
                                              "div",
                                              {
                                                  className: b.ec,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: b.D1,
                                                          children: [
                                                              (0, a.jsx)(c.Heading, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, a.jsx)("img", {
                                                                  src: e.src,
                                                                  className: b.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, a.jsxs)(a.Fragment, {
                                                                      children: [
                                                                          (0, a.jsx)(c.Heading, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, a.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, a.jsx)(c.Heading, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, a.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: b.oq,
                                                                                              alt: "",
                                                                                          }),
                                                                                      ],
                                                                                  },
                                                                                  e.filename ?? `randomized-${t}`,
                                                                              ),
                                                                          ),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: l()(b.Vg, b.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: b.nz,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: b.hF,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let a = [...n],
                                                                                      i = n[t];
                                                                                  return (
                                                                                      (i.start = +e.target.value),
                                                                                      (a[t] = i),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsxs)("div", {
                                                                  className: b.nz,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: b.hF,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let a = [...n],
                                                                                      i = n[t];
                                                                                  return (
                                                                                      (i.duration = +e.target.value),
                                                                                      (a[t] = i),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: l()(b.Vg, b.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: b.nz,
                                                                  children: [
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: b.OO,
                                                                          onChange: (e) => {
                                                                              w((n) => {
                                                                                  let a = [...n],
                                                                                      i = n[t];
                                                                                  return (
                                                                                      (i.loop = e.target.checked),
                                                                                      (a[t] = i),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsx)("div", {
                                                                  className: b.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, a.jsxs)(a.Fragment, {
                                                                          children: [
                                                                              (0, a.jsx)(c.Text, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, a.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: b.hF,
                                                                                  onChange: (e) => {
                                                                                      w((n) => {
                                                                                          let a = [...n],
                                                                                              i = n[t];
                                                                                          return (
                                                                                              (i.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (a[t] = i),
                                                                                              a
                                                                                          );
                                                                                      });
                                                                                  },
                                                                                  contentEditable: !0,
                                                                              }),
                                                                          ],
                                                                      }),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, a.jsx)("div", {
                                                          style: { display: "none" },
                                                          children: (0, a.jsx)(m.A, {
                                                              ref: (e) => {
                                                                  T.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let n;
                                                                  null != (n = V(e)) &&
                                                                      (0, _.Mz)(n, (e) => {
                                                                          w((a) => {
                                                                              let i = [...a],
                                                                                  s = a[t];
                                                                              if (null == s) return a;
                                                                              let l = { ...s };
                                                                              return (
                                                                                  null == l.randomizedSources &&
                                                                                      (l.randomizedSources = []),
                                                                                  l.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: n.name,
                                                                                  }),
                                                                                  (i[t] = l),
                                                                                  i
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: l()(b.nM, b._N),
                                                          children: [
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      T.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      w((t) => t.filter((t) => t !== e));
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              t,
                                          ),
                                      ),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    };
