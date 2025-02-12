s.d(t, { default: () => x }), s(47120);
var i = s(200651),
    l = s(192379),
    r = s(481060),
    n = s(153867),
    a = s(663993),
    o = s(771845),
    h = s(981631),
    d = s(388032),
    c = s(755332);
function m(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let u = (0, a.Un)({
    createPromise: () => s.e('4848').then(s.bind(s, 336231)),
    webpackId: 336231
});
class p extends l.PureComponent {
    render() {
        let { transitionState: e } = this.props,
            { name: t, color: s } = this.state;
        return (0, i.jsxs)(r.Y0X, {
            transitionState: e,
            'aria-label': d.intl.string(d.t.Dx7im5),
            size: r.CgR.DYNAMIC,
            children: [
                (0, i.jsxs)(r.xBx, {
                    className: c.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            children: d.intl.string(d.t.Dx7im5)
                        }),
                        (0, i.jsx)(r.olH, { onClick: this.close })
                    ]
                }),
                (0, i.jsx)(r.hzk, {
                    children: (0, i.jsxs)('form', {
                        onSubmit: this.handleSubmit,
                        children: [
                            (0, i.jsx)(r.xJW, {
                                title: d.intl.string(d.t.tGRbjI),
                                className: c.formItem,
                                children: (0, i.jsx)(r.oil, {
                                    maxLength: h.dYL,
                                    value: t,
                                    onChange: this.handleNameChange,
                                    placeholder: d.intl.string(d.t.xV9hVl),
                                    autoFocus: !0
                                })
                            }),
                            (0, i.jsx)(r.xJW, {
                                title: d.intl.string(d.t.xpurRE),
                                className: c.formItem,
                                children: (0, i.jsx)(u, {
                                    defaultColor: h.Wyy,
                                    colors: h.pmI,
                                    value: null != s ? s : h.Wyy,
                                    onChange: this.handleColorChange
                                })
                            })
                        ]
                    })
                }),
                (0, i.jsx)(r.mzw, {
                    children: (0, i.jsx)(r.zxk, {
                        type: 'submit',
                        onClick: this.handleSubmit,
                        children: d.intl.string(d.t.i4jeWV)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            m(this, 'state', {
                name: null !== (t = this.props.folderName) && void 0 !== t ? t : '',
                color: this.props.folderColor
            }),
            m(this, 'close', () => {
                this.props.onClose();
            }),
            m(this, 'handleNameChange', (e) => {
                this.setState({ name: e });
            }),
            m(this, 'handleColorChange', (e) => {
                this.setState({ color: e });
            }),
            m(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { folderId: t } = this.props,
                    { name: s, color: i } = this.state,
                    l = o.ZP.getGuildFolders().map((e) =>
                        e.folderId === t
                            ? {
                                  ...e,
                                  folderName: s,
                                  folderColor: i
                              }
                            : e
                    );
                (0, n.V1)(l), this.close();
            });
    }
}
let x = p;
