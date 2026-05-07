a.d(l, { A: () => C, L: () => f });
var n = a(627968),
    s = a(64700),
    i = a(503698),
    t = a.n(i),
    r = a(284009),
    c = a.n(r),
    d = a(43990),
    h = a(534514),
    o = a(349288),
    u = a(187322),
    m = a(939249),
    x = a(240248),
    p = a(946274),
    N = a(652215),
    j = a(375708),
    v = a(15132);
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
        c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"),
            this.inputRef.current.handleFileChange(e);
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
                disabled: g,
                onChange: C,
                showIcon: R,
                showIconDisabled: k,
                className: b,
                imageClassName: w,
                iconClassName: D,
                iconWrapperClassName: F,
                icon: y,
                hideSize: A,
                imageStyle: U,
                showRemoveButton: z,
                maxFileSizeBytes: I,
                onFileSizeError: Y,
                onOpenImageSelectModal: S,
                "aria-label": X,
            } = this.props;
        if (
            (null != (e = null != i && /^data:/.test(i) ? i : d(i))
                ? (l = `url("${e}")`)
                : null != c &&
                  (a = (0, n.jsx)(h.D, {
                      variant: "heading-xxl/normal",
                      color: "always-white",
                      className: v.nX,
                      children: (0, x.oN)(c),
                  })),
            g)
        )
            return (0, n.jsx)("div", {
                className: t()(v.WY, v.r9, b),
                children: (0, n.jsxs)("div", {
                    className: t()(v.Yp, w),
                    style: { ...U, backgroundImage: l },
                    children: [a, k && (0, n.jsx)("div", { className: t()(v.XD, v.$N, D), children: y })],
                }),
            });
        null != i
            ? (s = (0, n.jsx)(o.Anchor, {
                  className: v.DT,
                  onClick: this.handleRemove,
                  children: j.intl.string(j.t.N86XcP),
              }))
            : A || (s = (0, n.jsx)("small", { className: v.UZ, children: j.intl.format(j.t.AH4c7Y, { size: N.eQT }) }));
        let B = X ?? r ?? j.intl.string(j.t["Ge+941"]);
        return (0, n.jsxs)("div", {
            className: t()(v.WY, b),
            children: [
                (0, n.jsx)(u.vN, {
                    within: !0,
                    children: (0, n.jsxs)("div", {
                        className: R ? t()(v.U1, F) : void 0,
                        children: [
                            (0, n.jsxs)("div", {
                                className: t()(v.Yp, w),
                                style: { ...U, backgroundImage: l },
                                children: [
                                    (0, n.jsx)("span", { "aria-hidden": !0, children: a }),
                                    null != S
                                        ? (0, n.jsx)(m.D, { className: v.c4, "aria-label": B, onClick: S })
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(p.Ay, {
                                                      ref: this.inputRef,
                                                      onChange: C,
                                                      className: v.c4,
                                                      "aria-label": B,
                                                      tabIndex: -1,
                                                      "aria-hidden": !0,
                                                      maxFileSizeBytes: I,
                                                      onFileSizeError: Y,
                                                  }),
                                                  (0, n.jsx)(m.D, {
                                                      className: v.c4,
                                                      "aria-label": B,
                                                      onClick: this.handleActivateUpload,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            null != r && (0, n.jsx)("div", { className: v.$J, "aria-hidden": "true", children: r }),
                            R && (0, n.jsx)(f, { className: D, icon: y }),
                        ],
                    }),
                }),
                z ? s : null,
            ],
        });
    }
}
let C = g;
