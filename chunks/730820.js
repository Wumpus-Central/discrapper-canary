n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(921801),
    u = n(778764),
    d = n(314897),
    f = n(325067),
    p = n(594174),
    _ = n(287880),
    m = n(805244),
    h = n(616495),
    g = n(905935),
    E = n(867289),
    b = n(217801),
    y = n(453706),
    O = n(726985);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
class I extends i.PureComponent {
    renderEnabled() {
        let { backupCodes: e, hasTOTPEnabled: t, currentUser: n, togglingSMS: i } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m.Z, {
                    backupCodes: e,
                    currentUser: n,
                    hasTOTPEnabled: t,
                }),
                e.length > 0 &&
                    (0, r.jsxs)(l.Kqy, {
                        gap: 16,
                        children: [(0, r.jsx)(h.Z, { backupCodes: e }), (0, r.jsx)(l.izJ, {})],
                    }),
                t &&
                    (0, r.jsx)(c.F, {
                        setting: O.s6.ACCOUNT_SMS_BACKUP,
                        children: (0, r.jsx)(E.Z, {
                            currentUser: n,
                            togglingSMS: i,
                        }),
                    }),
                (0, r.jsx)(c.F, {
                    setting: O.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, r.jsx)(u.Z, {}),
                }),
            ],
        });
    }
    renderDisabled() {
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(g.Z, {}), (0, r.jsx)(u.Z, {})],
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return _.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, r.jsx)(y.Z, {})
            : (0, r.jsx)(b.Z, {});
    }
}
function T(e) {
    let t = (0, s.e7)([p.default], () => p.default.getCurrentUser());
    o()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, s.cj)([f.Z, d.default], () => ({
        togglingSMS: f.Z.togglingSMS,
        hasTOTPEnabled: d.default.hasTOTPEnabled(),
    }));
    return (0, r.jsx)(I, S({ currentUser: t }, n, e));
}
