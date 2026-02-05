n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(36525),
    l = n(587600),
    o = n(207803),
    c = n(624826),
    d = n(354694),
    u = n(159001),
    _ = n(833336),
    m = n(985018);
function A() {
    let e = (0, r.bG)([_.A], () => _.A.getIsSubmitDisabled()),
        t = (0, r.bG)([_.A], () => _.A.getGuild()),
        n = (0, r.bG)([_.A], () => _.A.getErrors()),
        [A, g] = s.useState(!1),
        E = s.useMemo(
            () =>
                n?.message != null
                    ? n?.message
                    : n?.guild_tag !== void 0 && n.guild_tag.length > 0
                      ? n.guild_tag[0]
                      : Object.keys(n ?? {}).length > 0
                        ? m.intl.string(m.t.s35OuK)
                        : null,
            [n],
        ),
        h = s.useCallback(async () => {
            g(!0);
            let e = _.A.getAllPending(),
                n = (0, l.C5)(e),
                i = (0, l.yX)(e),
                s = !0;
            if (Object.keys(n).length > 0) {
                let i = await (0, u.GL)(t?.id, n);
                if (((s = s && (i?.ok ?? !1)), i?.ok)) {
                    let t = i.body;
                    void 0 !== e.pendingAvatar &&
                        (0, c.t)({
                            isGuildProfile: !0,
                            avatarHash: t.avatar,
                            avatarId: n.avatarId,
                            avatarAssetOrigin: e.pendingAvatar?.assetOrigin,
                        }),
                        (0, u.go)();
                }
            }
            if (Object.keys(i).length > 0) {
                let e = await (0, o.gi)(i, t?.id);
                (s = s && (e?.ok ?? !1)), e?.ok ? (0, u.RE)() : (0, d.N)();
            }
            s && (0, u.x8)(), g(!1);
        }, [t?.id]),
        p = s.useCallback(() => {
            (0, u.IM)();
        }, []);
    return (0, i.jsx)(a.A, { submitting: A, onSave: h, onReset: p, disabled: e, errorMessage: E ?? void 0 });
}
