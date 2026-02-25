n.d(t, { A: () => I }), n(321073), n(323874), n(14289), n(35956);
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
    b = n(870120),
    v = n(526565),
    j = n(124733),
    C = n(865524),
    A = n(154878);
let T = { [_.qH.THUMBNAIL]: null, [_.qH.STATIC]: null, [_.qH.REDUCED_MOTION]: null },
    S = "debug",
    y = "reduced-motion-preview-modal",
    E = (e) => {
        let { transitionState: t, onClose: n, frameSrc: i, placeholderSrc: s } = e;
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
                            (0, a.jsx)("img", { src: s, alt: "", className: b.Vw, "aria-hidden": !0 }),
                            null != i &&
                                "" !== i &&
                                (0, a.jsx)("img", { src: i, className: b.BS, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    N = (e) => {
        let { type: t, frame: n, showDarkTheme: i, onClear: s } = e,
            r = t === _.qH.REDUCED_MOTION,
            o = r ? (i ? C : A) : i ? v : j,
            d = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("img", { src: o, alt: "", className: b.XM, "aria-hidden": !0 }),
                    n?.src != null && "" !== n.src && (0, a.jsx)("img", { src: n.src, className: b.SD, alt: "" }),
                ],
            });
        return (0, a.jsxs)("div", {
            className: b.pK,
            children: [
                (0, a.jsx)(c.Heading, { variant: "heading-sm/bold", children: t }),
                r
                    ? (0, a.jsx)(c.DUT, {
                          className: l()(b.zd, b.eB),
                          onClick: () => {
                              (0, c.kBI)(y)
                                  ? (0, c.OoC)(y)
                                  : (0, c.mMO)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, a.jsx)(E, { ...e, frameSrc: n?.src ?? null, placeholderSrc: o }),
                                            ),
                                        { modalKey: y, onCloseRequest: () => (0, c.OoC)(y) },
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
    I = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, g.wu)(),
            s = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
            [d, C] = i.useState(!0),
            A = i.useRef({}),
            [y, E] = i.useState(!1),
            [I, k] = i.useState(!1),
            [R, O] = i.useState(8),
            [w, D] = i.useState([]),
            [M, P] = i.useState(T),
            L = i.useRef([]),
            [U, B] = i.useState(t.name),
            G = U.toLowerCase().replace(/\s+/g, "_"),
            F = i.useMemo(
                () => ({
                    id: S,
                    skuId: S,
                    title: S,
                    description: S,
                    accessibilityLabel: S,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: w,
                    animationType: r.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [w],
            ),
            V = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            W = (e, t) => {
                let n = V(t);
                null != n &&
                    (0, _.Mz)(n, (t) => {
                        P((a) => ({ ...a, [e]: (0, _.GT)(t, n) }));
                    });
            };
        i.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 && D(e);
        }, [t.config.effects]),
            i.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            if ("" !== n.src && null != n.src && ("" === n.base64 || null == n.base64))
                                P((e) => ({ ...e, [t]: n }));
                            else if ("" !== n.base64 && null != n.base64) {
                                let e = (0, _.fB)(n.base64);
                                (n.src = e), L.current.push(e), P((e) => ({ ...e, [t]: n }));
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
            e.readonly || t({ skuId: e.skuId, name: U, config: { effects: w, stillFrames: M } });
        }, [w, M, U]),
        i.useEffect(
            () => () => {
                L.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (L.current = []);
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
                                      A.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = V(e);
                                      null != t &&
                                          (0, _.Mz)(t, async (e) => {
                                              let n = await (0, _.Ay)(e, t, w.length);
                                              D((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      A.current.thumbnail = e;
                                  },
                                  onChange: (e) => W(_.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      A.current.static = e;
                                  },
                                  onChange: (e) => W(_.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(m.A, {
                                  ref: (e) => {
                                      A.current.reducedMotion = e;
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
                                          value: U,
                                          className: b.hF,
                                          onChange: (e) => {
                                              B(e.target.value);
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
                                          checked: I,
                                          className: b.OO,
                                          onChange: () => {
                                              k(!I);
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
                                          value: R,
                                          onChange: (e) => O(+e.target.value),
                                      }),
                                      (0, a.jsxs)(c.Text, { variant: "text-sm/normal", children: [R, "px"] }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(b.nz, b.VH),
                                  style: { borderRadius: R },
                                  children: [
                                      I
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
                                          : (0, a.jsx)("img", { src: y ? v : j, alt: "", width: 400 }),
                                      d &&
                                          (0, a.jsx)("div", {
                                              className: b.KJ,
                                              children: (0, a.jsx)(f.A, { config: F }),
                                          }),
                                  ],
                              }),
                              (0, a.jsx)("div", {
                                  children:
                                      I &&
                                      (0, a.jsxs)("div", {
                                          className: l()(b.f5, b.VH),
                                          style: { borderRadius: R },
                                          children: [
                                              (0, a.jsx)(h.A, {
                                                  user: s,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, a.jsx)(f.A, { config: F }),
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
                                                  onClick: () => A.current.animated?.activateUploadDialogue(),
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
                                                  onClick: () => A.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => A.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => A.current.reducedMotion?.activateUploadDialogue(),
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
                                                      C(!1), setTimeout(() => C(!0), 100);
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
                                                          fileContents: () => (0, _.rs)(w),
                                                          contentType: "text/plain",
                                                          fileName: `${G}_timing_config.txt`,
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
                                                                  name: U,
                                                                  readonly: !1,
                                                                  config: { ...t.config, effects: w, stillFrames: M },
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${G}_config.txt`,
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
                                                  children: Object.entries(M).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsx)(
                                                          N,
                                                          {
                                                              type: t,
                                                              frame: n,
                                                              showDarkTheme: y,
                                                              onClear: () => {
                                                                  P((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      w.some((e) => (e.randomizedSources ?? []).length > 0) &&
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
                                                  D([]), P(T);
                                              },
                                          }),
                                      }),
                                      w.map((e, t) =>
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
                                                                              D((n) => {
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
                                                                              D((n) => {
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
                                                                              D((n) => {
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
                                                                                      D((n) => {
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
                                                                  A.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let n;
                                                                  null != (n = V(e)) &&
                                                                      (0, _.Mz)(n, (e) => {
                                                                          D((a) => {
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
                                                                      A.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      D((t) => t.filter((t) => t !== e));
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
