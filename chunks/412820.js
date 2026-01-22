n.d(t, { A: () => _ }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(36525),
    o = n(587600),
    l = n(207803),
    c = n(624826),
    u = n(354694),
    d = n(159001),
    f = n(833336),
    p = n(985018);
function _() {
    let e = (0, a.bG)([f.A], () => f.A.getIsSubmitDisabled()),
        t = (0, a.bG)([f.A], () => f.A.getGuild()),
        n = (0, a.bG)([f.A], () => f.A.getErrors()),
        [_, h] = i.useState(!1),
        m = i.useMemo(
            () =>
                (null == n ? void 0 : n.message) != null
                    ? null == n
                        ? void 0
                        : n.message
                    : (null == n ? void 0 : n.guild_tag) !== void 0 && n.guild_tag.length > 0
                      ? n.guild_tag[0]
                      : Object.keys(null != n ? n : {}).length > 0
                        ? p.intl.string(p.t.s35OuK)
                        : null,
            [n],
        ),
        g = i.useCallback(async () => {
            var e, n, r;
            h(!0);
            let i = f.A.getAllPending(),
                a = (0, o.C5)(i),
                s = (0, o.yX)(i),
                p = !0;
            if (Object.keys(a).length > 0) {
                let r = await (0, d.GL)(null == t ? void 0 : t.id, a);
                if (((p = p && null != (e = null == r ? void 0 : r.ok) && e), null == r ? void 0 : r.ok)) {
                    let e = r.body;
                    void 0 !== i.pendingAvatar &&
                        (0, c.t)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: a.avatarId,
                            avatarAssetOrigin: null == (n = i.pendingAvatar) ? void 0 : n.assetOrigin,
                        }),
                        (0, d.go)();
                }
            }
            if (Object.keys(s).length > 0) {
                let e = await (0, l.gi)(s, null == t ? void 0 : t.id);
                (p = p && null != (r = null == e ? void 0 : e.ok) && r),
                    (null == e ? void 0 : e.ok) ? (0, d.RE)() : (0, u.N)();
            }
            p && (0, d.x8)(), h(!1);
        }, [null == t ? void 0 : t.id]),
        E = i.useCallback(() => {
            (0, d.IM)();
        }, []);
    return (0, r.jsx)(s.A, {
        submitting: _,
        onSave: g,
        onReset: E,
        disabled: e,
        errorMessage: null != m ? m : void 0,
    });
}
