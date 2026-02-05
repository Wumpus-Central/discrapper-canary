s.d(e, { default: () => g });
var l = s(627968),
    a = s(64700),
    r = s(732955),
    n = s(397927),
    i = s(817281),
    o = s(268218),
    h = s(711014),
    d = s(652215),
    p = s(114329),
    c = s(985018),
    u = s(48835);
let m = (0, o.Fe)({ createPromise: () => s.e("66147").then(s.bind(s, 48736)), webpackId: 48736 });
class C extends a.PureComponent {
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
            a = h.Ay.getGuildFolders().map((t) => (t.folderId === e ? { ...t, folderName: s, folderColor: l } : t));
        (0, i.um)(a), this.close();
    };
    render() {
        let { transitionState: t, onClose: e } = this.props,
            { name: s, color: a } = this.state;
        return (0, l.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, l.jsx)(r.aFV, {
                title: c.intl.string(c.t.Dx7im5),
                actions: [{ variant: "primary", text: c.intl.string(c.t.i4jeWR), type: "submit" }],
                transitionState: t,
                onClose: e,
                children: (0, l.jsxs)(n.BJc, {
                    gap: 16,
                    children: [
                        (0, l.jsx)(n.ksK, {
                            label: c.intl.string(c.t.tGRbjA),
                            maxLength: d.F05,
                            value: s,
                            onChange: this.handleNameChange,
                            placeholder: c.intl.string(c.t.xV9hVh),
                            autoFocus: !0,
                        }),
                        (0, l.jsx)(n.D0$, {
                            label: c.intl.string(c.t.xpurRF),
                            children: (0, l.jsx)(m, {
                                className: u.E,
                                defaultColor: p.DO,
                                colors: d._tK,
                                value: null != a ? a : p.DO,
                                onChange: this.handleColorChange,
                            }),
                        }),
                    ],
                }),
            }),
        });
    }
}
let g = C;
