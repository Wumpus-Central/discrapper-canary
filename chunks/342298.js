var n = a(477900),
    s = a(582128),
    i = a(503698),
    t = a.n(i),
    r = a(284009),
    c = a.n(r),
    d = a(43990),
    h = a(534514),
    o = a(28863),
    u = a(559106),
    m = a(939249),
    x = a(240248),
    p = a(946274),
    N = a(652215),
    j = a(792996),
    v = a(120238);
function f(e) {
    let { className: l, icon: a = null } = e;
    return (0, n.jsx)(d.N, {
        theme: N.NJ8.LIGHT,
        children: (e) => (0, n.jsx)("div", { className: t()(v.XD, l, e), children: a }),
    });
}
class g extends s.PureComponent {
    static defaultProps = {
        name: "",
        makeURL: (e) => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
    };
    inputRef = s.createRef();
    handleExternalFileChange(e) {
        (c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"),
            this.inputRef.current.handleFileChange(e));
    }
    handleRemove = () => {
        this.props.onChange(null);
    };
    handleActivateUpload = () => {
        this.inputRef.current?.activateUploadDialogue();
    };
    render() {
        let e,
            l,
            a,
            s,
            {
                image: i,
                hint: r,
                name: c,
                makeURL: d,
                disabled: N,
                onChange: g,
                showIcon: C,
                showIconDisabled: R,
                className: k,
                imageClassName: b,
                iconClassName: D,
                iconWrapperClassName: F,
                icon: w,
                hideSize: y,
                imageStyle: A,
                showRemoveButton: U,
                maxFileSizeBytes: z,
                onFileSizeError: I,
                onOpenImageSelectModal: Y,
                "aria-label": S,
            } = this.props;
        if (
            (null != (e = null != i && /^data:/.test(i) ? i : d(i))
                ? (l = `url("${e}")`)
                : null != c &&
                  (a = (0, n.jsx)(h.D, {
                      variant: "heading-xxl/medium",
                      color: "text-overlay-light",
                      className: v.nX,
                      children: (0, x.oN)(c),
                  })),
            N)
        )
            return (0, n.jsx)("div", {
                className: t()(v.WY, v.r9, k),
                children: (0, n.jsxs)("div", {
                    className: t()(v.Yp, b),
                    style: { ...A, backgroundImage: l },
                    children: [a, R && (0, n.jsx)("div", { className: t()(v.XD, v.$N, D), children: w })],
                }),
            });
        null != i
            ? (s = (0, n.jsx)(o.Anchor, {
                  className: v.DT,
                  onClick: this.handleRemove,
                  children: j.intl.string(j.t.N86XcP),
              }))
            : y || (s = (0, n.jsx)("small", { className: v.UZ, children: j.intl.format(j.t.AH4c7Y, { size: 128 }) }));
        let X = S ?? r ?? j.intl.string(j.t["Ge+941"]);
        return (0, n.jsxs)("div", {
            className: t()(v.WY, k),
            children: [
                (0, n.jsx)(u.vN, {
                    within: !0,
                    children: (0, n.jsxs)("div", {
                        className: C ? t()(v.U1, F) : void 0,
                        children: [
                            (0, n.jsxs)("div", {
                                className: t()(v.Yp, b),
                                style: { ...A, backgroundImage: l },
                                children: [
                                    (0, n.jsx)("span", { "aria-hidden": !0, children: a }),
                                    null != Y
                                        ? (0, n.jsx)(m.D, { className: v.c4, "aria-label": X, onClick: Y })
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(p.Ay, {
                                                      ref: this.inputRef,
                                                      onChange: g,
                                                      className: v.c4,
                                                      "aria-label": X,
                                                      tabIndex: -1,
                                                      "aria-hidden": !0,
                                                      maxFileSizeBytes: z,
                                                      onFileSizeError: I,
                                                  }),
                                                  (0, n.jsx)(m.D, {
                                                      className: v.c4,
                                                      "aria-label": X,
                                                      onClick: this.handleActivateUpload,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            null != r && (0, n.jsx)("div", { className: v.$J, "aria-hidden": "true", children: r }),
                            C && (0, n.jsx)(f, { className: D, icon: w }),
                        ],
                    }),
                }),
                U ? s : null,
            ],
        });
    }
}
a.d(l, {}, { A: g, L: f });
