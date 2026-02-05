n.d(t, { A: () => L });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(284009),
    o = n.n(i),
    d = n(311907),
    c = n(397927),
    u = n(608299),
    m = n(817363),
    p = n(23658),
    A = n(565150),
    h = n(851023),
    C = n(349688),
    E = n(914905),
    x = n(101555),
    N = n(734057),
    I = n(31717),
    _ = n(255438),
    f = n(453771),
    g = n(518960),
    T = n(382287),
    v = n(207963),
    j = n(814890),
    S = n(414062),
    O = n(985018),
    R = n(784505);
function y(e) {
    let { dropping: t, fileInputRef: n, minValues: a, maxValues: r, guildId: i } = e,
        o = (0, f.o2)(i),
        d = (0, _.Xq)(o / _.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, l.jsxs)("div", {
        className: R.pp,
        children: [
            (0, l.jsxs)("div", {
                className: s()(R.e8, { [R.R]: t }),
                children: [
                    (0, l.jsx)(c.H8$, { color: c.LU0.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, l.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: O.intl.format(O.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children:
                            a > 1
                                ? a === r
                                    ? O.intl.format(O.t.SAr31z, { minValues: a, maxSize: d })
                                    : O.intl.format(O.t["ZG+3Ck"], { minValues: a, maxValues: r, maxSize: d })
                                : O.intl.format(O.t.tyxwW1, { maxValues: r, maxSize: d }),
                    }),
                ],
            }),
            t &&
                (0, l.jsxs)("div", {
                    className: s()(R.e8, R.r$),
                    children: [
                        (0, l.jsx)(c.H8$, { color: c.LU0.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, l.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: O.intl.string(O.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function b() {
    return (0, l.jsxs)("div", {
        className: s()(R.pp, R.e8),
        children: [
            (0, l.jsx)(c.yr3, { color: c.LU0.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, l.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: O.intl.string(O.t["0PhgpK"]),
            }),
            (0, l.jsx)(c.Text, { variant: "text-xs/normal", color: "text-muted", children: O.intl.string(O.t.HYg2Hn) }),
        ],
    });
}
function P(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: a } = e;
    return (0, l.jsxs)(
        "div",
        {
            className: s()(R.NJ, { [R.j1]: a }),
            children: [
                (0, l.jsx)(E.J, { upload: t, size: a ? C.L.XSMALL : C.L.XXSMALL }),
                (0, l.jsx)(c.Text, {
                    variant: `text-${a ? "md" : "xs"}/medium`,
                    className: R.iW,
                    children: t.filename ?? O.intl.string(O.t.ZMirp0),
                }),
                (0, l.jsx)(x.Ay, {
                    className: R.BX,
                    children: (0, l.jsx)(h.A, {
                        className: R.XI,
                        tooltip: O.intl.string(O.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, l.jsx)(c.ucK, { size: "xs", color: "currentColor", className: R.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function L(e) {
    let { minValues: t, maxValues: n } = e,
        r = a.useRef(null),
        i = a.useRef(null),
        [c, h] = a.useState(!1),
        C = (0, v.jc)();
    o()(null != C, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let E = C.channelId;
    o()(null != E, "FileUploadActionComponent must be used inside a channel");
    let x = C.modal?.customId;
    o()(null != x, "FileUploadActionComponent requires modalCustomId from context");
    let { uploadIds: _, setUploadIds: f, currentUploads: L, error: D } = (0, S.j)(e),
        U = (0, d.bG)([N.A], () => N.A.getBasicChannel(E));
    o()(null != U, "FileUploadActionComponent requires a valid channel");
    let k = a.useCallback((e) => {
            e.preventDefault(), e.dataTransfer?.types.includes("Files") && h(!0);
        }, []),
        w = a.useCallback((e) => {
            i.current?.contains(e.relatedTarget) || h(!1);
        }, []),
        M = a.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (_.length + e.length > n)
                    return (0, p.openUploadError)({
                        title: O.intl.string(O.t.wOr6hB),
                        help: O.intl.formatToPlainString(O.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, T.fJ)(e, U.guild_id)) return (0, g.V)(U, e);
                let l = e.map((e) => {
                    let n = (0, j.so)(x),
                        l = { id: n, file: e, platform: A.xz.WEB, origin: t };
                    return (
                        u.A.setFile({
                            channelId: E,
                            id: n,
                            file: l,
                            draftType: I.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                f(_.concat(l));
            },
            [_, n, U, f, x, E],
        ),
        H = a.useCallback(
            (e) => {
                e.preventDefault(), h(!1), M(Array.from(e.dataTransfer?.files ?? []), "drag_drop");
            },
            [M],
        ),
        K = (e) => {
            u.A.remove(E, e, I.C.InteractionModal), f(_.filter((t) => t !== e));
        };
    return (a.useEffect(() => {
        let e = i.current;
        return (
            e?.addEventListener("dragover", k),
            e?.addEventListener("dragleave", w),
            e?.addEventListener("drop", H),
            () => {
                e?.removeEventListener("dragover", k),
                    e?.removeEventListener("dragleave", w),
                    e?.removeEventListener("drop", H);
            }
        );
    }, [k, w, H]),
    1 === n && 1 === L.length)
        ? (0, l.jsx)(P, { upload: L[0], handleRemoveFile: K, singleFileInput: !0 })
        : (0, l.jsxs)("div", {
              ref: i,
              className: s()(R.kL, { [R.Ke]: c, [R.z3]: null != D }),
              children: [
                  _.length >= n
                      ? (0, l.jsx)(b, {})
                      : (0, l.jsx)(y, {
                            dropping: c,
                            fileInputRef: r,
                            minValues: t,
                            maxValues: n,
                            guildId: U.guild_id,
                        }),
                  L.length > 0 &&
                      (0, l.jsx)("div", {
                          className: R.aq,
                          children: L.map((e) => (0, l.jsx)(P, { upload: e, handleRemoveFile: K }, e.id)),
                      }),
                  (0, l.jsx)(m.A, {
                      ref: r,
                      onChange: (e) => {
                          M(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = "");
                      },
                      multiple: n > 1,
                      tabIndex: -1,
                      className: R.Fg,
                  }),
              ],
          });
}
