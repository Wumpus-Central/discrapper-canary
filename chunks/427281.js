"use strict";
n.d(t, { default: () => v }), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(397927),
    u = n(608299),
    c = n(724442),
    d = n(565150),
    _ = n(408018),
    f = n(31717),
    p = n(723702),
    h = n(837921),
    m = n(652215),
    g = n(985018),
    E = n(893221);
let A = 104,
    I = 16;
function T(e) {
    let { file: t } = e,
        [n, a] = i.useState(),
        [o, l] = i.useState(!1),
        [u, d] = i.useState({}),
        _ = i.useRef(null);
    i.useEffect(() => {
        if ((null != _.current && l(!1), null == t)) return;
        let e = URL.createObjectURL(t);
        return (
            a(e),
            () => {
                a(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [t]),
        i.useLayoutEffect(() => {
            let e = _.current;
            null != e &&
                (e.onload = () => {
                    let t = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    1 === t
                        ? d({ width: A, height: A })
                        : t > 1
                          ? d({ width: A * t, height: void 0 })
                          : d({ width: void 0, height: A / t }),
                        l(!0);
                });
        }, []);
    let f = (0, c.A)(_),
        p = Math.max(16, (I + A - (f?.width ?? 0)) / 2);
    return (0, r.jsx)("img", {
        ref: _,
        src: n,
        className: s()(E.fileIcon, { [E.image]: !o }),
        "aria-hidden": !0,
        alt: "",
        style: {
            width: u.width ?? "initial",
            maxHeight: u.height ?? A,
            height: "unset",
            marginLeft: p,
            marginRight: p,
            marginTop: 0,
        },
    });
}
class y extends i.Component {
    render() {
        return this.props.upload.item.platform !== d.xz.WEB
            ? null
            : this.props.upload.isImage
              ? (0, r.jsx)(T, { file: this.props.upload.item.file })
              : (0, r.jsx)("div", { className: s()(E.fileIcon, { [E[this.props.upload.classification ?? ""]]: !0 }) });
    }
}
class S extends i.Component {
    constructor(e) {
        super(e);
        const t = e.ignoreDraft ? "" : f.A.getDraft(this.props.channelId, e.draftType);
        this.state = {
            ...(0, _.ur)(t),
            textFocused: !0,
            hasSpoiler: e.upload?.spoiler ?? !1,
            filename: e.upload?.filename ?? "",
            contentWarningProps: null,
            description: e.upload?.description ?? "",
        };
    }
    componentDidMount() {
        p.isPlatformEmbedded && h.Ay.focus();
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
            { filename: r, description: i, hasSpoiler: a } = this.state;
        n({ upload: e, name: r, description: i, spoiler: a }), t();
    };
    render() {
        let { upload: e, transitionState: t, disableSpoiler: n, onClose: i } = this.props,
            { hasSpoiler: a } = this.state;
        return (0, r.jsxs)(o.Modal, {
            transitionState: t,
            onClose: i,
            title: g.intl.string(g.t.Y8ujqr),
            actions: [
                { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: this.cancel },
                { variant: "primary", text: g.intl.string(g.t["TY+auE"]), onClick: this.handleSubmit },
            ],
            children: [
                (0, r.jsx)(y, { upload: e }),
                (0, r.jsxs)(l.BJc, {
                    gap: 24,
                    children: [
                        (0, r.jsxs)(l.BJc, {
                            gap: 16,
                            children: [
                                (0, r.jsx)(l.ksK, {
                                    label: g.intl.string(g.t.ILJuBq),
                                    value: this.state.filename,
                                    onChange: (e) => this.setState({ filename: e }),
                                    onKeyDown: (e) => {
                                        if (e.which === m.Ks6.ENTER) return this.handleSubmit();
                                    },
                                }),
                                e.isImage
                                    ? (0, r.jsx)(l.ksK, {
                                          label: g.intl.string(g.t.eOB2eR),
                                          placeholder: g.intl.string(g.t.RNH1jn),
                                          value: this.state.description,
                                          onChange: (e) => this.setState({ description: e }),
                                          onKeyDown: (e) => {
                                              if (e.which === m.Ks6.ENTER) return this.handleSubmit();
                                          },
                                      })
                                    : null,
                            ],
                        }),
                        !0 !== n &&
                            (0, r.jsx)(l.Checkbox, {
                                checked: a,
                                onChange: (e) => this.setState({ hasSpoiler: e }),
                                label: g.intl.string(g.t["gsI+xC"]),
                            }),
                    ],
                }),
            ],
        });
    }
}
function v(e) {
    return e.upload.item.platform !== d.xz.WEB ? null : (0, r.jsx)(S, { ...e, file: e.upload.item.file });
}
