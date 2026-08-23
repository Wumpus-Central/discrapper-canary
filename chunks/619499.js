n.d(t, { A: () => C });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(36525),
    a = n(56348),
    o = n(207803),
    u = n(836602),
    d = n(624826),
    c = n(691540),
    g = n(857250),
    m = n(97483),
    A = n(375708);
function h() {
    (0, c.P0)((0, g.o)(A.intl.string(A.t["84MExs"]), m.Ck.FAILURE));
}
var E = n(159001);
function S() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: n,
        } = (0, s.cf)([u.A], () => ({
            selectedGuildId: u.A.selectedGuildId,
            canSubmit: u.A.canSubmit(),
            errors: u.A.getErrors(u.A.selectedGuildId),
        })),
        [h, S] = l.useState(!1),
        p = l.useMemo(
            () =>
                n?.guild_tag !== void 0 && n.guild_tag.length > 0
                    ? n.guild_tag[0]
                    : Object.keys(n ?? {}).length > 0
                      ? A.intl.string(A.t.s35OuK)
                      : null,
            [n],
        ),
        x = l.useCallback(async () => {
            S(!0);
            let t = u.A.getPendingChanges(e),
                n = (0, a.C5)(t),
                i = (0, a.yX)(t, e),
                l = !0;
            if (Object.keys(n).length > 0) {
                let i = await (0, E.GL)(e, n);
                if (((l = l && (i?.ok ?? !1)), i?.ok)) {
                    let e = i.body;
                    void 0 !== t.pendingAvatar &&
                        (0, d.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: n.avatarId,
                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                        }),
                        (0, E.go)();
                }
            }
            if (Object.keys(i).length > 0) {
                let { bannerOriginalMd5: t, ...n } = i,
                    s = await (0, o.gi)(n, e, t);
                (l = l && (s?.ok ?? !1)),
                    s?.ok ? (0, E.RE)() : (0, c.P0)((0, g.o)(A.intl.string(A.t.s35OuK), m.Ck.FAILURE));
            }
            l && (0, E.x8)(), S(!1);
        }, [e]),
        T = l.useCallback(() => {
            (0, E.IM)();
        }, []);
    return (0, i.jsx)(r.A, { submitting: h, onSave: x, onReset: T, disabled: !t, errorMessage: p ?? void 0 });
}
var p = n(631670),
    x = n(933725),
    T = n(885386),
    f = n(774914);
function I() {
    let { canSubmit: e, errors: t } = (0, s.cf)([u.A], () => ({ canSubmit: u.A.canSubmit(), errors: u.A.getErrors() })),
        [n, c] = l.useState(!1),
        g = l.useMemo(() => (Object.keys(t ?? {}).length > 0 ? A.intl.string(A.t["84MExs"]) : null), [t]),
        m = l.useCallback(async () => {
            c(!0);
            let e = u.A.getPendingChanges(),
                t = (0, a.Sk)(e),
                n = (0, a.yX)(e),
                i = (0, a.yg)(e),
                l = !0;
            if (Object.keys(t).length > 0) {
                let n = await (0, p._L)(t);
                if (((l = l && (n?.ok ?? !1)), n?.ok)) {
                    let i = n.body;
                    void 0 !== e.pendingAvatar &&
                        (0, d.t)({
                            avatarHash: i.avatar,
                            avatarId: t.avatarId,
                            avatarAssetOrigin: e.pendingAvatar?.assetOrigin,
                        }),
                        (0, p.pZ)();
                } else n?.body?.username != null && (0, f.E)();
            }
            if (Object.keys(n).length > 0) {
                let { bannerOriginalMd5: e, ...t } = n,
                    i = await (0, o.gi)(t, void 0, e);
                (l = l && (i?.ok ?? !1)), i?.ok ? (0, o.RE)() : h();
            }
            if (void 0 !== e.pendingLegacyUsernameDisabled)
                try {
                    await T.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, p._e)();
                } catch {
                    h(), (l = !1);
                }
            if (Object.keys(i).length > 0) {
                let { primaryGuildId: e } = i;
                if (void 0 !== e) {
                    let t = await (0, x.m)(e, null !== e);
                    (l = l && (t?.ok ?? !1)), t?.ok ? (0, p.fw)() : h();
                }
            }
            l && (0, p.x8)(), c(!1);
        }, []),
        E = l.useCallback(() => {
            (0, p.IM)();
        }, []);
    return (0, i.jsx)(r.A, { submitting: n, onSave: m, onReset: E, disabled: !e, errorMessage: g ?? void 0 });
}
var _ = n(507553),
    N = n(355097);
function C() {
    return _.A.useField("subsection") === N.Eq.GUILD ? (0, i.jsx)(S, {}) : (0, i.jsx)(I, {});
}
