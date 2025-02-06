n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    d = n(388905),
    u = n(362762),
    h = n(409059),
    _ = n(659900),
    g = n(962220),
    p = n(473855),
    m = n(306453),
    f = n(929809),
    x = n(108427),
    E = n(390885),
    I = n(314897),
    v = n(896797),
    N = n(954824),
    b = n(781428),
    C = n(163671),
    T = n(423527),
    S = n(981631),
    A = n(58346),
    Z = n(701476),
    j = n(630724),
    R = n(436620),
    L = n(388032),
    y = n(640936),
    O = n(232186);
c.ZP.initialize();
class P extends r.PureComponent {
    componentDidMount() {
        (0, x.e)('guildTemplate'), R.KO || N.Z.launch('discord://' + S.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && g.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return R.KO
            ? (0, i.jsx)(d.zx, {
                  className: O.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, i.jsx)(d.v6, { className: O.marginTop40 });
    }
    renderSpinner(e) {
        return (0, i.jsxs)(d.ZP, {
            children: [(0, i.jsx)(d.Dx, { children: e }), (0, i.jsx)(d.Hh, {})]
        });
    }
    renderInvalidGuildTemplate() {
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Ee, {
                    src: n(167969),
                    className: O.marginBottom8
                }),
                (0, i.jsx)(d.Dx, {
                    className: a()(O.marginTop8, O.marginBottom8),
                    children: L.intl.string(L.t.C7ZRNz)
                }),
                (0, i.jsx)(d.DK, { children: L.intl.string(L.t.A6MwXF) }),
                this.renderButton(L.intl.string(L.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Dx, {
                    className: O.marginBottom8,
                    children: L.intl.string(L.t.csrAMD)
                }),
                (0, i.jsx)(d.DK, { children: L.intl.string(L.t['m1+IBg']) }),
                this.renderButton(L.intl.string(L.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (s()(null != e, 'guild template must not be null'), e.state === A.Rj.RESOLVING)
            ? (0, i.jsx)(d.ZP, {
                  className: y.authBox,
                  children: (0, i.jsx)(m.Z, { guildTemplate: e })
              })
            : (0, i.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, i.jsxs)(d.ZP, {
            children: [(0, i.jsx)(d.Dx, { children: L.intl.string(L.t.fOc4go) }), this.renderButton(L.intl.string(L.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: l } = this.props;
        if (null == e) return this.renderSpinner(L.intl.string(L.t.ZTNur6));
        if (t === S.kEZ.OPEN) return this.renderAppOpened();
        if (t === S.kEZ.OPENING) return this.renderSpinner(L.intl.string(L.t['Z+hCVV']));
        switch (e.state) {
            case A.Rj.RESOLVING:
                return this.renderSpinner(L.intl.string(L.t['Z+hCVV']));
            case A.Rj.RESOLVED:
                if (n || !R.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, i.jsx)(b.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: l
                    });
                return (0, i.jsx)(T.Z, {
                    guildTemplate: e,
                    transitionTo: r,
                    location: l,
                    onRegister: () => {
                        (0, f.c)(Z.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.Z.flowStart(j.MK.ORGANIC_GUILD_TEMPLATES, j.EW.NUF_STARTED);
                    }
                });
            case A.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleContinue'),
            (n = () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
function D(e) {
    let t = {
        guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([u.Z], () => u.Z.getState(e.code)),
        authenticated: (0, c.e7)([I.default], () => I.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([v.Z], () => v.Z.defaultRoute)
    };
    return (0, i.jsx)(P, {
        ...e,
        ...t
    });
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, _.Z)(t, !1);
    E.Z.flowStep(j.MK.ORGANIC_GUILD_TEMPLATES, j.X2.GUILD_CREATE);
    let l = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Dx, {
                className: y.header,
                children: L.intl.string(L.t.UNFvtL)
            }),
            n,
            (0, i.jsx)(d.zx, {
                className: y.createButton,
                onClick: r,
                children: L.intl.string(L.t.xr59t7)
            })
        ]
    });
    return (0, i.jsx)(C.Z, {
        className: y.authBox,
        children: () => [
            (0, i.jsx)(p.Z, { guildTemplate: t }, 'template'),
            (0, i.jsx)(
                'div',
                {
                    className: y.formContainer,
                    children: l
                },
                'contents'
            )
        ]
    });
}
