n.d(t, { A: () => _ });
var i = n(477900),
    s = n(582128),
    l = n(17928),
    r = n(36525),
    a = n(56348),
    o = n(207803),
    u = n(836602),
    d = n(624826),
    c = n(858899),
    g = n(105292);
function m() {
    (0, c.P0)({ text: g.intl.string(g.t["84MExs"]), variant: "critical" });
}
var A = n(159001);
function E() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: n,
        } = (0, l.cf)([u.A], () => ({
            selectedGuildId: u.A.selectedGuildId,
            canSubmit: u.A.canSubmit(),
            errors: u.A.getErrors(u.A.selectedGuildId),
        })),
        [m, E] = s.useState(!1),
        h = s.useMemo(
            () =>
                n?.guild_tag !== void 0 && n.guild_tag.length > 0
                    ? n.guild_tag[0]
                    : Object.keys(n ?? {}).length > 0
                      ? g.intl.string(g.t.s35OuK)
                      : null,
            [n],
        ),
        x = s.useCallback(async () => {
            E(!0);
            let t = u.A.getPendingChanges(e),
                n = (0, a.C5)(t),
                i = (0, a.yX)(t, e),
                s = !0;
            if (Object.keys(n).length > 0) {
                let i = await (0, A.GL)(e, n);
                if (((s = s && (i?.ok ?? !1)), i?.ok)) {
                    let e = i.body;
                    (void 0 !== t.pendingAvatar &&
                        (0, d.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: n.avatarId,
                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                        }),
                        (0, A.go)());
                }
            }
            if (Object.keys(i).length > 0) {
                let { bannerOriginalMd5: t, ...n } = i,
                    l = await (0, o.gi)(n, e, t);
                ((s = s && (l?.ok ?? !1)),
                    l?.ok ? (0, A.RE)() : (0, c.P0)({ text: g.intl.string(g.t.s35OuK), variant: "critical" }));
            }
            (s && (0, A.x8)(), E(!1));
        }, [e]),
        p = s.useCallback(() => {
            (0, A.IM)();
        }, []);
    return (0, i.jsx)(r.A, { submitting: m, onSave: x, onReset: p, disabled: !t, errorMessage: h ?? void 0 });
}
var h = n(631670),
    x = n(933725),
    p = n(885386),
    S = n(774914);
function T() {
    let { canSubmit: e, errors: t } = (0, l.cf)([u.A], () => ({ canSubmit: u.A.canSubmit(), errors: u.A.getErrors() })),
        [n, c] = s.useState(!1),
        A = s.useMemo(() => (Object.keys(t ?? {}).length > 0 ? g.intl.string(g.t["84MExs"]) : null), [t]),
        E = s.useCallback(async () => {
            c(!0);
            let e = u.A.getPendingChanges(),
                t = (0, a.Sk)(e),
                n = (0, a.yX)(e),
                i = (0, a.yg)(e),
                s = !0;
            if (Object.keys(t).length > 0) {
                let n = await (0, h._L)(t);
                if (((s = s && (n?.ok ?? !1)), n?.ok)) {
                    let i = n.body;
                    (void 0 !== e.pendingAvatar &&
                        (0, d.t)({
                            avatarHash: i.avatar,
                            avatarId: t.avatarId,
                            avatarAssetOrigin: e.pendingAvatar?.assetOrigin,
                        }),
                        (0, h.pZ)());
                } else n?.body?.username != null && (0, S.E)();
            }
            if (Object.keys(n).length > 0) {
                let { bannerOriginalMd5: e, ...t } = n,
                    i = await (0, o.gi)(t, void 0, e);
                ((s = s && (i?.ok ?? !1)), i?.ok ? (0, o.RE)() : m());
            }
            if (void 0 !== e.pendingLegacyUsernameDisabled)
                try {
                    (await p.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, h._e)());
                } catch {
                    (m(), (s = !1));
                }
            if (Object.keys(i).length > 0) {
                let { primaryGuildId: e } = i;
                if (void 0 !== e) {
                    let t = await (0, x.m)(e, null !== e);
                    ((s = s && (t?.ok ?? !1)), t?.ok ? (0, h.fw)() : m());
                }
            }
            (s && (0, h.x8)(), c(!1));
        }, []),
        T = s.useCallback(() => {
            (0, h.IM)();
        }, []);
    return (0, i.jsx)(r.A, { submitting: n, onSave: E, onReset: T, disabled: !e, errorMessage: A ?? void 0 });
}
var f = n(507553),
    I = n(355097);
function _() {
    return f.A.useField("subsection") === I.Eq.GUILD ? (0, i.jsx)(E, {}) : (0, i.jsx)(T, {});
}
