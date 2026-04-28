n.d(t, { A: () => j, L: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(43990),
    c = n(534514),
    u = n(349288),
    m = n(187322),
    g = n(939249),
    h = n(240248),
    x = n(946274),
    p = n(652215),
    A = n(985018),
    b = n(15132);
function f(e) {
    let { className: t, icon: n = null } = e;
    return (0, i.jsx)(d.N, {
        theme: p.NJ8.LIGHT,
        children: (e) => (0, i.jsx)("div", { className: a()(b.XD, t, e), children: n }),
    });
}
class _ extends l.PureComponent {
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
    inputRef = l.createRef();
    handleExternalFileChange(e) {
        o()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"),
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
            t,
            n,
            l,
            {
                image: s,
                hint: r,
                name: o,
                makeURL: d,
                disabled: _,
                onChange: j,
                showIcon: N,
                showIconDisabled: v,
                className: E,
                imageClassName: C,
                iconClassName: I,
                iconWrapperClassName: T,
                icon: S,
                hideSize: y,
                imageStyle: w,
                showRemoveButton: O,
                maxFileSizeBytes: k,
                onFileSizeError: L,
                onOpenImageSelectModal: R,
                "aria-label": M,
            } = this.props;
        if (
            (null != (e = null != s && /^data:/.test(s) ? s : d(s))
                ? (t = `url("${e}")`)
                : null != o &&
                  (n = (0, i.jsx)(c.D, {
                      variant: "heading-xxl/normal",
                      color: "always-white",
                      className: b.nX,
                      children: (0, h.oN)(o),
                  })),
            _)
        )
            return (0, i.jsx)("div", {
                className: a()(b.WY, b.r9, E),
                children: (0, i.jsxs)("div", {
                    className: a()(b.Yp, C),
                    style: { ...w, backgroundImage: t },
                    children: [n, v && (0, i.jsx)("div", { className: a()(b.XD, b.$N, I), children: S })],
                }),
            });
        null != s
            ? (l = (0, i.jsx)(u.Anchor, {
                  className: b.DT,
                  onClick: this.handleRemove,
                  children: A.intl.string(A.t.N86XcP),
              }))
            : y || (l = (0, i.jsx)("small", { className: b.UZ, children: A.intl.format(A.t.AH4c7Y, { size: p.eQT }) }));
        let D = M ?? r ?? A.intl.string(A.t["Ge+941"]);
        return (0, i.jsxs)("div", {
            className: a()(b.WY, E),
            children: [
                (0, i.jsx)(m.vN, {
                    within: !0,
                    children: (0, i.jsxs)("div", {
                        className: N ? a()(b.U1, T) : void 0,
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(b.Yp, C),
                                style: { ...w, backgroundImage: t },
                                children: [
                                    (0, i.jsx)("span", { "aria-hidden": !0, children: n }),
                                    null != R
                                        ? (0, i.jsx)(g.D, { className: b.c4, "aria-label": D, onClick: R })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(x.Ay, {
                                                      ref: this.inputRef,
                                                      onChange: j,
                                                      className: b.c4,
                                                      "aria-label": D,
                                                      tabIndex: -1,
                                                      "aria-hidden": !0,
                                                      maxFileSizeBytes: k,
                                                      onFileSizeError: L,
                                                  }),
                                                  (0, i.jsx)(g.D, {
                                                      className: b.c4,
                                                      "aria-label": D,
                                                      onClick: this.handleActivateUpload,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            null != r && (0, i.jsx)("div", { className: b.$J, "aria-hidden": "true", children: r }),
                            N && (0, i.jsx)(f, { className: I, icon: S }),
                        ],
                    }),
                }),
                O ? l : null,
            ],
        });
    }
}
let j = _;
