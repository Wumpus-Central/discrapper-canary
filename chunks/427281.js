"use strict";
n.d(t, { default: () => y }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(189213),
    l = n(331322),
    u = n(292666),
    c = n(150934),
    d = n(608299),
    _ = n(565150),
    f = n(408018),
    p = n(31717),
    h = n(723702),
    E = n(837921),
    m = n(650583),
    g = n(985018),
    A = n(910162);
function I(e) {
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
        (0, r.jsx)("img", { src: n, className: A.imageFilePreviewImg, "aria-hidden": !0, alt: "" })
    );
}
class T extends i.Component {
    render() {
        return this.props.upload.item.platform !== _.xz.WEB
            ? null
            : this.props.upload.isImage
              ? (0, r.jsx)(I, { file: this.props.upload.item.file })
              : (0, r.jsx)("div", { className: a()(A.fileIcon, { [A[this.props.upload.classification ?? ""]]: !0 }) });
    }
}
class S extends i.Component {
    constructor(e) {
        super(e);
        const t = e.ignoreDraft ? "" : p.A.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, f.ur)(t),
            textFocused: !0,
            hasSpoiler: e.upload?.spoiler ?? !1,
            filename: e.upload?.filename ?? "",
            contentWarningProps: null,
            description: e.upload?.description ?? "",
        };
    }
    componentDidMount() {
        h.isPlatformEmbedded && E.Ay.focus();
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
            { filename: r, description: i, hasSpoiler: s } = this.state;
        n({ upload: e, name: r, description: i, spoiler: s }), t();
    };
    render() {
        let { upload: e, transitionState: t, disableSpoiler: n, onClose: i } = this.props,
            { hasSpoiler: s } = this.state;
        return (0, r.jsx)(o.Modal, {
            transitionState: t,
            onClose: i,
            title: g.intl.string(g.t.Y8ujqr),
            actions: [
                { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: this.cancel },
                { variant: "primary", text: g.intl.string(g.t["TY+auE"]), onClick: this.handleSubmit },
            ],
            children: (0, r.jsxs)(l.B, {
                gap: 24,
                children: [
                    (0, r.jsxs)(l.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(T, { upload: e }),
                            (0, r.jsx)(u.k, {
                                label: g.intl.string(g.t.ILJuBq),
                                value: this.state.filename,
                                onChange: (e) => this.setState({ filename: e }),
                                onKeyDown: (e) => {
                                    if (e.key === m.dh.ENTER) return this.handleSubmit();
                                },
                            }),
                            e.isImage
                                ? (0, r.jsx)(u.k, {
                                      label: g.intl.string(g.t.eOB2eR),
                                      placeholder: g.intl.string(g.t.RNH1jn),
                                      value: this.state.description,
                                      onChange: (e) => this.setState({ description: e }),
                                      onKeyDown: (e) => {
                                          if (e.key === m.dh.ENTER) return this.handleSubmit();
                                      },
                                  })
                                : null,
                        ],
                    }),
                    !0 !== n &&
                        (0, r.jsx)(c.S, {
                            checked: s,
                            onChange: (e) => this.setState({ hasSpoiler: e }),
                            label: g.intl.string(g.t["gsI+xC"]),
                        }),
                ],
            }),
        });
    }
}
function y(e) {
    return e.upload.item.platform !== _.xz.WEB ? null : (0, r.jsx)(S, { ...e, file: e.upload.item.file });
}
