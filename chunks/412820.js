n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(36525),
    l = n(587600),
    o = n(207803),
    c = n(836602),
    d = n(624826),
    u = n(354694),
    _ = n(159001),
    m = n(985018);
function A() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: n,
        } = (0, r.cf)([c.A], () => ({
            selectedGuildId: c.A.selectedGuildId,
            canSubmit: c.A.canSubmit(),
            errors: c.A.getErrors(c.A.selectedGuildId),
        })),
        [A, g] = s.useState(!1),
        E = s.useMemo(
            () =>
                n?.guild_tag !== void 0 && n.guild_tag.length > 0
                    ? n.guild_tag[0]
                    : Object.keys(n ?? {}).length > 0
                      ? m.intl.string(m.t.s35OuK)
                      : null,
            [n],
        ),
        h = s.useCallback(async () => {
            g(!0);
            let t = c.A.getPendingChanges(e),
                n = (0, l.C5)(t),
                i = (0, l.yX)(t),
                s = !0;
            if (Object.keys(n).length > 0) {
                let i = await (0, _.GL)(e, n);
                if (((s = s && (i?.ok ?? !1)), i?.ok)) {
                    let e = i.body;
                    void 0 !== t.pendingAvatar &&
                        (0, d.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: n.avatarId,
                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                        }),
                        (0, _.go)();
                }
            }
            if (Object.keys(i).length > 0) {
                let t = await (0, o.gi)(i, e);
                (s = s && (t?.ok ?? !1)), t?.ok ? (0, _.RE)() : (0, u.N)();
            }
            s && (0, _.x8)(), g(!1);
        }, [e]),
        p = s.useCallback(() => {
            (0, _.IM)();
        }, []);
    return (0, i.jsx)(a.A, { submitting: A, onSave: h, onReset: p, disabled: !t, errorMessage: E ?? void 0 });
}
