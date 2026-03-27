n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(36525),
    r = n(587600),
    o = n(207803),
    d = n(836602),
    c = n(624826),
    u = n(127870),
    m = n(159001),
    _ = n(985018);
function g() {
    let {
            selectedGuildId: e,
            canSubmit: t,
            errors: n,
        } = (0, l.cf)([d.A], () => ({
            selectedGuildId: d.A.selectedGuildId,
            canSubmit: d.A.canSubmit(),
            errors: d.A.getErrors(d.A.selectedGuildId),
        })),
        [g, A] = s.useState(!1),
        x = s.useMemo(
            () =>
                n?.guild_tag !== void 0 && n.guild_tag.length > 0
                    ? n.guild_tag[0]
                    : Object.keys(n ?? {}).length > 0
                      ? _.intl.string(_.t.s35OuK)
                      : null,
            [n],
        ),
        h = s.useCallback(async () => {
            A(!0);
            let t = d.A.getPendingChanges(e),
                n = (0, r.C5)(t),
                i = (0, r.yX)(t, e),
                s = !0;
            if (Object.keys(n).length > 0) {
                let i = await (0, m.GL)(e, n);
                if (((s = s && (i?.ok ?? !1)), i?.ok)) {
                    let e = i.body;
                    void 0 !== t.pendingAvatar &&
                        (0, c.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: n.avatarId,
                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                        }),
                        (0, m.go)();
                }
            }
            if (Object.keys(i).length > 0) {
                let t = await (0, o.gi)(i, e);
                (s = s && (t?.ok ?? !1)), t?.ok ? (0, m.RE)() : (0, u.N)();
            }
            s && (0, m.x8)(), A(!1);
        }, [e]),
        p = s.useCallback(() => {
            (0, m.IM)();
        }, []);
    return (0, i.jsx)(a.A, { submitting: g, onSave: h, onReset: p, disabled: !t, errorMessage: x ?? void 0 });
}
