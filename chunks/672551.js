l.d(t, { default: () => b });
var s = l(477900),
    a = l(582128),
    n = l(189213),
    r = l(331322),
    i = l(95477),
    o = l(452027),
    h = l(817281),
    d = l(268218),
    u = l(711014),
    p = l(652215),
    c = l(114329),
    m = l(375708),
    C = l(668125);
let g = (0, d.Fe)({
    createPromise: () =>
        Promise.all([l.e("269714"), l.e("19385"), l.e("203930"), l.e("903663"), l.e("466147")]).then(l.bind(l, 48736)),
    webpackId: 48736,
});
class x extends a.PureComponent {
    state = { name: this.props.folderName ?? "", color: this.props.folderColor };
    close = () => {
        this.props.onClose();
    };
    handleNameChange = (e) => {
        this.setState({ name: e });
    };
    handleColorChange = (e) => {
        this.setState({ color: e });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let { folderId: t } = this.props,
            { name: l, color: s } = this.state,
            a = u.Ay.getGuildFolders().map((e) =>
                e.folderId === t ? { ...e, folderName: l, folderColor: (0, c.rk)(s) } : e,
            );
        ((0, h.um)(a), this.close());
    };
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { name: l, color: a } = this.state;
        return (0, s.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, s.jsx)(n.a, {
                title: m.intl.string(m.t.Dx7im5),
                actions: [{ variant: "primary", text: m.intl.string(m.t.i4jeWR), type: "submit" }],
                transitionState: e,
                onClose: t,
                children: (0, s.jsxs)(r.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(i.k, {
                            label: m.intl.string(m.t.tGRbjA),
                            maxLength: p.F05,
                            value: l,
                            onChange: this.handleNameChange,
                            placeholder: m.intl.string(m.t.xV9hVh),
                            autoFocus: !0,
                        }),
                        (0, s.jsx)("div", {
                            className: C.r,
                            children: (0, s.jsx)(o.D, {
                                label: m.intl.string(m.t.xpurRF),
                                children: (0, s.jsx)(g, {
                                    className: C.E,
                                    defaultColor: c.DO,
                                    colors: p._tK,
                                    value: null != a ? a : c.DO,
                                    onChange: this.handleColorChange,
                                    allowBlackCustomColor: !0,
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    }
}
let b = x;
