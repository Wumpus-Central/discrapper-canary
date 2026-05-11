i.d(t, { A: () => I });
var n = i(627968),
    s = i(64700),
    l = i(17928),
    r = i(36525),
    a = i(56348),
    o = i(207803),
    u = i(836602),
    d = i(624826),
    c = i(691540),
    g = i(857250),
    m = i(97483),
    A = i(375708);
function h() {
    (0, c.P0)((0, g.o)(A.intl.string(A.t["84MExs"]), m.Ck.FAILURE));
}
var E = i(159001);
function T() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: i,
        } = (0, l.cf)([u.A], () => ({
            selectedGuildId: u.A.selectedGuildId,
            canSubmit: u.A.canSubmit(),
            errors: u.A.getErrors(u.A.selectedGuildId),
        })),
        [h, T] = s.useState(!1),
        x = s.useMemo(
            () =>
                i?.guild_tag !== void 0 && i.guild_tag.length > 0
                    ? i.guild_tag[0]
                    : Object.keys(i ?? {}).length > 0
                      ? A.intl.string(A.t.s35OuK)
                      : null,
            [i],
        ),
        S = s.useCallback(async () => {
            T(!0);
            let t = u.A.getPendingChanges(e),
                i = (0, a.C5)(t),
                n = (0, a.yX)(t, e),
                s = !0;
            if (Object.keys(i).length > 0) {
                let n = await (0, E.GL)(e, i);
                if (((s = s && (n?.ok ?? !1)), n?.ok)) {
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
                let { bannerOriginalMd5: t, ...i } = n,
                    l = await (0, o.gi)(i, e, t);
                (s = s && (l?.ok ?? !1)),
                    l?.ok ? (0, E.RE)() : (0, c.P0)((0, g.o)(A.intl.string(A.t.s35OuK), m.Ck.FAILURE));
            }
            s && (0, E.x8)(), T(!1);
        }, [e]),
        p = s.useCallback(() => {
            (0, E.IM)();
        }, []);
    return (0, n.jsx)(r.A, { submitting: h, onSave: S, onReset: p, disabled: !t, errorMessage: x ?? void 0 });
}
var x = i(631670),
    S = i(933725),
    p = i(885386),
    N = i(774914);
function f() {
    let { canSubmit: e, errors: t } = (0, l.cf)([u.A], () => ({ canSubmit: u.A.canSubmit(), errors: u.A.getErrors() })),
        [i, c] = s.useState(!1),
        g = s.useMemo(() => (Object.keys(t ?? {}).length > 0 ? A.intl.string(A.t["84MExs"]) : null), [t]),
        m = s.useCallback(async () => {
            c(!0);
            let e = u.A.getPendingChanges(),
                t = (0, a.Sk)(e),
                i = (0, a.yX)(e),
                n = (0, a.yg)(e),
                s = !0;
            if (Object.keys(t).length > 0) {
                let i = await (0, x._L)(t);
                if (((s = s && (i?.ok ?? !1)), i?.ok)) {
                    let n = i.body;
                    void 0 !== e.pendingAvatar &&
                        (0, d.t)({
                            avatarHash: n.avatar,
                            avatarId: t.avatarId,
                            avatarAssetOrigin: e.pendingAvatar?.assetOrigin,
                        }),
                        (0, x.pZ)();
                } else i?.body?.username != null && (0, N.E)();
            }
            if (Object.keys(i).length > 0) {
                let { bannerOriginalMd5: e, ...t } = i,
                    n = await (0, o.gi)(t, void 0, e);
                (s = s && (n?.ok ?? !1)), n?.ok ? (0, o.RE)() : h();
            }
            if (void 0 !== e.pendingLegacyUsernameDisabled)
                try {
                    await p.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, x._e)();
                } catch {
                    h(), (s = !1);
                }
            if (Object.keys(n).length > 0) {
                let { primaryGuildId: e } = n;
                if (void 0 !== e) {
                    let t = await (0, S.m)(e, null !== e);
                    (s = s && (t?.ok ?? !1)), t?.ok ? (0, x.fw)() : h();
                }
            }
            s && (0, x.x8)(), c(!1);
        }, []),
        E = s.useCallback(() => {
            (0, x.IM)();
        }, []);
    return (0, n.jsx)(r.A, { submitting: i, onSave: m, onReset: E, disabled: !e, errorMessage: g ?? void 0 });
}
var _ = i(507553),
    C = i(355097);
function I() {
    return _.A.useField("subsection") === C.Eq.GUILD ? (0, n.jsx)(T, {}) : (0, n.jsx)(f, {});
}
