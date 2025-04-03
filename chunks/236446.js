n.d(t, { Z: () => D }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(512722),
    s = n.n(l),
    c = n(442837),
    u = n(388905),
    d = n(362762),
    p = n(409059),
    g = n(659900),
    h = n(962220),
    f = n(473855),
    m = n(306453),
    _ = n(929809),
    b = n(108427),
    x = n(390885),
    N = n(314897),
    v = n(896797),
    E = n(954824),
    I = n(781428),
    j = n(163671),
    S = n(423527),
    O = n(981631),
    C = n(58346),
    y = n(701476),
    T = n(630724),
    P = n(436620),
    A = n(388032),
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
        (0, b.e)('guildTemplate'), P.KO || E.Z.launch('discord://' + O.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && h.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return P.KO
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
                    children: A.NW.string(A.t.C7ZRNz)
                }),
                (0, r.jsx)(u.DK, { children: A.NW.string(A.t.A6MwXF) }),
                this.renderButton(A.NW.string(A.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Dx, {
                    className: R.marginBottom8,
                    children: A.NW.string(A.t.csrAMD)
                }),
                (0, r.jsx)(u.DK, { children: A.NW.string(A.t['m1+IBg']) }),
                this.renderButton(A.NW.string(A.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (s()(null != e, 'guild template must not be null'), e.state === C.Rj.RESOLVING)
            ? (0, r.jsx)(u.ZP, {
                  className: Z.authBox,
                  children: (0, r.jsx)(m.Z, { guildTemplate: e })
              })
            : (0, r.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, r.jsxs)(u.ZP, {
            children: [(0, r.jsx)(u.Dx, { children: A.NW.string(A.t.fOc4go) }), this.renderButton(A.NW.string(A.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: o } = this.props;
        if (null == e) return this.renderSpinner(A.NW.string(A.t.ZTNur6));
        if (t === O.kEZ.OPEN) return this.renderAppOpened();
        if (t === O.kEZ.OPENING) return this.renderSpinner(A.NW.string(A.t['Z+hCVV']));
        switch (e.state) {
            case C.Rj.RESOLVING:
                return this.renderSpinner(A.NW.string(A.t['Z+hCVV']));
            case C.Rj.RESOLVED:
                if (n || !P.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(I.Z, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: o
                    });
                return (0, r.jsx)(S.Z, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: o,
                    onRegister: () => {
                        (0, _.c)(y.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), x.Z.flowStart(T.MK.ORGANIC_GUILD_TEMPLATES, T.EW.NUF_STARTED);
                    }
                });
            case C.Rj.EXPIRED:
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
        guildTemplate: (0, c.e7)([p.Z], () => p.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([d.Z], () => d.Z.getState(e.code)),
        authenticated: (0, c.e7)([N.default], () => N.default.isAuthenticated()),
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
    x.Z.flowStep(T.MK.ORGANIC_GUILD_TEMPLATES, T.X2.GUILD_CREATE);
    let o = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Dx, {
                className: Z.header,
                children: A.NW.string(A.t.UNFvtL)
            }),
            n,
            (0, r.jsx)(u.zx, {
                className: Z.createButton,
                onClick: i,
                children: A.NW.string(A.t.xr59t7)
            })
        ]
    });
    return (0, r.jsx)(j.Z, {
        className: Z.authBox,
        children: () => [
            (0, r.jsx)(f.Z, { guildTemplate: t }, 'template'),
            (0, r.jsx)(
                'div',
                {
                    className: Z.formContainer,
                    children: o
                },
                'contents'
            )
        ]
    });
}
