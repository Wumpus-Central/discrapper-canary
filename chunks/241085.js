n.d(t, { Z: () => P }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(166459),
    u = n(53281),
    d = n(531643),
    f = n(476326),
    _ = n(273031),
    p = n(859235),
    h = n(898463),
    m = n(951394),
    g = n(592125),
    E = n(703558),
    b = n(430824),
    y = n(117530),
    O = n(424218),
    v = n(403182),
    I = n(970184),
    T = n(292419),
    S = n(388032),
    A = n(975279);
function C(e) {
    let { dropping: t, fileInputRef: n, minValues: i, maxValues: a, channelId: c } = e,
        u = (0, s.e7)([g.Z, b.Z], () => {
            var e;
            let t = null == (e = g.Z.getChannel(c)) ? void 0 : e.guild_id;
            return b.Z.getGuild(t);
        }),
        d = (0, v.dg)(null == u ? void 0 : u.id),
        f = (0, O.BU)(d / O.XD, {
            useKibibytes: !0,
            useSpace: !0,
        });
    return (0, r.jsxs)("div", {
        className: A.mainWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: o()(A.mainBody, { [A.hidden]: t }),
                children: [
                    (0, r.jsx)(l.xD0, {
                        color: l.TVs.colors.ICON_PRIMARY,
                        size: "refresh_sm",
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-tertiary",
                        children: S.intl.format(S.t.y68I8P, {
                            onClick: () => {
                                var e;
                                return null == (e = n.current) ? void 0 : e.activateUploadDialogue();
                            },
                            maxValues: a,
                        }),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children:
                            i > 1
                                ? i === a
                                    ? S.intl.format(S.t.SAr319, {
                                          minValues: i,
                                          maxSize: f,
                                      })
                                    : S.intl.format(S.t["ZG+3Cg"], {
                                          minValues: i,
                                          maxValues: a,
                                          maxSize: f,
                                      })
                                : S.intl.format(S.t.tyxwW1, {
                                      maxValues: a,
                                      maxSize: f,
                                  }),
                    }),
                ],
            }),
            t &&
                (0, r.jsxs)("div", {
                    className: o()(A.mainBody, A.absolutelyPositioned),
                    children: [
                        (0, r.jsx)(l.xD0, {
                            color: l.TVs.colors.ICON_PRIMARY,
                            size: "refresh_sm",
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "text-primary",
                            children: S.intl.string(S.t["8OJlsL"]),
                        }),
                    ],
                }),
        ],
    });
}
function N() {
    return (0, r.jsxs)("div", {
        className: o()(A.mainWrapper, A.mainBody),
        children: [
            (0, r.jsx)(l.owK, {
                color: l.TVs.colors.ICON_PRIMARY,
                size: "refresh_sm",
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-primary",
                children: S.intl.string(S.t["0PhgpK"]),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: S.intl.string(S.t.HYg2Hh),
            }),
        ],
    });
}
function R(e) {
    var t;
    let { upload: n, handleRemoveFile: i, singleFileInput: a } = e;
    return (0, r.jsxs)(
        "div",
        {
            className: o()(A.file, { [A.singleFileInput]: a }),
            children: [
                (0, r.jsx)(h.r, {
                    upload: n,
                    size: a ? p.q.XSMALL : p.q.XXSMALL,
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-".concat(a ? "md" : "xs", "/medium"),
                    className: A.filename,
                    children: null != (t = n.filename) ? t : S.intl.string(S.t.ZMirp6),
                }),
                (0, r.jsx)(m.ZP, {
                    className: A.miniPopover,
                    children: (0, r.jsx)(_.Z, {
                        className: A.action,
                        tooltip: S.intl.string(S.t.N86XcH),
                        onClick: () => i(n.id),
                        dangerous: !0,
                        children: (0, r.jsx)(l.XHJ, {
                            size: "xs",
                            color: "currentColor",
                            className: A.actionIcon,
                        }),
                    }),
                }),
            ],
        },
        n.id,
    );
}
function P(e) {
    var t;
    let { type: n, minValues: a, maxValues: s } = e,
        l = i.useRef(null),
        _ = i.useRef(null),
        [p, h] = i.useState(!1),
        m = (0, I.CJ)();
    if (null == m) throw Error("FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let g = m.channelId,
        b = null == (t = m.modal) ? void 0 : t.customId;
    if (null == b) throw Error("FileUploadActionComponent requires modalCustomId from context");
    let { state: O, executeStateUpdate: v, error: P } = m.useComponentState(e, void 0),
        w = i.useMemo(() => ((null == O ? void 0 : O.type) === n ? O.uploadIds : []), [O, n]),
        D = i.useCallback((e) => {
            var t;
            e.preventDefault(), (null == (t = e.dataTransfer) ? void 0 : t.types.includes("Files")) && h(!0);
        }, []),
        x = i.useCallback(() => {
            h(!1);
        }, []),
        L = i.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (w.length + e.length > s)
                    return (0, d.openUploadError)({
                        title: S.intl.string(S.t.wOr6hI),
                        help: S.intl.formatToPlainString(S.t.dy6viI, { maxValues: s }),
                    });
                let r = e.map((e) => {
                    let n = (0, T.VD)(b),
                        r = {
                            id: n,
                            file: e,
                            platform: f.ow.WEB,
                            origin: t,
                        };
                    return (
                        c.Z.setFile({
                            channelId: g,
                            id: n,
                            file: r,
                            draftType: E.d.InteractionModal,
                        }),
                        n
                    );
                });
                v({
                    type: n,
                    uploadIds: w.concat(r),
                });
            },
            [w, s, v, n, b, g],
        ),
        j = i.useCallback(
            (e) => {
                var t, n;
                e.preventDefault(),
                    h(!1),
                    L(Array.from(null != (n = null == (t = e.dataTransfer) ? void 0 : t.files) ? n : []), "drag_drop");
            },
            [L],
        ),
        M = (e) => {
            var t;
            L(Array.from(null != (t = e.currentTarget.files) ? t : []), "file_picker"), (e.currentTarget.value = "");
        },
        k = (e) => {
            c.Z.remove(g, e, E.d.InteractionModal),
                v({
                    type: n,
                    uploadIds: w.filter((t) => t !== e),
                });
        };
    i.useEffect(() => {
        let e = _.current;
        return (
            null == e || e.addEventListener("dragover", D),
            null == e || e.addEventListener("dragleave", x),
            null == e || e.addEventListener("drop", j),
            () => {
                null == e || e.removeEventListener("dragover", D),
                    null == e || e.removeEventListener("dragleave", x),
                    null == e || e.removeEventListener("drop", j);
            }
        );
    }, [D, x, j]);
    let U = w.map((e) => y.Z.getUpload(g, e, E.d.InteractionModal)).filter((e) => null != e);
    return 1 === s && 1 === U.length
        ? (0, r.jsx)(R, {
              upload: U[0],
              handleRemoveFile: k,
              singleFileInput: !0,
          })
        : (0, r.jsxs)("div", {
              ref: _,
              className: o()(A.container, {
                  [A.dropping]: p,
                  [A.error]: null != P,
              }),
              children: [
                  w.length >= s
                      ? (0, r.jsx)(N, {})
                      : (0, r.jsx)(C, {
                            dropping: p,
                            fileInputRef: l,
                            minValues: a,
                            maxValues: s,
                            channelId: g,
                        }),
                  U.length > 0 &&
                      (0, r.jsx)("div", {
                          className: A.files,
                          children: U.map((e) =>
                              (0, r.jsx)(
                                  R,
                                  {
                                      upload: e,
                                      handleRemoveFile: k,
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  (0, r.jsx)(u.Z, {
                      ref: l,
                      onChange: M,
                      multiple: s > 1,
                      tabIndex: -1,
                      className: A.fileInput,
                  }),
              ],
          });
}
