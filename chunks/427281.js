n.d(t, {
    default: () => N,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(397927),
    c = n(608299),
    u = n(724442),
    d = n(565150),
    f = n(408018),
    p = n(31717),
    _ = n(723702),
    h = n(837921),
    m = n(652215),
    g = n(985018),
    E = n(893221);

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

function A(e, t) {
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
let v = 104,
    S = 16;

function I(e) {
    var t, n, a;
    let { file: o } = e,
        [l, c] = i.useState(),
        [d, f] = i.useState(!1),
        [p, _] = i.useState({}),
        h = i.useRef(null);
    i.useEffect(() => {
        if ((null != h.current && f(!1), null == o)) return;
        let e = URL.createObjectURL(o);
        return (
            c(e),
            () => {
                c(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [o]),
        i.useLayoutEffect(() => {
            let e = h.current;
            null != e &&
                (e.onload = () => {
                    let t = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
                    1 === t
                        ? _({
                              width: v,
                              height: v,
                          })
                        : t > 1
                          ? _({
                                width: v * t,
                                height: void 0,
                            })
                          : _({
                                width: void 0,
                                height: v / t,
                            }),
                        f(!0);
                });
        }, []);
    let m = (0, u.A)(h),
        g = Math.max(16, (S + v - (null != (t = null == m ? void 0 : m.width) ? t : 0)) / 2);
    return (0, r.jsx)("img", {
        ref: h,
        src: l,
        className: s()(E.fileIcon, {
            [E.image]: !d,
        }),
        "aria-hidden": !0,
        alt: "",
        style: {
            width: null != (n = p.width) ? n : "initial",
            maxHeight: null != (a = p.height) ? a : v,
            height: "unset",
            marginLeft: g,
            marginRight: g,
            marginTop: 0,
        },
    });
}
class T extends i.Component {
    render() {
        var e;
        return this.props.upload.item.platform !== d.xz.WEB
            ? null
            : this.props.upload.isImage
              ? (0, r.jsx)(I, {
                    file: this.props.upload.item.file,
                })
              : (0, r.jsx)("div", {
                    className: s()(E.fileIcon, {
                        [E[null != (e = this.props.upload.classification) ? e : ""]]: !0,
                    }),
                });
    }
}
class C extends i.Component {
    componentDidMount() {
        _.isPlatformEmbedded && h.Ay.focus();
    }
    shouldComponentUpdate(e) {
        return null != e.upload;
    }
    componentDidUpdate(e) {
        var t, n, r, i;
        (null == (t = e.upload) ? void 0 : t.filename) !== (null == (n = this.props.upload) ? void 0 : n.filename) &&
            this.setState({
                filename: null != (r = null == (i = this.props.upload) ? void 0 : i.filename) ? r : "",
            });
    }
    render() {
        let { upload: e, transitionState: t, disableSpoiler: n, onClose: i } = this.props,
            { hasSpoiler: a } = this.state;
        return (0, r.jsxs)(o.Modal, {
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
                (0, r.jsx)(T, {
                    upload: e,
                }),
                (0, r.jsxs)(l.BJc, {
                    gap: 24,
                    children: [
                        (0, r.jsxs)(l.BJc, {
                            gap: 16,
                            children: [
                                (0, r.jsx)(l.ksK, {
                                    label: g.intl.string(g.t.ILJuBq),
                                    value: this.state.filename,
                                    onChange: (e) =>
                                        this.setState({
                                            filename: e,
                                        }),
                                    onKeyDown: (e) => {
                                        if (e.which === m.Ks6.ENTER) return this.handleSubmit();
                                    },
                                }),
                                e.isImage
                                    ? (0, r.jsx)(l.ksK, {
                                          label: g.intl.string(g.t.eOB2eR),
                                          placeholder: g.intl.string(g.t.RNH1jn),
                                          value: this.state.description,
                                          onChange: (e) =>
                                              this.setState({
                                                  description: e,
                                              }),
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
                                onChange: (e) =>
                                    this.setState({
                                        hasSpoiler: e,
                                    }),
                                label: g.intl.string(g.t["gsI+xC"]),
                            }),
                    ],
                }),
            ],
        });
    }
    constructor(e) {
        var t, n, r, i, a, s;
        super(e),
            b(this, "cancelAll", () => {
                c.A.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
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
        const o = e.ignoreDraft ? "" : p.A.getDraft(this.props.channelId, e.draftType);
        this.state = A(y({}, (0, f.ur)(o)), {
            textFocused: !0,
            hasSpoiler: null != (t = null == (i = e.upload) ? void 0 : i.spoiler) && t,
            filename: null != (n = null == (a = e.upload) ? void 0 : a.filename) ? n : "",
            contentWarningProps: null,
            description: null != (r = null == (s = e.upload) ? void 0 : s.description) ? r : "",
        });
    }
}

function N(e) {
    return e.upload.item.platform !== d.xz.WEB
        ? null
        : (0, r.jsx)(
              C,
              A(y({}, e), {
                  file: e.upload.item.file,
              }),
          );
}
