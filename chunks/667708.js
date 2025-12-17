n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(299206),
    c = n(796762),
    u = n(687158),
    d = n(695346),
    f = n(768581),
    p = n(572004),
    _ = n(981631),
    m = n(388032);
function h(e) {
    let { user: t, guildId: n, onSuccess: a } = e,
        h = (0, u.ZP)(t.id, null != n ? n : void 0),
        g = d.Sb.useSetting(),
        { tidaWebformEnabled: E } = c.Z.useExperiment({ location: "useCopyUserInfoItem" }, { autoTrackExposure: !1 }),
        b = (0, l.Z)({
            id: t.id,
            label: m.intl.string(m.t["/AXYnE"]),
            onSuccess: a,
        }),
        y = i.useMemo(
            () =>
                null == h
                    ? null
                    : h.getBannerURL({
                          canAnimate: !0,
                          size: _.dGM,
                      }),
            [h],
        ),
        O = i.useCallback(() => {
            (0, p.JG)(t.id), null == a || a();
        }, [t.id, a]),
        v = i.useCallback(() => {
            let e = f.ZP.getUserAvatarURL(t, !0, _.dGM);
            o()(null != e, "cannot copy null avatar URL"), (0, p.JG)(e), null == a || a();
        }, [t, a]),
        S = i.useCallback(() => {
            o()(null != y, "cannot copy null banner URL"), (0, p.JG)(y), null == a || a();
        }, [y, a]);
    return !__OVERLAY__ && g && p.wS && null != t.id
        ? E
            ? (0, r.jsxs)(s.sNh, {
                  id: "copy-user-info",
                  label: m.intl.string(m.t.QvQeLv),
                  children: [
                      (0, r.jsx)(s.sNh, {
                          id: "copy-user-id",
                          label: m.intl.string(m.t["/AXYnE"]),
                          action: O,
                          icon: s.VuL,
                      }),
                      null != t.avatar &&
                          (0, r.jsx)(s.sNh, {
                              id: "copy-user-avatar-link",
                              label: m.intl.string(m.t.gERDvM),
                              action: v,
                          }),
                      null != y &&
                          (0, r.jsx)(s.sNh, {
                              id: "copy-user-banner-link",
                              label: m.intl.string(m.t.hsNv0R),
                              action: S,
                          }),
                  ],
              })
            : b
        : null;
}
