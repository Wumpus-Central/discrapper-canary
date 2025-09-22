r.d(t, { default: () => g }), r(388685);
var n = r(951288),
    s = r(647438),
    i = r(886025),
    o = r(481060),
    l = r(153867),
    a = r(663993),
    c = r(771845),
    h = r(981631),
    p = r(388032),
    u = r(713970);
function d(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let b = (0, a.Un)({
    createPromise: () => r.e("4848").then(r.bind(r, 797967)),
    webpackId: 797967,
});
class f extends s.PureComponent {
    render() {
        let { transitionState: e } = this.props,
            { name: t, color: r } = this.state;
        return (0, n.jsxs)(o.Y0X, {
            transitionState: e,
            "aria-label": p.intl.string(p.t.Dx7im5),
            size: o.CgR.DYNAMIC,
            parentComponent: "GuildFolderSettings",
            children: [
                (0, n.jsxs)(o.xBx, {
                    className: u.header,
                    separator: !1,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: "heading-lg/semibold",
                            children: p.intl.string(p.t.Dx7im5),
                        }),
                        (0, n.jsx)(o.olH, { onClick: this.close }),
                    ],
                }),
                (0, n.jsx)(o.hzk, {
                    children: (0, n.jsx)("form", {
                        onSubmit: this.handleSubmit,
                        children: (0, n.jsxs)(o.Kqy, {
                            gap: 16,
                            children: [
                                (0, n.jsx)(o.oil, {
                                    label: p.intl.string(p.t.tGRbjI),
                                    maxLength: h.dYL,
                                    value: t,
                                    onChange: this.handleNameChange,
                                    placeholder: p.intl.string(p.t.xV9hVl),
                                    autoFocus: !0,
                                }),
                                (0, n.jsx)(i.N, {
                                    label: p.intl.string(p.t.xpurRE),
                                    children: (0, n.jsx)(b, {
                                        defaultColor: h.Wyy,
                                        colors: h.pmI,
                                        value: null != r ? r : h.Wyy,
                                        onChange: this.handleColorChange,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, n.jsx)(o.mzw, {
                    children: (0, n.jsx)(o.zxk, {
                        variant: "primary",
                        text: p.intl.string(p.t.i4jeWV),
                        type: "submit",
                        onClick: this.handleSubmit,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            d(this, "state", {
                name: null != (t = this.props.folderName) ? t : "",
                color: this.props.folderColor,
            }),
            d(this, "close", () => {
                this.props.onClose();
            }),
            d(this, "handleNameChange", (e) => {
                this.setState({ name: e });
            }),
            d(this, "handleColorChange", (e) => {
                this.setState({ color: e });
            }),
            d(this, "handleSubmit", (e) => {
                e.preventDefault();
                let { folderId: t } = this.props,
                    { name: r, color: n } = this.state,
                    s = c.ZP.getGuildFolders().map((e) =>
                        e.folderId === t
                            ? (function (e, t) {
                                  return (
                                      (t = null != t ? t : {}),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                          : (function (e, t) {
                                                var r = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var n = Object.getOwnPropertySymbols(e);
                                                    r.push.apply(r, n);
                                                }
                                                return r;
                                            })(Object(t)).forEach(function (r) {
                                                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                            }),
                                      e
                                  );
                              })(
                                  (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = null != arguments[t] ? arguments[t] : {},
                                              n = Object.keys(r);
                                          "function" == typeof Object.getOwnPropertySymbols &&
                                              (n = n.concat(
                                                  Object.getOwnPropertySymbols(r).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                  }),
                                              )),
                                              n.forEach(function (t) {
                                                  d(e, t, r[t]);
                                              });
                                      }
                                      return e;
                                  })({}, e),
                                  {
                                      folderName: r,
                                      folderColor: n,
                                  },
                              )
                            : e,
                    );
                (0, l.V1)(s), this.close();
            });
    }
}
let g = f;
