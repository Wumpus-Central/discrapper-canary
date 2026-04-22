n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(477782),
    o = n(50268),
    c = n(486503),
    u = n(950191),
    d = n(253932),
    m = n(957565),
    f = n(652215),
    x = n(985018);
function A(e) {
    let { user: t, guildId: n, onSuccess: r } = e,
        A = (0, u.Ay)(t.id, n ?? void 0),
        g = d.Q_.useSetting(),
        { tidaWebformEnabled: E } = c.A.useExperiment({ location: "useCopyUserInfoItem" }, { autoTrackExposure: !1 }),
        p = (0, o.A)({ id: t.id, label: x.intl.string(x.t["/AXYnE"]), onSuccess: r }),
        h = i.useMemo(() => (null == A ? null : A.getBannerURL({ canAnimate: !0, size: f.XAf })), [A]),
        N = i.useCallback(() => {
            (0, m.C)(t.id), r?.();
        }, [t.id, r]),
        R = i.useCallback(() => {
            let e = t.getAvatarURL(n, f.XAf, !0);
            a()(null != e, "cannot copy null avatar URL"), (0, m.C)(e), r?.();
        }, [t, n, r]),
        v = i.useCallback(() => {
            a()(null != h, "cannot copy null banner URL"), (0, m.C)(h), r?.();
        }, [h, r]);
    return !__OVERLAY__ && g && m.p5 && null != t.id
        ? E
            ? (0, l.jsxs)(s.Dr, {
                  id: "copy-user-info",
                  label: x.intl.string(x.t.QvQeLv),
                  children: [
                      (0, l.jsx)(s.Dr, { id: "copy-user-id", label: x.intl.string(x.t["/AXYnE"]), action: N }),
                      (null != t.avatar || t.hasAvatarForGuild(n)) &&
                          (0, l.jsx)(s.Dr, {
                              id: "copy-user-avatar-link",
                              label: x.intl.string(x.t.gERDvM),
                              action: R,
                          }),
                      null != h &&
                          (0, l.jsx)(s.Dr, {
                              id: "copy-user-banner-link",
                              label: x.intl.string(x.t.hsNv0R),
                              action: v,
                          }),
                  ],
              })
            : p
        : null;
}
