n.d(t, {
    A: () => R,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(311907),
    u = n(397927),
    d = n(608299),
    m = n(817363),
    f = n(23658),
    p = n(565150),
    h = n(851023),
    b = n(349688),
    g = n(914905),
    x = n(101555),
    y = n(734057),
    v = n(31717),
    j = n(255438),
    C = n(453771),
    _ = n(518960),
    A = n(382287),
    O = n(207963),
    E = n(814890),
    S = n(414062),
    N = n(985018),
    I = n(784505);

function P(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: a, guildId: s } = e,
        o = (0, C.o2)(s),
        c = (0, j.Xq)(o / j.XF, {
            useKibibytes: !0,
            useSpace: !0,
        });
    return (0, r.jsxs)("div", {
        className: I.pp,
        children: [
            (0, r.jsxs)("div", {
                className: i()(I.e8, {
                    [I.R]: t,
                }),
                children: [
                    (0, r.jsx)(u.H8$, {
                        color: u.LU0.colors.ICON_STRONG,
                        size: "refresh_sm",
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: N.intl.format(N.t.y68I8P, {
                            onClick: () => {
                                var e;
                                return null == (e = n.current) ? void 0 : e.activateUploadDialogue();
                            },
                            maxValues: a,
                        }),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children:
                            l > 1
                                ? l === a
                                    ? N.intl.format(N.t.SAr31z, {
                                          minValues: l,
                                          maxSize: c,
                                      })
                                    : N.intl.format(N.t["ZG+3Ck"], {
                                          minValues: l,
                                          maxValues: a,
                                          maxSize: c,
                                      })
                                : N.intl.format(N.t.tyxwW1, {
                                      maxValues: a,
                                      maxSize: c,
                                  }),
                    }),
                ],
            }),
            t &&
                (0, r.jsxs)("div", {
                    className: i()(I.e8, I.r$),
                    children: [
                        (0, r.jsx)(u.H8$, {
                            color: u.LU0.colors.ICON_STRONG,
                            size: "refresh_sm",
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: N.intl.string(N.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}

function w() {
    return (0, r.jsxs)("div", {
        className: i()(I.pp, I.e8),
        children: [
            (0, r.jsx)(u.yr3, {
                color: u.LU0.colors.ICON_STRONG,
                size: "refresh_sm",
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: N.intl.string(N.t["0PhgpK"]),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: N.intl.string(N.t.HYg2Hn),
            }),
        ],
    });
}

function T(e) {
    var t;
    let { upload: n, handleRemoveFile: l, singleFileInput: a } = e;
    return (0, r.jsxs)(
        "div",
        {
            className: i()(I.NJ, {
                [I.j1]: a,
            }),
            children: [
                (0, r.jsx)(g.J, {
                    upload: n,
                    size: a ? b.L.XSMALL : b.L.XXSMALL,
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-".concat(a ? "md" : "xs", "/medium"),
                    className: I.iW,
                    children: null != (t = n.filename) ? t : N.intl.string(N.t.ZMirp0),
                }),
                (0, r.jsx)(x.Ay, {
                    className: I.BX,
                    children: (0, r.jsx)(h.A, {
                        className: I.XI,
                        tooltip: N.intl.string(N.t.N86XcP),
                        onClick: () => l(n.id),
                        dangerous: !0,
                        children: (0, r.jsx)(u.ucK, {
                            size: "xs",
                            color: "currentColor",
                            className: I.gE,
                        }),
                    }),
                }),
            ],
        },
        n.id,
    );
}

function R(e) {
    var t;
    let { minValues: n, maxValues: a } = e,
        s = l.useRef(null),
        u = l.useRef(null),
        [h, b] = l.useState(!1),
        g = (0, O.jc)();
    o()(null != g, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let x = g.channelId;
    o()(null != x, "FileUploadActionComponent must be used inside a channel");
    let j = null == (t = g.modal) ? void 0 : t.customId;
    o()(null != j, "FileUploadActionComponent requires modalCustomId from context");
    let { uploadIds: C, setUploadIds: R, currentUploads: L, error: D } = (0, S.j)(e),
        k = (0, c.bG)([y.A], () => y.A.getBasicChannel(x));
    o()(null != k, "FileUploadActionComponent requires a valid channel");
    let M = l.useCallback((e) => {
            var t;
            e.preventDefault(), (null == (t = e.dataTransfer) ? void 0 : t.types.includes("Files")) && b(!0);
        }, []),
        H = l.useCallback((e) => {
            var t;
            (null != (t = u.current) && t.contains(e.relatedTarget)) || b(!1);
        }, []),
        U = l.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (C.length + e.length > a)
                    return (0, f.openUploadError)({
                        title: N.intl.string(N.t.wOr6hB),
                        help: N.intl.formatToPlainString(N.t.dy6viJ, {
                            maxValues: a,
                        }),
                    });
                if ((0, A.fJ)(e, k.guild_id)) return (0, _.V)(k, e);
                let n = e.map((e) => {
                    let n = (0, E.so)(j),
                        r = {
                            id: n,
                            file: e,
                            platform: p.xz.WEB,
                            origin: t,
                        };
                    return (
                        d.A.setFile({
                            channelId: x,
                            id: n,
                            file: r,
                            draftType: v.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                R(C.concat(n));
            },
            [C, a, k, R, j, x],
        ),
        F = l.useCallback(
            (e) => {
                var t, n;
                e.preventDefault(),
                    b(!1),
                    U(Array.from(null != (t = null == (n = e.dataTransfer) ? void 0 : n.files) ? t : []), "drag_drop");
            },
            [U],
        ),
        G = (e) => {
            d.A.remove(x, e, v.C.InteractionModal), R(C.filter((t) => t !== e));
        };
    return (l.useEffect(() => {
        let e = u.current;
        return (
            null == e || e.addEventListener("dragover", M),
            null == e || e.addEventListener("dragleave", H),
            null == e || e.addEventListener("drop", F),
            () => {
                null == e || e.removeEventListener("dragover", M),
                    null == e || e.removeEventListener("dragleave", H),
                    null == e || e.removeEventListener("drop", F);
            }
        );
    }, [M, H, F]),
    1 === a && 1 === L.length)
        ? (0, r.jsx)(T, {
              upload: L[0],
              handleRemoveFile: G,
              singleFileInput: !0,
          })
        : (0, r.jsxs)("div", {
              ref: u,
              className: i()(I.kL, {
                  [I.Ke]: h,
                  [I.z3]: null != D,
              }),
              children: [
                  C.length >= a
                      ? (0, r.jsx)(w, {})
                      : (0, r.jsx)(P, {
                            dropping: h,
                            fileInputRef: s,
                            minValues: n,
                            maxValues: a,
                            guildId: k.guild_id,
                        }),
                  L.length > 0 &&
                      (0, r.jsx)("div", {
                          className: I.aq,
                          children: L.map((e) =>
                              (0, r.jsx)(
                                  T,
                                  {
                                      upload: e,
                                      handleRemoveFile: G,
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  (0, r.jsx)(m.A, {
                      ref: s,
                      onChange: (e) => {
                          var t;
                          U(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"),
                              (e.currentTarget.value = "");
                      },
                      multiple: a > 1,
                      tabIndex: -1,
                      className: I.Fg,
                  }),
              ],
          });
}
