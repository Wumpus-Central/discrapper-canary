n.d(t, { Z: () => D }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(442837),
    u = n(388905),
    d = n(362762),
    h = n(409059),
    g = n(659900),
    p = n(962220),
    f = n(473855),
    m = n(306453),
    _ = n(929809),
    x = n(108427),
    E = n(390885),
    b = n(314897),
    v = n(896797),
    j = n(954824),
    I = n(781428),
    O = n(163671),
    S = n(423527),
    N = n(981631),
    y = n(260539),
    C = n(701476),
    P = n(630724),
    Z = n(436620),
    A = n(388032),
    T = n(183170),
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
        (0, x.e)('guildTemplate'), Z.KO || j.Z.launch('discord://' + N.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && p.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return Z.KO
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
                    children: A.intl.string(A.t.C7ZRNz)
                }),
                (0, r.jsx)(u.DK, { children: A.intl.string(A.t.A6MwXF) }),
                this.renderButton(A.intl.string(A.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Dx, {
                    className: R.marginBottom8,
                    children: A.intl.string(A.t.csrAMD)
                }),
                (0, r.jsx)(u.DK, { children: A.intl.string(A.t['m1+IBg']) }),
                this.renderButton(A.intl.string(A.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (a()(null != e, 'guild template must not be null'), e.state === y.Rj.RESOLVING)
            ? (0, r.jsx)(u.ZP, {
                  className: T.authBox,
                  children: (0, r.jsx)(m.Z, { guildTemplate: e })
              })
            : (0, r.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, r.jsxs)(u.ZP, {
            children: [(0, r.jsx)(u.Dx, { children: A.intl.string(A.t.fOc4go) }), this.renderButton(A.intl.string(A.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(A.intl.string(A.t.ZTNur6));
        if (t === N.kEZ.OPEN) return this.renderAppOpened();
        if (t === N.kEZ.OPENING) return this.renderSpinner(A.intl.string(A.t['Z+hCVV']));
        switch (e.state) {
            case y.Rj.RESOLVING:
                return this.renderSpinner(A.intl.string(A.t['Z+hCVV']));
            case y.Rj.RESOLVED:
                if (n || !Z.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(I.Z, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: l
                    });
                return (0, r.jsx)(S.Z, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, _.c)(C.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.Z.flowStart(P.MK.ORGANIC_GUILD_TEMPLATES, P.EW.NUF_STARTED);
                    }
                });
            case y.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            w(this, 'handleContinue', () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            });
    }
}
function D(e) {
    let t = {
        guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
        authenticated: (0, c.e7)([b.default], () => b.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([v.Z], () => v.Z.defaultRoute)
    };
    return (0, r.jsx)(
        L,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        w(e, t, n[t]);
                    });
            }
            return e;
        })({}, e, t)
    );
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, g.Z)(t, !1);
    E.Z.flowStep(P.MK.ORGANIC_GUILD_TEMPLATES, P.X2.GUILD_CREATE);
    let l = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Dx, {
                className: T.header,
                children: A.intl.string(A.t.UNFvtL)
            }),
            n,
            (0, r.jsx)(u.zx, {
                className: T.createButton,
                onClick: i,
                children: A.intl.string(A.t.xr59t7)
            })
        ]
    });
    return (0, r.jsx)(O.Z, {
        className: T.authBox,
        children: () => [
            (0, r.jsx)(f.Z, { guildTemplate: t }, 'template'),
            (0, r.jsx)(
                'div',
                {
                    className: T.formContainer,
                    children: l
                },
                'contents'
            )
        ]
    });
}
