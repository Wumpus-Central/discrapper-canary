r.d(t, {
    default: () => m,
}),
    r(896048);
var n = r(627968),
    s = r(64700),
    o = r(732955),
    i = r(397927),
    l = r(817281),
    a = r(268218),
    c = r(711014),
    h = r(652215),
    p = r(114329),
    u = r(985018),
    b = r(48835);

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
let f = (0, a.Fe)({
    createPromise: () => r.e("66147").then(r.bind(r, 48736)),
    webpackId: 48736,
});
class g extends s.PureComponent {
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { name: r, color: s } = this.state;
        return (0, n.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, n.jsx)(o.aFV, {
                title: u.intl.string(u.t.Dx7im5),
                actions: [
                    {
                        variant: "primary",
                        text: u.intl.string(u.t.i4jeWR),
                        type: "submit",
                    },
                ],
                transitionState: e,
                onClose: t,
                children: (0, n.jsxs)(i.BJc, {
                    gap: 16,
                    children: [
                        (0, n.jsx)(i.ksK, {
                            label: u.intl.string(u.t.tGRbjA),
                            maxLength: h.F05,
                            value: r,
                            onChange: this.handleNameChange,
                            placeholder: u.intl.string(u.t.xV9hVh),
                            autoFocus: !0,
                        }),
                        (0, n.jsx)(i.D0$, {
                            label: u.intl.string(u.t.xpurRF),
                            children: (0, n.jsx)(f, {
                                className: b.E,
                                defaultColor: p.DO,
                                colors: h._tK,
                                value: null != s ? s : p.DO,
                                onChange: this.handleColorChange,
                            }),
                        }),
                    ],
                }),
            }),
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
                this.setState({
                    name: e,
                });
            }),
            d(this, "handleColorChange", (e) => {
                this.setState({
                    color: e,
                });
            }),
            d(this, "handleSubmit", (e) => {
                e.preventDefault();
                let { folderId: t } = this.props,
                    { name: r, color: n } = this.state,
                    s = c.Ay.getGuildFolders().map((e) => {
                        var s, o;
                        return e.folderId === t
                            ? ((s = (function (e) {
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
                              })({}, e)),
                              (o = o =
                                  {
                                      folderName: r,
                                      folderColor: n,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              s)
                            : e;
                    });
                (0, l.um)(s), this.close();
            });
    }
}
let m = g;
