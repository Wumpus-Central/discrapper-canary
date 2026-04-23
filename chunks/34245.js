n.d(t, { A: () => A });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(477782),
    o = n(50268),
    c = n(486503),
    u = n(950191),
    d = n(253932),
    m = n(957565),
    f = n(652215),
    x = n(985018);
function A(e) {
    let { user: t, guildId: n, onSuccess: i } = e,
        A = (0, u.Ay)(t.id, n ?? void 0),
        g = d.Q_.useSetting(),
        { tidaWebformEnabled: p } = c.A.useExperiment({ location: "useCopyUserInfoItem" }, { autoTrackExposure: !1 }),
        E = (0, o.A)({ id: t.id, label: x.intl.string(x.t["/AXYnE"]), onSuccess: i }),
        h = r.useMemo(() => (null == A ? null : A.getBannerURL({ canAnimate: !0, size: f.XAf })), [A]),
        N = r.useCallback(() => {
            (0, m.C)(t.id), i?.();
        }, [t.id, i]),
        v = r.useCallback(() => {
            let e = t.getAvatarURL(n, f.XAf, !0);
            a()(null != e, "cannot copy null avatar URL"), (0, m.C)(e), i?.();
        }, [t, n, i]),
        R = r.useCallback(() => {
            a()(null != h, "cannot copy null banner URL"), (0, m.C)(h), i?.();
        }, [h, i]);
    return !__OVERLAY__ && g && m.p5 && null != t.id
        ? p
            ? (0, l.jsxs)(s.Dr, {
                  id: "copy-user-info",
                  label: x.intl.string(x.t.QvQeLv),
                  children: [
                      (0, l.jsx)(s.Dr, { id: "copy-user-id", label: x.intl.string(x.t["/AXYnE"]), action: N }),
                      (null != t.avatar || t.hasAvatarForGuild(n)) &&
                          (0, l.jsx)(s.Dr, {
                              id: "copy-user-avatar-link",
                              label: x.intl.string(x.t.gERDvM),
                              action: v,
                          }),
                      null != h &&
                          (0, l.jsx)(s.Dr, {
                              id: "copy-user-banner-link",
                              label: x.intl.string(x.t.hsNv0R),
                              action: R,
                          }),
                  ],
              })
            : E
        : null;
}
