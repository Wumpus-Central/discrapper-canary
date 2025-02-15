n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
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
    x = n(108427),
    E = n(390885),
    I = n(314897),
    v = n(896797),
    C = n(954824),
    N = n(781428),
    b = n(163671),
    S = n(423527),
    T = n(981631),
    A = n(58346),
    R = n(701476),
    Z = n(630724),
    j = n(436620),
    O = n(388032),
    L = n(249079),
    y = n(483938);
c.ZP.initialize();
class P extends r.PureComponent {
    componentDidMount() {
        (0, x.e)('guildTemplate'), j.KO || C.Z.launch('discord://' + T.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.Z.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return j.KO
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
                    className: l()(y.marginTop8, y.marginBottom8),
                    children: O.intl.string(O.t.C7ZRNz)
                }),
                (0, i.jsx)(d.DK, { children: O.intl.string(O.t.A6MwXF) }),
                this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Dx, {
                    className: y.marginBottom8,
                    children: O.intl.string(O.t.csrAMD)
                }),
                (0, i.jsx)(d.DK, { children: O.intl.string(O.t['m1+IBg']) }),
                this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (s()(null != e, 'guild template must not be null'), e.state === A.Rj.RESOLVING)
            ? (0, i.jsx)(d.ZP, {
                  className: L.authBox,
                  children: (0, i.jsx)(p.Z, { guildTemplate: e })
              })
            : (0, i.jsx)(D, { guildTemplate: e });
    }
    renderContinue() {
        return (0, i.jsxs)(d.ZP, {
            children: [(0, i.jsx)(d.Dx, { children: O.intl.string(O.t.fOc4go) }), this.renderButton(O.intl.string(O.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: a } = this.props;
        if (null == e) return this.renderSpinner(O.intl.string(O.t.ZTNur6));
        if (t === T.kEZ.OPEN) return this.renderAppOpened();
        if (t === T.kEZ.OPENING) return this.renderSpinner(O.intl.string(O.t['Z+hCVV']));
        switch (e.state) {
            case A.Rj.RESOLVING:
                return this.renderSpinner(O.intl.string(O.t['Z+hCVV']));
            case A.Rj.RESOLVED:
                if (n || !j.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, i.jsx)(N.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: a
                    });
                return (0, i.jsx)(S.Z, {
                    guildTemplate: e,
                    transitionTo: r,
                    location: a,
                    onRegister: () => {
                        (0, f.c)(R.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.Z.flowStart(Z.MK.ORGANIC_GUILD_TEMPLATES, Z.EW.NUF_STARTED);
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
function k(e) {
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
function D(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, _.Z)(t, !1);
    E.Z.flowStep(Z.MK.ORGANIC_GUILD_TEMPLATES, Z.X2.GUILD_CREATE);
    let a = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Dx, {
                className: L.header,
                children: O.intl.string(O.t.UNFvtL)
            }),
            n,
            (0, i.jsx)(d.zx, {
                className: L.createButton,
                onClick: r,
                children: O.intl.string(O.t.xr59t7)
            })
        ]
    });
    return (0, i.jsx)(b.Z, {
        className: L.authBox,
        children: () => [
            (0, i.jsx)(g.Z, { guildTemplate: t }, 'template'),
            (0, i.jsx)(
                'div',
                {
                    className: L.formContainer,
                    children: a
                },
                'contents'
            )
        ]
    });
}
