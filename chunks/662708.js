r.d(t, { default: () => b }), r(388685);
var n = r(255367),
    s = r(73800),
    i = r(481060),
    o = r(153867),
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
class m extends s.PureComponent {
    render() {
        let { transitionState: e } = this.props,
            { name: t, color: r } = this.state;
        return (0, n.jsxs)(i.Y0X, {
            transitionState: e,
            'aria-label': h.intl.string(h.t.Dx7im5),
            size: i.CgR.DYNAMIC,
            children: [
                (0, n.jsxs)(i.xBx, {
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: 'heading-lg/semibold',
                            children: h.intl.string(h.t.Dx7im5)
                        }),
                        (0, n.jsx)(i.olH, { onClick: this.close })
                    ]
                }),
                (0, n.jsx)(i.hzk, {
                    children: (0, n.jsxs)('form', {
                        onSubmit: this.handleSubmit,
                        children: [
                            (0, n.jsx)(i.xJW, {
                                title: h.intl.string(h.t.tGRbjI),
                                className: p.formItem,
                                children: (0, n.jsx)(i.oil, {
                                    maxLength: c.dYL,
                                    value: t,
                                    onChange: this.handleNameChange,
                                    placeholder: h.intl.string(h.t.xV9hVl),
                                    autoFocus: !0
                                })
                            }),
                            (0, n.jsx)(i.xJW, {
                                title: h.intl.string(h.t.xpurRE),
                                className: p.formItem,
                                children: (0, n.jsx)(u, {
                                    defaultColor: c.Wyy,
                                    colors: c.pmI,
                                    value: null != r ? r : c.Wyy,
                                    onChange: this.handleColorChange
                                })
                            })
                        ]
                    })
                }),
                (0, n.jsx)(i.mzw, {
                    children: (0, n.jsx)(i.zxk, {
                        type: 'submit',
                        onClick: this.handleSubmit,
                        children: h.intl.string(h.t.i4jeWV)
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
                    { name: r, color: n } = this.state,
                    s = a.ZP.getGuildFolders().map((e) => {
                        var s, i;
                        return e.folderId === t
                            ? ((s = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              d(e, t, r[t]);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (i = i =
                                  {
                                      folderName: r,
                                      folderColor: n
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              s)
                            : e;
                    });
                (0, o.V1)(s), this.close();
            });
    }
}
let b = m;
