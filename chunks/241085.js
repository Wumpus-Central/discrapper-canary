n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(166459),
    f = n(53281),
    _ = n(531643),
    p = n(476326),
    h = n(273031),
    m = n(859235),
    g = n(898463),
    E = n(951394),
    b = n(592125),
    y = n(703558),
    O = n(424218),
    v = n(403182),
    I = n(127654),
    T = n(979956),
    S = n(970184),
    A = n(292419),
    C = n(756043),
    N = n(388032),
    R = n(975279);
function P(e) {
    let { dropping: t, fileInputRef: n, minValues: i, maxValues: a, guildId: s } = e,
        l = (0, v.dg)(s),
        c = (0, O.BU)(l / O.XD, {
            useKibibytes: !0,
            useSpace: !0,
        });
    return (0, r.jsxs)("div", {
        className: R.mainWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: o()(R.mainBody, { [R.hidden]: t }),
                children: [
                    (0, r.jsx)(u.xD0, {
                        color: u.TVs.colors.ICON_PRIMARY,
                        size: "refresh_sm",
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        color: "text-tertiary",
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
                    className: o()(R.mainBody, R.absolutelyPositioned),
                    children: [
                        (0, r.jsx)(u.xD0, {
                            color: u.TVs.colors.ICON_PRIMARY,
                            size: "refresh_sm",
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "text-primary",
                            children: N.intl.string(N.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function D() {
    return (0, r.jsxs)("div", {
        className: o()(R.mainWrapper, R.mainBody),
        children: [
            (0, r.jsx)(u.owK, {
                color: u.TVs.colors.ICON_PRIMARY,
                size: "refresh_sm",
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                color: "text-primary",
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
function w(e) {
    var t;
    let { upload: n, handleRemoveFile: i, singleFileInput: a } = e;
    return (0, r.jsxs)(
        "div",
        {
            className: o()(R.file, { [R.singleFileInput]: a }),
            children: [
                (0, r.jsx)(g.r, {
                    upload: n,
                    size: a ? m.q.XSMALL : m.q.XXSMALL,
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-".concat(a ? "md" : "xs", "/medium"),
                    className: R.filename,
                    children: null != (t = n.filename) ? t : N.intl.string(N.t.ZMirp0),
                }),
                (0, r.jsx)(E.ZP, {
                    className: R.miniPopover,
                    children: (0, r.jsx)(h.Z, {
                        className: R.action,
                        tooltip: N.intl.string(N.t.N86XcP),
                        onClick: () => i(n.id),
                        dangerous: !0,
                        children: (0, r.jsx)(u.XHJ, {
                            size: "xs",
                            color: "currentColor",
                            className: R.actionIcon,
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
        s = i.useRef(null),
        u = i.useRef(null),
        [h, m] = i.useState(!1),
        g = (0, S.CJ)();
    l()(null != g, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let E = g.channelId;
    l()(null != E, "FileUploadActionComponent must be used inside a channel");
    let O = null == (t = g.modal) ? void 0 : t.customId;
    l()(null != O, "FileUploadActionComponent requires modalCustomId from context");
    let { uploadIds: v, setUploadIds: x, currentUploads: L, error: M } = (0, C.t)(e),
        k = (0, c.e7)([b.Z], () => b.Z.getBasicChannel(E));
    l()(null != k, "FileUploadActionComponent requires a valid channel");
    let j = i.useCallback((e) => {
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
                if (v.length + e.length > a)
                    return (0, _.openUploadError)({
                        title: N.intl.string(N.t.wOr6hB),
                        help: N.intl.formatToPlainString(N.t.dy6viJ, { maxValues: a }),
                    });
                if ((0, T.Bf)(e, k.guild_id)) return (0, I.G)(k, e);
                let n = e.map((e) => {
                    let n = (0, A.VD)(O),
                        r = {
                            id: n,
                            file: e,
                            platform: p.ow.WEB,
                            origin: t,
                        };
                    return (
                        d.Z.setFile({
                            channelId: E,
                            id: n,
                            file: r,
                            draftType: y.d.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                x(v.concat(n));
            },
            [v, a, k, x, O, E],
        ),
        B = i.useCallback(
            (e) => {
                var t, n;
                e.preventDefault(),
                    m(!1),
                    G(Array.from(null != (n = null == (t = e.dataTransfer) ? void 0 : t.files) ? n : []), "drag_drop");
            },
            [G],
        ),
        Z = (e) => {
            var t;
            G(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), (e.currentTarget.value = "");
        },
        F = (e) => {
            d.Z.remove(E, e, y.d.InteractionModal), x(v.filter((t) => t !== e));
        };
    return (i.useEffect(() => {
        let e = u.current;
        return (
            null == e || e.addEventListener("dragover", j),
            null == e || e.addEventListener("dragleave", U),
            null == e || e.addEventListener("drop", B),
            () => {
                null == e || e.removeEventListener("dragover", j),
                    null == e || e.removeEventListener("dragleave", U),
                    null == e || e.removeEventListener("drop", B);
            }
        );
    }, [j, U, B]),
    1 === a && 1 === L.length)
        ? (0, r.jsx)(w, {
              upload: L[0],
              handleRemoveFile: F,
              singleFileInput: !0,
          })
        : (0, r.jsxs)("div", {
              ref: u,
              className: o()(R.container, {
                  [R.dropping]: h,
                  [R.error]: null != M,
              }),
              children: [
                  v.length >= a
                      ? (0, r.jsx)(D, {})
                      : (0, r.jsx)(P, {
                            dropping: h,
                            fileInputRef: s,
                            minValues: n,
                            maxValues: a,
                            guildId: k.guild_id,
                        }),
                  L.length > 0 &&
                      (0, r.jsx)("div", {
                          className: R.files,
                          children: L.map((e) =>
                              (0, r.jsx)(
                                  w,
                                  {
                                      upload: e,
                                      handleRemoveFile: F,
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  (0, r.jsx)(f.Z, {
                      ref: s,
                      onChange: Z,
                      multiple: a > 1,
                      tabIndex: -1,
                      className: R.fileInput,
                  }),
              ],
          });
}
