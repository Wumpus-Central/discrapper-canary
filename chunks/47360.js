i.d(t, { A: () => C });
var n = i(627968),
    l = i(64700),
    s = i(17928),
    r = i(36525),
    a = i(56348),
    o = i(207803),
    u = i(836602),
    d = i(624826),
    c = i(691540),
    g = i(857250),
    m = i(97483),
    A = i(985018);
function h() {
    (0, c.P0)((0, g.o)(A.intl.string(A.t["84MExs"]), m.Ck.FAILURE));
}
var E = i(159001);
function T() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: i,
        } = (0, s.cf)([u.A], () => ({
            selectedGuildId: u.A.selectedGuildId,
            canSubmit: u.A.canSubmit(),
            errors: u.A.getErrors(u.A.selectedGuildId),
        })),
        [h, T] = l.useState(!1),
        S = l.useMemo(
            () =>
                i?.guild_tag !== void 0 && i.guild_tag.length > 0
                    ? i.guild_tag[0]
                    : Object.keys(i ?? {}).length > 0
                      ? A.intl.string(A.t.s35OuK)
                      : null,
            [i],
        ),
        x = l.useCallback(async () => {
            T(!0);
            let t = u.A.getPendingChanges(e),
                i = (0, a.C5)(t),
                n = (0, a.yX)(t, e),
                l = !0;
            if (Object.keys(i).length > 0) {
                let n = await (0, E.GL)(e, i);
                if (((l = l && (n?.ok ?? !1)), n?.ok)) {
                    let e = n.body;
                    void 0 !== t.pendingAvatar &&
                        (0, d.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: i.avatarId,
                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                        }),
                        (0, E.go)();
                }
            }
            if (Object.keys(n).length > 0) {
                let t = await (0, o.gi)(n, e);
                (l = l && (t?.ok ?? !1)),
                    t?.ok ? (0, E.RE)() : (0, c.P0)((0, g.o)(A.intl.string(A.t.s35OuK), m.Ck.FAILURE));
            }
            l && (0, E.x8)(), T(!1);
        }, [e]),
        p = l.useCallback(() => {
            (0, E.IM)();
        }, []);
    return (0, n.jsx)(r.A, { submitting: h, onSave: x, onReset: p, disabled: !t, errorMessage: S ?? void 0 });
}
var S = i(631670),
    x = i(933725),
    p = i(253932),
    N = i(828578);
function _() {
    let { canSubmit: e, errors: t } = (0, s.cf)([u.A], () => ({ canSubmit: u.A.canSubmit(), errors: u.A.getErrors() })),
        [i, c] = l.useState(!1),
        g = l.useMemo(() => (Object.keys(t ?? {}).length > 0 ? A.intl.string(A.t["84MExs"]) : null), [t]),
        m = l.useCallback(async () => {
            c(!0);
            let e = u.A.getPendingChanges(),
                t = (0, a.Sk)(e),
                i = (0, a.yX)(e),
                n = (0, a.yg)(e),
                l = !0;
            if (Object.keys(t).length > 0) {
                let i = await (0, S._L)(t);
                if (((l = l && (i?.ok ?? !1)), i?.ok)) {
                    let n = i.body;
                    void 0 !== e.pendingAvatar &&
                        (0, d.t)({
                            avatarHash: n.avatar,
                            avatarId: t.avatarId,
                            avatarAssetOrigin: e.pendingAvatar?.assetOrigin,
                        }),
                        (0, S.pZ)();
                } else i?.body?.username != null && (0, N.E)();
            }
            if (Object.keys(i).length > 0) {
                let e = await (0, o.gi)(i);
                (l = l && (e?.ok ?? !1)), e?.ok ? (0, o.RE)() : h();
            }
            if (void 0 !== e.pendingLegacyUsernameDisabled)
                try {
                    await p.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, S._e)();
                } catch {
                    h(), (l = !1);
                }
            if (Object.keys(n).length > 0) {
                let { primaryGuildId: e } = n;
                if (void 0 !== e) {
                    let t = await (0, x.m)(e, null !== e);
                    (l = l && (t?.ok ?? !1)), t?.ok ? (0, S.fw)() : h();
                }
            }
            l && (0, S.x8)(), c(!1);
        }, []),
        E = l.useCallback(() => {
            (0, S.IM)();
        }, []);
    return (0, n.jsx)(r.A, { submitting: i, onSave: m, onReset: E, disabled: !e, errorMessage: g ?? void 0 });
}
var f = i(507553),
    b = i(355097);
function C() {
    return f.A.useField("subsection") === b.Eq.GUILD ? (0, n.jsx)(T, {}) : (0, n.jsx)(_, {});
}
