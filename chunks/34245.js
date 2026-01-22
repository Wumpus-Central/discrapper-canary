n.d(t, {
    A: () => m,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(397927),
    l = n(50268),
    c = n(486503),
    u = n(950191),
    d = n(253932),
    f = n(486020),
    p = n(957565),
    _ = n(652215),
    h = n(985018);

function m(e) {
    let { user: t, guildId: n, onSuccess: a } = e,
        m = (0, u.Ay)(t.id, null != n ? n : void 0),
        g = d.Q_.useSetting(),
        { tidaWebformEnabled: E } = c.A.useExperiment(
            {
                location: "useCopyUserInfoItem",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        b = (0, l.A)({
            id: t.id,
            label: h.intl.string(h.t["/AXYnE"]),
            onSuccess: a,
        }),
        y = i.useMemo(
            () =>
                null == m
                    ? null
                    : m.getBannerURL({
                          canAnimate: !0,
                          size: _.XAf,
                      }),
            [m],
        ),
        O = i.useCallback(() => {
            (0, p.C)(t.id), null == a || a();
        }, [t.id, a]),
        A = i.useCallback(() => {
            let e = f.Ay.getUserAvatarURL(t, !0, _.XAf);
            s()(null != e, "cannot copy null avatar URL"), (0, p.C)(e), null == a || a();
        }, [t, a]),
        v = i.useCallback(() => {
            s()(null != y, "cannot copy null banner URL"), (0, p.C)(y), null == a || a();
        }, [y, a]);
    return !__OVERLAY__ && g && p.p5 && null != t.id
        ? E
            ? (0, r.jsxs)(o.Drp, {
                  id: "copy-user-info",
                  label: h.intl.string(h.t.QvQeLv),
                  children: [
                      (0, r.jsx)(o.Drp, {
                          id: "copy-user-id",
                          label: h.intl.string(h.t["/AXYnE"]),
                          action: O,
                          icon: o.L9S,
                      }),
                      null != t.avatar &&
                          (0, r.jsx)(o.Drp, {
                              id: "copy-user-avatar-link",
                              label: h.intl.string(h.t.gERDvM),
                              action: A,
                          }),
                      null != y &&
                          (0, r.jsx)(o.Drp, {
                              id: "copy-user-banner-link",
                              label: h.intl.string(h.t.hsNv0R),
                              action: v,
                          }),
                  ],
              })
            : b
        : null;
}
