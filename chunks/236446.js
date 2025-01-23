n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(512722),
    a = n.n(o),
    c = n(442837),
    d = n(388905),
    u = n(362762),
    h = n(409059),
    g = n(659900),
    f = n(962220),
    m = n(473855),
    p = n(306453),
    x = n(929809),
    _ = n(108427),
    E = n(390885),
    I = n(314897),
    N = n(896797),
    v = n(954824),
    C = n(781428),
    b = n(163671),
    T = n(423527),
    Z = n(981631),
    A = n(58346),
    S = n(701476),
    j = n(630724),
    R = n(436620),
    P = n(388032),
    L = n(640936),
    O = n(232186);
c.ZP.initialize();
class y extends r.PureComponent {
    componentDidMount() {
        (0, _.e)('guildTemplate'), !R.KO && v.Z.launch('discord://' + Z.Z5c.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && f.Z.resolveGuildTemplate(this.props.code);
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
                    className: l()(O.marginTop8, O.marginBottom8),
                    children: P.intl.string(P.t.C7ZRNz)
                }),
                (0, i.jsx)(d.DK, { children: P.intl.string(P.t.A6MwXF) }),
                this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Dx, {
                    className: O.marginBottom8,
                    children: P.intl.string(P.t.csrAMD)
                }),
                (0, i.jsx)(d.DK, { children: P.intl.string(P.t['m1+IBg']) }),
                this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue)
            ]
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (a()(null != e, 'guild template must not be null'), e.state === A.Rj.RESOLVING)
            ? (0, i.jsx)(d.ZP, {
                  className: L.authBox,
                  children: (0, i.jsx)(p.Z, { guildTemplate: e })
              })
            : (0, i.jsx)(k, { guildTemplate: e });
    }
    renderContinue() {
        return (0, i.jsxs)(d.ZP, {
            children: [(0, i.jsx)(d.Dx, { children: P.intl.string(P.t.fOc4go) }), this.renderButton(P.intl.string(P.t.fIv16O), this.handleContinue)]
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: r, location: s } = this.props;
        if (null == e) return this.renderSpinner(P.intl.string(P.t.ZTNur6));
        if (t === Z.kEZ.OPEN) return this.renderAppOpened();
        if (t === Z.kEZ.OPENING) return this.renderSpinner(P.intl.string(P.t['Z+hCVV']));
        switch (e.state) {
            case A.Rj.RESOLVING:
                return this.renderSpinner(P.intl.string(P.t['Z+hCVV']));
            case A.Rj.RESOLVED:
                if (n || !R.KO) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, i.jsx)(C.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: s
                    });
                else
                    return (0, i.jsx)(T.Z, {
                        guildTemplate: e,
                        transitionTo: r,
                        location: s,
                        onRegister: () => {
                            (0, x.c)(S.M5.ORGANIC_REGISTERED_GUILD_TEMPLATE), E.Z.flowStart(j.MK.ORGANIC_GUILD_TEMPLATES, j.EW.NUF_STARTED);
                        }
                    });
            case A.Rj.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleContinue'),
            (i = () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
function D(e) {
    let t = {
        guildTemplate: (0, c.e7)([h.Z], () => h.Z.getGuildTemplate(e.code)),
        nativeAppState: (0, c.e7)([u.Z], () => u.Z.getState(e.code)),
        authenticated: (0, c.e7)([I.default], () => I.default.isAuthenticated()),
        defaultRoute: (0, c.e7)([N.Z], () => N.Z.defaultRoute)
    };
    return (0, i.jsx)(y, {
        ...e,
        ...t
    });
}
function k(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: r } = (0, g.Z)(t, !1);
    E.Z.flowStep(j.MK.ORGANIC_GUILD_TEMPLATES, j.X2.GUILD_CREATE);
    let s = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Dx, {
                className: L.header,
                children: P.intl.string(P.t.UNFvtL)
            }),
            n,
            (0, i.jsx)(d.zx, {
                className: L.createButton,
                onClick: r,
                children: P.intl.string(P.t.xr59t7)
            })
        ]
    });
    return (0, i.jsx)(b.Z, {
        className: L.authBox,
        children: () => [
            (0, i.jsx)(m.Z, { guildTemplate: t }, 'template'),
            (0, i.jsx)(
                'div',
                {
                    className: L.formContainer,
                    children: s
                },
                'contents'
            )
        ]
    });
}
