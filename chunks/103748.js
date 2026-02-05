n.d(t, { A: () => N }), n(321073), n(323874), n(14289), n(35956);
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(854284),
    o = n(311907),
    d = n(397927),
    c = n(900686),
    u = n(817363),
    m = n(287070),
    h = n(287809),
    x = n(43708),
    p = n(14752),
    g = n(930442),
    _ = n(553622),
    f = n(526565),
    v = n(124733),
    b = n(865524),
    j = n(154878);
let A = { [p.qH.THUMBNAIL]: null, [p.qH.STATIC]: null, [p.qH.REDUCED_MOTION]: null },
    C = "debug",
    S = "reduced-motion-preview-modal",
    T = (e) => {
        let { transitionState: t, onClose: n, frameSrc: s, placeholderSrc: i } = e;
        return (0, a.jsx)(d.EOs, {
            transitionState: t,
            size: d.rIJ.MEDIUM,
            parentComponent: "ReducedMotionPreviewModal",
            children: (0, a.jsxs)(d.$mQ, {
                className: _.Xd,
                children: [
                    (0, a.jsx)("div", {
                        className: _.y6,
                        children: (0, a.jsx)(d.K0, {
                            "aria-label": "Close",
                            onClick: n,
                            icon: d.d$L,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: _.rU,
                        children: [
                            (0, a.jsx)("img", { src: i, alt: "", className: _.Vw, "aria-hidden": !0 }),
                            null != s &&
                                "" !== s &&
                                (0, a.jsx)("img", { src: s, className: _.BS, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    y = (e) => {
        let { type: t, frame: n, showDarkTheme: s, onClear: i } = e,
            r = t === p.qH.REDUCED_MOTION,
            o = r ? (s ? b : j) : s ? f : v,
            c = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("img", { src: o, alt: "", className: _.XM, "aria-hidden": !0 }),
                    n?.src != null && "" !== n.src && (0, a.jsx)("img", { src: n.src, className: _.SD, alt: "" }),
                ],
            });
        return (0, a.jsxs)("div", {
            className: _.pK,
            children: [
                (0, a.jsx)(d.Heading, { variant: "heading-sm/bold", children: t }),
                r
                    ? (0, a.jsx)(d.DUT, {
                          className: l()(_.zd, _.eB),
                          onClick: () => {
                              (0, d.kBI)(S)
                                  ? (0, d.OoC)(S)
                                  : (0, d.mMO)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, a.jsx)(T, { ...e, frameSrc: n?.src ?? null, placeholderSrc: o }),
                                            ),
                                        { modalKey: S, onCloseRequest: () => (0, d.OoC)(S) },
                                    );
                          },
                          children: c,
                      })
                    : (0, a.jsx)("div", { className: _.zd, children: c }),
                null != n &&
                    (0, a.jsx)(d.Button, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: i }),
            ],
        });
    },
    N = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, x.wu)(),
            i = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
            [b, j] = s.useState(!0),
            S = s.useRef({}),
            [T, N] = s.useState(!1),
            [E, I] = s.useState(!1),
            [k, R] = s.useState([]),
            [O, w] = s.useState(A),
            D = s.useRef([]),
            [M, P] = s.useState(t.name),
            L = M.toLowerCase().replace(/\s+/g, "_"),
            U = s.useMemo(
                () => ({
                    id: C,
                    skuId: C,
                    title: C,
                    description: C,
                    accessibilityLabel: C,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: k,
                    animationType: r.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [k],
            ),
            B = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            G = (e, t) => {
                let n = B(t);
                null != n &&
                    (0, p.Mz)(n, (t) => {
                        w((a) => ({ ...a, [e]: (0, p.GT)(t, n) }));
                    });
            };
        s.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 && R(e);
        }, [t.config.effects]),
            s.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            if ("" !== n.src && null != n.src && ("" === n.base64 || null == n.base64))
                                w((e) => ({ ...e, [t]: n }));
                            else if ("" !== n.base64 && null != n.base64) {
                                let e = (0, p.fB)(n.base64);
                                (n.src = e), D.current.push(e), w((e) => ({ ...e, [t]: n }));
                            }
                        }
                    });
            }, [t.config.stillFrames]);
        let F = { effect: t, upsertConfig: n },
            V = s.useRef(F);
        return (s.useEffect(() => {
            V.current = F;
        }),
        s.useEffect(() => {
            let { effect: e, upsertConfig: t } = V.current;
            e.readonly || t({ skuId: e.skuId, name: M, config: { effects: k, stillFrames: O } });
        }, [k, O, M]),
        s.useEffect(
            () => () => {
                D.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (D.current = []);
            },
            [],
        ),
        null == i)
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: _.zr,
                  children: [
                      (0, a.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      S.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = B(e);
                                      null != t &&
                                          (0, p.Mz)(t, async (e) => {
                                              let n = await (0, p.Ay)(e, t, k.length);
                                              R((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      S.current.thumbnail = e;
                                  },
                                  onChange: (e) => G(p.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      S.current.static = e;
                                  },
                                  onChange: (e) => G(p.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      S.current.reducedMotion = e;
                                  },
                                  onChange: (e) => G(p.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: _.Vg,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: l()(_.nz, _.VH),
                                  children: [
                                      (0, a.jsx)("img", { src: T ? f : v, alt: "", width: 450 }),
                                      b &&
                                          (0, a.jsx)("div", {
                                              className: _.KJ,
                                              children: (0, a.jsx)(g.A, { config: U }),
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: _.nz,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: l()(_.nz, _.uW),
                                          children: [
                                              (0, a.jsx)(d.Text, {
                                                  variant: "text-md/normal",
                                                  children: "Profile Effect Name",
                                              }),
                                              (0, a.jsx)("input", {
                                                  type: "text",
                                                  value: M,
                                                  className: _.hF,
                                                  onChange: (e) => {
                                                      P(e.target.value);
                                                  },
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: _.Vg,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: _.nM,
                                                  children: [
                                                      (0, a.jsx)(d.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Dark Theme",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: T,
                                                          className: _.OO,
                                                          onChange: () => {
                                                              N(!T);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: _.nM,
                                                  children: [
                                                      (0, a.jsx)(d.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Show User Profile",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: E,
                                                          className: _.OO,
                                                          onChange: () => {
                                                              I(!E);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: _.nM,
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
                                          className: _.nM,
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
                                          className: _.q6,
                                          children: (0, a.jsx)("div", {
                                              className: _.nM,
                                              children: (0, a.jsx)(d.Button, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      j(!1), setTimeout(() => j(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: l()(_.q6, _.XA),
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
                                                  className: _.nM,
                                                  children: [
                                                      (0, a.jsx)(c.A, {
                                                          fileContents: () => (0, p.rs)(k),
                                                          contentType: "text/plain",
                                                          fileName: `${L}_timing_config.txt`,
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
                                                                  name: M,
                                                                  readonly: !1,
                                                                  config: { ...t.config, effects: k, stillFrames: O },
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${L}_config.txt`,
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
                                          className: _.uW,
                                          children: [
                                              (0, a.jsx)(d.Heading, {
                                                  variant: "heading-lg/bold",
                                                  children: "Still Frames",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: _.mv,
                                                  children: Object.entries(O).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsx)(
                                                          y,
                                                          {
                                                              type: t,
                                                              frame: n,
                                                              showDarkTheme: T,
                                                              onClear: () => {
                                                                  w((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      k.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, a.jsxs)("div", {
                                              className: l()(_.uW, _.l7),
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
                                      (0, a.jsx)("div", {
                                          children:
                                              E &&
                                              (0, a.jsxs)("div", {
                                                  className: l()(_.p6, _.VH),
                                                  children: [
                                                      (0, a.jsx)(m.A, {
                                                          user: i,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffect: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOut: !0,
                                                      }),
                                                      (0, a.jsx)(g.A, { config: U }),
                                                  ],
                                              }),
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: l()(_.Vg, _.ZF),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: _.cD,
                                          children: (0, a.jsx)(d.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  R([]), w(A);
                                              },
                                          }),
                                      }),
                                      k.map((e, t) =>
                                          (0, a.jsxs)(
                                              "div",
                                              {
                                                  className: _.ec,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: _.D1,
                                                          children: [
                                                              (0, a.jsx)(d.Heading, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, a.jsx)("img", {
                                                                  src: e.src,
                                                                  className: _.oq,
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
                                                                                              className: _.oq,
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
                                                          className: l()(_.Vg, _.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: _.nz,
                                                                  children: [
                                                                      (0, a.jsx)(d.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: _.hF,
                                                                          onChange: (e) => {
                                                                              R((n) => {
                                                                                  let a = [...n],
                                                                                      s = n[t];
                                                                                  return (
                                                                                      (s.start = +e.target.value),
                                                                                      (a[t] = s),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsxs)("div", {
                                                                  className: _.nz,
                                                                  children: [
                                                                      (0, a.jsx)(d.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: _.hF,
                                                                          onChange: (e) => {
                                                                              R((n) => {
                                                                                  let a = [...n],
                                                                                      s = n[t];
                                                                                  return (
                                                                                      (s.duration = +e.target.value),
                                                                                      (a[t] = s),
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
                                                          className: l()(_.Vg, _.uW),
                                                          children: [
                                                              (0, a.jsxs)("div", {
                                                                  className: _.nz,
                                                                  children: [
                                                                      (0, a.jsx)(d.Text, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, a.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: _.OO,
                                                                          onChange: (e) => {
                                                                              R((n) => {
                                                                                  let a = [...n],
                                                                                      s = n[t];
                                                                                  return (
                                                                                      (s.loop = e.target.checked),
                                                                                      (a[t] = s),
                                                                                      a
                                                                                  );
                                                                              });
                                                                          },
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, a.jsx)("div", {
                                                                  className: _.nz,
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
                                                                                  className: _.hF,
                                                                                  onChange: (e) => {
                                                                                      R((n) => {
                                                                                          let a = [...n],
                                                                                              s = n[t];
                                                                                          return (
                                                                                              (s.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (a[t] = s),
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
                                                                  null != (n = B(e)) &&
                                                                      (0, p.Mz)(n, (e) => {
                                                                          R((a) => {
                                                                              let s = [...a],
                                                                                  i = a[t];
                                                                              if (null == i) return a;
                                                                              let l = { ...i };
                                                                              return (
                                                                                  null == l.randomizedSources &&
                                                                                      (l.randomizedSources = []),
                                                                                  l.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: n.name,
                                                                                  }),
                                                                                  (s[t] = l),
                                                                                  s
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: l()(_.nM, _._N),
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
                                                                      R((t) => t.filter((t) => t !== e));
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
