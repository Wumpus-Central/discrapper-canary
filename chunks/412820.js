n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(36525),
    r = n(587600),
    o = n(207803),
    d = n(836602),
    u = n(624826),
    c = n(127870),
    g = n(159001),
    m = n(985018);
function _() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: n,
        } = (0, l.cf)([d.A], () => ({
            selectedGuildId: d.A.selectedGuildId,
            canSubmit: d.A.canSubmit(),
            errors: d.A.getErrors(d.A.selectedGuildId),
        })),
        [_, A] = s.useState(!1),
        h = s.useMemo(
            () =>
                n?.guild_tag !== void 0 && n.guild_tag.length > 0
                    ? n.guild_tag[0]
                    : Object.keys(n ?? {}).length > 0
                      ? m.intl.string(m.t.s35OuK)
                      : null,
            [n],
        ),
        p = s.useCallback(async () => {
            A(!0);
            let t = d.A.getPendingChanges(e),
                n = (0, r.C5)(t),
                i = (0, r.yX)(t, e),
                s = !0;
            if (Object.keys(n).length > 0) {
                let i = await (0, g.GL)(e, n);
                if (((s = s && (i?.ok ?? !1)), i?.ok)) {
                    let e = i.body;
                    void 0 !== t.pendingAvatar &&
                        (0, u.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: n.avatarId,
                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                        }),
                        (0, g.go)();
                }
            }
            if (Object.keys(i).length > 0) {
                let t = await (0, o.gi)(i, e);
                (s = s && (t?.ok ?? !1)), t?.ok ? (0, g.RE)() : (0, c.N)();
            }
            s && (0, g.x8)(), A(!1);
        }, [e]),
        x = s.useCallback(() => {
            (0, g.IM)();
        }, []);
    return (0, i.jsx)(a.A, { submitting: _, onSave: p, onReset: x, disabled: !t, errorMessage: h ?? void 0 });
}
