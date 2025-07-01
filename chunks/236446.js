(n.d(t, { Z: () => D }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    u = n(388905),
    d = n(362762),
    h = n(409059),
    p = n(659900),
    g = n(962220),
    m = n(473855),
    f = n(306453),
    _ = n(929809),
    x = n(108427),
    b = n(390885),
    E = n(314897),
    v = n(896797),
    I = n(954824),
    j = n(781428),
    O = n(163671),
    y = n(423527),
    S = n(981631),
    N = n(260539),
    C = n(701476),
    A = n(630724),
    T = n(436620),
    P = n(388032),
    Z = n(183170),
    R = n(20493);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
c.ZP.initialize();
class L extends i.PureComponent {
    componentDidMount() {
        ((0, x.e)('guildTemplate'), T.KO || I.Z.launch('discord://' + S.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0));
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && g.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return T.KO
            ? (0, r.jsx)(u.zx, {
                  className: R.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, r.jsx)(u.v6, { className: R.marginTop40 });
    }
    renderSpinner(e) {
        return (0, r.jsxs)(u.ZP, {
            children: [(0, r.jsx)(u.Dx, { children: e }), (0, r.jsx)(u.Hh, {})]
        });
    }
    renderInvalidGuildTemplate() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: n(167969),
                    className: R.marginBottom8
                }),
                (0, r.jsx)(u.Dx, {
                    className: s()(R.marginTop8, R.marginBottom8),
                    children: P.intl.string(P.t.C7ZRNz)
                }),
                (0, r.jsx)(u.DK, { children: P.intl.string(P.t.A6MwXF) }),
                this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Dx, {
                    className: R.marginBottom8,
                    children: P.intl.string(P.t.csrAMD)
                }),
                (0, r.jsx)(u.DK, { children: P.intl.string(P.t['m1+IBg']) }),
                this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, 'guild template must not be null'), e.state === N.Rj.RESOLVING)
            ? (0, r.jsx)(u.ZP, {
                  className: Z.authBox,
                  children: (0, r.jsx)(f.Z, { guildTemplate: e })
              })
            : (0, r.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, r.jsxs)(u.ZP, {
            children: [(0, r.jsx)(u.Dx, { children: P.intl.string(P.t.fOc4go) }), this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(P.intl.string(P.t.ZTNur6));
        if (t === S.kEZ.OPEN) return this.renderAppOpened();
        if (t === S.kEZ.OPENING) return this.renderSpinner(P.intl.string(P.t['Z+hCVV']));
        switch (e.state) {
            case N.Rj.RESOLVING:
                return this.renderSpinner(P.intl.string(P.t['Z+hCVV']));
            case N.Rj.RESOLVED:
                if (n || !T.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(j.Z, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: l
                    });
                return (0, r.jsx)(y.Z, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        ((0, _.c)(C.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), b.Z.flowStart(A.MK.ORGANIC_GUILD_TEMPLATES, A.EW.NUF_STARTED));
                    }
                });
            case N.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        (super(...e),
            w(this, 'handleContinue', () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }));
    }
}
function D(e) {
    let t = {
        guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
        authenticated: (0, c.e7)([E.default], () => E.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([v.Z], () => v.Z.defaultRoute)
    };
    return (0, r.jsx)(
        L,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        w(e, t, n[t]);
                    }));
            }
            return e;
        })({}, e, t)
    );
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, p.Z)(t, !1);
    b.Z.flowStep(A.MK.ORGANIC_GUILD_TEMPLATES, A.X2.GUILD_CREATE);
    let l = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Dx, {
                className: Z.header,
                children: P.intl.string(P.t.UNFvtL)
            }),
            n,
            (0, r.jsx)(u.zx, {
                className: Z.createButton,
                onClick: i,
                children: P.intl.string(P.t.xr59t7)
            })
        ]
    });
    return (0, r.jsx)(O.Z, {
        className: Z.authBox,
        children: () => [
            (0, r.jsx)(m.Z, { guildTemplate: t }, 'template'),
            (0, r.jsx)(
                'div',
                {
                    className: Z.formContainer,
                    children: l
                },
                'contents'
            )
        ]
    });
}
