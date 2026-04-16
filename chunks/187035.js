"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    d = n(397927),
    u = n(854378),
    h = n(10088),
    _ = n(122906),
    p = n(225858),
    m = n(121623),
    g = n(895600),
    A = n(768397),
    f = n(942614),
    E = n(210714),
    x = n(894778),
    I = n(961350),
    N = n(650048),
    v = n(877062),
    C = n(129851),
    T = n(538796),
    j = n(229),
    S = n(652215),
    y = n(401755),
    b = n(771016),
    R = n(315290),
    O = n(396574),
    L = n(985018),
    w = n(94654),
    k = n(818050);
c.Ay.initialize();
class B extends s.PureComponent {
    componentDidMount() {
        (0, E.d)("guildTemplate"),
            O.VP || v.A.launch("discord://" + S.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && m.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return O.VP
            ? (0, i.jsx)("div", {
                  className: k.eT,
                  children: (0, i.jsx)(d.Button, { text: e, fullWidth: !0, onClick: t }),
              })
            : (0, i.jsx)(u.KE, { className: k.eT });
    }
    renderSpinner(e) {
        return (0, i.jsxs)(u.Ay, { children: [(0, i.jsx)(u.hE, { children: e }), (0, i.jsx)(u.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, i.jsxs)(u.Ay, {
            children: [
                (0, i.jsx)(u.hE, { className: l()(k.Ot, k.QB), children: L.intl.string(L.t.C7ZRNw) }),
                (0, i.jsx)(u.tK, { children: L.intl.string(L.t.A6MwXE) }),
                this.renderButton(L.intl.string(L.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(u.Ay, {
            children: [
                (0, i.jsx)(u.hE, { className: k.QB, children: L.intl.string(L.t.csrAMJ) }),
                (0, i.jsx)(u.tK, { children: L.intl.string(L.t["m1+IBn"]) }),
                this.renderButton(L.intl.string(L.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, "guild template must not be null"), e.state === y.QB.RESOLVING)
            ? (0, i.jsx)(u.Ay, { className: w.sL, children: (0, i.jsx)(A.A, { guildTemplate: e }) })
            : (0, i.jsx)(P, { guildTemplate: e });
    }
    renderContinue() {
        return (0, i.jsxs)(u.Ay, {
            children: [
                (0, i.jsx)(u.hE, { children: L.intl.string(L.t.fOc4gn) }),
                this.renderButton(L.intl.string(L.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: s, location: r } = this.props;
        if (null == e) return this.renderSpinner(L.intl.string(L.t.ZTNur7));
        if (t === S.fAW.OPEN) return this.renderAppOpened();
        if (t === S.fAW.OPENING) return this.renderSpinner(L.intl.string(L.t["Z+hCVU"]));
        switch (e.state) {
            case y.QB.RESOLVING:
                return this.renderSpinner(L.intl.string(L.t["Z+hCVU"]));
            case y.QB.RESOLVED:
                if (n || !O.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, i.jsx)(C.A, { guildTemplate: e, transitionTo: s, location: r });
                return (0, i.jsx)(j.A, {
                    guildTemplate: e,
                    transitionTo: s,
                    location: r,
                    onRegister: () => {
                        (0, f.C)(b.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            x.A.flowStart(R.do.ORGANIC_GUILD_TEMPLATES, R.ju.NUF_STARTED);
                    },
                });
            case y.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function D(e) {
    let t = {
        guildTemplate: (0, c.bG)([_.A], () => _.A.getGuildTemplate(e.code)),
        nativeAppState: (0, c.bG)([h.A], () => h.A.getState(e.code)),
        authenticated: (0, c.bG)([I.default], () => I.default.isAuthenticated()),
        defaultRoute: (0, c.bG)([N.A], () => N.A.defaultRoute),
    };
    return (0, i.jsx)(B, { ...e, ...t });
}
function P(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: s } = (0, p.A)(t, !1);
    x.A.flowStep(R.do.ORGANIC_GUILD_TEMPLATES, R.jC.GUILD_CREATE);
    let r = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.hE, { className: w.wx, children: L.intl.string(L.t.UNFvtM) }),
            n,
            (0, i.jsx)("div", {
                className: w.Tf,
                children: (0, i.jsx)(d.Button, { text: L.intl.string(L.t.xr59t7), fullWidth: !0, onClick: s }),
            }),
        ],
    });
    return (0, i.jsx)(T.A, {
        className: w.sL,
        children: () => [
            (0, i.jsx)(g.A, { guildTemplate: t }, "template"),
            (0, i.jsx)("div", { className: w.KJ, children: r }, "contents"),
        ],
    });
}
