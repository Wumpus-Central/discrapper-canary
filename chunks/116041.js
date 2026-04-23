n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(36525),
    r = n(631670),
    o = n(933725),
    d = n(587600),
    u = n(207803),
    c = n(836602),
    g = n(624826),
    m = n(253932),
    _ = n(127870),
    A = n(828578),
    h = n(985018);
function p() {
    let { canSubmit: e, errors: t } = (0, l.cf)([c.A], () => ({ canSubmit: c.A.canSubmit(), errors: c.A.getErrors() })),
        [n, p] = s.useState(!1),
        x = s.useMemo(() => (Object.keys(t ?? {}).length > 0 ? h.intl.string(h.t["84MExs"]) : null), [t]),
        E = s.useCallback(async () => {
            p(!0);
            let e = c.A.getPendingChanges(),
                t = (0, d.Sk)(e),
                n = (0, d.yX)(e),
                i = (0, d.yg)(e),
                s = !0;
            if (Object.keys(t).length > 0) {
                let n = await (0, r._L)(t);
                if (((s = s && (n?.ok ?? !1)), n?.ok)) {
                    let i = n.body;
                    void 0 !== e.pendingAvatar &&
                        (0, g.t)({
                            avatarHash: i.avatar,
                            avatarId: t.avatarId,
                            avatarAssetOrigin: e.pendingAvatar?.assetOrigin,
                        }),
                        (0, r.pZ)();
                } else n?.body?.username != null && (0, A.E)();
            }
            if (Object.keys(n).length > 0) {
                let e = await (0, u.gi)(n);
                (s = s && (e?.ok ?? !1)), e?.ok ? (0, u.RE)() : (0, _.m)();
            }
            if (void 0 !== e.pendingLegacyUsernameDisabled)
                try {
                    await m.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, r._e)();
                } catch {
                    (0, _.m)(), (s = !1);
                }
            if (Object.keys(i).length > 0) {
                let { primaryGuildId: e } = i;
                if (void 0 !== e) {
                    let t = await (0, o.m)(e, null !== e);
                    (s = s && (t?.ok ?? !1)), t?.ok ? (0, r.fw)() : (0, _.m)();
                }
            }
            s && (0, r.x8)(), p(!1);
        }, []),
        T = s.useCallback(() => {
            (0, r.IM)();
        }, []);
    return (0, i.jsx)(a.A, { submitting: n, onSave: E, onReset: T, disabled: !e, errorMessage: x ?? void 0 });
}
