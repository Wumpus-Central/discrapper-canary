n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(512722),
    a = n.n(s),
    c = n(442837),
    u = n(388905),
    d = n(362762),
    h = n(409059),
    f = n(659900),
    p = n(962220),
    g = n(473855),
    m = n(306453),
    _ = n(929809),
    x = n(108427),
    v = n(390885),
    E = n(314897),
    b = n(896797),
    j = n(954824),
    I = n(781428),
    N = n(163671),
    O = n(423527),
    y = n(981631),
    S = n(260539),
    C = n(701476),
    Z = n(630724),
    A = n(436620),
    T = n(388032),
    P = n(160033),
    R = n(197571);
function w(e, t, n) {
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
class L extends i.PureComponent {
    componentDidMount() {
        (0, x.e)("guildTemplate"),
            A.KO || j.Z.launch("discord://" + y.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && p.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return A.KO
            ? (0, r.jsx)(u.zx, {
                  className: R.marginTop40,
                  onClick: t,
                  children: e,
              })
            : (0, r.jsx)(u.v6, { className: R.marginTop40 });
    }
    renderSpinner(e) {
        return (0, r.jsxs)(u.ZP, {
            children: [(0, r.jsx)(u.Dx, { children: e }), (0, r.jsx)(u.Hh, {})],
        });
    }
    renderInvalidGuildTemplate() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: n(167969),
                    className: R.marginBottom8,
                }),
                (0, r.jsx)(u.Dx, {
                    className: o()(R.marginTop8, R.marginBottom8),
                    children: T.intl.string(T.t.C7ZRNz),
                }),
                (0, r.jsx)(u.DK, { children: T.intl.string(T.t.A6MwXF) }),
                this.renderButton(T.intl.string(T.t.fIv16O), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Dx, {
                    className: R.marginBottom8,
                    children: T.intl.string(T.t.csrAMD),
                }),
                (0, r.jsx)(u.DK, { children: T.intl.string(T.t["m1+IBg"]) }),
                this.renderButton(T.intl.string(T.t.fIv16O), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (a()(null != e, "guild template must not be null"), e.state === S.Rj.RESOLVING)
            ? (0, r.jsx)(u.ZP, {
                  className: P.authBox,
                  children: (0, r.jsx)(m.Z, { guildTemplate: e }),
              })
            : (0, r.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Dx, { children: T.intl.string(T.t.fOc4go) }),
                this.renderButton(T.intl.string(T.t.fIv16O), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(T.intl.string(T.t.ZTNur6));
        if (t === y.kEZ.OPEN) return this.renderAppOpened();
        if (t === y.kEZ.OPENING) return this.renderSpinner(T.intl.string(T.t["Z+hCVV"]));
        switch (e.state) {
            case S.Rj.RESOLVING:
                return this.renderSpinner(T.intl.string(T.t["Z+hCVV"]));
            case S.Rj.RESOLVED:
                if (n || !A.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(I.Z, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: l,
                    });
                return (0, r.jsx)(O.Z, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, _.c)(C.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            v.Z.flowStart(Z.MK.ORGANIC_GUILD_TEMPLATES, Z.EW.NUF_STARTED);
                    },
                });
            case S.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            w(this, "handleContinue", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            });
    }
}
function D(e) {
    let t = {
        guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
        authenticated: (0, c.e7)([E.default], () => E.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([b.Z], () => b.Z.defaultRoute),
    };
    return (0, r.jsx)(
        L,
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
                        w(e, t, n[t]);
                    });
            }
            return e;
        })({}, e, t),
    );
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, f.Z)(t, !1);
    v.Z.flowStep(Z.MK.ORGANIC_GUILD_TEMPLATES, Z.X2.GUILD_CREATE);
    let l = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Dx, {
                className: P.header,
                children: T.intl.string(T.t.UNFvtL),
            }),
            n,
            (0, r.jsx)(u.zx, {
                className: P.createButton,
                onClick: i,
                children: T.intl.string(T.t.xr59t7),
            }),
        ],
    });
    return (0, r.jsx)(N.Z, {
        className: P.authBox,
        children: () => [
            (0, r.jsx)(g.Z, { guildTemplate: t }, "template"),
            (0, r.jsx)(
                "div",
                {
                    className: P.formContainer,
                    children: l,
                },
                "contents",
            ),
        ],
    });
}
