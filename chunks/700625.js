n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(796027),
    s = n(164946),
    l = n(350327),
    c = n(330055),
    u = n(647699),
    d = n(18438),
    f = n(778825),
    _ = n(388032);
function p() {
    let e = (0, a.e7)([f.Z], () => f.Z.getIsSubmitDisabled()),
        t = (0, a.e7)([f.Z], () => f.Z.getGuild()),
        n = (0, a.e7)([f.Z], () => f.Z.getErrors()),
        [p, h] = i.useState(!1),
        m = i.useMemo(
            () =>
                (null == n ? void 0 : n.message) != null
                    ? null == n
                        ? void 0
                        : n.message
                    : (null == n ? void 0 : n.guild_tag) !== void 0 && n.guild_tag.length > 0
                      ? n.guild_tag[0]
                      : Object.keys(null != n ? n : {}).length > 0
                        ? _.intl.string(_.t.s35OuK)
                        : null,
            [n],
        ),
        g = i.useCallback(async () => {
            var e, n, r;
            h(!0);
            let i = f.Z.getAllPending(),
                a = (0, s.Jo)(i),
                o = (0, s.g9)(i),
                _ = !0;
            if (Object.keys(a).length > 0) {
                let r = await (0, d.iq)(null == t ? void 0 : t.id, a);
                if (((_ = _ && null != (e = null == r ? void 0 : r.ok) && e), null == r ? void 0 : r.ok)) {
                    let e = r.body;
                    void 0 !== i.pendingAvatar &&
                        (0, c.Z)({
                            isGuildProfile: !0,
                            avatarHash: e.avatar,
                            avatarId: a.avatarId,
                            avatarAssetOrigin: null == (n = i.pendingAvatar) ? void 0 : n.assetOrigin,
                        }),
                        (0, d.IO)();
                }
            }
            if (Object.keys(o).length > 0) {
                let e = await (0, l.Z)(o, null == t ? void 0 : t.id);
                (_ = _ && null != (r = null == e ? void 0 : e.ok) && r),
                    (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, u.v)();
            }
            _ && (0, d.b9)(), h(!1);
        }, [null == t ? void 0 : t.id]),
        E = i.useCallback(() => {
            (0, d.W3)();
        }, []);
    return (0, r.jsx)(o.Z, {
        submitting: p,
        onSave: g,
        onReset: E,
        disabled: e,
        errorMessage: null != m ? m : void 0,
    });
}
