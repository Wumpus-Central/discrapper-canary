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
    m = n(962220),
    g = n(473855),
    p = n(306453),
    f = n(929809),
    E = n(108427),
    x = n(390885),
    I = n(314897),
    C = n(896797),
    v = n(954824),
    N = n(781428),
    S = n(163671),
    T = n(423527),
    A = n(981631),
    b = n(58346),
    R = n(701476),
    Z = n(630724),
    O = n(436620),
    j = n(388032),
    L = n(471158),
    y = n(814632);
c.ZP.initialize();
class P extends r.PureComponent {
    componentDidMount() {
        (0, E.e)('guildTemplate'), O.KO || v.Z.launch('discord://' + A.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return O.KO
            ? (0, i.jsx)(d.zx, {
                  className: y.marginTop40,
                  onClick: t,
                  children: e
              })
            : (0, i.jsx)(d.v6, { className: y.marginTop40 });
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
                    className: y.marginBottom8
                }),
                (0, i.jsx)(d.Dx, {
                    className: a()(y.marginTop8, y.marginBottom8),
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
                    className: y.marginBottom8,
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
                  className: L.authBox,
                  children: (0, i.jsx)(p.Z, { guildTemplate: e })
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
                if (n || !O.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, i.jsx)(N.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: l
                    });
                return (0, i.jsx)(T.Z, {
                    guildTemplate: e,
                    transitionTo: r,
                    location: l,
                    onRegister: () => {
                        (0, f.c)(R.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), x.Z.flowStart(Z.MK.ORGANIC_GUILD_TEMPLATES, Z.EW.NUF_STARTED);
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
        authenticated: (0, c.e7)([I.default], () => I.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([C.Z], () => C.Z.defaultRoute)
    };
    return (0, i.jsx)(P, {
        ...e,
        ...t
    });
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, _.Z)(t, !1);
    x.Z.flowStep(Z.MK.ORGANIC_GUILD_TEMPLATES, Z.X2.GUILD_CREATE);
    let l = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Dx, {
                className: L.header,
                children: j.intl.string(j.t.UNFvtL)
            }),
            n,
            (0, i.jsx)(d.zx, {
                className: L.createButton,
                onClick: r,
                children: j.intl.string(j.t.xr59t7)
            })
        ]
    });
    return (0, i.jsx)(S.Z, {
        className: L.authBox,
        children: () => [
            (0, i.jsx)(g.Z, { guildTemplate: t }, 'template'),
            (0, i.jsx)(
                'div',
                {
                    className: L.formContainer,
                    children: l
                },
                'contents'
            )
        ]
    });
}
