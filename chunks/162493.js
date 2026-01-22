n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(311907),
    u = n(397927),
    d = n(608299),
    f = n(817363),
    p = n(23658),
    _ = n(565150),
    h = n(851023),
    m = n(349688),
    g = n(914905),
    E = n(101555),
    b = n(734057),
    y = n(31717),
    O = n(255438),
    A = n(453771),
    v = n(518960),
    S = n(382287),
    I = n(207963),
    T = n(814890),
    C = n(414062),
    N = n(985018),
    R = n(784505);

function w(e) {
    let { dropping: t, fileInputRef: n, minValues: i, maxValues: a, guildId: o } = e,
        l = (0, A.o2)(o),
        c = (0, O.Xq)(l / O.XF, {
            useKibibytes: !0,
            useSpace: !0,
        });
    return (0, r.jsxs)("div", {
        className: R.pp,
        children: [
            (0, r.jsxs)("div", {
                className: s()(R.e8, {
                    [R.R]: t,
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
                            i > 1
                                ? i === a
                                    ? N.intl.format(N.t.SAr31z, {
                                          minValues: i,
                                          maxSize: c,
                                      })
                                    : N.intl.format(N.t["ZG+3Ck"], {
                                          minValues: i,
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
                    className: s()(R.e8, R.r$),
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

function P() {
    return (0, r.jsxs)("div", {
        className: s()(R.pp, R.e8),
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

function D(e) {
    var t;
    let { upload: n, handleRemoveFile: i, singleFileInput: a } = e;
    return (0, r.jsxs)(
        "div",
        {
            className: s()(R.NJ, {
                [R.j1]: a,
            }),
            children: [
                (0, r.jsx)(g.J, {
                    upload: n,
                    size: a ? m.L.XSMALL : m.L.XXSMALL,
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-".concat(a ? "md" : "xs", "/medium"),
                    className: R.iW,
                    children: null != (t = n.filename) ? t : N.intl.string(N.t.ZMirp0),
                }),
                (0, r.jsx)(E.Ay, {
                    className: R.BX,
                    children: (0, r.jsx)(h.A, {
                        className: R.XI,
                        tooltip: N.intl.string(N.t.N86XcP),
                        onClick: () => i(n.id),
                        dangerous: !0,
                        children: (0, r.jsx)(u.ucK, {
                            size: "xs",
                            color: "currentColor",
                            className: R.gE,
                        }),
                    }),
                }),
            ],
        },
        n.id,
    );
}

function x(e) {
    var t;
    let { minValues: n, maxValues: a } = e,
        o = i.useRef(null),
        u = i.useRef(null),
        [h, m] = i.useState(!1),
        g = (0, I.jc)();
    l()(null != g, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let E = g.channelId;
    l()(null != E, "FileUploadActionComponent must be used inside a channel");
    let O = null == (t = g.modal) ? void 0 : t.customId;
    l()(null != O, "FileUploadActionComponent requires modalCustomId from context");
    let { uploadIds: A, setUploadIds: x, currentUploads: L, error: j } = (0, C.j)(e),
        M = (0, c.bG)([b.A], () => b.A.getBasicChannel(E));
    l()(null != M, "FileUploadActionComponent requires a valid channel");
    let k = i.useCallback((e) => {
            var t;
            e.preventDefault(), (null == (t = e.dataTransfer) ? void 0 : t.types.includes("Files")) && m(!0);
        }, []),
        U = i.useCallback((e) => {
            var t;
            (null != (t = u.current) && t.contains(e.relatedTarget)) || m(!1);
        }, []),
        G = i.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (A.length + e.length > a)
                    return (0, p.openUploadError)({
                        title: N.intl.string(N.t.wOr6hB),
                        help: N.intl.formatToPlainString(N.t.dy6viJ, {
                            maxValues: a,
                        }),
                    });
                if ((0, S.fJ)(e, M.guild_id)) return (0, v.V)(M, e);
                let n = e.map((e) => {
                    let n = (0, T.so)(O),
                        r = {
                            id: n,
                            file: e,
                            platform: _.xz.WEB,
                            origin: t,
                        };
                    return (
                        d.A.setFile({
                            channelId: E,
                            id: n,
                            file: r,
                            draftType: y.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                x(A.concat(n));
            },
            [A, a, M, x, O, E],
        ),
        V = i.useCallback(
            (e) => {
                var t, n;
                e.preventDefault(),
                    m(!1),
                    G(Array.from(null != (t = null == (n = e.dataTransfer) ? void 0 : n.files) ? t : []), "drag_drop");
            },
            [G],
        ),
        F = (e) => {
            var t;
            G(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), (e.currentTarget.value = "");
        },
        B = (e) => {
            d.A.remove(E, e, y.C.InteractionModal), x(A.filter((t) => t !== e));
        };
    return (i.useEffect(() => {
        let e = u.current;
        return (
            null == e || e.addEventListener("dragover", k),
            null == e || e.addEventListener("dragleave", U),
            null == e || e.addEventListener("drop", V),
            () => {
                null == e || e.removeEventListener("dragover", k),
                    null == e || e.removeEventListener("dragleave", U),
                    null == e || e.removeEventListener("drop", V);
            }
        );
    }, [k, U, V]),
    1 === a && 1 === L.length)
        ? (0, r.jsx)(D, {
              upload: L[0],
              handleRemoveFile: B,
              singleFileInput: !0,
          })
        : (0, r.jsxs)("div", {
              ref: u,
              className: s()(R.kL, {
                  [R.Ke]: h,
                  [R.z3]: null != j,
              }),
              children: [
                  A.length >= a
                      ? (0, r.jsx)(P, {})
                      : (0, r.jsx)(w, {
                            dropping: h,
                            fileInputRef: o,
                            minValues: n,
                            maxValues: a,
                            guildId: M.guild_id,
                        }),
                  L.length > 0 &&
                      (0, r.jsx)("div", {
                          className: R.aq,
                          children: L.map((e) =>
                              (0, r.jsx)(
                                  D,
                                  {
                                      upload: e,
                                      handleRemoveFile: B,
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  (0, r.jsx)(f.A, {
                      ref: o,
                      onChange: F,
                      multiple: a > 1,
                      tabIndex: -1,
                      className: R.Fg,
                  }),
              ],
          });
}
