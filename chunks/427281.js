s.d(t, { default: () => k }), s(323874), s(14289), s(35956);
var i = s(627968),
    n = s(64700),
    a = s(503698),
    l = s.n(a),
    o = s(189213),
    r = s(331322),
    p = s(292666),
    d = s(150934),
    u = s(608299),
    h = s(565150),
    c = s(408018),
    m = s(31717),
    f = s(723702),
    g = s(19575),
    x = s(650583),
    C = s(375708),
    j = s(910162);
function v(e) {
    let { file: t } = e,
        [s, a] = n.useState();
    return (
        n.useEffect(() => {
            if (null == t) return void a(void 0);
            let e = URL.createObjectURL(t);
            return (
                a(e),
                () => {
                    a(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, i.jsx)("img", { src: s, className: j.imageFilePreviewImg, "aria-hidden": !0, alt: "" })
    );
}
class S extends n.Component {
    render() {
        return this.props.upload.item.platform !== h.xz.WEB
            ? null
            : this.props.upload.isImage
              ? (0, i.jsx)(v, { file: this.props.upload.item.file })
              : (0, i.jsx)("div", { className: l()(j.fileIcon, { [j[this.props.upload.classification ?? ""]]: !0 }) });
    }
}
class b extends n.Component {
    constructor(e) {
        super(e);
        const t = e.ignoreDraft ? "" : m.A.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, c.ur)(t),
            textFocused: !0,
            hasSpoiler: e.upload?.spoiler ?? !1,
            filename: e.upload?.filename ?? "",
            contentWarningProps: null,
            description: e.upload?.description ?? "",
        };
    }
    componentDidMount() {
        f.isPlatformEmbedded && g.Ay.focus();
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        e.upload?.filename !== this.props.upload?.filename &&
            this.setState({ filename: this.props.upload?.filename ?? "" });
    }
    cancelAll = () => {
        u.A.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
    };
    cancel = () => {
        this.props.onClose();
    };
    handleTextChange = (e, t, s) => {
        this.setState({ textValue: t, richValue: s });
    };
    handleSubmit = () => {
        let { upload: e, onClose: t, onSubmit: s } = this.props,
            { filename: i, description: n, hasSpoiler: a } = this.state;
        s({ upload: e, name: i, description: n, spoiler: a }), t();
    };
    render() {
        let { upload: e, transitionState: t, disableSpoiler: s, onClose: n } = this.props,
            { hasSpoiler: a } = this.state;
        return (0, i.jsx)(o.Modal, {
            transitionState: t,
            onClose: n,
            title: C.intl.string(C.t.Y8ujqr),
            actions: [
                { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: this.cancel },
                { variant: "primary", text: C.intl.string(C.t["TY+auE"]), onClick: this.handleSubmit },
            ],
            children: (0, i.jsxs)(r.B, {
                gap: 24,
                children: [
                    (0, i.jsxs)(r.B, {
                        gap: 16,
                        children: [
                            (0, i.jsx)(S, { upload: e }),
                            (0, i.jsx)(p.k, {
                                label: C.intl.string(C.t.ILJuBq),
                                value: this.state.filename,
                                onChange: (e) => this.setState({ filename: e }),
                                onKeyDown: (e) => {
                                    e.key === x.dh.ENTER && (e.preventDefault(), this.handleSubmit());
                                },
                            }),
                            e.isImage
                                ? (0, i.jsx)(p.k, {
                                      label: C.intl.string(C.t.eOB2eR),
                                      placeholder: C.intl.string(C.t.RNH1jn),
                                      value: this.state.description,
                                      onChange: (e) => this.setState({ description: e }),
                                      onKeyDown: (e) => {
                                          e.key === x.dh.ENTER && (e.preventDefault(), this.handleSubmit());
                                      },
                                  })
                                : null,
                        ],
                    }),
                    !0 !== s &&
                        (0, i.jsx)(d.S, {
                            checked: a,
                            onChange: (e) => this.setState({ hasSpoiler: e }),
                            label: C.intl.string(C.t["gsI+xC"]),
                        }),
                ],
            }),
        });
    }
}
function k(e) {
    return e.upload.item.platform !== h.xz.WEB ? null : (0, i.jsx)(b, { ...e, file: e.upload.item.file });
}
