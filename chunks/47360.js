n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(36525),
    r = n(56348),
    o = n(207803),
    d = n(836602),
    u = n(624826),
    c = n(691540),
    g = n(857250),
    _ = n(97483),
    m = n(985018);
function h() {
    (0, c.P0)((0, g.o)(m.intl.string(m.t["84MExs"]), _.Ck.FAILURE));
}
var A = n(159001);
function p() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: n,
        } = (0, s.cf)([d.A], () => ({
            selectedGuildId: d.A.selectedGuildId,
            canSubmit: d.A.canSubmit(),
            errors: d.A.getErrors(d.A.selectedGuildId),
        })),
        [h, p] = l.useState(!1),
        E = l.useMemo(
            () =>
                n?.guild_tag !== void 0 && n.guild_tag.length > 0
                    ? n.guild_tag[0]
                    : Object.keys(n ?? {}).length > 0
                      ? m.intl.string(m.t.s35OuK)
                      : null,
            [n],
        ),
        T = l.useCallback(async () => {
            p(!0);
            let t = d.A.getPendingChanges(e),
                n = (0, r.C5)(t),
                i = (0, r.yX)(t, e),
                l = !0;
            if (Object.keys(n).length > 0) {
                let i = await (0, A.GL)(e, n);
                if (((l = l && (i?.ok ?? !1)), i?.ok)) {
                    let e = i.body;
                    void 0 !== t.pendingAvatar &&
                        (0, u.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: n.avatarId,
                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                        }),
                        (0, A.go)();
                }
            }
            if (Object.keys(i).length > 0) {
                let t = await (0, o.gi)(i, e);
                (l = l && (t?.ok ?? !1)),
                    t?.ok ? (0, A.RE)() : (0, c.P0)((0, g.o)(m.intl.string(m.t.s35OuK), _.Ck.FAILURE));
            }
            l && (0, A.x8)(), p(!1);
        }, [e]),
        S = l.useCallback(() => {
            (0, A.IM)();
        }, []);
    return (0, i.jsx)(a.A, { submitting: h, onSave: T, onReset: S, disabled: !t, errorMessage: E ?? void 0 });
}
var E = n(631670),
    T = n(933725),
    S = n(253932),
    x = n(828578);
function f() {
    let { canSubmit: e, errors: t } = (0, s.cf)([d.A], () => ({ canSubmit: d.A.canSubmit(), errors: d.A.getErrors() })),
        [n, c] = l.useState(!1),
        g = l.useMemo(() => (Object.keys(t ?? {}).length > 0 ? m.intl.string(m.t["84MExs"]) : null), [t]),
        _ = l.useCallback(async () => {
            c(!0);
            let e = d.A.getPendingChanges(),
                t = (0, r.Sk)(e),
                n = (0, r.yX)(e),
                i = (0, r.yg)(e),
                l = !0;
            if (Object.keys(t).length > 0) {
                let n = await (0, E._L)(t);
                if (((l = l && (n?.ok ?? !1)), n?.ok)) {
                    let i = n.body;
                    void 0 !== e.pendingAvatar &&
                        (0, u.t)({
                            avatarHash: i.avatar,
                            avatarId: t.avatarId,
                            avatarAssetOrigin: e.pendingAvatar?.assetOrigin,
                        }),
                        (0, E.pZ)();
                } else n?.body?.username != null && (0, x.E)();
            }
            if (Object.keys(n).length > 0) {
                let e = await (0, o.gi)(n);
                (l = l && (e?.ok ?? !1)), e?.ok ? (0, o.RE)() : h();
            }
            if (void 0 !== e.pendingLegacyUsernameDisabled)
                try {
                    await S.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, E._e)();
                } catch {
                    h(), (l = !1);
                }
            if (Object.keys(i).length > 0) {
                let { primaryGuildId: e } = i;
                if (void 0 !== e) {
                    let t = await (0, T.m)(e, null !== e);
                    (l = l && (t?.ok ?? !1)), t?.ok ? (0, E.fw)() : h();
                }
            }
            l && (0, E.x8)(), c(!1);
        }, []),
        A = l.useCallback(() => {
            (0, E.IM)();
        }, []);
    return (0, i.jsx)(a.A, { submitting: n, onSave: _, onReset: A, disabled: !e, errorMessage: g ?? void 0 });
}
var b = n(507553),
    N = n(355097);
function C() {
    return b.A.useField("subsection") === N.Eq.GUILD ? (0, i.jsx)(p, {}) : (0, i.jsx)(f, {});
}
