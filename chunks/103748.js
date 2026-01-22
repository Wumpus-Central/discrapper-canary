n.d(t, {
    A: () => T,
}),
    n(896048),
    n(747238),
    n(812715),
    n(321073),
    n(457529),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(854284),
    o = n(311907),
    c = n(397927),
    d = n(900686),
    u = n(817363),
    m = n(287070),
    p = n(287809),
    h = n(43708),
    f = n(14752),
    x = n(930442),
    b = n(553622),
    g = n(526565),
    v = n(124733),
    j = n(865524),
    y = n(154878);

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = {
        [f.qH.THUMBNAIL]: null,
        [f.qH.STATIC]: null,
        [f.qH.REDUCED_MOTION]: null,
    },
    S = "debug",
    O = "reduced-motion-preview-modal",
    E = (e) => {
        let { transitionState: t, onClose: n, frameSrc: l, placeholderSrc: i } = e;
        return (0, a.jsx)(c.EOs, {
            transitionState: t,
            size: c.rIJ.MEDIUM,
            parentComponent: "ReducedMotionPreviewModal",
            children: (0, a.jsxs)(c.$mQ, {
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
                            (0, a.jsx)("img", {
                                src: i,
                                alt: "",
                                className: b.Vw,
                                "aria-hidden": !0,
                            }),
                            null != l &&
                                "" !== l &&
                                (0, a.jsx)("img", {
                                    src: l,
                                    className: b.BS,
                                    alt: "Reduced motion preview",
                                }),
                        ],
                    }),
                ],
            }),
        });
    },
    N = (e) => {
        let { type: t, frame: n, showDarkTheme: l, onClear: i } = e,
            s = t === f.qH.REDUCED_MOTION,
            o = s ? (l ? j : y) : l ? g : v,
            d = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("img", {
                        src: o,
                        alt: "",
                        className: b.XM,
                        "aria-hidden": !0,
                    }),
                    (null == n ? void 0 : n.src) != null &&
                        "" !== n.src &&
                        (0, a.jsx)("img", {
                            src: n.src,
                            className: b.SD,
                            alt: "",
                        }),
                ],
            });
        return (0, a.jsxs)("div", {
            className: b.pK,
            children: [
                (0, a.jsx)(c.Heading, {
                    variant: "heading-sm/bold",
                    children: t,
                }),
                s
                    ? (0, a.jsx)(c.DUT, {
                          className: r()(b.zd, b.eB),
                          onClick: () => {
                              (0, c.kBI)(O)
                                  ? (0, c.OoC)(O)
                                  : (0, c.mMO)(
                                        () =>
                                            Promise.resolve((e) => {
                                                var t;
                                                return (0, a.jsx)(
                                                    E,
                                                    A(_({}, e), {
                                                        frameSrc: null != (t = null == n ? void 0 : n.src) ? t : null,
                                                        placeholderSrc: o,
                                                    }),
                                                );
                                            }),
                                        {
                                            modalKey: O,
                                            onCloseRequest: () => (0, c.OoC)(O),
                                        },
                                    );
                          },
                          children: d,
                      })
                    : (0, a.jsx)("div", {
                          className: b.zd,
                          children: d,
                      }),
                null != n &&
                    (0, a.jsx)(c.Button, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: "Clear",
                        onClick: i,
                    }),
            ],
        });
    },
    T = (e) => {
        let { effect: t } = e,
            { upsertConfig: n } = (0, h.wu)(),
            i = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
            [j, y] = l.useState(!0),
            O = l.useRef({}),
            [E, T] = l.useState(!1),
            [I, w] = l.useState(!1),
            [k, P] = l.useState([]),
            [R, D] = l.useState(C),
            M = l.useRef([]),
            [L, U] = l.useState(t.name),
            B = L.toLowerCase().replace(/\s+/g, "_"),
            G = l.useMemo(
                () => ({
                    id: S,
                    skuId: S,
                    title: S,
                    description: S,
                    accessibilityLabel: S,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: k,
                    animationType: s.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [k],
            ),
            F = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            V = (e, t) => {
                let n = F(t);
                null != n &&
                    (0, f.Mz)(n, (t) => {
                        D((a) =>
                            A(_({}, a), {
                                [e]: (0, f.GT)(t, n),
                            }),
                        );
                    });
            };
        l.useEffect(() => {
            let e = t.config.effects;
            e.length > 0 && P(e);
        }, [t.config.effects]),
            l.useEffect(() => {
                let e = t.config.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, n] = e;
                        if (null != n) {
                            if ("" !== n.src && null != n.src && ("" === n.base64 || null == n.base64))
                                D((e) =>
                                    A(_({}, e), {
                                        [t]: n,
                                    }),
                                );
                            else if ("" !== n.base64 && null != n.base64) {
                                let e = (0, f.fB)(n.base64);
                                (n.src = e),
                                    M.current.push(e),
                                    D((e) =>
                                        A(_({}, e), {
                                            [t]: n,
                                        }),
                                    );
                            }
                        }
                    });
            }, [t.config.stillFrames]);
        let H = {
                effect: t,
                upsertConfig: n,
            },
            W = l.useRef(H);
        return (l.useEffect(() => {
            W.current = H;
        }),
        l.useEffect(() => {
            let { effect: e, upsertConfig: t } = W.current;
            e.readonly ||
                t({
                    skuId: e.skuId,
                    name: L,
                    config: {
                        effects: k,
                        stillFrames: R,
                    },
                });
        }, [k, R, L]),
        l.useEffect(
            () => () => {
                M.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (M.current = []);
            },
            [],
        ),
        null == i)
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: b.zr,
                  children: [
                      (0, a.jsxs)("div", {
                          style: {
                              display: "none",
                          },
                          children: [
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      O.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = F(e);
                                      null != t &&
                                          (0, f.Mz)(t, async (e) => {
                                              let n = await (0, f.Ay)(e, t, k.length);
                                              P((e) => [...e, n]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      O.current.thumbnail = e;
                                  },
                                  onChange: (e) => V(f.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      O.current.static = e;
                                  },
                                  onChange: (e) => V(f.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, a.jsx)(u.A, {
                                  ref: (e) => {
                                      O.current.reducedMotion = e;
                                  },
                                  onChange: (e) => V(f.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: b.Vg,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: r()(b.nz, b.VH),
                                  children: [
                                      (0, a.jsx)("img", {
                                          src: E ? g : v,
                                          alt: "",
                                          width: 450,
                                      }),
                                      j &&
                                          (0, a.jsx)("div", {
                                              className: b.KJ,
                                              children: (0, a.jsx)(x.A, {
                                                  config: G,
                                              }),
                                          }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: b.nz,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: r()(b.nz, b.uW),
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
                                          className: b.Vg,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: b.nM,
                                                  children: [
                                                      (0, a.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Dark Theme",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: E,
                                                          className: b.OO,
                                                          onChange: () => {
                                                              T(!E);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: b.nM,
                                                  children: [
                                                      (0, a.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          children: "Show User Profile",
                                                      }),
                                                      (0, a.jsx)("input", {
                                                          type: "checkbox",
                                                          checked: I,
                                                          className: b.OO,
                                                          onChange: () => {
                                                              w(!I);
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: b.nM,
                                          children: [
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = O.current.animated)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
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
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = O.current.thumbnail)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = O.current.static)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
                                              }),
                                              (0, a.jsx)(c.Button, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => {
                                                      var e;
                                                      return null == (e = O.current.reducedMotion)
                                                          ? void 0
                                                          : e.activateUploadDialogue();
                                                  },
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
                                                      y(!1), setTimeout(() => y(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, a.jsxs)("div", {
                                          className: r()(b.q6, b.XA),
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
                                                      (0, a.jsx)(d.A, {
                                                          fileContents: () => (0, f.rs)(t.name, k),
                                                          contentType: "text/plain",
                                                          fileName: "".concat(B, "_timing_config.txt"),
                                                          children: (0, a.jsx)(c.Button, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, a.jsx)(d.A, {
                                                          fileContents: () =>
                                                              JSON.stringify(
                                                                  A(_({}, t), {
                                                                      name: L,
                                                                      readonly: !1,
                                                                      config: A(_({}, t.config), {
                                                                          effects: k,
                                                                          stillFrames: R,
                                                                      }),
                                                                  }),
                                                              ),
                                                          contentType: "text/plain",
                                                          fileName: "".concat(B, "_config.txt"),
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
                                                  children: Object.entries(R).map((e) => {
                                                      let [t, n] = e;
                                                      return (0, a.jsx)(
                                                          N,
                                                          {
                                                              type: t,
                                                              frame: n,
                                                              showDarkTheme: E,
                                                              onClear: () => {
                                                                  D((e) =>
                                                                      A(_({}, e), {
                                                                          [t]: null,
                                                                      }),
                                                                  );
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      k.some((e) => {
                                          var t;
                                          return (null != (t = e.randomizedSources) ? t : []).length > 0;
                                      }) &&
                                          (0, a.jsxs)("div", {
                                              className: r()(b.uW, b.l7),
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
                                      (0, a.jsx)("div", {
                                          children:
                                              I &&
                                              (0, a.jsxs)("div", {
                                                  className: r()(b.p6, b.VH),
                                                  children: [
                                                      (0, a.jsx)(m.A, {
                                                          user: i,
                                                          pendingAvatar: void 0,
                                                          pendingProfileEffect: null,
                                                          canUsePremiumCustomization: !0,
                                                          isTryItOut: !0,
                                                      }),
                                                      (0, a.jsx)(x.A, {
                                                          config: G,
                                                      }),
                                                  ],
                                              }),
                                      }),
                                  ],
                              }),
                              (0, a.jsxs)("div", {
                                  className: r()(b.Vg, b.ZF),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: b.cD,
                                          children: (0, a.jsx)(c.Button, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  P([]), D(C);
                                              },
                                          }),
                                      }),
                                      k.map((e, t) =>
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
                                                                          e.randomizedSources.map((e, t) => {
                                                                              var n;
                                                                              return (0, a.jsxs)(
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
                                                                                  null != (n = e.filename)
                                                                                      ? n
                                                                                      : "randomized-".concat(t),
                                                                              );
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: r()(b.Vg, b.uW),
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
                                                                              P((n) => {
                                                                                  let a = [...n],
                                                                                      l = n[t];
                                                                                  return (
                                                                                      (l.start = +e.target.value),
                                                                                      (a[t] = l),
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
                                                                              P((n) => {
                                                                                  let a = [...n],
                                                                                      l = n[t];
                                                                                  return (
                                                                                      (l.duration = +e.target.value),
                                                                                      (a[t] = l),
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
                                                          className: r()(b.Vg, b.uW),
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
                                                                              P((n) => {
                                                                                  let a = [...n],
                                                                                      l = n[t];
                                                                                  return (
                                                                                      (l.loop = e.target.checked),
                                                                                      (a[t] = l),
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
                                                                                      P((n) => {
                                                                                          let a = [...n],
                                                                                              l = n[t];
                                                                                          return (
                                                                                              (l.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (a[t] = l),
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
                                                          style: {
                                                              display: "none",
                                                          },
                                                          children: (0, a.jsx)(u.A, {
                                                              ref: (e) => {
                                                                  O.current["randomized-".concat(t)] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let n;
                                                                  null != (n = F(e)) &&
                                                                      (0, f.Mz)(n, (e) => {
                                                                          P((a) => {
                                                                              let l = [...a],
                                                                                  i = a[t];
                                                                              if (null == i) return a;
                                                                              let r = _({}, i);
                                                                              return (
                                                                                  null == r.randomizedSources &&
                                                                                      (r.randomizedSources = []),
                                                                                  r.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: n.name,
                                                                                  }),
                                                                                  (l[t] = r),
                                                                                  l
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                          className: r()(b.nM, b._N),
                                                          children: [
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () => {
                                                                      var e;
                                                                      return null ==
                                                                          (e = O.current["randomized-".concat(t)])
                                                                          ? void 0
                                                                          : e.activateUploadDialogue();
                                                                  },
                                                              }),
                                                              (0, a.jsx)(c.Button, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      P((t) => t.filter((t) => t !== e));
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
