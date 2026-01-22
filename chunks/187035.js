n.d(t, { A: () => B }), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    u = n(397927),
    d = n(854378),
    h = n(10088),
    f = n(122906),
    p = n(225858),
    g = n(121623),
    m = n(895600),
    A = n(768397),
    x = n(942614),
    _ = n(210714),
    E = n(894778),
    b = n(961350),
    v = n(650048),
    j = n(877062),
    y = n(129851),
    S = n(538796),
    N = n(229),
    O = n(652215),
    I = n(401755),
    T = n(771016),
    C = n(315290),
    R = n(396574),
    w = n(985018),
    P = n(256651),
    L = n(473169);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
c.Ay.initialize();
class D extends i.PureComponent {
    componentDidMount() {
        (0, _.d)("guildTemplate"),
            R.VP || j.A.launch("discord://" + O.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && g.A.resolveGuildTemplate(this.props.code);
    }
    renderButton(e, t) {
        return R.VP
            ? (0, r.jsx)("div", {
                  className: L.eT,
                  children: (0, r.jsx)(u.Button, {
                      text: e,
                      fullWidth: !0,
                      onClick: t,
                  }),
              })
            : (0, r.jsx)(d.KE, { className: L.eT });
    }
    renderSpinner(e) {
        return (0, r.jsxs)(d.Ay, {
            children: [(0, r.jsx)(d.hE, { children: e }), (0, r.jsx)(d.CK, {})],
        });
    }
    renderInvalidGuildTemplate() {
        return (0, r.jsxs)(d.Ay, {
            children: [
                (0, r.jsx)(d._V, {
                    src: n(428721),
                    className: L.QB,
                }),
                (0, r.jsx)(d.hE, {
                    className: l()(L.Ot, L.QB),
                    children: w.intl.string(w.t.C7ZRNw),
                }),
                (0, r.jsx)(d.tK, { children: w.intl.string(w.t.A6MwXE) }),
                this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(d.Ay, {
            children: [
                (0, r.jsx)(d.hE, {
                    className: L.QB,
                    children: w.intl.string(w.t.csrAMJ),
                }),
                (0, r.jsx)(d.tK, { children: w.intl.string(w.t["m1+IBn"]) }),
                this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, "guild template must not be null"), e.state === I.QB.RESOLVING)
            ? (0, r.jsx)(d.Ay, {
                  className: P.sL,
                  children: (0, r.jsx)(A.A, { guildTemplate: e }),
              })
            : (0, r.jsx)(U, { guildTemplate: e });
    }
    renderContinue() {
        return (0, r.jsxs)(d.Ay, {
            children: [
                (0, r.jsx)(d.hE, { children: w.intl.string(w.t.fOc4gn) }),
                this.renderButton(w.intl.string(w.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (null == e) return this.renderSpinner(w.intl.string(w.t.ZTNur7));
        if (t === O.fAW.OPEN) return this.renderAppOpened();
        if (t === O.fAW.OPENING) return this.renderSpinner(w.intl.string(w.t["Z+hCVU"]));
        switch (e.state) {
            case I.QB.RESOLVING:
                return this.renderSpinner(w.intl.string(w.t["Z+hCVU"]));
            case I.QB.RESOLVED:
                if (n || !R.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login)
                    return (0, r.jsx)(y.A, {
                        guildTemplate: e,
                        transitionTo: i,
                        location: s,
                    });
                return (0, r.jsx)(N.A, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: s,
                    onRegister: () => {
                        (0, x.C)(T.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            E.A.flowStart(C.do.ORGANIC_GUILD_TEMPLATES, C.ju.NUF_STARTED);
                    },
                });
            case I.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            k(this, "handleContinue", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            });
    }
}
function B(e) {
    let t = {
        guildTemplate: (0, c.bG)([f.A], () => f.A.getGuildTemplate(e.code)),
        nativeAppState: (0, c.bG)([h.A], () => h.A.getState(e.code)),
        authenticated: (0, c.bG)([b.default], () => b.default.isAuthenticated()),
        defaultRoute: (0, c.bG)([v.A], () => v.A.defaultRoute),
    };
    return (0, r.jsx)(
        D,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        k(e, t, n[t]);
                    });
            }
            return e;
        })({}, e, t),
    );
}
function U(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, p.A)(t, !1);
    E.A.flowStep(C.do.ORGANIC_GUILD_TEMPLATES, C.jC.GUILD_CREATE);
    let s = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.hE, {
                className: P.wx,
                children: w.intl.string(w.t.UNFvtM),
            }),
            n,
            (0, r.jsx)("div", {
                className: P.Tf,
                children: (0, r.jsx)(u.Button, {
                    text: w.intl.string(w.t.xr59t7),
                    fullWidth: !0,
                    onClick: i,
                }),
            }),
        ],
    });
    return (0, r.jsx)(S.A, {
        className: P.sL,
        children: () => [
            (0, r.jsx)(m.A, { guildTemplate: t }, "template"),
            (0, r.jsx)(
                "div",
                {
                    className: P.KJ,
                    children: s,
                },
                "contents",
            ),
        ],
    });
}
