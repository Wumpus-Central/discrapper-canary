n.d(t, { A: () => M });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(284009),
    o = n.n(s),
    d = n(311907),
    c = n(81369),
    u = n(827734),
    m = n(834730),
    _ = n(628284),
    p = n(241326),
    h = n(608299),
    A = n(817363),
    C = n(23658),
    x = n(565150),
    f = n(851023),
    E = n(349688),
    I = n(914905),
    N = n(101555),
    g = n(734057),
    v = n(31717),
    T = n(255438),
    b = n(453771),
    S = n(518960),
    j = n(382287),
    O = n(207963),
    y = n(814890),
    R = n(414062),
    P = n(985018),
    L = n(179906);
function D(e) {
    let { dropping: t, fileInputRef: n, minValues: l, maxValues: r, guildId: s } = e,
        o = (0, b.o2)(s),
        d = (0, T.Xq)(o / T.XF, { useKibibytes: !0, useSpace: !0 });
    return (0, a.jsxs)("div", {
        className: L.pp,
        children: [
            (0, a.jsxs)("div", {
                className: i()(L.e8, { [L.R]: t }),
                children: [
                    (0, a.jsx)(c.H, { color: u.A.colors.ICON_STRONG, size: "refresh_sm" }),
                    (0, a.jsx)(m.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: P.intl.format(P.t.y68I8P, {
                            onClick: () => n.current?.activateUploadDialogue(),
                            maxValues: r,
                        }),
                    }),
                    (0, a.jsx)(m.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children:
                            l > 1
                                ? l === r
                                    ? P.intl.format(P.t.SAr31z, { minValues: l, maxSize: d })
                                    : P.intl.format(P.t["ZG+3Ck"], { minValues: l, maxValues: r, maxSize: d })
                                : P.intl.format(P.t.tyxwW1, { maxValues: r, maxSize: d }),
                    }),
                ],
            }),
            t &&
                (0, a.jsxs)("div", {
                    className: i()(L.e8, L.r$),
                    children: [
                        (0, a.jsx)(c.H, { color: u.A.colors.ICON_STRONG, size: "refresh_sm" }),
                        (0, a.jsx)(m.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: P.intl.string(P.t["8OJlsH"]),
                        }),
                    ],
                }),
        ],
    });
}
function k() {
    return (0, a.jsxs)("div", {
        className: i()(L.pp, L.e8),
        children: [
            (0, a.jsx)(_.y, { color: u.A.colors.ICON_STRONG, size: "refresh_sm" }),
            (0, a.jsx)(m.E, {
                variant: "text-md/normal",
                color: "text-strong",
                children: P.intl.string(P.t["0PhgpK"]),
            }),
            (0, a.jsx)(m.E, { variant: "text-xs/normal", color: "text-muted", children: P.intl.string(P.t.HYg2Hn) }),
        ],
    });
}
function w(e) {
    let { upload: t, handleRemoveFile: n, singleFileInput: l } = e;
    return (0, a.jsxs)(
        "div",
        {
            className: i()(L.NJ, { [L.j1]: l }),
            children: [
                (0, a.jsx)(I.J, { upload: t, size: l ? E.L.XSMALL : E.L.XXSMALL }),
                (0, a.jsx)(m.E, {
                    variant: `text-${l ? "md" : "xs"}/medium`,
                    className: L.iW,
                    children: t.filename ?? P.intl.string(P.t.ZMirp0),
                }),
                (0, a.jsx)(N.Ay, {
                    className: L.BX,
                    children: (0, a.jsx)(f.A, {
                        className: L.XI,
                        tooltip: P.intl.string(P.t.N86XcP),
                        onClick: () => n(t.id),
                        dangerous: !0,
                        children: (0, a.jsx)(p.u, { size: "xs", color: "currentColor", className: L.gE }),
                    }),
                }),
            ],
        },
        t.id,
    );
}
function M(e) {
    let { minValues: t, maxValues: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        [c, u] = l.useState(!1),
        m = (0, O.jc)();
    o()(null != m, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
    let _ = m.channelId;
    o()(null != _, "FileUploadActionComponent must be used inside a channel");
    let p = m.modal?.customId;
    o()(null != p, "FileUploadActionComponent requires modalCustomId from context");
    let { uploadIds: f, setUploadIds: E, currentUploads: I, error: N } = (0, R.j)(e),
        T = (0, d.bG)([g.A], () => g.A.getBasicChannel(_));
    o()(null != T, "FileUploadActionComponent requires a valid channel");
    let b = l.useCallback((e) => {
            e.preventDefault(), e.dataTransfer?.types.includes("Files") && u(!0);
        }, []),
        M = l.useCallback((e) => {
            s.current?.contains(e.relatedTarget) || u(!1);
        }, []),
        U = l.useCallback(
            (e, t) => {
                if (0 === e.length) return;
                if (f.length + e.length > n)
                    return (0, C.openUploadError)({
                        title: P.intl.string(P.t.wOr6hB),
                        help: P.intl.formatToPlainString(P.t.dy6viJ, { maxValues: n }),
                    });
                if ((0, j.fJ)(e, T.guild_id)) return (0, S.V)(T, e);
                let a = e.map((e) => {
                    let n = (0, y.so)(p),
                        a = { id: n, file: e, platform: x.xz.WEB, origin: t };
                    return (
                        h.A.setFile({
                            channelId: _,
                            id: n,
                            file: a,
                            draftType: v.C.InteractionModal,
                            allowOptimization: !1,
                        }),
                        n
                    );
                });
                E(f.concat(a));
            },
            [f, n, T, E, p, _],
        ),
        H = l.useCallback(
            (e) => {
                e.preventDefault(), u(!1), U(Array.from(e.dataTransfer?.files ?? []), "drag_drop");
            },
            [U],
        ),
        B = (e) => {
            h.A.remove(_, e, v.C.InteractionModal), E(f.filter((t) => t !== e));
        };
    return (l.useEffect(() => {
        let e = s.current;
        return (
            e?.addEventListener("dragover", b),
            e?.addEventListener("dragleave", M),
            e?.addEventListener("drop", H),
            () => {
                e?.removeEventListener("dragover", b),
                    e?.removeEventListener("dragleave", M),
                    e?.removeEventListener("drop", H);
            }
        );
    }, [b, M, H]),
    1 === n && 1 === I.length)
        ? (0, a.jsx)(w, { upload: I[0], handleRemoveFile: B, singleFileInput: !0 })
        : (0, a.jsxs)("div", {
              ref: s,
              className: i()(L.kL, { [L.Ke]: c, [L.z3]: null != N }),
              children: [
                  f.length >= n
                      ? (0, a.jsx)(k, {})
                      : (0, a.jsx)(D, {
                            dropping: c,
                            fileInputRef: r,
                            minValues: t,
                            maxValues: n,
                            guildId: T.guild_id,
                        }),
                  I.length > 0 &&
                      (0, a.jsx)("div", {
                          className: L.aq,
                          children: I.map((e) => (0, a.jsx)(w, { upload: e, handleRemoveFile: B }, e.id)),
                      }),
                  (0, a.jsx)(A.A, {
                      ref: r,
                      onChange: (e) => {
                          U(Array.from(e.currentTarget.files ?? []), "file_picker"), (e.currentTarget.value = "");
                      },
                      multiple: n > 1,
                      tabIndex: -1,
                      className: L.Fg,
                  }),
              ],
          });
}
