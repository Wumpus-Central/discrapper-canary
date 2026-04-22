"use strict";
n.d(t, { default: () => T }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(397927),
    u = n(608299),
    c = n(565150),
    d = n(408018),
    _ = n(31717),
    f = n(723702),
    p = n(837921),
    h = n(650583),
    m = n(985018),
    E = n(910162);
function g(e) {
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
        (0, r.jsx)("img", { src: n, className: E.imageFilePreviewImg, "aria-hidden": !0, alt: "" })
    );
}
class A extends i.Component {
    render() {
        return this.props.upload.item.platform !== c.xz.WEB
            ? null
            : this.props.upload.isImage
              ? (0, r.jsx)(g, { file: this.props.upload.item.file })
              : (0, r.jsx)("div", { className: a()(E.fileIcon, { [E[this.props.upload.classification ?? ""]]: !0 }) });
    }
}
class I extends i.Component {
    constructor(e) {
        super(e);
        const t = e.ignoreDraft ? "" : _.A.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, d.ur)(t),
            textFocused: !0,
            hasSpoiler: e.upload?.spoiler ?? !1,
            filename: e.upload?.filename ?? "",
            contentWarningProps: null,
            description: e.upload?.description ?? "",
        };
    }
    componentDidMount() {
        f.isPlatformEmbedded && p.Ay.focus();
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
            { filename: r, description: i, hasSpoiler: s } = this.state;
        n({ upload: e, name: r, description: i, spoiler: s }), t();
    };
    render() {
        let { upload: e, transitionState: t, disableSpoiler: n, onClose: i } = this.props,
            { hasSpoiler: s } = this.state;
        return (0, r.jsx)(o.Modal, {
            transitionState: t,
            onClose: i,
            title: m.intl.string(m.t.Y8ujqr),
            actions: [
                { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: this.cancel },
                { variant: "primary", text: m.intl.string(m.t["TY+auE"]), onClick: this.handleSubmit },
            ],
            children: (0, r.jsxs)(l.BJc, {
                gap: 24,
                children: [
                    (0, r.jsxs)(l.BJc, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(A, { upload: e }),
                            (0, r.jsx)(l.ksK, {
                                label: m.intl.string(m.t.ILJuBq),
                                value: this.state.filename,
                                onChange: (e) => this.setState({ filename: e }),
                                onKeyDown: (e) => {
                                    if (e.key === h.dh.ENTER) return this.handleSubmit();
                                },
                            }),
                            e.isImage
                                ? (0, r.jsx)(l.ksK, {
                                      label: m.intl.string(m.t.eOB2eR),
                                      placeholder: m.intl.string(m.t.RNH1jn),
                                      value: this.state.description,
                                      onChange: (e) => this.setState({ description: e }),
                                      onKeyDown: (e) => {
                                          if (e.key === h.dh.ENTER) return this.handleSubmit();
                                      },
                                  })
                                : null,
                        ],
                    }),
                    !0 !== n &&
                        (0, r.jsx)(l.Checkbox, {
                            checked: s,
                            onChange: (e) => this.setState({ hasSpoiler: e }),
                            label: m.intl.string(m.t["gsI+xC"]),
                        }),
                ],
            }),
        });
    }
}
function T(e) {
    return e.upload.item.platform !== c.xz.WEB ? null : (0, r.jsx)(I, { ...e, file: e.upload.item.file });
}
