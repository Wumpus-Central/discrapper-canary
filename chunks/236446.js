n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    u = n(481060),
    d = n(388905),
    h = n(362762),
    f = n(409059),
    g = n(659900),
    m = n(962220),
    p = n(473855),
    x = n(306453),
    _ = n(929809),
    E = n(108427),
    v = n(390885),
    b = n(314897),
    j = n(896797),
    I = n(954824),
    N = n(781428),
    y = n(163671),
    S = n(423527),
    C = n(981631),
    T = n(260539),
    O = n(701476),
    A = n(630724),
    Z = n(436620),
    P = n(388032),
    R = n(572378),
    L = n(478411);
function D(e, t, n) {
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
class k extends i.PureComponent {
    componentDidMount() {
        (0, E.e)("guildTemplate"),
            Z.KO || I.Z.launch("discord://" + C.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return Z.KO
            ? (0, r.jsx)("div", {
                  className: L.marginTop40,
                  children: (0, r.jsx)(u.Button, {
                      text: e,
                      fullWidth: !0,
                      onClick: t,
                  }),
              })
            : (0, r.jsx)(d.v6, { className: L.marginTop40 });
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
                    className: L.marginBottom8,
                }),
                (0, r.jsx)(d.Dx, {
                    className: a()(L.marginTop8, L.marginBottom8),
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
                    className: L.marginBottom8,
                    children: P.intl.string(P.t.csrAMJ),
                }),
                (0, r.jsx)(d.DK, { children: P.intl.string(P.t["m1+IBn"]) }),
                this.renderButton(P.intl.string(P.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, "guild template must not be null"), e.state === T.Rj.RESOLVING)
            ? (0, r.jsx)(d.ZP, {
                  className: R.authBox,
                  children: (0, r.jsx)(x.Z, { guildTemplate: e }),
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
        if (t === C.kEZ.OPEN) return this.renderAppOpened();
        if (t === C.kEZ.OPENING) return this.renderSpinner(P.intl.string(P.t["Z+hCVU"]));
        switch (e.state) {
            case T.Rj.RESOLVING:
                return this.renderSpinner(P.intl.string(P.t["Z+hCVU"]));
            case T.Rj.RESOLVED:
                if (n || !Z.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(N.Z, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: s,
                    });
                return (0, r.jsx)(S.Z, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: s,
                    onRegister: () => {
                        (0, _.c)(O.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            v.Z.flowStart(A.MK.ORGANIC_GUILD_TEMPLATES, A.EW.NUF_STARTED);
                    },
                });
            case T.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            D(this, "handleContinue", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            });
    }
}
function w(e) {
    let t = {
        guildTemplate: (0, c.e7)([f.Z], () => f.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([h.Z], () => h.Z.getState(e.code)),
        authenticated: (0, c.e7)([b.default], () => b.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([j.Z], () => j.Z.defaultRoute),
    };
    return (0, r.jsx)(
        k,
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
                        D(e, t, n[t]);
                    });
            }
            return e;
        })({}, e, t),
    );
}
function M(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, g.Z)(t, !1);
    v.Z.flowStep(A.MK.ORGANIC_GUILD_TEMPLATES, A.X2.GUILD_CREATE);
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
    return (0, r.jsx)(y.Z, {
        className: R.authBox,
        children: () => [
            (0, r.jsx)(p.Z, { guildTemplate: t }, "template"),
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
