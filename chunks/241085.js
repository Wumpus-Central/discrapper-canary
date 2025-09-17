n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
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
    O = n(117530),
    v = n(424218),
    I = n(403182),
    T = n(127654),
    S = n(979956),
    A = n(970184),
    C = n(292419),
    N = n(388032),
    R = n(975279);
function P(e) {
    let { dropping: t, fileInputRef: n, minValues: i, maxValues: a, guildId: s } = e,
        l = (0, I.dg)(s),
        c = (0, v.BU)(l / v.XD, {
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
                                    ? N.intl.format(N.t.SAr319, {
                                          minValues: i,
                                          maxSize: c,
                                      })
                                    : N.intl.format(N.t["ZG+3Cg"], {
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
                            children: N.intl.string(N.t["8OJlsL"]),
                        }),
                    ],
                }),
        ],
    });
}
function w() {
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
                children: N.intl.string(N.t.HYg2Hh),
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
            className: o()(R.file, { [R.singleFileInput]: a }),
            children: [
                (0, r.jsx)(g.r, {
                    upload: n,
                    size: a ? m.q.XSMALL : m.q.XXSMALL,
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-".concat(a ? "md" : "xs", "/medium"),
                    className: R.filename,
                    children: null != (t = n.filename) ? t : N.intl.string(N.t.ZMirp6),
                }),
                (0, r.jsx)(E.ZP, {
                    className: R.miniPopover,
                    children: (0, r.jsx)(h.Z, {
                        className: R.action,
                        tooltip: N.intl.string(N.t.N86XcH),
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
    let { type: n, minValues: a, maxValues: s } = e,
        u = i.useRef(null),
        h = i.useRef(null),
        [m, g] = i.useState(!1),
        E = (0, A.CJ)();
    l()(null != E, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let v = E.channelId,
        I = null == (t = E.modal) ? void 0 : t.customId;
    l()(null != I, "FileUploadActionComponent requires modalCustomId from context");
    let { state: x, executeStateUpdate: L, error: j } = E.useComponentState(e, void 0),
        M = i.useMemo(() => ((null == x ? void 0 : x.type) === n ? x.uploadIds : []), [x, n]),
        k = (0, c.e7)([b.Z], () => b.Z.getBasicChannel(v));
    l()(null != k, "FileUploadActionComponent requires a valid channel");
    let U = i.useCallback((e) => {
            var t;
            e.preventDefault(), (null == (t = e.dataTransfer) ? void 0 : t.types.includes("Files")) && g(!0);
        }, []),
        G = i.useCallback(() => {
            g(!1);
        }, []),
        B = i.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (M.length + e.length > s)
                    return (0, _.openUploadError)({
                        title: N.intl.string(N.t.wOr6hI),
                        help: N.intl.formatToPlainString(N.t.dy6viI, { maxValues: s }),
                    });
                if ((0, S.Bf)(e, k.guild_id)) return (0, T.G)(k, e);
                let r = e.map((e) => {
                    let n = (0, C.VD)(I),
                        r = {
                            id: n,
                            file: e,
                            platform: p.ow.WEB,
                            origin: t,
                        };
                    return (
                        d.Z.setFile({
                            channelId: v,
                            id: n,
                            file: r,
                            draftType: y.d.InteractionModal,
                        }),
                        n
                    );
                });
                L({
                    type: n,
                    uploadIds: M.concat(r),
                });
            },
            [M, s, k, L, n, I, v],
        ),
        Z = i.useCallback(
            (e) => {
                var t, n;
                e.preventDefault(),
                    g(!1),
                    B(Array.from(null != (n = null == (t = e.dataTransfer) ? void 0 : t.files) ? n : []), "drag_drop");
            },
            [B],
        ),
        F = (e) => {
            var t;
            B(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), (e.currentTarget.value = "");
        },
        V = (e) => {
            d.Z.remove(v, e, y.d.InteractionModal),
                L({
                    type: n,
                    uploadIds: M.filter((t) => t !== e),
                });
        };
    i.useEffect(() => {
        let e = h.current;
        return (
            null == e || e.addEventListener("dragover", U),
            null == e || e.addEventListener("dragleave", G),
            null == e || e.addEventListener("drop", Z),
            () => {
                null == e || e.removeEventListener("dragover", U),
                    null == e || e.removeEventListener("dragleave", G),
                    null == e || e.removeEventListener("drop", Z);
            }
        );
    }, [U, G, Z]);
    let H = M.map((e) => O.Z.getUpload(v, e, y.d.InteractionModal)).filter((e) => null != e);
    return 1 === s && 1 === H.length
        ? (0, r.jsx)(D, {
              upload: H[0],
              handleRemoveFile: V,
              singleFileInput: !0,
          })
        : (0, r.jsxs)("div", {
              ref: h,
              className: o()(R.container, {
                  [R.dropping]: m,
                  [R.error]: null != j,
              }),
              children: [
                  M.length >= s
                      ? (0, r.jsx)(w, {})
                      : (0, r.jsx)(P, {
                            dropping: m,
                            fileInputRef: u,
                            minValues: a,
                            maxValues: s,
                            guildId: k.guild_id,
                        }),
                  H.length > 0 &&
                      (0, r.jsx)("div", {
                          className: R.files,
                          children: H.map((e) =>
                              (0, r.jsx)(
                                  D,
                                  {
                                      upload: e,
                                      handleRemoveFile: V,
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  (0, r.jsx)(f.Z, {
                      ref: u,
                      onChange: F,
                      multiple: s > 1,
                      tabIndex: -1,
                      className: R.fileInput,
                  }),
              ],
          });
}
