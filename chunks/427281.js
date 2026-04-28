"use strict";
n.d(t, { default: () => v }), n(323874), n(14289), n(35956);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(189213),
    o = n(331322),
    c = n(292666),
    u = n(150934),
    d = n(608299),
    h = n(565150),
    m = n(408018),
    p = n(31717),
    f = n(723702),
    g = n(19575),
    _ = n(650583),
    x = n(985018),
    C = n(910162);
function A(e) {
    let { file: t } = e,
        [n, s] = i.useState();
    return (
        i.useEffect(() => {
            if (null == t) return void s(void 0);
            let e = URL.createObjectURL(t);
            return (
                s(e),
                () => {
                    s(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, l.jsx)("img", { src: n, className: C.imageFilePreviewImg, "aria-hidden": !0, alt: "" })
    );
}
class E extends i.Component {
    render() {
        return this.props.upload.item.platform !== h.xz.WEB
            ? null
            : this.props.upload.isImage
              ? (0, l.jsx)(A, { file: this.props.upload.item.file })
              : (0, l.jsx)("div", { className: a()(C.fileIcon, { [C[this.props.upload.classification ?? ""]]: !0 }) });
    }
}
class I extends i.Component {
    constructor(e) {
        super(e);
        const t = e.ignoreDraft ? "" : p.A.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, m.ur)(t),
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
        d.A.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
    };
    cancel = () => {
        this.props.onClose();
    };
    handleTextChange = (e, t, n) => {
        this.setState({ textValue: t, richValue: n });
    };
    handleSubmit = () => {
        let { upload: e, onClose: t, onSubmit: n } = this.props,
            { filename: l, description: i, hasSpoiler: s } = this.state;
        n({ upload: e, name: l, description: i, spoiler: s }), t();
    };
    render() {
        let { upload: e, transitionState: t, disableSpoiler: n, onClose: i } = this.props,
            { hasSpoiler: s } = this.state;
        return (0, l.jsx)(r.Modal, {
            transitionState: t,
            onClose: i,
            title: x.intl.string(x.t.Y8ujqr),
            actions: [
                { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: this.cancel },
                { variant: "primary", text: x.intl.string(x.t["TY+auE"]), onClick: this.handleSubmit },
            ],
            children: (0, l.jsxs)(o.B, {
                gap: 24,
                children: [
                    (0, l.jsxs)(o.B, {
                        gap: 16,
                        children: [
                            (0, l.jsx)(E, { upload: e }),
                            (0, l.jsx)(c.k, {
                                label: x.intl.string(x.t.ILJuBq),
                                value: this.state.filename,
                                onChange: (e) => this.setState({ filename: e }),
                                onKeyDown: (e) => {
                                    e.key === _.dh.ENTER && (e.preventDefault(), this.handleSubmit());
                                },
                            }),
                            e.isImage
                                ? (0, l.jsx)(c.k, {
                                      label: x.intl.string(x.t.eOB2eR),
                                      placeholder: x.intl.string(x.t.RNH1jn),
                                      value: this.state.description,
                                      onChange: (e) => this.setState({ description: e }),
                                      onKeyDown: (e) => {
                                          e.key === _.dh.ENTER && (e.preventDefault(), this.handleSubmit());
                                      },
                                  })
                                : null,
                        ],
                    }),
                    !0 !== n &&
                        (0, l.jsx)(u.S, {
                            checked: s,
                            onChange: (e) => this.setState({ hasSpoiler: e }),
                            label: x.intl.string(x.t["gsI+xC"]),
                        }),
                ],
            }),
        });
    }
}
function v(e) {
    return e.upload.item.platform !== h.xz.WEB ? null : (0, l.jsx)(I, { ...e, file: e.upload.item.file });
}
