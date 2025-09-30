r.d(t, { default: () => f }), r(388685);
var n = r(951288),
    s = r(647438),
    i = r(481060),
    o = r(153867),
    l = r(663993),
    a = r(771845),
    c = r(981631),
    h = r(388032),
    p = r(713970);
function u(e, t, r) {
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
let d = (0, l.Un)({
    createPromise: () => r.e("4848").then(r.bind(r, 797967)),
    webpackId: 797967,
});
class b extends s.PureComponent {
    render() {
        let { transitionState: e } = this.props,
            { name: t, color: r } = this.state;
        return (0, n.jsxs)(i.Y0X, {
            transitionState: e,
            "aria-label": h.intl.string(h.t.Dx7im5),
            size: i.CgR.DYNAMIC,
            parentComponent: "GuildFolderSettings",
            children: [
                (0, n.jsxs)(i.xBx, {
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "heading-lg/semibold",
                            children: h.intl.string(h.t.Dx7im5),
                        }),
                        (0, n.jsx)(i.olH, { onClick: this.close }),
                    ],
                }),
                (0, n.jsx)(i.hzk, {
                    children: (0, n.jsx)("form", {
                        onSubmit: this.handleSubmit,
                        children: (0, n.jsxs)(i.Kqy, {
                            gap: 16,
                            children: [
                                (0, n.jsx)(i.oil, {
                                    label: h.intl.string(h.t.tGRbjI),
                                    maxLength: c.dYL,
                                    value: t,
                                    onChange: this.handleNameChange,
                                    placeholder: h.intl.string(h.t.xV9hVl),
                                    autoFocus: !0,
                                }),
                                (0, n.jsx)(i.NIc, {
                                    label: h.intl.string(h.t.xpurRE),
                                    children: (0, n.jsx)(d, {
                                        defaultColor: c.Wyy,
                                        colors: c.pmI,
                                        value: null != r ? r : c.Wyy,
                                        onChange: this.handleColorChange,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)(i.zxk, {
                        variant: "primary",
                        text: h.intl.string(h.t.i4jeWV),
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
            u(this, "state", {
                name: null != (t = this.props.folderName) ? t : "",
                color: this.props.folderColor,
            }),
            u(this, "close", () => {
                this.props.onClose();
            }),
            u(this, "handleNameChange", (e) => {
                this.setState({ name: e });
            }),
            u(this, "handleColorChange", (e) => {
                this.setState({ color: e });
            }),
            u(this, "handleSubmit", (e) => {
                e.preventDefault();
                let { folderId: t } = this.props,
                    { name: r, color: n } = this.state,
                    s = a.ZP.getGuildFolders().map((e) =>
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
                                                  u(e, t, r[t]);
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
                (0, o.V1)(s), this.close();
            });
    }
}
let f = b;
