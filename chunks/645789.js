n.d(t, { A: () => g }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(36525),
    o = n(631670),
    l = n(933725),
    c = n(587600),
    u = n(207803),
    d = n(624826),
    f = n(752319),
    p = n(253932),
    _ = n(354694),
    h = n(592074),
    m = n(985018);
function g() {
    let e = (0, a.bG)([f.A], () => f.A.getIsSubmitDisabled()),
        t = (0, a.bG)([f.A], () => f.A.getErrors()),
        [n, g] = i.useState(!1),
        E = i.useMemo(
            () =>
                (null == t ? void 0 : t.message) != null
                    ? null == t
                        ? void 0
                        : t.message
                    : Object.keys(null != t ? t : {}).length > 0
                      ? m.intl.string(m.t["84MExs"])
                      : null,
            [t],
        ),
        b = i.useCallback(async () => {
            var e, t, n, r, i;
            g(!0);
            let a = f.A.getAllPending(),
                s = (0, c.Sk)(a),
                m = (0, c.yX)(a),
                E = (0, c.yg)(a),
                b = !0;
            if (Object.keys(s).length > 0) {
                let r = await (0, o.yu)(s);
                if (((b = b && null != (e = null == r ? void 0 : r.ok) && e), null == r ? void 0 : r.ok)) {
                    let e = r.body;
                    void 0 !== a.pendingAvatar &&
                        (0, d.t)({
                            avatarHash: e.avatar,
                            avatarId: s.avatarId,
                            avatarAssetOrigin: null == (n = a.pendingAvatar) ? void 0 : n.assetOrigin,
                        }),
                        (0, o.pZ)();
                } else (null == r || null == (t = r.body) ? void 0 : t.username) != null && (0, h.E)();
            }
            if (Object.keys(m).length > 0) {
                let e = await (0, u.gi)(m);
                (b = b && null != (r = null == e ? void 0 : e.ok) && r),
                    (null == e ? void 0 : e.ok) ? (0, u.RE)() : (0, _.m)();
            }
            if (void 0 !== a.pendingLegacyUsernameDisabled)
                try {
                    await p.m$.updateSetting(a.pendingLegacyUsernameDisabled), (0, o._e)();
                } catch (e) {
                    (0, _.m)(), (b = !1);
                }
            if (Object.keys(E).length > 0) {
                let { primaryGuildId: e } = E;
                if (void 0 !== e) {
                    let t = await (0, l.m)(e, null !== e);
                    (b = b && null != (i = null == t ? void 0 : t.ok) && i),
                        (null == t ? void 0 : t.ok) ? (0, o.fw)() : (0, _.m)();
                }
            }
            b && (0, o.x8)(), g(!1);
        }, []),
        y = i.useCallback(() => {
            (0, o.IM)();
        }, []);
    return (0, r.jsx)(s.A, {
        submitting: n,
        onSave: b,
        onReset: y,
        disabled: e,
        errorMessage: null != E ? E : void 0,
    });
}
