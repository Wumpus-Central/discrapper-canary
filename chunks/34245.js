"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(50268),
    u = n(486503),
    c = n(950191),
    d = n(253932),
    _ = n(957565),
    f = n(652215),
    p = n(985018);
function h(e) {
    let { user: t, guildId: n, onSuccess: s } = e,
        h = (0, c.Ay)(t.id, n ?? void 0),
        m = d.Q_.useSetting(),
        { tidaWebformEnabled: E } = u.A.useExperiment({ location: "useCopyUserInfoItem" }, { autoTrackExposure: !1 }),
        g = (0, l.A)({ id: t.id, label: p.intl.string(p.t["/AXYnE"]), onSuccess: s }),
        A = i.useMemo(() => (null == h ? null : h.getBannerURL({ canAnimate: !0, size: f.XAf })), [h]),
        I = i.useCallback(() => {
            (0, _.C)(t.id), s?.();
        }, [t.id, s]),
        T = i.useCallback(() => {
            let e = t.getAvatarURL(n, f.XAf, !0);
            a()(null != e, "cannot copy null avatar URL"), (0, _.C)(e), s?.();
        }, [t, n, s]),
        S = i.useCallback(() => {
            a()(null != A, "cannot copy null banner URL"), (0, _.C)(A), s?.();
        }, [A, s]);
    return !__OVERLAY__ && m && _.p5 && null != t.id
        ? E
            ? (0, r.jsxs)(o.Drp, {
                  id: "copy-user-info",
                  label: p.intl.string(p.t.QvQeLv),
                  children: [
                      (0, r.jsx)(o.Drp, { id: "copy-user-id", label: p.intl.string(p.t["/AXYnE"]), action: I }),
                      (null != t.avatar || t.hasAvatarForGuild(n)) &&
                          (0, r.jsx)(o.Drp, {
                              id: "copy-user-avatar-link",
                              label: p.intl.string(p.t.gERDvM),
                              action: T,
                          }),
                      null != A &&
                          (0, r.jsx)(o.Drp, {
                              id: "copy-user-banner-link",
                              label: p.intl.string(p.t.hsNv0R),
                              action: S,
                          }),
                  ],
              })
            : g
        : null;
}
