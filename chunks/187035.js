"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    d = n(821609),
    u = n(854378),
    _ = n(10088),
    h = n(122906),
    m = n(225858),
    g = n(121623),
    p = n(895600),
    A = n(768397),
    f = n(942614),
    E = n(210714),
    x = n(894778),
    I = n(961350),
    v = n(650048),
    N = n(877062),
    j = n(129851),
    C = n(538796),
    T = n(229),
    y = n(652215),
    b = n(401755),
    S = n(771016),
    R = n(315290),
    O = n(396574),
    L = n(985018),
    w = n(94654),
    k = n(818050);
c.Ay.initialize();
class G extends s.PureComponent {
    componentDidMount() {
        (0, E.d)("guildTemplate"),
            O.VP || N.A.launch("discord://" + y.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && g.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return O.VP
            ? (0, i.jsx)("div", { className: k.eT, children: (0, i.jsx)(d.$, { text: e, fullWidth: !0, onClick: t }) })
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
        return (o()(null != e, "guild template must not be null"), e.state === b.QB.RESOLVING)
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
        if (t === y.fAW.OPEN) return this.renderAppOpened();
        if (t === y.fAW.OPENING) return this.renderSpinner(L.intl.string(L.t["Z+hCVU"]));
        switch (e.state) {
            case b.QB.RESOLVING:
                return this.renderSpinner(L.intl.string(L.t["Z+hCVU"]));
            case b.QB.RESOLVED:
                if (n || !O.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, i.jsx)(j.A, { guildTemplate: e, transitionTo: s, location: r });
                return (0, i.jsx)(T.A, {
                    guildTemplate: e,
                    transitionTo: s,
                    location: r,
                    onRegister: () => {
                        (0, f.C)(S.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            x.A.flowStart(R.do.ORGANIC_GUILD_TEMPLATES, R.ju.NUF_STARTED);
                    },
                });
            case b.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function D(e) {
    let t = {
        guildTemplate: (0, c.bG)([h.A], () => h.A.getGuildTemplate(e.code)),
        nativeAppState: (0, c.bG)([_.A], () => _.A.getState(e.code)),
        authenticated: (0, c.bG)([I.default], () => I.default.isAuthenticated()),
        defaultRoute: (0, c.bG)([v.A], () => v.A.defaultRoute),
    };
    return (0, i.jsx)(G, { ...e, ...t });
}
function P(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: s } = (0, m.A)(t, !1);
    x.A.flowStep(R.do.ORGANIC_GUILD_TEMPLATES, R.jC.GUILD_CREATE);
    let r = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.hE, { className: w.wx, children: L.intl.string(L.t.UNFvtM) }),
            n,
            (0, i.jsx)("div", {
                className: w.Tf,
                children: (0, i.jsx)(d.$, { text: L.intl.string(L.t.xr59t7), fullWidth: !0, onClick: s }),
            }),
        ],
    });
    return (0, i.jsx)(C.A, {
        className: w.sL,
        children: () => [
            (0, i.jsx)(p.A, { guildTemplate: t }, "template"),
            (0, i.jsx)("div", { className: w.KJ, children: r }, "contents"),
        ],
    });
}
