n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(388905),
    h = n(362762),
    g = n(409059),
    p = n(659900),
    m = n(962220),
    f = n(473855),
    _ = n(306453),
    x = n(929809),
    E = n(108427),
    v = n(390885),
    b = n(314897),
    j = n(896797),
    I = n(954824),
    y = n(781428),
    O = n(163671),
    S = n(423527),
    N = n(981631),
    C = n(260539),
    A = n(701476),
    T = n(630724),
    Z = n(436620),
    P = n(388032),
    R = n(160033),
    w = n(197571);
function L(e, t, n) {
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
c.ZP.initialize();
class D extends i.PureComponent {
    componentDidMount() {
        (0, E.e)("guildTemplate"),
            Z.KO || I.Z.launch("discord://" + N.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return Z.KO
            ? (0, r.jsx)("div", {
                  className: w.marginTop40,
                  children: (0, r.jsx)(u.Button, {
                      text: e,
                      fullWidth: !0,
                      onClick: t,
                  }),
              })
            : (0, r.jsx)(d.v6, { className: w.marginTop40 });
    }
    renderSpinner(e) {
        return (0, r.jsxs)(d.ZP, {
            children: [(0, r.jsx)(d.Dx, { children: e }), (0, r.jsx)(d.Hh, {})],
        });
    }
    renderInvalidGuildTemplate() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(167969),
                    className: w.marginBottom8,
                }),
                (0, r.jsx)(d.Dx, {
                    className: l()(w.marginTop8, w.marginBottom8),
                    children: P.intl.string(P.t.C7ZRNw),
                }),
                (0, r.jsx)(d.DK, { children: P.intl.string(P.t.A6MwXE) }),
                this.renderButton(P.intl.string(P.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Dx, {
                    className: w.marginBottom8,
                    children: P.intl.string(P.t.csrAMJ),
                }),
                (0, r.jsx)(d.DK, { children: P.intl.string(P.t["m1+IBn"]) }),
                this.renderButton(P.intl.string(P.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, "guild template must not be null"), e.state === C.Rj.RESOLVING)
            ? (0, r.jsx)(d.ZP, {
                  className: R.authBox,
                  children: (0, r.jsx)(_.Z, { guildTemplate: e }),
              })
            : (0, r.jsx)(M, { guildTemplate: e });
    }
    renderContinue() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Dx, { children: P.intl.string(P.t.fOc4gn) }),
                this.renderButton(P.intl.string(P.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (null == e) return this.renderSpinner(P.intl.string(P.t.ZTNur7));
        if (t === N.kEZ.OPEN) return this.renderAppOpened();
        if (t === N.kEZ.OPENING) return this.renderSpinner(P.intl.string(P.t["Z+hCVU"]));
        switch (e.state) {
            case C.Rj.RESOLVING:
                return this.renderSpinner(P.intl.string(P.t["Z+hCVU"]));
            case C.Rj.RESOLVED:
                if (n || !Z.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(y.Z, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: s,
                    });
                return (0, r.jsx)(S.Z, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: s,
                    onRegister: () => {
                        (0, x.c)(A.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            v.Z.flowStart(T.MK.ORGANIC_GUILD_TEMPLATES, T.EW.NUF_STARTED);
                    },
                });
            case C.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            L(this, "handleContinue", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            });
    }
}
function k(e) {
    let t = {
        guildTemplate: (0, c.e7)([g.Z], () => g.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([h.Z], () => h.Z.getState(e.code)),
        authenticated: (0, c.e7)([b.default], () => b.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([j.Z], () => j.Z.defaultRoute),
    };
    return (0, r.jsx)(
        D,
        (function (e) {
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
                        L(e, t, n[t]);
                    });
            }
            return e;
        })({}, e, t),
    );
}
function M(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, p.Z)(t, !1);
    v.Z.flowStep(T.MK.ORGANIC_GUILD_TEMPLATES, T.X2.GUILD_CREATE);
    let s = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Dx, {
                className: R.header,
                children: P.intl.string(P.t.UNFvtM),
            }),
            n,
            (0, r.jsx)("div", {
                className: R.createButton,
                children: (0, r.jsx)(u.Button, {
                    text: P.intl.string(P.t.xr59t7),
                    fullWidth: !0,
                    onClick: i,
                }),
            }),
        ],
    });
    return (0, r.jsx)(O.Z, {
        className: R.authBox,
        children: () => [
            (0, r.jsx)(f.Z, { guildTemplate: t }, "template"),
            (0, r.jsx)(
                "div",
                {
                    className: R.formContainer,
                    children: s,
                },
                "contents",
            ),
        ],
    });
}
