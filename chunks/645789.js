n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(631670),
    o = n(933725),
    c = n(587600),
    d = n(207803),
    u = n(836602),
    p = n(624826),
    _ = n(253932),
    m = n(354694),
    g = n(592074),
    f = n(985018);

function b() {
    let { canSubmit: e, errors: t } = (0, l.cf)([u.A], () => ({
            canSubmit: u.A.canSubmit(),
            errors: u.A.getErrors(),
        })),
        [n, b] = i.useState(!1),
        h = i.useMemo(
            () =>
                (null == t ? void 0 : t.message) != null
                    ? null == t
                        ? void 0
                        : t.message
                    : Object.keys(null != t ? t : {}).length > 0
                      ? f.intl.string(f.t["84MExs"])
                      : null,
            [t],
        ),
        A = i.useCallback(async () => {
            var e, t, n, r, i;
            b(!0);
            let l = u.A.getPendingChanges(),
                s = (0, c.Sk)(l),
                f = (0, c.yX)(l),
                h = (0, c.yg)(l),
                A = !0;
            if (Object.keys(s).length > 0) {
                let r = await (0, a.yu)(s);
                if (((A = A && null != (e = null == r ? void 0 : r.ok) && e), null == r ? void 0 : r.ok)) {
                    let e = r.body;
                    void 0 !== l.pendingAvatar &&
                        (0, p.t)({
                            avatarHash: e.avatar,
                            avatarId: s.avatarId,
                            avatarAssetOrigin: null == (n = l.pendingAvatar) ? void 0 : n.assetOrigin,
                        }),
                        (0, a.pZ)();
                } else (null == r || null == (t = r.body) ? void 0 : t.username) != null && (0, g.E)();
            }
            if (Object.keys(f).length > 0) {
                let e = await (0, d.gi)(f);
                (A = A && null != (r = null == e ? void 0 : e.ok) && r),
                    (null == e ? void 0 : e.ok) ? (0, d.RE)() : (0, m.m)();
            }
            if (void 0 !== l.pendingLegacyUsernameDisabled)
                try {
                    await _.m$.updateSetting(l.pendingLegacyUsernameDisabled), (0, a._e)();
                } catch (e) {
                    (0, m.m)(), (A = !1);
                }
            if (Object.keys(h).length > 0) {
                let { primaryGuildId: e } = h;
                if (void 0 !== e) {
                    let t = await (0, o.m)(e, null !== e);
                    (A = A && null != (i = null == t ? void 0 : t.ok) && i),
                        (null == t ? void 0 : t.ok) ? (0, a.fw)() : (0, m.m)();
                }
            }
            A && (0, a.x8)(), b(!1);
        }, []),
        E = i.useCallback(() => {
            (0, a.IM)();
        }, []);
    return (0, r.jsx)(s.A, {
        submitting: n,
        onSave: A,
        onReset: E,
        disabled: !e,
        errorMessage: null != h ? h : void 0,
    });
}
