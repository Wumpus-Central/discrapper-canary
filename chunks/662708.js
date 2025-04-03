r.d(t, { default: () => b }), r(47120);
var s = r(200651),
    n = r(192379),
    o = r(481060),
    i = r(153867),
    l = r(663993),
    a = r(771845),
    c = r(981631),
    h = r(388032),
    p = r(48025);
function d(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let u = (0, l.Un)({
    createPromise: () => r.e('4848').then(r.bind(r, 797967)),
    webpackId: 797967
});
class m extends n.PureComponent {
    render() {
        let { transitionState: e } = this.props,
            { name: t, color: r } = this.state;
        return (0, s.jsxs)(o.Y0X, {
            transitionState: e,
            'aria-label': h.NW.string(h.t.Dx7im5),
            size: o.CgR.DYNAMIC,
            children: [
                (0, s.jsxs)(o.xBx, {
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, s.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            children: h.NW.string(h.t.Dx7im5)
                        }),
                        (0, s.jsx)(o.olH, { onClick: this.close })
                    ]
                }),
                (0, s.jsx)(o.hzk, {
                    children: (0, s.jsxs)('form', {
                        onSubmit: this.handleSubmit,
                        children: [
                            (0, s.jsx)(o.xJW, {
                                title: h.NW.string(h.t.tGRbjI),
                                className: p.formItem,
                                children: (0, s.jsx)(o.oil, {
                                    maxLength: c.dYL,
                                    value: t,
                                    onChange: this.handleNameChange,
                                    placeholder: h.NW.string(h.t.xV9hVl),
                                    autoFocus: !0
                                })
                            }),
                            (0, s.jsx)(o.xJW, {
                                title: h.NW.string(h.t.xpurRE),
                                className: p.formItem,
                                children: (0, s.jsx)(u, {
                                    defaultColor: c.Wyy,
                                    colors: c.pmI,
                                    value: null != r ? r : c.Wyy,
                                    onChange: this.handleColorChange
                                })
                            })
                        ]
                    })
                }),
                (0, s.jsx)(o.mzw, {
                    children: (0, s.jsx)(o.zxk, {
                        type: 'submit',
                        onClick: this.handleSubmit,
                        children: h.NW.string(h.t.i4jeWV)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            d(this, 'state', {
                name: null != (t = this.props.folderName) ? t : '',
                color: this.props.folderColor
            }),
            d(this, 'close', () => {
                this.props.onClose();
            }),
            d(this, 'handleNameChange', (e) => {
                this.setState({ name: e });
            }),
            d(this, 'handleColorChange', (e) => {
                this.setState({ color: e });
            }),
            d(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { folderId: t } = this.props,
                    { name: r, color: s } = this.state,
                    n = a.ZP.getGuildFolders().map((e) => {
                        var n, o;
                        return e.folderId === t
                            ? ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          s = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (s = s.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          s.forEach(function (t) {
                                              d(e, t, r[t]);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (o = o =
                                  {
                                      folderName: r,
                                      folderColor: s
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var s = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, s);
                                        }
                                        return r;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              n)
                            : e;
                    });
                (0, i.V1)(n), this.close();
            });
    }
}
let b = m;
