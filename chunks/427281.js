"use strict";
n.d(t, { default: () => N }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(189213),
    l = n(331322),
    d = n(292666),
    _ = n(150934),
    u = n(608299),
    c = n(565150),
    E = n(408018),
    h = n(31717),
    m = n(723702),
    f = n(19575),
    g = n(650583),
    p = n(985018),
    A = n(910162);
function I(e) {
    let { file: t } = e,
        [n, s] = r.useState();
    return (
        r.useEffect(() => {
            if (null == t) return void s(void 0);
            let e = URL.createObjectURL(t);
            return (
                s(e),
                () => {
                    s(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, i.jsx)("img", { src: n, className: A.imageFilePreviewImg, "aria-hidden": !0, alt: "" })
    );
}
class T extends r.Component {
    render() {
        return this.props.upload.item.platform !== c.xz.WEB
            ? null
            : this.props.upload.isImage
              ? (0, i.jsx)(I, { file: this.props.upload.item.file })
              : (0, i.jsx)("div", { className: a()(A.fileIcon, { [A[this.props.upload.classification ?? ""]]: !0 }) });
    }
}
class S extends r.Component {
    constructor(e) {
        super(e);
        const t = e.ignoreDraft ? "" : h.A.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, E.ur)(t),
            textFocused: !0,
            hasSpoiler: e.upload?.spoiler ?? !1,
            filename: e.upload?.filename ?? "",
            contentWarningProps: null,
            description: e.upload?.description ?? "",
        };
    }
    componentDidMount() {
        m.isPlatformEmbedded && f.Ay.focus();
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
    handleTextChange = (e, t, n) => {
        this.setState({ textValue: t, richValue: n });
    };
    handleSubmit = () => {
        let { upload: e, onClose: t, onSubmit: n } = this.props,
            { filename: i, description: r, hasSpoiler: s } = this.state;
        n({ upload: e, name: i, description: r, spoiler: s }), t();
    };
    render() {
        let { upload: e, transitionState: t, disableSpoiler: n, onClose: r } = this.props,
            { hasSpoiler: s } = this.state;
        return (0, i.jsx)(o.Modal, {
            transitionState: t,
            onClose: r,
            title: p.intl.string(p.t.Y8ujqr),
            actions: [
                { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: this.cancel },
                { variant: "primary", text: p.intl.string(p.t["TY+auE"]), onClick: this.handleSubmit },
            ],
            children: (0, i.jsxs)(l.B, {
                gap: 24,
                children: [
                    (0, i.jsxs)(l.B, {
                        gap: 16,
                        children: [
                            (0, i.jsx)(T, { upload: e }),
                            (0, i.jsx)(d.k, {
                                label: p.intl.string(p.t.ILJuBq),
                                value: this.state.filename,
                                onChange: (e) => this.setState({ filename: e }),
                                onKeyDown: (e) => {
                                    if (e.key === g.dh.ENTER) return this.handleSubmit();
                                },
                            }),
                            e.isImage
                                ? (0, i.jsx)(d.k, {
                                      label: p.intl.string(p.t.eOB2eR),
                                      placeholder: p.intl.string(p.t.RNH1jn),
                                      value: this.state.description,
                                      onChange: (e) => this.setState({ description: e }),
                                      onKeyDown: (e) => {
                                          if (e.key === g.dh.ENTER) return this.handleSubmit();
                                      },
                                  })
                                : null,
                        ],
                    }),
                    !0 !== n &&
                        (0, i.jsx)(_.S, {
                            checked: s,
                            onChange: (e) => this.setState({ hasSpoiler: e }),
                            label: p.intl.string(p.t["gsI+xC"]),
                        }),
                ],
            }),
        });
    }
}
function N(e) {
    return e.upload.item.platform !== c.xz.WEB ? null : (0, i.jsx)(S, { ...e, file: e.upload.item.file });
}
