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
    E = n(108427),
    I = n(390885),
    x = n(314897),
    C = n(896797),
    N = n(954824),
    v = n(781428),
    T = n(163671),
    S = n(423527),
    A = n(981631),
    b = n(58346),
    Z = n(701476),
    R = n(630724),
    L = n(436620),
    j = n(388032),
    O = n(640936),
    P = n(232186);
c.ZP.initialize();
class y extends r.PureComponent {
    componentDidMount() {
        (0, E.e)('guildTemplate'), L.KO || N.Z.launch('discord://' + A.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && g.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return L.KO
            ? (0, i.jsx)(d.zx, {
                  className: P.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, i.jsx)(d.v6, { className: P.marginTop40 });
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
                    className: P.marginBottom8
                }),
                (0, i.jsx)(d.Dx, {
                    className: a()(P.marginTop8, P.marginBottom8),
                    children: j.intl.string(j.t.C7ZRNz)
                }),
                (0, i.jsx)(d.DK, { children: j.intl.string(j.t.A6MwXF) }),
                this.renderButton(j.intl.string(j.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Dx, {
                    className: P.marginBottom8,
                    children: j.intl.string(j.t.csrAMD)
                }),
                (0, i.jsx)(d.DK, { children: j.intl.string(j.t['m1+IBg']) }),
                this.renderButton(j.intl.string(j.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (s()(null != e, 'guild template must not be null'), e.state === b.Rj.RESOLVING)
            ? (0, i.jsx)(d.ZP, {
                  className: O.authBox,
                  children: (0, i.jsx)(m.Z, { guildTemplate: e })
              })
            : (0, i.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, i.jsxs)(d.ZP, {
            children: [(0, i.jsx)(d.Dx, { children: j.intl.string(j.t.fOc4go) }), this.renderButton(j.intl.string(j.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: l } = this.props;
        if (null == e) return this.renderSpinner(j.intl.string(j.t.ZTNur6));
        if (t === A.kEZ.OPEN) return this.renderAppOpened();
        if (t === A.kEZ.OPENING) return this.renderSpinner(j.intl.string(j.t['Z+hCVV']));
        switch (e.state) {
            case b.Rj.RESOLVING:
                return this.renderSpinner(j.intl.string(j.t['Z+hCVV']));
            case b.Rj.RESOLVED:
                if (n || !L.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, i.jsx)(v.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: l
                    });
                return (0, i.jsx)(S.Z, {
                    guildTemplate: e,
                    transitionTo: r,
                    location: l,
                    onRegister: () => {
                        (0, f.c)(Z.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), I.Z.flowStart(R.MK.ORGANIC_GUILD_TEMPLATES, R.EW.NUF_STARTED);
                    }
                });
            case b.Rj.EXPIRED:
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
        authenticated: (0, c.e7)([x.default], () => x.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([C.Z], () => C.Z.defaultRoute)
    };
    return (0, i.jsx)(y, {
        ...e,
        ...t
    });
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, _.Z)(t, !1);
    I.Z.flowStep(R.MK.ORGANIC_GUILD_TEMPLATES, R.X2.GUILD_CREATE);
    let l = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Dx, {
                className: O.header,
                children: j.intl.string(j.t.UNFvtL)
            }),
            n,
            (0, i.jsx)(d.zx, {
                className: O.createButton,
                onClick: r,
                children: j.intl.string(j.t.xr59t7)
            })
        ]
    });
    return (0, i.jsx)(T.Z, {
        className: O.authBox,
        children: () => [
            (0, i.jsx)(p.Z, { guildTemplate: t }, 'template'),
            (0, i.jsx)(
                'div',
                {
                    className: O.formContainer,
                    children: l
                },
                'contents'
            )
        ]
    });
}
