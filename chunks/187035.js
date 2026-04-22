"use strict";
n.d(t, { A: () => U });
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
    x = n(210714),
    E = n(894778),
    I = n(961350),
    v = n(650048),
    N = n(877062),
    j = n(129851),
    C = n(538796),
    T = n(229),
    b = n(652215),
    y = n(401755),
    S = n(771016),
    R = n(315290),
    w = n(396574),
    O = n(985018),
    L = n(171390),
    k = n(373378);
c.Ay.initialize();
class G extends s.PureComponent {
    componentDidMount() {
        (0, x.d)("guildTemplate"),
            w.VP || N.A.launch("discord://" + b.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && g.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return w.VP
            ? (0, i.jsx)("div", { className: k.eT, children: (0, i.jsx)(d.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, i.jsx)(u.KE, { className: k.eT });
    }
    renderSpinner(e) {
        return (0, i.jsxs)(u.Ay, { children: [(0, i.jsx)(u.hE, { children: e }), (0, i.jsx)(u.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, i.jsxs)(u.Ay, {
            children: [
                (0, i.jsx)(u.hE, { className: l()(k.Ot, k.QB), children: O.intl.string(O.t.C7ZRNw) }),
                (0, i.jsx)(u.tK, { children: O.intl.string(O.t.A6MwXE) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(u.Ay, {
            children: [
                (0, i.jsx)(u.hE, { className: k.QB, children: O.intl.string(O.t.csrAMJ) }),
                (0, i.jsx)(u.tK, { children: O.intl.string(O.t["m1+IBn"]) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (o()(null != e, "guild template must not be null"), e.state === y.QB.RESOLVING)
            ? (0, i.jsx)(u.Ay, { className: L.sL, children: (0, i.jsx)(A.A, { guildTemplate: e }) })
            : (0, i.jsx)(P, { guildTemplate: e });
    }
    renderContinue() {
        return (0, i.jsxs)(u.Ay, {
            children: [
                (0, i.jsx)(u.hE, { children: O.intl.string(O.t.fOc4gn) }),
                this.renderButton(O.intl.string(O.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: s, location: r } = this.props;
        if (null == e) return this.renderSpinner(O.intl.string(O.t.ZTNur7));
        if (t === b.fAW.OPEN) return this.renderAppOpened();
        if (t === b.fAW.OPENING) return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
        switch (e.state) {
            case y.QB.RESOLVING:
                return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
            case y.QB.RESOLVED:
                if (n || !w.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, i.jsx)(j.A, { guildTemplate: e, transitionTo: s, location: r });
                return (0, i.jsx)(T.A, {
                    guildTemplate: e,
                    transitionTo: s,
                    location: r,
                    onRegister: () => {
                        (0, f.C)(S.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            E.A.flowStart(R.do.ORGANIC_GUILD_TEMPLATES, R.ju.NUF_STARTED);
                    },
                });
            case y.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function U(e) {
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
    E.A.flowStep(R.do.ORGANIC_GUILD_TEMPLATES, R.jC.GUILD_CREATE);
    let r = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.hE, { className: L.wx, children: O.intl.string(O.t.UNFvtM) }),
            n,
            (0, i.jsx)("div", {
                className: L.Tf,
                children: (0, i.jsx)(d.$, { text: O.intl.string(O.t.xr59t7), fullWidth: !0, onClick: s }),
            }),
        ],
    });
    return (0, i.jsx)(C.A, {
        className: L.sL,
        children: () => [
            (0, i.jsx)(p.A, { guildTemplate: t }, "template"),
            (0, i.jsx)("div", { className: L.KJ, children: r }, "contents"),
        ],
    });
}
