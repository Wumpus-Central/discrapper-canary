s.d(e, { default: () => b });
var l = s(627968),
    a = s(64700),
    r = s(189213),
    n = s(331322),
    o = s(292666),
    i = s(452027),
    h = s(817281),
    d = s(268218),
    p = s(711014),
    c = s(652215),
    u = s(114329),
    m = s(985018),
    C = s(818486);
let g = (0, d.Fe)({ createPromise: () => s.e("66147").then(s.bind(s, 48736)), webpackId: 48736 });
class x extends a.PureComponent {
    state = { name: this.props.folderName ?? "", color: this.props.folderColor };
    close = () => {
        this.props.onClose();
    };
    handleNameChange = (t) => {
        this.setState({ name: t });
    };
    handleColorChange = (t) => {
        this.setState({ color: t });
    };
    handleSubmit = (t) => {
        t.preventDefault();
        let { folderId: e } = this.props,
            { name: s, color: l } = this.state,
            a = p.Ay.getGuildFolders().map((t) => (t.folderId === e ? { ...t, folderName: s, folderColor: l } : t));
        (0, h.um)(a), this.close();
    };
    render() {
        let { transitionState: t, onClose: e } = this.props,
            { name: s, color: a } = this.state;
        return (0, l.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, l.jsx)(r.Modal, {
                title: m.intl.string(m.t.Dx7im5),
                actions: [{ variant: "primary", text: m.intl.string(m.t.i4jeWR), type: "submit" }],
                transitionState: t,
                onClose: e,
                children: (0, l.jsxs)(n.B, {
                    gap: 16,
                    children: [
                        (0, l.jsx)(o.k, {
                            label: m.intl.string(m.t.tGRbjA),
                            maxLength: c.F05,
                            value: s,
                            onChange: this.handleNameChange,
                            placeholder: m.intl.string(m.t.xV9hVh),
                            autoFocus: !0,
                        }),
                        (0, l.jsx)(i.D, {
                            label: m.intl.string(m.t.xpurRF),
                            children: (0, l.jsx)(g, {
                                className: C.E,
                                defaultColor: u.DO,
                                colors: c._tK,
                                value: null != a ? a : u.DO,
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
