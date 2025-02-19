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
    h = n(409059),
    p = n(659900),
    _ = n(962220),
    g = n(473855),
    f = n(306453),
    m = n(929809),
    b = n(108427),
    N = n(390885),
    x = n(314897),
    v = n(896797),
    E = n(954824),
    I = n(781428),
    O = n(163671),
    C = n(423527),
    S = n(981631),
    j = n(58346),
    y = n(701476),
    T = n(630724),
    A = n(436620),
    R = n(388032),
    P = n(952431),
    Z = n(455812);
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
        (0, b.e)('guildTemplate'), A.KO || E.Z.launch('discord://' + S.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && _.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return A.KO
            ? (0, r.jsx)(u.zx, {
                  className: Z.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, r.jsx)(u.v6, { className: Z.marginTop40 });
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
                    className: Z.marginBottom8
                }),
                (0, r.jsx)(u.Dx, {
                    className: a()(Z.marginTop8, Z.marginBottom8),
                    children: R.NW.string(R.t.C7ZRNz)
                }),
                (0, r.jsx)(u.DK, { children: R.NW.string(R.t.A6MwXF) }),
                this.renderButton(R.NW.string(R.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Dx, {
                    className: Z.marginBottom8,
                    children: R.NW.string(R.t.csrAMD)
                }),
                (0, r.jsx)(u.DK, { children: R.NW.string(R.t['m1+IBg']) }),
                this.renderButton(R.NW.string(R.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (s()(null != e, 'guild template must not be null'), e.state === j.Rj.RESOLVING)
            ? (0, r.jsx)(u.ZP, {
                  className: P.authBox,
                  children: (0, r.jsx)(f.Z, { guildTemplate: e })
              })
            : (0, r.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, r.jsxs)(u.ZP, {
            children: [(0, r.jsx)(u.Dx, { children: R.NW.string(R.t.fOc4go) }), this.renderButton(R.NW.string(R.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: o } = this.props;
        if (null == e) return this.renderSpinner(R.NW.string(R.t.ZTNur6));
        if (t === S.kEZ.OPEN) return this.renderAppOpened();
        if (t === S.kEZ.OPENING) return this.renderSpinner(R.NW.string(R.t['Z+hCVV']));
        switch (e.state) {
            case j.Rj.RESOLVING:
                return this.renderSpinner(R.NW.string(R.t['Z+hCVV']));
            case j.Rj.RESOLVED:
                if (n || !A.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(I.Z, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: o
                    });
                return (0, r.jsx)(C.Z, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: o,
                    onRegister: () => {
                        (0, m.c)(y.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), N.Z.flowStart(T.MK.ORGANIC_GUILD_TEMPLATES, T.EW.NUF_STARTED);
                    }
                });
            case j.Rj.EXPIRED:
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
        authenticated: (0, c.e7)([x.default], () => x.default.isAuthenticated()),
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
        { form: n, handleSubmit: i } = (0, p.Z)(t, !1);
    N.Z.flowStep(T.MK.ORGANIC_GUILD_TEMPLATES, T.X2.GUILD_CREATE);
    let o = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Dx, {
                className: P.header,
                children: R.NW.string(R.t.UNFvtL)
            }),
            n,
            (0, r.jsx)(u.zx, {
                className: P.createButton,
                onClick: i,
                children: R.NW.string(R.t.xr59t7)
            })
        ]
    });
    return (0, r.jsx)(O.Z, {
        className: P.authBox,
        children: () => [
            (0, r.jsx)(g.Z, { guildTemplate: t }, 'template'),
            (0, r.jsx)(
                'div',
                {
                    className: P.formContainer,
                    children: o
                },
                'contents'
            )
        ]
    });
}
