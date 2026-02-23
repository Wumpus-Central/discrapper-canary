n.d(t, { A: () => N }), n(321073), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(854284),
    o = n(311907),
    d = n(397927),
    c = n(900686),
    u = n(817363),
    m = n(287070),
    h = n(239606),
    x = n(287809),
    p = n(43708),
    g = n(14752),
    _ = n(930442),
    f = n(553622),
    b = n(526565),
    v = n(124733),
    j = n(865524),
    C = n(154878);
let A = { [g.qH.THUMBNAIL]: null, [g.qH.STATIC]: null, [g.qH.REDUCED_MOTION]: null },
    T = "debug",
    S = "reduced-motion-preview-modal",
    y = (e) => {
        let { transitionState: t, onClose: n, frameSrc: i, placeholderSrc: s } = e;
        return (0, a.jsx)(d.EOs, {
            transitionState: t,
            size: d.rIJ.MEDIUM,
            parentComponent: "ReducedMotionPreviewModal",
            children: (0, a.jsxs)(d.$mQ, {
                className: f.Xd,
                children: [
                    (0, a.jsx)("div", {
                        className: f.y6,
                        children: (0, a.jsx)(d.K0, {
                            "aria-label": "Close",
                            onClick: n,
                            icon: d.d$L,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: f.rU,
                        children: [
                            (0, a.jsx)("img", { src: s, alt: "", className: f.Vw, "aria-hidden": !0 }),
                            null != i &&
                                "" !== i &&
                                (0, a.jsx)("img", { src: i, className: f.BS, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    E = (e) => {
        let { type: t, frame: n, showDarkTheme: i, onClear: s } = e,
            r = t === g.qH.REDUCED_MOTION,
            o = r ? (i ? j : C) : i ? b : v,
            c = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("img", { src: o, alt: "", className: f.XM, "aria-hidden": !0 }),
                    n?.src != null && "" !== n.src && (0, a.jsx)("img", { src: n.src, className: f.SD, alt: "" }),
                ],
            });
        return (0, a.jsxs)("div", {
            className: f.pK,
            children: [
                (0, a.jsx)(d.Heading, { variant: "heading-sm/bold", children: t }),
                r
                    ? (0, a.jsx)(d.DUT, {
                          className: l()(f.zd, f.eB),
                          onClick: () => {
                              (0, d.kBI)(S)
                                  ? (0, d.OoC)(S)
                                  : (0, d.mMO)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, a.jsx)(y, { ...e, frameSrc: n?.src ?? null, placeholderSrc: o }),
                                            ),
                                        { modalKey: S, onCloseRequest: () => (0, d.OoC)(S) },
                                    );
                          },
                          children: c,
                      })
                    : (0, a.jsx)("div", { className: f.zd, children: c }),
                null != n &&
                    (0, a.jsx)(d.Button, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: s }),
            ],
        });
    },
    N = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, p.wu)(),
            s = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
            [j, C] = i.useState(!0),
            S = i.useRef({}),
            [y, N] = i.useState(!1),
            [I, k] = i.useState(!1),
            [R, O] = i.useState(8),
            [w, D] = i.useState([]),
            [M, P] = i.useState(A),
            L = i.useRef([]),
            [U, B] = i.useState(t.name),
            G = U.toLowerCase().replace(/\s+/g, "_"),
            F = i.useMemo(
                () => ({
                    id: T,
                    skuId: T,
                    title: T,
                    description: T,
                    accessibilityLabel: T,
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
                    (0, g.Mz)(n, (t) => {
                        P((a) => ({ ...a, [e]: (0, g.GT)(t, n) }));
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
                                let e = (0, g.fB)(n.base64);
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
                  className: f.zr,
                  children: [
                      (0, a.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      S.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = V(e);
                                      null != t &&
                                          (0, g.Mz)(t, async (e) => {
                                              let n = await (0, g.Ay)(e, t, w.length);
                                              D((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      S.current.thumbnail = e;
                                  },
                                  onChange: (e) => W(g.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      S.current.static = e;
                                  },
                                  onChange: (e) => W(g.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      S.current.reducedMotion = e;
                                  },
                                  onChange: (e) => W(g.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: f.Vg,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: l()(f.nM, f.uW),
                                  children: [
                                      (0, a.jsx)(d.Text, {
                                          variant: "text-md/normal",
                                          children: "Profile Effect Name",
                                      }),
                                      (0, a.jsx)("input", {
                                          type: "text",
                                          value: U,
                                          className: f.hF,
                                          onChange: (e) => {
                                              B(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: f.nM,
                                  children: [
                                      (0, a.jsx)(d.Text, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, a.jsx)("input", {
                                          type: "checkbox",
                                          checked: y,
                                          className: f.OO,
                                          onChange: () => {
                                              N(!y);
                                          },
                                      }),
                                      (0, a.jsx)(d.Text, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, a.jsx)("input", {
                                          type: "checkbox",
                                          checked: I,
                                          className: f.OO,
                                          onChange: () => {
                                              k(!I);
                                          },
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: f.nM,
                                  children: [
                                      (0, a.jsx)(d.Text, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, a.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: R,
                                          onChange: (e) => O(+e.target.value),
                                      }),
                                      (0, a.jsxs)(d.Text, { variant: "text-sm/normal", children: [R, "px"] }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(f.nz, f.VH),
                                  style: { borderRadius: R },
                                  children: [
                                      I
                                          ? (0, a.jsx)("div", {
                                                className: f.jq,
                                                children: (0, a.jsx)(h.A, {
                                                    user: s,
                                                    currentUser: s,
                                                    transitionState: d.ip4.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: f.JB,
                                                }),
                                            })
                                          : (0, a.jsx)("img", { src: y ? b : v, alt: "", width: 400 }),
                                      j &&
                                          (0, a.jsx)("div", {
                                              className: f.KJ,
                                              children: (0, a.jsx)(_.A, { config: F }),
                                          }),
                                  ],
                              }),
                              (0, a.jsx)("div", {
                                  children:
                                      I &&
                                      (0, a.jsxs)("div", {
                                          className: l()(f.f5, f.VH),
                                          style: { borderRadius: R },
                                          children: [
                                              (0, a.jsx)(m.A, {
                                                  user: s,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, a.jsx)(_.A, { config: F }),
                                          ],
                                      }),
                              }),
                              (0, a.jsxs)("div", {
                                  className: f.nz,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: f.nM,
                                          children: [
                                              (0, a.jsx)(d.Button, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => S.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(d.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: f.nM,
                                          children: [
                                              (0, a.jsx)(d.Button, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => S.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(d.Button, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => S.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, a.jsx)(d.Button, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => S.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", {
                                          className: f.q6,
                                          children: (0, a.jsx)("div", {
                                              className: f.nM,
                                              children: (0, a.jsx)(d.Button, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      C(!1), setTimeout(() => C(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: l()(f.q6, f.XA),
                                          children: [
                                              (0, a.jsx)(d.Text, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, a.jsx)(d.Text, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: f.nM,
                                                  children: [
                                                      (0, a.jsx)(c.A, {
                                                          fileContents: () => (0, g.rs)(w),
                                                          contentType: "text/plain",
                                                          fileName: `${G}_timing_config.txt`,
                                                          children: (0, a.jsx)(d.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(c.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: U,
                                                                  readonly: !1,
                                                                  config: { ...t.config, effects: w, stillFrames: M },
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${G}_config.txt`,
                                                          children: (0, a.jsx)(d.Button, {
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
                                          className: f.uW,
                                          children: [
                                              (0, a.jsx)(d.Heading, {
                                                  variant: "heading-lg/bold",
                                                  children: "Still Frames",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: f.mv,
                                                  children: Object.entries(M).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsx)(
                                                          E,
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
                                              className: l()(f.uW, f.l7),
                                              children: [
                                                  (0, a.jsx)(d.Text, {
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
                                  className: l()(f.Vg, f.ZF),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: f.cD,
                                          children: (0, a.jsx)(d.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  D([]), P(A);
                                              },
                                          }),
                                      }),
                                      w.map((e, t) =>
                                          (0, a.jsxs)(
                                              "div",
                                              {
                                                  className: f.ec,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: f.D1,
                                                          children: [
                                                              (0, a.jsx)(d.Heading, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, a.jsx)("img", {
                                                                  src: e.src,
                                                                  className: f.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, a.jsxs)(a.Fragment, {
                                                                      children: [
                                                                          (0, a.jsx)(d.Heading, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, a.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, a.jsx)(d.Heading, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, a.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: f.oq,
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
                                                          className: l()(f.Vg, f.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: f.nz,
                                                                  children: [
                                                                      (0, a.jsx)(d.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: f.hF,
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
                                                                  className: f.nz,
                                                                  children: [
                                                                      (0, a.jsx)(d.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: f.hF,
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
                                                          className: l()(f.Vg, f.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: f.nz,
                                                                  children: [
                                                                      (0, a.jsx)(d.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: f.OO,
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
                                                                  className: f.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, a.jsxs)(a.Fragment, {
                                                                          children: [
                                                                              (0, a.jsx)(d.Text, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, a.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: f.hF,
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
                                                          children: (0, a.jsx)(u.A, {
                                                              ref: (e) => {
                                                                  S.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let n;
                                                                  null != (n = V(e)) &&
                                                                      (0, g.Mz)(n, (e) => {
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
                                                          className: l()(f.nM, f._N),
                                                          children: [
                                                              (0, a.jsx)(d.Button, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      S.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, a.jsx)(d.Button, {
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
