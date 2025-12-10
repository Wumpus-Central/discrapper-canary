n.d(t, { default: () => N }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(481060),
    c = n(166459),
    u = n(990169),
    d = n(476326),
    f = n(752305),
    p = n(703558),
    _ = n(358085),
    m = n(998502),
    h = n(981631),
    g = n(388032),
    E = n(374450);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 104,
    I = 16;
function T(e) {
    var t, n, a;
    let { file: s } = e,
        [l, c] = i.useState(),
        [d, f] = i.useState(!1),
        [p, _] = i.useState({}),
        m = i.useRef(null);
    i.useEffect(() => {
        if ((null != m.current && f(!1), null == s)) return;
        let e = URL.createObjectURL(s);
        return (
            c(e),
            () => {
                c(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [s]),
        i.useLayoutEffect(() => {
            let e = m.current;
            null != e &&
                (e.onload = () => {
                    let t = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    1 === t
                        ? _({
                              width: S,
                              height: S,
                          })
                        : t > 1
                          ? _({
                                width: S * t,
                                height: void 0,
                            })
                          : _({
                                width: void 0,
                                height: S / t,
                            }),
                        f(!0);
                });
        }, []);
    let h = (0, u.Z)(m),
        g = Math.max(16, (I + S - (null != (t = null == h ? void 0 : h.width) ? t : 0)) / 2);
    return (0, r.jsx)("img", {
        ref: m,
        src: l,
        className: o()(E.fileIcon, { [E.image]: !d }),
        "aria-hidden": !0,
        alt: "",
        style: {
            width: null != (n = p.width) ? n : "initial",
            maxHeight: null != (a = p.height) ? a : S,
            height: "unset",
            marginLeft: g,
            marginRight: g,
            marginTop: 0,
        },
    });
}
class C extends i.Component {
    render() {
        var e;
        return this.props.upload.item.platform !== d.ow.WEB
            ? null
            : this.props.upload.isImage
              ? (0, r.jsx)(T, { file: this.props.upload.item.file })
              : (0, r.jsx)("div", {
                    className: o()(E.fileIcon, { [E[null != (e = this.props.upload.classification) ? e : ""]]: !0 }),
                });
    }
}
class A extends i.Component {
    componentDidMount() {
        _.isPlatformEmbedded && m.ZP.focus();
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        var t, n, r, i;
        (null == (t = e.upload) ? void 0 : t.filename) !== (null == (n = this.props.upload) ? void 0 : n.filename) &&
            this.setState({ filename: null != (i = null == (r = this.props.upload) ? void 0 : r.filename) ? i : "" });
    }
    render() {
        let { upload: e, transitionState: t, disableSpoiler: n, onClose: i } = this.props,
            { hasSpoiler: a } = this.state;
        return (0, r.jsxs)(s.Modal, {
            transitionState: t,
            onClose: i,
            title: g.intl.string(g.t.Y8ujqr),
            actions: [
                {
                    variant: "secondary",
                    text: g.intl.string(g.t["ETE/oC"]),
                    onClick: this.cancel,
                },
                {
                    variant: "primary",
                    text: g.intl.string(g.t["TY+auE"]),
                    onClick: this.handleSubmit,
                },
            ],
            children: [
                (0, r.jsx)(C, { upload: e }),
                (0, r.jsxs)(l.Kqy, {
                    gap: 24,
                    children: [
                        (0, r.jsxs)(l.Kqy, {
                            gap: 16,
                            children: [
                                (0, r.jsx)(l.oil, {
                                    label: g.intl.string(g.t.ILJuBq),
                                    value: this.state.filename,
                                    onChange: (e) => this.setState({ filename: e }),
                                    onKeyDown: (e) => {
                                        if (e.which === h.yXg.ENTER) return this.handleSubmit();
                                    },
                                }),
                                e.isImage
                                    ? (0, r.jsx)(l.oil, {
                                          label: g.intl.string(g.t.eOB2eR),
                                          placeholder: g.intl.string(g.t.RNH1jn),
                                          value: this.state.description,
                                          onChange: (e) => this.setState({ description: e }),
                                          onKeyDown: (e) => {
                                              if (e.which === h.yXg.ENTER) return this.handleSubmit();
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
    constructor(e) {
        var t, n, r, i, a, o;
        super(e),
            b(this, "cancelAll", () => {
                c.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
            }),
            b(this, "cancel", () => {
                this.props.onClose();
            }),
            b(this, "handleTextChange", (e, t, n) => {
                this.setState({
                    textValue: t,
                    richValue: n,
                });
            }),
            b(this, "handleSubmit", () => {
                let { upload: e, onClose: t, onSubmit: n } = this.props,
                    { filename: r, description: i, hasSpoiler: a } = this.state;
                n({
                    upload: e,
                    name: r,
                    description: i,
                    spoiler: a,
                }),
                    t();
            });
        let s = e.ignoreDraft ? "" : p.Z.getDraft(this.props.channelId, e.draftType);
        this.state = v(y({}, (0, f.eK)(s)), {
            textFocused: !0,
            hasSpoiler: null != (i = null == (t = e.upload) ? void 0 : t.spoiler) && i,
            filename: null != (a = null == (n = e.upload) ? void 0 : n.filename) ? a : "",
            contentWarningProps: null,
            description: null != (o = null == (r = e.upload) ? void 0 : r.description) ? o : "",
        });
    }
}
function N(e) {
    return e.upload.item.platform !== d.ow.WEB ? null : (0, r.jsx)(A, v(y({}, e), { file: e.upload.item.file }));
}
