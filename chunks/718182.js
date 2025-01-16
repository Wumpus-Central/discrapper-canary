var i,
    r,
    s,
    l,
    o = n(200651),
    a = n(192379),
    c = n(525654),
    d = n.n(c),
    u = n(442837),
    h = n(893776),
    g = n(129293),
    m = n(388905),
    f = n(108427),
    p = n(314897),
    x = n(981631),
    _ = n(388032),
    E = n(232186);
u.ZP.initialize();
class I extends (l = a.PureComponent) {
    componentDidMount() {
        let e = (0, g.Z)(this.props.location);
        null != e && h.Z.authorizeIPAddress(e), (0, f.e)('authorize_ip');
    }
    renderLoginButton() {
        if ('Android' === d().os.family || 'iOS' === d().os.family) return null;
        let { transitionTo: e } = this.props;
        return (0, o.jsx)(m.zx, {
            onClick: () => e(x.Z5c.LOGIN),
            children: _.intl.string(_.t.dKhVQE)
        });
    }
    renderFailed() {
        return (0, o.jsxs)(m.ZP, {
            children: [
                (0, o.jsx)('img', {
                    alt: '',
                    src: n(262467),
                    className: E.marginBottom20
                }),
                (0, o.jsx)(m.Dx, {
                    className: E.marginBottom8,
                    children: _.intl.string(_.t['f/54a2'])
                }),
                (0, o.jsx)(m.DK, {
                    className: E.marginBottom40,
                    children: _.intl.string(_.t.i3ehMj)
                }),
                this.renderLoginButton()
            ]
        });
    }
    renderSucceeded() {
        return (0, o.jsxs)(m.ZP, {
            children: [
                (0, o.jsx)('img', {
                    alt: '',
                    src: n(640356),
                    className: E.marginBottom20
                }),
                (0, o.jsx)(m.Dx, {
                    className: E.marginBottom8,
                    children: _.intl.string(_.t.iG0SlJ)
                }),
                (0, o.jsx)(m.DK, {
                    className: E.marginBottom40,
                    children: _.intl.string(_.t['Elv+qq'])
                }),
                this.renderLoginButton()
            ]
        });
    }
    renderDefault() {
        return (0, o.jsxs)(m.ZP, {
            children: [(0, o.jsx)(m.Hh, {}), (0, o.jsx)(m.Dx, { children: _.intl.string(_.t['9exy+f']) })]
        });
    }
    render() {
        let { verifyFailed: e, verifySucceeded: t } = this.props;
        return e ? this.renderFailed() : t ? this.renderSucceeded() : this.renderDefault();
    }
}
(i = I),
    (r = 'defaultProps'),
    (s = { transitionTo: (e) => n.g.location.assign(e) }),
    r in i
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = u.ZP.connectStores([p.default], () => ({
        verifyFailed: p.default.didVerifyFail(),
        verifySucceeded: p.default.didVerifySucceed()
    }))(I));
