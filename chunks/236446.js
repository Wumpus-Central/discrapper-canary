n.d(t, { Z: () => D }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(388905),
    d = n(362762),
    h = n(409059),
    p = n(659900),
    m = n(962220),
    g = n(473855),
    f = n(306453),
    _ = n(929809),
    x = n(108427),
    E = n(390885),
    b = n(314897),
    I = n(896797),
    v = n(954824),
    O = n(781428),
    N = n(163671),
    j = n(423527),
    S = n(981631),
    y = n(260539),
    C = n(701476),
    T = n(630724),
    A = n(436620),
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
        (0, x.e)('guildTemplate'), A.KO || v.Z.launch('discord://' + S.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return A.KO
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
                    className: a()(R.marginTop8, R.marginBottom8),
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
        return (s()(null != e, 'guild template must not be null'), e.state === y.Rj.RESOLVING)
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
            case y.Rj.RESOLVING:
                return this.renderSpinner(P.intl.string(P.t['Z+hCVV']));
            case y.Rj.RESOLVED:
                if (n || !A.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(O.Z, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: l
                    });
                return (0, r.jsx)(j.Z, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, _.c)(C.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.Z.flowStart(T.MK.ORGANIC_GUILD_TEMPLATES, T.EW.NUF_STARTED);
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
        defaultRoute: (0, c.e7)([I.Z], () => I.Z.defaultRoute)
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
        { form: n, handleSubmit: i } = (0, p.Z)(t, !1);
    E.Z.flowStep(T.MK.ORGANIC_GUILD_TEMPLATES, T.X2.GUILD_CREATE);
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
    return (0, r.jsx)(N.Z, {
        className: Z.authBox,
        children: () => [
            (0, r.jsx)(g.Z, { guildTemplate: t }, 'template'),
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
