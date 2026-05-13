s.d(t, { default: () => b });
var l = s(627968),
    a = s(64700),
    n = s(189213),
    i = s(331322),
    r = s(292666),
    o = s(452027),
    h = s(817281),
    d = s(268218),
    p = s(711014),
    u = s(652215),
    c = s(114329),
    m = s(375708),
    C = s(818486);
let g = (0, d.Fe)({
    createPromise: () =>
        Promise.all([s.e("55998"), s.e("65719"), s.e("3930"), s.e("3663"), s.e("66147")]).then(s.bind(s, 48736)),
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
            { name: s, color: l } = this.state,
            a = p.Ay.getGuildFolders().map((e) => (e.folderId === t ? { ...e, folderName: s, folderColor: l } : e));
        (0, h.um)(a), this.close();
    };
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { name: s, color: a } = this.state;
        return (0, l.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, l.jsx)(n.Modal, {
                title: m.intl.string(m.t.Dx7im5),
                actions: [{ variant: "primary", text: m.intl.string(m.t.i4jeWR), type: "submit" }],
                transitionState: e,
                onClose: t,
                children: (0, l.jsxs)(i.B, {
                    gap: 16,
                    children: [
                        (0, l.jsx)(r.k, {
                            label: m.intl.string(m.t.tGRbjA),
                            maxLength: u.F05,
                            value: s,
                            onChange: this.handleNameChange,
                            placeholder: m.intl.string(m.t.xV9hVh),
                            autoFocus: !0,
                        }),
                        (0, l.jsx)(o.D, {
                            label: m.intl.string(m.t.xpurRF),
                            children: (0, l.jsx)(g, {
                                className: C.E,
                                defaultColor: c.DO,
                                colors: u._tK,
                                value: null != a ? a : c.DO,
                                onChange: this.handleColorChange,
                            }),
                        }),
                    ],
                }),
            }),
        });
    }
}
let b = x;
