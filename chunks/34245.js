"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(50268),
    u = n(486503),
    c = n(950191),
    d = n(253932),
    _ = n(486020),
    f = n(957565),
    p = n(652215),
    h = n(985018);
function m(e) {
    let { user: t, guildId: n, onSuccess: s } = e,
        m = (0, c.Ay)(t.id, n ?? void 0),
        E = d.Q_.useSetting(),
        { tidaWebformEnabled: g } = u.A.useExperiment({ location: "useCopyUserInfoItem" }, { autoTrackExposure: !1 }),
        A = (0, l.A)({ id: t.id, label: h.intl.string(h.t["/AXYnE"]), onSuccess: s }),
        I = i.useMemo(() => (null == m ? null : m.getBannerURL({ canAnimate: !0, size: p.XAf })), [m]),
        T = i.useCallback(() => {
            (0, f.C)(t.id), s?.();
        }, [t.id, s]),
        S = i.useCallback(() => {
            let e = _.Ay.getUserAvatarURL(t, !0, p.XAf);
            a()(null != e, "cannot copy null avatar URL"), (0, f.C)(e), s?.();
        }, [t, s]),
        y = i.useCallback(() => {
            a()(null != I, "cannot copy null banner URL"), (0, f.C)(I), s?.();
        }, [I, s]);
    return !__OVERLAY__ && E && f.p5 && null != t.id
        ? g
            ? (0, r.jsxs)(o.Drp, {
                  id: "copy-user-info",
                  label: h.intl.string(h.t.QvQeLv),
                  children: [
                      (0, r.jsx)(o.Drp, {
                          id: "copy-user-id",
                          label: h.intl.string(h.t["/AXYnE"]),
                          action: T,
                          leadingAccessory: { type: "icon", icon: o.L9S },
                      }),
                      null != t.avatar &&
                          (0, r.jsx)(o.Drp, {
                              id: "copy-user-avatar-link",
                              label: h.intl.string(h.t.gERDvM),
                              action: S,
                          }),
                      null != I &&
                          (0, r.jsx)(o.Drp, {
                              id: "copy-user-banner-link",
                              label: h.intl.string(h.t.hsNv0R),
                              action: y,
                          }),
                  ],
              })
            : A
        : null;
}
