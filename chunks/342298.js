n.d(t, { A: () => A, L: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(397927),
    c = n(240248),
    u = n(946274),
    m = n(652215),
    g = n(985018),
    x = n(315628);
function h(e) {
    let { className: t, icon: n = null } = e;
    return (0, i.jsx)(d.NPJ, {
        theme: m.NJ8.LIGHT,
        children: (e) => (0, i.jsx)("div", { className: a()(x.XD, t, e), children: n }),
    });
}
class p extends l.PureComponent {
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
    render() {
        let e,
            t,
            n,
            l,
            {
                image: s,
                hint: r,
                name: o,
                makeURL: p,
                disabled: A,
                onChange: b,
                showIcon: _,
                showIconDisabled: f,
                className: N,
                imageClassName: j,
                iconClassName: T,
                iconWrapperClassName: C,
                icon: v,
                hideSize: E,
                imageStyle: I,
                showRemoveButton: S,
                maxFileSizeBytes: y,
                onFileSizeError: O,
                onOpenImageSelectModal: w,
                "aria-label": R,
            } = this.props;
        if (
            (null != (e = null != s && /^data:/.test(s) ? s : p(s))
                ? (t = `url("${e}")`)
                : null != o &&
                  (n = (0, i.jsx)(d.Heading, {
                      variant: "heading-xxl/normal",
                      color: "always-white",
                      className: x.nX,
                      children: (0, c.oN)(o),
                  })),
            A)
        )
            return (0, i.jsx)("div", {
                className: a()(x.WY, x.r9, N),
                children: (0, i.jsxs)("div", {
                    className: a()(x.Yp, j),
                    style: { ...I, backgroundImage: t },
                    children: [n, f && (0, i.jsx)("div", { className: a()(x.XD, x.$N, T), children: v })],
                }),
            });
        null != s
            ? (l = (0, i.jsx)(d.MzZ, {
                  className: x.DT,
                  onClick: this.handleRemove,
                  children: g.intl.string(g.t.N86XcP),
              }))
            : E || (l = (0, i.jsx)("small", { className: x.UZ, children: g.intl.format(g.t.AH4c7Y, { size: m.eQT }) }));
        let k = R ?? r ?? g.intl.string(g.t["Ge+941"]);
        return (0, i.jsxs)("div", {
            className: a()(x.WY, N),
            children: [
                (0, i.jsx)(d.vN3, {
                    within: !0,
                    children: (0, i.jsxs)("div", {
                        className: _ ? a()(x.U1, C) : void 0,
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(x.Yp, j),
                                style: { ...I, backgroundImage: t },
                                children: [
                                    (0, i.jsx)("span", { "aria-hidden": !0, children: n }),
                                    null != w
                                        ? (0, i.jsx)(d.DUT, { className: x.c4, "aria-label": k, onClick: w })
                                        : (0, i.jsx)(u.Ay, {
                                              ref: this.inputRef,
                                              onChange: b,
                                              className: x.c4,
                                              "aria-label": k,
                                              tabIndex: 0,
                                              maxFileSizeBytes: y,
                                              onFileSizeError: O,
                                          }),
                                ],
                            }),
                            null != r && (0, i.jsx)("div", { className: x.$J, "aria-hidden": "true", children: r }),
                            _ && (0, i.jsx)(h, { className: T, icon: v }),
                        ],
                    }),
                }),
                S ? l : null,
            ],
        });
    }
}
let A = p;
